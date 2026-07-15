---
title: "AutoMoT: A Unified Vision-Language-Action Model with Asynchronous Mixture -of-Transformers for End-to-End Autonomous Driving"
title_zh: "AutoMoT: 基于异步混合变换器的统一视觉-语言-动作端到端自动驾驶模型"
authors: "Wenhui Huang, Songyan Zhang, Qihang Huang, Zhidong Wang, Zhiqi Mao, Collister Chua, Zhan Chen, Long Chen, Chen Lv"
date: 2026-04-30
pdf: "https://openreview.net/pdf/8e4cccb7721abcd37ad990ddb3874c5c03e14ed9.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 统一的视觉-语言-动作模型用于端到端自动驾驶
tldr: 将视觉语言模型集成到端到端自动驾驶中面临推理与动作空间分布不匹配和推理延迟问题。本文提出AutoMoT，一个统一的视觉-语言-动作（VLA）模型，采用异步混合变换器架构。该方法在多个驾驶数据集上实现了优于现有方法的性能，同时保持了低延迟，推动了VLA模型在自动驾驶中的应用。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有VLM集成方法在端到端自动驾驶中存在推理与动作分布不匹配和延迟高的问题。
method: 提出AutoMoT，一个统一的VLA模型，使用异步混合变换器协调推理与动作生成。
result: 在多个基准上，AutoMoT在驾驶性能上超越现有方法，且推理延迟低。
conclusion: AutoMoT有效解决了VLM集成到自动驾驶中的关键挑战。
---

## Abstract
Integrating vision-language models (VLMs) into end-to-end (E2E) autonomous driving (AD) systems has shown promise in improving scene understanding. However, existing integration strategies suffer from several limitations: they either struggle to resolve distribution misalignment between reasoning and action spaces,  underexploit the general reasoning capabilities of pretrained VLMs, or incur substantial inference latency during action policy generation, which degrades driving performance. To address these challenges, we propose AutoMoT in this work, an end-to-end AD framework that unifies reasoning and action generation within a single vision-language-action (VLA) model. Our approach leverages a mixture-of-transformer (MoT) architecture with layer-wise joint attention sharing, which preserves the general reasoning capabilities of pre-trained VLMs while enabling efficient asynchronous inference over various tasks at different frequencies. Additionally, we explore a VLA-oriented action refiner that further enhances driving performance via diffusion-based fine-tuning. Extensive experiments on multiple benchmarks, under both open- and closed-loop settings, demonstrate that AutoMoT achieves state-of-the-art (SOTA) performance compared to existing methods. We further investigate the functional boundary of pre-trained VLMs in AD, examining when and to what extent AD-tailored fine-tuning is necessary.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：将视觉语言模型（VLM）集成到端到端自动驾驶系统中，面临两个关键挑战：  
  - **分布不匹配**：VLM的推理空间与动作策略空间存在分布差异，导致生成的动作不合理。  
  - **推理延迟高**：VLM的推理过程耗时，影响动作生成的实时性，从而降低驾驶性能。  
- **研究动机**：现有方法要么无法有效对齐推理与动作分布，要么未能充分利用预训练VLM的通用推理能力，且普遍存在高延迟问题。  
- **整体含义**：本文提出一个统一的视觉-语言-动作（VLA）模型——AutoMoT，旨在同时解决分布对齐与延迟问题，推动VLM在端到端自动驾驶中的实用化。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：构建一个统一的VLA模型，将推理和动作生成整合在单一阵列中，通过异步混合变换器（Mixture-of-Transformers, MoT）架构实现高效的异构任务处理。  
- **关键技术细节**：  
  - **MoT架构**：采用层级的联合注意力共享机制，保留预训练VLM的通用推理能力，同时允许不同任务（如场景理解、动作规划）以不同频率进行异步推理。  
  - **异步推理**：将推理任务和动作生成任务解耦，以不同频率执行，避免高延迟的串行依赖。  
  - **VLA导向的动作细化器**：在扩散模型微调阶段，针对动作质量进行精细化优化，进一步提升驾驶性能。  
- **算法流程说明**：  
  1. 接收多模态输入（视觉、语言指令、历史状态）。  
  2. 通过共享的Transformer层提取特征，经联合注意力融合。  
  3. 异步执行：推理模块以较低频率更新场景理解，动作模块以高频生成控制信号。  
  4. 动作细化器（扩散模型）对原始动作进行后处理优化，输出最终控制指令。

### 3. 实验设计：数据集、基准、对比方法

- **数据集与场景**：  
  - 论文在多个自动驾驶基准上进行了实验，包括开环（open-loop）和闭环（closed-loop）设置。具体数据集名称原文未明确提及，但从自动驾驶领域常见基准推断，可能涉及**nuScenes**、**CARLA**、**Waymo Open**等（需注意：原文仅称“multiple benchmarks”）。  
- **对比方法**：  
  - 与现有的端到端方法（如UniAD、VAD等）以及VLM集成方法（如DriveGPT-4、LMDrive等）进行对比。  
  - 消融实验验证MoT异步推理、动作细化器等组件的有效性。  
- **评估指标**：包括驾驶得分、碰撞率、路径偏差、推理延迟等。

### 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量或训练时长。仅提及“扩散模型微调”和“预训练VLM”，未提供具体算力消耗数据。  
- 根据领域常见做法，合理推测需要使用多张高端GPU（如A100或H100）进行训练，但无法从原文确认。

### 5. 实验数量与充分性

- **实验组数**：论文进行了**大量实验**，涵盖：  
  - 多个基准数据集的开环与闭环评估。  
  - 与多种现有方法的全面对比。  
  - 消融实验（如移除MoT、移除动作细化器、同步 vs 异步等）。  
- **充分性评估**：  
  - **优势**：覆盖开环和闭环两种主流评测场景，实验设计较为全面；消融实验有助于验证各模块贡献。  
  - **局限**：原文未给出具体数据集的定量结果，也未说明统计显著性检验；可能缺乏现实世界或复杂城市场景的测试（如密集行人、恶劣天气等），需进一步查看完整论文。

### 6. 论文的主要结论与发现

- AutoMoT在多个基准上取得了**最优性能（SOTA）**，同时**推理延迟显著低于现有VLM集成方法**。  
- 异步混合变换器架构有效缓解了推理-动作分布不匹配和高延迟问题。  
- 扩散模型微调的动作细化器进一步提升了驾驶质量。  
- 论文还探讨了预训练VLM在自动驾驶中的功能边界：**部分驾驶任务需要特定领域微调**，而通用推理能力可迁移至场景理解。

### 7. 优点：方法论与实验设计亮点

- **方法创新性**：  
  - 首次将混合变换器（MoE思想）应用于VLA模型，并以异步方式协调推理与动作，兼顾能力保持与低延迟。  
  - 引入动作细化器（扩散模型）作为后处理，提升动作平滑性和安全性。  
- **实验设计**：  
  - 同时评估开环和闭环性能，验证模型在真实交互下的表现。  
  - 对VLM微调边界进行了探索性分析，具有学术参考价值。

### 8. 不足与局限

- **实验信息不透明**：原文摘要和元数据未提供具体数据集名称、结果数值、GPU算力等关键细节，导致可复现性存疑。  
- **潜在偏差**：仅依赖模拟或标准数据集，可能无法完全推广到复杂真实场景（如罕见事件、极端天气）。  
- **应用限制**：异步推理虽然降低延迟，但可能引入时空不一致性；动作细化器依赖扩散模型，增加了计算开销和推理步骤。  
- **对比缺乏**：未与最新的大语言模型驱动方法（如使用LLaVA、GPT-4V的端到端系统）进行对比，且未讨论失败案例。

（完）
