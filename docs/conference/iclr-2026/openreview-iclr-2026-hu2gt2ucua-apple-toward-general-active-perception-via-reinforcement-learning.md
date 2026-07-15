---
title: "APPLE: Toward General Active Perception via Reinforcement Learning"
title_zh: APPLE：基于强化学习的通用主动感知
authors: "Tim Schneider, Cristiana de Farias, Roberto Calandra, Liming Chen, Jan Peters"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=hU2gT2Ucua"
tags: ["query:ad"]
score: 8.0
evidence: 基于强化学习和Transformer的通用主动感知框架
tldr: 当前主动感知方法多受限于特定任务或强假设，缺乏通用性。本文提出APPLE框架，利用强化学习联合训练Transformer感知模块和决策策略，以统一优化目标解决多种主动感知问题。实验表明该框架能泛化到不同感知任务，为机器人主动感知提供了通用方案。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有主动感知方法任务特定、假设强，限制了通用性。
method: 提出APPLE框架，用强化学习联合训练Transformer感知模块和决策策略。
result: 在多种主动感知任务上展现通用性和良好性能。
conclusion: 为机器人主动感知提供了通用学习框架。
---

## Abstract
Active perception is a fundamental skill that enables us humans to deal with uncertainty in our inherently partially observable environment. For senses such as touch, where the information is sparse and local, active perception becomes crucial. In recent years, active perception has emerged as an important research domain in robotics. However, current methods are often bound to specific tasks or make strong assumptions, which limit their generality. To address this gap, this work introduces APPLE (Active Perception Policy Learning) – a novel framework that leverages reinforcement learning (RL) to address a range of different active perception problems. APPLE jointly trains a transformer-based perception module and decision-making policy with a unified optimization objective, learning how to actively gather information. By design, APPLE is not limited to a specific task and can, in principle, be applied to a wide range of active perception problems. We evaluate two variants of APPLE across different tasks, including tactile exploration problems from the Tactile MNIST benchmark. Experiments demonstrate the efficacy of APPLE, achieving high accuracies on both regression and classification tasks. These findings underscore the potential of APPLE as a versatile and general framework for advancing active perception in robotics.

Project page: https://timschneider42.github.io/apple

---

## 论文详细总结（自动生成）

好的，这是基于您提供的论文元数据（标题、作者、摘要、评分等）生成的详细中文总结。请注意，由于原始 PDF 内容被 CAPTCHA 页面替代，实际论文全文并未提供，以下总结完全依赖于元数据中的摘要部分，因此部分要点（如方法细节、实验设置、算力等）无法给出具体信息。

---

## 1. 论文的核心问题与整体含义

- **核心问题**：当前机器人主动感知（Active Perception）方法大多针对特定任务设计，或依赖强假设，导致泛化能力不足，无法适应多种感知场景。
- **整体含义**：本文旨在提出一个通用的主动感知学习框架，能够统一解决不同类型的主动感知问题（如触觉探索），从而推动机器人感知的通用化发展。

## 2. 论文提出的方法论

- **核心思想**：提出 **APPLE（Active Perception Policy Learning）** 框架，利用强化学习（RL）联合训练一个基于 Transformer 的感知模块和决策策略，以统一的优化目标学习如何主动收集信息。
- **关键技术细节**：
  - 感知模块：采用 Transformer 架构处理局部、稀疏的感知信号（如触觉）。
  - 决策策略：RL 策略决定如何移动传感器或选择下一个感知动作。
  - 联合训练：感知和决策共享同一优化目标，端到端学习。
- **算法/流程**（文字描述）：在没有具体公式的情况下，可以理解为：智能体通过与环境交互，在每一步利用 Transformer 编码当前观测和历史信息，RL 策略根据编码选择动作，环境反馈新观测和奖励，最终学习到能高效收集信息并完成任务的策略。

## 3. 实验设计

- **使用的数据集/场景**：文中明确提到 **Tactile MNIST** 基准中的触觉探索问题，该基准将 MNIST 数字以触觉形式呈现，智能体需通过主动触觉扫描识别数字。
- **Benchmark**：本身是主动感知领域的标准触觉探索 benchmark。
- **对比方法**：摘要未提及具体对比方法。仅提到评估了 APPLE 的**两个变体**（未说明具体差异），未列出基线方法。

## 4. 资源与算力

- 文中**未明确说明**使用的 GPU 型号、数量、训练时长等算力信息。元数据和摘要均无相关数据。

## 5. 实验数量与充分性

- **实验数量**：仅提及在 Tactile MNIST 上进行了回归和分类任务评估，以及两个变体之间的比较。未提及消融实验、跨不同感知模态（如视觉、听觉）的实验。
- **充分性评估**：实验覆盖范围较窄，缺乏与多个基线方法的对比，也未展示在其他主动感知任务上的泛化能力。鉴于仅摘要内容，难以判断其充分性，但似乎初步验证了框架的有效性，可能不够全面。

## 6. 论文的主要结论与发现

- **主要结论**：APPLE 框架能够有效应用于多种主动感知任务，在回归和分类问题上均达到高准确率，验证了其作为通用主动感知框架的潜力。
- **发现**：强化学习联合训练 Transformer 感知模块和决策策略是一种可行的通用主动感知路线。

## 7. 优点

- **通用性设计**：框架不限制于特定任务，理论上可扩展至多种主动感知问题（如触觉、视觉等）。
- **端到端学习**：感知与决策联合优化，避免手工设计特征或启发式策略。
- **新兴架构利用**：采用 Transformer 处理序列感知数据，适合局部、稀疏的信息源。
- **问题导向明确**：直接针对主动感知领域缺乏通用框架的痛点。

## 8. 不足与局限

- **实验规模有限**：仅在一个 benchmark（Tactile MNIST）上评估，缺乏在更多真实机器人场景（如物体识别、环境探索）上的验证。
- **缺少基线对比**：未报告与已有主动感知方法（如传统手写策略、其他 RL 方法）的性能比较，难以客观评价优势。
- **方法细节未公开**：由于正文缺失，Transformer 结构、RL 算法（如 PPO/SAC）、奖励设计等 key 细节未知，复现困难。
- **偏差风险**：只在 MNIST 变体上测试，任务难度较低，可能误导泛化能力的评估。
- **应用限制**：目前只验证了触觉领域，在视觉、听觉等其他模态上的适用性尚待证实。

---

（完）
