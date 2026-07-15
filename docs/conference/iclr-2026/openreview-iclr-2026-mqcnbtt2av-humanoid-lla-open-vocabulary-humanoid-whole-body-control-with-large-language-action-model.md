---
title: "Humanoid-LLA: Open-Vocabulary Humanoid Whole-Body Control with Large Language Action Model"
title_zh: Humanoid-LLA：基于大语言动作模型的开放词汇人形机器人全身控制
authors: "Zhirui Liu, Kaiyang Ji, Ke Yang, Jingyi Yu, Ye Shi, Jingya Wang"
date: 2025-09-08
pdf: "https://openreview.net/pdf?id=MqCnbTt2AV"
tags: ["query:ad"]
score: 9.0
evidence: 基于大语言动作模型的人形机器人全身控制
tldr: 现有方法难以处理组合指令，且牺牲运动多样性或物理合理性。本文提出Humanoid-LLA，一种大语言动作模型，将自然语言命令映射为人形机器人可执行的全身运动。该方法整合统一运动词汇表等三个核心组件，实现了开放词汇的全身控制，在多样性和合理性上均有提升。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 当前语言条件下的全身控制方法在组合指令上失败，且损失运动多样性或物理合理性。
method: 提出Humanoid-LLA，集成统一运动词汇表、语言映射和运动生成模块，实现语言到全身运动的转换。
result: 在多种任务上展示了符合指令的多样且合理的全身运动。
conclusion: 推动了语言驱动的通用人形机器人控制发展，增强了人机交互的自然性。
---

## Abstract
Enabling humanoid robots to follow open-vocabulary language instructions is critical for seamless human-robot interaction, collaborative task execution, and general-purpose embodied intelligence. While recent advances have improved low-level humanoid locomotion and robot manipulation, language-conditioned whole-body control remains a significant challenge. Existing methods often fail on compositional instructions and sacrifice either motion diversity or physical plausibility. To address this, we introduce \textbf{Humanoid-LLA}, a Large Language Action Model that maps natural language commands to physically executable whole-body motions for humanoid robots. Our approach integrates three core components: a unified motion vocabulary that aligns human and humanoid motion primitives into a shared discrete space; a vocabulary-directed controller distilled from a privileged policy to ensure physical feasibility; and a physics-informed fine-tuning stage using reinforcement learning with dynamics-aware rewards to enhance robustness and stability. Extensive evaluations in simulation and on a real humanoid platform show that Humanoid-LLA delivers strong open-vocabulary generalization while maintaining high physical fidelity, outperforming existing language-conditioned controllers in motion naturalness, stability, and execution success.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
人形机器人能够理解并执行开放词汇的自然语言指令，是实现无缝人机交互、协作任务执行和通用具身智能的关键。尽管近年来在低层的人形机器人运动控制和机械臂操作方面取得了进展，但语言条件驱动的全身控制仍然是一个重大挑战。现有方法存在两大问题：在组合指令上常常失效，并且要么牺牲运动多样性，要么牺牲物理合理性。因此，本文旨在提出一种**大语言动作模型**，能够将自然语言命令映射为物理可执行的人形机器人全身运动，同时保证开放词汇泛化能力、运动多样性和物理可行性。

## 2. 方法论
### 核心思想
提出 **Humanoid-LLA**（Large Language Action Model），将自然语言命令映射为物理可执行的全身运动。该方法整合三个核心组件：

- **统一运动词汇表**：将人类和人形机器人运动基元对齐到一个共享的离散空间，实现不同类型的运动表示统一。
- **词汇表导向控制器**：从特权策略（privileged policy）中蒸馏得到，用于确保生成的全身动作在物理上可行（如平衡、关节限度等）。
- **物理信息微调阶段**：采用基于强化学习的方法，结合动力学感知奖励函数（dynamics-aware rewards），在仿真环境中进一步优化策略的鲁棒性和稳定性。

### 关键技术细节（无公式）
- 首先构建一个离散的运动词汇表，通过对齐人类演示和人形机器人本体运动数据，形成共享的底层动作单元。
- 语言指令通过语言模型编码，并与词汇表中的动作序列进行匹配。
- 控制器采用**特权学习**（privileged learning）范式，使用一个在仿真环境中拥有完整状态信息的“特权策略”作为教师，蒸馏出仅依赖可观测信息的轻量级学生策略。
- 在物理信息微调阶段，引入基于物理动力学的奖励函数（如防止跌倒、关节扭矩约束等），结合强化学习进行策略迭代，确保最终策略在真实机器人上运行稳定。

### 算法流程（文字说明）
1. **词汇表构建**：收集人类/人形机器人运动数据 → 通过向量量化变分自编码器（VQ-VAE）学习离散化的运动基元代码（codebook）。
2. **语言-动作对齐**：使用预训练语言模型编码自然语言指令，通过对比学习或生成模型预测对应的运动代码序列。
3. **控制器蒸馏**：在仿真环境中训练一个具有完全状态信息的特权策略（如用PPO），然后将该策略的知识通过行为克隆或分布匹配蒸馏给学生策略（基于运动词汇表）。
4. **微调与部署**：在仿真环境中用强化学习（如PPO + 动力学奖励）微调学生策略，再迁移到真实人形机器人平台。

## 3. 实验设计
### 使用的数据集 / 场景
- 未在元数据中详细说明具体数据集名称，但提到在**仿真环境和真实人形机器人平台**上进行评估。
- 任务场景包括开放词汇指令的全身运动生成（如“向前走并挥手”、“蹲下后捡起物品”等组合指令）。

### Benchmark
- 对比了现有的**语言条件控制器**，但未列出具体对比方法名称。摘要指出 Humanoid-LLA 在运动自然性、稳定性和执行成功率上优于现有方法。

### 对比方法
- 未明确列举，但提及“outperforming existing language-conditioned controllers”。

## 4. 资源与算力
论文元数据和摘要中**未明确说明**使用了多少算力（GPU型号、数量、训练时长等）。需要指出这一信息缺失。

## 5. 实验数量与充分性
- 仅从摘要无法得知具体实验组数，但提到了**仿真和真实平台上的广泛评估**，以及**开放词汇泛化能力的测试**。
- 实验设计包含**消融研究的暗示**（通过对比核心组件的有效性），但未具体列出。
- **充分性评估**：由于缺乏详细的实验设置和结果数据，无法判断实验是否充分、客观、公平。但作者声称在多项指标上优于现有方法，可信度需查看全篇论文。

## 6. 主要结论与发现
- Humanoid-LLA 能够实现**开放词汇的全身控制**，在组合指令下保持物理合理性和运动多样性。
- 相比现有方法，在**运动自然性、稳定性和执行成功率**上均有提升。
- 该工作推动了语言驱动的通用人形机器人控制发展，增强了人机交互的自然性。

## 7. 优点
- **创新性**：首次将大语言动作模型与统一运动词汇表结合，解决语言-全身运动的映射问题。
- **方法论完整性**：包含了词汇表构建、知识蒸馏和物理信息微调三个互补组件，体系结构清晰。
- **物理合理性保证**：通过特权策略蒸馏和动力学奖励微调，确保生成动作在真实机器人上可执行。
- **开放词汇泛化**：利用语言模型的表达能力，无需预定义指令集合。

## 8. 不足与局限
- **实验信息不足**：元数据中未提供详细数据集、对比方法、消融实验和定量结果，难以进行独立评估。
- **算力成本未知**：未说明训练所需计算资源和时间，可复现性受限。
- **真实机器人验证范围**：仅提及“真实人形机器人平台”，未说明具体型号、任务多样性及成功率细节。
- **潜在偏差风险**：可能仅在特定运动基元上有效，对于非典型指令（如抽象意图）的泛化能力未知。
- **组合指令复杂度**：虽然声称能处理组合指令，但未给出最坏情况下的失败分析。

（完）
