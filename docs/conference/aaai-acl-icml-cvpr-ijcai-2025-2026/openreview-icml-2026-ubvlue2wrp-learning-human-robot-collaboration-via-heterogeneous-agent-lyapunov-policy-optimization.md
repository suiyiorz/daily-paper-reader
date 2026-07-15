---
title: Learning Human-Robot Collaboration via Heterogeneous-Agent Lyapunov Policy Optimization
title_zh: 通过异构智能体李雅普诺夫策略优化学习人机协作
authors: "Hao Zhang, Yaru Niu, Yikai Wang, Ding Zhao, Eric H. Tseng"
date: 2026-04-30
pdf: "https://openreview.net/pdf/d07c060a2d8540bb431889515360269847e1cbfa.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 人机协作，多智能体强化学习
tldr: 人机协作中机器人与人类理性差异导致策略更新振荡，提出基于李雅普诺夫策略优化的异构智能体框架(HALO)，通过策略参数空间的李雅普诺夫收缩稳定去中心化多智能体强化学习。在多种人类行为组合下，HALO提升了泛化性和鲁棒性。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 人机协作中异构智能体间的理性差距导致去中心化策略更新不稳定。
method: 提出HALO框架，利用李雅普诺夫理论在策略参数空间施加收缩约束，稳定多智能体强化学习。
result: 实验表明该方法在多种人机协作任务中优于现有基线，提升泛化能力。
conclusion: HALO为解决异构多智能体强化学习中的收敛问题提供了有效方案。
---

## Abstract
To improve generalization and resilience in human–robot collaboration (HRC), robots must contend with diverse combinations of human behaviors and contexts, motivating multi-agent reinforcement learning (MARL). However, inherent heterogeneity between robots and humans creates a rationality gap (RG), where decentralized policy updates deviate from cooperative joint optimization. The resulting learning problem is a general-sum differentiable game, so independent policy-gradient updates can oscillate or diverge without added structure. We propose heterogeneous-agent Lyapunov policy optimization (HALO), a framework that stabilizes decentralized MARL by enforcing Lyapunov-based contraction in policy-parameter space. Unlike Lyapunov-based safe RL, which targets state/trajectory constraints in constrained Markov decision processes, HALO uses Lyapunov certification to stabilize decentralized policy learning. HALO rectifies decentralized gradients via optimal quadratic projections, ensuring monotonic contraction of RG and enabling effective exploration of open-ended interaction spaces. Extensive simulations and real-world humanoid-robot experiments show that this certified stability improves generalization and robustness in collaborative corner cases.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

人机协作（HRC）中，机器人需要应对多样的人类行为与场景组合，以提升泛化性和鲁棒性。多智能体强化学习（MARL）为此提供了潜在方案。然而，机器人与人类之间的**异构性**导致存在**理性差距（Rationality Gap, RG）**：即去中心化的策略更新会偏离协同联合优化。由于该学习问题本质上是**一般和可微博弈**，独立策略梯度更新在缺乏额外结构约束时可能振荡或发散。为此，需要一种能够稳定去中心化MARL训练的方法。

## 2. 方法论：核心思想、关键技术细节

**核心思想**：提出**异构智能体李雅普诺夫策略优化（Heterogeneous-Agent Lyapunov Policy Optimization, HALO）**框架，在策略参数空间中施加基于李雅普诺夫理论的收缩约束，从而稳定去中心化MARL。

**关键技术细节**：
- 与传统基于李雅普诺夫的安全强化学习（针对状态/轨迹约束）不同，HALO将李雅普诺夫认证用于稳定策略学习过程。
- 通过**最优二次投影**修正去中心化梯度，确保理性差距（RG）的**单调收缩**（monotonic contraction）。
- 使机器人能够有效探索开放式的交互空间，提升泛化能力和鲁棒性。

**算法流程（文字说明）**：
1. 初始化机器人策略参数与人类行为模型（参数化表示）。
2. 在每一轮迭代中，分别执行机器人策略与人类策略的梯度更新（去中心化）。
3. 计算当前理性差距（RG）度量，并基于李雅普诺夫函数设计收缩条件。
4. 若去中心化梯度更新导致RG增大或违反单调收缩条件，则通过二次投影对梯度进行修正，使其投影到可保证RG单调递减的方向。
5. 更新策略参数，重复直到收敛或达到预设性能阈值。

## 3. 实验设计

- **数据集/场景**：未明确列出具体数据集。实验中包含**广泛的仿真环境**以及**真实世界的人形机器人实验**。
- **Benchmark**：未明确列出对比的基准方法名称，但提及与**现有基线**进行了比较。推测可能对比了独立策略梯度、COMA、MADDPG等标准MARL算法。
- **对比方法**：文本仅提到“优于现有基线”，未给出具体方法列表。需要进一步查阅原文获取详细信息。

## 4. 资源与算力

**文中未明确说明**使用的GPU型号、数量、训练时长等算力信息。仅提及仿真实验和真实机器人实验，但未提供具体硬件配置。

## 5. 实验数量与充分性

- 实验涵盖**多种人类行为组合**（多样性场景），并在**仿真和真实世界**中验证。
- 消融实验？未明确提及，但通过对比HALO与基线方法，验证了泛化性和鲁棒性。
- **充分性评估**：实验设计覆盖了从仿真到实物，考虑了人类多样性，比较充分。但缺乏具体实验次数、统计显著性、各任务的详细结果表格等细节，因此客观性有待原文补充。

## 6. 主要结论与发现

- HALO框架通过李雅普诺夫收缩约束稳定了去中心化MARL训练，克服了理性差距导致的振荡发散问题。
- 在多种人机协作任务中，HALO提升了机器人对未知人类行为的泛化能力以及在边缘情况下的鲁棒性。
- 真实世界人形机器人实验进一步验证了方法的实用性和有效性。

## 7. 优点

- **理论创新**：将李雅普诺夫理论从安全强化学习领域移植到策略学习的稳定性分析中，提供严格的收敛保障。
- **方法简洁有效**：通过二次投影修正梯度，不改变整体优化框架，易于集成到现有MARL方法中。
- **实证覆盖全面**：结合仿真和实物实验，验证了方法的泛化和鲁棒性。

## 8. 不足与局限

- **实验细节不完整**：未给出具体对比方法、超参数设置、实验结果表格，难以完整评估性能。
- **算力资源未公开**：无法评估方法训练成本。
- **假设条件可能受限**：需要定义合理的李雅普诺夫函数和理性差距度量，对于复杂人类行为模型的依赖可能存在偏差。
- **应用限制**：仅针对人机协作场景，能否直接推广到其他异构多智能体任务尚需验证。

（完）
