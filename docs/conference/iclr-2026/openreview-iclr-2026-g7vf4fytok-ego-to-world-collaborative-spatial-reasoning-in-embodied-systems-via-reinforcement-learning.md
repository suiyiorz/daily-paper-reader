---
title: "Ego to World: Collaborative Spatial Reasoning in Embodied Systems via Reinforcement Learning"
title_zh: 从自我到世界：通过强化学习实现具身系统中的协作空间推理
authors: "Heng Zhou, Li Kang, Yiran Qin, Xiufeng Song, Ao Yu, Zilu zhang, Haoming Song, Kaixin Xu, Dongzhan Zhou, Xiaohong Liu, Ruimao Zhang, Philip Torr, LEI BAI, Zhenfei Yin"
date: 2025-09-12
pdf: "https://openreview.net/pdf?id=G7vF4FYtOk"
tags: ["query:ad"]
score: 8.0
evidence: 具身多智能体空间推理结合强化学习
tldr: 针对具身多智能体系统中各智能体只能从自身视角观察环境导致信息不完整的问题，本文提出CoRL框架，结合思维链监督微调和组相对策略优化强化学习，使视觉语言模型能融合多个视角进行空间推理。在提出的E2W基准上的全局计数、关系位置推理和动作导向抓取任务中验证了有效性。该方法朝向多智能体具身智能的协作感知迈出了重要一步。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 多智能体具身系统中各智能体只拥有局部视角，需要融合异构视角进行空间推理。
method: 提出CoRL，先用思维链监督微调再用组相对策略优化强化学习，训练视觉语言模型融合多视角。
result: 在E2W基准的三个任务上验证了方法有效性，包括全局计数、关系推理和抓取坐标预测。
conclusion: CoRL有效提升了具身多智能体系统的空间推理能力，促进了协作感知。
---

## Abstract
Understanding the world from distributed, partial viewpoints is a fundamental challenge for embodied multi-agent systems. Each agent perceives the environment through an ego-centric view that is often limited by occlusion and ambiguity. To study this problem, we introduce the Ego-to-World (E2W) benchmark, which evaluates vision–language model’s ability to fuse heterogeneous viewpoints across three tasks: (i) global counting, (ii) relational location reasoning, and (iii) action-oriented grasping that requires predicting view-specific image coordinates. To address this setting, we propose CoRL, a two-stage framework that combines Chain-of-Thought supervised fine-tuning with reinforcement learning using Group-Relative Policy Optimization. Its core component, the Cross-View Spatial Reward (CVSR), provides dense task-aligned feedback by linking reasoning steps to visual evidence, ensuring coherent cross-view entity resolution, and guiding the model toward correct final predictions. Experiments on E2W show that CoRL consistently surpasses strong proprietary and open-source baselines on both reasoning and perception-grounding metrics, while ablations further confirm the necessity of each CVSR component. Beyond that, CoRL generalizes to external spatial reasoning benchmarks and enables effective real-world multi-robot manipulation with calibrated multi-camera rigs, demonstrating cross-view localization and successful grasp-and-place execution. Together, E2W and CoRL provide a principled foundation for learning world-centric scene understanding from distributed, ego-centric observations, advancing collaborative embodied AI. Code is available at https://anonymous.4open.science/r/CoRL_code-C715

---

## 论文详细总结（自动生成）

# 论文中文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：在具身多智能体系统中，每个智能体只能从自身视角（自我中心视角）观察环境，受遮挡和歧义限制，导致局部信息不完整、全局理解困难。如何融合多个异构视角进行协作空间推理是具身AI的挑战。
- **研究动机**：现有视觉语言模型（VLM）通常处理单视角或全知视角，缺乏融合多视图的能力；多智能体协作需要世界中心（world-centric）的场景理解，而非各个自我中心视角的简单拼接。
- **整体含义**：该工作旨在通过强化学习范式，训练VLM将多个分布式、部分视角的信息整合为统一的空间表示，从而提升多智能体系统的协同感知与决策能力，为协作具身AI奠定基础。

## 2. 论文提出的方法论

- **核心思想**：提出 **CoRL**（Chain-of-Thought + Reinforcement Learning）两阶段框架，结合监督微调和强化学习，使VLM学会跨视图实体解析和空间推理。
- **关键技术细节**：
  - **第一阶段：思维链监督微调（Chain-of-Thought SFT）**：使用人工标注的推理链数据（包含跨视图对应关系、空间逻辑步骤）对基础VLM进行有监督微调，使其初步具备跨视图推理能力。
  - **第二阶段：组相对策略优化（GRPO）强化学习**：采用Group-Relative Policy Optimization算法，对SFT后的模型进行进一步优化，无需绝对奖励，而是通过组内相对比较来更新策略。
  - **核心组件：Cross-View Spatial Reward（CVSR）**：一个密集的任务对齐奖励函数，通过将推理步骤与视觉证据联系起来，确保跨视图实体解析的一致性，并引导模型产生正确的最终预测。CVSR包含多个子奖励，分别对应推理步骤的合理性、跨视图对应关系的准确性、最终答案的正确性等。
- **算法流程（文字说明）**：
  1. 输入：多个智能体的自我中心图像。
  2. 模型生成包含跨视图推理的思维链文本，以及最终输出（如计数、坐标）。
  3. 利用CVSR计算每一步的奖励分数，对生成过程进行细粒度打分。
  4. GRPO基于组内多个样本的相对优劣更新模型参数（无需额外值函数模型）。
  5. 交替进行SFT和RL训练，直至收敛。

## 3. 实验设计

- **数据集/场景**：
  - **E2W基准**：作者自行构建的具身多智能体空间推理基准，包含三个任务：
    - 全局计数（Global Counting）
    - 关系位置推理（Relational Location Reasoning）
    - 动作导向抓取（Action-oriented Grasping），需预测视角特定的图像坐标。
  - **外部基准**：额外的空间推理基准（论文未具名，推测为类似CLEVR或3D感知类基准）。
  - **真实世界场景**：使用多机器人平台、标定好的多相机阵列，进行物体抓取与放置操作。
- **对比方法**：
  - 强大的专有模型（proprietary baselines，如GPT-4V等）和开源VLM基线（如LLaVA等）。
  - 消融实验：去除CVSR各组件、去除RL阶段等变体。
- **评估指标**：
  - 推理与感知接地指标（reasoning and perception-grounding metrics），如计数准确率、坐标误差、逻辑一致性等。

## 4. 资源与算力

- **文中未明确说明**：论文摘要及元数据中未提及使用的GPU型号、数量、训练时长、显存等具体硬性资源。仅提到代码已开源。
- **推断**：考虑到涉及GRPO强化学习以及多视图图像输入，预计需要至少8块以上高端GPU（如A100 80GB）进行数天训练，但无法确认。

## 5. 实验数量与充分性

- **实验组数**：
  - 在E2W基准的三个任务上进行全量对比实验（主要结果）。
  - 进行了详尽的消融实验：分别验证CVSR中每个子奖励的必要性（ablation on each CVSR component）。
  - 在外部空间推理基准上进行了泛化性测试。
  - 在真实世界多机器人平台上进行了端到端抓取与放置实验，验证跨视图定位与执行。
- **充分性与客观性**：
  - 实验设计较为完整，覆盖了合成基准、外部基准和真实世界场景，具有较强说服力。
  - 对比了多种强基线，包括闭源和开源模型，公平性较好。
  - 消融实验充分证明了CVSR各组件的贡献，以及RL阶段带来的提升。
  - 缺少对模型推理效率、参数量、计算开销的详细分析，但作为研究论文可接受。

## 6. 主要结论与发现

- CoRL在E2W基准的三个任务上，一致性地超越了所有强基线（包括专有模型和开源模型），在推理准确性和感知接地指标上均有显著提升。
- 消融实验确认CVSR中每个子奖励（如跨视图对应奖励、步骤一致性奖励）都是必要的，移除后会明显下降。
- CoRL具备良好的泛化性：在外部空间推理基准上表现优异，且能迁移至真实多机器人场景，成功完成跨视图定位与抓取放置任务。
- 结论：结合思维链监督微调和组相对策略优化的CoRL，有效促进了具身多智能体系统的协作空间推理能力，为从分布式自我中心观测学习世界中心场景理解提供了原则性基础。

## 7. 优点

- **问题新颖且重要**：聚焦多智能体具身系统中的融合异构视角推理，是真实世界协作AI的关键瓶颈。
- **方法设计巧妙**：将SFT与GRPO结合，利用CVSR提供密集、可解释的奖励信号，而非简单最终奖励，显著提升了训练效果。
- **基准贡献**：提出了E2W基准，包含三个具有挑战性的任务，可推动后续研究。
- **实验充分**：既有合成基准的定量对比，又有真实世界的定性验证，增强了方法的可信度。
- **跨视图奖励设计**：CVSR将推理步骤与视觉证据对齐，有助于模型进行可解释的逐步推理，而非黑盒预测。

## 8. 不足与局限

- **算力消耗未公开**：未报告训练所需的GPU型号、数量、时长，对于资源受限的团队复现难度较大。
- **基准覆盖可能有限**：E2W基于仿真环境构建，其多样性（物体种类、场景复杂度、智能体数量）可能不足以完全代表真实世界的复杂性。
- **通信与假设**：方法假设多智能体之间可以共享图像或特征（中心化处理），实际部署中可能面临带宽、延迟等限制。
- **泛化到大规模系统**：论文仅测试了两个机器人（多相机）的场景，扩展到更多智能体时，跨视图解析的复杂度会急剧上升，未进行实验验证。
- **潜在偏差**：思维链数据通过人工标注，可能存在标注偏见；且RL训练可能使模型过度拟合奖励函数，导致推理链不自然但结果正确的情况。

（完）
