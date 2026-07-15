---
title: "Human-Centric Open-Future Task Discovery: Formulation, Benchmark, and Scalable Tree-Based Search"
title_zh: "以人为中心的开放未来任务发现: 形式化、基准和可扩展的树搜索"
authors: "Zijian Song, Xiaoxin Lin, Tao Pu, Zhenlong Yuan, Guangrun Wang, Liang Lin"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38829/42791"
tags: ["query:ad"]
score: 7.0
evidence: 使用大型多模态模型进行化身智能体的任务发现
tldr: 大型多模态模型推动了机器人学发展，但如何发现能帮助人类的未来任务仍是挑战。本文形式化了以人为中心的开放未来任务发现（HOTD），并构建HOTD-Bench，包含2000+真实世界视频和模拟评估协议。提出协作多智能体搜索方法，实验表明能有效预测并发现减少人类努力的未来任务。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38829/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 882, \"height\": 350, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38829/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1700, \"height\": 658, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38829/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 883, \"height\": 621, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38829/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1850, \"height\": 399, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38829/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 828, \"height\": 678, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38829/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 773, \"height\": 201, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38829/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 824, \"height\": 305, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38829/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1443, \"height\": 366, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38829/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1761, \"height\": 324, \"label\": \"Table\"}]"
motivation: 如何让大型多模态模型发现能帮助人类解决未来可能遇到的动态任务尚未被充分探索。
method: 形式化HOTD问题，构建包含大量真实视频的基准，并设计协作多智能体树搜索方法。
result: 在HOTD-Bench上，提出的搜索方法有效预测了未来任务，减少了人类努力。
conclusion: 该工作为开放未来场景中智能体主动帮助人类提供了新范式。
---

## Abstract
Recent progress in robotics and embodied AI is largely driven by Large Multimodal Models (LMMs). However, a key challenge remains underexplored: how can we advance LMMs to discover tasks that assist humans in open-future scenarios, where human intentions are highly concurrent and dynamic. In this work, we formalize the problem of Human-centric Open-future Task Discovery (HOTD), focusing particularly on identifying tasks that reduce human effort across plausible futures. To facilitate this study, we propose HOTD-Bench, which features over 2K real-world videos, a semi-automated annotation pipeline, and a simulation-based protocol tailored for open-set future evaluation. Additionally, we propose the Collaborative Multi-Agent Search Tree (CMAST) framework, which decomposes complex reasoning through a multi-agent system and structures the reasoning process through a scalable search tree module. In our experiments, CMAST achieves the best performance on the HOTD-Bench, significantly surpassing existing LMMs. It also integrates well with existing LMMs, consistently improving performance.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，以下是对给定论文的详细、结构化总结。

### 论文核心分析：Human-Centric Open-Future Task Discovery

#### 1. 论文的核心问题与整体含义（研究动机和背景）

*   **核心问题：** 现有的基于大型多模态模型（LMM）的具身智能体，主要关注如何在**固定目标或封闭环境**下完成任务发现。然而，在真实的、以人为中心的开放场景中，人类的意图是高度并发、动态且未明确表述的，存在多种可能的未来分支。论文旨在解决一个关键但未被充分探索的问题：**如何让LMMs发现那些在多种不确定的未来路径中都对人有益的辅助性任务**。这被称为“以人为中心的开放未来任务发现”（HOTD）问题。
*   **研究动机：** 推动LMMs不仅是响应式地执行指令，而是能够**前瞻性地、主动地为人类提供帮助**，从而实现更深层次的人机协作。例如，在复杂的家务场景中，机器人不应只等待下一个指令，而应能预判并主动完成“擦拭桌子”这类在任何后续流程中都省力的任务。

#### 2. 论文提出的方法论：核心思想、关键技术细节

*   **整体框架：** 提出了一种名为**协作多智能体搜索树（CMAST）** 的免训练框架，其核心思想是结合多智能体系统与可扩展的搜索树模块，显式地模拟和探索开放未来的行动空间。

*   **核心思想拆解：**
    1.  **形式化定义：** 将HOTD问题形式化为寻找最大化`|预测任务集 ∩ 人类中心任务集|`的映射函数。同时，定义了“人类中心任务”为：一个可执行的、且能降低实现人类最终目标总成本的行动。该成本通过一个模拟器来评估。
    2.  **可扩展搜索树模块：** 构建一棵显式的搜索树，树的根节点为历史动作序列，后续节点为多种可能的未来动作分支。通过迭代扩展和剪枝，该模块能够：
        *   **显式建模不确定性：** 捕捉未来行动程序固有的不确定性。
        *   **实现可扩展的测试时思考：** 支持从贪心搜索到束搜索等多种策略，通过增加搜索规模提升性能，类似于OpenAI o1/o3和DeepSeek-R1。
    3.  **协作多智能体系统：** 将复杂的推理过程分解为多个由专门智能体负责的階段，协同工作，包括：
        *   **场景描述智能体（LMM）：** 理解输入视频，生成全局描述。
        *   **历史动作识别智能体（LMM）：** 从视频中识别出已执行的动作序列，初始化搜索树。
        *   **搜索树扩展阶段（循环）：**
            *   **下一步动作预测智能体（LMM）：** 基于当前路径预测下一个可能动作。
            *   **可能性估计智能体（LLM）：** 为每个分支节点预测概率。
            *   **冗余移除智能体（LLM）：** 修剪冗余或低效分支。
        *   **后处理阶段：**
            *   **依赖关系识别智能体（LLM）：** 识别并排除有前置条件的动作。
            *   **任务转换智能体（LMM/LLM）：** 将最终筛选出的动作集（源自不同未来分支）转换为以机器人视角表述的、可直接执行的任务描述。

*   **关键技术细节：** 智能体分工明确（LMM用于视觉理解，LLM用于逻辑推理和预测），整个框架无需训练，可无缝集成不同的LMM模型。

#### 3. 实验设计：数据集、基准与对比方法

*   **数据集：** 从两个现有数据集中筛选构建了 **HOTD-Bench**：
    *   **Toyota Smarthome Untrimmed (TSU)：** 贡献了约2000个视频剪辑。
    *   **Charades (CHA)：** 贡献了约400个视频剪辑。
    *   总计超过2450个真实世界视频剪辑，时长近40小时，涵盖多样化的日常生活活动。

*   **基准：** 论文构建了实验基准，并提出了两种评估方式：
    1.  **基于模拟器的评估（主要方式）：** 使用一个LLM作为模拟器，通过比较“无人干预”和“有任务干预”两种情况下实现最终目标的成本，来判断一个候选任务是否有帮助。论文通过人类评估验证了该模拟器的可靠性。
    2.  **基于标注标签的评估：** 通过一个半自动化的标注流程，从原始数据集的动作标签出发，经过“有帮助、无干扰、可执行”三原则筛选，生成一个近似的“真值”任务集，用于更稳定的评估。

*   **对比方法（Baselines）：** 论文与6种主流开源LMM进行了对比：
    *   Qwen2-VL (7B)
    *   Qwen2.5-VL (72B)
    *   InternVL2 (8B)
    *   InternVL2.5 (26B)
    *   Video-LLaVA (7B)
    *   LLaVA-Next-Video (7B & 34B)

#### 4. 资源与算力

*   **明确情况：** 论文中**未明确说明**其方法（CMAST）和实验过程所使用的具体GPU型号、数量以及训练/推理时长。由于CMAST是一个**免训练**框架，其资源消耗主要集中在推理阶段。论文仅提到“使用LLaVA-Next-Video和Qwen-LM作为基础模型”，但未提供计算资源的详细量化数据。

#### 5. 实验数量与充分性

*   **实验数量：** 实验设计较为全面，主要包括：
    *   **主实验对比：** 在TSU和CHA两个子集上，对比CMAST与所有Baseline模型在不同观测长度下的性能（表1、表2）。
    *   **消融实验（多组）：**
        *   **搜索树模块贡献：** 对比完整CMAST与移除搜索树模块的变体。
        *   **搜索策略：** 对比束搜索（beam size 1-4）的性能与效率。
        *   **组件智能体选择：** 将CMAST中的LMM组件替换为不同的基线模型，并与原始模型对比。
    *   **人类评估：** 随机选取样本，由5名标注员评估模拟器的可靠性（图4a）。
    *   **与人类表现对比：** 在10个样本上，对比CMAST与人类志愿者的性能（图6）。
    *   **案例研究：** 展示了模拟器对**未见场景**的推演能力（图5）。

*   **充分性与公平性：**
    *   **充分性：** 实验覆盖了核心方法验证、组件贡献、策略选择和泛化能力，设计较为全面。通过人类评估证明了其提出的模拟器评估方法的可靠性，增加了实验的说服力。
    *   **客观与公平：** 对比实验在统一基准（HOTD-Bench）和相同设置下进行，公平性较好。但存在一个潜在的偏差风险：基准数据（TSU, Charades）本身主要包含动作标签，如何保证基于这些标签构建的“真值”能完全反映真实、复杂的人类意图，可能存在一定的主观性。论文虽通过模拟器评估设计了“两套评价标准”（模拟+标签）来抵消部分偏差，但并未讨论标签生成流程中潜在的选择偏差。

#### 6. 论文的主要结论与发现

*   现有的LMMs在“开放未来任务发现”（HOTD）问题上表现不佳，普遍存在**有效任务比例低**或**任务多样性不足**的问题。
*   提出的CMAST框架**显著优于**所有现有基线模型。尤其是在**有效任务比率（Valid Task Ratio）** 上，CMAST在TSU子集上超越了第二名15%-22%，表明其预测结果更精准、更可靠。
*   **搜索树模块是CMAST性能的关键**。移除该模块后，有效任务比率急剧下降（37%）。该模块通过显式探索未来多种可能性，显著提升了模型对“哪种任务在任何未来都适用”的判断力。
*   CMAST框架具备**良好的通用性**，它可以无缝集成不同的LMM模型，并持续提升其基线性能。
*   基于LLM的**模拟器**能够可靠地评估未来任务对人类的帮助程度，其判断与5位人类标注员有较好的一致性。

#### 7. 优点：方法或实验设计上的亮点

*   **问题定义清晰且新颖：** 首次形式化定义了“人类中心开放未来任务发现”问题，提出了符合人类复杂认知逻辑的**成本比较**定义，而非简单的动作预测。
*   **基准构建创新：** 提出的HOTD-Bench不仅包含视频数据，更重要的是设计了**模拟式评估协议**，能够评估开放、未见的未来场景，克服了传统标注的局限性。这个创新的评估方法是论文的一大亮点。
*   **方法论巧妙：** CMAST框架将**多智能体系统**与**搜索树**相结合，实现了复杂推理的结构化。特别是搜索树的引入，使得“可扩展测试时思考”成为可能，这与当前的顶级推理模型（如o3）的理念一致，展示了强大的通用潜力。
*   **“即插即用”免训练特性：** 框架的设计使其无需微调即可集成不同LMM，成本低，实用性强，易于推广。

#### 8. 不足与局限

*   **基准的时间跨度有限：** 论文视频来自现有数据集（TSU, Charades），这些视频是预先截取的。虽然使用了滑动窗口，但很难捕捉到真正“长期、自发”的意图变化。这些视频中的活动是有结构的，与真实世界中完全自由、随机的意图切换仍有差距。
*   **主观性潜在风险：** 尽管论文通过“模拟+标签”两种方式互相验证，但模拟器依赖LLM，标签生成依赖预定义原则，它们都可能存在难以避免的主观或认知偏差。论文未深入讨论这些偏差的来源和影响。
*   **计算复杂度与效率：** 搜索树的扩展过程涉及多次LLM/LMM推理，虽然实现了性能提升，但代价是计算开销增大。论文仅在束搜索层面进行了效率分析（图4c），但并未给出与其他方法的直接时间/资源消耗对比。
*   **通用性验证有限：** HOTD-Bench主要聚焦于家务/室内活动。该方法在其他开放场景（如户外任务、复杂人机协作任务）上的有效性尚待验证。论文也提到，人类在10个样本上表现接近，但样本量小，不足以证明模型已达到人类水平。
*   **现实落地的挑战：** 论文方法依赖于对全局目标z的预标注。在实际应用中，完美、实时地推断人类的深层目标本身就是另一个巨大挑战。论文未讨论如何处理目标不明确或目标发生变化的极端情况。

（完）
