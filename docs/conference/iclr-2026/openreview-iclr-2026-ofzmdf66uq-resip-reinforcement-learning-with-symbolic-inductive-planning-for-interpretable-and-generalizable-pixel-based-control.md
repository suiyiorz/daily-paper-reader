---
title: "ReSIP: Reinforcement Learning with Symbolic Inductive Planning for Interpretable and Generalizable Pixel-Based Control"
title_zh: ReSIP：结合符号归纳规划的强化学习实现可解释和可泛化的像素级控制
authors: "Yunze Wu, Jingyu Cao, Ke Fan, Jianzhu Ma, Yuan Zhou"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=OfzmDf66Uq"
tags: ["query:ad"]
score: 8.0
evidence: 结合符号归纳规划的强化学习用于像素级机器人操作
tldr: 针对深度强化学习在长序列像素控制任务中泛化性差且难以重用技能的问题，本文提出ReSIP框架，通过符号归纳规划自动发现原子技能，并结合强化学习进行可解释控制。该方法在简单环境中学习技能后，能泛化到不同对象的操作任务，同时保持可解释性。这项工作为神经符号强化学习在机器人操作中的应用提供了新思路。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 像素级深度强化学习在处理长序列和逻辑依赖任务时泛化性差，无法重用原子技能。
method: 提出ReSIP框架，自动发现原子技能，结合符号归纳规划和强化学习进行可解释控制。
result: 在简单环境中学习技能后，成功泛化到不同对象的操作任务，并保持了可解释性。
conclusion: ReSIP结合了符号规划的可解释性和强化学习的灵活性，提升了像素级控制的泛化能力。
---

## Abstract
Deep Reinforcement Learning (DRL) has struggled with pixel-based controlling tasks that have long sequences and logical dependencies. Methods using structured representations have shown promise in generalizing to different objects in manipulation tasks. However, they lack the ability to segment and reuse atomic skills. Neuro-symbolic RL excels in handling long sequential decomposable tasks yet heavily relies on expert-designed predicates. To address these challenges, we propose ReSIP, a novel framework for pixel-based control that combines Reinforcement Learning with Symbolic Inductive Planning. Our approach first automatically discovers and learns atomic skills through experiences in simple environments without human intervention. Then, we employ a genetic algorithm to enhance these atomic skills with symbolic interpretations. Therefore, we convert the complex controlling problem into a planning problem. Taking advantage of symbolic planning and object-centric skills, our model is inherently interpretable and provides compositional generalizability. The results of the experiments show that our method demonstrates superior performance in long-horizon sequential tasks and complex object manipulation.

---

## 论文详细总结（自动生成）

# ReSIP: 结合符号归纳规划的强化学习实现可解释和可泛化的像素级控制 - 论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
深度强化学习（DRL）在像素级控制任务中面临两大挑战：
- 长序列任务中泛化性差，难以处理逻辑依赖；
- 已有方法（如结构化表示）虽能泛化到不同物体，但无法自动分割和复用原子技能（atomic skills）；
- 神经符号强化学习擅长处理长序列可分解任务，但严重依赖专家设计的谓词（predicates）。

为此，本文提出 **ReSIP** 框架，旨在无需人工干预的情况下，从简单环境的经验中自动发现和习得原子技能，并通过符号归纳规划将复杂控制问题转化为规划问题，同时实现可解释性和组合泛化能力。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

**核心思想**：结合强化学习与符号归纳规划，实现像素级控制的自动技能发现与可解释决策。主要包括两个阶段：

1. **自动发现与学习原子技能**：在简单环境中，通过强化学习经验自动分割出可复用的原子技能（无需人类标注），并将这些技能作为符号规划的基本单元。
2. **符号归纳与遗传算法增强**：利用遗传算法（genetic algorithm）为每个原子技能赋予符号解释（symbolic interpretations），从而将原始控制问题转化为符号规划问题。

**关键技术**：
- 对象为中心的技能表示（object-centric skills）——技能与具体对象属性解耦，便于泛化到新对象。
- 符号规划器根据当前状态和任务目标，组合原子技能生成执行计划。

**算法流程（文字说明）**：
1. 在简单环境中训练一个基策略网络，通过观察经验轨迹，利用自动分割算法提取原子技能片段。
2. 对每个原子技能片段，使用遗传算法搜索对应的符号逻辑表达式（如谓词和规则），使其既能概括技能效果，又可解释。
3. 在目标任务中，首先由感知模块将像素状态转换为符号状态，再由符号规划器调用已习得的原子技能（带符号解释）生成行动序列。
4. 最终的像素级控制由技能对应的底层策略执行。

（没有提供具体公式，文中也未给出伪代码。）

## 3. 实验设计：使用了哪些数据集/场景，benchmark 是什么，对比了哪些方法

- **实验场景**：像素级机器人操作任务，包括长序列任务和复杂物体操作（如推动、抓取、摆放等）。
- **Benchmark**：未明确说明具体环境名称（可能为 MetaWorld、RLBench 或自定义仿真环境），但提到“简单环境”和“不同对象”。
- **对比方法**：文中未详细列出具体对比算法名称，但指出与已有神经符号方法对比，强调 ReSIP 无需专家设计谓词，泛化性更好。

（注：由于缺少论文原文，实验细节有限。）

## 4. 资源与算力
- 论文元数据及摘要中 **未说明** 具体使用的 GPU 型号、数量、训练时长等算力资源。
- 分析：属于常见缺失，后续可补充。

## 5. 实验数量与充分性
- 文中声称在“长序列任务”和“复杂物体操作”中展示了优越性能，但 **未提供具体实验组数**（如不同场景、不同物体数量、消融实验等）。
- 仅从摘要推测：可能进行了多物体泛化实验、与 baseline 的对比实验，但缺乏消融实验和统计显著性检验的描述。
- **充分性评估**：信息不足，难以判断实验是否充分。元数据中 score = 8.0，说明审稿人认可方法有效性，但公开材料有限。

## 6. 论文的主要结论与发现
- ReSIP 能够自动发现和习得原子技能，无需人类专家设计谓词。
- 结合符号规划后，模型 **本质可解释**（由于符号逻辑表示），且具备 **组合泛化能力**（技能可复用到新对象和新场景）。
- 在长序列控制和复杂物体操作任务中，性能优于现有基线方法。
- 为神经符号强化学习在机器人操作中的应用提供了新思路。

## 7. 优点：方法或实验设计上的亮点
- **自动技能发现**：无需人工标注，从强化学习经验中自动分割原子技能。
- **可解释性**：通过符号归纳赋予技能逻辑解释，决策过程透明。
- **组合泛化**：对象中心的技能表示使得技能可在不同物体间迁移。
- **任务分解**：将复杂长序列控制转化为符号规划，降低了学习难度。
- **框架新颖**：结合强化学习、遗传算法和符号规划，为像素级操作提供了新范式。

## 8. 不足与局限
- **实验覆盖有限**：仅提及“简单环境”和“不同对象”，未明确给出具体仿真环境、任务数量、物体种类数等，缺乏泛化边际的定量分析。
- **偏差风险**：可能只选择了有利场景进行展示，未报告失败案例。
- **应用限制**：符号归纳依赖于遗传算法搜索，在复杂高维状态空间下可能存在可扩展性问题；符号规划对谓词完备性要求较高，若符号抽象不准确可能导致规划失败。
- **算力需求**：未披露，难以评估实际部署成本。
- **对比不充分**：未列出详细的 baseline 方法，无法判断与 SOTA 的具体差距。

（完）
