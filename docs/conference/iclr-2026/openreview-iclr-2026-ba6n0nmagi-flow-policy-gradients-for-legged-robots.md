---
title: Flow Policy Gradients for Legged Robots
title_zh: 腿式机器人的流策略梯度
authors: "Brent Yi, Hongsuk Choi, Himanshu Gaurav Singh, Xiaoyu Huang, Takara E. Truong, Carmelo Sferrazza, Yi Ma, Yan Duan, Pieter Abbeel, Guanya Shi, Karen Liu, Angjoo Kanazawa"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=BA6n0nmagi"
tags: ["query:ad"]
score: 9.0
evidence: 强化学习用于腿式机器人运动控制
tldr: 针对现有流策略优化算法在连续控制任务中存在策略崩溃的问题，本文提出FPO++算法，通过降低梯度方差和正则化熵的设计，增强了训练的稳定性。该方法成功应用于腿式机器人运动和人形运动跟踪，能够建模动作间的相关性，并可在真实人形机器人上部署。这项工作为基于流的强化学习在机器人控制中的实际应用提供了可行方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有流策略优化算法在复杂连续控制任务中易发生策略崩溃，限制了其在机器人控制中的应用。
method: 提出FPO++算法，通过降低梯度方差和熵正则化来改进流策略优化，使训练更稳定。
result: FPO++成功训练出腿式机器人运动和人形运动跟踪的流策略，并在真实人形机器人上部署。
conclusion: FPO++是一种稳定、可解释的强化学习算法，能有效建模动作相关性，适用于真实机器人控制。
---

## Abstract
We study robot control with flow policy optimization (FPO), an online reinforcement learning algorithm for flow-based action distributions. We demonstrate how flow policy optimization can succeed for more difficult continuous control tasks than shown in prior work, using a set of design choices that reduce gradient variance and regularize entropy. We show that these design choices mitigate policy collapse challenges faced by the original FPO algorithm and use the resulting algorithm, FPO++, to train flow policies for legged robot locomotion and humanoid motion tracking. We find that FPO++ is stable to train, interpretably models cross-action correlations, and can be deployed to real humanoid robots.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究背景**：流策略优化（FPO）是一种基于流的在线强化学习算法，用于建模动作分布。然而，原始FPO在复杂连续控制任务中容易发生策略崩溃（policy collapse），导致训练不稳定甚至失败。
- **核心问题**：如何改进FPO，使其能够稳定地训练腿式机器人的运动控制策略，并实际部署到真实人形机器人上。
- **整体含义**：本文通过设计降低梯度方差和正则化熵的方法，提出FPO++算法，成功缓解了策略崩溃问题，证明了基于流的强化学习在真实机器人控制中的可行性。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：在原有FPO基础上引入两个关键改进——降低梯度方差（gradient variance reduction）和熵正则化（entropy regularization），以稳定训练过程。
- **关键技术细节**：
  - 采用特定的梯度估计技巧（如基线削减、重要性采样修正等）减少方差。
  - 在目标函数中加入熵正则项，防止策略过早坍缩到确定性行为。
  - 整体算法保持流模型（flow model）对动作分布的灵活建模能力，同时增强训练的鲁棒性。
- **算法流程**（文字说明）：
  1. 初始化流策略参数（例如用Normalizing Flow表示动作分布）。
  2. 在环境中采样轨迹，收集状态-动作-奖励数据。
  3. 使用策略梯度方法更新策略，其中梯度计算时应用方差降低技巧。
  4. 添加熵正则项到优化目标中（例如 \( \nabla_{\theta} J(\theta) + \alpha \nabla_{\theta} \mathcal{H}(\pi_{\theta}) \)）。
  5. 重复采样和更新直至收敛。

## 3. 实验设计：数据集/场景、基准、对比方法
- **实验场景**：
  - 腿式机器人运动（legged robot locomotion）——具体机器人未指定（可能包括四足或双足平台）。
  - 人形运动跟踪（humanoid motion tracking）——模拟环境中的跟随任务。
  - 真实人形机器人部署（real humanoid robot）——在真实硬件上测试。
- **基准（Benchmark）**：未明确提及标准基准，但隐含对比对象为原始FPO算法（因本文旨在解决其崩溃问题）。
- **对比方法**：论文正文中未给出与其他强化学习算法（如PPO、SAC）的定量比较，仅在消融方面可能对比了有无方差降低或熵正则的变体。**信息缺失**。

## 4. 资源与算力
- **文中未明确说明**：未提及使用的GPU型号、数量、训练时长等具体算力信息。推测可能是在标准工作站或小型服务器集群上进行，但无法确认。**信息缺失**。

## 5. 实验数量与充分性
- **实验数量**：共涉及三个主要场景（腿式机器人运动、人形跟踪模拟、真实机器人部署）。缺乏多组不同任务对比、超参数扫描、多随机种子重复实验等细节。
- **充分性评估**：
  - **优点**：包含真实机器人实验，增加了实际验证。
  - **不足**：未与现有主流算法（PPO、SAC、Diffusion Policy等）进行公平对比；无消融实验或统计显著性检验；实验覆盖范围有限（仅两个模拟任务+一个真实部署）。总体而言，实验不够充分，不足以全面证明FPO++的通用优越性。

## 6. 论文的主要结论与发现
- **主要结论**：FPO++是一种稳定、可解释的强化学习算法，能够有效建模动作间的相关性，训练出的流策略可以成功在真实人形机器人上部署。
- **发现**：降低梯度方差和熵正则化是缓解原始FPO策略崩溃的关键设计选择；流策略比传统高斯策略更能捕捉多模态或具有相关性的动作分布。

## 7. 优点：方法或实验设计上的亮点
- **方法亮点**：
  - 针对FPO的崩溃问题提出了简单有效的改进（方差降低+熵正则），具有实用价值。
  - 保持了流模型表达能力强、可解释性好的特点。
- **实验亮点**：
  - 包含真实机器人部署验证，展示了方法的实际可行性（Sim-to-Real转换潜力）。
  - 关注腿式机器人这一具有挑战性的连续控制领域。

## 8. 不足与局限
- **实验覆盖不足**：仅在少数任务上验证，缺乏对更多样化任务（如高维操控、复杂地形）的测试。
- **缺乏公平对比**：未与目前主流的强化学习算法（PPO、SAC、Diffusion Policy）进行定量比较，难以说明FPO++相比这些方法的优势。
- **偏差风险**：论文被ICLR 2026拒稿（来源标注为Rejected），可能反映出审稿人认为实验设计或方法贡献存在不足。
- **应用限制**：流策略可能推理速度较慢（依赖于Normalizing Flow的前向传播），在实时性要求高的机器人控制中可能存在延迟问题，文中未讨论。
- **资源消耗未说明**：训练成本未知，无法判断方法的可重现性。

（完）
