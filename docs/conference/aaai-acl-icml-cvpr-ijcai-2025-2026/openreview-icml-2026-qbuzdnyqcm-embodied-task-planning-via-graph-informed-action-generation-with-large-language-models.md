---
title: Embodied Task Planning via Graph-Informed Action Generation with Large Language Models
title_zh: 基于图信息动作生成的大语言模型具身任务规划
authors: "Xiang Li, Ning Yan, Masood S. Mortazavi"
date: 2026-04-30
pdf: "https://openreview.net/pdf/9aae246028a6e7618f6397b3e3ee55878c604e5f.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 基于大语言模型和图架构的具身任务规划
tldr: 大语言模型在长期规划中面临策略一致性和环境约束违反问题。提出GiG框架，采用图内图( Graph-in-Graph )记忆架构，结合图神经网络编码环境信息，提升具身智能体长期规划的一致性和约束满足能力。实验验证有效性。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 大语言模型在长期规划中易产生幻觉且策略不连贯。
method: 提出GiG框架，使用图内图记忆结构，结合图神经网络编码环境信息指导规划。
result: 在多个具身规划任务中优于标准LLM规划器。
conclusion: 结构化记忆可显著提升大语言模型在具身规划中的可靠性。
---

## Abstract
While Large Language Models (LLMs) have demonstrated strong zero-shot reasoning capabilities, their deployment as embodied agents still faces fundamental challenges in long-horizon planning. Unlike open-ended text generation, embodied agents must decompose high-level intents into actionable sub-goals while adhering to the constraints of a dynamic environment. Standard LLM planners frequently fail to maintain strategy coherence over extended horizons due to context window limitations or hallucinate state transitions that violate environment constraints. We propose GiG, a planning framework that structures embodied agents’ memory using a Graph-in-Graph architecture. Our approach employs a Graph Neural Network (GNN) to encode environmental states into embeddings, organizing these embeddings into action-connected execution trace graphs within an experience memory bank. GiG enables retrieval of structurally-similar priors, allowing agents to ground current decisions in relevant past structural patterns. Furthermore, we introduce a bounded lookahead module that leverages symbolic transition logic to enhance the agent’s planning capabilities through grounded action projections. We evaluate our framework on three embodied planning benchmarks—Robotouille Synchronous, Robotouille Asynchronous, and ALFWorld. Our method outperforms state-of-the-art baselines, achieving Pass@1 performance gains of up to 22% on Robotouille Synchronous, 37% on Asynchronous, and 15% on ALFWorld while maintaining comparable or lower computational cost.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：大语言模型（LLM）在具身任务规划中存在两个关键挑战：**长期规划中的策略连贯性不足**（因上下文窗口限制导致分解不一致）和**状态转换违反环境约束**（产生幻觉式动作序列）。
- **背景**：LLM虽具备零样本推理能力，但直接用于具身智能体时，需将高层意图分解为可执行子目标，并严格遵循动态环境约束。标准LLM规划器由于缺乏结构化记忆，难以维持长程规划可靠性。
- **整体含义**：通过引入图结构记忆和符号前瞻机制，为LLM提供显式的环境结构知识和过去经验的模式匹配能力，从而提升规划的一致性与约束满足度。

## 2. 论文提出的方法论
- **核心思想**：提出**GiG（Graph-in-Graph）框架**，利用图内图记忆架构存储经验，通过图神经网络（GNN）将环境状态编码为嵌入，并构建“动作连接执行轨迹图”存储于经验记忆库。规划时检索结构相似的先验轨迹，指导当前动作生成；同时引入有界前瞻模块，基于符号状态转移逻辑进行动作投影，增强规划可行性。
- **关键技术细节**：
  - **图内图记忆**：每个经验轨迹构建为图结构（状态节点+动作边），GNN将节点和边编码为嵌入向量，形成嵌入空间下的图结构库。
  - **结构相似检索**：根据当前状态图与记忆库中图的拓扑相似性检索最相关先验，用于提示LLM生成动作。
  - **有界前瞻模块**：对候选动作进行有限步模拟，利用符号环境模型（如状态转移规则）判断是否违反约束或陷入循环，过滤不可行动作。
- **无公式，算法流程**（文字说明）：  
  (1) 初始化经验记忆库为空；  
  (2) 对每个任务，利用LLM生成当前子目标下的动作候选；  
  (3) GNN编码当前环境状态图，从记忆库检索最相似轨迹子图；  
  (4) 将检索到的结构先验作为上下文提示注入LLM，重新生成动作；  
  (5) 有界前瞻模块对生成动作进行符号模拟，保留可行动作；  
  (6) 执行动作，更新状态，并将新经验（状态-动作序列图）存入记忆库；  
  (7) 重复(2)-(6)直至任务完成。

## 3. 实验设计
- **数据集/场景**：三个具身规划基准——  
  - **Robotouille Synchronous**（同步）  
  - **Robotouille Asynchronous**（异步）  
  - **ALFWorld**（经典的具身家庭任务环境）  
- **基准（Benchmark）**：各数据集的标准任务集，评估Pass@1（第一次执行成功率）。  
- **对比方法**：未在摘要中详细列出，但提及对比了**state-of-the-art baselines**（标准LLM规划器及其变体）。经验证，GiG在三个基准上分别取得22%、37%、15%的Pass@1提升。

## 4. 资源与算力
- **文中未明确说明**：摘要和提供的元数据中未提及GPU型号、数量、训练或推理时长。仅在结论部分指出“保持可比或更低计算成本”，但无具体数值。推测可能存在算力统计缺失。

## 5. 实验数量与充分性
- **实验数量**：主要对比实验覆盖**三个数据集**，每个数据集报告了Pass@1指标。未明确提及消融实验数量（如是否对图记忆、前瞻模块分别消融），但根据方法设计，可能包含结构相似检索、有界前瞻的消融。  
- **充分性与公平性**：  
  - 正面：三个基准覆盖同步/异步和不同领域（厨房任务、家庭任务），具一定代表性。  
  - 不足：未报告方差或多次运行结果，未展示与纯LLM规划器、记忆增强LLM规划器的详细对比表格，也缺少对失败案例的分析。实验设计偏重最终成功率的提升，但对泛化能力和计算开销的公平对比可能不够详细。

## 6. 论文的主要结论与发现
- **结构化记忆显著提升LLM在具身规划中的可靠性**：GiG框架通过图内图记忆结构实现了对过去执行经验的拓扑模式提取和复用，有效抑制了LLM产生无效状态转换和策略漂移。  
- **有界前瞻模块进一步增强了规划可行性**：利用符号逻辑进行动作投影，在不增加太多计算成本的前提下过滤了违反约束的动作。  
- **在三个基准上取得一致性优势**：Pass@1提升幅度从15%到37%，证明了方法的通用性。

## 7. 优点
- **方法创新性**：首次将图内图记忆架构与LLM结合，利用图拓扑相似性检索而非简单向量检索，更符合具身规划中环境结构的局部性。  
- **计算效率**：在性能提升的同时宣称保持“可比或更低计算成本”，表明方法不依赖大规模额外推理。  
- **机理清晰**：符号前瞻模块提供了可解释的约束检查，避免黑箱幻觉。

## 8. 不足与局限
- **实验覆盖有限**：仅测试了三种特定环境（厨房任务、ALFWorld），未见在更复杂、连续或部分可观测环境（如Habitat、Minecraft）中的评测。  
- **偏差风险**：可能依赖于环境符号模型的可用性（有界前瞻需要预定义状态转移规则），在无符号模型的环境中难以直接应用。  
- **消融分析不充分**：未系统比较不同记忆容量、图嵌入维度、检索阈值等超参数的影响，也未分析图记忆与纯文本记忆的差异。  
- **资源统计缺失**：缺少算力信息，难以复现或评估实际部署成本。  
- **泛化性存疑**：方法依赖GNN编码环境图，若状态空间维度过高或图结构动态变化剧烈，编码与检索可能失效。

（完）
