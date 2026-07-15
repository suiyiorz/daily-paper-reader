---
title: "OXE-AugE: A Large-Scale Robot Augmentation of OXE for Scaling Cross-Embodiment Policy Learning"
title_zh: "OXE-AugE: 面向跨体现策略学习的大规模机器人OXE数据增强"
authors: "Guanhua Ji, Harsha Polavaram, Lawrence Yunliang Chen, Sandeep Bajamahal, Zehan Ma, Simeon Adebola, Chenfeng Xu, Ken Goldberg"
date: 2026-04-30
pdf: "https://openreview.net/pdf/082fc2985fa8b69e0b917dd71e19f4732554dc63.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 用于跨体现机器人策略学习的数据增强
tldr: 针对OXE数据集分布不平衡导致跨体现策略过拟合的问题，提出AugE数据增强工具包，通过合成多样化机器人-场景组合，有效提升通用策略在不同机器人本体上的泛化能力。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: "现有OXE数据集前四种机器人占85%，易导致过拟合。"
method: 提出AugE数据增强框架，生成多样化机器人-场景数据。
result: 在多个测试机器人上，策略泛化性能显著提升。
conclusion: 数据增强是提升跨体现策略泛化的有效手段。
---

## Abstract
Large and diverse datasets are needed for training generalist robot policies that can control a variety of robot embodiments--robot arm and gripper combinations--across diverse tasks and environments. As re-collecting demonstrations and retraining for each new embodiment are prohibitively costly, we study whether existing robot data can be augmented to improve transfer and generalization across embodiments. The Open X-Embodiment (OXE) dataset, which aggregates demonstrations from over 60 robot datasets, has been widely used for training generalist policies. However, it is highly imbalanced: the top four robot types account for over 85% of its real data, which risks overfitting to robot--scene combinations. We present AugE-Toolkit, a scalable robot augmentation pipeline, and OXE-AugE, a high-quality open-source dataset that augments OXE with 9 different robot embodiments. OXE-AugE provides over 4.4 million trajectories, more than triple the size of the original OXE. We conduct a systematic study of how scaling robot augmentation impacts cross-embodiment learning. Results suggest that augmenting datasets with diverse arms and grippers improves policy performance not only on the augmented robots, but also on unseen robots and even the original robots under distribution shifts. In physical experiments, fine-tuning generalist policies such as OpenVLA and $\pi_0$ on OXE-AugE improves success rates by 24-45% on unseen robot-gripper combinations across four real-world manipulation tasks. Project website: https://OXE-AugE.github.io/.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：训练通用机器人策略需要大规模、多样化的数据集，使其能控制多种机器人本体（机械臂-夹爪组合）完成不同任务。然而，为每一种新本体重新采集示教数据和重新训练代价高昂。
- **核心问题**：现有的 Open X-Embodiment (OXE) 数据集虽然被广泛用于训练通用策略，但其分布极不平衡——前四种机器人类型占据了超过 85% 的真实数据，导致策略容易对特定的“机器人-场景”组合过拟合，泛化到新本体时性能下降。
- **整体含义**：通过数据增强技术，利用已有机器人数据合成更多样化的本体-场景组合，可以低成本地提升跨体现策略的泛化能力，避免重复采集数据。

## 2. 论文提出的方法论

- **核心思想**：开发一个可扩展的机器人数据增强管道 AugE-Toolkit，对 OXE 数据集进行增强，生成包含 9 种不同机器人本体的高质量数据集 OXE-AugE。
- **关键技术细节**：
  - 利用已有的真实示教数据，通过替换机器人本体（臂+夹爪）并合成对应的视觉/状态信息，生成新的“机器人-场景”组合。
  - 增强过程中保持任务语义不变，只改变执行机构的形态。
  - 管道设计为模块化、可扩展，支持添加新的机器人本体模型。
- **算法流程（文字描述）**：
  1. 从 OXE 数据集中选取基础示教轨迹（来自原始机器人）。
  2. 对于每条轨迹，随机选取一个目标机器人本体（来自预定义的 9 种配置）。
  3. 通过几何变换和渲染，将原始演示中的机器人替换为目标机器人，同时调整夹爪姿态和末端执行器信息。
  4. 生成新的观测图像和状态向量，保持场景背景、任务目标不变。
  5. 所有增强轨迹与原始轨迹一起构成 OXE-AugE 数据集。
- **公式说明**：论文未给出显式公式，核心是数据生成流程的工程实现。

## 3. 实验设计

- **使用的数据集**：
  - 原始 OXE 数据集（包含 60+ 机器人数据，约 1.4M 轨迹）。
  - 增强后的 OXE-AugE 数据集（包含 9 种不同机器人本体，共 4.4M+ 轨迹，为原数据的三倍以上）。
- **benchmark 与场景**：
  - 物理实验：在 4 种真实世界的操作任务上进行测试，涉及未见过的机器人-夹爪组合。
  - 评估指标：任务成功率（Success Rate）。
- **对比方法**：
  - 原始通用策略（如 OpenVLA 和 π₀）直接在 OXE 上训练的结果作为基线。
  - 在 OXE-AugE 上微调后的策略性能。
  - 同时比较了在增强后的机器人、未见过的机器人以及原机器人（存在分布偏移）上的表现。

## 4. 资源与算力

- **论文中未明确说明**：未提及训练所使用的 GPU 型号、数量、训练时长等具体算力信息。仅强调增强后的数据集规模巨大（4.4M 轨迹），但未给出训练这些策略所需的资源细节。

## 5. 实验数量与充分性

- **实验组数**：
  - 系统性研究了缩放机器人增强对跨体现学习的影响（涉及不同增强规模、不同机器人类型）。
  - 物理实验：在 4 个真实世界任务上测试，对比基线（原始策略）和微调后的策略。
  - 推测还包括在原始机器人上的分布偏移测试、消融实验（不同增强组合）等（摘要中提及“systematic study”）。
- **充分性评估**：
  - 实验覆盖了增强机器人、未见机器人、原机器人三种场景，具有较好的代表性。
  - 物理实验数量有限（4 个任务），但结果一致显示成功率提升 24-45%，说明增强的有效性。
  - 缺乏对其他常见通用策略（如 RT-2、Octo）的对比，以及跨更多本体种类的测试。
  - 实验整体较为充分，公平性较好（基线和微调均使用相同策略架构），但可考虑增加更多消融。

## 6. 论文的主要结论与发现

- 数据增强（合成多样化机器人-场景组合）能显著提升跨体现策略的泛化能力。
- 增强后的数据集不仅提高了在增强机器人上的性能，也提高了在未见过的机器人上的成功率，甚至在原机器人（存在分布偏移）上也有改善。
- 在物理实验中，对 OpenVLA 和 π₀ 进行微调后，成功率分别提升 24% 到 45%。
- 数据增强是一种低成本、可扩展的替代重复数据采集的有效手段。

## 7. 优点

- **方法创新**：提出了一种系统性的机器人数据增强框架 AugE-Toolkit，解决了 OXE 数据集严重不平衡的问题，可方便扩展到更多本体。
- **大规模开源**：生成了 OXE-AugE 数据集（4.4M+ 轨迹），并开源，促进社区进一步研究。
- **实验结论清晰**：通过多个场景和本体的测试，证明了增强的有效性，尤其是对未见本体的泛化提升有实际意义。
- **应用价值**：降低了对新机器人本体采集示教数据的成本，推动通用机器人策略的实际部署。

## 8. 不足与局限

- **实验覆盖有限**：仅测试了 2 种通用策略（OpenVLA 和 π₀）和 4 个物理任务，缺乏对更多策略架构（如 RT-2、GROOT）和更复杂任务（如装配、移动操作）的验证。
- **偏差风险**：增强过程依赖于原始示教数据的质量；若原始数据本身存在偏差（如特定场景、物体），增强可能放大这些偏差。
- **算力消耗未说明**：未提供训练增强所需算力，影响可复现性和公平比较。
- **应用限制**：当前增强仅适用于固定基座臂-夹爪组合，尚未涉及移动机器人、灵巧手等更复杂的本体形态。
- **理论分析不足**：缺乏对泛化性能提升的理论解释（如为什么增强能改善原机器人的分布偏移性能）。

（完）
