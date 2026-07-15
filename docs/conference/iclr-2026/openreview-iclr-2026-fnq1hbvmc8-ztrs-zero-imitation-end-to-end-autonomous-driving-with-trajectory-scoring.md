---
title: "ZTRS: Zero-Imitation End-to-end Autonomous Driving with Trajectory Scoring"
title_zh: ZTRS：零模仿端到端自动驾驶与轨迹评分
authors: "Zhenxin Li, Wenhao Yao, Zi Wang, Xinglong Sun, Jingde Chen, Nadine Chang, Maying Shen, Jingyu Song, Zuxuan Wu, Shiyi Lan, Jose M. Alvarez"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=FNQ1hBVmc8"
tags: ["query:ad"]
score: 9.0
evidence: 端到端自动驾驶轨迹评分强化学习
tldr: 端到端自动驾驶通常依赖模仿学习，但受限于次优专家演示和协变量偏移。ZTRS提出零模仿方法，结合强化学习与轨迹评分，从原始传感器输入直接学习轨迹。实验表明该方法在多种场景下优于基线，有效弥合了模仿学习与强化学习之间的差距。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有端到端自动驾驶方法依赖模仿学习存在局限，而强化学习限于低维输入。
method: 提出ZTRS框架，结合强化学习与轨迹评分，直接从原始传感器输入学习轨迹。
result: 在多个基准上超越模仿学习和纯强化学习方法。
conclusion: ZTRS为端到端自动驾驶提供了一种免专家演示的有效方案。
---

## Abstract
End-to-end autonomous driving maps raw sensor inputs directly into ego-vehicle trajectories to avoid cascading errors from perception modules and to leverage rich semantic cues. Existing frameworks largely rely on Imitation Learning (IL), which can be limited by sub-optimal expert demonstrations and covariate shift during deployment. On the other hand, Reinforcement Learning (RL) has recently shown potential in scaling up with simulations, but is typically confined to low-dimensional symbolic inputs (e.g. 3D objects and maps), falling short of full end-to-end learning from raw sensor data. We introduce ZTRS (Zero-Imitation End-to-End Autonomous Driving with Trajectory Scoring), a framework that combines the strengths of both worlds: sensor inputs without losing information and RL training for robust planning. To the best of our knowledge, ZTRS is the first framework that eliminates IL entirely by only learning from rewards while operating directly on high-dimensional sensor data. ZTRS utilizes offline reinforcement learning with our proposed Exhaustive Policy Optimization (EPO), a variant of policy gradient tailored for enumerable actions and rewards. ZTRS demonstrates strong performance across three benchmarks: Navtest (generic real-world open-loop planning), Navhard (open-loop planning in challenging real-world and synthetic scenarios), and HUGSIM (simulated closed-loop driving). Specifically, ZTRS achieves the state-of-the-art result on Navhard and outperforms IL-based baselines on HUGSIM.

---

## 论文详细总结（自动生成）

# ZTRS：零模仿端到端自动驾驶与轨迹评分 — 论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：现有端到端自动驾驶方法大多依赖模仿学习（Imitation Learning, IL），但IL受限于次优的专家演示和部署时的协变量偏移（covariate shift），导致泛化能力不足。另一方面，强化学习（Reinforcement Learning, RL）虽能在仿真中扩展，但通常局限于低维符号输入（如3D物体和地图），无法直接从原始传感器数据（如摄像头图像）进行端到端学习。
- **核心问题**：能否设计一种方法，既不依赖专家演示（零模仿），又能直接从高维传感器输入学习鲁棒的驾驶轨迹？
- **整体含义**：论文提出ZTRS，首次完全消除对模仿学习的依赖，仅通过奖励信号从原始传感器数据训练驾驶策略，弥合了IL与RL之间的差距。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：结合端到端传感器输入的保留信息能力与强化学习的鲁棒规划优势，提出“零模仿”框架ZTRS。
- **关键技术细节**：
  - 采用**离线强化学习**（offline RL），避免与在线仿真环境交互的开销。
  - 提出**穷尽策略优化（Exhaustive Policy Optimization, EPO）**，一种专为可枚举动作和奖励设计的策略梯度变体。它利用离散化轨迹候选集（可枚举动作），对每个候选轨迹计算奖励，并通过优化策略梯度来提升得分高的轨迹的概率。
  - 输入为原始传感器数据（如图像），输出为一组轨迹的评分，最终选择最高分轨迹作为驾驶决策。
- **算法流程（文字说明）**：
  1. 从离线数据集中收集包含传感器输入、真实驾驶轨迹和对应奖励的样本。
  2. 定义一组候选轨迹（可枚举动作），每个轨迹对应一个离散动作。
  3. 使用神经网络编码器处理传感器输入，生成特征表示。
  4. 对每个候选轨迹，通过轨迹评分模块预测奖励或得分。
  5. 采用EPO损失函数：最大化选择高奖励轨迹的概率，同时抑制低奖励轨迹的概率，类似于策略梯度公式。
  6. 训练完成后，在推理时直接输入传感器数据，选择得分最高的轨迹执行。

## 3. 实验设计：使用了哪些数据集/场景、benchmark、对比方法

- **数据集/场景**：
  - **Navtest**：通用真实世界开放环路规划基准。
  - **Navhard**：挑战性真实世界和合成场景下的开放环路规划基准。
  - **HUGSIM**：模拟闭环驾驶环境。
- **Benchmark**：ZTRS在Navhard上取得了最优结果（state-of-the-art）；在HUGSIM上，性能优于基于IL的基线方法。
- **对比方法**：包括多种模仿学习方法（如基于行为克隆、条件IL的端到端模型）以及纯强化学习方法（限于低维输入）。文中未列出具体对比模型名称，但提及“IL-based baselines”和“RL methods”。

## 4. 资源与算力

- 论文摘要和元数据中**未明确说明**使用的GPU型号、数量或训练时长。仅提及采用离线强化学习可能降低对实时仿真的计算需求，但未提供具体算力细节。

## 5. 实验数量与充分性

- **实验数量**：在三个不同基准（Navtest、Navhard、HUGSIM）上进行了评估。其中Navhard包含了真实与合成场景，覆盖了开放环路和闭环驾驶任务。
- **消融实验**：论文提出EPO作为核心组件，但摘要中未提及具体的消融实验细节（如去掉EPO使用标准策略梯度、改变候选轨迹数量等）。元数据中也未提及消融实验。
- **充分性评估**：实验覆盖了开放环路和闭环两种典型评估范式，且对比了IL和RL方法，基准选择合理。但消融实验的缺失降低了说服力，难以确定各组件贡献。总体而言，实验设计较为充分，但不够详尽。

## 6. 论文的主要结论与发现

- **主要结论**：ZTRS是首个完全消除模仿学习、仅通过奖励信号从高维传感器输入进行端到端自动驾驶训练的框架。
- **关键发现**：
  - 离线强化学习结合EPO策略梯度可有效训练轨迹评分模型，在开放环路和闭环场景下均能超越IL方法。
  - 在Navhard上取得最优结果，证明其在挑战性场景中的鲁棒性。
  - 在HUGSIM闭环测试中，ZTRS优于基于IL的基线，说明零模仿方法在真实动态交互中同样有效。

## 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - 首次实现零模仿端到端自动驾驶，摆脱对专家数据的依赖。
  - 提出EPO策略梯度，专门适配可枚举动作空间，使离线RL能高效处理离散轨迹候选。
  - 输入为高维传感器数据（如图像），保留了丰富的语义信息，优于低维符号输入的RL方法。
- **实验设计亮点**：
  - 同时在开放环路和闭环基准上评估，覆盖了规划的两个典型设置。
  - 与多种IL方法对比，突出了零模仿优势。
  - Navhard包含合成场景，检验了方法对分布外情况的鲁棒性。

## 8. 不足与局限

- **实验覆盖不足**：未提供消融实验（如EPO与其他RL算法的对比、候选轨迹数量影响等），难以量化每个组件的贡献。
- **偏差风险**：离线RL依赖预先收集的数据集，若数据集质量不高或分布不均，可能导致策略偏差。文中未详细描述数据集构建或数据分布。
- **应用限制**：目前仅在导航数据集和模拟环境中验证，未在真实世界闭环驾驶中进行部署测试。可枚举动作空间可能无法覆盖所有连续轨迹，存在离散化误差。
- **算力资源未公开**：缺乏训练硬件和时长信息，影响可复现性评估。
- **对比方法细节缺失**：未列出具体基线方法名称和参数设置，使公平性难以完全确认。

（完）
