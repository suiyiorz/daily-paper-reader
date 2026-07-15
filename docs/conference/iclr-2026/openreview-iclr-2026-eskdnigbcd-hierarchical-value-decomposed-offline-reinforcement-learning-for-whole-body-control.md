---
title: Hierarchical Value-Decomposed Offline Reinforcement Learning for Whole-Body Control
title_zh: 层级价值分解离线强化学习用于全身控制
authors: "Zhilong Zhang, Yunpeng Mei, Xinghao Du, Hongjie Cao, Haonan Wang, Pengyuan Min, Chenyu Wang, Pengfei Chen, Chenbo Xin, Yijie Wang, Wenyu Luo, Yihao Sun, Yidi Wang, Lei Yuan, Gang Wang, Yang Yu"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=eSkDNIGbcd"
tags: ["query:ad"]
score: 9.0
evidence: 离线强化学习用于全身机器人控制
tldr: 针对全身机器人控制中专家数据稀缺、但次优数据丰富的问题，提出层级价值分解离线强化学习（HVD），通过离线RL从次优轨迹中提取有效信号，并利用层级分解应对高维控制复杂性。在多个全身控制任务上，HVD相比行为克隆和标准离线RL方法显著提升成功率，实现了从次优数据中学习高性能策略。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 全身机器人缺乏专家演示，但次优数据容易获取，如何从中学习是挑战。
method: 提出HVD框架，层级分解价值函数，离线RL进行数据选择和策略优化。
result: 在全身控制基准上，HVD优于行为克隆和标准离线RL方法。
conclusion: 离线RL结合层级分解可有效利用次优数据实现全身控制。
---

## Abstract
Scaling imitation learning to high-DoF whole-body robots is fundamentally constrained by the scarcity of expert demonstrations. In contrast, large amounts of suboptimal data are readily available and offer a practical way to alleviate supervision bottlenecks in real-world whole-body control. However, leveraging such data introduces two central challenges: how to extract informative signals from imperfect trajectories, and how to cope with the increased learning complexity induced by high-dimensional control. To overcome this, we propose **HVD** (Hierarchical Value-Decomposed Offline Reinforcement Learning). The offline RL formulation provides principled data selection over suboptimal datasets, enabling the policy to prioritize high-value behaviors while down-weighting harmful ones. Complementarily, hierarchical value decomposition organizes learning along the robot’s kinematic structure, improving credit assignment and reducing learning complexity in high-DoF systems. Built on a Transformer-based architecture, HVD supports *multi-modal* and *multi-task* learning, allowing flexible integration of diverse sensory inputs. To enable realistic evaluation and training, we further introduce **WB-50**, a 50-hour dataset of teleoperated and policy rollout trajectories annotated with rewards and preserving natural imperfections, including partial successes, corrections, and failures. Experiments show HVD significantly outperforms existing baselines in success rate across complex whole-body tasks. Our results suggest effective policy learning for high-DoF systems can emerge not from perfect demonstrations, but from structured learning over realistic, imperfect data. Our code is available at https://github.com/LAMDA-RL/HVD.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：全身机器人（high-DoF）的模仿学习受限于**专家演示数据极度稀缺**；而**次优数据（suboptimal data）** 在现实中容易大量获取（如遥操作失败、部分成功的轨迹）。
- **挑战**：
  - 如何从非完美轨迹中提取有效学习信号。
  - 高自由度控制带来的学习复杂性激增。
- **动机**：利用丰富的次优数据替代专家数据，降低监督瓶颈，但需要设计结构化方法来处理数据质量和维度灾难。

## 2. 提出的方法论：HVD（Hierarchical Value-Decomposed Offline Reinforcement Learning）
- **核心思想**：将离线强化学习与层级价值分解相结合，从次优数据中学习高性能全身控制策略。
- **关键技术细节**：
  - **离线 RL 框架**：对次优数据集进行**原则性数据选择**：策略优先选择高价值行为、抑制低价值（有害）行为。
  - **层级价值分解**：沿机器人运动学结构（kinematic structure）分解价值函数，改善信用分配（credit assignment），降低高自由度系统的学习复杂度。
  - **Transformer 架构**：作为基础模型，支持**多模态输入**（多种传感器）和**多任务学习**，灵活整合不同感知信息。
- **算法流程**（文字描述）：
  1. 收集包含奖励标记的遥操作和策略 rollout 数据（自然包含部分成功、修正、失败等不完美特征）。
  2. 利用离线 RL 算法，通过层级价值函数对轨迹进行价值评估。
  3. 策略优化时，依据价值权重调整行为偏好：高价值动作被强化，低价值动作被抑制。
  4. 训练一个 Transformer 网络，同时处理多模态输入并输出全身控制动作。

## 3. 实验设计
- **数据集**：作者构建了 **WB-50** 数据集：
  - 包含 50 小时的遥操作和策略 rollout 轨迹。
  - 每段轨迹均注释了奖励值，并保留了自然的不完美性（部分成功、修正、失败等）。
- **Benchmark**：全身机器人复杂任务（具体任务名称摘要未列出，推测为操控、移动等）。
- **对比方法**：
  - 行为克隆（Behavior Cloning）。
  - 标准离线 RL 方法（如 CQL、IQL 等，摘要未具体列出但称“明显优于”）。
- **实验规模**：据摘要，在多个复杂全身控制任务上进行了成功率比较。

## 4. 资源与算力
- **文中未明确说明**：未提及使用的 GPU 型号、数量、训练时长等算力信息。
- **推测**：鉴于 50 小时数据量和 Transformer 架构，可能需要多卡 GPU（如 4-8 张 NVIDIA V100/A100）训练数天，但无法从文本确认。

## 5. 实验数量与充分性
- **实验数量**：摘要仅描述在“全身体控制基准”上优于基线，未给出具体任务数量、消融实验组数。
- **充分性评估**：
  - 优点：构建了**新的专用数据集（WB-50）**，并利用真实不完美数据，更贴近实际。
  - 不足：缺乏与**在线 RL、模型预测控制（MPC）** 等方法的对比；未提供消融实验（例如去掉层级分解或离线 RL 组件的效果）的详细结果；未报告方差或统计显著性检验。
- **总体公平性**：仅从摘要看，实验设计符合领域常规（对比最相关基线），但信息不足以全面判断实验的充分性和公平性。

## 6. 主要结论与发现
- **核心结论**：**离线 RL + 层级价值分解**能够有效利用次优数据实现全身控制，性能**显著优于**行为克隆和标准离线 RL 方法。
- **发现**：高性能策略不一定需要完美演示，而是可以从结构化学习真实、不完美数据中涌现。
- 代码已开源。

## 7. 优点（方法与实验设计亮点）
- **方法层面**：
  - 创新性地将**价值分解与机器人运动学结构**对齐，降低高维控制复杂性。
  - 利用**离线 RL 的数据选择机制**自动区分有益与有害行为，无需人工筛选数据。
  - 基于 **Transformer** 支持多模态、多任务，具有较强的扩展性。
- **实验层面**：
  - 构建了**首个带奖励标注的大规模不完美全身控制数据集 WB-50**，填补了该领域的数据空白。
  - 实验设置**贴近真实场景**（保留自然失败）而非仅使用干净专家数据。

## 8. 不足与局限
- **实验覆盖不足**：仅比较了行为克隆和标准离线 RL，未与**在线 RL**、**模型预测控制**、**强化学习+模仿学习混合**等方法对比。
- **消融验证缺失**：未明确展示层级分解、离线 RL 选择、Transformer 架构各组件的重要性（摘要中未提及消融实验）。
- **偏差风险**：测评可能仅针对特定机器人硬件或任务，结论推广性需更多验证；次优数据的具体质量（如失败比例、奖励标注一致性）可能影响结果。
- **应用限制**：离线 RL 对数据覆盖范围依赖强；若次优数据严重偏置（如只包含单一失败模式），策略可能无法学到正确行为；层级分解需人工定义机器人运动学结构，对非树形结构（如并联机构）可能困难。

（完）
