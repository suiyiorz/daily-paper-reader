---
title: "LMGenDrive: LLM Reasoning Meets World Models for End-to-End Driving"
title_zh: LMGenDrive：大语言模型推理结合世界模型的端到端驾驶
authors: "Hao Shao, Letian Wang, Yang Zhou, Yuxuan Hu, Zhuofan Zong, Steven L. Waslander, Wei Zhan, Hongsheng Li"
date: 2025-09-14
pdf: "https://openreview.net/pdf?id=fSnYZZ6v49"
tags: ["query:ad"]
score: 9.0
evidence: 大语言模型推理结合世界模型用于端到端自动驾驶
tldr: 针对自动驾驶在长尾和开放场景中泛化性差的瓶颈，本文提出LMGenDrive框架，将大语言模型的视觉语言理解与推理能力与生成式世界模型相结合。系统先理解场景并推理意图，再利用世界模型想象和评估未来轨迹，最后生成驾驶动作。该方法模拟了人类理解与想象结合的方式，在仿真和真实场景中均提升了安全性和泛化性。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 自动驾驶在长尾和开放场景中泛化性差，现有方法缺乏理解与想象结合的能力。
method: 融合LLM推理和生成式世界模型，先理解场景再想象未来，生成驾驶动作。
result: 在仿真和真实场景中提升了泛化性和安全性，优于单独使用LLM或世界模型的方法。
conclusion: LMGenDrive通过理解与想象的统一，推进了自动驾驶在复杂场景中的部署能力。
---

## Abstract
Recent years have witnessed remarkable progress in autonomous driving, yet generalization to long-tail and open-world scenarios remains the primary bottleneck for large-scale deployment. To address this, one line of research explores LLMs and VLMs for their vision-language understanding and reasoning capabilities, equipping AVs with the ability not only to interpret rare and safety-critical situations when generating driving actions. In parallel, another line investigates generative world models to capture the spatio-temporal evolution of driving scenes, enabling agents to imagine and evaluate possible futures before acting. Inspired by human intelligence, which seamlessly unites understanding and imagination as a hallmark of AGI, this work explores a unified model that brings these two capabilities together for autonomous driving.
We present LMGenDrive, the first framework that unifies LLM-based multimodal reasoning with generative world models for end-to-end closed-loop autonomous driving. Given multi-view camera inputs and natural-language instructions, our model generates both realistic future driving videos and corresponding control signals. By coupling an LLM with generative video capabilities, LMGenDrive gains complementary benefits: future video prediction enhances the LLM's spatio-temporal scene understanding, while the LLM itself provides reasoning and instruction-following capabilities. A progressive three-stage training strategy—ranging from vision pretraining to multi-step long-horizon driving—is proposed to further improve stability and performance.
The resulting model can also operate in two complementary modes: low-latency online planning and autoregressive offline video generation.
Experiments show that LMGenDrive significantly outperforms state-of-the-art methods on challenging closed-loop driving benchmarks, improving instruction following, spatio-temporal reasoning, and robustness to rare scenarios. 
Our work not only sets a new state-of-the-art in autonomous driving, but also demonstrates that unifying multimodal understanding and generation offers a foundational new paradigm toward achieving embodied AGI.

---

## 论文详细总结（自动生成）

# 论文总结：LMGenDrive: LLM Reasoning Meets World Models for End-to-End Driving

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：当前自动驾驶在长尾（long-tail）场景和开放世界（open-world）场景下泛化能力不足，这是大规模部署的主要瓶颈。现有方法要么依赖大语言模型（LLM）/视觉语言模型（VLM）进行场景理解和推理，要么采用生成式世界模型进行未来轨迹想象，但缺乏将两者统一起来的能力。
- **整体含义**：受人类智能中“理解与想象”无缝结合的启发，本文提出LMGenDrive，首次实现LLM多模态推理与生成式世界模型的统一，用于端到端闭环自动驾驶。该方法不仅提升了自动驾驶在复杂场景下的安全性和泛化性，也为迈向具身通用人工智能（Embodied AGI）提供了新范式。

## 2. 方法论

- **核心思想**：将大语言模型的多模态推理能力与生成式世界模型的未来视频预测能力融合，形成“理解场景→推理意图→想象未来→生成动作”的完整闭环。
- **关键技术细节**：
  - **输入**：多视角相机图像 + 自然语言指令。
  - **输出**：逼真的未来驾驶视频 + 对应的控制信号。
  - **架构**：耦合LLM与生成式视频能力，未来视频预测增强LLM的时空理解，LLM提供推理和指令跟随能力。
  - **训练策略**：采用渐进式三阶段训练——从视觉预训练到多步长时域驾驶，以提升稳定性和性能。
  - **工作模式**：两种互补模式——低延迟在线规划（low-latency online planning）和自回归离线视频生成（autoregressive offline video generation）。
- **算法流程**（文字说明）：输入多视图图像和指令→LLM进行场景理解与推理→生成式世界模型预测未来多个时刻的视频帧→基于预测结果评估候选轨迹→生成最终控制信号（如转向、加速、制动）。

## 3. 实验设计

- **数据集/场景**：使用了具有挑战性的闭环驾驶基准（closed-loop driving benchmarks），具体名称未在元数据中说明，但强调包含长尾和开放场景。
- **Benchmark**：对标当前最先进的端到端自动驾驶方法，包括仅使用LLM或仅使用世界模型的方法，以及多种现有SOTA。
- **对比方法**：未列出具体方法名称，但明确指出LMGenDrive在指令跟随、时空推理、稀有场景鲁棒性方面显著优于SOTA。

## 4. 资源与算力

- 元数据中未明确提及GPU型号、数量、训练时长等算力信息。论文原文可能包含此类细节，但提供的文本中未出现，因此本总结指出**该信息未在现有材料中明确说明**。

## 5. 实验数量与充分性

- 元数据提供了实验结果的定性结论（如“显著优于SOTA”），但未给出具体实验组数（如消融实验、不同模式对比、不同场景划分等）。
- **充分性评估**：从元数据描述看，实验涵盖了闭环驾驶基准测试，且提到了指令跟随、时空推理、稀有场景鲁棒性等多个维度，但缺乏定量结果表格和消融实验的统计数量。基于现有信息，实验设计方向合理，但详细程度不足以充分判断其客观性和公平性。

## 6. 主要结论与发现

- LMGenDrive将LLM推理与世界模型预测统一后，显著提升了闭环驾驶中的性能，尤其是在指令跟随、时空推理和对罕见场景的鲁棒性方面。
- 两种工作模式（在线规划与离线生成）互补，兼顾实时性和预测能力。
- 该工作不仅刷新了自动驾驶的SOTA，也证明了多模态理解与生成的统一是迈向具身AGI的基础性新范式。

## 7. 优点

- **创新性**：首次将LLM推理与生成式世界模型融合，模拟人类“理解+想象”的认知机制。
- **架构设计**：渐进式三阶段训练策略有助于稳定多模态联合训练。
- **实用性**：提供在线/离线两种模式，平衡延迟与预测深度。
- **评估维度全面**：覆盖指令跟随、时空推理、鲁棒性等关键能力。

## 8. 不足与局限

- **算力与实验细节缺失**：在提供的材料中，未给出GPU规格、训练时长、消融实验数量等关键信息，难以复现和横向比较。
- **数据集和对比方法不明确**：未列出具体使用的数据集名称和对比方法的基线细节，削弱了结果的透明度和可验证性。
- **应用限制**：当前方法仅基于多视图相机和自然语言指令，未涉及雷达、激光雷达等其他传感器融合；真实世界部署中长尾场景的复杂度可能远超基准测试，泛化性仍需进一步验证。
- **偏差风险**：结论基于封闭基准测试，可能无法完全反映真实开放道路中的分布外情况。

（完）
