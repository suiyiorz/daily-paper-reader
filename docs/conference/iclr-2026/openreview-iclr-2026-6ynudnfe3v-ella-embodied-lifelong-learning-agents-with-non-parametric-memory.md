---
title: "Ella: Embodied Lifelong Learning Agents with Non-Parametric Memory"
title_zh: Ella：具有非参数记忆的具身终生学习智能体
authors: "Hongxin Zhang, Zheyuan Zhang, Zeyuan Wang, Zunzhe Zhang, Lixing Fang, Qinhong Zhou, Chuang Gan"
date: 2025-09-14
pdf: "https://openreview.net/pdf?id=6YNUdnFe3v"
tags: ["query:ad"]
score: 8.0
evidence: 具有非参数记忆的具身终生学习智能体
tldr: 具身智能体面临持续学习挑战。本文提出Ella，一种终生学习智能体，配备非参数长期多模态记忆系统，包括语义记忆和时空情节记忆。Ella能在3D开放世界中通过数小时社交互动积累经验、获取知识，并随时间有效利用信息。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 具身智能体需持续学习并利用多样信息，现有方法缺乏长期记忆能力。
method: 构建非参数多模态记忆系统，包含名称中心语义记忆和时空情节记忆。
result: 在长时间社交互动中有效积累和检索经验知识。
conclusion: 推动了具身智能体的终生学习能力发展。
---

## Abstract
Situated within human society, embodied agents are continuously exposed to diverse streams of information, ranging from visual observations to natural language interactions. A central challenge is enabling them to learn from and effectively leverage this information over extended periods. To address this, we introduce Ella, an embodied lifelong learning agent designed to accumulate experiences and acquire knowledge across hours of social interaction in a 3D open world. At the core of Ella’s capabilities is a structured, non-parametric,  long-term multi-modal memory system that stores, updates, and retrieves information effectively. It consists of a name-centric semantic memory for organizing acquired knowledge and a spatiotemporal episodic memory for capturing multimodal experiences. By integrating foundation models with this non-parametric memory system, Ella retrieves relevant information for decision-making, plans daily activities, builds social relationships, and evolves autonomously while coexisting with other intelligent beings in the open world. We conduct capability-oriented evaluations in a dynamic 3D open world where 15 agents engage in social activities for days and are assessed with a suite of unseen controlled evaluations. Experimental results show that Ella can influence, lead, and cooperate with other agents well to achieve goals, showcasing its ability to learn effectively through observation and social interaction. Our findings highlight the transformative potential of combining non-parametric memory systems with foundation models for advancing embodied intelligence.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：具身智能体长期处于人类社会环境中，持续接收视觉观察、自然语言交互等多模态信息流。现有方法缺乏长期记忆能力，无法有效积累并利用这些信息，从而难以实现真正的终生学习。
- **整体含义**：本文提出 **Ella**（具身终生学习智能体），通过构建**非参数长期多模态记忆系统**，使智能体在3D开放世界中经历数小时社交互动后，能够积累经验、获取知识并在后续决策中有效利用，推动具身智能体向自主、持续学习的方向发展。

### 2. 论文提出的方法论
- **核心思想**：将基础模型（Foundation Models）与结构化**非参数长期多模态记忆系统**相结合，实现信息的存储、更新与检索，从而支持决策、规划、社交关系建立与自主进化。
- **关键技术细节**：
  - **名称中心语义记忆（Name-centric Semantic Memory）**：用于组织智能体获取的事实性知识（如物体属性、人物关系、常识等），以“名称”为索引进行存储与检索。
  - **时空情节记忆（Spatiotemporal Episodic Memory）**：用于捕捉多模态经验（如观察到的场景、发生的交互事件、时间顺序等），支持场景回放与经验复用。
- **算法流程（文字说明）**：  
  1. 智能体通过传感器（视觉、语言等）接收环境信息。  
  2. 对信息进行编码，分别存入语义记忆（提取事实）和情节记忆（记录完整经验）。  
  3. 当需要决策时，智能体基于当前上下文从两种记忆中检索相关片段，结合基础模型进行推理与规划。  
  4. 执行动作后，新产生的信息会更新或追加到记忆系统中，实现持续学习。

### 3. 实验设计
- **使用的场景/数据集**：在**动态3D开放世界**中构建场景，部署**15个智能体**参与数天的社交活动（如合作、竞争、社交互动等）。评估在**一系列未见过的受控场景**中进行。
- **Benchmark**：论文未明确提及使用现有公开 benchmark，而是自定义了基于能力导向的测试任务。
- **对比方法**：根据提供的文本，**未提及与其他基线方法的对比**，仅对Ella自身的能力进行了评估。

### 4. 资源与算力
- 论文摘要及元数据中**未明确说明**使用的GPU型号、数量、训练时长等算力信息。

### 5. 实验数量与充分性
- **实验数量**：仅描述了单一实验设置（15个智能体、数天社交活动、受控评估），**未提及消融实验**或其他变体实验的数量。
- **充分性与客观性**：实验覆盖了能力导向的评估（影响、领导、合作等），但**缺乏与基线方法的对比**、**缺乏消融研究**（如不同记忆模块的贡献），因此难以判断方法的绝对优势。评估在“未见过”场景中进行，具有一定客观性，但整体实验充分性**不足**。

### 6. 论文的主要结论与发现
- Ella能够在动态3D开放世界中，通过观察和社交互动**有效学习**。
- 智能体具备**影响、领导并与其他智能体合作**达成目标的能力。
- 结合非参数记忆系统与基础模型，为具身智能带来**变革潜力**，推动了终生学习能力的发展。

### 7. 优点
- **方法创新**：提出结合**非参数多模态记忆系统**（语义+情节）与基础模型，突破了传统方法缺乏长期记忆的瓶颈。
- **实验设置真实**：采用动态3D开放世界并进行长期（数天）的社交互动模拟，更贴近真实人类社会的持续学习场景。
- **评估导向合理**：聚焦于**能力导向**（影响、领导、合作），而非仅关注孤立任务指标，体现了具身智能的综合鲁棒性。

### 8. 不足与局限
- **缺少对比实验**：未与任何基准方法（如无记忆、纯基础模型、传统记忆机制等）进行公平比较，无法量化Ella的领先程度。
- **消融研究缺失**：未分析语义记忆与情节记忆各自的贡献，也未讨论记忆容量、更新策略等设计选择的影响。
- **实验场景单一**：仅使用15个智能体的单一场景，未验证在不同环境、不同任务类型、不同智能体数量下的泛化性。
- **资源与复现信息不足**：未公开训练/推理的算力需求，不利于工业界评估部署成本。
- **论文被拒可能反映不足**：论文来源于ICLR 2026 Rejected，可能说明评审认为实验完整性或方法显著性存在缺陷。

（完）
