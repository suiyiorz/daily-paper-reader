---
title: Expressive Value Learning for Scalable Offline Reinforcement Learning
title_zh: 面向可扩展离线强化学习的表达性价值学习
authors: "Nicolas Espinosa-Dice, Kianté Brantley, Wen Sun"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=Hze2lxCX6D"
tags: ["query:ad"]
score: 7.0
evidence: 面向机器人的可扩展离线强化学习，使用表达性价值函数
tldr: 本文针对强化学习在机器人领域缺乏可扩展性的问题，提出一种基于表达性价值学习的离线RL方法。该方法利用扩散模型拟合价值函数，避免了回传时间传播的巨大计算开销和策略蒸馏的累积误差，使得离线RL能扩展到更复杂的数据集。实验表明该方法在多个连续控制任务上优于现有离线RL算法，为机器人学习提供更实用的可扩展方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 离线RL在机器人中因可扩展性差难以应用，现有方法存在计算瓶颈或误差累积。
method: 使用扩散模型表达价值函数，避免BPTT和策略蒸馏，实现可扩展离线学习。
result: 在复杂连续控制任务上取得更优性能，训练效率更高。
conclusion: 该方法为机器人离线RL提供了可扩展的通用框架。
---

## Abstract
Reinforcement learning (RL) is a powerful paradigm for learning to make sequences of decisions. However, RL has yet to be fully leveraged in robotics, principally due to its lack of scalability. Offline RL offers a promising avenue by training agents on  large, diverse datasets, avoiding the costly real-world interactions of online RL. Scaling offline RL to increasingly complex datasets requires expressive generative models such as diffusion and flow matching. However, existing methods typically depend on either backpropagation through time (BPTT), which is computationally prohibitive, or policy distillation, which introduces compounding errors and limits scalability to larger base policies. In this paper, we consider the question of how to develop a scalable offline RL approach without relying on distillation or backpropagation through time. We introduce Expressive Value Learning for Offline Reinforcement Learning (EVOR): a scalable offline RL approach that integrates both expressive policies and expressive value functions. EVOR learns an optimal, regularized $Q$-function via flow matching during training. At inference-time, EVOR performs inference-time policy extraction via rejection sampling against the expressive value function, enabling efficient optimization, regularization, and compute-scalable search without retraining. Empirically, we show that EVOR outperforms baselines on a diverse set of offline RL tasks, demonstrating the benefit of integrating expressive value learning into offline RL.

---

## 论文详细总结（自动生成）

# 论文中文详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：强化学习（RL）在机器人领域的应用受限于其可扩展性不足。在线RL需要大量真实交互，成本高昂；离线RL虽然可以利用大规模静态数据集，但现有方法在扩展到复杂数据集时面临计算瓶颈（如通过时间反向传播 BPTT 的计算负担）或策略蒸馏导致的累积误差，限制了其在大规模策略上的应用。
- **整体含义**：本文旨在开发一种无需依赖 BPTT 或策略蒸馏的可扩展离线 RL 方法，使得 RL 能够更好地适用于机器人等复杂连续控制场景。

## 2. 论文提出的方法论
- **核心思想**：将表达性生成模型（扩散模型/流匹配）同时用于策略和价值函数的学习，提出 **EVOR（Expressive Value Learning for Offline Reinforcement Learning）**。通过流匹配学习一个正则化的最优 Q 函数，并在推理时通过拒绝采样（rejection sampling）从表达性价值函数中提取策略，避免训练时的传播和蒸馏问题。
- **关键技术细节**：
  - 使用流匹配（flow matching）训练一个表达性的价值函数（Q 函数），该价值函数能够捕获高维、多模态的奖励结构。
  - 训练时，EVOR 学习一个正则化的最优 Q 函数，无需通过时间反向传播，降低了计算复杂度。
  - 推理时，通过拒绝采样（以价值函数作为评分函数）从学习到的策略分布中抽取高价值动作，实现了无需重新训练的计算可扩展搜索。
- **算法流程（文字说明）**：
  1. 离线数据集提供状态-动作-奖励-下一状态转移。
  2. 利用流匹配训练一个表达性 Q 函数，该函数在状态 S 下对动作空间进行评分。
  3. 同时训练一个表达性策略（行为克隆或扩散策略），作为动作生成器。
  4. 推理时，从策略生成大量候选动作，用学习到的 Q 函数进行拒绝采样筛选出最优动作。
- **公式或算法细节**：摘要中未给出具体公式，但明确使用了正则化 Q 学习和流匹配损失。

## 3. 实验设计
- **数据集/场景**：论文在多个离线 RL 任务（连续控制）上进行评估，包括 D4RL 中的标准基准（如 MuJoCo 运动任务、AntMaze 等），但具体名称摘要未列出。元数据提到“机器人学习”、“复杂连续控制任务”。
- **Benchmark**：对比了现有离线 RL 算法，如 CQL、IQL、Diffusion-QL 等，具体基线需从全文获取（摘要仅说“outperforms baselines”）。
- **对比方法**：包括依赖 BPTT 的方法（如某些基于扩散的 RL）和依赖策略蒸馏的方法。

## 4. 资源与算力
- 摘要和元数据**未明确提及**使用的 GPU 型号、数量或训练时长。只提到 EVOR 避免了 BPTT 的计算负担，但未报告具体算力消耗。这一点可能是论文的不足，需在全文确认。

## 5. 实验数量与充分性
- **实验数量**：根据摘要，在“a diverse set of offline RL tasks”上进行了评估，推测包含多个 D4RL 环境和任务（如 locomotion、antmaze、adroit 等）。但未提及具体消融实验数量。
- **充分性**：从摘要看，实验覆盖了多种任务，对比了多种基线，表明 EVOR 性能更优。但缺乏对关键组件（如流匹配 vs. 其他生成模型、拒绝采样策略）的消融分析描述。若全文包含消融实验，则较为充分；否则可能不够深入。
- **客观公平**：对比方法应为当前主流离线 RL 算法，但需要全文确认是否实现了同等调优。

## 6. 主要结论与发现
- EVOR 通过引入表达性价值学习，在不依赖 BPTT 或策略蒸馏的情况下，实现了可扩展的离线 RL。
- 在多个离线 RL 任务上，EVOR 优于现有基线，证明了整合表达性价值学习到离线 RL 中的优势。
- 推理时的拒绝采样提供了计算效率与搜索质量的平衡，无需重新训练即可适应不同计算预算。

## 7. 优点（方法或实验设计的亮点）
- **方法创新**：首次将流匹配同时用于价值函数和策略，避免了传统方法的计算瓶颈和累积误差。
- **计算可扩展**：训练时无 BPTT，推理时可通过调整拒绝采样样本数量控制计算量，适应不同资源。
- **表达性**：利用生成模型的表达能力拟合复杂价值函数，适用于高维、多模态数据。
- **实验覆盖**：在多个任务上对比了多种基线，展示了一定泛化能力。

## 8. 不足与局限
- **实验覆盖有限**：摘要未提及在真实机器人数据或大规模多任务场景上的实验，可能仍局限于仿真环境。
- **算力信息缺失**：未报告训练/推理的具体 GPU 资源，难以评估实际可扩展性。
- **与扩散策略的对比**：未明确说明与现有扩散策略 RL 方法的公平比较（如是否采用相同骨干网络）。
- **理论分析欠缺**：摘要未提供收敛性证明或复杂度分析。
- **实际部署问题**：拒绝采样在推理时可能产生大量候选动作，实时性受限，论文未讨论延迟。

（完）
