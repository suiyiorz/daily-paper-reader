---
title: "ManipTrans: Efficient Dexterous Bimanual Manipulation Transfer via Residual Learning"
title_zh: "ManipTrans: 通过残差学习实现高效灵巧双手操作迁移"
authors: "Li, Kailin, Li, Puhao, Liu, Tengyu, Li, Yuyang, Huang, Siyuan"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Li_ManipTrans_Efficient_Dexterous_Bimanual_Manipulation_Transfer_via_Residual_Learning_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 通过残差学习实现灵巧双手操作迁移
tldr: 灵巧双手操作是机器人操作的重要方向，但传统RL和遥操作难以获得大规模类人操作序列。本文提出ManipTrans，两阶段方法：先预训练通用轨迹模仿器来模拟手部运动，再微调残差模块以适应交互约束。实验表明，该方法在多种双手操作任务上超越了现有方法，显著提高了数据效率和操作精度。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1803, \"height\": 609, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1689, \"height\": 599, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1694, \"height\": 461, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 868, \"height\": 319, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 858, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 868, \"height\": 361, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 864, \"height\": 294, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 847, \"height\": 207, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-li-maniptrans-efficient-dexterous-bimanual-manipulation-transfer-via-residual-learning-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 847, \"height\": 113, \"label\": \"Table\"}]"
motivation: 获取大规模类人双手操作序列困难，现有方法在泛化性和数据效率上不足。
method: 提出ManipTrans两阶段方法：预训练轨迹模仿器，再微调残差模块，将人类技能迁移到机器人手。
result: 在仿真中实现了对复杂双手操作任务的高效学习和精确执行。
conclusion: ManipTrans提供了一种高效的数据驱动方法，用于灵巧双手操作技能的迁移。
---

## Abstract
Human hands play a central role in interacting, motivating increasing research in dexterous robotic manipulation. Data-driven embodied AI algorithms demand precise, large-scale, human-like manipulation sequences, which are challenging to obtain with conventional reinforcement learning or real-world teleoperation. To address this, we introduce ManipTrans, a novel two-stage method for efficiently transferring human bimanual skills to dexterous robotic hands in simulation. ManipTrans first pre-trains a generalist trajectory imitator to mimic hand motion, then fine-tunes a specific residual module under interaction constraints, enabling efficient learning and accurate execution of complex bimanual tasks. Experiments show that ManipTrans surpasses state-of-the-art methods in success rate, fidelity, and efficiency. Leveraging ManipTrans, we transfer multiple hand-object datasets to robotic hands, creating DexManipNet, a large-scale dataset featuring previously unexplored tasks like pen capping and bottle unscrewing. DexManipNet comprises 3.3K episodes of robotic manipulation and is easily extensible, facilitating further policy training for dexterous hands and enabling real-world deployments.

---

## 论文详细总结（自动生成）

# 详细中文总结：ManipTrans

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：如何高效地将人类灵巧双手操作技能（尤其是高精度、复杂双手任务，如拧瓶盖、盖笔帽）迁移到机器人灵巧手上，生成物理合理、符合任务的大规模操作序列。
- **研究动机**：传统强化学习需要精心设计任务特定的奖励函数，可扩展性差；遥操作成本高昂且仅产生特定本体的数据。从人类演示中模仿学习是一种有前景的替代方案，但面临人-机器人手形态差异、运动捕捉数据误差累积、双手操作高维动作空间等挑战。
- **整体含义**：本文旨在提出一种通用、高效、无需任务特定奖励的迁移框架，能够处理多种灵巧手本体，并生成可用于下游策略训练的大规模高质量数据集。

## 2. 论文提出的方法论：核心思想、关键技术细节
### 核心思想
将操作技能迁移解耦为两个阶段：  
1. **预训练通用手部轨迹模仿器**：学习精确模仿人类手指运动，忽略物体交互。  
2. **残差学习模块微调**：在物理仿真中，通过残差动作修正初始模仿动作，确保与物体稳定接触并实现协同双手操作。

### 关键技术细节
- **阶段一：手部轨迹模仿（Hand Trajectory Imitating）**
  - 状态：包括目标手部轨迹和当前本体感知（关节角、腕部姿态及速度）。
  - 奖励函数：腕部跟踪奖励、手指模仿奖励（加权指数距离，重点拇指/食指/中指指尖）、平滑性奖励（惩罚关节功率）。
  - 训练策略：使用大规模纯手部数据集（FAVOR、OakInk-V2等）及镜像增强；采用参考状态初始化（RSI）、早期终止、课程学习（逐渐降低手指误差阈值 ϵfinger 从6cm到4cm）。

- **阶段二：交互残差学习（Residual Learning for Interaction）**
  - 状态扩展：增加物体相对位姿、速度、质心、重力、BPS形状编码、手-物距离、接触力（触觉反馈）。
  - 残差动作： $\mathbf{a}_t = \mathbf{a}_t^I + \Delta\mathbf{a}_t^R$，残差模块初始化为零均值高斯，并采用热身策略防止崩溃。
  - 奖励函数：在阶段一奖励基础上增加物体跟随奖励（位姿/速度误差）和接触力奖励（当手-物距离小于阈值时鼓励接触力非零）。
  - 训练策略：松弛机制——初期设重力为零、摩擦系数高，逐渐恢复正常；RSI、早期终止（物体位姿误差超阈值或MoCap抓取时接触力为零则终止）；课程学习（物体误差阈值从90°/6cm降低到30°/2cm）。

- **算法框架**：两个阶段均采用PPO算法，Actor-Critic结构，训练时使用4096个并行环境（Isaac Gym）。

## 3. 实验设计：数据集、Benchmark、对比方法
### 数据集
- **定量评估**：OakInk-V2官方验证集（约80个精选序列，4-20秒，包含约50%双手任务）。
- **定性展示**：GRAB、FAVOR、ARCTIC等数据集。
- **构建新数据集DexManipNet**：基于FAVOR和OakInk-V2迁移生成，包含61个任务、3.3K episode（约1.34M帧）、1200个物体，其中约600条双手序列。

### Benchmark指标
- 每帧平均物体旋转误差 Er（度）、平移误差 Et（cm）
- 平均每关节位置误差 Ej（cm）、平均每指尖位置误差 Eft（cm）
- 成功率 SR（Er<30°, Et<3cm, Ej<8cm, Eft<6cm，双手任务任一手失败则整体失败）

### 对比方法
1. **RL-Combined基线**：
   - Retarget-Only：直接重定向无学习（几乎不可行）
   - RL-Only：仅用轨迹跟踪奖励从零PPO训练
   - Retarget + Residual：先重定向后加残差学习
2. **优化方法**：QuasiSim（定性对比，效率差异明显）
3. **跨本体验证**：Shadow Hand（22DoF）、MANO手（22DoF）、Inspire Hand（12DoF）、Allegro Hand（16DoF）
4. **真实部署**：两台7-DoF Realman臂 + Inspire Hands（带触觉传感器）
5. **策略学习benchmark**：在DexManipNet上训练IBC、BET、Diffusion Policy (UNet/Transformer) 进行瓶重排任务。

## 4. 资源与算力
- **硬件**：NVIDIA RTX 4090 GPU + Intel i9-13900KF CPU，单机训练。
- **仿真环境**：Isaac Gym，4096个并行环境，时间步1/60s。
- **训练时长**：对于60帧单手轨迹，ManipTrans约需15分钟训练达到稳健结果，而QuasiSim约需40小时优化。论文未明确给出所有实验的总训练时长，但强调效率显著。
- **未明确说明**：完整的训练轮次、总体GPU小时数。

## 5. 实验数量与充分性
- **数量丰富**：定量对比（表1）、定性对比（图3、4）、跨本体实验（图5）、真实部署（图6）、消融实验（图7）、策略学习Benchmark（表2）。
- **消融实验覆盖全面**：
  - 触觉信息（图7a）：移除接触力作为观测/奖励/终止条件。
  - 训练策略（图7b）：移除重力量松驰、增加摩擦力、移除阈值松驰。
- **公平性**：对RL-Combined方法重新实现了代表性基线；对比QuasiSim仅为定性，因对方未公开完整代码和验证集；指标设计严格，双手任务成功率更严苛。
- **充分性评价**：实验充足，涵盖从定量到定性、从仿真到真实、从单任务到多任务、从多种本体的评估，消融实验合理且能说明各组件贡献。

## 6. 论文的主要结论与发现
- ManipTrans在两阶段框架下，显著优于所有基线方法，在单/双手任务上均取得最高成功率和最低错误率（表1）。
- 效率极高：训练时间比优化方法（QuasiSim）降低两个数量级。
- 跨本体泛化能力强：无需调整超参数即可在多种灵巧手上实现流畅操作。
- 真实部署可行：成功实现了诸如打开牙膏盖等精细双手任务，这是以往遥操作难以实现的。
- 构建的DexManipNet数据集为后续策略学习提供了宝贵资源，但当前基准测试显示任务仍有挑战性（成功率偏低）。

## 7. 优点：方法和实验设计亮点
- **方法层面**：
  - 解耦手部模仿与物体交互，大幅降低动作空间复杂度，提高训练效率和通用性。
  - 无需任务特定奖励函数，只需通用物理约束，易于扩展。
  - 引入触觉信息（接触力）作为观测、奖励和终止条件，显著提升接触稳健性。
  - 松弛训练策略（初期间隙重力/高摩擦）有效避免局部最优，加速收敛。
- **实验设计**：
  - 定量指标严格，双手任务成功条件对两手均严格，能反映真实场景。
  - 跨本体实验和真实部署验证了方法的实用性。
  - 消融实验清晰展示各组件的必要性。

## 8. 不足与局限
- **失败情况**：部分MoCap序列因交互姿态噪声过大或物体模型不精确（尤其铰接物体）无法成功迁移。
- **局限性**：
  - 依赖相对精确的物体仿真模型，对于变形物体或超大物体未覆盖。
  - 真实部署时需通过优化拟合将仿真12-DoF降到真实6-DoF，引入额外步骤。
  - 当前仅在仿真中生成数据，未在真实场景中进行策略学习闭环验证。
  - 策略学习benchmark中所有方法在瓶重排任务上成功率较低（最高18.44%），说明任务仍具挑战，数据集潜力有待挖掘。
- **偏差风险**：主要基于两个数据集（FAVOR、OakInk-V2）迁移，可能未覆盖所有操作类型；评价集中在预定义阈值，可能忽略边缘成功情况。

（完）
