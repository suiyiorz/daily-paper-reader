---
title: "ManipLVM-R1: Reinforcement Learning for Reasoning in Embodied Manipulation with Large Vision-Language Models"
title_zh: ManipLVM-R1：基于强化学习的大视觉语言模型具身操作推理
authors: "Zirui Song, Guangxian Ouyang, Mingzhe Li, Yuheng Ji, Chenxi Wang, Zixiang Xu, Zeyu Zhang, Xiaoqing Zhang, Qian Jiang, Fengxian Ji, Zhenhao Chen, Zhongzhi Li, Xiuying Chen"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38922/42884"
tags: ["query:ad"]
score: 9.0
evidence: 用于具身操作的大视觉语言模型强化学习
tldr: 针对大视觉语言模型在机器人操作中依赖昂贵标注且泛化性差的问题，提出ManipLVM-R1框架，采用可验证奖励的强化学习直接优化任务对齐结果，消除人工标注依赖。在域外场景中性能显著提升。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38922/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1851, \"height\": 687, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38922/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1458, \"height\": 780, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38922/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1633, \"height\": 986, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38922/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1351, \"height\": 716, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38922/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1833, \"height\": 688, \"label\": \"Table\"}]"
motivation: 现有方法依赖大量人工标注数据，泛化能力不足。
method: 提出强化学习框架，使用可验证奖励直接优化任务目标，替代传统监督。
result: 在多种操作任务中泛化性优于现有方法。
conclusion: 强化学习可有效提升具身操作模型的实用性和泛化能力。
---

## Abstract
Large Vision-Language Models (LVLMs) have recently advanced robotic manipulation by leveraging vision for scene perception and language for instruction following.
However, existing methods rely heavily on costly human-annotated training datasets, which limits their generalization and causes them to struggle in out-of-domain (OOD) scenarios, reducing real-world adaptability. To address these challenges, we propose ManipLVM-R1, a novel reinforcement learning framework that replaces traditional supervision with Reinforcement Learning using Verifiable Rewards (RLVR). By directly optimizing for task-aligned outcomes, our method enhances generalization and physical reasoning while removing the dependence on costly annotations. Specifically, we design two rule-based reward functions targeting key robotic manipulation subtasks: an Affordance Perception Reward to enhance localization of interaction regions, and a Trajectory Match Reward to ensure the physical plausibility of action paths. These rewards provide immediate feedback and impose spatial-logical constraints, encouraging the model to go beyond shallow pattern matching and instead learn deeper, more systematic reasoning about physical interactions. Experimental results show that ManipLVM-R1 achieves substantial performance gains across multiple manipulation tasks, using only 50% of the training data while achieving strong generalization to OOD scenarios. We further analyze the benefits of our reward design and its impact on task success and efficiency.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将根据您提供的论文内容，对其进行结构化、深入且客观的中文总结。

### 论文详细中文总结

#### 1. 论文的核心问题与整体含义（研究动机和背景）

*   **研究背景**：大视觉语言模型（LVLMs）在视觉感知和语言理解方面表现出色，并已开始应用于机器人操作领域。现有方法主要依赖**监督微调（SFT）**，例如使用专家演示和语言模型生成的思维链（CoT）数据来对齐指令。
*   **核心问题**：
    1.  **高昂的人工标注成本**：SFT方法需要大量的人工标注训练数据（如轨迹坐标、CoT推理步骤），这限制了模型的扩展性。
    2.  **泛化能力不足**：模型在域外（OOD）场景下表现不佳，难以适应未见过的物体和环境，降低了真实世界的适应性。
    3.  **奖励信号稀疏且缺乏结构**：直接将可验证奖励学习（RLVR）应用于机器人操作面临挑战，因为操作任务的奖励往往是稀疏和延迟的，传统的标量反馈缺乏指导视动学习所需的空间与逻辑结构。
*   **研究意义**：本文旨在解决上述问题，提出一种无需昂贵人工监督、能提升模型泛化能力和物理推理能力的强化学习框架，为推动更高效、更自主的机器人学习开辟道路。

#### 2. 论文提出的方法论：ManipLVM-R1

*   **核心思想**：采用**基于可验证奖励的强化学习（RLVR）** 替代传统的监督学习。通过设计结构化的、与任务目标一致的奖励函数，直接优化模型输出结果，从而引导模型学习更深层次的物理交互推理，而非依赖于浅层的模式匹配。
*   **关键技术细节**：
    1.  **任务分解**：将整体操作任务分解为两个关键子任务：**具身性感知（Affordance Perception）** 和**轨迹预测（Trajectory Prediction）**。为每个子任务分别训练独立的模型，以进行更聚焦的学习。
    2.  **奖励函数设计**：
        *   **具身性感知奖励（Rspatial）**：
            *   `Rformat`：格式奖励，确保模型输出采用`<think>...</think>`（推理）和`<answer>...</answer>`（坐标答案）的规范格式。
            *   `Raff`：具身性奖励，基于预测边界框与真实框的交并比（IoU）。
            *   公式：`Rspatial = Rformat + Raff`
        *   **轨迹匹配奖励（Rtrajectory）**：
            *   `Rformat`：格式奖励，确保输出包含`<think>`和`<answer>`标签，且轨迹点数在合理范围（3-10）。
            *   `Rpath`：路径相似性奖励，是三个几何度量（离散弗雷歇距离DFD、豪斯多夫距离HD、均方根误差RMSE）奖励的加权聚合，评估轨迹的整体形状、最大偏差和平均偏差。
            *   `Rend`：端点距离奖励，基于预测终点与真实终点的欧氏距离，通过指数函数`exp(-k||Δ||₂)`归一化。
            *   公式：`Rtrajectory = Rformat + (RDFD + RHD + RRMSE) + Rend`
    3.  **策略优化**：借鉴群体相对策略优化（GRPO）思想，从当前策略中采样多个响应，计算每个响应的奖励。基于奖励的均值和标准差对优势值进行归一化，然后用于更新策略，同时通过KL散度约束策略更新幅度，确保训练稳定性。

#### 3. 实验设计

*   **数据集与基准**：
    *   **域内（In-Domain）**：`ShareRobot` 数据集，包含超过100万规划问答对、6.5k密集具身性标注图像和6.8k轨迹标注帧。所有SFT基线使用完整数据，ManipLVM-R1仅使用**50%数据**。
    *   **域外（Out-of-Domain）**：
        *   **具身性**：`UMD Part Affordance` 数据集，涵盖四大语义类别（抓取、切、敲、舀），随机抽取1200张图像。
        *   **轨迹**：`VAIT` 数据集（源自`Open X-Embodiment`），从中选取500个样本，并进行手动校正以确保标签质量。
*   **对比方法**：
    *   **开源模型**：包括Gemma-3系列、Phi-4-Multimodal、Qwen2.5-VL系列、LLARVA、VILA1.5等。
    *   **监督微调（SFT）模型**：InternVL2-2B、LLaVA-1.6-7B、Qwen2.5-VL-3B-Instruct、RoboBrain-7B。
*   **评估指标**：
    *   **具身性**：任务成功率（IoU>50%）和平均IoU。
    *   **轨迹**：任务成功率（终点距离<20像素）及三个轨迹对齐指标：DFD、HD、RMSE。

#### 4. 资源与算力

*   **明确说明**：论文中**未明确提及**所使用的GPU型号、数量及具体训练时长等算力资源信息。这通常是一个可以改进的点，以便于其他研究者复现。

#### 5. 实验数量与充分性

*   **实验数量**：论文进行了相当充分的实验，主要包含：
    *   **两组主实验**：在域内（ID）和域外（OOD）两个数据集上的性能对比。
    *   **两个子任务对比**：分别对比了具身性感知和轨迹预测的性能。
    *   **多个基线模型**：涵盖了多个开源和SFT基线，包括不同规模（从2B到32B）的模型，对比基准广泛。
    *   **可视化分析**：提供了定性结果，展示了成功的“顿悟时刻”和失败案例。
*   **充分性与公平性**：
    *   **公平性**：论文指出所有SFT基线使用**完整**训练数据，而ManipLVM-R1仅使用50%，这有力地证明了其样本效率。
    *   **充分性**：在域外场景的评估，尤其是对UMD和VAIT数据集的精心挑选和校正，增加了实验的可靠性和泛化性评价。实验设计整体上反映了方法的有效性。然而，缺少对奖励函数中各组成部分（如路径相似性、端点距离）的详细消融实验（文中主要分析了整体奖励设计）。

#### 6. 论文的主要结论与发现

*   **主要结论**：ManipLVM-R1通过RLVR学习，能够在不依赖昂贵CoT标注的情况下，显著提升机器人操作模型在域内和域外任务上的性能。
*   **关键发现**：
    *   **性能提升**：仅使用50%训练数据，在域内任务中，ManipLVM-R1-3B的具身性IoU（31.0）和轨迹预测误差（110.87）均优于或媲美使用全部数据的更大规模SFT模型（如RoboBrain-7B）。
    *   **强大的泛化能力**：在域外测试中，ManipLVM-R1在UMD具身性数据集上取得最高的Grasp-IoU（34.65），并在VAIT轨迹基准上取得了最低的平均轨迹误差（131.99），超越了所有开源和微调模型，包括Qwen2.5-VL-32B-Instruct。
    *   **涌现的推理能力**：模型展示出涌现的多步推理行为（“顿悟时刻”），在没有CoT监督的情况下，能自发地进行隐式规划和视觉接地。

#### 7. 优点

*   **方法创新性**：首次将RLVR系统性地应用于机器人操作任务，解决了SFT依赖昂贵标注和泛化性差的问题。
*   **奖励设计的精巧性**：结构化的、多目标奖励函数（融合格式、空间、轨迹相似性、端点精度）为模型提供了即时的、有结构的反馈，有效地将空间和逻辑约束编码进学习过程中。
*   **样本效率高**：仅使用50%数据就能超越完整数据量训练的SFT模型，展示了卓越的数据利用效率。
*   **泛化能力强**：在域外场景下的优异表现，证明了其强大的鲁棒性和真实世界部署潜力。
*   **涌现推理能力**：模型自主产生推理过程，为模型的决策提供了可解释性证据。

#### 8. 不足与局限

*   **未报告算力成本**：缺少关于训练具体消耗的GPU数量和时间的信息，不利于其他研究者在资源上进行评估和复刻。
*   **缺乏奖励组件消融实验**：虽然分析了奖励设计整体，但没有对`Rpath`中的三个组件（DFD, HD, RMSE）或`Rformat`的必要性进行严格的消融研究，以证明各组件的确切贡献。
*   **实验覆盖有限**：实验仅在仿真环境的标准数据集上进行评估，未涉及真实物理世界的机器人平台部署，其实用性尚需在真实机器人上验证。
*   **分析揭示的局限**：定性分析显示模型存在常识推理缺口（如误将钥匙孔当作开门交互点）和空间感知错误（如误判夹爪与目标物体的相对位置），表明模型在复杂、模糊的环境中仍缺乏足够的自我验证和修正能力。
*   **任务分解策略**：将操作任务分解为独立的具身性感知和轨迹预测模型，虽然使得训练更聚焦，但可能忽略了两个子任务间内在的、协同的耦合关系。一个端到端的联合模型可能更有潜力。

（完）
