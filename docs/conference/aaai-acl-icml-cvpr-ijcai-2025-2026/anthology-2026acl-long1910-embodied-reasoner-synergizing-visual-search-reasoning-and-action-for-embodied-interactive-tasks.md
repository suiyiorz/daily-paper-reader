---
title: "Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks"
title_zh: Embodied-Reasoner：协同视觉搜索、推理与行动进行具身交互任务
authors: "Wenqi Zhang, Mengna Wang, Gangao Liu, Huixin Xu, Yiwei Jiang, Yongliang Shen, Guiyang Hou, Zhe Zheng, Hang Zhang, Xin Li, Jiajun Liu, Weiming Lu, Peng Li, Yueting Zhuang"
date: 2026-07-01
pdf: "https://aclanthology.org/2026.acl-long.1910.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 面向交互任务的具身推理模型
tldr: 现有推理模型在具身领域缺乏有效探索，提出Embodied-Reasoner，针对交互式具身任务合成9.3k包含观察-思考-行动的轨迹，训练模型进行空间理解、时间推理和自我反思。在多个具身环境中展示优势。
source: ACL-2026-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 714, \"height\": 606, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1579, \"height\": 747, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1490, \"height\": 940, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 753, \"height\": 481, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 800, \"height\": 487, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 802, \"height\": 345, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 792, \"height\": 318, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 783, \"height\": 532, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 816, \"height\": 355, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 812, \"height\": 456, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 811, \"height\": 458, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 803, \"height\": 458, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 801, \"height\": 462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 787, \"height\": 832, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 796, \"height\": 864, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 726, \"height\": 870, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 727, \"height\": 893, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1639, \"height\": 1912, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 592, \"height\": 1346, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 299, \"height\": 2033, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 785, \"height\": 163, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1910/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1519, \"height\": 2175, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 804, \"height\": 251, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1618, \"height\": 581, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 798, \"height\": 394, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 806, \"height\": 133, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 809, \"height\": 238, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1184, \"height\": 139, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1620, \"height\": 249, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1657, \"height\": 548, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1643, \"height\": 211, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 674, \"height\": 243, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1227, \"height\": 484, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1639, \"height\": 357, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1654, \"height\": 1920, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1662, \"height\": 2127, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1910/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1640, \"height\": 736, \"label\": \"Table\"}]"
motivation: 现有推理模型在需要连续交互的具身任务中表现不足。
method: 通过合成大量观测-思考-行动轨迹训练具身推理模型，融合空间、时间推理与自我反思。
result: 在多个具身基准任务上达到领先性能。
conclusion: 为具身AI提供了有效的推理模型范例。
---

## Abstract
Recent advances in reasoning models have demonstrated remarkable capabilities on mathematical and coding tasks. However, their effectiveness in embodied domains, where the agent must continuously interact with environments and process observation-action interleaved trajectories, remains largely unexplored. We present Embodied-Reasoner, a reasoning model for interactive embodied tasks. Unlike mathematical reasoning that relies primarily on logical deduction, embodied scenarios demand spatial understanding, temporal reasoning, and ongoing self-reflection based on interaction history. To address these challenges, we synthesize 9.3k coherent Observation-Thought-Action trajectories containing 64k ego-centric images and 90k diverse reasoning processes (analysis, spatial reasoning, reflection, planning, and verification). We develop a three-stage training recipe that progressively enhances the model’s capabilities through imitation learning, rejection sampling tuning on self-exploration trajectories, and reflection tuning. The evaluation shows that our model significantly outperforms advanced visual reasoning models, e.g., exceeds OpenAI o1, o3-mini, and Claude-3.7 by +9%, 24%, and +13%. Analysis reveals that our model exhibits fewer repeated searches and logical inconsistencies, with particular advantages in complex long-horizon tasks. Real-world testing further validates the effectiveness of our approach.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，以下是对论文《Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks》的结构化、深入且客观的中文总结。

### 论文核心问题与整体含义

#### 研究动机与背景
- **核心问题**：现有的大语言推理模型（如 OpenAI o1、DeepSeek-R1）在数学和编程等符号推理任务上表现出色，但在需要与环境持续交互、处理多模态（视觉-文本）交织上下文的具身任务中表现不佳。
- **核心挑战**：
    1.  **多轮交互与上下文复杂性**：具身代理需要处理长期的多轮交互，每轮都包含新的视觉观察和动作指令，这构成了长序列、图像-文本交织的上下文，对模型的理解和推理能力提出了更高要求。
    2.  **多样性推理能力需求**：具身任务不仅需要逻辑推理，更需要空间理解（推断物体位置）、时间推理（回忆历史）、常识推理（推断物体可能存放位置）和自我反思（基于失败调整策略）等多种认知能力。
- **研究目标**：提出一个名为 **Embodied-Reasoner** 的全新模型，将“深度思考”范式拓展到具身交互领域，使代理能够像人类一样，在未知环境中主动观察、推理、规划并灵活调整行为。

### 论文提出的方法论

#### 核心思想
- **核心思路**：不是训练模型完成特定的运动控制，而是训练一个“思考者”，使其具备高层次的规划、推理和决策能力。模型基于视觉观察，输出推理链中的思考过程和下一个高层次动作指令。
- **关键技术**：通过自动合成数据引擎，生成大量、多样化的“观察-思考-动作”交织轨迹，并设计三阶段训练策略，逐步引导模型学习从基础交互到复杂探索和错误修正的能力。

#### 关键技术细节
1.  **数据引擎**
    - **任务指令合成**：利用LLM（如GPT-4o）结合场景约束（物体是否存在、能否被拾取等），自动生成合法且多样化的任务指令（如寻找、操作、运输、复合任务）。
    - **动作序列合成**：基于模拟器的元数据构建**从属关系图**（物件间的包含关系），推导出完成任务所需的最简关键动作序列。然后，通过插入额外的搜索动作（如导航到其他可能地点），使动作序列更真实，展现探索过程。
    - **思考过程合成**：为每个轨迹，由LLM生成对应的思考过程。论文定义了五种思考模式：**情景分析**、**空间推理**、**任务规划**、**自我反思**和**双重验证**。思考过程被插入到“观察”和“动作”之间，形成“观察 → 思考 → 动作”的交织格式。

2.  **三阶段训练策略**
    - **第一阶段：模仿学习（Learn to Interact）**
        - 目标：让模型学会基础的交互格式和技能（如理解图像-文本输入，生成思考和动作token）。
        - 方法：使用合成的一批简单任务轨迹，对基础VLM（Qwen2-VL-7B）进行微调，得到 **Embodied-Interactor**。
    - **第二阶段：拒绝采样微调（Learn to Search）**
        - 目标：增强模型的探索和搜索能力。
        - 方法：让第一阶段的模型在新的任务上采样多条轨迹。数据引擎根据关键动作序列判断任务是否成功，只保留成功的轨迹进行训练，得到 **Embodied-Explorer**。
    - **第三阶段：反思微调（Learn to Self-reflect）**
        - 目标：让模型学会从错误中反思和纠正。
        - 方法：对前两阶段的轨迹进行两种处理：
            - **在成功轨迹中插入异常状态**：模拟硬件故障（如导航错地方），并生成模型进行自我反思和纠正的思考。
            - **在失败轨迹中修正错误**：定位第一个错误动作，使用后续正确动作和反思思考构建纠正轨迹。用这些数据微调，得到最终的 **Embodied-Reasoner**。

### 实验设计

#### 数据集与场景
- **训练数据**：使用 **AI2-THOR** 模拟器，合成 **9,390** 条任务轨迹，覆盖 **107** 个室内场景（厨房、卧室等）、超过2,100个可交互物体和2,600个容器。包含 **64,000** 张第一人称视角图像和 **800万** 个推理token。
- **测试基准**：在 **809** 个新颖任务上进行评估，这些任务来自 **12** 个全新的、训练中未见的AI2-THOR场景。任务分为四类难度递增的子任务：**搜索**、**操作**、**运输**和**复合任务**。

#### 对比方法
- **通用VLM**：Qwen2-VL-72B, Claude 3.5-Sonnet, GPT-4o等。
- **视觉推理模型**：QVQ-72B, Kimi-K1.5, GPT-o3-mini, Gemini-2.0 Flash Thinking, Claude-3.7-Sonnet-thinking, GPT-o1等。
- **自身变体**：Embodied-Interactor（第一阶段）、Embodied-Explorer（第二阶段）。
- **跨领域对比**：在ALFRED（同模拟器不同基准）、R2R（Habitat模拟器）、EmbodiedBench（Habitat模拟器）等基准上与专门的VLN或IL/RL模型对比。

#### 评估指标
- **成功率（SR）**：是否按顺序完成所有关键动作并达到最终正确状态。
- **搜索效率**：关键动作数 / 预测动作总数。
- **任务完整性**：完成的关键动作比例。
- **子任务成功率**：区分不同子任务类型的成功率。

### 资源与算力
该论文文中未明确提及所使用的具体GPU型号、数量或训练时长。

### 实验数量与充分性
- **实验数量**：充分。主实验在809个任务上对比了10多个模型。此外还包含：
    - **消融实验**：每个训练阶段的单独影响（表5）；五种思考模式区分与否的影响（表4）。
    - **泛化实验**：在多样化场景（ALFRED、R2R、EmbodiedBench）和真实世界测试。
- **充分性与公平性**：
    - **充分性**：实验设计系统地涵盖了方法的各个关键组成部分（数据、训练范式、推理模式），并在多个不同环境和任务设置中验证了泛化能力，实验量充足。
    - **客观性/公平性**：对比的基线模型先进且多样，包括通用模型和专门的推理/具身模型。测试集是全新的，避免了训练过拟合。分析部分（如重复探索率、任务长度与性能关系）为进一步理解模型行为提供了客观视角。

### 论文的主要结论与发现
1.  **性能显著领先**：Embodied-Reasoner（7B参数）在成功率上远超所有通用和视觉推理模型，比GPT-o1高约9%，比o3-mini高24%。
2.  **优势随任务复杂度增加而增大**：在最具挑战的复合任务上，其优势尤为突出，比次好的GPT-4o高出39.9%。
3.  **三阶段训练有效**：模型成功率从初始的14.7%提升到25.4%（第一阶段）、65.4%（第二阶段）和80.9%（第三阶段），证实了逐步训练策略的有效性。
4.  **推理行为更智能**：相比基线模型，Embodied-Reasoner展现出显著更低的**重复探索率**和更高效的搜索行为，能够利用记忆和反思避免浪费时间。
5.  **跨场景泛化能力强**：在未见过的模拟器（Habitat）和真实世界场景中，该模型也表现出强大的零样本或跨域泛化能力，性能与在特定领域训练的专用模型相当。

### 优点
1.  **创新的数据合成方法**：设计了一个高效的数据引擎，能够自动生成高质量、多样化、带有结构化推理过程的“观察-思考-动作”轨迹。这是模型能力的基础。
2.  **优雅的三阶段训练策略**：从模仿基础技能，到探索复杂环境，再到学习自我修正，思路清晰，层层递进，有效解决了从零基础到强大能力的转变。
3.  **对推理过程的显式建模**：通过定义五种不同的思考模式（空间推理、自我反思等），为模型的“思考”提供了结构化的认知框架，使其推理过程更可控、可解释，实验证明这在复杂任务中至关重要。
4.  **卓越的泛化能力**：不仅在目标模拟器上表现优异，还能有效泛化到其他模拟器和真实世界，展示了方法的鲁棒性和实用性潜力。
5.  **全面的分析**：论文不仅报告了最终结果，还深入分析了模型的行为（如重复探索率）、不同任务难度下的性能变化，以及思考模式的内在转换关系，提供了深刻的洞见。

### 不足与局限
1.  **现实世界部署的挑战**：虽然模型在真实世界实验中表现良好，但实验场景和任务较为简单。动态、复杂、非结构的真实环境对泛化性和鲁棒性提出了更高要求。
2.  **依赖离散高层次动作**：模型输出的是高层次的动作指令（如“导航到桌子”），而不是低层级的电机控制指令。这使其需要与一个低层控制策略（如运动规划器）结合才能实现完全自主的物理交互，增加了系统复杂性。
3.  **潜在的数据偏差风险**：合成数据依赖于LLM（GPT-4o）和模拟器元数据，可能继承了这些模型的偏差。例如，物体的典型位置推理可能不完全符合实际情况。
4.  **计算成本**：模型在复杂任务上生成更长的思考链（CoT），虽然提高了性能，但也增加了推理时的计算开销和延迟。在需要快速响应的实时任务中，这可能是一个限制。
5.  **训练资源信息缺失**：论文没有提供关于训练所需的GPU数量、模型规模和时长的具体信息，这不利于业界复现和对资源需求进行评估。

（完）
