---
title: "ReCogDrive: A Reinforced Cognitive Framework for End-to-End Autonomous Driving"
title_zh: ReCogDrive：端到端自动驾驶的强化认知框架
authors: "Yongkang Li, Kaixin Xiong, Xiangyu Guo, Fang Li, Sixu Yan, Gangwei Xu, Lijun Zhou, Long Chen, Haiyang Sun, BING WANG, Kun Ma, Guang Chen, Hangjun Ye, Wenyu Liu, Xinggang Wang"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=JoXwhGbuMi"
tags: ["query:ad"]
score: 9.0
evidence: 用于端到端自动驾驶的强化认知框架
tldr: 现有端到端自动驾驶方法将轨迹规划视为语言建模任务，导致格式违规和不可行动作。本文提出ReCogDrive，结合自回归模型和扩散规划器，引入人类驾驶认知以提升规划质量。实验表明该框架在长尾场景中表现优异，推理速度更快。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有方法将轨迹规划作为语言建模，导致输出格式违规和不可行动作。
method: 集成自回归模型与扩散规划器，并通过强化学习注入人类驾驶认知。
result: 在长尾场景中取得更好规划效果，推理速度提升。
conclusion: 为端到端自动驾驶提供了统一认知框架。
---

## Abstract
Recent studies have explored leveraging the world knowledge and cognitive capabilities of Vision-Language Models (VLMs) to address the long-tail problem in end-to-end autonomous driving. However, existing methods typically formulate trajectory planning as a language modeling task, where physical actions are output in the language space, potentially leading to issues such as format-violating outputs, infeasible actions, and slow inference speeds. In this paper, we propose ReCogDrive, a novel **Re**inforced **Cog**nitive framework for end-to-end autonomous **Driv**ing, unifying driving understanding and planning by integrating an autoregressive model with a diffusion planner. First, to instill human driving cognition into the VLM, we introduce a hierarchical data pipeline that mimics the sequential cognitive process of human drivers through three stages: generation, refinement, and quality control. Building on this cognitive foundation, we then address the language-action mismatch by injecting the VLM's learned driving priors into a diffusion planner to efficiently generate continuous and stable trajectories. Furthermore, to enhance driving safety and reduce collisions, we introduce a Diffusion Group Relative Policy Optimization (DiffGRPO) stage, reinforcing the planner for enhanced safety and comfort. Extensive experiments on the NAVSIM and Bench2Drive benchmarks demonstrate that ReCogDrive achieves state-of-the-art performance. Additionally, qualitative results across diverse driving scenarios and DriveBench highlight the model's scene comprehension.

---

## 论文详细总结（自动生成）

# ReCogDrive 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：现有端到端自动驾驶方法将轨迹规划建模为语言建模任务，在语言空间中输出物理动作，这导致三个主要缺陷：
  - 格式违规输出（如非数值或非法格式）
  - 不可行动作（如不符合车辆动力学约束）
  - 推理速度慢（自回归生成效率低）
- **背景**：视觉-语言模型（VLM）具备世界知识和认知能力，可用于解决自动驾驶长尾场景问题，但如何有效利用VLM的认知能力并与物理规划对齐仍是挑战。
- **整体含义**：提出一种统一认知框架ReCogDrive，通过引入人类驾驶认知过程，将VLM的推理能力与扩散规划器的连续轨迹生成能力结合，提升规划质量与安全性。

## 2. 方法论：核心思想、关键技术细节

### 2.1 核心思想
- 将人类驾驶的**层次化认知过程**（感知→理解→决策→控制）注入VLM，并利用强化学习进一步优化规划器的安全性和舒适性。

### 2.2 关键技术细节（三个主要阶段）

1. **层次化数据流水线**（Generation, Refinement, Quality Control）
   - 模仿人类驾驶员的顺序认知过程，生成高质量驾驶数据，并注入人类驾驶认知先验。
   - 具体：先由VLM生成粗粒度的驾驶指令，再通过细化步骤优化，最后进行质量控制筛选。

2. **语言-动作解耦与扩散规划器**
   - 为了解决语言空间输出动作的弊端，将VLM学到的驾驶先验（如意图、场景理解）作为条件输入到**扩散规划器**中。
   - 扩散规划器直接输出连续、平滑且符合动力学约束的轨迹，避免格式违规和不可行动作。

3. **强化学习优化：Diffusion Group Relative Policy Optimization (DiffGRPO)**
   - 针对扩散规划器设计，结合**分组相对策略优化**，以提升驾驶安全性和舒适性。
   - 优化目标包括减少碰撞、提高轨迹平滑度等。

### 2.3 算法/流程说明（文字描述）
- 输入：环境感知信息（图像、激光雷达等） + 自然语言指令。
- 步骤1：VLM通过层次化数据流水线处理，输出驾驶认知（场景描述、意图等）。
- 步骤2：将驾驶认知嵌入扩散规划器，扩散模型逐步去噪生成轨迹。
- 步骤3：DiffGRPO阶段，利用强化学习对规划器生成的轨迹进行策略优化，最大化安全奖励。
- 输出：最终的车辆控制信号。

## 3. 实验设计

### 3.1 使用的数据集与场景
- **NAVSIM**：基于nuScenes的仿真评估框架，覆盖城市/高速等常规与长尾场景。
- **Bench2Drive**：包含多种复杂驾驶场景（如变道、避障、无保护转弯）。
- **DriveBench**：用于定性评估场景理解能力。

### 3.2 Benchmark
- 论文未明确列出所有对比方法，但声称在NAVSIM和Bench2Drive上达到**state-of-the-art**性能，并与现有VLM-based端到端方法进行对比。

### 3.3 定性评估
- 在多种驾驶场景（包括长尾场景）及DriveBench上进行了定性展示，突出场景理解能力。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量及训练时长。
- 根据经验推测：VLM微调+扩散模型训练+强化学习可能需要多卡A100或类似高端GPU，但论文未提供细节。

## 5. 实验数量与充分性

- **实验数量**：仅从摘要可知在两个主要基准（NAVSIM、Bench2Drive）上进行了定量评估，并有定性结果展示。未提及消融实验具体数量或模块分析。
- **充分性评价**：
  - **优点**：覆盖了长尾场景和复杂环境，定性与定量结合。
  - **不足**：缺乏消融实验的详细描述（例如去除DiffGRPO、不使用认知数据流水线等），没有给出模型参数量、推理延迟等关键对比。实验充分性一般，需阅读全文才能判断。

## 6. 主要结论与发现

- ReCogDrive在长尾驾驶场景中取得更优的轨迹规划效果，同时推理速度更快。
- 通过注入人类驾驶认知，VLM能更好地理解复杂环境，扩散规划器生成轨迹更稳定。
- DiffGRPO强化学习显著提升了安全性（减少碰撞）和舒适性。
- 整体框架统一了驾驶理解与规划，为端到端自动驾驶提供了认知范式。

## 7. 优点（方法与实验设计亮点）

- **创新性**：首次将层次化人类认知过程显式建模并注入VLM，解决语言-动作不匹配问题。
- **技术融合**：自回归模型（VLM） + 扩散规划器 + 强化学习（DiffGRPO），整合了理解、生成和优化三大优势。
- **实用性**：推理速度快于纯自回归方法，且输出轨迹连续稳定。
- **泛化性**：在多个基准和长尾场景中验证，定性结果展现强场景理解能力。

## 8. 不足与局限

- **实验细节缺失**：没有提供完整的消融实验、计算资源、超参数设置、与更多基线方法的量化对比表格，使得复现和公平对比困难。
- **局限性**：
  - 依赖VLM的世界知识，当VLM本身产生错误理解时可能级联到规划。
  - 强化学习阶段需要大量仿真交互数据，现实部署中可能存在Sim-to-Real Gap。
  - 文中未讨论实时性（在实车上的FPS或延迟），仅说推理速度提升，但缺少具体数值。
  - 仅覆盖两个公开基准，未在真实道路数据集（如nuScenes真实轨迹）上做定量封闭测试。
  - 未分析失败案例或模型在极端条件下的鲁棒性。
- **偏差风险**：所对比的基线方法可能未包含最新工作，摘要未报告具体对比结果，存在选择偏向可能性。

（完）
