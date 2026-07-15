---
title: "MA-EgoQA: Question Answering over Egocentric Videos  from Multiple Embodied Agents"
title_zh: MA-EgoQA：基于多个具身智能体第一人称视频的问答
authors: "Kangsan Kim, Yanlai Yang, Suji Kim, Woongyeong Yeo, Youngwan Lee, Sung Ju Hwang, Mengye Ren"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=wPr54hJYuF"
tags: ["query:ad"]
score: 4.0
evidence: 对多个具身智能体的第一人称视频进行问答
tldr: 本文首次定义了对多个具身智能体采集的长时间第一人称视频理解问题，旨在聚合多视角信息回答查询。提出了数据集和基线方法，为未来多智能体场景理解研究奠定基础。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 多智能体场景中需同时理解多个第一人称视频以构建系统记忆。
method: 定义新任务并构建数据集和基线方法。
result: 提供了评估基准和初步结果。
conclusion: 为多智能体视频理解开辟了新方向。
---

## Abstract
As embodied models become powerful, humans will collaborate with multiple embodied AI agents at their workplace or home in the future. To ensure better communication between human users and the multi-agent system, it is crucial to interpret incoming information from agents in parallel and refer to the appropriate context for each query. Existing challenges are to effectively compress and communicate high volumes of individual sensory inputs in the form of video and to correctly aggregate multiple egocentric videos to construct system-level memory. In this work, we first formally define a novel problem of understanding multiple long-horizon egocentric videos simultaneously collected from embodied agents. To facilitate research in this direction, we introduce MultiAgent-EgoQA (MA-EgoQA), a benchmark designed to systemically evaluate existing models in our scenario. MA-EgoQA provides 1.7k questions unique to multiple egocentric streams, spanning five categories: social interaction, task coordination, theory-of-mind, temporal reasoning, and environmental interaction. We further propose a simple baseline model for MA-EgoQA named EgoMAS, which leverages shared memory across embodied agents and agent-wise dynamic retrieval. Through comprehensive evaluation across diverse baselines and EgoMAS on MA-EgoQA, we find that current approaches are unable to effectively handle multiple egocentric streams, highlighting the need for future advances in this direction.

---

## 论文详细总结（自动生成）

# MA-EgoQA：基于多个具身智能体第一人称视频的问答 — 论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **背景**：随着具身模型（embodied models）日益强大，未来人类将在工作场所或家庭中与多个具身AI智能体协作。为了确保人类用户与多智能体系统之间的良好沟通，系统需要并行解读来自各个智能体的传入信息，并为每个查询提供合适的上下文。
- **核心问题**：现有挑战包括如何有效压缩和传输大量个体感官输入（视频形式），以及如何正确聚合多个第一人称（egocentric）视频以构建系统级记忆。目前缺乏对同时采集自多个具身智能体的长时间第一人称视频理解问题的正式定义与基准。
- **研究意义**：本文首次定义了这一新问题，为多智能体场景中的视频理解研究奠定基础，填补了该方向的数据集与评价基准空白。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：提出一个名为 **MultiAgent-EgoQA (MA-EgoQA)** 的基准数据集，以及一个简单基线模型 **EgoMAS**，用于评估模型在多个第一人称视频流上的问答能力。
- **关键技术细节**：
  - **MA-EgoQA 基准**：包含1.7k个问题，专门针对多个第一人称视频流设计，涵盖五类问题：社交交互、任务协调、心智理论、时间推理、环境交互。
  - **EgoMAS 基线模型**：采用**跨智能体共享记忆**（shared memory across embodied agents）和**基于智能体的动态检索**（agent-wise dynamic retrieval）机制。具体地，模型首先将每个智能体的视频片段编码为记忆单元，然后根据查询动态地从各智能体的记忆中选择相关信息，融合后生成答案。
- **算法流程**（文字说明）：
  1. 对每个智能体的第一人称视频进行特征提取与片段编码，构建每个智能体的本地记忆库。
  2. 对于给定的问题查询，使用检索模块分别从每个智能体的记忆库中检索最相关的片段（agent-wise dynamic retrieval）。
  3. 将检索到的多智能体片段通过共享记忆机制进行融合（可能采用注意力或拼接等方式）。
  4. 基于融合后的表示生成答案（分类或生成）。  
  （注：原文未提供完整公式，上述为基于摘要的合理推断。）

## 3. 实验设计：数据集、基准、对比方法
- **数据集**：作者自己构建的 **MA-EgoQA** 基准数据集，包含1.7k个问题，视频来源为多个具身智能体同时采集的长时间第一人称视频（具体场景未在摘要中详述，但问题类型包括社交交互等）。
- **基准（Benchmark）**：该数据集本身即为评估基准，用于系统性评价现有模型在多智能体第一人称视频问答上的表现。
- **对比方法**：
  - 作者将 **EgoMAS** 与多种基线（diverse baselines）进行了比较。摘要未列出具体基线名称，但暗示包括当前主流的单视频或单智能体问答模型，以及可能的多视角融合模型。
  - 评估指标：未明确指出，推测为问答准确率或 F1 等标准指标。

## 4. 资源与算力
- **未明确说明**：论文摘要及元数据中未提及使用的 GPU 型号、数量、训练时长等算力资源。仅提到“EgoMAS”作为一个简单基线模型，但未公开训练配置。  
  （注意：原文仅有摘要，未包含实验设置细节。）

## 5. 实验数量与充分性
- **实验数量**：摘要提到“comprehensive evaluation across diverse baselines and EgoMAS”，但未给出具体实验组数（如消融实验、不同问题类型的细分等）。
- **充分性与公平性**：
  - 由于缺少详细实验描述，无法判断消融实验是否充分。但作者声称对多样基线进行了全面评估，且数据集包含五种问题类型，可能进行了分类评估。
  - 基线对比的公平性依赖于是否采用相同的特征提取、训练协议等，文中未说明，因此存在不确定性。总体而言，实验覆盖性一般，其充分性有待全文验证。

## 6. 论文的主要结论与发现
- **主要结论**：当前现有的方法（包括单视频问答模型和多视角模型）无法有效处理多个第一人称视频流，在MA-EgoQA基准上表现不佳。这表明多智能体第一人称视频理解是一个极具挑战性的新方向，需要未来的研究突破。
- **EgoMAS的表现**：作为简单基线，EgoMAS虽然利用了共享记忆和动态检索，但可能仍然远未达到满意效果，从而凸显了问题的难度。

## 7. 优点
- **新颖性突出**：首次正式定义了“多智能体第一人称视频问答”这一任务，填补了研究空白。
- **数据集设计合理**：提供了1.7k条精心设计的问题，覆盖五种与多智能体协作紧密相关的推理类型（社交、任务、心智理论、时间、环境），具有较高的生态效度。
- **基线方法具有启示性**：EgoMAS的共享记忆与智能体动态检索思路为后续研究提供了简单有效的起点。
- **评估客观**：通过对比多种基线，明确指出现有局限，避免了自吹自擂。

## 8. 不足与局限
- **实验细节缺失**：未提供模型训练的具体参数、算力消耗、消融研究等，降低了可复现性和可信度。
- **数据集规模较小**：1.7k问题对于训练/评估深度学习模型可能不足，且未说明视频时长、智能体数量、场景多样性等关键属性。
- **基线选择不透明**：“diverse baselines”未具体列出，可能存在选择性偏差（例如未包括最新的大模型或多模态模型）。
- **应用限制**：当前任务仅针对第一人称视频，且假设智能体固定、场景受限；实际部署中可能面临实时性、隐私、传感器异构等问题，论文未讨论。
- **结论强度有限**：仅基于一个基准得出“现有方法无法处理”的结论，缺乏在其他多智能体数据集上的泛化验证。

（完）
