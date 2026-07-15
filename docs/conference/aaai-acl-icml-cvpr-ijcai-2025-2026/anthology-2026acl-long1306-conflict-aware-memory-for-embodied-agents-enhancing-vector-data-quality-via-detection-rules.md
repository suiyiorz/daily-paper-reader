---
title: "Conflict-Aware Memory for Embodied Agents: Enhancing Vector Data Quality via Detection Rules"
title_zh: 具身智能体的冲突感知记忆：通过检测规则提升向量数据质量
authors: "Kexin Ma, Haotian Wang, Shenglin Chen, Yishuai Cai, Huangyuyu, Ruochun Jin"
date: 2026-07-01
pdf: "https://aclanthology.org/2026.acl-long.1306.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 具身智能体的冲突感知记忆
tldr: 具身智能体利用向量记忆时存在语义冲突导致动作失真。提出冲突检测规则(CDRs)，识别并管理向量知识库中的相似但矛盾的句子和图像。通过纠正索引结构，提升了任务执行的准确性和鲁棒性。
source: ACL-2026-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1306/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 814, \"height\": 643, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1306/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 654, \"height\": 729, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1306/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1657, \"height\": 656, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1306/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1632, \"height\": 816, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1306/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 791, \"height\": 1160, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1306/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1650, \"height\": 857, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1306/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 802, \"height\": 344, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.1306/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 704, \"height\": 563, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1665, \"height\": 958, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 810, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 811, \"height\": 456, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1666, \"height\": 572, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1661, \"height\": 791, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1627, \"height\": 797, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1513, \"height\": 1271, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1576, \"height\": 1192, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1632, \"height\": 1002, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1488, \"height\": 1098, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1756, \"height\": 1411, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1390, \"height\": 722, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1777, \"height\": 895, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1388, \"height\": 721, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.1306/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1399, \"height\": 721, \"label\": \"Table\"}]"
motivation: 具身智能体的向量记忆中存在语义冲突数据影响动作。
method: 设计冲突检测规则，自动识别并处理向量空间中的冲突样本。
result: 在具身任务中减少了动作错误，提高了成功率。
conclusion: 记忆质量对具身智能体性能至关重要，冲突检测有效提升可靠性。
---

## Abstract
Embodied agents have successfully leveraged large language models (LLMs) to better transform human instructions and images into executable task plans. Furthermore, memories of agents can be leveraged to achieve continual self-learning and optimization. However, vector data quality problems emerge in memories when they are projected into vector space, especially in discerning contextually similar but semantically conflicting sentences and highly similar images. This is particularly detrimental to embodied AI as it potentially distorts the robot’s actions. To address this challenge, we propose Conflict Detection Rules (CDRs) to identify and manage data quality issues in vector knowledge bases, which assist in correcting the index structure and further improving the answer quality. Experimental results show that planners with CDRs exceed the basic LLM planner by 15.25% and 14.25% in grammatical accuracy (GA) and interpretation accuracy (IA) on average, respectively. Moreover, the entire workflow has been successfully integrated into various scenarios, demonstrating its practical applicability and robustness in the real world.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：具身智能体（embodied agents）利用大语言模型（LLM）作为规划器，并结合向量数据库存储记忆，实现持续自主学习和优化。然而，向量记忆在投影到高维空间时，存在**数据质量问题**——上下文相似、语义矛盾的句子（如“打开大厅灯”与“关闭大厅灯”）或高相似度的图像，其嵌入向量极度接近，导致检索时引入冲突上下文，进而误导LLM生成错误的动作指令，这对具身AI损害极大。
- **背景**：现有RAG（检索增强生成）方法未关注向量数据的质量，简单检索可能加剧冲突。因此，亟需一种机制来检测并管理向量知识库中的此类数据不一致性，提升记忆可靠性和规划准确性。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：提出**冲突检测规则（Conflict Detection Rules, CDRs）**，基于句子成分（对象和动作）的比较以及嵌入向量的相似度，自动识别向量空间中的语义冲突，并通过修剪索引结构（切断冲突向量之间的边）来净化知识库，保留一致上下文。
- **关键技术细节**：
  - **定义**：自然语言句子可分解为动作对象 `s[o]` 和操作 `s[p]`。向量相似度函数 `VecSim(v1, v2)` 与阈值θ比较。定义谓词如 `s1[pi] ≠ s2[pi] ∧ s1[oi] = s2[oi] ∧ VecSim(v1, v2) → C(s1, s2)`，表示对象相同、操作不同且向量相似时，存在冲突。
  - **冲突检测**：使用LLM（如GPT-4o）作为提取器和比较器，根据CDR自然语言描述，提取查询和检索到的上下文的动作成分，并判断是否存在冲突。
  - **冲突解决**：对检测出的冲突，修剪HNSW图索引中冲突节点间的边；对于多个上下文，若存在“见证者”句子（如`sk`与`s1`一致，与`s2`冲突），则切断`s1`与`s2`的边。
  - **整体框架**（见图3）：① 知识预处理（图像用多模态LLM总结为文本）→ ② 向量索引构建（HNSW）→ ③ 检索 → ④ CDR判断 → ⑤ 索引修剪 → ⑥ 保留的上下文+固定示例输入LLM生成答案 → ⑦ 动作执行并更新知识库。

## 3. 实验设计
- **数据集与场景**：基于VirtualHome和ALFRED基准构建四个真实服务场景：**Café、Canteen、Kitchen、Lounge**。每个场景200条数据，其中50%包含图像信息，其余为纯文本。每条数据为 `[Information-Goal]` 对，Goal由GPT-4o初生成并经人工校验。
- **Benchmark与指标**：
  - **指标**：**语法准确率（GA）** 和**解释准确率（IA）**，分别评估输出目标状态的语法正确性和与真实值匹配程度。
  - **对比的基线方法**：
    - **basic LLM planner**：无记忆，仅用固定示例。
    - **RAG/mRAG LLM planner**：简单检索上下文（纯文本或多模态）。
    - **CDRs LLM planner**：本方法。
    - **SOTA方法**：SelfRAG、SuRe（无冲突检测）。
    - **LLM Filter**：直接用LLM判断冲突，而非显式规则。
- **使用的语言模型**：大参数模型（GPT-4o、Claude 3.5 Sonnet、GPT-3.5-turbo），小参数模型（Llama2-7b、Llama3-8b、bloomz-7b1、falcon-7b、gemma-2-9b-it、Qwen2.5-7b），多模态模型（BLIP-2、LLaVA-Llama3-8b、MiniGPT-4）。

## 4. 资源与算力
- 论文**未明确说明具体GPU型号、数量或训练时长**。使用检索器和向量数据库（Faiss）以及LLM API（GPT-4o等），模型推理依赖云端API或本地小模型，但未提供详细硬件配置。冲突检测过程需调用LLM，会产生额外API成本。

## 5. 实验数量与充分性
- **实验组数**：涵盖了**4个场景 × 多种LLM × 3种规划器**的全面对比（表1、表11、表12），包括纯文本和多模态；对固定示例数量t（1-5）进行消融（图5、表13-15）；对比了RAG vs basic的孤立效果（图6）；与SelfRAG、SuRe对比（图7）；与LLM Filter对比（表2）；进行了噪声鲁棒性测试（表3）。
- **充分性评估**：实验设计**较充分**，覆盖了不同模型规模、不同场景、不同RAG策略及消融分析。但数据集较小（每场景200条），且未在真实机器人上测试（仅模拟器），可能存在场景代表性不足的风险。重复10次取平均，保证了统计稳定性，但未报告方差或显著性检验。

## 6. 论文的主要结论与发现
- **CDRs显著优于所有基线**：相比basic LLM planner，GA和IA平均提升15.25%和14.25%；相比普通mRAG planner，提升14.00%和11.25%。
- **小模型受益更大**：在小参数LLM（如Llama2-7b、bloomz-7b1）上，CDRs带来的增益最显著（GA最高提升45%+），弥补了其推理能力不足。
- **冲突检测是必要的**：普通RAG有时甚至降低性能（如GPT-4o在部分场景GA下降），说明低质量检索有害；CDRs通过修剪冲突缓解此问题。
- **鲁棒性**：在混合噪声（10%无关+10%矛盾）下，CDRs仍保持92% GA，而RAG降至63%。
- **可扩展性**：成功集成到四个服务场景，展示了实际适用性。

## 7. 优点
- **方法简洁且可解释**：基于规则的冲突检测（CDRs）清晰定义，易于理解和扩展，可灵活集成到任意LLM规划器。
- **创新性**：首次关注向量记忆中的数据质量问题，并提出显式管理机制，以前的工作忽略了向量-语义的错位。
- **实验全面**：覆盖多种模型规模、模态、RAG变体，并进行了消融和鲁棒性测试，论证充分。
- **实际部署验证**：在模拟器环境（MO-vln）中实现了端到端机器人任务执行，展示了实用性。

## 8. 不足与局限
- **小模型准确率仍较低**：即使使用CDRs，小LLM（如Llama2-7b、BLIP-2）的IA仍低于60%，规则+小模型的能力上限有限。
- **额外时延与成本**：冲突检测需调用LLM，会引入额外延迟和API费用，对实时任务不友好。
- **规则依赖LLM提取成分**：CDR执行依赖于LLM（GPT-4o）的提取和比较能力，若LLM自身判断错误，则规则失效，引入级联风险。
- **数据集规模有限**：每个场景仅200条，且为合成数据（基于模拟器），与真实复杂环境的分布可能有差距。
- **未跨领域泛化测试**：仅在四种服务场景验证，未在开放域或不同机器人平台上测试，通用性待检验。
- **可复现性**：代码存储于GitHub，但未公开具体实验环境配置和随机种子设定细节，可能影响完全复现。

（完）
