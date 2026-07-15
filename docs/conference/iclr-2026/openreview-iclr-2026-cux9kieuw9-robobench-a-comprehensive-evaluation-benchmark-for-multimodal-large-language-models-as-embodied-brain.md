---
title: "Robobench: A Comprehensive Evaluation Benchmark For Multimodal Large Language Models as Embodied Brain"
title_zh: RoboBench：多模态大语言模型作为具身大脑的综合评估基准
authors: "Yulin Luo, Chun-Kai Fan, Menghang Dong, Jiayu Shi, Mengdi Zhao, Bo-Wen Zhang, Jiaming Liu, Gaole Dai, Rongyu Zhang, Ruichuan An, Kun Wu, Zhengping Che, Pengwei Wang, Guang Liu, Zhongyuan Wang, Tiejun Huang, Cheng Chi, Shanghang Zhang"
date: 2025-09-15
pdf: "https://openreview.net/pdf?id=CUx9KieuW9"
tags: ["query:ad"]
score: 8.0
evidence: 评估多模态大语言模型作为具身大脑的基准
tldr: 本文针对现有具身智能基准偏重执行成功、对系统2（高层推理）评估不足的问题，提出RoboBench。该基准系统性地评估多模态大语言模型作为具身大脑的能力，涵盖感知、推理、规划等多个维度，并采用更真实的任务场景。实验揭示了现有MLLM在具身认知上的弱点，为构建更强的具身智能系统提供了指导。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有基准对MLLM的具身认知能力评估不全面，任务真实感不足。
method: 设计多维度评估框架，包括感知、推理、规划等，任务更贴近真实场景。
result: 揭示了当前MLLM在具身认知方面的不足，为系统2改进提供方向。
conclusion: RoboBench为评估和提升MLLM的具身智能提供了标准化工具。
---

## Abstract
Building robots that can perceive, reason, and act in dynamic, unstructured environments remains a core challenge. Recent embodied systems often adopt a dual-system paradigm, where System 2 handles high-level reasoning while System 1 executes low-level control. 
Systematic evaluation of System 2 is thus crucial for advancing embodied intelligence.
Yet existing benchmarks emphasize execution success, or when focusing System 2, suffer from incomplete evaluation dimensions and limited task realism, offering only partial assessment of embodied cognition abilities.
To bridge this gap, we introduce RoboBench, the first benchmark that systematically evaluates multimodal large language models (MLLMs) as embodied brains. RoboBench defines five critical dimensions—instruction comprehension, perception reasoning, generalized planning, affordance reasoning, and failure analysis—spanning 15 abilities, 26 tasks, and over 7,000 QA pairs. To ensure realism, we design task settings across diverse embodiments (single-arm, dual-arm, mobile manipulation), objects with rich physical and semantic attributes, multi-view scenes with occlusion and closed-loop feedback, sourced from large-scale real robotic datasets and curated in-house. For planning, RoboBench proposes a DAG-based evaluation framework capturing action–object dependencies and execution-order variations, enabling more faithful assessment of long-horizon reasoning than prior multiple-choice, BLEU, or generic LLM-based metrics.
Experiments on 17 state-of-the-art MLLMs reveal fundamental limitations: difficulties with implicit instruction grounding, spatiotemporal reasoning, long-horizon and cross-scenario planning, fine-grained affordance understanding, and execution failure diagnosis.
RoboBench provides a comprehensive scaffold to quantify embodied cognition, clarify System 2 performance, and guide the development of next-generation MLLMs toward more robust embodied intelligence.

---

## 论文详细总结（自动生成）

# RoboBench：多模态大语言模型作为具身大脑的综合评估基准 - 详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：在动态、非结构化环境中构建能够感知、推理和行动的机器人仍面临挑战。现有具身智能系统常采用双系统范式（System 2高层推理 + System 1低层控制），但对System 2的评估严重不足。
- **现有局限**：已有基准偏重执行成功（即只关注最终任务完成率），即便有少数关注System 2的基准，也存在评估维度不完整、任务真实感有限的问题，仅提供部分具身认知能力的评估。
- **研究动机**：亟需一个系统化、多维度、高真实感的基准来量化评估多模态大语言模型（MLLM）作为具身大脑（System 2）的能力，从而为构建更鲁棒的具身智能系统提供指导。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：提出RoboBench，首个系统评估MLLM作为具身大脑的基准。它定义五个关键认知维度（指令理解、感知推理、泛化规划、可供性推理、失败分析），涵盖15种能力、26个任务、超过7,000个问答对。
- **技术细节**：
  - **任务场景设计**：跨多种具身形态（单臂、双臂、移动操作）、丰富物理和语义属性的物体、多视角场景（含遮挡和闭环反馈），数据来源于大规模真实机器人数据集和内部精心制作。
  - **规划评估框架**：提出基于有向无环图（DAG）的评估框架，捕捉动作-对象依赖关系和执行顺序变化，比传统多项选择、BLEU或基于通用LLM的指标更忠实地评估长时推理。
  - **评估维度**：五个维度对应15种细粒度能力，通过QA对形式测试MLLM的具身认知（非执行成功）。

## 3. 实验设计
- **数据集/场景**：使用大规模真实机器人数据集（如可能来自公开数据集）和内部自建数据，覆盖多种具身形态（单臂、双臂、移动操作）、多视图场景（包含遮挡和闭环反馈）。
- **Benchmark**：RoboBench本身即为提出的基准，包含26个任务、7,000+问答对。
- **对比方法**：实验中评估了17个最先进的多模态大语言模型（MLLMs），包括当前主流模型（文中未列出具体模型名称，但提及state-of-the-art）。

## 4. 资源与算力
- 论文摘要及全文未明确说明使用的GPU型号、数量、训练时长等算力资源。仅提及数据来自大规模真实机器人数据集和内部制作，但未提供计算资源细节。
- **说明**：本文属于评估基准论文，通常不需要大规模训练资源；但若涉及对17个MLLM的推理评估，可能需要一定计算资源，但原文未提及具体硬件信息。

## 5. 实验数量与充分性
- **实验数量**：评估了17个前沿MLLM，覆盖5个维度、15种能力、26个任务、7,000+问答对。未提及其他消融实验或额外对比（如不同规模模型、训练数据变化等）。
- **充分性**：实验设计较为全面，涵盖了多个认知维度，且任务数量较多。但缺少对基准本身（如数据偏差、任务难度均衡性）的消融分析。整体而言，作为首次系统性评估，实验规模较充分，但公平性依赖于模型公开版本和固定提示设置（未详细说明）。

## 6. 主要结论与发现
- 当前最先进的MLLM存在以下根本性局限：
  - 难以处理隐式指令基础（implicit instruction grounding）；
  - 时空推理能力不足；
  - 长时规划与跨场景规划表现差；
  - 细粒度可供性理解（fine-grained affordance understanding）弱；
  - 执行失败诊断（execution failure diagnosis）能力欠缺。
- RoboBench为量化具身认知、厘清System 2性能、指导下一代MLLM发展提供了标准化工具。

## 7. 优点
- **系统性与多维度**：首次系统定义并评估MLLM作为具身大脑的五个关键认知维度，覆盖15种能力，远超以往基准。
- **高真实性**：任务场景基于真实机器人数据集和多视角设置，包含遮挡与闭环反馈，更贴近实际应用。
- **创新评估指标**：提出基于DAG的规划评估框架，能更好捕获动作依赖和顺序变化，避免传统指标的局限性。
- **大规模测试**：评估了17个模型，提供全面横向对比，为社区提供参考基准。

## 8. 不足与局限
- **实验覆盖**：仅评估了17个模型，可能未涵盖最新开源模型或闭源API模型（如GPT-4V等），更新不及时。
- **偏差风险**：数据来源虽为真实数据集，但内部制作数据可能存在特定场景偏差；多视图设置可能未覆盖所有真实世界挑战（如动态光照、传感器噪声）。
- **应用限制**：基准仅关注System 2（高层推理），未与System 1（低层控制）联动评估，无法完整反映整体具身智能系统的性能；任务为QA形式，未涉及实际机器人执行反馈。
- **计算资源未报告**：缺乏对评估计算成本的透明说明，可能影响复现和公平对比。
- **未提供消融研究**：未分析不同任务难度、不同模态输入对结果的影响，基准的鲁棒性有待进一步验证。

（完）
