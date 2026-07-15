---
title: "Move-Then-Operate: Behavioral Phasing for Human-Like Robotic Manipulation"
title_zh: 先移动后操作：面向类人机器人操控的行为分阶段框架
authors: "Haoming Xu, Lei Lei, Jie Gu, Chu Tang, Jingmin Chen, Rui-Qi Wang"
date: 2026-04-30
pdf: "https://openreview.net/pdf/8fb2d5e7b5819797a739ac4924e0165ba34d98fd.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 解耦的机器人操控框架，采用双阶段策略实现类人行为
tldr: "机器人操控中移动和操作是异构行为，现有单调策略难以统一。本文提出Move-Then-Operate，一种视觉-语言-动作框架，将操控显式解耦为粗定位移动和接触关键操作两个阶段，通过可学习的阶段选择器路由双专家策略。在RoboTwin2基准上达到68.9%平均成功率，接近人类操作模式。"
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有机器人操控策略将移动和操作混为一体，未能对齐人类分阶段运动模式，限制了性能。
method: 提出VLA框架，将操控解耦为粗定位移动和接触操作两个阶段，利用可学习阶段选择器和MLLM流水线自动生成阶段标签。
result: "在RoboTwin2基准上实现68.9%平均成功率，优于基线方法。"
conclusion: 该框架通过行为分阶段引入结构归纳偏置，提升了机器人操控的类人性和成功率。
---

## Abstract
We present Move-Then-Operate, a Vision–language–action framework that explicitly decouples robotic manipulation into two distinct behavioral phases: coarse relocation (move) and contact-critical interaction (operate). Unlike monolithic policies that conflate these heterogeneous regimes, our architecture employs a dual-expert policy routed by a learnable phase selector, introducing a structural inductive bias that isolates phase-specific dynamics. Phase labels are automatically generated via an MLLM-based pipeline conditioned on lightweight contextual cues such as end-effector velocity and subtask decomposition to ensure alignment with human motor patterns. Evaluated on the RoboTwin2 benchmark, our method achieves an average success rate of $68.9\%$, outperforming the monolithic $\pi_0$ baseline by +$24\%$. It matches or exceeds models trained on $10\times$ more data and reaches peak performance in $40\%$ fewer training steps, demonstrating that architectural disentanglement of move and operate phases is a highly effective and efficient strategy for mastering high-precision manipulation.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：机器人操控任务中，移动（move）和操作（operate）是两种异构行为——前者是粗定位的、大范围的运动，后者是精细化、接触关键的操作。现有“单一策略”（monolithic policy）将二者混为一谈，未能对齐人类“先移动到位、再精细操作”的分阶段运动模式，导致性能瓶颈。
- **研究动机**：模仿人类行为分阶段（phasic）的运动特性，通过引入结构归纳偏置（structural inductive bias），将操控显式解耦为两个阶段，从而提升机器人操控的类人性和任务成功率。
- **整体含义**：本文提出的 Move-Then-Operate 框架是一种视觉-语言-动作（VLA）架构，通过可学习的阶段选择器路由双专家策略，实现了高效的、接近人类行为模式的机器人操控。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：将机器人操控显式解耦为两个阶段：
  - **移动阶段（Move）**：粗定位（coarse relocation），负责将末端执行器移动至目标附近，无需精确接触。
  - **操作阶段（Operate）**：接触关键（contact-critical）的精细交互，如抓取、插入等。
- **关键技术细节**：
  - **双专家策略**：两个独立的专家网络（专家一负责移动，专家二负责操作），由**可学习的阶段选择器**（learnable phase selector）动态决定当前应激活哪个专家。
  - **自动阶段标签生成**：基于 MLLM（多模态大语言模型）的流水线，以轻量级上下文线索（如末端执行器速度、子任务分解）为条件，自动生成阶段标签，与人类运动模式对齐。
  - **整体架构**：Vision–Language–Action (VLA) 框架，输入为视觉观测和语言指令，输出为动作序列，通过阶段选择器切换专家，形成端到端训练。
- **算法流程（文字说明）**：
  1. 接收视觉观测和语言指令。
  2. 通过阶段选择器判断当前应处于移动阶段还是操作阶段。
  3. 若为移动阶段，激活移动专家，输出粗定位动作；若为操作阶段，激活操作专家，输出精细操作动作。
  4. 两个专家共享部分底层特征，但拥有独立的策略头。
  5. 训练时，使用 MLLM 生成的阶段标签作为监督信号，联合优化阶段选择器和两个专家。

## 3. 实验设计

- **使用的数据集/场景**：RoboTwin2 基准（benchmark），包含多种高精度操控任务（具体任务未在摘要中列举，但包含接触关键的操作）。
- **基准（Benchmark）**：RoboTwin2，一个用于评估机器人操控的标准化平台。
- **对比方法**：
  - **基线方法**：单一策略模型 π₀（monolithic π₀ baseline），将移动和操作合为一体的策略。
  - 还提及模型训练时数据量差异：本文方法匹配或超越使用 10× 更多数据训练的模型。
  - 未列出其他 SOTA 方法，但摘要暗示本文方法在 RoboTwin2 上优于单调基线。

## 4. 资源与算力

- **文中未明确说明**使用的 GPU 型号、数量或训练时长。仅提及“在 40% 更少的训练步数内达到峰值性能”，但未给出具体步数或硬件配置。故无法量化算力消耗。

## 5. 实验数量与充分性

- **实验数量**：摘要中只提及一个主要基准（RoboTwin2）上的平均成功率结果，以及训练效率的对比（40% 更少训练步数）。未提及消融实验数量或不同场景的细分结果。
- **充分性判断**：从摘要看，实验覆盖较有限——仅在一个基准上报告了整体成功率，没有提供各子任务的单独结果、阶段选择器的分析、或对不同数据量的鲁棒性测试。消融实验（如去掉阶段选择器、替换标签生成方式等）也未提及。因此，实验的充分性和客观性有待进一步验证。不过，文章被 ICML-2026 接收，可能正文中有更丰富的实验。

## 6. 主要结论与发现

- **主要结论**：将操控解耦为移动和操作两个阶段，引入结构归纳偏置的架构，是掌握高精度操控的高效且有效的策略。
- **具体发现**：
  - 在 RoboTwin2 上达到 68.9% 平均成功率，比单一策略 π₀ 基线高出 +24% (绝对提升 24%，相对提升约 53%)。
  - 匹配或超越使用 10× 更多数据训练的模型，表明架构解耦比数据规模更关键。
  - 在 40% 更少的训练步数内达到峰值性能，训练效率更高。

## 7. 优点

- **架构创新**：提出行为分阶段（behavioral phasing）的显式解耦，引入结构归纳偏置，更符合人类运动模式，具有强先验。
- **自动标签生成**：利用 MLLM 自动生成阶段标签，无需人工标注，可扩展性强。
- **性能提升显著**：在单一基准上相比强基线有大幅提升（+24% 绝对成功率），且训练更高效。
- **数据高效**：在较少数据下达到或超越大量数据训练的模型，具有实用价值。

## 8. 不足与局限

- **实验覆盖不足**：仅在 RoboTwin2 一个基准上进行评估，缺乏在更多样化的机器人操控任务（如不同物体、不同复杂度）上的验证。
- **对比方法有限**：仅与单一策略 π₀ 基线比较，未与其它多阶段方法（如分层强化学习、动作分割方法）对比，说服力有限。
- **消融实验缺失**：未明确交代对阶段选择器、双专家设计、标签生成方式等的消融效果，无法评估各组件贡献。
- **泛化性未说明**：该框架是否适用于连续动作空间或动态环境？是否对任务种类有依赖？摘要未提及。
- **资源消耗未报告**：缺少计算资源说明，不利于复现和公平比较。

（完）
