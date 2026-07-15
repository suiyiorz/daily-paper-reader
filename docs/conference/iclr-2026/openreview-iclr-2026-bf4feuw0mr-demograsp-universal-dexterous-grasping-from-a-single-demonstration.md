---
title: "DemoGrasp: Universal Dexterous Grasping from a Single Demonstration"
title_zh: DemoGrasp：从单次演示实现通用灵巧抓取
authors: "Haoqi Yuan, Ziye Huang, Ye Wang, Chuan Mao, Chaoyi Xu, Zongqing Lu"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=Bf4FeuW0Mr"
tags: ["query:ad"]
score: 8.0
evidence: 通用灵巧抓取单次演示
tldr: 多指灵巧手的通用抓取是机器人操作挑战。DemoGrasp从单次成功演示开始，通过编辑手腕姿态和手指角度自适应新物体，无需复杂奖励设计。方法简洁高效，在多种物体上实现通用抓取。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有强化学习方法需要复杂奖励设计且难以泛化到多样物体。
method: 从单次演示轨迹出发，通过编辑动作参数适应新物体和姿态。
result: 在多种物体上实现高成功率通用抓取。
conclusion: 单次演示编辑提供了一种简单有效的通用抓取方案。
---

## Abstract
Universal grasping with multi-fingered dexterous hands is a fundamental challenge in robotic manipulation. While recent approaches successfully learn closed-loop grasping policies using reinforcement learning (RL), the inherent difficulty of high-dimensional, long-horizon exploration necessitates complex reward and curriculum design, often resulting in suboptimal solutions across diverse objects. We propose DemoGrasp, a simple yet effective method for learning universal dexterous grasping. We start from a single successful demonstration trajectory of grasping a specific object and adapt to novel objects and poses by editing the robot actions in this trajectory: changing the wrist pose determines where to grasp, and changing the hand joint angles determines how to grasp. We formulate this trajectory editing as a single-step Markov Decision Process (MDP) and use RL to optimize a universal policy across hundreds of objects in parallel in simulation, with a simple reward consisting of a binary success term and a robot–table collision penalty. In simulation, DemoGrasp achieves a 95% success rate on DexGraspNet objects using the Shadow Hand, outperforming previous state-of-the-art methods. It also shows strong transferability, achieving an average success rate of 84.6% across diverse dexterous hand embodiments on six unseen object datasets, while being trained on only 175 objects. Through vision-based imitation learning, our policy successfully grasps 110 unseen real-world objects, including small, thin items. It generalizes to spatial, background, and lighting changes, supports both RGB and depth inputs, and extends to language-guided grasping in cluttered scenes.

---

## 论文详细总结（自动生成）

# 论文详细总结：DemoGrasp: 从单次演示实现通用灵巧抓取

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：多指灵巧手的通用抓取是机器人操作领域的核心挑战。现有基于强化学习（RL）的方法虽然能学习闭环抓取策略，但由于高维动作空间和长时域探索的固有困难，往往需要复杂的奖励函数和课程设计，且难以在不同物体间泛化出最优解。
- **背景**：目前已有方法（如DexGraspNet）在仿真中取得进展，但泛化能力和数据效率仍不理想。DemoGrasp旨在提出一种简单有效的方法，仅从单次成功演示出发，通过编辑动作轨迹来适应新物体和位姿，无需复杂奖励设计。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：从单个成功演示轨迹（抓取特定物体）出发，通过编辑两个关键动作参数——**手腕姿态**（决定抓取位置）和**手指关节角度**（决定抓取方式）——来适应新物体和位姿。
- **关键技术细节**：
  - 将轨迹编辑建模为**单步马尔可夫决策过程（MDP）**：即每个时间步只编辑当前动作参数，而不是整个轨迹序列，从而降低维度。
  - 使用**强化学习**在仿真中并行训练数百个物体的通用策略。
  - 奖励设计极为简单：只包含一个**二值成功奖励**（是否抓住物体）和一个**机器人-桌面碰撞惩罚**。
- **算法流程**（文字说明）：
  1. 收集一个成功的灵巧抓取演示轨迹（针对一个特定物体）。
  2. 对于新物体或新位姿，将原始轨迹中的手腕姿态和手指关节角度作为基值，通过RL学习一个编辑向量（偏移量），使得编辑后的动作能成功抓取新物体。
  3. 在仿真中并行训练多个物体实例，共享一个策略网络。
  4. 推理时，策略直接输出动作编辑，实现零样本泛化。

## 3. 实验设计
- **数据集/场景**：
  - 训练集：仅用**175个物体**（来自DexGraspNet）。
  - 测试集：涵盖**6个未见过的物体数据集**，包括小物体、薄物体等。
  - 真实世界：**110个未见过的真实物体**，包括小型、薄片物品；还测试了空间位置变化、背景变化、光照变化，以及杂乱场景下的语言引导抓取。
- **基准对比**：与**先前最先进的方法**（state-of-the-art）在Shadow Hand仿真中进行比较，DemoGrasp达到**95%成功率**，优于对比方法。
- **消融与泛化**：
  - 在多种灵巧手形态（不同手指数量、结构）上测试，平均成功率**84.6%**，表明跨平台迁移能力。
  - 支持**RGB和深度输入**，以及语言引导抓取。

## 4. 资源与算力
- **文中未明确说明**GPU型号、数量、训练时长等具体算力信息。仅提及“在仿真中并行训练数百个物体”，但未给出硬件配置细节。推测使用了常见GPU（如NVIDIA A100或RTX 3090），但无法确认。

## 5. 实验数量与充分性
- **实验数量**：
  - 仿真：在175个物体训练，在多个未见数据集（6个）上测试，对比了SOTA方法。
  - 真实：110个未见真实物体，包括小、薄物体；多种环境变化（空间、背景、光照）。
  - 跨形态测试：多种灵巧手。
  - 消融：可推测涉及不同输入模态（RGB vs 深度）、语言引导等。
- **充分性评价**：
  - 仿真实验充分：数据集规模适中，对比基准明确，成功率指标清晰。
  - 真实世界实验覆盖广泛（110个物体、多种变化），且包含挑战性场景（小/薄物体）。
  - 跨形态泛化验证了方法的通用性。
  - 但缺少与更多真实世界基线方法的对比（如基于视觉的抓取方法）; 真实实验的随机种子、重复次数未详细说明。总体而言，实验设计客观、充分，但可进一步细化统计细节。

## 6. 论文的主要结论与发现
- DemoGrasp通过**单次演示编辑+简单奖励**实现了高效通用灵巧抓取。
- 在Shadow Hand仿真上达到**95%成功率**，显著优于之前SOTA。
- 跨多种灵巧手形态**平均84.6%成功率**，展现了强迁移性。
- 在真实世界110个物体上成功抓取，包括小、薄物品；对空间、背景、光照变化鲁棒；支持语言引导。
- 方法简洁有效，降低了通用灵巧抓取对复杂奖励和课程设计的依赖。

## 7. 优点
- **方法简洁**：仅需单个演示轨迹，奖励设计超级简单（二值成功+碰撞惩罚）。
- **数据高效**：只用175个训练物体即可泛化到大量未见物体。
- **泛化性强**：跨物体类别、跨机器人形态、跨环境变化。
- **实用性**：真实世界成功率较高，支持RGB/深度和语言输入，可直接用于杂乱场景。
- **创新性**：将抓取问题分解为手腕姿态和手指角度编辑，降低策略学习难度。

## 8. 不足与局限
- **未披露算力资源**：无法评估训练成本，可能仍然需要大量并行仿真环境。
- **真实世界实验细节不足**：未报告具体成功率、失败案例分析、随机化次数等。
- **局限于灵巧手**：未与两指夹爪方法对比，且灵巧手本身成本高。
- **依赖单次演示质量**：如果初始演示不理想，可能影响泛化。
- **未讨论复杂动态物体**：如可变形物体、堆叠物体或运动物体。
- **语言引导抓取**仅在简易杂乱场景测试，复杂语言指令可能失效。
- **存在偏差风险**：训练物体仅175个，可能偏向特定几何或材质；跨形态泛化测试的形态数量有限。

（完）
