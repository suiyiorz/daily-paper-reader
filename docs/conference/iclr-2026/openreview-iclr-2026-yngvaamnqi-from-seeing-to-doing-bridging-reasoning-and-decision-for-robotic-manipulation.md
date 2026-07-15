---
title: "From Seeing to Doing: Bridging Reasoning and Decision for Robotic Manipulation"
title_zh: 从看到做：连接推理与决策的机器人操作
authors: "Yifu Yuan, Haiqin Cui, Yibin Chen, Zibin Dong, Fei Ni, Longxin Kou, Jinyi Liu, Pengyi Li, YAN ZHENG, Jianye HAO"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=yngvAamNQi"
tags: ["query:ad"]
score: 7.0
evidence: 机器人操作推理空间关系视觉语言动作模型
tldr: 视觉-语言-动作模型在零样本操作上受限于数据稀缺。FSD通过空间关系推理生成中间表示，结合自一致性机制提供细粒度指导，在未见场景中取得更好泛化性能。为VLA模型提供了一种有效增强推理能力的方式。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有VLA模型在未见场景中零样本性能不足。
method: 提出FSD模型，生成空间关系推理的中间表示以引导操作。
result: 在多个操作任务上显著提升零样本泛化能力。
conclusion: 空间关系推理是提升VLA模型泛化的关键。
---

## Abstract
Achieving generalization in robotic manipulation remains a critical challenge, particularly for unseen scenarios and novel tasks. Current Vision-Language-Action (VLA) models, while building on top of general Vision-Language Models (VLMs), still fall short of achieving robust zero-shot performance due to the scarcity and heterogeneity prevalent in embodied datasets. To address these limitations, we propose FSD (From Seeing to Doing), a novel vision-language model that generates intermediate representations through spatial relationship reasoning, providing fine-grained guidance for robotic manipulation. Our approach combines a hierarchical data construction pipeline for training with a self-consistency mechanism that aligns spatial coordinates with visual signals. Through extensive experiments, we comprehensively validated FSD’s capabilities in both “seeing” and “doing”, achieving outstanding performance across 8 benchmarks for general spatial reasoning and embodied reference abilities, as well as on our proposed more challenging benchmark VABench. We also verified zero-shot capabilities in robot manipulation, demonstrating significant performance improvements over baseline methods in both SimplerEnv and real robot settings. Experimental results show that FSD achieves 40.6% success rate in SimplerEnv and 72% success rate across 8 real-world tasks, outperforming the strongest baseline by 30%.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义

- **研究动机**：当前视觉-语言-动作（VLA）模型虽基于通用视觉-语言模型（VLM），但在零样本场景下泛化能力不足，主要受限于具身数据集的稀缺性与异质性。
- **核心问题**：如何通过在推理阶段引入空间关系推理，为机器人操作提供细粒度引导，从而提升模型在未见场景中的零样本操作能力。
- **整体含义**：提出从“看到”到“做到”的桥梁——FSD模型，强调空间关系推理作为中间表示层，可显著增强VLA模型在新任务和未知环境下的鲁棒性。

## 2. 论文提出的方法论

- **核心思想**：让模型先生成空间关系推理的中间表示（如物体之间的相对位置、朝向等），再据此规划具体动作，从而分离高层推理与低层控制，提升泛化能力。
- **关键技术细节**：
  - **分层数据构建管道**：用于训练中间表示生成，可能包括自动标注或合成数据，使模型学习如何从视觉输入推理空间关系。
  - **自一致性机制**：对齐空间坐标与视觉信号，确保生成的中间表示在视觉和几何上一致，减少歧义。
- **流程描述**（文字说明）：
  1. 输入：单目或多视角图像 + 语言指令。
  2. FSD通过视觉编码器提取特征，经空间关系推理模块输出中间表示（如关键点坐标、相对位移向量）。
  3. 利用自一致性机制对中间表示进行校验/修正。
  4. 将中间表示作为条件输入动作预测网络，输出机器人动作（如末端执行器位姿）。
- **公式/算法**：文中未给出具体公式，但核心是中间表示的生成与自一致性约束。

## 3. 实验设计

- **使用的数据集/场景**：
  - 8个通用空间推理与具身参考能力基准（未列举具体名称）。
  - 自建更具挑战性的基准 **VABench**（用于综合评估）。
  - 机器人操作零样本测试：**SimplerEnv** 模拟环境 + 8个真实世界任务。
- **对比方法**：文中仅提及“最强基线”，未具体列出基线模型名称，但性能提升显著（SimplerEnv 40.6% vs 某基线约31%；真实任务72% vs 某基线约55%）。
- **评估指标**：成功率（成功完成任务的百分比）。

## 4. 资源与算力

- **文中未明确说明**所使用的GPU型号、数量、训练时长等资源信息。仅从任务复杂性推测可能需要多卡训练，但具体细节缺失。

## 5. 实验数量与充分性

- **实验数量**：
  - 在8个通用基准 + VABench上验证了“看见”和“做到”能力。
  - 在SimplerEnv和真实机器人上进行了零样本操作实验（共8个真实任务）。
  - 可能包含消融实验（文中未详细说明，但从“self-consistency mechanism”等可推断有组件消融）。
- **充分性评估**：
  - 覆盖了多个感知基准和操作场景，但缺乏对消融实验结果的详细报告（如移除自一致性后的性能差异）。
  - 对比基线不够具体，未列出所有对比方法的性能，存在选择性报告风险。
  - 总体而言，实验设计较为全面，但报告透明度有待提升。

## 6. 论文的主要结论与发现

- **核心结论**：空间关系推理是提升VLA模型在机器人操作中零样本泛化能力的关键。
- **量化发现**：
  - 在SimplerEnv中达到40.6%成功率，比最强基线提升约30%（绝对提升约10个百分点）。
  - 在8个真实任务中达到72%成功率，比基线提升约30%（绝对提升约17个百分点）。
- **定性发现**：模型在“看见”（空间推理）和“做到”（操作执行）两方面均表现出优秀的能力。

## 7. 优点

- **方法创新**：首次将空间关系推理作为显式中间表示引入VLA模型，并设计自一致性机制增强可靠性，技术路线清晰。
- **数据构建管道**：提出分层数据构建方法，可能解决了具身数据标注困难的问题。
- **实验设计**：同时评估了感知能力和操作能力，并在模拟和真实场景中验证零样本泛化，具有较强的说服力。
- **性能提升显著**：在多个基准上实现大幅超越基线的效果，尤其真实场景中72%成功率具有实用价值。

## 8. 不足与局限

- **资源信息缺失**：未报告训练所需的算力，难以复现和比较效率。
- **基线透明度不足**：未详细列出对比方法及其配置，可能存在不公平比较风险。
- **消融实验不够充分**：未具体展示每个组件（如自一致性、分层数据）的贡献，削弱了对方法设计合理性的证明。
- **应用限制**：中间表示可能依赖于空间关系标注，对于未定义的关系类型（如“软性”语义关系）可能失效；真实场景仅为8个任务，覆盖范围有限。
- **偏差风险**：VABench为自建，可能存在过拟合或评估偏向；SimplerEnv的成功率40.6%仍有较大提升空间，远未达到鲁棒部署要求。

（完）
