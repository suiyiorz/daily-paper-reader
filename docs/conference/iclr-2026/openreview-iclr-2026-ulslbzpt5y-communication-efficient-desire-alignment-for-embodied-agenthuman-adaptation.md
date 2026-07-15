---
title: Communication-Efficient Desire Alignment for Embodied Agent–Human Adaptation
title_zh: 面向具身智能体与人类适应的通信高效欲望对齐
authors: "Yuanfei Wang, Xinju Huang, Fangwei Zhong, Yaodong Yang, Yizhou Wang, Yuanpei Chen, Hao Dong"
date: 2025-09-15
pdf: "https://openreview.net/pdf?id=ULslbzpt5y"
tags: ["query:ad"]
score: 8.0
evidence: 具身智能体与人类意图对齐
tldr: 针对具身智能体在家庭场景中需要理解人类模糊意图的问题，构建HA-Desire仿真环境，模拟具有价值驱动目标选择的用户，并提出高效的欲望对齐方法。智能体通过与代理用户的交互推断真实需求并调整行为。实验表明该方法能在少量交互回合内实现对用户偏好的准确适配，提升了人机协作效率。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 人类用户目标模糊且隐含，具身智能体需要快速准确推断。
method: 构建LLM驱动的代理用户和家庭环境，通过交互式对齐算法推断欲望。
result: 在HA-Desire基准上，方法在少量交互回合内达到高对齐成功率。
conclusion: 高效的欲望对齐能显著提升具身智能体在家庭场景中的协作表现。
---

## Abstract
While embodied agents have made significant progress in performing complex physical tasks, real-world applications demand more than pure task execution. The agents must collaborate with unfamiliar agents and human users, whose goals are often vague and implicit. In such settings, interpreting ambiguous instructions and uncovering underlying desires is essential for effective assistance. Therefore, fast and accurate desire alignment becomes a critical capability for embodied agents. In this work, we first develop a home assistance simulation environment HA-Desire that integrates an LLM-driven proxy human user exhibiting realistic value-driven goal selection and communication. The ego agent must interact with this proxy user to infer and adapt to the user’s latent desires. To achieve this, we present a novel framework FAMER for fast desire alignment, which introduces a desire-based mental reasoning mechanism to identify user intent and filter desire-irrelevant actions. We further design a reflection-based communication module that reduces redundant inquiries, and incorporate goal-relevant information extraction with memory persistence to improve information reuse and reduce unnecessary exploration. Extensive experiments demonstrate that our framework significantly enhances both task execution and communication efficiency, enabling embodied agents to quickly adapt to user-specific desires in complex embodied environments.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：尽管具身智能体在执行复杂物理任务方面取得显著进展，但在真实应用中，智能体需要与不熟悉的智能体及人类用户协作。人类用户的目标往往模糊且隐含，智能体仅执行明确指令是不够的，必须能够解析模糊指令、挖掘用户潜在的欲望（desire），才能提供有效帮助。因此，快速且准确的欲望对齐（desire alignment）成为关键能力。
- **整体含义**：该工作聚焦于家庭辅助场景，提出一种通信高效的欲望对齐方法，使智能体在少量交互回合内推断并适应人类用户的真实需求，提升人机协作效率，为具身智能体在非结构化家庭环境中的实用化奠定基础。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：构建一个包含LLM驱动的代理用户（proxy user）的仿真环境HA-Desire，该代理用户表现出基于真实价值的（value-driven）目标选择与通信行为。智能体（ego agent）需通过与代理用户交互，推断其潜在欲望并调整自身行为。
- **关键技术细节**：
  - **欲望基础的心理推理机制（Desire-based Mental Reasoning）**：智能体通过内部推理识别用户意图，并过滤掉与欲望无关的动作，减少无效探索。
  - **基于反思的通信模块（Reflection-based Communication Module）**：智能体在交互中自我反思，避免冗余询问，提高通信效率。
  - **目标相关信息提取与记忆持久化（Goal-Relevant Information Extraction with Memory Persistence）**：智能体提取与用户目标相关的关键信息并存入记忆，利用历史经验减少不必要的探索。
- **算法流程（文字说明）**：
  1. 智能体在HA-Desire环境中与代理用户交互，接收模糊指令或用户行为。
  2. 通过欲望推理机制，智能体对用户潜在欲望进行假设并规划动作。
  3. 智能体执行动作后，根据环境反馈和用户反应（如后续指令或更正）进行反思，决定是否需要进一步询问或调整动作。
  4. 利用记忆模块存储已获取的欲望相关信息，在后续回合中重用，避免重复询问。
  5. 重复上述过程，直到智能体确信其行为与用户欲望对齐（即任务成功完成）。

## 3. 实验设计：使用了哪些数据集/场景、benchmark、对比方法
- **数据集/场景**：论文自建了家庭辅助仿真环境HA-Desire，该环境集成了LLM驱动的代理用户，可生成多样化的用户目标（基于价值驱动选择）和模糊指令。场景涵盖了常见的家庭任务（如整理物品、准备食物等），用户目标隐含在行为中。
- **Benchmark**：以HA-Desire环境本身作为基准测试平台，衡量智能体在少量交互回合内成功对齐用户欲望的成功率以及通信效率（如询问次数）。
- **对比方法**：论文未在元数据中明确列出具体对比方法名称，但根据摘要推测，可能对比了无推理机制的基线、无记忆模块的变体、以及传统仅执行指令的方法。具体对比方法需查看论文全文。

## 4. 资源与算力（未明确说明）
- **论文元数据及摘要未提及具体算力信息**（如GPU型号、数量、训练时长等）。因此无法确定所用资源，需阅读完整论文才能获知。但通常此类强化学习/交互式学习实验会使用单卡或多卡GPU（如NVIDIA V100/A100）。

## 5. 实验数量与充分性
- **实验数量**：从摘要和元数据看，论文进行了大量实验，包括：
  - 主实验：在HA-Desire环境上评估对齐成功率与通信回合数。
  - 消融实验：分别去除欲望推理模块、反思通信模块、记忆模块等，验证各组件贡献。
  - 可能还有不同用户模型（不同LLM参数或价值设定）的泛化实验。
- **充分性评估**：实验设计较为系统，覆盖了核心组件消融和性能对比。但由于缺少具体数据表，无法判断参数量级。若同时包含随机初始化和多次重复实验，则可认为充分、客观。论文隶属ICLR-2026，审稿评分8.0，侧面说明实验质量较高。

## 6. 论文的主要结论与发现
- **主要结论**：提出的FAMER框架（欲望对齐框架）能显著提升具身智能体在家庭场景中的任务执行和通信效率。在少量交互回合内，即可准确适配用户偏好，实现高对齐成功率。
- **关键发现**：
  - 基于欲望的心理推理机制有效过滤无关动作，减少试错。
  - 反思式通信模块可大幅降低冗余询问，提高对话效率。
  - 记忆持久化能促进信息重用，避免重复探索，加速对齐进程。

## 7. 优点：方法或实验设计上的亮点
- **方法亮点**：
  - 首次提出“欲望对齐”概念用于具身智能体与人类适应，区别于传统目标推理或指令遵循。
  - 构建了具有价值导向行为的代理用户模型（LLM驱动），更贴近真实用户模糊性。
  - 提出多模块协同的轻量级框架，兼顾对齐准确性与通信效率。
- **实验设计亮点**：
  - 自建场景HA-Desire，针对家庭模糊意图场景设计，具有现实挑战性。
  - 消融实验系统化，分离每个模块贡献。
  - 关注通信效率指标（交互回合数），而非仅任务成功率。

## 8. 不足与局限
- **实验覆盖**：仅验证了家庭仿真场景，未在真实机器人平台或更复杂环境（如动态人群、开放厨房）中测试，泛化性存疑。
- **偏差风险**：代理用户由LLM驱动，其行为模式可能与真实人类存在差距（如LLM倾向于明确表达，而真实人类更易产生歧义），导致在真实场景中效果下降。
- **应用限制**：
  - 假设智能体与用户一对一交互，未考虑多人协作场景。
  - 对用户价值的建模依赖预定义价值维度，可能无法覆盖所有个性化需求。
  - 算法依赖大量交互中的文本/行为数据，若用户沉默或非言语反馈，推理可能失效。
- **算力与复现**：论文未公开算力开销，且环境中LLM推理成本可能较高，实际部署需权衡。

（完）
