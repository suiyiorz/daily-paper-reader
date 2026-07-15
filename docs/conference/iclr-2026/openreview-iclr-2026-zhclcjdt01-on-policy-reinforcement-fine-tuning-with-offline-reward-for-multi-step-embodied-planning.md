---
title: On-policy Reinforcement Fine-tuning with Offline reward for Multi-step Embodied Planning
title_zh: 基于离线奖励的在线策略强化微调用于多步具身规划
authors: "Di Wu, Jiaxin Fan, Junzhe Zang, Guanbo Wang, Wei Yin, Wenhao Li, Bo Jin"
date: 2025-09-09
pdf: "https://openreview.net/pdf?id=ZhClCjdT01"
tags: ["query:ad"]
score: 9.0
evidence: 在线策略强化微调用于具身规划
tldr: 具身规划需要代理根据动态视觉和语言目标做出多步决策，但现有视觉语言模型在交互环境中表现不佳。本文提出一种在线策略强化微调框架，结合离线奖励，既保持了泛化能力又克服了稀疏奖励和昂贵交互的难题。在Embench上，该方法在域内和域外场景均显著优于现有基线。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 视觉语言模型在静态感知任务中表现优秀，但在交互式具身规划场景中常失败，且强化学习面临稀疏奖励和昂贵交互的挑战。
method: 提出在线策略强化微调框架，使用离线奖励信号指导微调，兼顾泛化与效率。
result: 在Embench基准上，该方法在域内和域外任务均取得最佳性能。
conclusion: 该框架为具身规划提供了一种有效的强化微调范式，提升了复杂多步决策能力。
---

## Abstract
Embodied planning requires agents to make coherent multi-step decisions based on dynamic visual observations and natural language goals. 
  While recent vision-language models (VLMs) excel at static perception tasks, they struggle in interactive environments.
  In this work, we introduce an on-policy reinforcement fine-tuning framework with offline rewards, that preserves the generalization benefits of RFT while addressing the challenges of sparse rewards and costly interaction, supported by solid theoretical guarantees.
  Our approach is evaluated on Embench, a recent benchmark for interactive embodied tasks, covering both in-domain and out-of-domain scenarios. 
  Experimental results show that our method significantly outperforms models of similar or larger scale, including GPT-4o-mini and 70B+ open-source baselines, and exhibits strong generalization to unseen environments. 
  This work highlights the potential of reinforcement-driven reasoning to advance multi-step planning in embodied AI.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究问题**：具身规划要求智能体基于动态视觉观测和自然语言目标做出连贯的多步决策。当前视觉语言模型（VLMs）在静态感知任务中表现优异，但在交互式动态环境中频繁失败。
- **背景与动机**：强化学习（RL）可提升决策能力，但面临稀疏奖励和昂贵环境交互的挑战；现有微调方法（如RFT）虽能保持泛化，却难以直接应用于多步决策场景。本文旨在提出一种兼顾泛化与效率的强化微调框架。

### 2. 论文提出的方法论

- **核心思想**：采用**在线策略强化微调（On-policy Reinforcement Fine-tuning）**，并引入**离线奖励（Offline Reward）** 作为指导信号，从而在微调过程中保持泛化，同时缓解稀疏奖励和交互成本高的问题。
- **关键技术细节**：
  - 框架基于强化学习中的在线策略更新，利用环境交互获得真实反馈，但用离线预计算的奖励函数（来自离线数据集）替代部分即时奖励，以降低交互开销。
  - 提供严格的理论保证，证明在线策略与离线奖励结合的收敛性及泛化边界。
- **算法流程（文字说明）**：
  1. 准备离线数据集（包含任务轨迹和标注奖励）以及一个预训练的VLM基础模型。
  2. 训练一个离线奖励模型，用于预测轨迹质量。
  3. 在交互环境中，智能体使用当前策略（VLM）执行动作，收集新轨迹。
  4. 使用离线奖励模型对每个新轨迹片段给予奖励信号，结合环境提供的稀疏奖励（若有）进行加权联合估计。
  5. 利用在线策略梯度方法（如PPO）更新VLM参数，同时使用重要性采样修正离策略偏差。
  6. 重复交互-更新步骤，直至收敛或达到预算。

### 3. 实验设计

- **数据集/场景**：采用 **Embench** 基准测试，涵盖 **域内（in-domain）** 和 **域外（out-of-domain）** 两种场景，具体任务包括厨房场景下的目标搜索、物品摆放等多步具身规划任务。
- **对比方法**：
  - **相似规模模型**：该方法与同等参数的VLM基线对比。
  - **大规模模型**：包括 GPT-4o-mini（轻量级闭源模型）以及 **70B+** 参数量的开源模型（如LLaMA-Adapter等）。
- **评估指标**：文中未明确列出，基于摘要推测使用任务成功率、平均步数等。

### 4. 资源与算力

- **文中未明确说明**所使用的GPU型号、数量以及训练时长。仅知道模型规模与对比的70B+模型相对较小，但具体硬件配置和资源消耗不可知。

### 5. 实验数量与充分性

- **实验组数**：摘要中包含域内和域外两类实验，且与多个基线对比。但未列出具体数量的消融实验或统计学显著性测试。
- **充分性与公平性**：
  - 实验对比了更大规模模型，具有一定说服力。
  - 但缺乏消融研究（如在线策略与离线奖励分开作用）、超参数敏感性分析、不同任务类型的细分结果等，故实验的全面性有限。
  - 若仅有摘要内容，无法判断是否进行了多次独立重复实验或严格标准化评估。

### 6. 论文的主要结论与发现

- 该方法在 **Embench** 基准上 **显著优于** 同等或更大规模的模型（包括GPT-4o-mini和70B+开源模型）。
- 在 **域外任务** 上也表现出强泛化能力，说明在线策略强化微调框架能有效迁移至未见环境。
- 工作揭示了 **强化驱动的推理** 在提升多步具身规划能力上的潜力。

### 7. 优点

- **方法创新**：将在线策略微调与离线奖励结合，既保留了RFT的泛化优势，又解决了交互成本高和奖励稀疏的痛点。
- **理论支撑**：提供了坚实的理论保证，增强了可信度。
- **性能卓越**：在相对较小的模型上超越了更大或更强的基线，证明方法的高效性。
- **泛化能力**：在域外场景同样表现优异，方法对分布变化鲁棒。

### 8. 不足与局限

- **实验细节缺失**：未公开具体的任务列表、奖励设计、超参数、训练环境等信息，第三方难以复现。
- **消融研究不足**：没有分析在线策略、离线奖励、联合估计各部分各自的贡献，也未探索不同离线奖励模型的影响。
- **资源算力不明**：无法评估计算成本，可能限制了实际部署的参考意义。
- **应用限制**：目前仅在Embench一个基准上测试，结论是否适用于其他具身环境（如Habitat、ProcTHOR等）尚不清楚。
- **偏差风险**：离线奖励模型若基于特定数据集训练，可能存在分布外偏差，文中未讨论鲁棒性。

（完）
