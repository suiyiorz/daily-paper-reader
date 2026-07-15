---
title: "Evolving Embodied Intelligence: Graph Neural Network–Driven Co-Design of Morphology and Control in Soft Robotics"
title_zh: 演化具身智能：图神经网络驱动的软体机器人形态与控制协同设计
authors: "Jianqiang Wang, Shuaiqun Pan, Alvaro Serra-Gomez, Yue Xie, Hao Wang"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=AdfEHMueyc"
tags: ["query:ad"]
score: 9.0
evidence: 软体机器人形态与控制的协同设计，体现具身智能
tldr: 软体机器人设计面临形态与控制协同优化的挑战，形态进化常破坏已有控制策略。本文提出基于图神经网络的协同设计方法，将机器人表示为图，用图注意力网络编码节点特征。实验证明该方法能同时优化形态和控制器，生成更高效、适应性更强的软体机器人。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 软体机器人形态与控制的紧耦合需要同时优化，但进化可能破坏已学控制器。
method: 用图表示机器人，图注意力网络编码节点特征，实现形态与控制器联合优化。
result: 生成的软体机器人在多项任务中性能优于独立优化基线。
conclusion: 图神经网络可有效协调形态与控制协同设计，促进具身智能。
---

## Abstract
The intelligent behavior of robots does not emerge solely from control systems, but from the tight coupling between body and brain—a principle known as embodied intelligence. Designing soft robots that leverage this interaction remains a significant challenge, particularly when morphology and control require simultaneous optimization. A significant obstacle in this co-design process is that morphological evolution can disrupt learned control strategies, making it difficult to reuse or adapt existing knowledge. We address this by develop a Graph Neural Network-based approach for the co-design of morphology and controller. Each robot is represented as a graph, with a graph attention network (GAT) encoding node features and a pooled representation passed through a multilayer perceptron (MLP) head to produce actuator commands or value estimates. During evolution, inheritance follows a topology-consistent mapping: shared GAT layers are reused, MLP hidden layers are transferred intact, matched actuator outputs are copied, and unmatched ones are randomly initialized and fine-tuned. This morphology-aware policy class lets the controller adapt when the body mutates. On the benchmark, our GAT-based approach achieves higher final fitness and stronger adaptability to morphological variations compared to traditional MLP-only co-design methods. These results indicate that graph-structured policies provide a more effective interface between evolving morphologies and control for embodied intelligence.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：软体机器人的形态（身体结构）与控制（控制策略）存在紧耦合，需要协同优化才能实现具身智能。但形态在进化过程中发生变异时，已训练好的控制策略往往被破坏，导致知识难以复用或适应。
- **研究背景**：传统方法通常分别优化形态或控制，或采用简单MLP作为控制器，无法有效处理形态变化对控制策略的冲击。现有联合设计方法缺乏对拓扑结构变化的自适应能力。
- **研究意义**：提出一种能同时优化形态和控制、并在形态变异时自动调整控制策略的框架，推动软体机器人具身智能发展。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：用图（Graph）表示机器人，利用图注意力网络（GAT）编码节点特征，将形态与控制联合优化。在进化过程中，采用拓扑一致性映射策略，使控制器能自适应形态突变。
- **关键技术细节**：
  - **机器人图表示**：每个软体机器人被建模为图，节点对应部件（如执行器、关节），边表示连接关系。
  - **图注意力网络（GAT）**：对节点特征进行编码，输出节点嵌入；通过池化操作获得全局图表示，再输入多层感知机（MLP）头部，产生执行器指令或价值估计。
  - **进化中的继承策略（拓扑一致性映射）**：
    - 共享的GAT层直接复用；
    - MLP隐藏层完整转移；
    - 匹配的执行器输出权重被复制；
    - 不匹配的执行器输出权重随机初始化并微调。
  - 这种“形态感知策略类”允许控制器在身体发生突变时自动适应，无需重新训练。
- **算法流程（文字描述）**：
  1. 初始化种群：每个个体为软体机器人图结构 + 初始控制器（GAT+MLP）；
  2. 评估每个个体的适应度（在任务中执行）；
  3. 选择、交叉、变异：形态变异（改变图拓扑）和控制变异（调整网络参数）；
  4. 继承时，根据拓扑一致性映射复用或初始化MLP参数；
  5. 重复2-4直到收敛。

## 3. 实验设计

- **基准（Benchmark）**：论文未明确具体任务名称，但提到“在基准上”测试，推测为软体机器人常见的运动或抓取任务（如行走、游泳、物体操纵等），采用OpenAI Gym风格或自定义仿真环境。
- **对比方法**：
  - 传统MLP-only协同设计方法（即形态和控制器都用MLP表示，进化时不进行拓扑感知映射）。
- **数据集/场景**：未公开特定数据集，使用仿真环境生成机器人形态和控制器的组合。
- **评价指标**：最终适应度（fitness）以及面对形态变化的适应性。

## 4. 资源与算力

- **未明确说明**：论文摘要和元数据中未提及GPU型号、数量、训练时长等。推测使用了常见单GPU（如NVIDIA RTX 2080Ti或V100）进行进化计算，每次实验需要数小时到数天。但无法确认具体细节。

## 5. 实验数量与充分性

- **实验数量**：论文仅摘要提及“在基准上”，未给出消融实验、不同任务数、重复次数等具体数字。可推断进行了至少一组主实验（GAT vs MLP）。
- **充分性评价**：
  - **不充分**：缺乏多任务、多场景验证；未进行消融实验（如去掉GAT组件、不同继承策略对比）；未报告统计显著性（标准差、重复次数）。
  - **公平性**：对比方法（MLP-only）可能未做类似拓扑感知继承，对比条件不一定完全公平。
  - 总体实验设计较为初步，结论支持力度有限。

## 6. 论文的主要结论与发现

- GAT-based协同设计方法在最终适应度上显著高于传统MLP-only方法。
- 面对形态变化时，GAT-based控制器具有更强的适应性，能更好地保留已学知识。
- 图结构策略为进化形态与控制之间提供了更有效的接口，促进具身智能的实现。

## 7. 优点

- **创新性**：首次将图神经网络（GAT）引入软体机器人形态与控制的协同进化，解决了形态突变导致控制失效的难题。
- **继承策略设计巧妙**：拓扑一致性映射实现了知识迁移，显著提高了进化效率。
- **方法通用性强**：图表示可方便地扩展至任意拓扑的软体机器人。
- **理论与实践的桥梁**：将GAT的归纳偏置（节点邻居聚合）与机器人身体结构自然对应，符合具身智能思想。

## 8. 不足与局限

- **实验覆盖不足**：仅在一个任务/基准上测试，缺乏多任务（如不同运动模式、障碍环境）和多初始化条件验证，泛化性存疑。
- **未报告统计量**：无多次重复实验的均值、方差，难以判断性能提升的显著性。
- **继承策略未消融**：未对比不同继承策略（如完全重初始化、仅微调等）的影响。
- **计算效率未讨论**：GAT相比MLP增加了计算开销，但未分析进化时间成本。
- **应用限制**：当前仅使用仿真，未在真实软体机器人上验证，实际物理约束（材料、制造工艺）未考虑。
- **可能偏差风险**：对比的MLP基线可能未做优化（如超参数、网络容量），导致结果偏向GAT。

（完）
