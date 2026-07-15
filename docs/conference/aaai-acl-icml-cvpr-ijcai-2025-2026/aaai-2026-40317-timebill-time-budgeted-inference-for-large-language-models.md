---
title: "TimeBill: Time-Budgeted Inference for Large Language Models"
title_zh: TimeBill：面向大语言模型的时间预算推理框架
authors: "Qi Fan, An Zou, Yehan Ma"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40317/44278"
tags: ["query:ad"]
score: 7.0
evidence: 用于机器人/自动驾驶/具身智能的LLM时间预算推理
tldr: 该论文聚焦大语言模型在时间关键系统（如机器人、自动驾驶、具身智能）中的实时推理要求，提出TimeBill框架。通过自适应KV缓存剔除策略，保证在给定时间预算内完成高质量推理。实验表明该方法在多种任务上平衡了推理速度与响应质量，为LLM在实时决策系统中的应用提供了关键基础设施。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-40317/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 690, \"height\": 409, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-40317/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 824, \"height\": 714, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-40317/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 771, \"height\": 367, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-40317/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 752, \"height\": 269, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-40317/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 782, \"height\": 260, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-40317/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 759, \"height\": 330, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-40317/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 757, \"height\": 653, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-40317/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 753, \"height\": 287, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-40317/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 836, \"height\": 303, \"label\": \"Table\"}]"
motivation: 大语言模型自回归生成时间不可控，无法满足实时系统要求。
method: 提出自适应KV缓存剔除策略，根据时间预算动态调整推理过程。
result: 在机器人控制、自动驾驶等任务中实现时间约束下的有效推理。
conclusion: 该框架为LLM在实时系统中的部署提供了实用解决方案。
---

## Abstract
Large Language Models (LLMs) are increasingly deployed in time-critical systems, such as robotics, autonomous driving, embodied intelligence, and industrial automation, where generating accurate responses within a given time budget is crucial for decision-making, control, or safety-critical tasks. However, the auto-regressive generation process of LLMs makes it challenging to model and estimate the end-to-end execution time. Furthermore, existing efficient inference methods based on a fixed key-value (KV) cache eviction ratio struggle to adapt to varying tasks with diverse time budgets, where an improper eviction ratio may lead to incomplete inference or a drop in response performance. In this paper, we propose TimeBill, a novel time-budgeted inference framework for LLMs that balances the inference efficiency and response performance. To be more specific, we propose a fine-grained response length predictor (RLP) and an execution time estimator (ETE) to accurately predict the end-to-end execution time of LLMs. Following this, we develop a time-budgeted efficient inference approach that adaptively adjusts the KV cache eviction ratio based on execution time prediction and the given time budget. Finally, through extensive experiments, we demonstrate the advantages of TimeBill in improving task completion rate and maintaining response performance under various overrun strategies.

---

## 论文详细总结（自动生成）

# 论文总结：TimeBill：面向大语言模型的时间预算推理框架

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：大语言模型（LLM）越来越多地被部署在时间关键型系统中，如机器人、自动驾驶、具身智能和工业自动化。这些场景要求LLM在给定的时间预算内完成推理并生成准确响应，以满足决策、控制或安全关键任务的需求。然而，LLM的自回归生成过程导致端到端执行时间高度不确定，难以建模和预估。
- **问题挑战**：现有高效推理方法（如KV cache固定比例剔除）无法适应不同任务和时间预算的变化——剔除比例过高会损害响应质量，过低则导致超时。因此，需要一种能在运行时动态调整推理策略、在时间约束下最大化响应性能的方法。
- **整体含义**：TimeBill框架首次系统性地将时间预算约束引入LLM推理，提出端到端执行时间预测与自适应KV cache剔除相结合的方法，为LLM在实时系统中的可靠部署提供了理论基础和实用方案。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将时间预算推理问题形式化为一个优化问题，目标是在满足硬实时截止时间约束的前提下，通过最小化KV cache剔除比例来最大化响应性能。框架包含三个关键组件：细粒度响应长度预测器（RLP）、工作负载引导的执行时间估计器（ETE）、以及时间预算高效推理机制。
- **关键技术细节**：
  - **响应长度预测器（RLP）**：基于小型语言模型（SLM，如Qwen2.5-0.5B）构建，将预测视为分类任务，输出响应长度所在的桶（bucket）。采用知识蒸馏对齐目标LLM，桶大小B可调（默认16，对应512个桶），后处理截断至最大生成长度N_max。
  - **执行时间估计器（ETE）**：结合基于FLOPs的解析建模和基于profiling的数据拟合。预填充阶段执行时间建模为输入长度N_x的二次函数；解码步骤执行时间建模为KV cache长度N_kv的线性函数。通过最小二乘法拟合系数，并引入悲观因子k（默认5）计算最坏情况执行时间（WCET）。
  - **时间预算推理机制**：利用预测的WCET和给定时间预算T，求解最小化α的优化问题，得到最优KV cache剔除比例α*。α*的计算公式为闭式解，考虑了预测器开销和最大剔除比例约束。系统部署时，预测器预计算可与预填充阶段并行，通过提示压缩确保预测时间不超过预填充时间。
- **公式/算法流程**：
  - 预测响应长度：\( \hat{N} = \min(N_{\max}, \text{Predict}(x) \cdot B) \)
  - 预填充时间：\( \hat{t}_{\text{prefill}}(x) = a N_x^2 + b N_x + c \)
  - 解码步骤时间：\( \hat{t}_i^{\text{dec}}(x, \alpha) = p((1-\alpha)N_x + i-1) + q \)
  - WCET：\( \hat{t}_{\text{WCET}}(x, \alpha, k\hat{N}) = \hat{t}_{\text{prefill}} + \sum_{i=1}^{k\hat{N}-1} \hat{t}_i^{\text{dec}} \)
  - 最优α：\( \alpha^* = \min(\alpha_{\max}, 1 - \frac{T - \hat{t}_{\text{prefill}} - t_{\text{Predict}}}{p N_x (\hat{N}_W-1)} + \frac{\hat{N}_W-2}{2p N_x} + \frac{q}{p N_x}) \)

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：
  - 训练RLP：使用Arena-Human-Preference-100k数据集中的提示，避免在测试集上训练。
  - 测试：LongBench（长上下文多任务基准），使用官方评估指标（F1、ROUGE-L、Levenshtein距离）。
- **基准方法**：
  - Vanilla（直接推理）
  - 固定KV cache剔除比例（α=25%, 50%, 75%, 95%）
  - AWQ（4位权重量化）
  - TimeBill（本文方法）
- **超限策略**：采用两种常见硬实时超限策略——Kill（终止当前任务，响应视为空）和Skip-Next（跳过后续任务直至当前完成）。
- **时间预算**：从5秒到10秒，每1秒一个间隔，共6个不同预算。

## 4. 资源与算力

- **硬件**：一台配备Intel(R) Xeon(R) Platinum 8350C CPU和NVIDIA A40 GPU的服务器。
- **模型**：目标LLM为Qwen2.5-7B-Instruct（上下文32,768 tokens，最大生成8,192 tokens）；RLP基于Qwen2.5-0.5B-Instruct。
- **训练/profile**：RLP训练使用Arena-Human-Preference-100k数据集；ETE通过profiling采样N_x和N_kv范围0~32,768的实测时间进行拟合。论文未明确说明训练时长或GPU数量，仅提及使用单张A40。

## 5. 实验数量与充分性

- **实验组数**：
  - RLP性能比较：对比3种Predict(·)变体（不同桶数128/256/512）及回归建模，以及两个BERT基线（ProxyModel、S3），共6种设置。
  - ETE预测精度：预填充阶段和解码步骤的MAPE评估，以及端到端时间预测散点图（α=0, N_max=64）。
  - 时间预算实验：6个时间预算 × 2种超限策略 × 5种方法（Vanilla、4种固定α、AWQ、TimeBill），共约60个条件组合。
  - 悲观因子k影响：8个k值（1~8）在T=5s、Kill策略下的实验。
  - 此外还报告了消融分析（如不同桶数的影响，但未单独列出表格，仅在RLP性能表中体现）。
- **充分性**：实验覆盖了响应预测、时间估计、端到端性能、参数敏感性等多个维度，对比基线包含离线（AWQ）和在线（固定剔除）方法，较为全面。但缺少与其他自适应剔除方法（如基于注意力分数的动态剔除）的直接对比，且仅在单模型（Qwen2.5-7B）和单数据集（LongBench）上验证，泛化性受限。

## 6. 论文的主要结论与发现

- RLP方面：基于SLM的512桶分类器MAE为42.71，显著优于BERT基线的~108和回归建模的64.21，R²达0.723。
- ETE方面：预填充阶段MAPE为1.22%，解码步骤MAPE为1.69%，WCET能有效提供上界。
- 时间预算推理：在所有时间预算下，TimeBill的平均响应性能得分均最高，同时任务完成率与α=95%固定剔除相当。例如T=5s时，TimeBill得分超过其他方法20%以上；随着预算增加，优势持续。
- 悲观因子k：k在1~5时增加完成率和平均得分，k>5时过大的剔除比例导致得分下降，k=5为较优平衡点。
- 总体：TimeBill在满足硬实时约束的同时，能显著提升响应质量，验证了自适应剔除策略的有效性。

## 7. 优点：方法或实验设计亮点

- **方法论创新**：首次将时间预算约束引入LLM推理优化，构建了从预测到配置的闭环框架，解决传统固定策略的适应性问题。
- **预测精度高**：基于SLM的细粒度分类器结合知识蒸馏，实现与目标LLM对齐，精度远超BERT基线；FLOPs+Profiling的混合建模兼具理论解释性和实际准确性。
- **闭式最优解**：将优化问题转化为凸优化，得到α的解析表达式，推理开销可忽略，适合实时系统。
- **系统级设计**：考虑预测器与预填充的并行执行，并集成提示压缩确保实时性；支持不同时间预算动态切换。
- **实验设计全面**：覆盖多种时间预算、两种超限策略、多个基线，并探讨了悲观因子的影响，提供了工程实践指导。

## 8. 不足与局限

- **模型泛化性**：仅测试了Qwen2.5-7B模型和LongBench数据集，未验证在更大模型（如70B）、不同架构（如Llama 2/3）或其他领域（如代码生成、数学推理）上的效果。
- **基线对比不足**：未与近期自适应KV剔除方法（如H2O、StreamingLLM的动态版本、或基于注意力分数的剔除）对比，也未与投机解码等加速方法结合。
- **资源描述不完整**：未明确训练RLP所需算力（时长、GPU数量），ETE profiling的采样规模也未给出。
- **悲观因子选定主观**：k缺省值5虽合理但缺乏理论证明，且实验仅在同一时间预算下测试，未分析不同预算下的最优k。
- **安全假设**：假设响应性能与剔除比例单调非增，但实际中某些任务可能对特定保留token更敏感，极端剔除比例下的性能下降可能不是单调的。
- **未考虑多轮对话**：框架针对单轮推理设计，未讨论多轮对话中历史上下文对时间预算的影响。

（完）
