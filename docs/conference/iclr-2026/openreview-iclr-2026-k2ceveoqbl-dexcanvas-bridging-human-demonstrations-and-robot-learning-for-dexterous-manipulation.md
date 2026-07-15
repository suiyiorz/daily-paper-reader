---
title: "DexCanvas: Bridging Human Demonstrations and Robot Learning for Dexterous Manipulation"
title_zh: DexCanvas：连接人类演示与机器人学习的灵巧操作数据集
authors: "Xinyue Xu, Jieqiang Sun, Jing Dai, Siyuan Chen, Lanjie Ma, Ke Sun, Bin Zhao, Jianbo Yuan, Yiwen Lu"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=K2ceVeoqbL"
tags: ["query:ad"]
score: 8.0
evidence: 结合人类演示与机器人灵巧操作学习，使用强化学习
tldr: 本文针对灵巧操作中人类演示到机器人策略迁移的瓶颈，提出了DexCanvas大规模混合数据集。该数据集包含7000小时灵巧手-物交互，覆盖21种基本操作类型，并通过强化学习管道在仿真中复现人类行为，发现接触力。DexCanvas是首个同时提供多视图RGB-D、运动捕捉和物理一致接触力数据的灵巧操作数据集，为机器人学习提供了高质量的监督信号。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 灵巧操作需要大规模、多模态的人类演示数据，但现有数据集缺乏物理一致性。
method: 构建包含7000小时虚实结合的手-物交互数据集，采用强化学习在仿真中训练策略。
result: 数据集覆盖21种操作类型，提供同步多视图RGB-D、运动捕捉和接触力数据。
conclusion: DexCanvas提供了首个物理一致的灵巧操作数据集，为机器人学习奠定基础。
---

## Abstract
We present DexCanvas, a large-scale hybrid real-synthetic human manipulation dataset containing 7,000 hours of dexterous hand-object interactions seeded from 70 hours of real human demonstrations, organized across 21 fundamental manipulation types based on the Cutkosky taxonomy. Each entry combines synchronized multi-view RGB-D, high-precision mocap with MANO hand parameters, and per-frame contact points with physically consistent force profiles. Our real-to-sim pipeline uses reinforcement learning to train policies that control an actuated MANO hand in physics simulation, reproducing human demonstrations while discovering the underlying contact forces that generate the observed object motion. DexCanvas is the first manipulation dataset to combine large-scale real demonstrations, systematic skill coverage based on established taxonomies, and physics-validated contact annotations. The dataset can facilitate research in robotic manipulation learning, contact-rich control, and skill transfer across different hand morphologies.

---

## 论文详细总结（自动生成）

# DexCanvas：连接人类演示与机器人学习的灵巧操作数据集（论文总结）

## 1. 论文的核心问题与整体含义

- **研究动机与背景**：灵巧操作是机器人学中的核心挑战，需要大规模、多模态的人类演示数据来训练策略。然而，现有数据集普遍缺乏**物理一致性**（如接触力信息），导致人类演示到机器人策略的迁移存在瓶颈。具体表现为：真实人类演示数据无法提供精确的接触力，而纯仿真数据又缺乏真实感。
- **整体目标**：通过构建一个大规模、混合虚实的人类操作数据集，同时提供多视图RGB-D、运动捕捉和物理一致的接触力数据，为机器人灵巧操作学习奠定数据基础，促进接触丰富的控制与技能迁移研究。

## 2. 论文提出的方法论

- **核心思想**：采用“真实演示种子 + 仿真复现”的混合策略，将70小时真实人类演示扩展为7000小时的虚实结合数据，并通过强化学习在物理仿真中重放人类行为，同时推断出真实的接触力。
- **关键技术细节**：
  - **数据采集**：采集多视图RGB-D视频、高精度运动捕捉（Mocap）及MANO手部参数。
  - **真实到仿真的管道（Real-to-Sim Pipeline）**：使用强化学习训练一个策略，控制物理仿真中的MANO手模型，使其复现人类演示的运动轨迹，同时通过仿真物理引擎发现产生观测物体运动所需的接触力。
  - **数据集组织**：基于Cutkosky分类法，覆盖21种基本操作类型（如抓取、旋转、按压等）。
- **算法流程（文字说明）**：
  1. 从真实人类演示中提取手部运动（MANO参数）和物体位姿；
  2. 在物理仿真中初始化相同场景；
  3. 使用强化学习（奖励函数为运动跟踪误差最小化）训练策略，驱动仿真手模仿真实轨迹；
  4. 仿真过程中记录每帧的接触点位置与接触力（物理引擎提供）；
  5. 将所有数据同步对齐，输出包含RGB-D、运动捕捉、接触点及力的多模态样本。

## 3. 实验设计

- **数据集**：DexCanvas自身即为论文主要贡献，包含7000小时手-物交互数据。
- **Benchmark**：文中未明确列出具体基准数据集或对比方法，但提及该数据集可用于机器人操作学习、接触丰富控制、不同手形态间的技能迁移等研究。
- **对比方法**：未提及与其他数据集的定量对比实验，主要定位为“首个同时具备大规模真实演示、系统技能覆盖和物理验证接触注释的操作数据集”。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量以及训练时长等具体算力信息。仅提到“强化学习管道”在仿真中复现人类行为，但未提供计算资源细节。

## 5. 实验数量与充分性

- **实验数量**：仅从摘要无法得知具体的消融实验或对比实验数量。论文似乎侧重于**数据集构建**本身，而非在基准任务上的大量实验评估。
- **充分性评估**：数据集规模（7000小时）和分类覆盖面（21种操作类型）较为充分，但缺乏对数据集质量（如接触力精度、仿真与现实差异）的定量验证实验。可能存在仿真与现实间的**Sim-to-Real差距**未被充分讨论。

## 6. 论文的主要结论与发现

- DexCanvas是**首个**同时提供大规模真实演示、基于既定分类学的系统技能覆盖以及物理验证接触注释的灵巧操作数据集。
- 通过真实到仿真的管道，能够从人类演示中恢复物理一致的接触力，为机器人学习提供更高质量的监督信号。
- 该数据集有望推动灵巧操作中的策略学习、接触力建模和手形态迁移研究。

## 7. 优点

- **混合虚实结合**：兼顾真实演示的多样性与仿真数据的物理可解释性。
- **多模态同步**：同时提供RGB-D、运动捕捉和接触力，支持多种学习范式。
- **系统分类覆盖**：基于Cutkosky分类法组织，保证操作类型的全面性。
- **物理一致性**：通过强化学习在仿真中发现的接触力，比单纯从真实数据中估计更准确可靠。

## 8. 不足与局限

- **实验验证不完整**：论文未提供在具体下游任务（如机器人抓取成功率）上的对比实验结果，难以评估数据集的实际增益。
- **仿真与现实差距**：依赖物理仿真复现接触力，但仿真中的接触模型可能无法完全匹配真实物理，导致力数据存在偏差。
- **算力消耗未披露**：7000小时仿真数据的生成需要大量计算资源，但未说明其可行性或成本。
- **仅有摘要信息**：由于可获取内容有限，无法评估方法细节的严谨性（如RL奖励函数设计、数据平衡性等）。

（完）
