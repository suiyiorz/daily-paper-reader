const assert = require('node:assert/strict');

function decodeEntities(value) {
  return String(value || '')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function setupBrowserStub(hash) {
  global.window = {
    location: { hash: hash || '#/' },
    localStorage: {
      getItem: () => null,
      setItem: () => {},
    },
    addEventListener: () => {},
    setTimeout,
    clearTimeout,
    matchMedia: () => ({ matches: false }),
    CSS: {
      escape: (value) => String(value),
    },
  };
  global.document = {
    readyState: 'loading',
    addEventListener: () => {},
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => {
      let text = '';
      return {
        set innerHTML(value) {
          text = decodeEntities(value).replace(/<[^>]*>/g, '');
        },
        get textContent() {
          return text;
        },
        set textContent(value) {
          text = String(value == null ? '' : value);
        },
      };
    },
    body: {
      appendChild: () => {},
      classList: { add: () => {} },
    },
    documentElement: {
      style: { setProperty: () => {} },
    },
  };
}

function loadSidebarForTest(hash) {
  setupBrowserStub(hash);
  delete require.cache[require.resolve('../app/dpr-sidebar.js')];
  return require('../app/dpr-sidebar.js');
}

const sampleSidebar = `
* <a class="dpr-sidebar-root-link" href="#/">首页</a>
* <a class="dpr-sidebar-root-link" href="#/tutorial/README">使用教程</a>

* Conference Papers
  * NEURIPS 2024 <!--dpr-conference:neurips-2024-->
    * rl <!--dpr-conference-topic:neurips-2024:query-rl-->
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/conference/neurips-2024/paper-c" data-sidebar-item="{&quot;title&quot;:&quot;Paper C&quot;,&quot;score&quot;:&quot;9.0&quot;,&quot;tags&quot;:[{&quot;kind&quot;:&quot;query&quot;,&quot;label&quot;:&quot;rl&quot;}]}">Fallback C</a>
  * ICLR 2025 <!--dpr-conference:iclr-2025-->
    * symbolic <!--dpr-conference-topic:iclr-2025:query-symbolic-->
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/conference/iclr-2025/paper-e" data-sidebar-item="{&quot;title&quot;:&quot;Paper E&quot;,&quot;score&quot;:&quot;8.0&quot;,&quot;tags&quot;:[{&quot;kind&quot;:&quot;query&quot;,&quot;label&quot;:&quot;symbolic&quot;}]}">Fallback E</a>

* Daily Papers
  * 2026-06-24 <!--dpr-date:20260624-->
    * 精读区
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/202606/24/paper-a" data-sidebar-item="{&quot;title&quot;:&quot;Paper A&quot;,&quot;score&quot;:&quot;10.0&quot;,&quot;tags&quot;:[{&quot;kind&quot;:&quot;query&quot;,&quot;label&quot;:&quot;rl&quot;}]}">Fallback A</a>
    * 速读区
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/202606/24/paper-b" data-sidebar-item="{&quot;title&quot;:&quot;Paper B&quot;,&quot;score&quot;:&quot;8.0&quot;}">Fallback B</a>
  * 2026-06-23 <!--dpr-date:20260623-->
    * 精读区
      * <a class="dpr-sidebar-item-link dpr-sidebar-item-structured" href="#/202606/23/paper-d" data-sidebar-item="{&quot;title&quot;:&quot;Paper D&quot;,&quot;score&quot;:&quot;9.0&quot;,&quot;tags&quot;:[{&quot;kind&quot;:&quot;query&quot;,&quot;label&quot;:&quot;rl&quot;}]}">Fallback D</a>
`;

function testSidebarNavigationContract() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-b?from=test');
  const tools = sidebar.__test;
  assert.ok(tools, 'dpr-sidebar.js should export test helpers');
  assert.equal(typeof tools.parseSidebar, 'function');

  const model = tools.parseSidebar(sampleSidebar);
  assert.deepEqual(tools.collectPaperHrefsFromModel(model), [
    '#/202606/24/paper-a',
    '#/202606/24/paper-b',
    '#/202606/23/paper-d',
    '#/conference/neurips-2024/paper-c',
    '#/conference/iclr-2025/paper-e',
  ]);
  assert.deepEqual(tools.collectReportHrefsFromModel(model), [
    '#/202606/24/README',
    '#/202606/23/README',
  ]);
  assert.equal(
    tools.findCurrentPaperHrefFromModel(model, '#/202606/24/paper-b?from=test'),
    '#/202606/24/paper-b',
  );
  assert.equal(
    tools.findCurrentReportHrefFromModel(model, '#/202606/24/README'),
    '#/202606/24/README',
  );
}

function testAxisViewsForDailyAndConference() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.buildDailyDateView, 'function');
  assert.equal(typeof tools.buildDailyTagView, 'function');
  assert.equal(typeof tools.buildConferenceConfView, 'function');
  assert.equal(typeof tools.buildConferenceTagView, 'function');

  const dateView = tools.buildDailyDateView(model, '20260623');
  assert.deepEqual(dateView.tabs.map((tab) => tab.label), ['2026-06-24', '2026-06-23']);
  assert.equal(dateView.activeKey, '20260623');
  assert.deepEqual(dateView.groups.map((group) => group.label), ['2026-06-23']);
  assert.deepEqual(dateView.groups[0].papers.map((paper) => paper.title), ['Paper D']);

  const dailyTagView = tools.buildDailyTagView(model, 'rl');
  assert.deepEqual(dailyTagView.tabs.map((tab) => tab.label), ['rl', '未标注']);
  assert.equal(dailyTagView.activeKey, 'rl');
  assert.deepEqual(dailyTagView.groups.map((group) => group.label), ['2026-06-24', '2026-06-23']);
  assert.deepEqual(dailyTagView.groups.map((group) => group.papers.map((paper) => paper.title)), [
    ['Paper A'],
    ['Paper D'],
  ]);

  const confView = tools.buildConferenceConfView(model, 'iclr-2025');
  assert.deepEqual(confView.tabs.map((tab) => tab.label), ['NEURIPS 2024', 'ICLR 2025']);
  assert.equal(confView.activeKey, 'iclr-2025');
  assert.deepEqual(confView.groups.map((group) => group.label), ['symbolic']);
  assert.deepEqual(confView.groups[0].papers.map((paper) => paper.title), ['Paper E']);

  const confTagView = tools.buildConferenceTagView(model, 'rl');
  assert.deepEqual(confTagView.tabs.map((tab) => tab.label), ['rl', 'symbolic']);
  assert.equal(confTagView.activeKey, 'rl');
  assert.deepEqual(confTagView.groups.map((group) => group.label), ['NEURIPS 2024 / rl']);
  assert.deepEqual(confTagView.groups[0].papers.map((paper) => paper.title), ['Paper C']);
}

function testRenderBodyPutsConferenceAboveDaily() {
  const sidebar = loadSidebarForTest('#/conference/neurips-2024/paper-c');
  const tools = sidebar.__test;
  const model = tools.parseSidebar(sampleSidebar);
  assert.equal(typeof tools.renderBodyHtml, 'function');
  const html = tools.renderBodyHtml(model, {
    expandedGroups: { conference: true, daily: true },
    conferenceViewMode: 'conf',
    dailyViewMode: 'date',
    activeConference: 'neurips-2024',
    activeDailyDate: '20260624',
  });
  assert.ok(html.indexOf('dpr-sidebar-group-conference') < html.indexOf('dpr-sidebar-group-daily'));
  assert.ok(html.includes('data-axis-group="conference"'));
  assert.ok(html.includes('data-axis-group="daily"'));
  assert.ok(html.includes('data-axis-mode="conf"'));
  assert.ok(html.includes('data-axis-mode="date"'));
}

function testReadStatusNormalization() {
  const sidebar = loadSidebarForTest('#/202606/24/paper-a');
  const tools = sidebar.__test;
  assert.ok(tools, 'dpr-sidebar.js should export test helpers');
  assert.equal(tools.normalizeReadStatus('good'), 'good');
  assert.equal(tools.normalizeReadStatus('bad'), 'bad');
  assert.equal(tools.normalizeReadStatus('blue'), 'blue');
  assert.equal(tools.normalizeReadStatus('orange'), 'orange');
  assert.equal(tools.normalizeReadStatus('read'), 'read');
  assert.equal(tools.normalizeReadStatus(true), 'read');
  assert.equal(tools.normalizeReadStatus(false), '');
  assert.equal(tools.normalizeReadStatus(null), '');
}

testSidebarNavigationContract();
testAxisViewsForDailyAndConference();
testRenderBodyPutsConferenceAboveDaily();
testReadStatusNormalization();

console.log('dpr sidebar v2 tests passed');
