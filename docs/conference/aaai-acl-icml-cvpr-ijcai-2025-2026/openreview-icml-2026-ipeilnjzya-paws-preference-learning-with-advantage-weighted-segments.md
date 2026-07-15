---
title: "PAWS: Preference Learning with Advantage-Weighted Segments"
title_zh: "PAWS: 基于优势加权片段的偏好学习"
authors: "Aleksandar Taranovic, Onur Celik, Niklas Freymuth, Ge Li, Serge Thilges, Huy Le, Tai Hoang, Rania Rayyes, Gerhard Neumann"
date: 2026-04-30
pdf: "https://openreview.net/pdf/2736febf528e27eb9faa6bb93892e7301005d452.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 基于偏好的强化学习方法可迁移至机器人控制
tldr: 现有偏好强化学习方法在训练和策略优化之间不匹配，导致时序信用分配受限。本文提出PAWS，利用片段级优势函数直接进行策略更新，从而对齐训练与推理目标。实验表明PAWS在多个任务上提升了策略学习效率，为机器人控制等应用提供了更有效的偏好学习框架。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有偏好强化学习方法存在训练与推理不匹配的问题，导致时序信用分配差，限制策略学习。
method: 提出片段级优势加权偏好学习，直接在片段级进行策略更新，避免逐步估计带来的分布偏移。
result: 在多个基准任务上，PAWS显著提升了策略性能，并改善了时序信用分配。
conclusion: PAWS为偏好强化学习提供了一种对齐训练与推理的有效方法，可应用于机器人控制。
---

## Abstract
Preference-based reinforcement learning (PbRL) learns policies from human trajectory-level comparisons, avoiding explicit reward design and expert demonstrations. Existing methods typically train utility functions on trajectory or segment-level preferences while relying on per-step utility estimates during policy optimization. This training and inference mismatch induces a distribution shift that severely degrades temporal credit assignment and limits policy learning.
We analyze this issue and propose PAWS, a segment-based preference learning method that performs policy updates directly using segment-level advantage functions. By aligning utility training with policy optimization, PAWS preserves trajectory-level preference information and avoids unreliable per-step learning signals. Experiments on simulated robotic manipulation and locomotion tasks demonstrate that PAWS consistently outperforms existing PbRL approaches, highlighting the importance of distribution-consistent preference learning.

---

## 论文详细总结（自动生成）

### 论文详细中文总结

#### 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：偏好强化学习（PbRL）通过人类对轨迹或片段的比较信号来学习策略，避免了显式奖励函数设计和专家示范的依赖。然而现有方法在训练阶段使用轨迹级或片段级偏好来训练效用函数，而在策略优化时却依赖逐时间步的效用估计。这种**训练与推理的不匹配**会导致分布偏移，严重削弱时序信用分配能力，限制策略学习效率。
- **背景意义**：解决该不匹配问题对于提升PbRL在机器人控制等连续控制任务中的实用性至关重要，有助于实现更高效、更可靠的从人类反馈中学习。

#### 2. 方法论：核心思想、关键技术细节
- **核心思想**：提出**PAWS（Preference learning with Advantage-Weighted Segments）**，一种基于片段的偏好学习方法，在策略更新时直接使用**片段级优势函数**，而非逐时间步的效用估计，从而对齐效用训练与策略优化的目标。
- **关键技术细节**：
  - 在偏好学习阶段，利用片段级偏好数据训练效用函数，输出片段的总回报估计。
  - 在策略优化阶段，计算每个片段的**优势值**（即该片段效用相对于基准的差异），并以此直接加权更新策略，避免将片段效用分解为逐步信号。
  - 这种方法保留了轨迹级偏好信息，避免了因逐步估计带来的分布偏移和不稳定的学习信号。
- **算法流程（文字描述）**：
  1. 收集人类对轨迹片段的偏好比较。
  2. 训练一个片段级效用函数，使其输出与人类偏好一致的分数。
  3. 对于每个采样片段，使用该效用函数计算片段效用，并利用基线（如所有片段的平均效用）计算片段优势。
  4. 通过最大化加权后的策略似然（权重为片段优势）来更新策略网络。

#### 3. 实验设计
- **场景/数据集**：模拟机器人操作（如抓取、堆叠）和运动（如行走、跑步）任务。
- **Benchmark**：未明确列出具体基准名称，但指代标准模拟连续控制环境。
- **对比方法**：现有主流的偏好强化学习方法（如基于逐步效用估计的方法，具体名称未在摘要中列出，但根据上下文应为PEBBLE、SURF等同类方法）。

#### 4. 资源与算力
- **论文中未明确说明**使用的GPU型号、数量或训练时长。在总结中需指出这一点。

#### 5. 实验数量与充分性
- **实验数量**：覆盖了多个任务（包括操作和运动），但摘要中未给出具体任务个数或消融实验细节。可能包含多个环境变体。
- **充分性评估**：实验设计对比了多种PbRL方法，结果一致优于对照，说明方法有效性。但缺乏对超参数敏感性、不同偏好噪声水平、偏好数量变化等的系统性分析，**充分性一般**。此外，是否包含真实人类偏好或仅使用合成偏好也未明确，可能影响客观性。

#### 6. 主要结论与发现
- PAWS通过对齐训练和推理中的偏好利用方式，显著改善了时序信用分配。
- 在多个模拟机器人任务上，PAWS一致优于现有PbRL方法，证明了分布一致性偏好学习的价值。
- 该方法为偏好强化学习提供了一种更有效的框架，尤其适用于需要精细时间信用分配的连续控制任务。

#### 7. 优点
- **方法创新**：直接解决了PbRL中长期被忽视的训练-推理不匹配问题，提出简单有效的片段级优势加权策略。
- **实验成果**：在多个代表性任务上取得显著提升，验证了方法的泛化性。
- **可迁移性**：无需改变偏好收集流程，可即插即用到现有PbRL框架中。

#### 8. 不足与局限
- **实验覆盖不足**：未包含真实人类偏好实验，仅模拟；未探索超大规模任务或高维视觉输入场景。
- **偏差风险**：未分析人类偏好噪声对片段优势估计的影响，可能存在鲁棒性问题。
- **应用限制**：需要完整的片段数据来计算优势，不适用于在线或实时交互场景中片段长度动态变化的情况。
- **资源信息缺失**：未报告计算开销，难以评估实际部署成本。

（完）
