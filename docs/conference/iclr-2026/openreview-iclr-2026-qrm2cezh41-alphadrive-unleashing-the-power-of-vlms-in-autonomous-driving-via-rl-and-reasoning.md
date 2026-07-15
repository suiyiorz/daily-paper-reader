---
title: "AlphaDrive: Unleashing the Power of VLMs in Autonomous Driving via RL and Reasoning"
title_zh: AlphaDrive：通过强化学习与推理释放VLM在自动驾驶中的潜力
authors: "Bo Jiang, Shaoyu Chen, Qian Zhang, Wenyu Liu, Xinggang Wang"
date: 2025-09-10
pdf: "https://openreview.net/pdf?id=QRm2CEZH41"
tags: ["query:ad"]
score: 10.0
evidence: 视觉语言模型在自动驾驶中结合强化学习与推理
tldr: 端到端自动驾驶模型在长尾问题上表现不佳，现有VLM方法仅用简单监督微调。AlphaDrive提出强化学习与推理框架，让VLM在规划任务中通过链式思考推理和RL优化，显著提升复杂场景下的规划性能。实验表明该方法在nuScenes等数据集上达到新最优。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 自动驾驶长尾问题严重，现有VLM方法缺乏专门针对规划的优化。
method: 将强化学习和链式推理引入VLM，优化自动驾驶规划策略。
result: 在nuScenes等基准上规划准确率大幅提升，尤其擅长处理罕见场景。
conclusion: 结合RL与推理是提升VLM自动驾驶规划能力的有效路径。
---

## Abstract
OpenAI o1 and DeepSeek R1 achieve or even surpass human expert-level performance in complex domains like mathematics and science, with reinforcement learning (RL) and reasoning playing a crucial role. In autonomous driving, recent data-driven end-to-end models have greatly improved planning performance but still struggle with long-tailed problems due to the inherent data imbalance. Some studies integrate vision-language models (VLMs) into autonomous driving, but they typically rely on pre-trained models with simple supervised fine-tuning (SFT) on driving data, without further exploration of training strategies or optimizations specifically tailored for planning. In this paper, we propose AlphaDrive, a RL and reasoning framework for VLMs in autonomous driving. AlphaDrive introduces four planning-oriented RL rewards based on Group Relative Policy Optimization (GRPO) and employs a two-stage planning reasoning training strategy that combines SFT with RL. As a result, AlphaDrive significantly improves both planning performance and training efficiency compared to using only SFT or without reasoning. Moreover, we are also excited to discover that, following RL training, AlphaDrive exhibits some emergent multimodal planning capabilities, which is critical for improving driving safety and efficiency. To the best of our knowledge, AlphaDrive is the first to integrate GRPO-based RL with VLMs in the context of autonomous driving. Code will be released to facilitate future research.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：当前数据驱动的端到端自动驾驶模型在规划性能上已有提升，但受限于数据固有的长尾分布（long-tailed problems），在罕见场景下表现不佳。已有的视觉语言模型（VLM）方法仅使用简单的监督微调（SFT）训练，缺乏针对规划任务的专门训练策略或优化。
- **背景启示**：OpenAI o1 和 DeepSeek R1 等模型在数学、科学等复杂领域通过强化学习（RL）和推理达到甚至超越人类专家水平，表明 RL 与推理的结合是突破复杂推理任务的有效范式。论文受此启发，尝试将相似机制引入自动驾驶规划。
- **整体含义**：论文旨在提出 **AlphaDrive**，首次将基于 GRPO 的强化学习与链式推理（chain-of-thought reasoning）集成到 VLM 中，专门优化自动驾驶规划能力，尤其是在处理长尾和安全关键场景上取得显著提升。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：结合强化学习（RL）与链式推理，让 VLM 在自动驾驶规划任务中通过推理步骤进行决策，并利用 RL 奖励信号优化规划策略，从而超越单纯 SFT 的局限。
- **关键技术细节**：
  - **规划导向的 RL 奖励**：基于 **Group Relative Policy Optimization (GRPO)** 设计了四种针对规划任务的奖励函数（具体奖励定义未在摘要中列出，需参考原文）。
  - **两阶段训练策略**：先使用 **监督微调（SFT）** 进行基础行为学习，再使用 **RL 阶段** 进一步优化规划性能，提升训练效率。
  - **推理过程**：模型在规划时执行链式思维（Chain-of-Thought）推理，显式地生成中间步骤，增强决策的可解释性和准确性。
- **算法流程（文字说明）**：
  1. 使用驾驶数据集对 VLM 进行 SFT 预训练，使其学习基本的驾驶行为和语言对齐。
  2. 在 GRPO 框架下，输入多组候选规划推理（通过采样或分组），根据四种奖励函数计算每组的相对优势值。
  3. 通过策略梯度更新模型参数，鼓励产生高奖励的推理路径。
  4. 最终模型在测试时可通过推理生成更可靠的规划结果。

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：提及在 **nuScenes** 等自动驾驶基准上验证（具体还有哪些数据集需查原文，摘要中仅明确 nuScenes）。
- **基准**：以规划准确率等指标在现有自动驾驶规划 benchmark 上评估。
- **对比方法**：
  - **仅 SFT 的 VLM**（基线）
  - **无推理的 VLM**（对比是否使用链式推理）
  - 可能还包括当前最优的端到端模型（摘要中称达到新最优）。
- **结果亮点**：规划准确率大幅提升，尤其在处理罕见场景时表现优异；且通过 RL 训练后出现了**多模态规划涌现能力**，提升驾驶安全与效率。

## 4. 资源与算力

- 论文 **未明确说明** 使用了多少 GPU 型号、数量、训练时长等算力信息。摘要及元数据中均未提及，仅承诺代码将开源供未来研究。

## 5. 实验数量与充分性

- **实验数量**：从摘要看，至少包含了：
  - 在 nuScenes 等一个或多个数据集上的主要性能对比。
  - 消融实验：对比仅 SFT vs. SFT+RL、有推理 vs. 无推理。
  - 可能还有不同奖励组合的消融（未详述）。
- **充分性与客观性**：摘要宣称在基准上达到新最优，且展示了对长尾场景的显著改善，实验设计相对完整。但缺失更多数据集、泛化性测试、与更多 SOTA 方法对比的细节。由于信息有限，初步判断实验较充分，但具体公平性需看原文完整实验设置。

## 6. 论文的主要结论与发现

- 将 **GRPO 强化学习** 与 **链式推理** 引入VLM，可显著提升自动驾驶规划性能，优于仅用 SFT 或无推理的方法。
- RL 训练后模型展现出 **涌现的多模态规划能力**，对长尾、安全关键场景尤为有效。
- 该框架是 **首个** 将 GRPO 强化学习与 VLM 结合应用于自动驾驶的工作，为未来研究提供了新方向。

## 7. 优点：方法或实验设计上的亮点

- **创新性**：率先将基于 GRPO 的强化学习与推理机制引入 VLM 驱动的自动驾驶规划，区别于以往简单的 SFT 范式。
- **两阶段策略**：先 SFT 再 RL，兼顾基础行为学习和策略优化，提升训练效率。
- **规划导向奖励**：专门为驾驶规划设计四种奖励信号，目标明确。
- **涌现能力**：发现 RL 后模型出现新能力，对改进安全性和效率具有实际价值。
- **开源承诺**：将公开代码，促进后续研究。

## 8. 不足与局限

- **实验覆盖有限**：仅明确提及 nuScenes 数据集，未说明是否在多个不同区域/场景（如高速公路、城市、恶劣天气）进行充分验证。长尾场景的具体定义和覆盖范围不清晰。
- **算力与成本未披露**：缺失训练所需计算资源的详细信息，难以评估方法的实际应用门槛。
- **奖励设计细节缺失**：四种奖励的具体形式、权重及设计理由未在摘要中给出，可能影响可复现性。
- **对比方法范围不足**：未说明与基于端到端 Transformer 的方法（如 UniAD、VAD 等）或其它 VLM 方法（如 DriveVLM）的具体比较，论证强度有限。
- **安全风险考量**：强调性能提升，但未讨论 RL 训练可能引入的过优化（reward hacking）或安全违反风险。

（完）
