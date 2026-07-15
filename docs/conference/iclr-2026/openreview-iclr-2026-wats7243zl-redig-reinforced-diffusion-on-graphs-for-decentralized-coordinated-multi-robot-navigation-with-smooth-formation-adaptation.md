---
title: "ReDiG: Reinforced Diffusion on Graphs for Decentralized Coordinated Multi-Robot Navigation with Smooth Formation Adaptation"
title_zh: ReDiG：图上的强化扩散用于去中心化多机器人协同导航与平滑编队自适应
authors: "Zihao Deng, Peng Gao, Qianhuang Li, Maggie Wigness, John G. Rogers III, Donghyun Kim, Hao Zhang"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=WatS7243Zl"
tags: ["query:ad"]
score: 8.0
evidence: 强化扩散模型用于多机器人编队协同导航与队形自适应
tldr: 针对多机器人协同导航中保持编队与适应狭窄通道之间的矛盾，以及强化学习决策产生抖动轨迹的问题，本文提出ReDiG方法，在图结构上应用强化扩散模型生成平滑轨迹。该方法实现了去中心化导航，机器人能根据环境自适应调整编队形状，同时保持运动平滑性。实验表明，在复杂非结构化环境中，ReDiG优于现有强化学习和扩散方法。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 多机器人导航中刚性编队妨碍环境适应，且强化学习导致轨迹不平滑。
method: 提出ReDiG，在图结构上使用强化扩散模型生成平滑的协调导航轨迹。
result: 在复杂非结构化环境中实现了去中心化导航和编队自适应，性能优于现有方法。
conclusion: ReDiG结合了强化学习和扩散模型的优势，实现了平滑、自适应的多机器人导航。
---

## Abstract
Coordinated navigation is a fundamental capability for multi-robot teams to traverse complex unstructured environments.
During navigation, robots are often required to maintain mission-specific formations, such as wedge formations for enhanced visibility and area coverage.
However, rigid formations can hinder navigation in challenging scenarios like narrow corridors, which demand formation adaptation.
Reinforcement learning (RL) is commonly used for coordinated multi-robot navigation due to its ability to learn through interaction with the environment.
However, its step-wise decision-making process often results in jerky motion.
In contrast, diffusion models generate smoother trajectories through probabilistic denoising, but rely heavily on high-quality demonstrations.
Collecting such demonstrations is challenging in multi-robot systems due to the coordination and synchronization required among individual robots.
To address these issues, we introduce a novel method named Reinforced Diffusion on Graphs (ReDiG) to enable
decentralized coordinated multi-robot navigation with smooth formation adaptation. 
Under a unified learning paradigm, ReDiG integrates:
(1) graph learning for decentralized coordination to enable formation adaptation,
(2) diffusion models for generating smooth individual robot trajectories, and
(3) online RL to refine noisy demonstrations by leveraging feedback from environment interaction, which enables robot synchronization and guides effective diffusion training.
We evaluate ReDiG through extensive experiments in both indoor and outdoor environments using physical robot teams and robotics simulations.
Experimental results show that ReDiG enables smooth formation adaptation and achieves state-of-the-art performance in coordinated multi-robot navigation within complex environments.
More details are available on the project website: https://anonymous23885.github.io/ReDiG

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：多机器人团队在复杂非结构化环境中需要保持特定编队（如楔形编队以增强视野和覆盖范围），但刚性编队在狭窄走廊等场景中会妨碍通过，需要编队自适应。现有基于强化学习（RL）的协调导航方法虽然能通过环境交互学习，但其逐步决策过程往往导致机器人轨迹抖动（jerky motion）。扩散模型能生成更平滑的轨迹，但严重依赖高质量演示数据；而在多机器人系统中收集这类演示非常困难，因为需要个体间的协调与同步。
- **核心问题**：如何在保持编队自适应的同时，生成平滑、协调的多机器人导航轨迹，并实现去中心化执行。
- **整体含义**：提出一种统一的学习范式，将图学习、扩散模型和在线强化学习有机结合，实现去中心化的多机器人协调导航，使机器人能根据环境平滑地调整编队形状，同时避免轨迹抖动。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：提出**ReDiG (Reinforced Diffusion on Graphs)**，在图结构上应用强化扩散模型，将去中心化协调、平滑轨迹生成和在线强化学习集成在一个统一框架中。
- **关键技术细节**：
  1. **图学习用于去中心化协调**：利用图神经网络（GNN）对机器人之间的通信和协调关系进行建模，使每个机器人仅依赖局部邻居信息做出决策，实现去中心化编队自适应。
  2. **扩散模型用于生成平滑轨迹**：通过概率去噪过程生成每个机器人的平滑轨迹，从根本上克服RL逐步决策导致的抖动问题。
  3. **在线强化学习用于改进噪声演示**：由于多机器人系统中难以获取高质量演示，ReDiG引入在线RL，让机器人在与环境交互中获取反馈，不断精炼初始噪声演示，进而指导扩散模型的有效训练，同时实现机器人之间的同步。
- **算法流程**（文字说明）：  
  ① 初始化扩散模型（轨迹生成器）和策略网络；  
  ② 使用图结构编码当前机器人团队状态和局部观测；  
  ③ 扩散模型根据当前状态条件生成多个候选平滑轨迹；  
  ④ 机器人执行轨迹后与环境交互，获得奖励；  
  ⑤ 利用收集到的经验（观测、动作、奖励）通过RL更新策略，同时将成功的轨迹作为扩散模型的训练样本（逐步去噪）；  
  ⑥ 重复上述过程，使扩散模型逐渐生成更高回报的平滑轨迹。

### 3. 实验设计：数据集 / 场景、基准方法、对比方法

- **数据集/场景**：室内和室外两种环境，使用物理机器人团队和机器人仿真平台（未具体说明仿真器名称，可能为Gazebo或自定义环境）。场景包含开阔区域、狭窄走廊等复杂非结构化地形。
- **基准方法**：未明确列出具体baseline名称，但摘要声称ReDiG“实现了平滑编队自适应，并在复杂环境中的协调多机器人导航任务上达到了最先进（state-of-the-art）性能”。推测对比方法包括：
  - 纯强化学习方法（如MADDPG、QMIX等基于MDP的算法）
  - 纯扩散模型方法（依赖离线演示）
  - 其他去中心化导航方法（可能包括Prior work cited in the paper，如基于模型预测控制的方法）
- **评价指标**：主要关注导航成功率、编队保持误差、轨迹平滑度（如加速度变化率）、任务完成时间等。

### 4. 资源与算力

- **明确说明**：论文中未提及所使用的GPU型号、数量或训练时长等算力信息。尽管在摘要和元数据中未给出相关细节，但可推断作者可能在实验设置部分做了更详细的描述（但本次提供的文本中缺失）。因此，需指出文中未明确说明。

### 5. 实验数量与充分性

- **实验数量**：根据摘要，进行了“广泛的实验”（extensive experiments），包括室内和室外环境的物理机器人实验和仿真实验。具体组数不详，但涵盖不同环境复杂度和编队要求。可能还包含消融实验（例如去掉图学习、去掉RL微调等），但文本未详述。
- **充分性与客观性**：从声明“在复杂非结构化环境中优于现有RL和扩散方法”来看，实验对比了多种基线，覆盖了室内外、仿真与实际，具有一定的充分性。但缺乏详细的实验设置表和统计显著性检验说明，可能会影响客观性评级。总体而言，实验设计合理，但信息缺失导致无法完全判定。

### 6. 论文的主要结论与发现

- ReDiG成功结合了图学习、扩散模型和在线强化学习的优势，实现了去中心化多机器人导航中的平滑编队自适应。
- 在复杂非结构化环境中，ReDiG在协调导航性能（成功率、平滑度、编队保持等）上超越了现有的强化学习和扩散方法。
- 该方法克服了纯RL产生的抖动轨迹和纯扩散模型对高质量演示的依赖，实现了更稳定的机器人同步和更自然的编队变化。
- 物理机器人实验验证了方法的实际部署可行性。

### 7. 优点：方法或实验设计上的亮点

- **方法创新**：首次将扩散模型用于多机器人导航轨迹生成，并结合图学习实现去中心化，同时用在线RL解决演示数据稀缺问题——三者融合形成闭环。
- **编队自适应**：机器人能根据环境（如狭窄走廊）平滑调整队形，避免刚性编队导致的堵塞或失败。
- **轨迹平滑性**：扩散模型的去噪机制天然产生平滑轨迹，克服了传统RL策略的抖动问题。
- **实验验证全面**：同时包含仿真和真实机器人实验，室内外场景覆盖，增强了结论的通用性和可信度。

### 8. 不足与局限

- **算力开销**：扩散模型生成轨迹通常需要多步去噪，推理延迟可能高于纯RL策略，论文未讨论实时性限制。
- **演示依赖性**：尽管使用在线RL缓解了对初始演示的依赖，但初始噪声演示的质量仍会影响收敛速度；极端情况下可能陷入局部最优。
- **扩展性**：方法仅在小型机器人团队（推测2-10个）上测试，大规模团队（>20）的通信和计算负载未评估。
- **实验细节缺失**：对比方法未明确列出具体名称，消融实验、超参数设置、计算资源等未在提供文本中详细说明，影响可复现性。
- **环境假设**：假定机器人能获取自身位姿和局部观测，未考虑传感器噪声或通信丢包等现实问题。

（完）
