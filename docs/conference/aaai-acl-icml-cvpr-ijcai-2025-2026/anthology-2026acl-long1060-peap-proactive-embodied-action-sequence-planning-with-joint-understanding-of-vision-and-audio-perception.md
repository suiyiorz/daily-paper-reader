---
title: "PEAP: Proactive Embodied Action Sequence Planning with Joint Understanding of Vision and Audio Perception"
title_zh: PEAP：基于视觉与音频联合感知的主动式具身动作序列规划
authors: "Tianwei Lan (兰天伟), Jiaqi Wu, Zeming Liu, Zhaoxin Fan, Haifeng Wang, Yuhang Guo (郭宇航)"
date: 2026-07-01
pdf: "https://aclanthology.org/2026.acl-long.1060.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 具有视觉和听觉感知的主动式具身动作序列规划，面向真实环境
tldr: 现有具身智能体缺乏主动性和对视觉音频的联合理解。本文提出PEAP，首个多模态主动式具身动作序列规划方法，无需人类明确指令，通过联合视觉和音频感知来自动规划动作序列。在家庭和办公室等真实场景中，实现了主动智能辅助。该工作拓展了具身智能体的感知交互能力。
source: ACL-2026-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1060/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 832, \"height\": 883, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1060/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 157, \"height\": 155, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1060/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 668, \"height\": 525, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1060/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1624, \"height\": 664, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1060/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1625, \"height\": 669, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1651, \"height\": 555, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 804, \"height\": 470, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1487, \"height\": 231, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 767, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1650, \"height\": 692, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 768, \"height\": 676, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 802, \"height\": 655, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 650, \"height\": 646, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 801, \"height\": 674, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1060/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1492, \"height\": 622, \"label\": \"Table\"}]"
motivation: 现有具身智能体依赖人类指令且缺乏对视觉和音频信息的联合理解，无法在真实环境中主动提供帮助。
method: 提出PEAP框架，首次融合视觉和音频感知进行多模态联合理解，并基于此主动规划动作序列。
result: 在多个真实场景任务中验证了方法的有效性，实现了无需指令的主动辅助。
conclusion: PEAP使具身智能体具备主动感知和规划能力，提升了在家庭和办公环境中的实用性。
---

## Abstract
Embodied Action Sequence Planning focuses on the capability of embodied agents to implement action planning via environmental perception. This technology enables diverse intelligent assistance for real-world scenarios such as home and office environments. To address the limitations of existing embodied agents in meeting the requirement for proactivity and achieving joint understanding of visual and audio information, this study investigates the ability of embodied agents to proactively provide assistance through action sequence planning based on joint understanding of vision and audio perception without explicit human instructions. Correspondingly, we propose PEAP, the first multimodal proactive embodied action sequence planning dataset. We evaluate the performance of multiple Large Language Models on the PEAP dataset. The results demonstrate that these models still exhibit significant deficiencies on this task particularly lacking accurate environmental perception capabilities. Furthermore, ablation experiment and replacement experiment further corroborate that the joint understanding of multimodal information can significantly improve the models’ performance on proactive embodied action sequence planning task.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：现有具身智能体在动作序列规划中主要依赖人类明确指令（被动响应），缺乏主动感知环境并自发提供帮助的能力。同时，它们大多仅关注单一模态（如视觉或文本），忽略了视觉与音频信息的**联合理解**，导致无法准确感知场景中的事件和潜在需求（例如火灾报警声、婴儿哭声等）。
- **背景**：在家庭、办公等真实场景中，智能体需要主动识别环境状态、预测用户未表达的潜在需求，并自主规划动作序列（如紧急情况下的应对、主动询问等）。然而，现有的数据集和任务均未同时满足“主动性”和“多模态联合理解”两个要求。
- **本文贡献**：提出 **PEAP**（Proactive Embodied Action Sequence Planning），**首个** 基于视觉与音频联合感知的主动式具身动作序列规划数据集与方法。目标：让具身智能体在没有明确人类指令的情况下，通过联合理解视觉和音频信息，自动生成合理的主动帮助动作序列。

## 2. 方法论

### 核心思想
- **任务定义**：智能体接收三种输入：视觉场景信息 \(V\)、音频场景信息 \(A\)、文本任务描述 \(T\)（定义角色而非给出具体指令）。输出为一个动作序列 \(ActionSequence = EmbodiedAgent(V, A, T)\)。
- **动作分类**：三种基本类别
  - **Movement**（位置移动）：如行走、转身
  - **Manipulation**（物体操作）：如抓取毛巾、开门
  - **Conversation**（语言行为）：如询问、提出话题

### 关键技术细节
- **数据构建步骤**：
  1. **数据收集**：从公共图像数据集（SUN397、MIT67、Place365）和音频数据集（UrbanSound8K、FSD50K、ESC-50）中提取图像和音频，并手动配对确保场景与音频逻辑相关（如消防站配警笛声）。额外从Ego4D和VGGSound收集音视频视频数据。
  2. **数据过滤与标注**：使用JoyCaption（图像描述）和AudioFlamingo3（音频描述）生成文本描述；然后利用DeepSeek-V3.2过滤出具有明确帮助方向的数据，并标注核心帮助内容（描述帮助方向而非具体动作序列）。
  3. **质量控制**：人工审核大模型标注，接受/拒绝/修正，确保场景-音频相关性和标注准确性。最终随机抽样2000条，有效接受率98.9%。
- **评估模型（EM）**：为了客观评分，训练了专门的评估模型。选择Qwen3-8B、Llama3-8B（通过LoRA微调）和DeepSeek作为评判器，采用三个模型打分，一致则接受，否则人工介入。评估指标：Scene Recognition (SR)、Sound Events Recognition (SER)、Assistance Provide (AP)、Overall（三者均满足得1分，否则0）。
- **算法流程**：无公式，主要流程为：输入多模态信息 → 模型生成动作序列 → 评估模型按四个指标打分。

## 3. 实验设计

### 数据集与场景
- **PEAP数据集**：覆盖122个场景，划分为10个类别（商业购物、教育文化、娱乐休闲、医疗卫生、办公工业、户外半开放、公共安全服务、住宅私人、特殊功能空间、交通基础设施）。总计19,963条数据，其中测试集1,998条。
- **Benchmark**：以人工标注的参考答案作为标准，评估模型生成的回答是否与帮助方向一致。

### 对比方法
- **级联方案**：先用JoyCaption和AudioFlamingo3生成文本描述，再输入文本模型
  - Llama3-8B, Qwen3-0.6B, Qwen3-8B, Qwen3-32B
- **端到端方案**：直接输入图像和音频到多模态模型
  - Mini-omni, MiniCPM, Stream-omni, Qwen3-omni, VITA, GPT-4o, o4-mini, Gemini-3 Pro

### 补充实验
- **消融实验**（表6）：移除音频（Only Vision）或移除视觉（Only Audio），比较性能下降。
- **替换实验**（表7）：将视觉替换为纯黑图像，或将音频替换为纯噪声，观察分数变化。
- **任务描述消融**（表8）：简化任务描述（去除要求主动帮助的指令），比较性能变化。
- **人类评估**（表9）：在150条数据上由人工打分，验证自动评估一致性。
- **动作分析**（表5中Action Analysis）：计算Precision、Recall、Macro-F1、Micro-F1，分析模型是否输出冗余动作。

## 4. 资源与算力

文中**未明确说明**训练和测试所使用的GPU型号、数量、训练时长等具体算力信息。仅提及使用LoRA对Qwen3-8B和Llama3-8B进行微调以作为评估模型，但未提供计算资源细节。因此无法定量总结。

## 5. 实验数量与充分性

- **实验数量**：共约7组实验（主表5、表6、表7、表8、表9 + 动作分析 + 质量验证），涵盖12个模型对比、多模态消融、替换、任务描述影响、人类评估等。
- **充分性与客观性**：
  - 对比模型覆盖了当前主流开源和闭源模型（级联与端到端均有），具有代表性。
  - 消融和替换实验设计合理，能够有效验证多模态联合理解的必要性。
  - 人类评估验证了自动评估的可靠性，避免了模型自评偏差。
  - 动作分析进一步揭示了模型是否通过冗余动作“刷分”，使评估更公平。
  - **不足**：缺少在真实物理机器人上的实验验证；未对计算效率、推理时间进行分析；未涉及更复杂的交互场景（如多轮对话、长期任务）。

## 6. 主要结论与发现

1. **顶尖模型表现**：Qwen3-omni、Gemini-3 Pro、Qwen3-32B在Overall得分上领先（均>70），但仍未达到完美（最高80.6%），说明任务具有挑战性。
2. **多模态联合理解至关重要**：消融实验表明，仅靠单模态（视觉或音频）会导致性能大幅下降（如Only Vision下Gemini Pro从80.6降至40.0，Only Audio下多数模型接近瘫痪）。
3. **替换实验证明真正联合理解**：将视觉或音频替换为无关内容后，几乎所有模型分数急剧下降，说明模型确实依赖了正确的多模态关联，而非单模态猜测。
4. **部分模型依赖冗余动作提高分数**：如Qwen3-32B的Recall显著高于Precision，说明生成了大量无关动作以试图覆盖标准答案，降低了精确度。
5. **任务描述的影响**：简化描述后所有模型得分轻微下降，表明明确角色定义有助于提升主动性。
6. **人类评估与自动评估高度一致**：进一步确认了评估方法的有效性。

## 7. 优点（方法/实验设计亮点）

- **任务创新**：首次将“主动性”和“视觉-音频联合理解”纳入具身动作序列规划，填补了现有研究空白。
- **数据集高质量**：包含122个场景、近20k样本，场景-音频配对逻辑合理，经过严格人工审核，有效接受率98.9%。
- **评估体系严谨**：设计了四个细化指标（SR、SER、AP、Overall），并训练专门的评估模型结合人工仲裁，降低主观偏差。
- **实验设计全面**：不仅比较了主流模型，还进行了模态消融、替换、任务描述影响、动作冗余分析、人类评估等多角度验证，使结论可靠。
- **揭示深层问题**：通过动作分析发现模型存在“刷分”行为，为后续改进提供方向。

## 8. 不足与局限

- **计算效率未优化**：文中指出当前工作侧重于质量，未针对推理速度和计算复杂度进行优化，在边缘设备上部署可能延迟较高。
- **应用可行性有限**：仅在离线数据集上评估，未在真实机器人或交互环境中测试，缺乏对动态环境、执行错误的鲁棒性验证。
- **潜在偏差风险**：数据标注依赖大模型和人工，虽然经过审核但仍可能存在主观偏差；场景-音频配对基于人工判断，可能遗漏其他合理关联。
- **主动行为的伦理问题**：虽然提到“Proactive Assistance Ethics”，但未深入讨论智能体在错误主动干预时可能带来的风险（如误报警、侵犯隐私等）。
- **动作分类简单**：仅三类基本动作，未涵盖复杂多步任务、连续动作规划、与人类协作等场景。
- **缺乏长尾场景**：虽然覆盖122个场景，但某些场景数据量较少（如特殊功能空间仅4个场景），可能影响模型泛化性。

（完）
