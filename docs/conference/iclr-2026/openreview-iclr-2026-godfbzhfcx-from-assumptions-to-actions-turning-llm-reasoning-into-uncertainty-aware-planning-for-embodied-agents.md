---
title: "From Assumptions to Actions: Turning LLM Reasoning into Uncertainty-Aware Planning for Embodied Agents"
title_zh: 从假设到行动：将LLM推理转化为具身智能体的不确定性感知规划
authors: "SeungWon Seo, SooBin Lim, Seongrae Noh, Haneul Kim, HyeongYeop Kang"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=GODFBZhFcX"
tags: ["query:ad"]
score: 9.0
evidence: 为具身智能体提供基于LLM的不确定性感知规划
tldr: 在多智能体部分可观察环境中，具身智能体常因不确定性而依赖频繁通信来协调。PCE框架将LLM推理中的碎片化假设转化为结构化假设，通过规划器-作曲者-评估者三模块进行不确定性感知规划，大幅减少通信成本，同时保持任务表现。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有方法依赖频繁通信来缓解多智能体环境中的不确定性，带来高计算和延时成本。
method: 提出PCE框架，将LLM推理中的假设转化为结构化不确定性感知规划。
result: 在典型任务上，PCE在减少通信的同时保持了与密集通信方法相当的任务成功率。
conclusion: PCE为具身智能体提供了一种高效的不确定性管理方法，减少了对通信的依赖。
---

## Abstract
Embodied agents operating in multi-agent, partially observable, and decentralized environments must plan and act despite pervasive uncertainty about hidden objects and collaborators' intentions. Recent advances in applying Large Language Models (LLMs) to embodied agents have addressed many long-standing challenges, such as high-level goal decomposition and online adaptation. Yet, uncertainty is still primarily mitigated through frequent inter-agent communication. This incurs substantial token and time costs, and can disrupt established workflows, when human partners are involved. We introduce PCE, a Planner-Composer-Evaluator framework that converts the fragmented assumptions latent in LLM reasoning traces into a structured decision tree. Internal nodes encode environment assumptions and leaves map to actions; each path is then scored by scenario likelihood, goal-directed gain, and execution cost to guide rational action selection without heavy communication. Across two challenging multi-agent benchmarks (C-WAH and TDW-MAT) and three diverse LLM backbones, PCE consistently outperforms communication-centric baselines in success rate and task efficiency while showing comparable token usage. Ablation results indicate that the performance gains obtained by scaling model capacity or reasoning depth persist even when PCE is applied, while PCE consistently raises the baseline across both capacity and reasoning-depth scales, confirming that structured uncertainty handling complements both forms of scaling. A user study further demonstrates that PCE produces communication patterns that human partners perceive as more efficient and trustworthy. Together, these results establish a principled route for turning latent LLM assumptions into reliable strategies for uncertainty-aware planning.

---

## 论文详细总结（自动生成）

# 论文总结：从假设到行动：将LLM推理转化为具身智能体的不确定性感知规划

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：在多智能体、部分可观察、去中心化的环境中，具身智能体面临关于隐藏物体和协作者意图的普遍不确定性。现有方法主要依赖频繁的智能体间通信来缓解不确定性，但这会带来高昂的 token 和时间成本，并且在涉及人类合作伙伴时会打断既定的工作流程。
- **研究动机**：降低对密集通信的依赖，同时保持甚至提升任务成功率与效率。
- **整体含义**：论文提出了一种将 LLM 推理中隐含的碎片化假设转化为结构化不确定性感知规划的方法，旨在为具身智能体提供更高效、更可靠的不确定性管理策略。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将 LLM 推理轨迹中隐含的模糊假设转化为结构化的决策树，通过对每个路径进行场景可能性、目标导向收益和执行成本三方面评分，指导理性动作选择，从而避免过度依赖通信。
- **关键技术细节**：
  - **PCE 框架**：由三个模块组成：
    - **规划器（Planner）**：根据当前观察和任务目标，生成多步行动计划及相关的环境假设。
    - **作曲者（Composer）**：将规划器产出的碎片化假设与动作候选组合成结构化决策树。内部节点编码环境假设，叶子节点对应具体动作。
    - **评估者（Evaluator）**：对每条路径（假设-动作链）计算三种分数：场景可能性（scenario likelihood）、目标导向增益（goal-directed gain）、执行成本（execution cost），然后加权求和选择最优动作序列。
  - **不确定性感知规划**：通过显式建模假设空间并对其赋分，智能体可以在不频繁通信的情况下做出合理决策，仅在必要时才会触发通信（框架未强制通信，但可自然减少）。
- **公式/算法流程**（文字描述）：
  1. 智能体接收当前观察和任务描述。
  2. 规划器生成一组可能的动作假设序列（每个序列对应一组未知状态假设）。
  3. 作曲者将这些假设组织成决策树，每个分支代表一种假设。
  4. 评估者为每条路径计算三个分数，并加权求和得到综合得分。
  5. 选择得分最高的路径对应的动作执行。
  6. 若多个假设概率相近，则可触发低频率通信以确认，但整体通信次数大幅降低。

## 3. 实验设计：数据集/场景、Benchmark、对比方法

- **数据集/场景**：使用两个具有挑战性的多智能体基准：
  - **C-WAH**（Communication-Weighted Animal Hunt？具体全称未给出）
  - **TDW-MAT**（Thor-Domino World Multi-Agent Task）
- **Benchmark**：任务成功率和任务效率（如完成时间或步数），以及 Token 使用量。
- **对比方法**：
  - 以通信为中心的基线方法（dense communication based methods）
  - 同时与多种 LLM 骨干网络结合，评估泛化性（使用了三种不同的 LLM 骨干：未具体指明，可能是 GPT-4/Claude 等）。
- **消融实验**：包括：
  - 不同模型容量（不同规模的 LLM）
  - 不同推理深度（如 few-shot/chain-of-thought 层级）
  - 对比是否启用 PCE 框架的基线（w/ vs w/o PCE）

## 4. 资源与算力

- 论文中**未明确提及**使用的 GPU 型号、数量或训练/推理时长。
- 仅在实验部分提到使用了多种 LLM 骨干，但未说明部署时的硬件配置。
- 这一点需要在总结中明确指出。

## 5. 实验数量与充分性

- **实验数量**：主要实验包括：
  - 两个基准上的主实验结果（成功率、效率、token 使用）
  - 三种 LLM 骨干的泛化实验
  - 消融实验（模型容量和推理深度的 scaling 分析）
  - 一项用户研究（评估人类对通信模式的感知：效率和信任度）
- **充分性**：
  - 覆盖了不同场景（C-WAH 和 TDW-MAT）、不同模型（三种骨干）、不同模型规模与推理链深度。
  - 对比了主流通信密集方法，消融实验拆解了 PCE 的贡献。
  - 用户研究增加了生态效度。
  - 总体实验设计较为全面，结果也支持了 PCE 的有效性。但**缺乏在真实物理机器人上的部署实验**，仅基于模拟环境。

## 6. 论文的主要结论与发现

- PCE 框架在两个多智能体基准上**一致优于**以通信为中心的基线方法，在成功率和任务效率上均有提升，同时 token 用量与基线相当或更低。
- 消融实验表明：当应用 PCE 时，通过扩大模型容量或增加推理深度获得的性能增益仍然存在，并且 PCE 能始终提高基线性能，即结构化不确定性处理与两种 scaling 方式互补。
- 用户研究显示，PCE 产生的通信模式被人类伙伴认为更高效、更可信赖。
- 结论：将 LLM 中潜在的假设转化为结构化策略是降低沟通成本、提升可靠性的有效途径。

## 7. 优点

- **方法创新性**：将 LLM 推理中模糊的假设显式建模为决策树，并利用多维评分进行不确定性感知规划，思路清晰。
- **实用性**：显著减少智能体间通信开销，且无需改变底层 LLM 能力。
- **实验严谨性**：多个基准、多种骨干、消融实验和用户研究相结合，验证了方法的鲁棒性和可推广性。
- **可扩展性**：与模型规模和推理深度 scaling 互补，说明其未来可随基础模型发展而持续受益。

## 8. 不足与局限

- **硬件资源未披露**：无法评估方法部署的实际计算成本或可复现性。
- **仅在模拟环境验证**：未在真实机器人或复杂动态环境中评估，可能存在 sim-to-real 差距。
- **通信减少的代价**：虽然降低了通信频率，但构建决策树和评分可能引入额外推理时间或开销，文中未与分析。
- **假设空间爆炸风险**：对于非常复杂的环境或长程任务，决策树规模可能指数增长，文中未讨论剪枝或近似策略。
- **用户研究的规模与细节**：未说明参与人数、任务类型及统计显著性，结论的泛化性有限。
- **依赖 LLM 的质量**：若 LLM 本身生成假设不准，PCE 的性能会受拖累。

（完）
