---
title: "SmartAgent: Chain-of-User-Thought for Embodied Personalized Agent in Cyber World"
title_zh: "SmartAgent: 面向网络世界中具身个性代理的用户思维链"
authors: "Jiaqi Zhang, Chen Gao, Liyuan Zhang, Quoc Viet Hung Nguyen, Hongzhi Yin"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38859/42821"
tags: ["query:ad"]
score: 7.0
evidence: 面向具身个性代理的用户思维链
tldr: 针对传统具身代理忽略用户个性化因素的问题，提出COUT推理范式，将思维链从基本动作推理扩展到显式和隐式个性建模，显著提升在真实和虚拟场景中的个性化服务质量。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38859/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1667, \"height\": 777, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38859/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1838, \"height\": 1025, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38859/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1840, \"height\": 503, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38859/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1849, \"height\": 396, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38859/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 796, \"height\": 727, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38859/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1780, \"height\": 456, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38859/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 875, \"height\": 259, \"label\": \"Table\"}]"
motivation: 现有具身代理仅优化任务轨迹，缺乏对用户个性化因素的考虑。
method: 提出COUT，从基本动作思维到显隐个性推理的链式思考。
result: 在个性化任务中优于基于黄金轨迹的方法。
conclusion: 用户思维链是实现真正个性化具身代理的关键。
---

## Abstract
Recent advances in embodied agents with multimodal perception and reasoning capabilities based on large vision-language models (LVLMs), excel in autonomously interacting either real or cyber worlds, helping people make intelligent decisions in complex environments. However, the current works are normally optimized by golden action trajectories or ideal task-oriented solutions toward a definitive goal. This paradigm considers limited user-oriented factors, which could be the reason for their performance reduction in a wide range of personal assistant applications. To address this, we propose Chain-of-User-Thought (COUT, a novel embodied reasoning paradigm that takes a chain of thought from basic action thinking to explicit and implicit personalized preference thought to incorporate personalized factors into autonomous agent learning. The main challenges of achieving COUT include: 1) the definition of embodied personalized tasks, 2) the embodied environment epitomizes personalized preference, and 3) the way to model embodied personalized actions. To target COUT, we introduce SmartAgent, an agent framework perceiving cyber environments and reasoning personalized requirements as: 1) interacting with GUI to access an item pool, 2) generating users' explicit requirements implied by previous actions, and 3) recommending items to fulfill users' implicit requirements. To demonstrate SmartAgent's capabilities, we also create a brand-new dataset SmartSpot that offers a full-stage personalized action-involved environment. To our best knowledge, our work is the first to formulate the COUT process, serving as a preliminary attempt towards embodied personalized agent learning. Our extensive experiments on SmartSpot illuminate SmartAgent’s functionality among a series of embodied and personalized sub-tasks.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：当前的具身智能体（embodied agents）通常基于大视觉语言模型（LVLMs），能够自主在真实或虚拟世界中进行交互和决策。然而，现有工作大多优化于“黄金动作轨迹”或“理想的任务导向解决方案”，即只关注完成任务目标，**严重缺乏对用户个性化因素（user-oriented factors）的考虑**。这导致它们在个人助理类应用（如智能设备助手、个性化推荐）中性能下降。
- **核心问题**：如何将用户个性化偏好系统性地融入到具身智能体的学习过程中？如何让智能体不仅执行操作，还能理解用户的显式和隐式需求？
- **整体含义**：作者首次提出了 **Chain-of-User-Thought (COUT)** 这一推理范式，将智能体的思维从基础动作逐步扩展到显式和隐式个性建模，目标是实现“**具身个性化代理**”（embodied personalized agent）。

---

## 2. 论文提出的方法论：核心思想、关键技术细节

### 2.1 核心思想：COUT（用户思维链）
- 定义：智能体在决策时不仅依赖任务目标，还要依赖用户个性化偏好。动作生成是通过逐步推理链完成的：
  - **基本具身行为层次**（Thought #1）：GUI导航，如点击、输入等基本操作。
  - **显式个性化推理层次**（Thought #2）：基于之前动作推断用户明确的潜在需求（如“用户需要北京菜，3-4人，下午14-17点”）。
  - **隐式个性化推理层次**（Thought #3）：在得到显式需求后，从物品池中推荐符合隐式偏好的物品。
- 关键公式对比：
  - 传统方法：\( A = \{Action_i | Task goal\} \)
  - COUT：\( A_{COUT} = \{Action_i | Task goal, User preference\} \)

### 2.2 关键技术细节：SmartAgent 框架
- **输入**：GUI截图（视觉） + 用户指令 + 历史动作序列。
- **输出**：多步思维对应的动作（GUI坐标/文本）或推荐结果。
- **两阶段训练**：
  1. **具身阶段（Embodied Stage）**：
     - 使用 **Perceiver** 模块（基于 Qwen-VL + LoRA 微调）预测 Thought #1（GUI动作）。
     - 使用 **Reasoner** 模块（原 LVLM 未微调或轻量微调）推理 Thought #2（显式需求文本）。
  2. **个性化阶段（Personalization Stage）**：
     - 同样使用 Perceiver，基于 Thought #2 和物品池截图，输出 Thought #3（推荐是否“是/否”）。
- **实现细节**：
  - 骨干模型：Qwen-VL（高分辨率448×448）。
  - 继续预训练于 **SeeClick** 基础模型上以获得 GUI grounding 能力。
  - 坐标以自然语言形式表示。
  - 历史动作取最近8步（含截图）。
  - 优化器：AdamW，学习率 3e-5，全局 batch size 14。
  - 硬件：2块 NVIDIA A100 GPU，LoRA 微调。

---

## 3. 实验设计：数据集、Benchmark、对比方法

### 3.1 数据集
- **SmartSpot**（自建）：第一个具身个性化评测benchmark。
  - **来源**：美团（Meituan）平台，含五个单通道（食品、酒店、机票、电影、医药）和两个多通道（旅行1: 航班+食品，旅行2: 航班+酒店）。
  - **规模**：总共 **144个episode**，超过 **1400个步骤**。每个episode包含GUI操作（搜索物品池）、找到物品池、推荐三个阶段。
  - **统计**：每个通道约20个episode（单通道）或10-12个（多通道），平均步骤数从6.55到21.33不等。
- **额外评估**：
  - **ScreenSpot**（GUI grounding基准）
  - **Mind2Web**（GUI autonomous agent基准）

### 3.2 对比方法
- **基线**：Qwen-VL（通用LVLM）、SeeClick（GUI专用智能体）。
- 比较时保持原始prompt推理设置，只报告具身动作结果（因为通用模型不擅长个性化推理）。

---

## 4. 资源与算力
- **文中明确说明**：所有训练在 **2块 NVIDIA A100 GPU** 上进行，使用 LoRA 微调。
- 训练轮数：具身阶段和个性化阶段各 **15 epochs**。
- 其他基线也训练15轮。
- **未说明**：具体训练总耗时（小时/天），以及推理时的延迟等。

---

## 5. 实验数量与充分性
- **主要实验**：
  - 图4：主对比实验，在6个通道（食品、酒店、机票、电影、旅行1、旅行2）上比较SmartAgent与基线的四个指标（Element Accuracy, Step Successful Rate, Explicit Preference Accuracy, Implicit Preference Accuracy）。
  - 附录表4：ScreenSpot benchmark上的GUI grounding评估。
  - 附录表5：Mind2Web benchmark上的自主GUI操作评估。
  - 表2：零样本推理实验（在“医药”通道上测试未见场景）。
  - 附录表6：端到端 vs 两阶段训练对比（trade-off分析）。
  - 附录表7：所有通道平均分对比。
- **消融/分析**：部分通过附录呈现，如异常案例讨论、中间思维（Thought #2）对推荐的影响等。
- **充分性评价**：实验覆盖了基础具身能力（GUI grounding、自主操作）、个性化推理（显式+隐式）、零样本泛化，并且使用了多个真实场景通道。数据集规模中等（144 episode），但已足够支撑初步结论。未做更广泛的跨平台或真实用户设备实验（作者在Future Work中提及）。

---

## 6. 论文的主要结论与发现

1. **SmartAgent 在大部分场景下**（尤其是多通道复杂场景）**实现了全阶段的具身个性化推理**，性能优于或持平GUI专用模型和通用LLM。
2. **两阶段训练优于端到端**：通过中间思维（Thought #2）显式建模用户需求，可提升隐式推荐准确性；但也存在误差累积的风险（如机票、电影通道中高显式准确率后推荐效果不佳）。
3. **零样本推理能力**：在未见过的“医药”通道上，SmartAgent的显式需求推理（Exp.Acc）甚至超过全样本微调结果，说明其具备跨场景泛化潜力。
4. **训练个性化能力不会灾难性遗忘基础具身能力**：在ScreenSpot和Mind2Web基准上仍保持第二或较好的排名。

---

## 7. 优点：方法或实验设计上的亮点

- **首次提出COUT范式**，将个性化偏好系统化地引入具身智能，填补了领域空白。
- **两阶段训练设计巧妙**：具身阶段学习GUI交互并产出中间思维（显式需求），个性化阶段利用该思维缩小推荐池，提高推荐效率。
- **自建数据集SmartSpot**：基于真实平台、覆盖多场景、具身动作与推荐任务结合，极具实际价值。
- **全面的评估指标**：涵盖GUI精准性（Ele.Acc, SSR）和个性化准确性（Exp.Acc, Imp.Acc），便于全面衡量智能体性能。
- **零样本实验**展示了泛化能力，为未来应用奠定基础。

---

## 8. 不足与局限

- **数据集规模较小**：总共144个episode，每个通道约20个，可能不足以充分训练和评测复杂个性化行为。
- **误差累积问题**：特别是在长链推理中（如机票、电影），高显式准确率反而导致推荐下降，说明中间思维可能存在噪声或过拟合。
- **未见真实用户设备部署**：所有实验在模拟环境中进行（基于美团截图），与实际用户交互存在差异。
- **对比基线不足**：只对比了Qwen-VL和SeeClick，未与更多最新GUI agent（如CogAgent、Mobile-Agent）进行比较；也未对比传统的推荐系统方法（如基于ID的协同过滤）。
- **缺乏随机种子和多次重复结果**：未报告多次实验的方差，结果统计可靠性可加强。
- **资源消耗细节不充分**：未说明训练总时长、单步推理耗时等，不利于复现和实际部署。

---

（完）
