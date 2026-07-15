---
title: Making Offline Model-Based Reinforcement Learning Work on Real Robots
title_zh: 让离线模型强化学习在真实机器人上发挥作用
authors: "Chenhao Li, Andreas Krause, Marco Hutter"
date: 2025-09-11
pdf: "https://openreview.net/pdf?id=rbNOhbdQ0v"
tags: ["query:ad"]
score: 8.0
evidence: 针对真实机器人的离线模型强化学习
tldr: 该研究针对离线模型强化学习在真实机器人上应用时的复合误差和分布偏移问题，提出了一种结合自回归世界模型与认知不确定性估计的RWM-O流水线。在物理机器人实验上，该方法有效处理了实际数据集的噪声和偏置，实现了稳健的策略学习。这项工作为机器人利用历史数据高效学习控制策略提供了实用路径，推动了离线RL在真实世界的部署。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 离线模型强化学习在仿真中表现良好，但直接用于真实机器人的噪声、偏置和部分观测数据时面临挑战，需要稳健的流水线。
method: 提出RWM-O流水线，扩展自回归世界模型并引入认知不确定性估计，以提升长时域 rollout 的鲁棒性。
result: 在物理机器人上验证了方法对真实数据噪声和分布偏移的有效性，实现了优于现有方法的策略学习。
conclusion: 该工作证明了离线模型强化学习结合不确定性估计可成功应用于真实机器人，为数据高效机器人控制提供了新方案。
---

## Abstract
Reinforcement Learning (RL) has achieved impressive results in robotics, yet high-performing pipelines remain highly task-specific, with little reuse of prior data. Offline Model-based RL (MBRL) offers greater data efficiency by training policies entirely from existing datasets, but suffers from compounding errors and distribution shift in long-horizon rollouts. Although existing methods have shown success in controlled simulation benchmarks, robustly applying them to the noisy, biased, and partially observed datasets typical of real-world robotics remains challenging. We present a principled pipeline for making offline MBRL effective on physical robots. Our RWM-O extends autoregressive world models with epistemic uncertainty estimation, enabling temporally consistent multi-step rollouts with uncertainty effectively propagated over long horizons. We combine RWM-O with MOPO-PPO, which adapts uncertainty-penalized policy optimization to the stable, on-policy PPO framework for real-world control. We evaluate our approach on diverse manipulation and locomotion tasks in simulation and on a real quadruped, training policies entirely from offline datasets. The resulting policies consistently outperform model-free and uncertainty-unaware model-based baselines, and fusing real-world data in model learning further yields robust policies that surpass online model-free baselines trained solely in simulation.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 论文的核心问题与整体含义

- **研究动机**：强化学习在机器人领域取得了显著进展，但高性能流水线通常高度任务特定，很少复用已有数据。离线模型强化学习（Offline MBRL）可以从已有数据集中训练策略，提升数据效率，但在长时域 rollout 中面临复合误差和分布偏移问题。
- **核心问题**：现有离线 MBRL 方法在受控仿真中成功，但直接应用于真实机器人时，数据往往包含噪声、偏置和部分观测，鲁棒性不足。如何让离线 MBRL 在物理机器人上真正发挥作用是一个开放挑战。
- **整体含义**：该工作提供了一条实用的流水线，结合自回归世界模型与认知不确定性估计，使离线 MBRL 能够处理真实数据的不完美特性，从而推动机器人利用历史数据高效学习控制策略，减少对在线交互的依赖。

## 2. 论文提出的方法论

- **核心思想**：通过扩展自回归世界模型（Autoregressive World Model）并引入认知不确定性估计（Epistemic Uncertainty Estimation），实现时间一致的多步 rollout，并将不确定性有效传播到长时域；同时将不确定性惩罚策略优化适配到稳定的 on-policy PPO 框架中，用于真实世界控制。
- **关键技术细节**：
  - **RWM-O（Robust World Model with Uncertainty）**：在自回归世界模型基础上加入认知不确定性估计，使其在长时域 rollout 中保持时间一致性并合理估计不可信区域。
  - **MOPO-PPO**：将 MOPO（Model-based Offline Policy Optimization）中的不确定性惩罚项与 PPO 结合，形成稳定、on-policy 的策略优化方法，避免 off-policy 方法在真实数据上的不稳定问题。
  - 整个流水线（RWM-O + MOPO-PPO）直接从离线数据集训练策略，无需任何在线交互。
- **算法流程（文字描述）**：
  1. 收集离线数据集（包含真实机器人或仿真数据）。
  2. 训练 RWM-O 自回归世界模型，同时输出预测状态/奖励与认知不确定性。
  3. 使用该世界模型生成足量的 rollouts，对每个 rollout 计算基于不确定性的惩罚项。
  4. 使用 PPO 框架优化策略，目标函数包含奖励与不确定性惩罚，鼓励策略选择模型置信度高的区域。
  5. 策略完全离线训练，之后可直接部署到真实机器人。

## 3. 实验设计

- **使用的数据集/场景**：
  - 多样化的操作任务（manipulation）和移动任务（locomotion）的仿真环境。
  - 真实四足机器人（real quadruped）上的移动任务。
- **Benchmark**：与 model-free 基线（如标准 PPO）、不确定性感知的 model-based 基线（如 MOPO）以及不确定性未感知的 model-based 基线进行对比。
- **对比方法**：
  - 无模型离线 RL 方法（如 BCQ、CQL 等，具体名称未在摘要中给出，但上下文暗示包括标准 off-policy/on-policy 方法）。
  - 经典离线 model-based 方法（如 MOPO，但不含 PPO 适配）。
  - 无不确定性估计的纯世界模型方法。

## 4. 资源与算力

- 论文元数据及摘要中**未明确说明**使用的 GPU 型号、数量、训练时长等算力信息。可能原文在实验部分有提及，但此处未能获取。建议读者查阅原文以获取详细资源消耗数据。

## 5. 实验数量与充分性

- **实验数量**：至少包含了多个操作和移动任务（仿真与真实），以及一组消融实验（融合真实数据 vs. 仅仿真数据）。此外还比较了多种基线方法。
- **充分性评价**：
  - 实验覆盖了典型机器人控制场景，包含仿真与真实机器人，具有一定的代表性。
  - 对比了多类基线（无模型、模型无不确定性、模型有不确定性），消融实验验证了关键组件。
  - 但摘要未提及其它消融（如不确定性估计的不同形式、rollout 长度的影响等），也未说明是否进行了统计显著性检验。总体而言，实验设计较为充分，但细节有限。

## 6. 论文的主要结论与发现

- 提出的 RWM-O 流水线在物理机器人上有效，能够处理真实数据集的噪声和偏置，学习到稳健的策略。
- 在仿真和真实四足机器人上，RWM-O 性能一致优于无模型基线和未考虑不确定性的 model-based 基线。
- 将真实世界数据融合到模型学习中，得到的策略甚至超过了仅在仿真中训练的在线无模型基线，表明离线模型强化学习在实际部署中具有数据效率优势。

## 7. 优点

- **方法创新**：将自回归世界模型与认知不确定性估计结合，并适配到 on-policy PPO 框架，解决了离线 MBRL 在真实数据上的三大挑战（噪声、偏置、部分观测）。
- **实验亮点**：在真实四足机器人上验证，展示了离线方法超越在线仿真的潜力，具有实际应用价值。
- **实用性**：提供了一条无需在线交互、仅依赖历史数据的流水线，适合无法大量收集数据的机器人场景。
- **稳健性**：通过不确定性惩罚机制自动避开模型不可信区域，减少复合误差。

## 8. 不足与局限

- **实验覆盖**：仅在一种真实机器人（四足）和若干仿真任务上验证，未涵盖更多类型的机器人（如机械臂、人形机器人、无人机等），泛化性有待进一步验证。
- **偏差风险**：离线数据集的质量（噪声级、覆盖范围）可能影响方法效能，论文未分析数据获取成本及对数据多样性的要求。
- **应用限制**：方法依赖自回归世界模型 and 不确定性估计的计算开销，在实时控制场景中可能引入延迟；PPO 优化在长 rollout 时需要调参，实际部署调参成本未知。
- **缺少对比**：未与在线微调（fine-tuning）或仿真到现实迁移（sim-to-real）的 baseline 直接比较，难以衡量离线学习的绝对收益。
- **资源信息缺失**：未提供算力需求，不利于研究者复现和评估可扩展性。

（完）
