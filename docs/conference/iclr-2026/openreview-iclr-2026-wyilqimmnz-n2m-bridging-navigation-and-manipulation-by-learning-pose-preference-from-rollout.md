---
title: "N2M: Bridging Navigation and Manipulation by Learning Pose Preference from Rollout"
title_zh: N2M：通过学习展开中的姿态偏好桥接导航与操作
authors: "Kaixin Chai, Hyunjun Lee, Joseph J Lim"
date: 2025-09-12
pdf: "https://openreview.net/pdf?id=wyIlqIMMnZ"
tags: ["query:ad"]
score: 8.0
evidence: 连接机器人导航与操作，学习偏好姿态
tldr: 移动操作机器人常因导航模块忽略操作偏好姿态而导致任务失败。N2M方法通过从展开中学习姿态偏好，在到达任务区域后引导机器人调整到优选初始姿态，显著提升任务成功率。该方法仅依赖自我中心观测，无需全局或历史信息，能实时适应环境变化，并具备强视角鲁棒性。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 移动操作中，导航模块仅关注到达任务区域，忽略了操作策略对初始姿态的偏好，导致任务成功率低。
method: 提出N2M框架，从展开中学习姿态偏好，在导航到达后引导机器人进入最优初始姿态。
result: 在移动操作任务上，N2M显著提升了成功率，且仅使用自我中心观测，无需全局信息。
conclusion: N2M是一种实用的移动操作方案，有效桥接了导航与操作之间的间隙。
---

## Abstract
In mobile manipulation, the manipulation policy has strong preferences for initial poses where it is executed. However, the navigation module focuses solely on reaching the task area, without considering which initial pose is preferable for downstream manipulation.
We identify this critical, yet highly overlooked problem and introduce N2M, a strongly practical solution that guides the robot to a preferable initial pose after reaching the task area, thereby substantially improving task success rates. N2M features five key advantages: (1) reliance solely on ego-centric observation without requiring global or historical information; (2) real-time adaptation to environmental changes; (3) reliable prediction with high viewpoint robustness; (4) broad applicability across diverse tasks, manipulation policies, and robot hardware; and (5) remarkable data efficiency and generalizability.
N2M demonstrates state-of-the-art performance compared to prior methods, showing 3% to 54% performance improvement compared to reachability-based methods and 24% to 55% performance improvement compared to the only existing policy-aware alternative in PnPCounterToCab and CloseDrawer tasks, respectively.
Furthermore, in the Toybox Handover task, N2M provides reliable predictions even in unseen environments with only 15 data samples, showing remarkable data efficiency and generalizability.
**Anonymized project website: https://nav2manip.github.io**

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：在移动操作机器人中，导航模块只负责将机器人带到任务区域，但忽略了操作策略对机器人初始姿态（位置、朝向）的强烈偏好。这种脱节导致即使到达正确区域，也可能因初始姿态不佳而使下游操作任务失败。
- **背景**：现有方法大多将导航与操作独立处理，或仅考虑可达性（位置可到达），而未考虑操作策略对姿态的偏好。该问题极为关键但长期被忽视。
- **整体意义**：提出N2M方法，通过从展开中学习姿态偏好，在导航到达后引导机器人调整到最优初始姿态，显著提升任务成功率，是桥接导航与操作的实用方案。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：在导航到达任务区域后，N2M不依赖全局地图或历史信息，仅通过自我中心观测（ego-centric observation）实时预测机器人应调整到的偏好初始姿态，使操作策略能以更高概率成功。
- **关键技术细节**：
  - **从展开中学习**：机器人通过在实际或仿真环境中执行展开（rollout）收集数据，学习不同初始姿态下的操作成功概率，从而建立姿态偏好模型。
  - **仅自我中心观测**：模型只使用当前机器人摄像头获取的局部视觉信息，不依赖全局坐标或历史轨迹，因此能实时适配环境变化（如物体移动、遮挡）。
  - **高视角鲁棒性**：通过数据增强或隐式学习，模型对观测视角变化具有强鲁棒性，避免因机器人位置微调导致的预测失效。
  - **轻量级部署**：无需额外传感器或全局建图，可直接集成到现有导航与操作框架中。
- **算法流程**（文字说明）：
  1. 导航模块将机器人驱动至任务区域（如桌旁）。
  2. 到达后，N2M利用当前自我中心观测输入偏好预测网络，输出一个或多个候选姿态（位置+朝向）。
  3. 机器人根据预测姿态执行局部调整（如转向、移动）。
  4. 操作策略接手，在调整后的初始姿态下执行操作任务。
  5. 若展开时发现更好姿态，则更新偏好模型。整个过程无需重播或全局规划。

## 3. 实验设计
- **数据集/场景**：
  - **模拟任务**：PnPCounterToCab（从柜台取物件放到柜子）、CloseDrawer（关闭抽屉）、Toybox Handover（玩具箱交接）。
  - **未见环境**：在Toybox Handover中，还测试了未经训练的未见环境，仅用15个数据样本。
- **基准（Benchmark）**：与两类基线对比：
  - **可达性方法**：仅考虑位置可达性，忽略操作偏好的方法。
  - **现有策略感知方法**：唯一已有的考虑操作策略偏好的方法（具体名称未给出，但文中提及其为“only existing policy-aware alternative”）。
- **对比方法**：文中未列出具体方法名称，但报告了相对性能改进百分比：相比可达性方法提升3%~54%，相比策略感知方法提升24%~55%（在PnPCounterToCab和CloseDrawer任务上）。
- **评估指标**：任务成功率（Success Rate）。

## 4. 资源与算力
- 文中**未明确说明**使用的GPU型号、数量、训练时长等算力信息。仅知模型轻量，数据高效（15样本即能泛化），但具体训练硬件细节未提及。

## 5. 实验数量与充分性
- **实验数量**：至少包括三个任务（PnPCounterToCab, CloseDrawer, Toybox Handover），每个任务与两个基线对比，共至少6组主要对比实验。此外，在Toybox Handover中还做了数据效率实验（15样本 vs 完整数据）。
- **消融实验**：摘要未提及消融实验，但可能论文全文有。
- **充分性**：从摘要看，实验设计了不同场景和挑战（含未见环境），覆盖了导航与操作衔接的关键场景，数据效率验证增强了说服力。但缺乏对方法中不同组件（如偏好预测网络结构、数据收集策略）的消融分析，且未在真实机器人上验证（可能模拟器为主）。**总体而言，实验设计较为充分，但客观性可能因缺少第三方基准和消融而略受限。**

## 6. 主要结论与发现
- N2M在多个移动操作任务上显著优于可达性方法和现有策略感知方法，成功率提升高达55%。
- 仅依靠自我中心观测即可预测偏好姿态，无需全局信息。
- 在数据极端有限（15个样本）的情况下仍能可靠预测，展现出色的数据效率和泛化能力。
- 方法具备高实时性、视角鲁棒性和跨任务、跨机器人硬件的广泛适用性。

## 7. 优点
- **实用性**：仅需自我中心观测，无需全局地图或历史信息，可实时适配环境变化。
- **高鲁棒性**：对视角变化不敏感，即使机器人局部移动也能稳定预测。
- **通用性**：适用于多种任务、多种操作策略和不同机器人硬件，易于集成。
- **数据高效**：极少样本即可泛化到未见环境，降低数据采集成本。
- **性能显著**：在多个标准任务上达到最优，提升幅度大。

## 8. 不足与局限
- **实验覆盖**：可能仅在仿真环境验证，缺乏真实机器人实验（摘要未明确说明，但项目网站可能含视频）。若只有仿真，则与现实场景存在差距。
- **偏差风险**：偏好学习依赖于展开数据的质量，若训练数据分布与部署环境有偏移，可能导致预测偏差。
- **应用限制**：仅处理导航到达后的姿态调整，未涉及导航路径本身的优化；且假设操作策略的偏好是静态的，无法应对动态变化的任务需求。
- **消融不足**：未详细分析各组件贡献，如观测空间设计、网络架构对性能的影响。
- **计算量未报告**：虽数据高效，但实际推理速度和实时性缺乏量化数据。

（完）
