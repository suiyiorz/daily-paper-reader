---
title: "Vidar: Embodied Video Diffusion Model for Generalist Manipulation"
title_zh: Vidar：面向通用操作学习的具身视频扩散模型
authors: "Yao Feng, Hengkai Tan, Xinyi Mao, Chendong Xiang, Guodong Liu, Shuhe Huang, Hang Su, Jun Zhu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=CFuNu8dK4s"
tags: ["query:ad"]
score: 8.0
evidence: 面向通用机器人操作的具身视频扩散模型，跨平台适用
tldr: 本文针对通用操作策略难以跨机器人平台迁移的问题，提出Vidar框架。它利用预训练的视频扩散模型作为通用先验，并通过掩码逆动力学模型适配不同机器人形态。在三个真实机器人平台上收集75万条轨迹进行具身预训练，引入统一观测空间。实验表明Vidar在多种操作任务中泛化性强，对背景和视角变化鲁棒，为通用操作学习提供了有效方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有操作策略依赖大量同质演示且易受视角背景影响，跨平台泛化差。
method: 结合互联网视频扩散模型与掩码逆动力学模型，通过具身预训练统一观测空间。
result: 在三个机器人平台上实现有效泛化，对变化环境鲁棒。
conclusion: Vidar实现了跨平台、鲁棒的通用操作学习框架。
---

## Abstract
Scaling general-purpose manipulation to new robot embodiments remains challenging: each platform typically needs large, homogeneous demonstrations, and end-to-end pixel-to-action pipelines may degenerate under background and viewpoint shifts. Based on previous advances in video-based robot control, we present Vidar, consisting of an embodied video diffusion model as the generalizable prior and a masked inverse dynamics model (MIDM) as the adapter. We leverage a video diffusion model pre-trained at Internet scale, and further continuously pre-train it for the embodied domain using 750K multi-view trajectories collected from three real-world robot platforms. For this embodied pre-training, we introduce a unified observation space that jointly encodes robot, camera, task, and scene contexts. The MIDM module learns action-relevant pixel masks without dense labels, grounding the prior into the target embodiment’s action space while suppressing distractors. With only ∼20 minutes of human demonstrations on an unseen robot (∼1% of typical data), Vidar outperforms state-of-the-art baselines and generalizes to unseen tasks, backgrounds, and camera layouts. Our results suggest a scalable recipe for “one prior, many embodiments”: strong, inexpensive video priors together with minimal on-robot alignment.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：通用机器人操作策略难以跨不同机器人平台（embodiment）迁移。现有方法依赖大量同质化演示数据，且端到端的像素到动作（pixel-to-action）流水线在背景、视角变化时性能严重下降。
- **研究动机**：探索利用互联网规模预训练的视频扩散模型作为通用先验，通过少量目标平台对齐（仅约20分钟演示），实现“一个先验，多种具身”的可扩展方案。
- **整体含义**：提出Vidar框架，结合预训练视频扩散模型与掩码逆动力学模型（MIDM），在三个真实机器人平台上收集75万条多视角轨迹进行具身预训练，使得策略能泛化到未见任务、背景和相机布局，显著降低跨平台数据需求。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将视频扩散模型作为通用先验，通过统一观测空间编码跨平台信息，再利用掩码逆动力学模型（MIDM）将先验适配到目标机器人的动作空间，同时抑制无关干扰。
- **关键技术细节**：
  - **统一观测空间**：联合编码机器人形态、相机参数、任务描述和场景上下文，使预训练的视频扩散模型能处理不同平台的数据。
  - **掩码逆动力学模型（MIDM）**：无需密集标签，自动学习与动作相关的像素掩码（action-relevant masks），从而将视频先验中的运动知识映射到目标具身的动作空间，同时过滤背景、视角等干扰。
  - **具身预训练**：在三个真实机器人平台上收集750K条多视角轨迹，对互联网预训练的视频扩散模型进行持续预训练（embodied pre-training），获得具身域的视频先验。
- **算法流程（文字说明）**：
  1. 获取互联网预训练的视频扩散模型作为初始化权重。
  2. 收集来自多个真实机器人平台的多视角轨迹数据，构建统一观测空间（包括机器人、相机、任务、场景信息）。
  3. 使用上述数据对视频扩散模型进行持续预训练（具身预训练），得到Vidar的主体。
  4. 针对目标机器人，仅需少量（约20分钟）人类演示，训练MIDM模块以学习动作相关掩码，将视频先验对齐到该机器人的动作空间。
  5. 推理时：Vidar基于当前观测和任务描述生成未来视频帧，MIDM从视频帧中提取动作相关特征并输出动作指令。

### 3. 实验设计：使用的数据集/场景、基准测试、对比方法

- **数据集与场景**：
  - 自建75万条多视角轨迹，来自三个不同的真实机器人平台（具体平台未在摘要中列出，但隐含多种形态）。
  - 实验场景包括多种操作任务（如抓取、放置等），并引入**未见任务、背景变化、相机布局变化**来测试泛化能力。
- **基准测试（benchmark）**：未明确命名特定标准基准，但对比了当前最先进的（SOTA）基线方法。
- **对比方法**：与SOTA基线进行比较（具体方法名未在摘要中给出），并衡量其在相同跨平台泛化场景下的表现。Vidar在仅使用约1%典型数据量（~20分钟演示）的情况下优于所有基线。

### 4. 资源与算力

- **明确提及的**：未在提供的文本中说明GPU型号、数量、训练时长等具体算力信息。
- **可推断的**：使用互联网预训练的视频扩散模型作为起点，并在75万条轨迹上进行持续预训练，推测需要较大量计算资源（例如多GPU集群数天至数周），但论文未公开细节，属于信息缺失。

### 5. 实验数量与充分性

- **实验数量**：
  - 涵盖三个机器人平台上的多个操作任务。
  - 包含泛化测试：未见任务、背景、相机布局。
  - 与SOTA基线对比。
  - 未明确列出消融实验数量，但提到MIDM和具身预训练是关键组件，可能进行相应消融（文本未详述）。
- **充分性与客观性**：
  - 实验设计体现了跨平台和数据高效的优点，且测试了多种变化条件，具有一定充分性。
  - 但由于缺少详细消融实验统计和失败案例分析，公平性评判受限。此外，基准对比的方法未列出，无法直接判断是否公平选择最强基线。
  - 整体上实验覆盖了核心声称，但在细节透明度和统计严谨性上可进一步补充。

### 6. 论文的主要结论与发现

- 仅需约20分钟（~1%典型数据量）的人类演示，Vidar即可超越SOTA基线。
- 模型能够泛化到**未见任务**、**背景变化**和**相机布局变化**。
- 验证了“一个先验，多种具身”的可扩展方案：强而廉价的视频先验结合最小量机器人对齐，即可实现跨平台通用操作学习。
- 掩码逆动力学模型（MIDM）能无监督地学习动作相关像素区域，有效抑制干扰。

### 7. 优点：方法或实验设计上的亮点

- **数据高效**：大幅降低跨平台数据收集成本，对新型机器人仅需短时演示。
- **强泛化性**：利用互联网先验，能适应背景、视角等变化，优于纯端到端方法。
- **统一观测空间**：创新性地编码多模态上下文，使单一模型能处理多种机器人形态。
- **无监督掩码学习**：MIDM无需像素级标注即可聚焦动作区域，提升鲁棒性。
- **实验真实平台验证**：在三个真实机器人上收集大数据集，结果可信度高。

### 8. 不足与局限

- **算力细节缺失**：未提供训练所需的GPU型号、数量、时长，影响可复现性和资源评估。
- **对比基线不透明**：未列出具体基线方法名称和配置，无法直接评估对比公平性。
- **消融实验不够详尽**：缺乏对统一观测空间、MIDM各组件、预训练数据量等消融的定量分析。
- **应用限制**：仅测试操作任务；未讨论在复杂动态环境、长时序任务、人机交互场景中的表现；对安全性和失败案例未提及。
- **论文状态**：来源标注为ICLR-2026-Rejected-Public，尽管评分8.0，但被拒稿可能暗示存在未被披露的弱点或实验不足。
- **领域局限**：视频扩散模型推理速度较慢，可能不适合实时控制；MIDM依赖少量人类演示，如果目标平台动作空间与先验差异极大，性能可能下降。

（完）
