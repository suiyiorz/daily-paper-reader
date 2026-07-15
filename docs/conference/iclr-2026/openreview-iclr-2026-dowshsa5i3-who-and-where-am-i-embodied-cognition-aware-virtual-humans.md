---
title: Who and Where Am I? Embodied Cognition-Aware Virtual Humans
title_zh: 我是谁？我在哪？具身认知感知的虚拟人
authors: "Fan Lu, Wentao Zhu, Kwan-Yee Lin, Wayne Wu, Yizhou Wang, Guang Chen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=doWshSA5i3"
tags: ["query:ad"]
score: 5.0
evidence: 具有认知架构的具身认知虚拟人
tldr: 构建虚拟人需模拟认知状态与环境的交互。本文提出EmbodiedHuman架构，集成认知模块与运动执行，使虚拟人在3D环境中表现出体现认知的行为。模型包括意识模块、记忆模块等，实现了高层次的推理与动作协调。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有虚拟人缺乏认知状态与运动行为的整合。
method: 提出包含认知意识模块和运动执行的统一架构EmbodiedHuman。
result: 在交互式3D环境中展现了体现认知的虚拟人行为。
conclusion: 为构建认知智能的虚拟人提供了新范式。
---

## Abstract
Building virtual humans requires more than just realistic appearances and diverse motions; it necessitates simulating the intricate interplay between internal cognitive states, external environments, and executed motion behavior, as framed by the concept of embodied cognition. In this paper, we propose an embodied cognitive architecture, EmbodiedHuman, that captures this interaction by integrating "Mind" - a structured cognitive module, with motor execution to drive the virtual human’s behavior within an interactive 3D environment. To enable integrated embodiment over both cognitive states and physical execution, we introduce three novel modules in a unified framework: $1)$ a cognition-inspired Mind structure, which models and modularize high-level reasoning and decision-making through key causal variables (value, belief, desire, and intention);  $2)$ an action execution module, which translates internal intentions into embodied movements, enabling physically grounded interactions; and $3)$ an exploration module, which empowers the agent to actively explore the environment and update its mental states through feedback of actions. Our approach allows virtual humans to continuously adapt, learn, and evolve their behavior in response to environmental changes with autonomy, supporting dynamic and natural human-like interactions in the long horizon. Extensive experiments demonstrate the flexibility and scalability of our method in simulating individualized, daily-level behaviors in unknown environments.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义

- **研究动机**：现有虚拟人研究主要聚焦于外观真实感和多样化动作生成，但忽略了内部认知状态与外部环境、运动行为之间的复杂交互。具身认知（embodied cognition）理论强调认知、身体和环境的一体化，而当前虚拟人缺乏这种整合。
- **核心问题**：如何构建一个具有认知架构的虚拟人，使其能够在交互式3D环境中模拟认知状态（如信念、欲望、意图）与运动执行的动态耦合，从而实现自主、自适应、类人的长期行为。
- **整体意义**：提出一种新的范式——具身认知感知的虚拟人，通过将“心智”模块与动作执行模块统一，推动虚拟人从“外观逼真”向“行为智能”演进。

## 2. 论文提出的方法论

### 核心思想
提出 **EmbodiedHuman** 架构，将认知模块（Mind）与运动执行整合在一个统一框架中，使虚拟人能够根据内部认知状态和外部环境反馈，自主决策并执行具身动作。

### 关键技术细节
- **认知启发的 Mind 结构**：建模关键因果变量——**价值（Value）**、**信念（Belief）**、**欲望（Desire）**、**意图（Intention）**。这些变量构成高层推理与决策的核心。
- **动作执行模块**：将内部意图转化为具身运动（embodied movements），实现物理世界中的交互（如抓取、行走、操作物体）。
- **探索模块**：赋予智能体主动探索环境的能力，通过动作的反馈更新心智状态（mental states），形成持续的认知-行为循环。
- **整体流程**：环境感知 → 认知状态更新（信念、欲望等）→ 意图生成 → 动作执行 → 环境反馈 → 认知状态更新（闭环学习）。

### 公式/算法流程（文字说明）
由于论文原文未提供具体数学公式，根据摘要推断：架构采用模块化设计，可能基于强化学习或认知架构（如Soar/ACT-R）的思想，但文中并未给出详细算法伪代码。核心流程是一个感知-认知-动作的闭环反馈系统。

## 3. 实验设计

- **使用场景**：交互式3D环境（具体环境名称未明确说明，但从上下文推断为类似虚拟家庭/办公室的仿真环境）。
- **数据集**：未提及具体数据集名称。可能使用合成环境或自建场景。
- **Benchmark**：未见明确的标准化 benchmark。论文声称展示了“个性化、日常级别的行为”，但未说明与哪些基线方法对比。
- **对比方法**：摘要中未提及任何对比方法。由于论文正文缺失，无法判断是否存在消融实验或与现有方法的比较。

## 4. 资源与算力

- **未明确说明**：原文摘要及元数据中未提及任何关于 GPU 型号、数量、训练时长、显存消耗等信息。论文正文可能包含，但根据提供的内容无法获取。

## 5. 实验数量与充分性

- **实验数量**：摘要仅提及“大量实验”（extensive experiments），但未列出具体组数。根据元数据中的 `selection_source` 推断可能为投稿阶段，缺乏详细实验报告。
- **充分性分析**：
  - 由于缺乏具体实验设置、指标、对比基线，无法评估实验的充分性。
  - 论文宣称验证了“灵活性(scalability) and 可扩展性(scalability)”，但未提供定量结果（如成功率、任务完成率、认知状态变化曲线等），说服力不足。
  - 未提及是否进行了消融实验（如去掉某个模块的效果），也未讨论鲁棒性、泛化性。

## 6. 论文的主要结论与发现

- 提出的 EmbodiedHuman 架构能够使虚拟人在未知环境中持续适应、学习并演化行为，展现自主、动态、类人的长期交互。
- 通过集成认知模块（价值、信念、欲望、意图）与运动执行，实现了认知状态与运动行为的统一，为构建具有认知智能的虚拟人提供了新范式。

## 7. 优点

- **问题新颖**：将具身认知理论引入虚拟人构建，弥补了现有工作忽视认知-行为整合的不足。
- **架构模块化**：Mind结构、动作执行、探索模块分离清晰，便于扩展和替换。
- **长期自主性**：强调长期时间尺度（long horizon）下的自适应学习，适合需要持续交互的应用（如虚拟助手、游戏NPC）。
- **具身接地**：通过将意图直接映射为物理动作，使认知状态有实际表现力。

## 8. 不足与局限

- **信息缺失严重**：用户提供的仅为摘要和元数据，缺乏完整论文内容，无法进行深入分析。
- **实验不透明**：未公开具体环境、数据集、定量指标、对比方法，导致结果可重复性低。
- **缺乏工程细节**：没有提供网络结构、训练策略、超参数、计算资源等信息，难以评估方法实用性。
- **潜在偏差风险**：仅在一个或少数自定义环境中测试，泛化性未知；认知变量（价值、信念等）的定义和测量可能具有主观性。
- **应用限制**：目前只限于3D仿真环境，迁移到真实机器人或复杂社会交互场景需额外工作。

（完）
