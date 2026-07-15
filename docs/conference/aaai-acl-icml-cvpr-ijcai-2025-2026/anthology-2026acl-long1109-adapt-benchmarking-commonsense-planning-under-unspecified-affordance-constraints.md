---
title: "ADAPT: Benchmarking Commonsense Planning under Unspecified Affordance Constraints"
title_zh: ADAPT：在未指定功能约束下的常识规划基准测试
authors: "Pei-An Chen, Yongching Liang, Jia-Fong Yeh, Hung-Ting Su, Yi-Ting Chen, Min Sun, Winston H. Hsu"
date: 2026-07-01
pdf: "https://aclanthology.org/2026.acl-long.1109.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 在未指定功能约束下进行常识规划基准测试
tldr: 现有具身智能体常忽略物体功能变化，导致在动态环境中失败。提出DynAfford基准和ADAPT方法，要求智能体感知物体状态、推断隐含前提并调整动作。实验验证了方法在动态场景中的有效性。
source: ACL-2026-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1664, \"height\": 921, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1626, \"height\": 545, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 789, \"height\": 780, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 787, \"height\": 614, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1652, \"height\": 354, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1643, \"height\": 774, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1644, \"height\": 776, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1619, \"height\": 570, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1240, \"height\": 786, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1109/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1220, \"height\": 729, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1577, \"height\": 306, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 770, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 775, \"height\": 307, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1516, \"height\": 758, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 705, \"height\": 512, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 789, \"height\": 179, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 785, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 786, \"height\": 271, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1643, \"height\": 574, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1109/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1643, \"height\": 572, \"label\": \"Table\"}]"
motivation: 具身智能体需要适应动态环境中变化的物体功能。
method: 提出DynAfford基准和ADAPT方法，结合感知和推理来调整动作。
result: 在动态场景中显著优于忽略功能变化的方法。
conclusion: 考虑功能变化是实现鲁棒具身智能的关键。
---

## Abstract
Intelligent embodied agents should not simply follow instructions, as real-world environments often involve unexpected conditions and exceptions. However, existing methods usually focus on directly executing instructions, without considering whether the target objects can actually be manipulated, meaning they fail to assess available affordances. To address this limitation, we introduce DynAfford, a benchmark that evaluates embodied agents in dynamic environments where object affordances may change over time and are not specified in the instruction. DynAfford requires agents to perceive object states, infer implicit preconditions, and adapt their actions accordingly. To enable this capability, we introduce ADAPT (Affordance-Driven Adaptive Planning and Task execution), a plug-and-play module that augments existing planners with explicit affordance reasoning. Experiments demonstrate that incorporating ADAPT significantly improves robustness and task success across both seen and unseen environments. We also show that a domain-adapted, LoRA-finetuned vision-language model used as the affordance inference backend outperforms a commercial LLM (GPT-4o), highlighting the importance of task-aligned affordance grounding.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有具身智能体（embodied agents）在执行指令时，通常假设物体功能（affordance）是静态且完全指定的，忽略了现实环境中物体可用性可能随时间变化（如微波炉被占用、布变脏等）且未在指令中明确说明的情况。这种“指令欠指定”导致智能体无法检测隐含前提条件，在动态环境中频繁失败。
- **整体背景**：人类能够基于常识处理未说明的异常情况（如脏衣服不应直接放入抽屉），而现有基准（如ALFRED、BEHAVIOR-1K）均未设计此类动态功能推理场景。论文旨在填补这一空白，推动具身智能体具备动态、常识驱动的适应能力。

## 2. 论文提出的方法论

- **核心思想**：将物体功能视为潜在的、随时间变化的执行前提条件，智能体需在执行过程中感知状态并调整动作。提出 **ADAPT（Affordance-Driven Adaptive Planning and Task execution）**，一个即插即用的决策时间模块，可与现有规划器集成。
- **关键技术细节**：
  - **两阶段流程**：
    1. **功能状态推断（Stage I: Affordance State Inference）**：仅对可能具有动态功能的对象（如微波炉、布）触发。使用 **LoRA微调的LLaVA-1.5-7B** 视觉语言模型，结合多模态上下文学习（提供可用/不可用参考图像与当前观测），判断目标对象当前是否可用。
    2. **可执行性解决（Stage II: Applicability Resolution）**：当推断出功能不可用时，不直接重规划，而是查询LLM（如GPT-4o）推断一个替代动作（如等待或清洁），保持任务意图一致性。待条件恢复后继续原计划。
  - **可见性检测**：使用预训练LLaVA判断目标对象是否在视野内，仅在可见时才进行功能推断。
  - **LoRA微调细节**：利用DynAfford训练集回放专家演示构造标注数据（可用/不可用），微调LLaVA-1.5-7B（Vicuna-7B基础 + CLIP ViT-L/14-336视觉编码器）。
- **算法流程（文字说明）**：每一时间步，规划器提出一个高层动作 → ADAPT检查该动作是否涉及动态功能对象 → 若涉及，则进行可见性检测 → 若可见，则进行功能推断 → 若不可用，则调用LLM推断替代动作（如Wait或Clean）并执行 → 等待期间定期重新评估 → 当功能恢复后，执行原动作。

## 3. 实验设计

- **数据集与场景**：
  - **DynAfford基准**：基于AI2-THOR 2.0模拟器，包含 **2,628** 个专家演示、**10,106** 个自然语言任务注释，覆盖 **57** 个场景（厨房、浴室）。任务分为6种类型：拾取、放置、清洁、加热、冷却、堆叠。
  - **数据划分**：训练集51场景，验证集36场景，测试集分为 **seen（44场景）** 和 **unseen（6场景）**。每个任务有静态（对象始终可用）和动态（初始状态违反功能前提）两种设置，确保对比公平。
- **Benchmark对比方法**：
  - **少样本方法**：LLM-Planner、SayCan（使用GPT-4o等LLM）。
  - **监督方法**：MOCA、FILM、CAPEAM（均为现有SOTA具身指令跟随方法）。将ADAPT集成到FILM和CAPEAM中进行评估。
  - **消融变体**：FILM+ADAPT（LoRA）、CAPEAM+ADAPT（LoRA）、CAPEAM+ADAPT（GPT-4o）。
- **评估指标**：Success Rate (SR)、Goal Condition success (GC)、Path-Length Weighted SR/GC（考虑执行效率）。
- **实验充分性**：进行了主要结果对比（表4）、消融实验（表5，移除LoRA微调和多模态上下文学习）、运行时分析（表6）、案例研究（成功与失败案例），以及附录中静态/动态子集分别报告（表9、10）。还比较了符号启发式上限。

## 4. 资源与算力

- **明确说明**（附录J）：
  - GPU型号：单张 **NVIDIA RTX 3090**（24GB VRAM）。
  - 软件环境：CUDA 11.8, PyTorch 2.6.0。
  - 训练配置：LoRA rank=64，学习率1e-5，batch size=4，训练 **1个epoch**。
  - 微调模型：LLaVA v1.5-7B（Vicuna-7B + CLIP ViT-L/14-336）。
  - 推理开销：平均每次功能推断约 **0.2秒**，一次性初始化约 **32.8秒**（不随任务长度扩展）。总运行时主要被环境交互占据（如等待动作）。

## 5. 实验数量与充分性

- **实验数量**：
  - 主实验（表4）：在测试集 seen/unseen 上对比了7种方法（包括变体），报告了4个指标。
  - 消融实验（表5）：完整方法 vs. 无LoRA微调 vs. 无多模态上下文学习，以及符号启发式上界。
  - 运行时分析（表6）：CAPEAM vs. CAPEAM+ADAPT 的总时间、初始化时间、推理时间、步数。
  - 案例研究：两个典型成功与失败案例（附录F、G）。
  - 附录中静态/动态子集单独报告（表9、10）。
- **充分性与公平性**：
  - 实验设计合理：ADAPT作为即插即用模块，不改变基模型结构，仅在高层次决策时介入，保证了公平对比。
  - 对比了少样本方法和监督方法，涵盖当前主流方法。
  - 消融实验证明了两个关键组件的必要性。
  - 符号启发式（使用真实状态）给出了上限，表明主要瓶颈在于视觉功能推断而非规划。
  - 局限性：仅进行单次确定性评估，未报告多次运行的标准差（但论文指出由于关注分类任务，波动较小）。商业API可能引入微小不确定性，但未详细量化。

## 6. 论文的主要结论与发现

- **ADAPT显著提升动态环境下的鲁棒性**：
  - 在FILM上，测试unseen split的SR从9.34提升至16.18（+73.2%），GC从25.54提升至34.41（+34.7%）。
  - 在CAPEAM上，SR从19.39提升至21.10（+8.8%），PLW GC从31.39提升至37.45（+19.3%）。
- **LoRA微调模型优于通用VLM**：使用GPT-4o作为ADAPT后端时，性能低于LoRA微调的LLaVA（尤其seen split），证明**任务特定视觉功能对齐**的重要性。
- **少样本方法（LLM-Planner、SayCan）在动态功能下几乎完全失败**，表明仅依赖语言先验无法处理隐含前提。
- **功能推断是主要瓶颈**：符号启发式（使用真实状态）达到46.15% SR，远高于ADAPT的27.69%，说明视觉功能推断仍有显著提升空间。
- **多模态上下文学习 + LoRA微调**是关键组件，移除任一都会导致性能大幅下降（SR从27.69%跌至16.07%或6.15%）。
- **ADAPT引入的计算开销有限**（每步0.2s推理），总体时间增加主要来自环境交互（如等待），而非模型计算。

## 7. 优点

- **诊断性基准设计**：DynAfford通过注入动态功能违例但保持指令不变，孤立出“功能推理”这一关键能力，使性能差异可归因于该能力。
- **即插即用模块化**：ADAPT无需修改现有规划器、感知模块或控制器，仅作为决策时推理层，易于集成。
- **结合常识推理与视觉适应**：通过多模态上下文学习（参考图像）增强泛化，LoRA微调实现领域适应。
- **考虑隐含前提与执行时适应性**：不直接重规划，而是等待或执行预备动作，保持长时任务连贯性。
- **实验覆盖动静子集**：分别报告静态和动态结果，清晰展示了ADAPT在动态环境中的增益。

## 8. 不足与局限

- **视觉感知局限**：仅使用单视图（egocentric），容易因遮挡或部分视角导致误判（如案例中将洗碗机误认作微波炉）。未来需多视角或主动视角选择。
- **功能类型有限**：仅涵盖三种（Occupied, Used, Dirty），未覆盖几何或结构约束，扩展性有待验证。
- **仅仿真环境**：未在真实机器人上验证，忽略物理不确定性、安全约束及人机交互动态。直接部署可能导致不当延迟或保守行为。
- **报告稳定性不足**：仅单次确定性运行，未提供多次运行的平均值或置信区间，且商业API（GPT-4o）可能引入非确定性。
- **数据集偏差**：任务均基于ALFRED模板，场景聚焦厨房和浴室，可能限制泛化到其他家庭环境或非家庭场景。
- **符号启发式上限较高**：说明从视觉推断功能仍然是主要瓶颈，ADAPT尚未达到理想状态。

（完）
