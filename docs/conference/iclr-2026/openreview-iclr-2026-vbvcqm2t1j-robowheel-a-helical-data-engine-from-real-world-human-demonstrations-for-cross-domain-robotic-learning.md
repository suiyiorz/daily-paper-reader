---
title: "ROBOWHEEL: A HELICAL DATA ENGINE FROM REAL-WORLD HUMAN DEMONSTRATIONS FOR CROSS-DOMAIN ROBOTIC LEARNING"
title_zh: ROBOWHEEL：从真实人类演示到跨域机器人学习的螺旋数据引擎
authors: "Yuhong Zhang, Zihan Gao, Shengpeng Li, Ling-Hao Chen, Kaisheng Liu, Runqing Cheng, Xiao Lin, Junjia Liu, Zhuoheng Li, Jingyi Feng, Ziyan He, Jintian Lin, Zheyan Huang, Zhifang Liu, Haoqian Wang"
date: 2025-09-02
pdf: "https://openreview.net/pdf?id=VBVCqm2t1J"
tags: ["query:ad"]
score: 8.0
evidence: 将人类手物交互视频转化为跨形态机器人学习监督
tldr: 本文针对机器人学习依赖昂贵遥操作演示的问题，提出ROBOWHEEL螺旋数据引擎。它从自然手物交互视频中，通过强化学习优化物理合理性，将重建的轨迹重定向到不同机器人形态（机械臂、灵巧手、人形机器人），生成可执行动作。结合仿真域随机化，该方法大幅扩展了机器人学习的数据来源，降低了人类演示的采集成本。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 机器人学习受限于昂贵遥操作演示，人类视频可扩展但存在形态差异。
method: 从单目视频重建手物交互并经过RL优化物理合理性，再重定向到多种机器人形态。
result: 成功将真实世界HOI视频转化为多种机器人形态的可执行动作与 rollout。
conclusion: ROBOWHEEL有效降低了机器人学习的数据获取门槛，实现跨形态迁移。
---

## Abstract
We introduce robowheel, a helical data engine that converts in-the-wild human hand–object interaction (HOI) videos into training-ready supervision for cross-morphology robotic learning. From monocular RGB/RGB-D inputs, we perform high-precision HOI reconstruction and enforce physical plausibility via a reinforcement learning optimizer that refines hand–object relative poses under contact and penetration constraints. The reconstructed, contact-rich trajectories are then retargetted to cross-domain embodiments, robot arms with simple end-effectors, dexterous hands, and humanoids, yielding executable actions and rollouts. To scale coverage, we build a simulation-augmented framework on Isaac Sim with diverse domain randomization (body variants, trajectories, object replacement, background changes, hand motion mirroring), which expands observations and labels while preserving contact semantics. This process forms an end-to-end pipeline from video → reconstruction → retargeting → augmentation → data acquisition, closing the loop for iterative policy improvement. Across vision-language-action and imitation-learning settings, \nbname-generated data provides reliable supervision and consistently improves task performance over baselines, enabling direct use of Internet HOI videos (hand-only or upper-body) as labels for scenario-specific training. We further assemble a large-scale multimodal dataset combining multi-camera captures, monocular videos, and public HOI corpora, and demonstrate transfer on dexterous-hand and humanoid platforms.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文元数据及摘要内容，生成的中文结构化总结。

---

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：机器人学习（尤其是模仿学习）通常依赖于昂贵的遥操作演示数据，这严重限制了数据规模和形态多样性。人类日常的手物交互（Hand-Object Interaction, HOI）视频（如互联网视频）虽然容易获取，但将其中蕴含的接触语义和动作直接迁移到不同形态的机器人（如机械臂、灵巧手、人形机器人）上，存在巨大的**形态差异**和**物理不合理性**问题。
- **整体含义**：本文提出一种螺旋式数据引擎 **ROBOWHEEL**，旨在打通从“无约束的人类HOI视频”到“跨形态机器人可执行动作”的自动化数据生成链路，从而大幅降低机器人学习对昂贵遥操作数据的依赖，为大规模、跨场景的机器人策略训练提供一种可持续的数据供给方案。

### 2. 论文提出的方法论：核心思想、关键技术细节、算法流程

- **核心思想**：通过“重建→优化→重定向→增强”的闭环流程，将无约束的人类手物交互视频转化为物理合理、形态适配的机器人监督信号，并利用仿真域随机化实现数据规模扩展，形成迭代的数据引擎。
- **关键技术细节**：
  - **高精度HOI重建**：从单目RGB/RGB-D输入中重建人手和物体的三维姿态与形状。
  - **RL物理合理性优化**：采用强化学习（RL）优化器，在接触和穿透约束下优化手-物相对位姿，确保重建轨迹在物理上合理（无穿透、接触力合理）。
  - **跨形态重定向**：将优化后的接触丰富轨迹重定向到不同机器人本体（机械臂+简单末端执行器、灵巧手、人形机器人），生成可直接执行的关节动作序列和仿真 rollout 数据。
  - **仿真增强框架**：基于 Isaac Sim 构建，包含多种域随机化（本体变体、轨迹变异、物体替换、背景变化、手部运动镜像），在保留接触语义的同时大幅扩展观测和标签多样性。
- **算法流程（文字说明）**：
  ```
  视频 → HOI重建 → RL优化 → 跨形态重定向 → 仿真增强 → 数据获取（动作+rollout） → 用于策略训练（VLA/模仿学习） → 策略评估 -> 反馈优化（形成闭环）
  ```

### 3. 实验设计

- **使用数据集/场景**：
  - 多相机捕捉数据（内部采集）
  - 单目视频（内部采集）
  - 公开HOI语料库（如互联网手物交互视频）
- **benchmark**：未在摘要中明确列出标准 benchmark，但实验涵盖了**视觉-语言-动作（VLA）模型**和**传统模仿学习**两种主流设置。
- **对比方法**：未在摘要中列出具体对比方法名称，但指出ROBOWHEEL生成的数据相较于基线方法能“持续改进任务性能”。

### 4. 资源与算力

- 论文摘要及元数据中**未明确说明**具体使用的GPU型号、数量及训练时长。仅提及仿真基于Isaac Sim构建，推测需要一定GPU资源，但无定量描述。

### 5. 实验数量与充分性

- **实验数量**：摘要未给出具体实验个数，但提到了：
  - 在VLA和模仿学习两种设定下均有验证。
  - 在灵巧手和人形机器人平台上进行了迁移演示。
  - 构建了大规模多模态数据集。
- **充分性判断**：由于缺乏消融实验、详细对比表格和统计显著性分析，仅从摘要看实验**不够充分**。例如未报告与不使用HOI数据、直接使用未优化数据、或其他数据引擎的对比结果；也未进行跨形态迁移的成功率定量分析。但实验覆盖了多个形态和多种任务类型，初步显示了可行性。

### 6. 论文的主要结论与发现

- ROBOWHEEL能够成功将真实世界的HOI视频转化为多种机器人形态的可执行动作和仿真 rollout。
- 该方法生成的数据在VLA和模仿学习任务中提供了可靠的监督，并一致性地提升了任务性能。
- 实现了对Internet HOI视频（仅手部或上半身）的直接利用，可作为场景特定训练标签。
- 有效降低了机器人学习的数据获取门槛，实现了跨形态迁移。

### 7. 优点

- **创新性突出**：首次系统性地提出从无约束HOI视频到跨形态机器人数据的自动化引擎，将数据源从昂贵的遥操作扩展到海量互联网视频。
- **物理合理性保障**：通过RL优化解决重建中常见的穿透和接触不合理问题，提升数据质量。
- **多形态通用**：支持机械臂、灵巧手、人形机器人等多种本体，实用性高。
- **数据增强闭环**：仿真域随机化保证了数据多样性和场景覆盖，且形成迭代反馈回路，支持持续改进。

### 8. 不足与局限

- **实验覆盖不透明**：摘要中严重缺乏细节，如具体任务名称、成功率、消融实验、与SOTA数据引擎的量化对比。
- **算力和资源未报告**：无法评估该方法在实际部署时的计算成本。
- **可能偏差风险**：依赖单目RGB-D重建的精度，在快速运动、严重遮挡等野外场景下质量可能下降；RL优化依赖于物理仿真器的真实度，仿真到现实的迁移仍未验证。
- **形态重定向的局限性**：人类手部自由度与机器人机械臂/灵巧手差异较大，重定向后动作的自然性和保真度可能受限，尤其涉及非拟人形态（如平行夹爪）时需额外映射。
- **应用限制**：目前主要面向任务型操作，对于需要精细力控或柔软物体交互的任务，仅靠视觉重建和RL优化可能不足。

（完）
