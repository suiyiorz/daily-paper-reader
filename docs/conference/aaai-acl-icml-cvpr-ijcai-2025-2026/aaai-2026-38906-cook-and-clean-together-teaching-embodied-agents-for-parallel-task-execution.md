---
title: "Cook and Clean Together: Teaching Embodied Agents for Parallel Task Execution"
title_zh: "一起烹饪和清洁: 教授化身智能体进行并行任务执行"
authors: "Dingkang Liang, Cheng Zhang, Xiaopeng Xu, Jianzhong Ju, Zhenbo Luo, Xiang Bai"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38906/42868"
tags: ["query:ad"]
score: 8.0
evidence: 教授化身智能体进行并行任务执行
tldr: 化身智能体需要根据自然语言指令在3D世界中高效执行任务。本文提出基于运筹学知识的3D实任务调度（OKS3D），要求智能体生成既考虑语言理解又优化效率的分步骤调度方案。构建的基准数据集和实验表明，该方法能生成更优的并行任务执行计划，体现了运筹学在化身AI中的价值。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38906/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 809, \"height\": 491, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38906/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1804, \"height\": 875, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38906/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 876, \"height\": 364, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38906/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1796, \"height\": 1075, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38906/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 852, \"height\": 419, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38906/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1808, \"height\": 714, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38906/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1827, \"height\": 371, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38906/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1810, \"height\": 641, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38906/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 856, \"height\": 318, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38906/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 864, \"height\": 318, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38906/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 803, \"height\": 566, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38906/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 846, \"height\": 567, \"label\": \"Table\"}]"
motivation: 现有任务规划数据集过于简化，缺乏运筹学优化和3D实现。
method: 提出OKS3D任务，结合语言理解、3D实现和运筹学优化，生成高效调度方案。
result: 在构建的数据集上，OKS3D方法生成了更高效的并行任务执行计划。
conclusion: 运筹学知识的引入显著提升了化身智能体的任务调度效率。
---

## Abstract
Task scheduling has become increasingly critical for embodied AI, where agents need to follow natural language instructions and execute actions efficiently in 3D physical worlds. Existing datasets for task planning in 3D environments often simplify the problem, lacking operations research knowledge for task scheduling and 3D grounding for real-world applications. In this work, we propose Operations Research Knowledge-based 3D Grounded Task Scheduling (OKS3D), a new task that requires synerization of language understanding, 3D grounding, and efficiency optimization for embodied agents. OKS3D reflects real-world demands by requiring agents to generate efficient, step-by-step schedules that are grounded in 3D space. To facilitate research on OKS3D, we construct a large-scale dataset called OKS3D-60K, comprising 60K tasks across 4K real-world scenes. Furthermore, we propose GRANT, an embodied multi-modal large language model equipped with a simple yet effective scheduling token mechanism to generate efficient task schedules and grounded actions. Extensive experiments on the OKS3D-60K dataset validate the effectiveness of GRANT across language understanding, 3D grounding, and scheduling efficiency.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- 当前**化身智能体任务规划**领域存在两大关键缺陷：
  - **缺乏运筹学（Operations Research, OR）知识**：现有数据集和模型只要求生成“看似合理”的动作序列，忽略了通过子任务并行执行来优化总完成时间的需求（例如在微波炉加热期间去做其他任务）。
  - **缺乏3D空间接地**：大多数工作退化为纯文本问答，没有将每个步骤与目标物体的3D位置（如包围盒或点云掩码）显式关联，无法支持下游的导航与操作。
- 为此，作者提出**基于运筹学知识的3D接地任务调度（ORS3D）**，要求智能体在理解自然语言指令、优化时间效率的同时，输出每个步骤的3D物体位置。
- 构建了大规模数据集**ORS3D-60K**（60,825个复合任务，覆盖4,376个真实室内场景），并设计模型**GRANT**来同时处理语言理解、效率优化和空间感知。

## 2. 方法论：核心思想、关键技术细节、算法流程
- **整体框架**：GRANT是一个多模态大语言模型（MLLM），包含四个组件：
  1. **3D场景编码器**：稀疏卷积提取点云特征 → 固定数量的场景查询（K=128）通过交叉注意力生成场景token。
  2. **大语言模型（LLM）**：采用Tiny-Vicuna-1B，通过LoRA微调，处理多模态输入（场景token + 文本token），并输出调度、动作描述和接地标记。
  3. **调度令牌机制（Scheduling Token Mechanism, STM）**：
     - 引入特殊标记 `<SCH>`，连接 LLM 与外部优化求解器。
     - LLM 首先输出子任务类型（可并行/不可并行）和预期时间，构成约束 I = {(τᵢ, cᵢ, tᵢ)}。
     - 外部求解器使用**动态规划**解决0-1背包问题（以并行子任务的等待时间作为容量，不可并行子任务的时长作为物品重量和收益），返回最优子任务调度列表 S*。
     - S* 通过模板转换为自然语言，重新注入 LLM 指导后续步骤生成。
  4. **3D接地头**：引入 `<GRU>` 标记，将其嵌入通过 MLP 映射为查询向量 gⱼ，与场景查询 ˆqᵢ 计算余弦相似度，选择最匹配的场景查询，再与点云特征点积并经过 sigmoid 产生物体点掩码。
- **训练目标**：next-token预测（交叉熵损失） + 接地焦点损失（sigmoid focal loss）。

## 3. 实验设计
- **数据集与场景**：ORS3D-60K 测试集（子任务数4~7，预期时间呈长尾分布）。
- **基线方法**：
  - 商业LLM/MLLM（仅文本输入）：Gemini-2.0-flash、DeepSeek-R1、GPT-4o。
  - 基于物体级方法：3D-VisTA、PQ3D（依赖Mask3D检测器），LEO（替换LLM为Vicuna-1B）。
  - 场景级方法：Grounded 3D LLM。
- **评估指标**：
  - 语言质量：METEOR、ROUGE。
  - 调度效率：时间效率（TE），公式为 (T_worst - T_pred)/(T_worst - T_opt)×100%。
  - 3D接地：AP@25%检测精度。
  - 总体得分：四个指标的均值（不支持者计0）。

## 4. 资源与算力
- **显式说明**：使用 8×RTX 4090 GPU。
- **训练配置**：batch size 1，训练10个epoch，AdamW优化器，余弦学习率（初始8e-4），权重衰减0.1。
- **未说明**：具体训练总时长未给出。

## 5. 实验数量与充分性
- **主实验**（表2）：对比了7种方法，覆盖商业模型、物体级、场景级三类，展示GRANT在调度效率（TE 72.99% vs 基线42.46%）和总体（53.49 vs 43.03）上的显著提升。
- **消融实验**（表4）：
  - 调度令牌机制（STM）的重要性：无调度 → 21.03% TE；加STM → 72.99%。
  - 不同子任务数量（4~7）的鲁棒性：GRANT均优于所有基线。
  - LLM规模（1B vs 7B）：7B略有提升但性价比不高。
  - 求解器运行时间：<1.5ms（4~7子任务）。
- **附加分析**（表3）：接地性能对比（AP@0.25等）、子任务类型识别精度（Acc 84.65%）及其对TE的影响。
- **结论**：实验设计充分、公平（对基线进行适配，如LEO替换LLM、Grounded 3D LLM作为直接对比），指标全面覆盖语言、调度、接地。

## 6. 主要结论与发现
- GRANT 在 **时间效率（TE）** 上比最优基线（Grounded 3D LLM）高出 **30.53个百分点**。
- 引入STM是调度提升的关键（无STM时TE仅21.03%，有STM达72.99%）。
- 子任务类型的准确识别（尤其是可并行子任务的Recall和F1）对调度效率至关重要。
- 在更复杂的多子任务场景（7个），GRANT依然保持明显优势（48.70 vs 基线36.04）。
- 场景级方法（直接处理全场景点云）比物体级方法（依赖外部检测器）更简洁，但接地精度略低，未来可通过改进编码器提升。

## 7. 优点
- **任务新颖性**：首次在3D化身任务中引入运筹学知识，强调并行调度，更贴近真实应用。
- **数据集质量**：ORS3D-60K是当前最大的3D接地任务调度数据集，涵盖5个真实扫描数据集，任务文本平均长度311词，难度高。
- **模型设计精巧**：调度令牌机制（STM）将LLM的生成能力与外部优化求解器的精确计算结合，既保证了灵活性又确保了最优性；接地头通过余弦相似度选择场景查询，简单有效。
- **实验全面**：覆盖多种基线、多维度指标、充分消融，并分析了不同难度、子任务识别、LLM规模的影响。
- **效率高**：求解器运行时间毫秒级，非常适合实时部署。

## 8. 不足与局限
- **未在物理机器人上验证**：实验仅在仿真数据集上进行，动态环境中的鲁棒性未知。
- **依赖外部求解器**：STM需要调用独立的优化器，无法实现端到端可微分；当前求解器仅支持单个可并行子任务（算法1假设最多一个并行子任务），对多个并行子任务的情况需要扩展。
- **子任务识别仍有差距**：表4(a)显示，使用GT调度内容时TE可达90.29%，而STM仅为72.99%，说明子任务类型识别是主要瓶颈。
- **LLM规模较小**：默认使用1B参数模型，虽节省资源但可能限制了复杂指令的理解和接地能力（7B实验显示有提升余地）。
- **接地精度低于物体级方法**：由于缺少额外检测器，场景级方法的AP@25%（35.38%）低于基于Mask3D的方法（~56%），在需要高精度定位的应用中可能不足。
- **数据偏差风险**：预期时间通过随机扰动生成，可能不完全反映真实操作时间分布；子任务类型（可并行/不可并行）的定义依赖人工先验，可能存在主观性。

（完）
