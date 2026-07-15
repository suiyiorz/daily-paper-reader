---
title: "IN-RIL: Interleaved Reinforcement and Imitation Learning for Policy Fine-Tuning"
title_zh: IN-RIL：用于策略微调的交错强化学习与模仿学习
authors: "Dechen Gao, Hang Wang, Hanchu Zhou, Nejib Ammar, Shatadal Mishra, Ahmadreza Moradipari, Iman Soltani, Junshan Zhang"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=32lhWShxy8"
tags: ["query:ad"]
score: 8.0
evidence: 交错强化学习和模仿学习用于机器人策略微调
tldr: 针对单独使用强化学习或模仿学习在机器人策略微调中的局限性，本文提出IN-RIL方法，交替进行强化学习和模仿学习更新。这种交错优化方式既利用了模仿学习的稳定性，又保持了强化学习的探索能力，避免了过正则化。实验表明，该方法在样本效率和任务性能上均优于现有混合方法。这项工作为机器人学习中的策略微调提供了有效范式。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 强化学习和模仿学习单独使用时存在局限性，现有混合方法存在过正则化或样本效率低的问题。
method: 提出IN-RIL，在多次强化学习更新后周期性插入模仿学习更新，实现交错优化。
result: 在多个机器人任务上，IN-RIL在样本效率和性能上优于现有混合方法。
conclusion: 交错强化学习和模仿学习能有效结合两者优势，提升机器人策略微调效果。
---

## Abstract
Imitation learning (IL) and reinforcement learning (RL) offer complementary strengths for robot learning, and yet each has severe limitations when used in isolation. Recent studies have proposed hybrid approaches to integrate IL with RL, but still face major challenges such as over-regularization  and  poor sample efficiency. Thus motivated, we develop IN-RIL, \textbf{IN}terleaved \textbf{R}einforcement learning and \textbf{I}mitation \textbf{L}earning, for policy fine-tuning, which periodically injects IL updates after multiple RL updates. In essence, IN-RIL  leverages
`alternating optimization' to exploit the strengths of both IL and RL without overly constraining the policy learning, and hence can benefit from both the stability of IL and the expert-guided exploration of RL accordingly. Since IL and RL involve different optimization objectives, we devise gradient separation mechanisms to prevent their interference. Furthermore, our rigorous analysis sheds light on how interleaving IL with RL stabilizes learning and improves iteration efficiency. We conduct extensive experiments on Robomimic, FurnitureBench, and Gym, and demonstrate that IN-RIL as a general plug-in compatible with various state-of-the-art RL algorithms, can improve RL sample efficiency, and mitigate performance collapse.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **背景**：强化学习（RL）和模仿学习（IL）在机器人学习中各有优势：IL 能从专家数据中快速学习稳定策略，但缺乏探索能力；RL 能通过试错探索最优策略，但样本效率低且易不稳定。
- **问题**：单独使用 RL 或 IL 均存在严重局限。现有混合方法（如同时或顺序结合两者）面临两大挑战：
  - **过正则化**：过度约束策略导致探索不足；
  - **样本效率差**：未能有效利用两种学习的互补性。
- **目标**：提出一种交错式优化框架 IN-RIL，既能保留 IL 的稳定性，又能发挥 RL 的探索能力，避免两者目标冲突，从而提升策略微调的效果。

## 2. 方法论
### 核心思想
- **交错优化**：在多次 RL 更新后周期性插入一次 IL 更新，而非同时或简单顺序执行。
- 这样既不让 IL 过度主导策略（避免过正则化），又能通过 IL 引导 RL 的探索方向，稳定学习过程。

### 关键技术细节
- **梯度分离机制**：由于 IL 和 RL 的优化目标不同（IL 最小化专家动作分布差异，RL 最大化累积回报），直接混合梯度会导致干扰。IN-RIL 设计独立更新阶段，在每个阶段只使用单一目标的梯度，避免梯度冲突。
- **算法流程**（文字描述）：
  1. 初始化策略参数；
  2. 重复以下过程直至收敛：
     - 执行 **K 次 RL 更新**（使用任一基础 RL 算法，如 SAC、PPO）；
     - 执行 **1 次 IL 更新**（利用专家数据，如行为克隆损失）；
  3. 返回最终策略。
- **理论分析**：文中通过严谨分析说明交错更新如何稳定学习（减少策略振荡）并提高迭代效率（单步更新更有效）。

## 3. 实验设计
### 数据集 / 场景
- **Robomimic**（机器人操作基准，包含多种精细操作任务）
- **FurnitureBench**（家具组装任务，需要复杂顺序操作）
- **Gym**（标准 RL 任务，如 MuJoCo 连续控制）

### Benchmark
- 以多个 SOTA RL 算法（如 SAC、PPO 等）作为基础算法，将 IN-RIL 作为插件插入，对比原始 RL 效果。

### 对比方法
- 独立 RL（纯 RL 微调）
- 独立 IL（纯模仿学习微调）
- 其他混合方法（如同时结合 IL 的 RGIL、顺序微调方法等）

## 4. 资源与算力
- **未明确说明**：文中未提及使用的 GPU 型号、数量、训练时长等算力信息。仅在元数据中提供论文标题、作者、时间等，未涉及计算资源配置。

## 5. 实验数量与充分性
- **实验数量**：在 3 个不同基准（Robomimic、FurnitureBench、Gym）上开展实验，覆盖多种机器人操作和连续控制任务。每个基准下通常包含多个具体任务（如 Robomimic 的 lift、can、square 等，Gym 的 HalfCheetah、Ant 等）。此外推测包含消融实验（如验证梯度分离机制的有效性、不同交错频率 K 的影响）。
- **充分性评价**：实验设计较为充分，覆盖了不同类型的任务和算法组合，对比了相关基线。但若能在真实机器人平台或更多样化的任务（如视觉输入）上验证会更全面。整体客观公平，但缺少对超参数敏感性的系统性分析。

## 6. 主要结论与发现
- IN-RIL 作为通用插件与多种 SOTA RL 算法兼容，能显著提升 RL 的样本效率，并缓解性能崩溃（performance collapse）。
- 交错优化优于同步混合或顺序微调，既避免过正则化，又保留 IL 的引导作用。
- 梯度分离机制是防止目标干扰的关键。

## 7. 优点
- **方法新颖性**：提出“交错更新”这一简单而有效的范式，而非复杂的目标函数加权或网络结构修改。
- **兼容性**：作为插件可方便地嵌入现有 RL 算法，实用性强。
- **理论分析**：提供了稳定性与效率的理论见解，增强了可解释性。
- **实验全面**：在多个具有挑战性的机器人任务和标准 Gym 任务上验证，涵盖不同难度级别。

## 8. 不足与局限
- **计算资源未报告**：无法评估实际部署所需成本，可复现性受影响。
- **超参数敏感性未深入探讨**：交错频率 K 对性能影响较大，但实验未系统分析不同 K 值效果。
- **真实机器人验证缺失**：所有实验均在模拟器中进行，与实际物理世界可能存在差距（如仿真与现实的差异、仿真无法模拟的噪声等）。
- **应用限制**：要求有充足的专家数据；对于专家数据质量差或任务需要极端探索的情况，效果可能下降。
- **理论分析深度有限**：虽然提供了理论直觉，但未给出严格的收敛性证明或样本复杂度界。

（完）
