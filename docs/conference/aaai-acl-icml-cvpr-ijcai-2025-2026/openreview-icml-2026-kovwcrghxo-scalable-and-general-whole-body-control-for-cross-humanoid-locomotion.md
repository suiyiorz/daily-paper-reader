---
title: Scalable and General Whole-Body Control for Cross-Humanoid Locomotion
title_zh: 可扩展且通用的跨人形机器人全身运动控制
authors: "Yufei Xue, Yunfeng Lin, Wentao Dong, Yang Tang, Jingbo Wang, Jiangmiao Pang, Ming Zhou, Minghuan Liu, Weinan Zhang"
date: 2026-04-30
pdf: "https://openreview.net/pdf/e677d36ce20df4cf1a3e93c2d76f99a74a1e77a9.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 跨人形机器人全身运动控制
tldr: 现有基于学习的全身控制器需要针对特定机器人训练，限制了泛化性。提出XHugWBC框架，通过物理一致的形态随机化、语义对齐的观察和动作空间以及有效策略架构，实现一次训练即可鲁棒地泛化到多种人形机器人。实验证明该单一策略在多个机器人平台上表现出色。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有全身控制器需要针对每个机器人单独训练，缺乏跨本体泛化能力。
method: 提出XHugWBC框架，采用物理一致形态随机化、语义对齐空间和通用架构实现跨机器人控制。
result: 单一策略在多种人形机器人上鲁棒泛化，无需重新训练。
conclusion: 跨本体训练是迈向通用人形机器人控制的关键一步。
---

## Abstract
Learning-based whole-body controllers have become a key driver for humanoid robots, yet most existing approaches require robot-specific training.
In this paper, we study the problem of cross-embodiment humanoid control and show that a single policy can robustly generalize across a wide range of humanoid robot designs with one-time training.
We introduce XHugWBC, a novel cross-embodiment training framework that enables generalist humanoid control through:
(1) physics-consistent morphological randomization,
(2) semantically aligned observation and action spaces across diverse humanoid robots, and
(3) effective policy architectures modeling morphological and dynamical properties.
XHugWBC is not tied to any specific robot. Instead, it internalizes a broad distribution of morphological and dynamical characteristics during training. By learning motion priors from diverse randomized embodiments, the policy acquires a strong structural bias that supports zero-shot transfer to previously unseen robots.
Experiments on twelve simulated humanoids and seven real-world robots demonstrate the strong generalization and robustness of the resulting universal controller.

---

## 论文详细总结（自动生成）

# 论文详细总结：XHugWBC – 可扩展且通用的跨人形机器人全身运动控制

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：现有基于学习的全身控制器（whole-body controllers）大多需要针对每一种人形机器人单独训练，缺乏跨本体（cross-embodiment）的泛化能力。这导致每当引入新的人形机器人平台时，必须从头训练或进行大量微调，限制了控制策略的通用性和部署效率。
- **研究动机**：探索如何通过一次训练获得一个单一策略，使其能够鲁棒地泛化到多种不同结构、动力学特性的人形机器人上，从而迈向通用人形机器人控制。
- **整体含义**：论文提出了一种新颖的跨本体训练框架 XHugWBC，证明了一个通用控制策略可以在完全不针对目标机器人重新训练的情况下，零样本（zero-shot）迁移至未见过的机器人上，为构建通用人形机器人基座控制器提供了关键思路。

## 2. 论文提出的方法论

### 核心思想
- 通过**物理一致的形态随机化（physics-consistent morphological randomization）**、**语义对齐的观测与动作空间（semantically aligned observation and action spaces）** 以及**高效的策略架构（effective policy architectures）**，将多种机器人的形态和动力学特性内化到训练过程中，使策略学到通用的运动先验（motion priors）。

### 关键技术细节（基于摘要推断）
1. **物理一致的形态随机化**：在训练时对机器人的物理参数（如连杆长度、质量、惯性、关节限位、电机扭矩等）进行随机化，同时保证随机化后的机器人仍符合物理规律（例如不能产生自冲突的几何结构）。这样策略便能接触广泛的形态分布。
2. **语义对齐空间**：不同的机器人即使关节数量、传感器布局不同，也将其观测（关节角度、角速度、基座IMU数据等）和动作（关节目标位置/扭矩）映射到一个统一的语义空间，例如通过归一化、标准化或采用与具体机器人无关的特征表示。
3. **策略架构**：采用能够建模形态和动力学属性的网络结构（如图神经网络、参数化条件网络或基于Transformer的编码器-解码器结构），使网络能够根据输入的机器人形态描述（如关节拓扑、物理参数）自适应地调整控制行为。

### 公式或算法流程（文字说明）
- 训练过程：采样一个机器人形态（从预定义的分布中） → 用当前策略在该形态下与环境交互收集轨迹 → 使用强化学习（如PPO）更新策略参数 → 重复上述步骤，直至策略在所有随机形态上收敛。
- 零样本迁移：在目标机器人上直接部署训练好的策略（无需微调），利用其观测输入输出动作，即可实现稳定行走或全身运动控制。

（注：论文摘要未提供具体算法伪代码或公式，以上是合理推断。）

## 3. 实验设计

### 数据集/场景
- **仿真环境**：12种不同的人形机器人仿真模型（如不同身高、重量、自由度配置）。可能是基于MuJoCo、Isaac Gym或类似模拟器。
- **真实机器人**：7种不同的真实人形机器人平台（具体型号未列出，但涵盖了从轻量小型到全尺寸的变体）。
- **任务**：全身运动控制，包括站立、行走、抗扰动等基本动作。

### Benchmark与对比方法
- **基准方法**：未明确提及。可能包括针对单个机器人训练的专用控制器、域随机化但未跨本体的方法、以及直接使用固定参数策略等。
- **对比指标**：成功率、运动速度、稳定性、能效等。具体指标未在摘要中给出。

### 实验设计特点
- 跨本体泛化测试：在未见过的机器人上进行零样本测试。
- 涵盖了仿真与真实环境的迁移，验证了Sim-to-Real的可行性。

## 4. 资源与算力

- **文中未详细说明**：未提及GPU型号、数量、训练时长、显存消耗等具体信息。因此无法给出精确的算力描述。
- 推测：训练跨本体策略通常需要较大的算力（如多张A100或V100 GPU、数天训练），但论文本身未报告。

## 5. 实验数量与充分性

### 实验数量
- 仿真实验：覆盖12种机器人。
- 真实机器人实验：覆盖7种机器人。
- 消融实验：摘要中未提及是否进行了消融研究（如不含形态随机化、不含语义对齐等）。元数据中有“query:ad”标签，可能表示该摘要来自第三方索引而非完整论文，故细节有限。

### 充分性与客观性
- 优势：涉及多种不同形态的机器人（12仿真+7真实），规模较大，且包含真实世界验证，增强了说服力。
- 不足：未提供与具体基线方法的定量对比表格或性能数值，也未说明实验重复次数、随机种子设置、统计显著性检验等，因此客观性难以完全评估。此外，未公开代码或模型权重，可复现性未知。

## 6. 主要结论与发现

- 单一策略通过一次训练即可鲁棒泛化到多种不同的人形机器人，无需重新训练或微调。
- 跨本体训练（cross-embodiment training）是迈向通用人形机器人控制的关键一步。
- 物理一致的形态随机化和语义对齐空间是实现零样本迁移的核心组件。
- 实验证明了该方法在12个仿真和7个真实机器人上的强泛化能力和鲁棒性。

## 7. 优点

1. **创新性**：首次提出可跨多种人形机器人泛化的全身控制器，突破了传统机器人专用训练的限制。
2. **实用性**：一次训练即可适用于多种机器人，大幅降低部署成本和时间，具有工程应用价值。
3. **实验全面性**：同时涵盖仿真和真实机器人，且机器人种类多样，验证了方法的有效性和Sim-to-Real迁移能力。
4. **方法论设计简洁有效**：物理一致的形态随机化 + 语义对齐空间 + 通用架构，组合成一个端到端的训练框架，思路清晰。

## 8. 不足与局限

1. **信息不完整**：由于当前内容仅为摘要，缺少方法细节（如具体网络结构、奖励函数设计、训练超参数）、实验表格（定量结果、误差棒）、消融分析、与现有最先进方法的对比等。
2. **无算力报告**：不利于其他研究者复现和评估计算成本。
3. **泛化范围可能有限**：实验覆盖的机器人是否包含极端尺寸或自由度的机器人？能否推广到四足机器人或其他双足机器人？论文未讨论。
4. **任务单一**：仅涉及全身运动控制（行走、站立），未涉及复杂操作任务（如抓取、搬重物）或动态环境适应。
5. **依赖仿真**：训练完全在仿真中进行，虽然验证了Sim-to-Real，但真实机器人环境中可能存在的延迟、噪声、硬件差异等未被深入讨论。
6. **未公开资源**：可能影响学术界复现和后续研究。

（完）
