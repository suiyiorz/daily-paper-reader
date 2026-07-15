---
title: Learning Object-Centric Motion Priors from Human for Robotic Dexterous Manipulation
title_zh: 从人类数据学习以物体为中心的运动先验用于机器人灵巧操作
authors: "Zhengdong Hong, Guofeng Zhang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38892/42854"
tags: ["query:ad"]
score: 8.0
evidence: 机器人灵巧操作，强化学习
tldr: 针对灵巧手操作高维度和复杂动力学挑战，从人-物交互数据中学习以物体为中心的运动先验，预测未来手-物状态作为通用奖励项，减少任务特定奖励工程。在三个模拟和真实操作任务中，该方法优于现有最先进技术。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38892/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1845, \"height\": 750, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38892/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1850, \"height\": 608, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38892/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1840, \"height\": 1050, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38892/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 859, \"height\": 547, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38892/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 828, \"height\": 630, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38892/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 485, \"height\": 334, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38892/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 865, \"height\": 222, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38892/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 868, \"height\": 224, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38892/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 850, \"height\": 303, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38892/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 852, \"height\": 302, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38892/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1609, \"height\": 301, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38892/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1613, \"height\": 300, \"label\": \"Table\"}]"
motivation: 灵巧手操作维度高、动力学复杂，现有方法依赖任务特定奖励工程。
method: 利用人-物交互数据集学习未来手-物状态预测，作为强化学习的通用奖励项。
result: 在多个模拟和真实操作任务中取得超越现有方法的性能。
conclusion: 该方法提升了灵巧操作的泛化能力并减少了对人工标注的依赖。
---

## Abstract
Manipulating diverse objects with multi-fingered dexterous hands is challenging due to the high dimensionality and complex dynamics. Human-Object Interaction (HOI) datasets provide rich knowledge about task information and embodied interactions. Instead of solely imitating the human demonstrations, our method learns to holistically predict future hand-object states by leveraging these datasets. The predicted future states of the object can serve as a general-purpose reward term for reinforcement learning, reducing reliance on task-specific reward engineering and enhancing generalization across tasks. We conduct extensive experiments on three manipulation tasks in simulation and the real world. Our approach outperforms existing SOTA methods in both success rate and generalizability on novel objects. Furthermore, we validate the cross-embodiment compatibility of our methods by successfully deploying the skills on different robot hands.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：多指灵巧手的操作任务面临高维动作空间和复杂接触动力学的挑战。现有方法如基于模型的轨迹优化难以处理动态复杂性；模型无关的强化学习效率低且依赖大量任务特定奖励工程设计；模仿学习需要大规模机器人演示数据，收集困难。
- **研究动机**：人类视频或人-物交互（HOI）数据蕴含丰富的操作经验，但现有方法主要模仿人手运动或设计任务特定奖励，忽略了人在操作时**下意识预测物体未来状态**的能力。作者认为学习以物体为中心的运动先验（即预测未来手-物状态）可以提供更通用、高效的任务级引导，减少对任务特定奖励的依赖，提升跨任务泛化能力。
- **整体含义**：提出一种层次化框架，从公开HOI数据集（Dex-YCB、ARCTIC）学习运动先验，用于引导强化学习策略，在多个灵巧操作任务中实现零样本Sim-to-Real迁移，并验证了跨机械手形态的兼容性。

## 2. 论文提出的方法论：核心思想、关键技术细节
### 核心思想
- 将人手-物体交互视为整体，使用自回归Transformer预测未来手-物联合状态（hand + object poses）。
- 利用预测得到的物体状态轨迹作为强化学习的通用奖励项（object following reward），避免任务特定奖励设计。
- 结合运动重定向将预测的人手运动映射到机器人手，再通过RL在仿真中微调，最后零样本迁移到真实机器人。

### 关键技术细节
1. **手-物状态预测器（Motion Predictor）**
   - 使用Dex-YCB和ARCTIC数据集，每帧提供6DoF手-物姿态。人手用MANO参数表示，物体用四元数+平移表示。
   - 利用最远点采样（FPS）提取物体点云（100点），经PointNet得到形状特征。
   - 输入历史10帧手-物状态 + 形状特征，经6层GPT-2 Transformer自回归预测后续状态。损失函数为加权MSE（物体权重β=2，人手α=1）。
   - 训练时统一模型处理不同数据集（ARCTIC为双手，Dex-YCB单手套零填充）。

2. **机器人手状态提取（Retargeting）**
   - 对机器人手，先通过MANO适配（修改FrankMocap优化目标）将机器人关节3D位置对齐到MANO关节，得到兼容的MANO参数。
   - 使用AnyTeleop的优化方法，最小化机器人指尖与预测人手指尖的距离，并加入时间平滑正则项，输出机器人关节轨迹。

3. **轨迹引导的强化学习（Trajectory-Guided RL）**
   - 策略输入：机器人关节位置 + 物体6D位姿。
   - 动作输出：delta末端执行器位姿 + delta手部关节位置，经逆运动学解算为机械臂关节位置。
   - 奖励函数包含四项：
     - **手部跟随奖励** \( R_f \)：鼓励机器人手关节、末端位置/朝向跟随参考轨迹。
     - **物体跟随奖励** \( R_o \)：鼓励物体位姿跟随预测轨迹，公式为指数函数形式的位置差和旋转角差。
     - **接触奖励** \( R_{\text{contact}} \)：鼓励拇指与至少另一手指接触物体（仿真碰撞检测）。
     - **成功奖励** \( R_{\text{success}} \)：任务完成时给大奖励。
     - 避障任务中增加障碍物碰撞惩罚。
   - 采用PPO算法，在SAPIEN3仿真中训练，1024个并行环境，学习率3e-4，共1M步。

4. **Sim-to-Real迁移**
   - 系统辨识：调整仿真中PID、力矩限制以减少控制差距。
   - 域随机化：对观察噪声、摩擦、物体尺度/重量进行随机化，增强鲁棒性。
   - 零样本部署到真实机器人（xArm-7 + PSYONIC Ability Hand等），通过FoundationPose进行物体6D位姿估计。

## 3. 实验设计
### 使用数据集
- **训练运动预测器**：Dex-YCB（单手持物）、ARCTIC（双手操作，含铰接物体如笔记本、盒子、搅拌机）。
- **测试任务**：
  - YCB物体抓取：5个Dex-YCB物体 + 5个非Dex-YCB物体（来自YCB数据集）+ 5种随机初始位姿。
  - 铰接物体操作：ARCTIC中3个物体 + 3个日常物体（真实笔记本、大盒子、玩具咖啡机）。
  - 带障碍物抓取：从Dex-YCB物体和3D打印物体库中选障碍物，随机放置在路径上。
  - 跨形态测试：更换机器人手（XHand1、Inspire手、Ability Hand）。

### Benchmark与对比方法
- **YCB抓取**：对比ViviDex、AdaDexGrasp、ManipTrans、HOP、PPO w/o following（无跟随奖励）。
- **铰接物体操作**：对比Obj-Dex、ManipTrans、PPO w/o following。
- **带障碍物抓取**：对比ViviDex、AdaDexGrasp、ManipTrans、HOP、PPO w/o following。
- **跨形态**：自身不同手型对比。
- **消融实验**：去除物体跟随奖励 \( R_o \)；去除接触奖励 \( R_{\text{contact}} \)。

### 评估指标
- 模拟：5个种子，每个策略评估100次，报告平均成功率。
- 真实：每个任务重复20次，报告成功率。

## 4. 资源与算力
- **算力**：单张NVIDIA RTX 4090 GPU（24GB）和i7-14700K CPU。
- **训练效率**：平均每秒10000步，总训练步数1M步（约100秒/策略）。并行环境1024个。
- **说明**：论文未说明运动预测器的训练时间，仅提及RL训练资源。

## 5. 实验数量与充分性
- **实验组数**：覆盖4大类任务（YCB抓取、铰接物体、带障碍物、跨形态），每类含模拟和真实实验，共约10+组对比实验（含消融）。
- **充分性**：实验设计较为全面：
  - 测试了**已知/未知物体**、**已知/未知位姿**、**障碍物泛化**、**不同机器人手型**。
  - 消融实验验证了关键奖励项的必要性。
  - 模拟和真实结果一致，验证了Sim-to-Real有效性。
- **客观性与公平性**：与多个SOTA方法在同一设置下比较，结果表格清晰；随机种子和重复次数符合惯例。但未提供统计显著性检验。

## 6. 论文的主要结论与发现
1. 提出的运动预测器可以生成高质量的未来手-物轨迹，跨数据集通用。
2. 物体跟随奖励 \( R_o \) 是核心创新：相比仅模仿人手或任务特定奖励，它能提升策略效率、稳定性和泛化能力。
3. 在YCB抓取、铰接物体操作、带障碍物抓取三个任务中，方法在成功率和泛化性上均**超越所有对比方法**（尤其在未知物体和未知位姿上优势明显）。
4. 零样本Sim-to-Real迁移成功，真实实验结果与模拟高度一致。
5. 方法可部署到不同商用手（PSYONIC、XHand1、Inspire），性能稳定，体现跨形态通用性。

## 7. 优点（方法或实验设计亮点）
- **任务无关的通用奖励**：首次将预测物体状态作为RL通用奖励，显著减少人工奖励工程，易于迁移到不同任务。
- **分层框架**：先预测全局手-物运动，再通过RL微调，平衡了先验引导与自主探索。
- **强泛化能力**：在未知物体、未知位姿、障碍物、不同手型上均表现良好。
- **零样本Sim-to-Real**：通过系统辨识和域随机化实现直接部署，无需真实数据。
- **统一模型处理多数据集**：简单调节输入尺寸即可处理单/双手数据。
- **消融实验设计清晰**：直接证明了物体跟随奖励的重要性。

## 8. 不足与局限
- **运动预测依赖已知物体网格**：需要物体CAD模型进行点云提取和位姿估计，限制了完全未知物体的泛化。
- **任务范围有限**：仅测试了抓取和铰接物体操作（旋转），未涉及更复杂的灵巧操作如手指重抓、工具使用等。
- **缺乏与更广泛基线对比**：未与基于视觉的端到端方法（如扩散策略）或纯模仿学习方法比较。
- **未公布运动预测器训练成本**：仅提及RL资源，预测器的算力和数据量需求未明确。
- **障碍物类型和位置随机化较简单**：仅测试了已知障碍物的随机位置，未评估完全未知障碍物或动态障碍物。
- **真实实验重复次数（20次）** 仍属中等，若可增加到50次以上统计更稳健。
- **未讨论失败案例或失败模式**：对为何某些方法在高难度场景下失败缺少深入分析。
- **未提供跨形态实验的定量对比表格**（仅用条形图展示，缺少数字）。

（完）
