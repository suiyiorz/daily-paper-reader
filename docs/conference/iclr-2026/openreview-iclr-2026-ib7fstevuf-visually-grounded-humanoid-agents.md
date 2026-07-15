---
title: Visually-grounded Humanoid Agents
title_zh: 视觉接地的人形智能体
authors: "Hang Ye, Fan Lu, Xiaoxuan Ma, Wayne Wu, Kwan-Yee Lin, Yizhou Wang"
date: 2025-09-09
pdf: "https://openreview.net/pdf?id=IB7FSTevuF"
tags: ["query:ad"]
score: 8.0
evidence: 基于视觉的人形智能体在3D场景中的主动行为
tldr: 现有数字人体系统多为被动动画，无法适应新环境。本文提出视觉接地人形智能体范式，通过世界-智能体双层架构使数字人仅依赖视觉观察和目标在新场景中主动感知、推理和行动。该方法支持大规模部署，可生成自然的目标导向行为，为虚拟人应用提供可扩展方案。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有数字人系统依赖特权状态或脚本控制，无法在新环境中自主行为。
method: 提出世界-智能体双层范式，智能体通过视觉观察和指定目标在3D场景中完成感知、推理和行为执行。
result: 在多种3D场景中实现数字人的自发、自然、目标导向行为。
conclusion: 为大规模虚拟人主动行为生成提供了可扩展框架，推动数字人应用发展。
---

## Abstract
Digital human generation has been studied for decades and supports a wide range of real-world applications. However, most existing systems are **passively** animated, relying on privileged state or scripted control, which limits scalability to novel, unseen environments.
We instead ask: how can digital humans **actively** behave using only *visual observations* and *specified goals* in novel scenes? Achieving this would enable populating any 3D environments with any digital humans, at scale, that exhibit spontaneous, natural, goal-directed behaviors.
To this end, we introduce **Visually-grounded Humanoid Agents**, a coupled two-layer (world-agent) paradigm that replicates humans at multiple levels: they *look, perceive, reason, and behave* like real people in real-world 3D scenes. The World Layer provides a structured substrate for interaction, by reconstructing semantically rich 3D Gaussian scenes from real-world videos via an occlusion-aware semantic scene reconstruction pipeline, and accommodating animatable Gaussian-based human avatars within them.
The Agent Layer transforms these avatars into autonomous humanoid agents, equipping them with first-person RGB-D perception and enabling them to perform accurate, embodied planning with spatial-awareness and iterative reasoning, which is then executed at the low level as full-body actions to drive their behaviors in the scene.
We further introduce a benchmark to evaluate humanoid–scene interaction within reconstructed 3D environments. Experimental results demonstrate that our agents achieve robust autonomous behavior through effective planning and action execution, yielding higher task success rates and fewer collisions compared to both ablations and state-of-the-art planning methods.
This work offers a new perspective on populating scenes with digital humans in an active manner, enabling more research opportunities for the community and fostering human-centric embodied AI.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文元数据和摘要内容生成的结构化、深入、客观的中文总结。

# 论文总结：Visually-grounded Humanoid Agents（视觉接地的人形智能体）

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：现有数字人系统大多是被动动画，依赖特权状态（如全局信息）或脚本控制，无法在未见过的全新3D场景中自主适应和行动。如何让数字人仅通过**视觉观察**和**指定目标**，在新场景中像真人一样主动感知、推理并执行目标导向的行为？
- **背景意义**：该问题的解决能实现大规模、可迁移的数字人主动行为生成，为虚拟现实、游戏、人机交互等应用提供可扩展方案，推动人机共融的具身智能发展。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：提出**世界-智能体两层范式**，将数字人视为具有视觉感知和自主决策能力的智能体，模仿人类“看、感知、推理、行动”的完整循环。
- **关键技术细节**：
  - **世界层**：从真实世界视频中重建语义丰富的3D高斯场景（通过遮挡感知语义场景重建管线），并容纳可动画化的高斯人体模型。
  - **智能体层**：将人体模型转化为自主人形智能体，配备第一人称RGB-D感知，使其能够在场景中进行**空间感知的分层规划**和**迭代推理**，底层驱动全身动作执行。
- **算法流程（文字说明）**：
  1. 输入：真实世界视频 → 重建3D高斯场景（世界层）。
  2. 智能体从场景中获取第一人称RGB-D观察和指定目标。
  3. 智能体进行感知与规划：结合目标、空间语义进行迭代推理，生成高层行动计划。
  4. 执行：将计划映射为低层全身动作（如行走、抓取），驱动数字人在场景中行动。
  5. 若行动中遇到障碍或目标变化，智能体重新规划。

## 3. 实验设计
- **数据集/场景**：使用**重建的3D室内环境**（从真实世界视频重建），具体场景类型未在摘要中明确列出，但提及多种3D场景。
- **基准测试**：作者专门提出了一个新基准来评估**人形智能体与场景的交互**，在该基准上进行测试。
- **对比方法**：
  - 消融实验（去掉规划模块、感知模块等变体）
  - 当前最优的规划方法（state-of-the-art planning methods）

## 4. 资源与算力
- **文中未明确说明**：摘要和元数据中没有提及GPU型号、数量、训练时长等算力信息。可能正文中有具体描述，但提供的材料中未提及。因此此处指出：**未明确说明算力资源**。

## 5. 实验数量与充分性
- **实验数量**：据摘要，主要开展了：① 在重建3D场景上的自主行为评估（与SOTA方法对比）；② 消融实验（对比不同模块去除的效果）。未明确列出多个数据集或场景数量，但提及“多种3D场景”。
- **充分性评估**：
  - **正面**：覆盖了任务成功率（higher task success rates）和碰撞次数（fewer collisions）两个关键指标，对比了多种变体和SOTA方法，具有较好客观性。
  - **不足**：实验场景种类、任务类型数量、统计显著性等细节未提供，可能存在场景多样性不足或任务单一的风险。另外，未在真实物理环境或复杂动态场景中验证，鲁棒性尚待考证。

## 6. 主要结论与发现
- 提出的人形智能体通过有效规划和行动执行，实现了鲁棒的自主行为。
- 与消融版本和当前最优规划方法相比，**任务成功率更高，碰撞更少**。
- 工作提供了一种**主动填充3D场景数字人**的新视角，为社区带来更多研究机会，并促进以人为中心的具身AI。

## 7. 优点（方法或实验设计亮点）
- **创新范式**：世界-智能体双层架构将感知与规划解耦，支持大规模部署和场景迁移。
- **视觉接地**：完全依赖第一人称RGB-D观察，无需特权状态或脚本，更接近真实人类行为。
- **可解释性**：通过分层规划和迭代推理，可能提供行为决策的中间可视化（推测，摘要中提及spatial-awareness with iterative reasoning）。
- **实验指标合理**：同时衡量成功率与碰撞次数，覆盖有效性与安全性。

## 8. 不足与局限
- **实验覆盖有限**：仅在一个基准（自身提出的）上验证，未在公开的3D场景标准数据集（如Habitat、AI2-THOR等）上对比，可比性可能受限。
- **真实感与物理约束**：重建的3D高斯场景可能存在与现实世界不一致之处，且智能体动作未考虑真实物理碰撞、重力等细节（摘要未明确物理模拟）。
- **计算成本**：3D高斯场景重建与智能体规划可能计算量大，文未提及实时性或部署成本。
- **任务多样性**：摘要仅提及目标导向行为，未明确任务类型（如导航、操作、社交互动等），泛化性存疑。
- **隐式偏差**：仅依赖RGB-D感知可能对环境光照、纹理变化敏感，鲁棒性未充分讨论。

（完）
