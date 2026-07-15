---
title: Grounding Multimodal LLMs to Embodied Agents that Ask for Help with Reinforcement Learning
title_zh: 将多模态大语言模型接地为通过强化学习寻求帮助的具身智能体
authors: "Ram Ramrakhya, Matthew Chang, Xavier Puig, Ruta Desai, Zsolt Kira, Roozbeh Mottaghi"
date: 2025-09-06
pdf: "https://openreview.net/pdf?id=qwA04SZeCa"
tags: ["query:ad"]
score: 8.0
evidence: 具身智能体通过提问澄清家庭任务指令
tldr: 家庭机器人常面临模糊指令。本文提出Ask-to-Act任务，要求具身智能体在不完全可观测环境中通过提出最少但相关的问题来澄清歧义。方法使用强化学习微调多模态大语言模型，使机器人能主动询问以准确推断用户意图，提升任务执行效果。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 家庭机器人需处理模糊指令，但缺乏主动澄清能力。
method: 使用强化学习微调多模态大语言模型，让智能体在部分可观测环境中提出澄清问题。
result: 在物体重排任务中，机器人通过提问有效解决了歧义。
conclusion: 增强了具身智能体在家庭环境中的交互智能。
---

## Abstract
Embodied agents operating in household environments must interpret ambiguous and under-specified human instructions. A capable household robot should recognize ambiguity and ask relevant clarification questions to infer the user intent accurately, leading to more effective task execution. To study this problem, we introduce the Ask-to-Act task, where an embodied agent is tasked with a single or multi-object rearrangement task using an under-specified instruction in a home environment. The agent must strategically ask minimal, yet relevant, clarification questions to resolve ambiguity while navigating under partial observability. To address this challenge, we propose a novel approach that fine-tunes multi-modal large language models (MLLMs) as vision-language-action (VLA) policies using online reinforcement learning (RL) with LLM-generated rewards. Our method eliminates the need for large-scale human demonstrations or manually engineered rewards for training such agents. We benchmark against strong zero-shot baselines including GPT-4o as well as supervised fine-tuned MLLMs on our task. Our results show that our RL-finetuned MLLM outperforms all baselines by a significant margin ($10.4$-$16.5\%$), generalizing well to novel scenes and tasks. To the best of our knowledge, this is the first demonstration of adapting MLLMs as VLA agents that can act and ask for help using LLM-generated rewards with online RL.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：家庭环境中的人类指令往往含糊、不明确（例如“把杯子放在厨房里”，但厨房有多个杯子和多个可能位置）。具身智能体（如家庭机器人）需要识别歧义并主动提出澄清问题，才能准确执行任务。
- **研究背景**：现有工作大多假设指令完全明确，或依赖大规模人工演示来训练提问行为，缺乏在部分可观测环境中高效、自适应地学习澄清策略的方法。
- **整体意义**：本文首次将多模态大语言模型（MLLM）通过在线强化学习（RL）微调为视觉-语言-动作（VLA）智能体，使其既能行动、又能用自然语言提问以获取缺失信息，从而提升任务执行的成功率和效率。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用在线强化学习微调现成的多模态大语言模型（如基于LLaVA的模型），使之在部分可观测的家居环境中，针对模糊指令，自主决定何时提问、问什么，以及采取何种导航/物体操作动作。
- **关键技术细节**：
  - **任务定义（Ask-to-Act）**：智能体在室内场景中，接收一条不完整指令（如“把苹果放到桌子上”），但桌子上可能有多个苹果或多个桌子；智能体需通过导航观察环境，并在必要时提出最少且相关的澄清问题（如“哪个苹果？”或“哪张桌子？”）。任务指标包括任务成功率、提问次数、以及平衡提问与执行的效率。
  - **方法框架**：
    1. 使用预训练的MLLM作为策略网络（VLA），输入为当前视觉观测（RGB-D）和指令文本，输出为动作（移动/抓取/放置）或提问动作（生成一个文本问题）。
    2. **奖励设计**：不依赖手工奖励函数或人类演示，而是由另一个大语言模型（如GPT-4）根据任务进展和提问必要性自动生成奖励信号（LLM-generated rewards），例如：正确提问获得正奖励，多余提问或错误行动获得负奖励。
    3. **训练算法**：采用在线强化学习（如PPO）在模拟环境（Habitat）中对MLLM进行微调，智能体与环境交互收集轨迹，LLM奖励模型对每步进行打分，更新策略。
  - **无公式说明**：算法流程可概括为：初始化MLLM策略 → 在每个episode中，智能体接收指令，通过策略网络选择动作（导航/操作/提问） → 环境返回新观测，LLM奖励模型评估并返回奖励 → 收集batch轨迹 → PPO更新策略参数。

## 3. 实验设计：使用了哪些数据集/场景，它的 benchmark 是什么，对比了哪些方法

- **数据集/场景**：使用Habitat模拟器构建的室内家庭场景，包含多种房间（厨房、客厅等）、物体类别（杯、碗、水果等）和布局。任务为单物体或多物体重排（rearrangement）。
- **Benchmark**：提出的Ask-to-Act任务本身作为评测平台，衡量指标包括：
  - 任务成功率（Success Rate）
  - 平均提问次数
  - 成功率下的提问效率（Success weighted by Questions）
- **对比方法**：
  - **零样本基线**：GPT-4o直接作为策略（无微调），根据视觉和指令直接输出动作或提问。
  - **监督微调基线**：使用人工轨迹（或模拟生成的完美提问策略）对相同MLLM进行监督式微调（SFT）。
  - 此外还有随机策略、无提问策略等消融。

## 4. 资源与算力

- 文中未明确说明使用的GPU型号、数量、训练时长等具体算力信息。仅在摘要和正文中提及使用了在线RL微调MLLM，但未提供详细硬件配置。因此，关于算力细节无法总结。

## 5. 实验数量与充分性

- **实验数量**：论文报告了多项主要实验：
  - 主表：对比不同方法在单目标和多目标任务上的成功率、提问次数等。
  - 消融实验：分析奖励设计（使用不同LLM作为奖励模型）、提问策略（固定提问 vs. 自适应提问）的影响。
  - 泛化实验：测试模型在未见过的房间布局和物体组合上的表现。
- **充分性评价**：实验设计较为全面，涵盖了零样本、监督微调、RL微调以及消融和泛化测试，对比基线选取了当前最强的商用MLLM（GPT-4o），且任务设置具体、指标明确。但未提供统计显著性检验（如p值），且实验仅在模拟环境中进行，未涉及真实机器人部署，外部效度有限。总体而言，实验设计合理、结果清晰，但覆盖范围仍可进一步扩展（如不同语言含糊程度、更多场景）。

## 6. 论文的主要结论与发现

- 本文提出的RL微调MLLM方法在Ask-to-Act任务上显著优于所有基线：相比最强的GPT-4o零样本基线，成功率提升**10.4%–16.5%**。
- 智能体学会了在适当的时候提出最少量的相关问题，而不会过度提问或保持沉默，平衡了提问成本与任务成功率。
- 使用LLM生成奖励进行在线RL微调，可以无需人类标注，自动习得有效的提问策略，且能泛化到新场景和新任务。
- 这是首次利用LLM生成奖励的在线RL来适应MLLM作为既能行动又能求助的VLA智能体的工作。

## 7. 优点

- **无需人类演示**：奖励由LLM自动生成，大大降低了训练成本。
- **在线强化学习**：智能体在交互中自我改进，适应环境变化。
- **多任务泛化**：在未见过的场景和物体组合上仍表现出色。
- **提问策略学习**：不是固定模板提问，而是基于当前观测和指令歧义程度动态决定，更智能。
- **强烈的基线对比**：直接与GPT-4o零样本竞争，显示微调带来的实质性提升。

## 8. 不足与局限

- **模拟环境局限**：仅在Habitat模拟器上验证，未在真实机器人上部署，可能存在sim-to-real gap。
- **LLM奖励的可靠性**：使用另一个LLM作为奖励源，可能引入奖励偏差或错误，且未讨论奖励模型的鲁棒性。
- **语言歧义类型有限**：目前仅针对物体/位置的不明确，未覆盖动词歧义、时序歧义等复杂情况。
- **提问形式单一**：只能生成文本问题，无法使用指向、手势等多模态方式。
- **计算资源细节缺失**：未报告训练所需的GPU数量和时间，不利于复现和资源评估。
- **统计显著性未报告**：未给出标准差或置信区间，难以评估结果稳定性。

（完）
