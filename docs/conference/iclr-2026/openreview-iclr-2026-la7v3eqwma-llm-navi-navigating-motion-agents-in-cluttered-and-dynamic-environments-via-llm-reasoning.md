---
title: "LLM-Navi: Navigating Motion Agents in Cluttered and Dynamic Environments via LLM reasoning"
title_zh: LLM-Navi：通过大语言模型推理在杂乱动态环境中导航运动智能体
authors: "Yubo Zhao, Qi Wu, Yifan Wang, Yu-Wing Tai, Chi-Keung Tang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=lA7V3EqWmA"
tags: ["query:ad"]
score: 7.0
evidence: 基于大语言模型的动态环境自主导航
tldr: 先前研究将LLM限制在简单静态环境。本文提出LLM-Navi，通过对环境、动态智能体及其轨迹进行统一编码，利用LLM的零样本空间推理能力实现复杂动态环境中的自主导航。方法支持多智能体协调、动态避障和闭环重规划，无需再训练。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有LLM导航研究局限于简单静态场景，无法处理复杂动态环境。
method: 将环境、动态智能体和轨迹编码为标记，利用LLM进行零样本空间推理和规划。
result: 在多种动态场景中实现鲁棒导航，支持多智能体协调。
conclusion: 证明LLM可用于复杂导航任务，无需微调。
---

## Abstract
We introduce **LLM-Navi**, a novel  large language model-based (LLMs) framework for autonomous navigation in dynamic and cluttered environments. Unlike prior studies constraining LLMs to simplistic, static settings with limited movement options, LLM-Navi enables robust spatial reasoning in realistic, multi-agent scenarios, achieved by uniformly encoding the environments (e.g., real-world floorplans), dynamic agents, and their trajectories as *tokens*. In doing so, we unlock the zero-shot spatial reasoning capabilities inherent in LLMs without requiring retraining or fine-tuning. LLM-Navi supports multi-agent coordination, dynamic obstacle avoidance, and closed-loop replanning, demonstrating generalization across diverse agents, tasks, and environments through text-based interactions. Our experiments show that LLMs can autonomously generate collision-free trajectories, adapt to dynamic changes, and resolve multi-agent conflicts in real time. We extend this framework to humanoid motion generation, showcasing its potential for real-world applications in robotics and human-robot interaction.  This work thus establishes a first foundation for integrating LLMs into embodied spatial reasoning tasks, offering a scalable and semantically grounded alternative to traditional methods.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：现有的大语言模型（LLM）在导航任务中的应用大多局限于简单、静态的环境，且智能体只有有限的移动选项，无法处理真实世界中复杂、动态、多智能体的场景。
- **核心问题**：如何利用LLM的零样本空间推理能力，在杂乱且动态变化的环境中实现鲁棒的自主导航，同时支持多智能体协调、动态避障和闭环重规划，而无需重新训练或微调模型。
- **背景意义**：该工作首次将LLM集成到具身空间推理任务中，为机器人导航和人机交互提供了可扩展且语义可理解的新方案，弥补了传统方法在语义理解与自适应方面的不足。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将环境（如真实楼层平面图）、动态智能体及其轨迹统一编码为 **token**，从而激活LLM天生的零样本空间推理能力。
- **关键技术细节**：
  - 编码方式：将地图信息、其他智能体的位置/速度、自身历史轨迹等转化为文本标记送入LLM。
  - 推理过程：LLM基于文本输入直接生成下一步运动指令（如前进、转向、等待），无需额外训练。
  - 多智能体协调：通过共享环境状态和各自规划的文本描述，实现智能体之间的隐式通信与冲突解决。
  - 闭环重规划：在每一步根据感知到的动态变化（如新障碍物出现、其他智能体路径改变）更新token编码，由LLM重新生成新轨迹。
- **算法流程（文字说明）**：
  1. 初始化环境编码（静态障碍物、边界、目标点）和所有智能体初始位置。
  2. 每个优化步骤：收集当前智能体自身状态、周围动态障碍物及他智能体的轨迹预测。
  3. 将上述信息转换为形式化的文本提示（token序列）。
  4. 输入LLM（如GPT-4），输出下一时刻的动作或子目标。
  5. 执行动作并更新环境状态；若检测到碰撞风险或路径失效，触发重规划循环回到步骤2。

> **注**：原文未提供具体公式或伪代码，此处基于摘要概括。

## 3. 实验设计：数据集 / 场景、Benchmark、对比方法

- **数据集/场景**：文中未明确列举具体数据集名称。但提及使用了**真实楼层平面图（real-world floorplans）** 以及**多种动态场景**，包括多智能体协调、动态避障、闭环重规划等。另外，方法扩展到了**人体动作生成**（humanoid motion generation）作为应用示例。
- **Benchmark**：未说明使用了已有的标准导航基准（如Habitat、MuSHR等），可能是作者自定义的模拟环境。
- **对比方法**：摘要中未提及对比基线。从上下文推测，可能对比了传统路径规划算法（如A*、DWA）或此前基于LLM的简单导航方法。

## 4. 资源与算力

- **文中未明确说明**所用GPU型号、数量、训练时长等硬件资源。
- 由于方法为“零样本”且无需微调，推理阶段可能仅需一块或多块GPU（如使用GPT-4 API），但具体细节缺失。

## 5. 实验数量与充分性

- **实验数量**：摘要未列出具体实验组数或消融实验。仅提到“在多种动态场景中实现鲁棒导航”、“支持多智能体协调”以及扩展到“人体动作生成”，具体数据不详。
- **充分性判断**：基于公开信息，实验描述较笼统，缺乏定量指标（如成功率、平均碰撞次数、平均路径长度等），也未与基线数值对比。实验的**充分性、客观性和公平性难以评价**。若能提供更多消融和对比细节会更好。

## 6. 论文的主要结论与发现

- LLM能够在**零样本**情况下，对复杂动态环境进行空间推理，生成无碰撞轨迹。
- 系统具备**动态适应能力**：遇到环境变化或障碍物移动时，能通过闭环重规划实时调整路径。
- 能够**解决多智能体冲突**，实现协调导航。
- 展示了将框架扩展到**人体动作生成**的潜力，证明了其在机器人学和人类-机器人交互中的现实应用前景。
- 结论：LLM无需微调即可完成具身空间推理任务，为传统方法提供了可扩展的语义替代方案。

## 7. 优点：方法或实验设计上的亮点

- **零样本泛化**：不依赖目标任务数据微调，而是直接利用LLM预训练的空间认知能力，降低了部署成本。
- **统一编码方式**：将环境、智能体、轨迹统一表示为token，使得LLM能够端到端处理多模态导航信息。
- **动态闭环replanning**：支持实时重规划，应对非结构化环境中的突发变化。
- **多智能体协调**：通过文本交互实现隐式协调，避免了传统分布式方法中的复杂通信协议。
- **扩展到人体动作生成**：展示了方法在更广泛具身任务上的可迁移性。

## 8. 不足与局限

- **实验覆盖不足**：未明确使用的数据集、评估指标及定量结果，缺少与经典方法的对比，说服力不够。
- **偏差风险**：文中仅依赖摘要，可能存在作者选择性报告正面结果的风险；未提及失败案例或局限性分析。
- **应用限制**：基于LLM的推理可能存在延迟和成本问题（尤其是调用大型API）；在实时性要求高的场景（如高速移动机器人）中可能不适用；token化编码方式对复杂动态场景的抽象表达能力有限。
- **未讨论安全性**：缺乏对LLM产生不安全路径或违反运动学约束的讨论。
- **资源消耗未公开**：无算力细节，不利于复现和效率评估。

（完）
