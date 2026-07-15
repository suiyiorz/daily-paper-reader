---
title: "Moving Out: Physically-grounded Human-AI Collaboration"
title_zh: "Moving Out: 基于物理的人机协作"
authors: "Xuhui Kang, Sung-Wook Lee, Haolin Liu, Yuyan Wang, Yen-Ling Kuo"
date: 2026-04-30
pdf: "https://openreview.net/pdf/47c9952b66edd635d9b7db5acc7e3c72ed3bc1ff.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 基于物理的人机协作基准
tldr: 目前人机协作基准大多忽略物理约束，难以反映真实场景。本文提出Moving Out基准，包含多种受物理属性影响的协作模式，如共同搬运重物和绕过障碍物。该基准涵盖了连续状态动作空间和物理动力学约束，为评估物理世界中的人机协作提供了标准平台。实验表明现有方法在此基准上存在显著挑战。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有协作基准缺乏物理属性和约束，无法模拟真实人机协作的复杂性。
method: 设计了一个包含多种物理协作模式的基准，包括连续状态空间和物理约束。
result: 展示了现有方法在物理协作任务上的不足，为后续研究提供了挑战性的基准。
conclusion: Moving Out基准推动了物理世界中人机协作的研究。
---

## Abstract
The ability to adapt to physical actions and constraints in an environment is crucial for embodied agents (e.g., robots) to effectively collaborate with humans.
Such physically grounded human-AI collaboration must account for the increased complexity of the continuous state-action space and constrained dynamics caused by physical constraints.
However, most existing collaboration benchmarks are discrete or do not consider physical attributes and constraints.
To address this, we introduce Moving Out, a human-AI collaboration benchmark that resembles a wide range of collaboration modes affected by physical attributes and constraints, such as moving heavy items together and coordinating actions to move an item around a corner.
Moving Out consists of two challenges and human-human interaction data to comprehensively evaluate models' abilities to adapt to diverse human behaviors and unseen physical attributes.
To give embodied agents the capability to collaborate with humans under physical attributes and constraints, we propose a novel method, BASS (Behavior Augmentation, Simulation, and Selection), to enhance the diversity of agents and their understanding of the outcome of actions.
We systematically compare BASS and state-of-the-art models in AI-AI and human-AI experiments, showing that BASS can effectively collaborate with both unseen AI and humans.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：现有的人机协作基准大多基于离散状态或忽略物理属性与约束，无法反映真实世界中机器人需适应连续状态-动作空间及受物理动力学限制的协作场景（如共同搬运重物、绕过障碍物）。
- **整体含义**：为解决上述问题，作者提出**Moving Out**基准，旨在模拟物理世界中多种受物理属性影响的协作模式，为评估具身智能体（如机器人）与人类在物理约束下的协作能力提供标准化平台。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：构建一个包含连续状态-动作空间和物理动力学约束的协作基准，并针对该基准提出一种增强智能体协作能力的方法。
- **关键技术细节**：
  - **Moving Out基准**：包含多个受物理属性影响的协作任务，如共同搬运重物、协调动作使物体绕过角落。涉及连续状态空间和物理动力学约束（如物体质量、摩擦、碰撞）。
  - **BASS方法**（Behavior Augmentation, Simulation, and Selection）：
    - **行为增强（Behavior Augmentation）**：增加智能体行为的多样性，使其能适应不同人类行为。
    - **模拟（Simulation）**：在模拟环境中预演动作结果，帮助智能体理解物理约束下的行动后果。
    - **选择（Selection）**：从多种候选行为中选出最优协作策略。
  - 无公式或算法代码，仅文字描述。

## 3. 实验设计：使用的数据集/场景、基准、对比方法
- **使用的数据集/场景**：Moving Out基准本身提供人类-人类交互数据，用于评估模型适应不同人类行为的能力。场景包括多种物理协作模式（搬运重物、绕过障碍等）。
- **基准**：Moving Out作为标准平台，包含两个具体挑战（未详细说明）。
- **对比方法**：与当前最先进模型（state-of-the-art models）在AI-AI和人类-AI两种实验设置下进行系统比较。具体对比方法名称未在摘要中列出。

## 4. 资源与算力
- **文中未明确说明**：摘要及元数据未提及使用的GPU型号、数量、训练时长等算力信息。如需知晓，需查看论文全文。

## 5. 实验数量与充分性
- **实验组数**：摘要仅提及在AI-AI和人类-AI两种实验设置下进行系统比较，未给出具体实验组数。可能包含多个协作任务、不同物理参数变化、消融实验等，但需全文确认。
- **实验充分性评价**：从摘要描述看，实验设计覆盖了AI-AI与人类-AI两类关键场景，并包含人类行为多样性测试，具有一定全面性。但未报告误差棒、统计显著性等，客观性信息不足。若存在消融实验，则更能验证BASS各组件贡献。初步认为实验设计较为充分，但详细结论需依赖全文。

## 6. 论文的主要结论与发现
- BASS方法在AI-AI实验和人类-AI实验中均能有效协作，性能优于当前最先进模型。
- 现有方法在Moving Out基准上表现出显著挑战，表明该基准能有效反映物理人机协作的难度。
- Moving Out基准推动了物理世界中的人机协作研究，为后续工作提供了标准评估平台。

## 7. 优点：方法或实验设计上的亮点
- **基准创新**：首次将物理属性（质量、摩擦、障碍）和连续状态-动作空间纳入人机协作基准，更贴近真实场景。
- **方法组合**：BASS通过行为增强、模拟预演和选择三步，使智能体既能适应多样性，又能理解动作物理后果，思路清晰。
- **评估全面**：包含AI-AI和人类-AI两个维度，并利用人类-人类交互数据评估对未知人类行为的泛化能力。

## 8. 不足与局限
- **实验覆盖有限**：摘要未详细说明具体任务数量、物理参数变化范围、基线方法个数等，难以判断泛化性。
- **算力与可重复性**：未提供训练资源信息，可能影响可复现性。
- **人类实验规模未知**：仅提及人类-AI实验，未说明参与者数量、任务难度分层等，可能引入偏差。
- **应用限制**：当前仅适用于模拟环境，是否直接迁移到真实物理机器人系统仍待验证。
- **缺少消融分析**：未明确说明是否对BASS的每个组件（增强、模拟、选择）进行单独消融，难以量化各贡献。

（完）
