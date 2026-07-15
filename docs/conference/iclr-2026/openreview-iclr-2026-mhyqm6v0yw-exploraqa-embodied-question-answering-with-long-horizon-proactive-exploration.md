---
title: "ExploraQA: Embodied Question Answering with Long-horizon Proactive Exploration"
title_zh: ExploraQA：基于长时主动探索的具身问答
authors: "Hohin Kwan, Jinyu Chen, Chen Gao, Shifeng Zhang, Xu Zhou, Si Liu"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=MhYqm6v0yw"
tags: ["query:ad"]
score: 9.0
evidence: 具身问答，强调长时主动探索
tldr: "本文针对现有具身问答基准探索范围有限、轨迹被动、视角标注不足的问题，提出了ExploraQA大规模数据集。该数据集包含12,436个开放式问题，涵盖七类推理能力，强调长时主动探索和全面视角标注。它为评估具身智能体的语言、视觉和空间推理提供了更真实的场景，促进了自主探索能力的研究。"
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有具身问答基准缺乏长时主动探索能力和充分视角标注。
method: "构建包含12,436个开放式问题的大规模数据集，强调主动轨迹和多视角标注。"
result: 数据集覆盖七类问题，支持语言、视觉和空间推理的全面评估。
conclusion: ExploraQA为具身智能体的探索与推理能力提供了更具挑战性的评估基准。
---

## Abstract
Embodied Question Answering (EQA) is a critical task for developing embodied intelligence, requiring agents to autonomously explore environments and answer human questions through perception, navigation, and reasoning. However, existing EQA benchmarks suffer from three key limitations: constrained exploration scope, passive trajectory, and insufficient viewpoint annotation. To address these challenges, we introduce ExploraQA, a large-scale dataset featuring 12,436 diverse, open-ended questions across seven categories, designed to evaluate language, visual, and spatial reasoning. ExploraQA emphasizes long-horizon exploration, proactive trajectory, and comprehensive viewpoint annotations, enabling rigorous assessment of autonomous agents. We further propose an Iterative EQA Data Generation Framework to efficiently produce high-quality annotations via VLMs and human verification. To enhance exploration, we present the Answer Quality-Guided Navigator, which leverages a Topology-Aware Keyframe Search Module for efficient long-range navigation and an Answer Quality Reward Mechanism to optimize question-driven trajectories through dual LLM evaluators. Experimental results show that AQ-Nav achieves a 5.4% absolute improvement in E_score on the ExploraQA unseen test set over state-of-the-art navigators. We will release our dataset and code.

---

## 论文详细总结（自动生成）

# ExploraQA 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
具身问答（Embodied Question Answering, EQA）要求智能体通过自主感知、导航和推理来探索环境并回答人类问题，是发展具身智能的关键任务。然而，现有 EQA 基准存在三大局限：**探索范围受限**（场景小或固定路线）、**轨迹被动**（由预定义路径而非智能体主动驱动）、**视角标注不足**（缺乏多视角信息）。为此，论文提出 **ExploraQA** 数据集，旨在提供大规模、涉及长时主动探索的多视角标注数据，以更真实地评估具身智能体的语言、视觉和空间推理能力。

## 2. 论文提出的方法论
### 核心思想
构建大规模、开放式的 EQA 数据集，并设计一种**基于答案质量引导的导航器**（Answer Quality-Guided Navigator, AQ-Nav），提升智能体在长时主动探索中的问题驱动导航效率。

### 关键技术细节
- **Iterative EQA Data Generation Framework**：利用视觉语言模型（VLM）和人验证，迭代生成高质量的问题-答案-轨迹三元组，保证数据多样性和准确性。
- **Topology-Aware Keyframe Search Module**：基于场景拓扑结构选取关键帧，实现高效的长距离导航。
- **Answer Quality Reward Mechanism**：通过双 LLM 评价器对轨迹产生的答案质量进行奖励建模，优化探索路径，使智能体更倾向于访问有助于回答问题的区域。

### 算法/流程说明（文字描述）
1. **数据生成阶段**：VLM 在 3D 场景中生成初始问题，人类标注员验证并补充多视角标注；迭代优化直至满足质量阈值。
2. **导航阶段**：智能体使用 Topology-Aware Keyframe Search 在场景图中快速定位候选区域；每一步根据当前观测和问题，由双 LLM 评估器（一个负责答案质量预测，一个负责探索价值估计）共同计算奖励，指导下一步移动。
3. **回答阶段**：到达关键位置后，利用多视角图像和空间记忆生成最终答案。

（论文摘要未给出具体公式，上述为基于命名模块的合理推断。）

## 3. 实验设计
- **数据集/场景**：使用作者自建的 **ExploraQA** 数据集，包含 12,436 个开放式问题，覆盖 7 类推理能力（语言、视觉、空间等），强调长轨迹和主动探索。
- **Benchmark**：在 ExploraQA 的 unseen 测试集上进行评估。
- **对比方法**：与现有最先进的导航器（state-of-the-art navigators）对比，未具体列出名称，但报告 AQ-Nav 在 E_score 上获得 **5.4% 的绝对提升**。

## 4. 资源与算力
论文摘要及元数据中**未明确说明**使用的 GPU 型号、数量、训练时长等信息。仅提到将公开代码和数据集，但未给出具体计算资源消耗。

## 5. 实验数量与充分性
- **实验组数**：仅提及在 unseen 测试集上的单一主实验结果（一个性能指标提升）。未见消融实验、不同数据集泛化测试、不同问答模型对比等详细描述。
- **充分性评价**：实验覆盖不充分——缺乏消融分析（如分别验证 Topology-Aware Keyframe Search 和 Answer Quality Reward 的贡献）、缺乏与其他 EQA 基准的横向对比、缺乏对不同问题类型的分类性能分析。由于信息有限，难以判断是否客观公平。

## 6. 论文的主要结论与发现
- ExploraQA 数据集可有效评估具身智能体的长时主动探索与多视角推理能力。
- 所提出的 AQ-Nav 导航器相比现有先进方法，在未见测试集上显著提升了 E_score（绝对提升 5.4%），证明答案质量引导机制有助于提高问题驱动导航的效率。

## 7. 优点
- **数据规模大且多样**：12,436 个开放式问题，覆盖 7 类推理，具有较好的代表性。
- **强调主动探索**：通过长轨迹和主动导航设计，更贴合真实场景需求。
- **数据生成流程创新**：利用 VLM+人工验证的迭代框架，降低了标注成本并保证了质量。
- **导航机制新颖**：结合拓扑关键帧搜索和双 LLM 奖励，提升了长距离导航的相关性。

## 8. 不足与局限
- **实验细节缺失**：未提供消融实验、不同方法对比的具体数值、各类问题子集的性能，难以评估方法的完整效果。
- **依赖闭源模型**：VLM 和 LLM 的使用可能引入依赖性和可复现性问题。
- **未涉及泛化性**：仅在一个自建数据集上测试，未在现有公开 EQA 基准（如 Matterport3D EQA、Habitat EQA）上验证，实际泛化能力存疑。
- **资源消耗未公开**：无法评估方法的计算成本，可能限制实际应用。
- **偏差风险**：数据生成中 VLM 和人工验证可能引入隐含偏见，如问题分布不均匀、场景多样性不足等。

（完）
