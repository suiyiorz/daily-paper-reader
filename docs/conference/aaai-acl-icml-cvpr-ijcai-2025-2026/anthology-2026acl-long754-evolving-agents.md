---
title: Evolving Agents
title_zh: 进化代理
authors: Leonardo Ranaldi
date: 2026-07-01
pdf: "https://aclanthology.org/2026.acl-long.754.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 通过伪符号抽象实现开放环境中的自主学习进化代理
tldr: 当前AI代理无法在开放动态环境中自主生成抽象概念。本文提出EVA（进化代理），一种基于伪符号抽象的新型自主学习范式。EVA通过元控制系统动态协调观察和主动交互，实时提炼状态、动作和目标的抽象表示。该方法使代理能够构建稳健的内部课程，实验表明其在新任务泛化和持续学习方面显著优于静态模型。
source: ACL-2026-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1648, \"height\": 818, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 799, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 797, \"height\": 339, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 769, \"height\": 415, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 782, \"height\": 417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 797, \"height\": 448, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 803, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 807, \"height\": 460, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 545, \"height\": 286, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.754/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 315, \"height\": 283, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1660, \"height\": 410, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 818, \"height\": 669, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 677, \"height\": 325, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 812, \"height\": 197, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 838, \"height\": 996, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 815, \"height\": 311, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 793, \"height\": 374, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 795, \"height\": 375, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.754/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 795, \"height\": 464, \"label\": \"Table\"}]"
motivation: 现有AI代理在开放环境中缺乏自主生成抽象概念的能力，限制其适应性和泛化。
method: 提出EVA范式，通过伪符号抽象和元控制动态生成状态、动作和目标的抽象表示。
result: 在多个持续学习场景中，EVA代理展现出优越的泛化能力和鲁棒性。
conclusion: EVA为实现真正的自主代理提供了新路径。
---

## Abstract
AI agents struggle to operate within open and dynamic environments because they lack a fundamental capacity: the autonomous generation of abstractions. Current models remain static entities, incapable of compressing the infinite complexity of the real world into generalisable concepts once their training phase has concluded.We introduce EVA (Evolving Agents), a novel paradigm for autonomous learning driven by pseudo-symbolic abstraction. EVA introduces a meta-control system that dynamically orchestrates observation and active interaction to distil on-the-fly abstract representations of states, actions, and goals. By disentangling contextual noise from pure logical reasoning, these pseudo-symbolic abstractions allow the agent to construct a highly robust internal curriculum.EVA leverages these self-generated abstractions to form an internal curriculum. This continuous compression of raw sensorimotor experience into reusable concepts allows the agent to independently guide its own exploration, planning, and error correction. Structured upon a bi-level evolutionary-developmental (Evo/Devo) framework, EVA demonstrates how the dynamic refinement of abstractions enables rapid adaptation to unforeseen scenarios. This approach resolves the domain mismatch problem and lays the groundwork for truly autonomous, continuously evolving AI models.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：当前由 LLM 驱动的 AI 代理在规划、推理和工具使用方面表现良好，但**缺乏从经验中抽象出可复用机制的能力**，导致行为脆弱、重复犯错，无法在分布偏移或连续交互中持续适应和进化。
- **核心问题**：推理、记忆和元控制各自独立，没有统一的表示层来系统性地提炼和复用经验。代理无法将收集到的轨迹转化为可迁移的结构化知识，因而难以规模化地适应新场景。
- **论文含义**：提出 EVA（Evolving Agents）框架，通过**准符号抽象（quasi-symbolic abstractions）** 作为统一的表示基石，将感知、策略、记忆和元控制整合在一起，使代理能够通过经验动态重构自身的推理表示，进而实现持续的自我进化。

## 2. 论文提出的方法论

- **核心思想**：准符号抽象 A = (V, T, C, E)，其中 V 表示变量/实体/工具/状态，T 表示状态-动作转换，C 表示约束/前提条件，E 表示结果信号（进度、成功等）。这种抽象同时充当执行轨迹的结构化摘要、记忆检索的接口以及元状态计算的源表示。
- **关键技术细节**：
  - **Perceptor（感知器）**：从当前任务目标、观测和历史轨迹窗口 τ<sup>(k)</sup><sub>t</sub> 中诱导出抽象的 At。
  - **Actor（执行器）**：基于抽象 At 和可选的检索到的实例化抽象 eAt 生成下一步动作。
  - **Controller（控制器）**：从 At 和记忆 Mt 中提取元状态 smt = [ct, δt, νt, ℓt]（置信度、矛盾率、新颖性、进度），并选择四种元动作之一：ACT（直接执行）、ABSTRACT（重新抽象）、RETRIEVE（检索记忆）、ROLLBACK（回滚到最近的一致抽象）。
  - **记忆管理**：成功或失败后的抽象按效用评分 qη 进行存储和修剪，保护新入库的抽象直到被至少 m 次使用后才允许淘汰；检索时使用基于加权 Jaccard 的结构相似度匹配。
- **学习流程**：
  - 两阶段学习：**Phase I（先验元控制校准）**：在环境采样上通过策略梯度更新 Controller 参数 ϕ，同时 Perceptor 和 Actor 执行内循环更新；**Phase II（交互时适应）**：冻结 ϕ，通过 GRPO 更新 Perceptor 和 Actor 的适配器，Confidence gating（置信度门控 ζt）控制梯度是否生效。
  - 内循环（GRPO）：每组采样 8 条轨迹，组合任务奖励、结构一致性和新颖性进行更新。

## 3. 实验设计

- **任务与数据集**：
  - 交互式规划：ALFWorld（成功率）、WebShop（平均分）、AppWorld（TGC 和 SGC）。
  - 分布偏移：ScienceWorld 和 SW-Shift（中段注入领域变化）。
  - 知识密集型检索：Natural Questions、TriviaQA、HotpotQA、2WikiMultiHopQA（精确匹配）。
- **基准方法**：
  - 提示式代理：Direct、ReAct。
  - 强化学习：GRPO。
  - 技能学习：SkillRL、GEPA、SkillOpt。
  - 检索增强：Search-R1、Search-R2（仅检索任务）。
- **EVA 变体**：EVA（全单代理）、EVA-Doc（冻结权重）、EVA-S（仅成功记忆）、EVA-A（仅 Actor 适应）、EVA-M（多智能体）。

## 4. 资源与算力

- 论文附录 C 明确说明：**所有实验在 4 块 NVIDIA H200 GPU 上运行**。
- 训练时长未明确给出，但提到了内循环每步采样 8 条轨迹，外循环校准使用 50 个环境，以及具体超参数（学习率 1e-6、组大小 8 等）。
- 总体而言，算力信息部分透明，但缺乏总训练小时数或能耗数据。

## 5. 实验数量与充分性

- **实验组数充足**：
  - 主结果表 1（Qwen-2.5-7B 上对比 6+ 种方法）、表 7/8（Llama-3-8B 和 Mistral-v0.3-7B 的额外骨干）。
  - 消融实验表 2：组件移除（Controller、Memory、准符号抽象、在线适应、外循环、置信门控）和记忆格式对比（原始轨迹、纯文本技能）共 8 种配置。
  - 附加分析：Controller 元动作分布（图5）、训练动态（图6）、记忆效用与大小（图7）、置信门控敏感性（图8）、跨模型迁移（图9）、抽象质量校准（图10），以及 WebShop 示例（表10）。
- **公平性与客观性**：所有方法使用相同骨干、任务划分和最大交互预算。对比了冻结权重和不同适应策略，消融设计系统，结论稳健。缺失对更多基线的比较（如 Reflexion、SWE-agent 等），但覆盖了代表性方法。

## 6. 主要结论与发现

- **性能优势**：EVA 在所有交互任务上显著优于现有方法，ALFWorld 成功率 88.7%（比 SkillOpt 高 4.4）、SW-Shift 恢复至 60.9%（比 SkillOpt 高约 9.7）、Avg. LER 降至 6.2%。
- **组件贡献**：准符号抽象移除造成最大性能下降（-24.9），其次是在线适应（-20.6）和 Controller（-14.7）。冻结权重变体 EVA-Doc 仍优于大多基线，表明表示层本身即有巨大价值。
- **适应能力**：在分布偏移下，EVA 仅需约 150 步即可恢复，优于冻结权重和冷启动变体。
- **跨模型迁移**：由 Llama-3 诱导的记忆可在 Qwen-2.5 上直接使用，性能损失不超过 4.5 个点，表明抽象具有模型无关性。
- **多智能体扩展**：EVA-M 在可分解任务（AppWorld，+6.6 TGC）上额外获益，而在单一任务上收益有限。

## 7. 优点

- **统一的表示层**：首次将准符号抽象同时用作执行轨迹摘要、记忆检索接口和元控制状态源，减少了异构接口带来的复杂性。
- **两阶段学习设计**：慢速元控制校准与快速感知-策略适应分离，兼顾稳定性和适应性，避免持续元更新导致的不稳定。
- **结构化记忆管理**：基于效用分数（结合成功率、使用次数、时效性）的修剪机制，保持记忆紧凑且高质量。
- **可审计性与可迁移性**：准符号抽象是人工可读的，且跨模型迁移实验证明了其鲁棒性，为联邦或共享知识场景奠定基础。
- **丰富的消融与诊断**：从组件移除、内存格式到置信门控，系统揭示了每个设计的贡献，实验设计严谨。

## 8. 不足与局限

- **计算开销**：Controller 推理和在线抽象生成增加延迟，论文仅提及可引入稀疏路由缓解，未进行实测对比。
- **手工设计模式**：抽象模式 (V,T,C,E) 为手工定义，未实现无监督或可微结构归纳，未来需向多模态扩展。
- **置信度代理**：ct 仅为序列概率似然，并非结构正确性的校准估计；检索依赖 typed 谓词，表面差异可导致误匹配。
- **忠实性问题**：与 CoT 类似，正确答案不一定意味着抽象捕获了真实内部计算，存在欺骗风险。
- **多智能体部分初步**：EVA-M 仅在有限设置下评估，缺乏对团队规模、组合任务结构的扩展研究。
- **真实场景缺失**：仅在模拟环境（ALFWorld、WebShop、ScienceWorld）和合成检索任务上测试，未评估真实世界中的不完全证据、动态约束等挑战。

（完）
