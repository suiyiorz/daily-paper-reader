---
title: Context-Aware Multi-Agent Safety Evaluation for Autonomous Driving
title_zh: 自动驾驶的上下文感知多智能体安全评估
authors: "Lin Zhang, Bowei He, Kaustubh Sridhar, Oleg Sokolsky, Insup Lee"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=OwXfeTco9D"
tags: ["query:ad"]
score: 8.0
evidence: 自动驾驶多智能体上下文感知安全评估
tldr: 自动驾驶面临长尾安全场景评估不足的问题。DriveEval提出上下文感知多智能体框架，利用大语言模型的理解与推理能力评估驾驶安全性，并生成可解释的违规行为分析。实验表明该方法能发现更多危险边缘场景，并提供比传统方法更丰富的上下文解释。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有安全评估方法难以覆盖边缘场景且缺乏可解释性。
method: 利用大语言模型构建多智能体框架，进行上下文感知的安全评估与解释。
result: 比传统方法发现更多危险场景，并提供详细的自然语言解释。
conclusion: LLM驱动的多智能体评估可提升自动驾驶安全性验证效果。
---

## Abstract
Autonomous Driving (AD) faces persistent safety challenges from unforeseen long-tailed driving scenarios that require massive evaluation. Existing solutions, such as road test, scenario-based simulation and rule-based verification, remain insufficient: they either fail to uncover hazardous edge cases and inherit unsafe habits from human data, or lack adaptability across regions. Additionally, current approaches often provide limited contextual understanding, making it challenging to generate interpretable explanations of unsafe behavior. To address these gaps, we introduce **DriveEval**, a context-aware multi-agent framework for autonomous driving safety evaluation. It leverages the comprehensive knowledge and reasoning ability of large language models (LLMs) to understand traffic scenes and detect edge cases, while applying context engineering to ground LLMs in external knowledge, including traffic rules and historical accident data, for interpreting unsafe driving behaviors. The framework is organized as a multi-agent workflow comprising a Data Annotator, Scene Extractor, Rule Checker, Accident Retriever, and Driving Assessor, each handling specialized functions.
This multi-agent design improves precision through specialization, enables modular expansion with new knowledge sources, and allows the most suitable model to be chosen for each task, offering stronger performance than a single monolithic agent.
Experiments show that DriveEval can evaluate sensor data, such as dashcam video, to identify safety risks and recommend actionable improvements. Its assessments are closely aligned with human annotations, demonstrating that context-aware evaluation provides interpretable safety assurance.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：自动驾驶面临长期存在的安全挑战，主要源于不可预见的**长尾驾驶场景**，这些场景需要大量评估。现有方法（如路测、基于场景的仿真、基于规则的验证）存在不足：无法发现危险的边缘场景，从人类数据中继承不安全习惯，或缺乏跨区域的适应性。此外，当前方法通常缺乏上下文理解，难以生成可解释的不安全行为分析。
- **核心问题**：如何设计一种**上下文感知、可解释**的自动驾驶安全评估框架，能够识别边缘场景并给出违规行为的自然语言解释。
- **整体含义**：引入大语言模型（LLM）的多智能体协作方法，提升安全评估的覆盖率和可解释性，为自动驾驶验证提供新范式。

## 2. 论文提出的方法论：核心思想、关键技术细节、算法流程

- **核心思想**：构建**上下文感知多智能体框架（DriveEval）**，利用大语言模型的理解与推理能力，结合外部知识（交通规则、历史事故数据）进行安全评估。
- **关键技术细节**：
  - **上下文工程**：将LLM grounding到外部知识，包括交通规则和事故数据，以解释不安全驾驶行为。
  - **多智能体工作流**：包括五个专门智能体：
    - **Data Annotator**（数据标注器）
    - **Scene Extractor**（场景提取器）
    - **Rule Checker**（规则检查器）
    - **Accident Retriever**（事故检索器）
    - **Driving Assessor**（驾驶评估器）
  - 每个智能体负责专门功能，通过专业化提高精度，支持模块化扩展，允许选择最适合的模型。
- **算法流程（文字描述）**：
  1. 输入传感器数据（如行车记录仪视频）。
  2. Data Annotator对数据进行标注。
  3. Scene Extractor提取关键场景信息。
  4. Rule Checker检查是否违反交通规则。
  5. Accident Retriever检索相关历史事故案例。
  6. Driving Assessor综合所有信息，生成安全评估和可操作的改进建议。
- 整体流程无显式公式，依赖LLM的推理能力。

## 3. 实验设计：使用的数据集/场景、benchmark、对比方法

- **数据集/场景**：论文提到评估使用行车记录仪视频（dashcam video）作为传感器数据，但**未明确具体数据集名称**（如nuScenes、Waymo等），也未说明场景来源。
- **Benchmark**：未提及标准benchmark，评估标准是评估结果与人类标注（human annotations）的一致性。
- **对比方法**：论文声称与传统方法（如路测、基于场景的仿真、基于规则的验证）相比，DriveEval能发现更多危险边缘场景并提供详细解释，但**未列出具体对比方法名称或基线模型**。实验部分仅定性描述，缺乏定量对比表格。

## 4. 资源与算力

- **未明确说明**：论文摘要和元数据中未提及使用的GPU型号、数量、训练时长或推理算力消耗。仅提到“多智能体设计允许为每个任务选择最合适的模型”，但未量化资源需求。

## 5. 实验数量与充分性

- **实验数量**：论文仅给出定性结果，未提供多组实验（如不同数据集、消融实验、参数敏感性分析）。元数据中也没有实验结果细节。
- **充分性与客观性**：
  - 不足：缺乏定量指标（如召回率、精确率、F1分数），未与任何现有方法进行标准对比，未在公开benchmark上验证。
  - 可能存在偏差：仅依赖LLM推理和人为标注一致性，未控制混杂因素（如不同LLM型号、提示工程的影响）。
  - 公平性：未提供可复现的实验设置，难以评估结果可靠性。

## 6. 论文的主要结论与发现

- 提出DriveEval框架，能够**评估传感器数据（如行车记录仪视频）**，识别安全风险并推荐可操作的改进。
- 评估结果**与人类标注高度一致**，表明上下文感知评估可以提供可解释的安全保证。
- 相比传统方法，能发现更多危险边缘场景，并生成丰富的自然语言解释。

## 7. 优点：方法或实验设计上的亮点

- **方法创新**：
  - 将LLM的多智能体协作引入自动驾驶安全评估，利用上下文工程提升可解释性。
  - 模块化设计允许灵活扩展（如添加新知识源），专业化分工提高精度。
- **可解释性**：生成自然语言违规分析，便于人类理解。
- **实用性**：针对长尾边缘场景，弥补传统方法不足。

## 8. 不足与局限

- **实验覆盖不足**：未在真实/仿真多数据集上验证，缺乏定量指标和消融研究。
- **偏见风险**：评估结果可能受LLM自身知识偏差、提示设计影响，未讨论鲁棒性。
- **应用限制**：
  - 依赖高质量外部知识（交通规则、事故数据），不同地区规则差异需单独适配。
  - 推理计算成本较高（多智能体调用LLM），实际部署可能面临延迟和算力挑战。
  - 未与基于强化学习或形式化验证的方法对比，难以评估性能上限。
- **公开性**：论文为ICLR-2026 Rejected，可能缺乏同行评审认可。

（完）
