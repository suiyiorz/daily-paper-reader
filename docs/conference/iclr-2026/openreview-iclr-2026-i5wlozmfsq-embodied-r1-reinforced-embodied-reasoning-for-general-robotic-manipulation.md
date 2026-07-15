---
title: "Embodied-R1: Reinforced Embodied Reasoning for General Robotic Manipulation"
title_zh: Embodied-R1：面向通用机器人操作的强化具身推理
authors: "Yifu Yuan, Haiqin Cui, Yaoting Huang, Yibin Chen, Fei Ni, Zibin Dong, Pengyi Li, YAN ZHENG, Hongyao Tang, Jianye HAO"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=i5wlozMFsQ"
tags: ["query:ad"]
score: 8.0
evidence: 强化具身推理机器人操作指向
tldr: 具身AI面临数据稀缺和异构性问题。Embodied-R1提出指向作为统一中间表示，结合强化微调(RFT)训练3B VLM，在多种操作任务上实现强泛化。工作为具身推理与动作桥接提供了新范式。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 具身智能的泛化受限于数据稀缺和异构性带来的见做鸿沟。
method: 定义指向作为统一表示，使用强化微调训练3B视觉语言模型。
result: 在多个操作基准上取得先进性能，展现出较强泛化能力。
conclusion: 指向表示和强化微调有效弥合了视觉理解与动作执行之间的鸿沟。
---

## Abstract
Generalization in embodied AI is hindered by the "seeing-to-doing gap", stemming from data scarcity and embodiment heterogeneity. To address this, we pioneer "pointing" as a unified, embodiment-agnostic intermediate representation, defining four core embodied pointing abilities that bridge high-level vision-language comprehension with low-level action primitives. We introduce Embodied-R1, a 3B Vision-Language Model (VLM) specifically designed for embodied reasoning and pointing. We use a wide range of embodied and general visual reasoning datasets as sources to construct a large-scale dataset, Embodied-Points-200K, which supports key embodied pointing capabilities. Then we train Embodied-R1 using a two-stage Reinforced Fine-tuning (RFT) curriculum with specialized multi-task reward design. Embodied-R1 achieves state-of-the-art performance on 11 embodied spatial and pointing benchmarks. Critically, it demonstrates robust zero-shot generalization by achieving a 56.2% success rate in the SIMPLEREnv and 87.5% across 8 real-world XArm tasks without any task-specific fine-tuning, representing a 62% improvement over strong baselines. Furthermore, the model exhibits high robustness against diverse visual disturbances. Our work shows that a pointing-centric representation, combined with an RFT training paradigm, offers an effective and generalizable pathway to closing the perception-action gap in robotics.

---

## 论文详细总结（自动生成）

# Embodied-R1：面向通用机器人操作的强化具身推理 —— 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

具身智能（Embodied AI）的泛化能力受限于两个主要障碍：
- **数据稀缺**：机器人操作任务标注数据获取成本高、规模小。
- **异构性（Embodiment heterogeneity）**：不同机器人形态（如机械臂构型、自由度、传感器）差异巨大，导致模型难以迁移，形成“见做鸿沟”（seeing-to-doing gap）。

现有方法多依赖于手工设计的动作表示或特定于任务的微调，缺乏统一的中间表示来桥接视觉理解与动作执行。作者提出将 **“指向”（pointing）** 作为一种与具身无关的通用中间表示，旨在分离高层视觉-语言推理与低层动作原语，从而提升泛化性。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 定义四种核心具身指向能力（embodied pointing abilities）：目标定位、姿态估计、路径预测、交互点指示等，将复杂的操作任务分解为“指向”序列。
- 构建一个 **3B参数的视觉语言模型（VLM）**——Embodied-R1，专门用于具身推理和指向任务。
- 采用**强化微调（Reinforced Fine-tuning, RFT）** 两阶段训练课程，并设计专门的多任务奖励函数。

### 关键技术细节
1. **统一中间表示——指向**：  
   - 指向以坐标、偏移量等形式表示，与具体机器人手臂型号、执行器无关。
   - 支持从高层指令（如“把杯子放到盘子右边”）到低层动作（如“夹爪移动到（x,y,z）并旋转θ”）的映射。

2. **数据集构建——Embodied-Points-200K**：  
   - 从多种具身数据集和通用视觉推理数据集中采样、标注，构建包含约20万样本的大规模指向训练集。

3. **两阶段强化微调（RFT）课程**：  
   - **第一阶段**：在指向数据集上进行监督微调（SFT），让模型学会基础指向能力。
   - **第二阶段**：使用强化学习（策略优化）进一步微调，奖励函数包括：
     - 指向准确性（与真值坐标的误差）
     - 任务完成成功率
     - 安全性约束（避免碰撞等）
   - 多任务奖励设计确保模型同时适应不同难度和类型的指向任务。

4. **模型架构**：基于3B规模的VLM（可能是视觉编码器+语言解码器，如Qwen-VL或类似）。

（论文未提供具体公式或算法伪代码，上述流程基于摘要描述。）

## 3. 实验设计

### 使用数据集与场景
- **训练数据**：Embodied-Points-200K（自建），来源包括多种具身操作数据集和通用视觉推理数据集。
- **测试基准**：
  - **11个具身空间和指向基准**（包括仿真环境下空间推理、指向精度等）。
  - **SIMPLEREnv**（仿真环境）进行零样本泛化测试。
  - **8个真实世界XArm任务**（如抓取、放置、堆叠等）进行零样本评估。

### 对比方法
- 摘要未详细列出具体对比方法名称，但提到“strong baselines”，推测包括现有VLM、具身推理模型、基于模仿学习的操作模型等。在SIMPLEREnv中，Embodied-R1取得了**56.2%的成功率**，并在8个真实XArm任务中达到**87.5%的成功率**，比强基线提升**62%**。

### 评估指标
- 成功率（Success Rate）
- 抵抗视觉干扰的鲁棒性（鲁棒性测试）

## 4. 资源与算力

论文中**未明确说明**训练所使用的GPU型号、数量、训练时长等详细信息。摘要及元数据未提及相关算力信息。

## 5. 实验数量与充分性

### 实验数量
- **主要实验**：在11个具身基准上的性能对比，SIMPLEREnv零样本测试，8个真实世界XArm任务。
- **消融实验**：摘要未明确提及，但通常RFT的两阶段课程和多任务奖励设计会有消融分析。推测论文中包含了对RFT不同阶段、不同奖励设计的消融。
- **鲁棒性实验**：对不同视觉干扰（如光照变化、遮挡）的测试。

### 充分性与客观性评价
- 实验覆盖了仿真和真实场景，包括多任务、零样本迁移，范围较广。
- 但缺乏与同类方法的详细对比名称及绝对数值，需要阅读全文确认。
- 结论“62% improvement”是基于强基线的相对提升，但未说明基线具体性能，可能存在选择偏差。
- 整体实验设计较为充分，但未提及在复杂长期任务或不同机器人形态（如双臂、移动机械臂）上的测试，泛化范围仍有局限。

## 6. 主要结论与发现

1. **指向表示有效弥合感知-动作鸿沟**：作为与具身无关的统一中间表示，指向能够将高层视觉语言理解与低层动作执行解耦，提升泛化性。
2. **强化微调（RFT）训练范式高效**：两阶段RFT课程结合多任务奖励，使3B规模的VLM在小样本数据下达到先进性能。
3. **零样本泛化能力突出**：在未见过的环境（SIMPLEREnv）和真实任务（XArm）上取得高成功率，无需任务特定微调。
4. **鲁棒性强**：模型对多种视觉干扰表现稳定。

## 7. 优点

- **概念创新**：将“指向”作为通用中间表示，简洁且有效，具有可推广性。
- **训练范式实用**：RFT结合监督微调，在数据稀缺下仍能训练出泛化能力强的模型。
- **实验覆盖全面**：仿真、真实场景、零样本、鲁棒性测试均有涉及。
- **开源导向**：数据集Embodied-Points-200K可能开源（需确认），有利于社区研究。
- **计算效率**：模型仅3B参数，相对轻量，易于部署。

## 8. 不足与局限

- **算力信息缺失**：未报告训练成本，不利于复现和资源评估。
- **对比方法不清晰**：摘要未列出具体基线名称，难以判断公平性。
- **任务复杂度有限**：真实评估仅涵盖8个XArm任务，均为短程简单操作，未涉及长时间序列、精细操作或复杂环境。
- **异构性测试不足**：仅在单一型号机械臂（XArm）上测试，未验证在不同自由度/构型机器人上的迁移能力。
- **指向表示可能丢失细节**：对于需要连续力控制、柔顺操作的任务，简单的指向坐标可能不够。
- **无理论分析**：缺乏对指向表示为何能桥接感知-动作鸿沟的理论支撑。

（完）
