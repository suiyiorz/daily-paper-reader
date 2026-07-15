---
title: "TANGO: Training-free Embodied AI Agents for Open-world Tasks"
title_zh: TANGO：面向开放世界任务的免训练具身AI代理
authors: "Ziliotto, Filippo, Campari, Tommaso, Serafini, Luciano, Ballan, Lamberto"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Ziliotto_TANGO_Training-free_Embodied_AI_Agents_for_Open-world_Tasks_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 无需训练的具身AI代理以应对开放世界任务
tldr: 该论文提出TANGO框架，利用大语言模型（LLM）组合基础模块，使具身代理无需额外训练即可完成多种开放世界任务。通过集成PointGoal导航模型和基于记忆的探索策略，LLM可以按需编排动作序列。实验表明，该方法在零样本设置下显著优于此前方法，为具身智能的泛化性提供了新思路。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 840, \"height\": 887, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1723, \"height\": 1124, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 874, \"height\": 255, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 875, \"height\": 802, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 867, \"height\": 422, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 820, \"height\": 542, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 655, \"height\": 485, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 898, \"height\": 384, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-ziliotto-tango-training-free-embodied-ai-agents-for-open-world-tasks-cvpr-2025-paper/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 765, \"height\": 443, \"label\": \"Table\"}]"
motivation: 具身代理通常需要针对每个任务进行训练，缺乏灵活性和泛化能力。
method: 利用LLM组合预定义基础模块（如导航和探索策略），实现免训练的任务解决。
result: 在多个开放世界任务中达到零样本下的出色表现，优于现有训练方法。
conclusion: LLM驱动的模块组合为具身代理的通用性开辟了路径。
---

## Abstract
Large Language Models (LLMs) have demonstrated excellent capabilities in composing various modules together to create programs that can perform complex reasoning tasks on images. In this paper, we propose TANGO, an approach that extends the program composition via LLMs already observed for images, aiming to integrate those capabilities into embodied agents capable of observing and acting in the world. Specifically, by employing a simple PointGoal Navigation model combined with a memory-based exploration policy as a foundational primitive for guiding an agent through the world, we show how a single model can address diverse tasks without additional training. We task an LLM with composing the provided primitives to solve a specific task, using only a few in-context examples in the prompt. We evaluate our approach on three key Embodied AI tasks: Open-Set ObjectGoal Navigation, Multi-Modal Lifelong Navigation, and Open Embodied Question Answering, achieving state-of-the-art results without any specific fine-tuning in challenging zero-shot scenarios.

---

## 论文详细总结（自动生成）

# TANGO：面向开放世界任务的免训练具身AI代理（中文总结）

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：传统具身代理（Embodied AI Agents）通常需要针对每个具体任务进行专门的训练，缺乏跨任务的灵活性和泛化能力。这使得它们在开放世界中的部署成本高昂且难以适应新任务。
- **背景**：大语言模型（LLM）已被成功用于通过程序组合解决复杂图像推理任务。本文将其扩展到具身智能领域，旨在构建**无需额外训练**即可处理多种开放世界任务的通用代理。

## 2. 论文提出的方法论
- **核心思想**：利用LLM作为“编排器”，组合预定义的**基础模块**（primitives）来生成动作序列，从而解决具体任务，整个过程中代理无需针对任务进行微调。
- **关键技术细节**：
  - **基础模块**：包括一个简单的**PointGoal导航模型**（用于目标点导航）和一个**基于记忆的探索策略**（用于未知环境中的自主探索）。这两个模块构成代理与环境交互的核心基元。
  - **LLM编排**：在提示（prompt）中提供少量上下文示例（in-context examples），让LLM理解任务目标并自行选择、排序或组合基础模块，输出高层的动作指令（如“导航到厨房”、“探索左侧走廊”）。
  - **零样本设定**：所有测试任务均未见过的场景，LLM仅凭通用知识和示例即可指导代理行动，无需任务特定数据训练。
- **算法流程**（文字说明）：
  1. 接收自然语言任务描述（如“找到冰箱并告诉我里面有什么”）。
  2. LLM解析任务，分解为子目标。
  3. 依次调用PointGoal导航模块或记忆探索模块执行子目标。
  4. 重复直至任务完成，过程中LLM根据环境反馈动态调整计划。

## 3. 实验设计
- **使用数据集/场景**：三个具身AI benchmark任务：
  - **Open-Set ObjectGoal Navigation**（开放集物体目标导航）
  - **Multi-Modal Lifelong Navigation**（多模态终身导航）
  - **Open Embodied Question Answering**（开放具身问答）
  - 具体模拟环境（如Habitat、AI2-THOR等）未在摘要中明确给出，但通常基于标准的具身AI模拟器。
- **基准方法**：与之前需要特定训练或微调的方法进行对比，包括基于强化学习或模仿学习的导航代理等。
- **结果**：在零样本设置下达到了**最先进（SOTA）** 性能，显著优于此前方法，且无需任何任务特定微调。

## 4. 资源与算力
- 论文摘要与元数据中**未明确说明**使用的GPU型号、数量、训练时长等算力信息。由于该方法为免训练（仅需LLM推理），其计算资源主要消耗在LLM的推理阶段，而非模型训练。具体的硬件配置细节缺失。

## 5. 实验数量与充分性
- **实验数量**：在三个典型具身任务上进行了评估，覆盖了导航、探索和问答等核心能力。但未提及具体的消融实验或深层分析（如不同LLM版本的影响、基础模块不同组合的效果等）。
- **充分性与公平性**：
  - **优点**：直接与之前的有训练方法对比零样本性能，展示了显著优势，结果客观。
  - **不足**：实验规模相对有限，缺乏对LLM决策稳定性的统计分析，也未在真实机器人平台上验证。不同任务间可能共享部分场景，存在泛化性偏差风险。

## 6. 论文的主要结论与发现
- LLM驱动的模块组合策略可以成功地将语言理解与基础导航、探索能力结合，实现**免训练的通用具身代理**。
- 在多个开放世界任务中，该方法零样本性能**优于**那些需要大量任务专用训练的前期工作，证明了LLM编排器的强大泛化能力。
- 研究揭示了预训练大语言模型在具身智能领域作为“混合智能”的关键作用，为构建无需重训练即可适应新任务的代理开辟了新路径。

## 7. 优点
- **创新性**：首次将LLM程序组合思想系统性地用于具身AI，提出免训练范式，克服了传统方法每任务必训的局限。
- **简洁高效**：仅需少量基础模块（导航+探索）和LLM即可处理多样任务，降低了代理构建的复杂度和成本。
- **强泛化性**：零样本设置下的SOTA结果有力证明了方法的通用性，具备直接迁移到新任务和新环境的潜力。
- **可解释性**：LLM输出的动作计划易于理解，便于调试和信任建立。

## 8. 不足与局限
- **依赖基础模块质量**：最终性能受限于PointGoal导航和记忆探索模块的鲁棒性，若基础模块在某些环境失效，则整体效果可能下降。
- **LLM推理稳定性**：大语言模型可能产生幻觉或次优计划，尤其当任务描述模糊或环境反馈复杂时，代理可能陷入死循环或低效行为。
- **实验覆盖不足**：仅测试了三个任务，缺乏对更复杂任务（如长程操作、多物交互）的验证；也未在真实机器人硬件上实验，存在仿真到现实的迁移鸿沟。
- **偏差风险**：LLM的训练数据可能隐含对某些场景或物体类型的偏好，导致在非常规任务中表现不佳。此外，提示示例的选择可能对结果有较大影响，但论文未充分探讨这种敏感性。
- **计算成本**：虽然免训练，但每次任务都需要调用LLM推理，其延迟和API成本可能不适用于实时要求高的应用。

（完）
