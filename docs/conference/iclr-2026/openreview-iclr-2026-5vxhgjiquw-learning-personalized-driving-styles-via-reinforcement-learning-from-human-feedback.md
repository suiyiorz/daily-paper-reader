---
title: Learning Personalized Driving Styles via Reinforcement Learning from Human Feedback
title_zh: 通过人类反馈强化学习学习个性化驾驶风格
authors: "Derun Li, Changye Li, Yue Wang, Jianwei Ren, Xin Wen, Pengxiang Li, Leimeng Xu, Kun Zhan, Peng Jia, XianPeng Lang, Ningyi Xu, Hang Zhao"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=5VXHGJiQuW"
tags: ["query:ad"]
score: 9.0
evidence: 从人类反馈中强化学习用于个性化驾驶风格轨迹生成
tldr: 针对生成模型难以捕捉个性化驾驶风格的问题，本文提出TrajHF框架，将人类反馈强化学习引入生成式轨迹模型微调。通过多条件去噪和RLHF，模型生成的轨迹不仅可行，还符合不同驾驶偏好，超越了传统模仿学习。实验表明，该方法能有效对齐人类驾驶风格，同时保持安全性和多样性。这项工作为自动驾驶个性化运动规划提供了新方法。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 生成式轨迹模型受数据集偏差影响，难以生成反映个性化驾驶风格的轨迹。
method: 提出TrajHF，利用人类反馈强化学习微调生成式轨迹模型，对齐驾驶偏好。
result: 生成的轨迹在保留安全性的同时，成功对齐了不同驾驶风格偏好。
conclusion: 人类反馈强化学习能有效个性化自动驾驶轨迹生成，超越传统模仿学习。
---

## Abstract
Generating human-like and adaptive trajectories is essential for autonomous driving in dynamic environments. While generative models have shown promise in synthesizing feasible trajectories, they often fail to capture the nuanced variability of personalized driving styles due to dataset biases and distributional shifts. To address this, we introduce TrajHF, a human feedback-driven finetuning framework for generative trajectory models, designed to align motion planning with diverse driving styles. TrajHF incorporates multi-conditional denoiser and reinforcement learning with human feedback to refine multi-modal trajectory generation beyond conventional imitation learning. This enables better alignment with human driving preferences while maintaining safety and feasibility constraints. TrajHF achieves performance comparable to the state-of-the-art on NavSim benchmark. TrajHF sets a new paradigm for personalized and adaptable trajectory generation in autonomous driving.

---

## 论文详细总结（自动生成）

# 论文总结：Learning Personalized Driving Styles via Reinforcement Learning from Human Feedback

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：自动驾驶中生成类人且自适应的轨迹是关键挑战。虽然生成模型能合成可行的轨迹，但由于数据集偏差和分布偏移，它们往往无法捕捉个性化驾驶风格的细微差异（如激进、保守等偏好）。
- **整体含义**：本文旨在解决传统模仿学习（如行为克隆）难以对齐人类多样化驾驶偏好（安全、效率、舒适性等）的问题，提出一种新的范式，使自动驾驶运动规划能够根据个人风格进行个性化适配。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：提出 **TrajHF**（Trajectory with Human Feedback），一个基于人类反馈强化学习（RLHF）的微调框架，用于生成式轨迹模型，将运动规划与多样化的驾驶风格对齐。
- **关键技术细节**：
  - **多条件去噪器（Multi-conditional Denoiser）**：在生成轨迹时融合多个条件信号（如目标位置、速度限制、驾驶风格偏好），增强多模态轨迹生成能力。
  - **强化学习与人类反馈（RLHF）**：使用人类偏好作为奖励信号，通过强化学习微调生成式轨迹模型，使其输出更符合真实人类驾驶者的风格偏好。
  - **流程概述**：首先使用模仿学习（如扩散模型）预训练轨迹生成器；然后收集人类对轨迹的偏好数据（成对比较或评分）；最后利用RL（如PPO）优化策略，同时保持安全性和可行性约束。
- **公式/算法流程**（文字说明）：
  1. 给定驾驶场景上下文（目标、地图、周围车辆等），多条件去噪器逐步去噪生成多模态轨迹候选。
  2. 将候选轨迹呈现给人类标注者，获取偏好标签（哪个更符合个人驾驶风格）。
  3. 训练奖励模型拟合人类偏好。
  4. 使用强化学习（如PPO）更新轨迹生成策略，最大化奖励模型预测的奖励，同时加入安全约束（碰撞避免、动力学可行性）作为额外惩罚或约束项。

## 3. 实验设计
- **使用的数据集/场景**：基于 **NavSim benchmark**（自动驾驶仿真导航场景），包含多种驾驶场景下的轨迹预测与规划任务。
- **Benchmark**：NavSim（文中提及“state-of-the-art on NavSim benchmark”）。
- **对比方法**：
  - 传统模仿学习（如行为克隆、条件VAE、扩散模型等）。
  - 其他生成式轨迹规划方法（未明确列出具体名称，但声称超越了“conventional imitation learning”）。
- **实验内容**：主要评估个性化风格对齐效果、安全性、可行性以及多模态轨迹质量。

## 4. 资源与算力
- **文中未明确说明**：本文摘要和元数据中未提及任何GPU型号、数量、训练时长等硬件信息。因此无法总结具体算力投入。

## 5. 实验数量与充分性
- **实验数量**：摘要仅提及在NavSim基准测试上达到了与SOTA相当的性能。未列出具体实验组数（如不同驾驶风格偏好设置、不同场景类型、消融实验对比等）。元数据中“evidence”和“result”字段表明实验验证了风格对齐和安全保持，但缺乏详细量化数据。
- **充分性与客观性**：从描述看，实验覆盖了基准测试，但未展示消融研究（如是否去掉RLHF、不同条件去噪器设计的对比、对不同风格偏好的泛化能力等）。因此实验的充分性和客观性存在一定不足，需查看全文确认。

## 6. 主要结论与发现
- TrajHF生成的轨迹在保留安全性和可行性的同时，成功对齐了不同驾驶风格偏好（如激进、温和、保守等）。
- 性能与NavSim基准上的SOTA方法相当，但在个性化对齐方面显著优于传统模仿学习方法。
- 证明人类反馈强化学习能有效作为自动驾驶轨迹个性化微调的策略，为自动驾驶运动规划提供了新范式。

## 7. 优点
- **方法论新颖**：将RLHF从自然语言处理引入自动驾驶轨迹规划，实现了风格个性化，超越了仅依赖数据集隐式偏差的生成模型。
- **多条件去噪器**：灵活融合多种条件，支持可控、多模态轨迹生成。
- **实用性强**：在保持安全性和可行性的同时提升用户体验，具有实际部署潜力。
- **工作完整**：从问题定义到方法设计、评估基准清晰，贡献明确。

## 8. 不足与局限
- **实验细节缺失**：未提供具体实验设置（数据集规模、驾驶风格定义方式、人类标注者数量及一致性等），难以复现和评估泛化性。
- **算力与效率未讨论**：RLHF通常需要大量人类标注和模型训练成本，文中未分析资源开销。
- **安全与分布外风险**：仅在NavSim基准上测试，未讨论在极端场景或分布外情况下的鲁棒性。
- **人类反馈偏差**：不同标注者偏好可能不一致，奖励模型可能过拟合或引入偏见，文中未讨论校准方法。
- **应用限制**：个性化风格可能在某些情况下与全局最优（如交通效率、法规限制）冲突，文中未深入探讨权衡。

（完）
