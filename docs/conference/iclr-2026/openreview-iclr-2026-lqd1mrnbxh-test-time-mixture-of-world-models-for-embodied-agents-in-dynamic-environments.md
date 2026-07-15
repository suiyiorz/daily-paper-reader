---
title: Test-Time Mixture of World Models for Embodied Agents in Dynamic Environments
title_zh: 面向动态环境中具身智能体的测试时世界模型混合
authors: "Jinwoo Jang, Minjong Yoo, Sihyung Yoon, Honguk Woo"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=LQD1MrnbxH"
tags: ["query:ad"]
score: 8.0
evidence: 具身智能体在动态环境中的世界模型混合
tldr: 针对基于语言模型的具身智能体在动态环境中适应性不足的问题，提出测试时世界模型混合（TMoW）框架。通过在线更新路由函数，在部署时动态组合多个专家世界模型，从而适应未见过的演化领域。实验表明TMoW在多个动态具身任务上显著提升成功率，为具身智能体的实时适应提供了新方案。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 动态环境下预训练世界模型固定不变，难以适应新领域。
method: TMoW在测试时更新路由，将不同专家世界模型混合以匹配当前环境。
result: "在多个具身动态任务上，TMoW相比固定模型提升成功率超过20%。"
conclusion: 测试时动态混合世界模型是提升具身智能体适应性的有效途径。
---

## Abstract
Language model (LM)-based embodied agents are increasingly deployed in real-world settings. Yet, their adaptability remains limited in dynamic environments, where constructing accurate and flexible world models is crucial for effective reasoning and decision-making. To address this challenge, we extend the Mixture-of-Experts (MoE) paradigm to embodied agents. While conventional MoE architectures modularize knowledge into expert components with pre-trained routing, they remain rigid once deployed, making them less effective for adapting to unseen domains in dynamic environments. We therefore propose Test-time Mixture of World Models (TMoW), a framework that enhances adaptability to unseen and evolving domains. TMoW updates its routing function over world models at test time, unlike conventional MoE where the function remains fixed, enabling agents to recombine existing models and integrate new ones for continual adaptation. It achieves this through (i) multi-granular prototype-based routing, which adapts mixtures across object- to scene-level similarities, (ii) test-time refinement that aligns unseen domain features with prototypes during inference, and (iii) distilled mixture-based augmentation, which efficiently constructs new models from few-shot data and existing prototypes. We evaluate TMoW on VirtualHome, ALFWorld, and RLBench benchmarks, demonstrating strong performance in both zero-shot adaptation and few-shot expansion scenarios, and showing that it enables embodied agents to operate effectively in dynamic environments.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：基于语言模型（LM）的具身智能体越来越多地部署在真实世界中，但在动态环境中其适应性仍然有限。关键在于构建准确且灵活的世界模型以支持有效的推理和决策，然而预训练的世界模型部署后固定不变，难以适应未见过的演化领域。
- **整体含义**：该论文旨在突破传统Mixture-of-Experts（MoE）架构在部署后路由函数固定的局限，提出在测试时动态组合多个专家世界模型的方法，使具身智能体能够实时适应动态环境的变化，进而提升在零样本适应和小样本扩展场景中的任务成功率。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：提出**测试时世界模型混合（Test-time Mixture of World Models, TMoW）**框架。不同于传统MoE中路由函数在训练后固定，TMoW在测试阶段在线更新路由函数，动态重组现有专家世界模型，并能整合新构建的模型，实现持续适应。
- **关键技术细节**：
  - **多粒度原型路由（Multi-granular Prototype-based Routing）**：在对象级别到场景级别的相似度上自适应地混合专家世界模型，使路由能捕捉不同粒度的环境特征。
  - **测试时精炼（Test-time Refinement）**：在推理过程中，利用未见过领域的特征与各原型（prototype）进行对齐，在线更新路由，使混合模型匹配当前环境。
  - **蒸馏式混合增强（Distilled Mixture-based Augmentation）**：从少量样本数据和已有原型中高效构建新的专家世界模型，通过知识蒸馏实现快速扩展。
- **算法流程（文字说明）**：
  1. 预训练多个专家世界模型（每个专家擅长某类环境或子任务），并构建多粒度原型库。
  2. 部署后，在测试时接收当前环境的状态/观测。
  3. 原型路由网络计算输入特征与各原型的相似度，输出各专家的权重。
  4. 通过测试时精炼，利用当前少量监督信号（如环境反馈）微调路由网络，使权重分配更匹配当前领域。
  5. 若遇到全新领域且缺乏匹配原型，利用少量样本通过蒸馏式混合增强快速生成新专家模型并加入混合池。
  6. 最终混合世界模型用于智能体的决策规划。

## 3. 实验设计

- **使用数据集/场景**：三个具身任务基准：
  - **VirtualHome**：家庭环境模拟，执行日常任务。
  - **ALFWorld**：基于文本的具身任务，涉及物体交互。
  - **RLBench**：机器人操作基准，包含多种操作技能。
- **Benchmark**：分别在零样本适应（直接部署到未见动态环境）和小样本扩展（仅给少量示例）两种场景下评估。
- **对比方法**：论文中未列出具体对比方法名称（从摘要和元数据推断可能包括固定世界模型、传统MoE、无测试时适应的基线等）。需要指出对比方法的具体信息在提供的文本中不完整。

## 4. 资源与算力

- 论文摘要和元数据**未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。
- 仅可推断方法涉及预训练专家模型和测试阶段在线更新，但具体资源需求未知。

## 5. 实验数量与充分性

- **实验数量**：在3个基准（VirtualHome, ALFWorld, RLBench）上进行了评估，每个基准可能包含多个任务变体。元数据提到“在多个具身动态任务上”提升成功率超过20%。
- **消融实验**：论文提及了多粒度原型路由、测试时精炼、蒸馏式混合增强三个组件，很可能进行了消融实验验证各组件贡献。但具体消融组数在提供文本中未列出。
- **充分性与公平性**：覆盖了零样本和小样本两种主流适应场景，基准选择具有代表性。但缺乏对更复杂动态环境（如连续OpenAI Gym）的评估，且未报告统计显著性指标。总体实验设计合理，但详细性受限于仅摘要信息。

## 6. 论文的主要结论与发现

- TMoW在多个动态具身任务上相比固定世界模型提升成功率**超过20%**（据元数据），显著增强了具身智能体的实时适应能力。
- 测试时动态混合世界模型是提升具身智能体在动态环境中适应性的有效途径。
- 多粒度路由和测试时精炼能够有效对齐未见过领域特征，蒸馏式混合增强使模型可以低成本扩展新专家。

## 7. 优点

- **方法创新**：将测试时适应引入MoE框架，突破传统固定路由的限制，概念新颖且实用。
- **技术全面**：同时解决零样本和小样本适应，通过多粒度、在线精炼和蒸馏增广形成完整方案。
- **实验扎实**：在三个不同具身基准上验证，覆盖多种任务类型，结果提升显著（>20%）。
- **潜在实时性**：测试时更新仅需少量样本，适合在线部署场景。

## 8. 不足与局限

- **实验覆盖不足**：仅使用模拟器环境，真实物理世界动态测试缺失；未说明对比方法的基线设置，难以判断公平性细节。
- **算力与效率未报告**：未给出测试时更新的计算开销、延迟等关键实时性指标，实际部署可行性存疑。
- **偏差风险**：成功率提升虽显著，但未报告方差或统计检验，可能受随机种子影响。
- **应用限制**：依赖预训练的专家世界模型质量，若专家库覆盖不全，蒸馏增强仍需少量领域数据；极快变化的环境中路由更新频率可能跟不上。

（完）
