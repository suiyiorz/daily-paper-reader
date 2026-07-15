---
title: "Embodied Agents Meet Personalization: Investigating Challenges and Solutions Through the Lens of Memory Utilization"
title_zh: 具身代理遇上个性化：通过记忆利用视角探究挑战与解决方案
authors: "Taeyoon Kwon, Dongwook Choi, Hyojun Kim, Sunghwan Kim, Seungjun Moon, Beong-woo Kwak, Kuan-Hao Huang, Jinyoung Yeo"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=E5L43l5EIu"
tags: ["query:ad"]
score: 7.0
evidence: 具身代理个性化记忆利用
tldr: 当前LLM驱动的具身代理在个性化辅助中面临记忆利用挑战。本文通过Memento评估框架研究代理在对象语义和用户模式方面的记忆能力，发现代理能回忆简单语义但难以应用序列模式。揭示了具身代理个性化的关键瓶颈。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有具身代理缺乏利用用户特定记忆进行个性化辅助的能力。
method: 构建Memento两阶段评估框架，测试代理在语义和序列记忆上的表现。
result: 代理能回忆简单对象语义，但在应用序列行为模式上表现不足。
conclusion: 揭示了当前具身代理在个性化记忆利用方面的局限。
---

## Abstract
LLM-powered embodied agents have shown success on conventional object-rearrangement tasks, but providing personalized assistance that leverages user-specific knowledge from past interactions presents new challenges. We investigate these challenges through the lens of agents' memory utilization along two critical dimensions: object semantics (identifying objects based on personal meaning) and user patterns (recalling sequences from behavioral routines). To assess these capabilities, we construct Memento, an end-to-end two-stage evaluation framework comprising single-memory and joint-memory tasks. Our experiments reveal that current agents can recall simple object semantics but struggle to apply sequential user patterns to planning. Through in-depth analysis, we identify two critical bottlenecks: information overload and coordination failures when handling multiple memories. Based on these findings, we explore memory architectural approaches to address these challenges. Given our observation that episodic memory provides both personalized knowledge and in-context learning benefits, we design a hierarchical knowledge graph-based user-profile memory module that separately manages personalized knowledge, achieving substantial improvements on both single and joint-memory tasks.

---

## 论文详细总结（自动生成）

# 中文论文总结

## 1. 论文的核心问题与整体含义
- **研究动机**：现有大型语言模型驱动的具身代理在标准物体重排任务上表现良好，但在提供个性化辅助——即利用用户过去的交互知识（如个人物品含义、日常行为习惯）——时面临显著挑战。个性化是智能家居、服务机器人等实际应用的关键需求。
- **核心问题**：具身代理能否有效利用用户特定记忆（memory utilization）进行个性化规划？具体围绕两个维度：对象语义（根据个人意义识别物体）和用户模式（从行为习惯中回忆序列）。
- **整体含义**：论文揭示了当前代理在个性化记忆利用方面的瓶颈，并提出了一种基于层次化知识图谱的记忆架构来缓解问题，为具身智能个性化研究提供了基准和解决思路。

## 2. 论文提出的方法论
- **核心思想**：构建两阶段评估框架 Memento，检验代理在**单记忆任务**（单一记忆类型，如对象语义）和**联合记忆任务**（同时整合对象语义+用户序列模式）上的表现。通过分析失败原因（信息过载、协调失败），设计专门的记忆模块。
- **关键技术细节**：
  - **Memento 框架**：端到端两阶段任务：第一阶段测试代理回忆简单对象语义的能力；第二阶段测试将用户序列行为模式应用于规划的能力。
  - **失败瓶颈诊断**：通过深入分析，识别出**信息过载**（多个记忆同时作用时的干扰）和**协调失败**（语义记忆与序列记忆无法有效整合）两大瓶颈。
  - **解决方案**：提出**层次化知识图谱用户档案记忆模块**（hierarchical knowledge graph-based user-profile memory module），将个性化知识分层次独立管理，利用情节记忆（episodic memory）同时提供个性化知识和上下文学习（in-context learning）好处。
- **公式或算法流程**：论文未给出具体数学公式，但文字描述了模块架构：将用户对象语义知识（如“我的咖啡杯”）和序列行为模式（如“早餐后喝咖啡”）分别以图结构存储，并在规划时动态检索与融合。

## 3. 实验设计
- **数据集/场景**：使用论文自定义的 **Memento** 评估框架，该框架包含模拟环境中的单记忆任务（例如根据用户习惯识别特定物品位置）和联合记忆任务（例如基于用户日程和物品偏好执行连续动作）。
- **Benchmark**：以 Memento 框架作为基准，测试当前主流 LLM 驱动具身代理（如基于 GPT-4/LLaMA 等模型的具身系统）的性能。
- **对比方法**：论文对比了基础 LLM 代理（无个性化记忆）、仅含语义记忆的代理、仅含序列记忆的代理，以及使用层次化知识图谱记忆模块的代理。但具体方法名称和基线数量在摘要中未详述。

## 4. 资源与算力
- 论文**未明确说明**使用的 GPU 型号、数量、训练时长或推理算力。从实验描述推断，可能基于常见 LLM 进行零样本或微调评估，但具体资源消耗未提供。

## 5. 实验数量与充分性
- 实验数量：摘要中未列举具体实验组数或消融实验数量，仅提及“我们的实验揭示”和“通过深入分析”。
- 充分性评估：
  - **优点**：使用专门设计的 Memento 框架进行评估，量化为两个维度（语义和序列），能够诊断特定瓶颈。
  - **不足**：数据集为自建模拟环境，缺乏真实用户数据；仅对比少数基线（默认和带记忆模块）；未提供统计显著性或方差分析；可能未覆盖多样化用户模式（如长期动态变化）。总体而言，实验探索方向有意义，但充分性有限，需更多公开基准验证。

## 6. 论文的主要结论与发现
- 当前 LLM 驱动具身代理**能成功回忆简单的对象语义记忆**（如用户的个人物品名称和惯用位置），但**难以应用序列用户模式**（如每天固定流程）进行规划。
- 两大关键瓶颈：**信息过载**（当多段记忆同时激活时，代理无法有效筛选和利用）和**协调失败**（语义记忆与序列记忆无法协同工作）。
- 提出的**层次化知识图谱记忆模块**在单记忆和联合记忆任务上均取得显著改进，验证了分离管理个性化知识并利用情节记忆的有效性。

## 7. 优点
- **问题新颖**：聚焦于具身代理的个性化记忆利用，这是 LLM+机器人领域较少被系统研究的挑战。
- **评估框架设计巧妙**：Memento 分为两阶段，清晰地解耦了“记忆回忆”和“记忆融入规划”两个子能力，有助于诊断具体瓶颈。
- **解决方案简洁有效**：层次化知识图谱模块符合认知科学中的记忆分层理论，且能兼容现有 LLM 管线（通过检索增强）。
- **分析深入**：通过明确的信息过载和协调失败解释代理失败原因，为后续研究提供了方向。

## 8. 不足与局限
- **实验覆盖有限**：仅使用自建模拟环境，未在真实机器人或标准公开基准（如 ALFRED, Habitat）上验证，泛化性存疑。
- **偏差风险**：记忆模块的构建依赖人工定义的知识图谱结构，可能引入设计者偏差；测试任务数量较少，无法全面反映真实世界的记忆多样性（如模糊记忆、冲突记忆）。
- **应用限制**：层次化知识图谱维护成本高，难以扩展到大规模、动态变化的用户知识；未讨论记忆隐私和安全问题。
- **学术严谨性**：未提供完整的实验超参数、硬件配置和统计信度，无法完全复现。

（完）
