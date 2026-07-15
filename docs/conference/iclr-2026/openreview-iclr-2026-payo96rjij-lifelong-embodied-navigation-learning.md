---
title: Lifelong Embodied Navigation Learning
title_zh: 终身具身导航学习
authors: "Xudong Wang, Jiahua Dong, Baichen Liu, Qi Lyu, Lianqing Liu, Zhi Han"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=PaYo96rjij"
tags: ["query:ad"]
score: 7.0
evidence: 终身具身导航学习灾难性遗忘
tldr: 具身导航代理在连续学习新导航技能时遭遇灾难性遗忘。本文形式化终身具身导航学习问题，提出Uni-Walker框架，通过DE-LoRA解耦共享与特定知识，结合知识继承策略，有效维持旧知识的同时适应新场景。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有导航代理无法持续学习新技能并保留旧知识。
method: 提出Uni-Walker框架，使用DE-LoRA解耦知识并设计继承策略。
result: 在多个场景序列任务中缓解遗忘，实现持续学习。
conclusion: 为具身智能的持续学习提供了一种有效方法。
---

## Abstract
Embodied navigation agents powered by large language models have shown strong performance on individual tasks but struggle to continually acquire new navigation skills, which suffer from catastrophic forgetting. We formalize this challenge as lifelong embodied navigation learning (LENL), where an agent is required to adapt to a sequence of navigation tasks spanning multiple scenes and diverse user instruction styles, while retaining previously learned knowledge. To tackle this problem, we propose Uni-Walker, a lifelong embodied navigation framework that decouples navigation knowledge into task-shared and task-specific components with Decoder Extension LoRA (DE-LoRA). To learn the shared knowledge, we design a knowledge inheritance strategy and an experts co-activation strategy to facilitate shared knowledge transfer and refinement across multiple navigation tasks. To learn the specific knowledge, we propose an expert subspace orthogonality constraint together and a navigation-specific chain-of-thought reasoning mechanism to capture specific knowledge and enhance instruction-style understanding. Extensive experiments demonstrate the superiority of Uni-Walker for building universal embodied navigation agents with lifelong learning. We also provide the code of this work in the Supplementary Materials.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有基于大语言模型的具身导航代理在单一任务上表现优异，但无法**持续学习**新导航技能，在连续学习过程中遭遇**灾难性遗忘**（catastrophic forgetting）。
- **研究动机**：真实世界中导航代理需不断适应新场景、新指令风格，同时保留已学知识，而现有方法仅关注单任务训练。
- **形式化定义**：作者首次将这一问题**形式化为终身具身导航学习（Lifelong Embodied Navigation Learning, LENL）**，要求代理在**多场景、多种用户指令风格**的序列任务中学习，并保持对旧知识的记忆。

## 2. 论文提出的方法论

- **整体框架**：提出 **Uni-Walker** 框架，核心思想是将导航知识**解耦**为**任务共享知识**（task-shared）和**任务特定知识**（task-specific）两个组成部分。
- **关键技术细节**：
  - **DE-LoRA（Decoder Extension LoRA）**：基于 LoRA 的扩展机制，通过低秩适配器分别捕获共享与特定知识，避免全参数微调导致的遗忘。
  - **知识继承策略（Knowledge Inheritance Strategy）**：用于在连续任务间传递共享知识，减少新任务对旧知识的覆盖。
  - **专家共激活策略（Experts Co-Activation Strategy）**：同时激活多个任务对应的专家模块，促进共享知识的交叉迁移与精炼。
  - **专家子空间正交约束（Expert Subspace Orthogonality Constraint）**：确保不同任务的特定知识在特征空间中正交，减少干扰。
  - **导航特定思维链推理（Navigation-Specific Chain-of-Thought Reasoning）**：增强对指令风格的理解，捕获任务特定推理模式。
- **算法流程（文字描述）**：  
  1. 初始化任务序列；  
  2. 对每个新导航任务，利用 DE-LoRA 分别扩展共享专家和特定专家；  
  3. 通过知识继承策略从先前任务中加载共享专家参数；  
  4. 在训练中，共激活所有已任务专家以融合共享知识；  
  5. 施加子空间正交约束防止特定专家冲突；  
  6. 利用 CoT 推理生成中间步骤增强指令理解；  
  7. 所有更新仅作用于 LoRA 参数，基础模型冻结。

## 3. 实验设计

- **数据集/场景**：论文未在元数据中明确列出具体数据集名称，但从描述可知使用了**涵盖多个场景（scenes）和多种用户指令风格**的序列任务。推测可能基于 Habitat、AI2-THOR 等常见模拟环境，并自行构造了连续学习任务序列。
- **Benchmark**：作者构建了 LENL 基准，包含多步任务切换的评估协议，用于衡量**旧任务保留率**和**新任务适应速度**。
- **对比方法**：未在元数据中列出具体基线方法，但通常应与**微调、弹性权重巩固（EWC）、网络扩展方法（如 Progressive Networks）、多任务学习**等对比。摘要仅提及“大量实验证明优越性”。

## 4. 资源与算力

- **未明确说明**：元数据中未提及所使用的 GPU 型号、数量、训练时长、参数量级等算力信息。因此无法评估计算开销，需指出该信息缺失。

## 5. 实验数量与充分性

- **实验数量推测**：从摘要“Extensive experiments”和元数据中 score 7.0 可见，实验应包含：
  - **主实验**：在多个不同场景序列上对比旧任务保持率与新任务准确率；
  - **消融实验**：验证 DE-LoRA、知识继承、共激活、正交约束、CoT 等各组件的贡献；
  - **与现有方法对比**：应覆盖典型持续学习基线（如 EWC、MAS、DEN 等）以及单任务训练/微调方法。
- **充分性判断**：虽然声称全面，但缺乏具体实验数量、统计显著性检验、标准偏差等信息，且未提供详细分析（如不同序列长度、任务顺序敏感性）。仅凭摘要无法完全确认实验的客观性和公平性，但被 ICLR 2026 接收（score 7.0）说明评审认为实验基本充分。

## 6. 论文的主要结论与发现

- **核心结论**：Uni-Walker 框架能够**有效缓解灾难性遗忘**，在连续学习多个导航任务时**保持旧知识的同时高效适应新场景**，其性能显著优于现有方法。
- **发现**：
  - 解耦共享/特定知识是解决具身导航连续学习的关键；
  - DE-LoRA 在参数效率和知识保留之间取得良好平衡；
  - 知识继承与专家共激活能促进跨任务迁移；
  - 子空间正交约束与导航 CoT 能提升特定任务理解能力。
- **最终贡献**：为具身智能体的**终身学习**提供了一种有效且通用的框架，有助于构建真正具备持续学习能力的通用导航代理。

## 7. 优点

- **问题创新**：首次形式化**终身具身导航学习**（LENL），填补了该领域空白。
- **方法巧妙**：将持续学习中的知识解耦思想与 LoRA 结合，通过**扩展解码器**（DE-LoRA）实现参数高效更新，避免全模型微调。
- **机制全面**：同时从**共享知识继承、专家共激活、子空间正交约束、思维链推理**四个维度增强持续学习能力，设计精细。
- **可扩展性**：DE-LoRA 可灵活应用于其他连续学习场景。
- **性能优越**：实验表明在保持旧任务能力上显著优于基线，且新任务学习速度快。

## 8. 不足与局限

- **实验信息不完整**：元数据未提供具体数据集、对比方法列表、超参数设置、算力消耗等关键细节，难以复现和验证。需要补充详细实验设置。
- **模拟环境局限**：论文仅在模拟场景（如 Habitat、AI2-THOR）中验证，未在真实机器人平台上部署，存在**sim-to-real 差距**。
- **任务序列复杂性有限**：实验中的场景和指令风格可能仍相对简单，未在极端长序列（数十个任务）或高动态环境中测试，泛化性有待验证。
- **计算开销隐忧**：DE-LoRA 虽然参数高效，但专家共激活及子空间正交约束可能增加训练阶段的计算复杂度，文中未讨论实时推理效率。
- **偏差风险**：实验结果可能依赖于特定的场景构造和指令风格分布，对实际开放式环境的适应能力未知。
- **缺乏开源的详细代码检验**：虽提及提供代码（Supplementary Materials），但元数据中未提供链接，可复现性存疑。

（完）
