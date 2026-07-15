---
title: The Evolving Landscape of LLM- and VLM-Integrated Reinforcement Learning
title_zh: LLM和VLM结合的强化学习格局演变
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/1181.pdf"
tags: ["query:ad"]
score: 5.0
evidence: LLM和VLM结合的强化学习综述
tldr: 大语言模型和视觉语言模型与强化学习的结合是当前研究热点。本文综述了这一领域的最新进展，涵盖方法分类、应用场景和未来方向。对于机器人智能控制领域，该综述提供了有价值的参考，但其主要贡献在于总结而非提出新方法。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1181/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 898, \"height\": 530, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1181/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 894, \"height\": 425, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1181/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 894, \"height\": 423, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1181/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 892, \"height\": 423, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1181/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1839, \"height\": 1071, \"label\": \"Table\"}]"
motivation: LLM和VLM与强化学习的融合是新兴方向，但缺乏系统性的综述。
method: 对现有LLM/VLM+RL方法进行系统分类和分析，总结关键技术和挑战。
result: 提供了全面研究图谱和未来研究建议。
conclusion: 该综述为相关领域研究者提供了清晰的参考。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **背景**：强化学习（RL）在序列决策任务中表现优异，但面临缺乏先验知识、长时规划困难、奖励设计依赖人工等挑战。大语言模型（LLM）和视觉语言模型（VLM）具备强大的多模态理解和推理能力，可弥补 RL 的不足。
- **动机**：近年来涌现大量将 LLM/VLM 集成到 RL 中的工作，但缺乏系统性的综述，特别是未覆盖 VLM 和 LLM agent 的新维度。本文旨在建立统一分类法，梳理现有方法，并指出开放问题与未来方向。

## 2. 方法论：核心思想、关键技术细节
- **提出三部分分类法**（Taxonomy），将 LLM/VLM 在 RL 中的作用分为三类角色：
  - **LLM/VLM as Agent**：作为决策策略（Policy）。
    - 参数化（Parametric）：通过强化学习（如政策梯度、动作分解）微调 LLM 内部参数，适应特定任务（如 AGILE、Retroformer、TWOSOME、POAD、GLAM）。
    - 非参数化（Non-parametric）：保持 LLM 冻结，通过上下文学习、记忆机制或外部资源增强决策（如 ICPI、Reflexion、REMEMBERER、ExpeL、RLingua、LangGround）。
  - **LLM/VLM as Planner**：生成高层计划，分解复杂任务为子目标。
    - 综合规划（Comprehensive）：一次性生成全部子目标序列（如 SayTap、LMA3、PSL、Inner Monologue、LgTS）。
    - 增量规划（Incremental）：逐步生成子目标，结合执行反馈（如 SayCan、LLM4Teach、AdaRefiner、BOSS、LLaRP、Text2Motion）。
  - **LLM/VLM as Reward**：自动设计奖励信号。
    - 生成奖励函数（Reward Function）：用 LLM 编写可执行奖励代码，并迭代优化（如 Text2Reward、Zeng et al.、Eureka）。
    - 充当奖励模型（Reward Model）：直接输出标量奖励或辅助训练奖励模型（如 Kwon et al.、PREDILECT、ELLM、RL-VLM-F、VLM-RM、MineCLIP）。
- 文中还提及了少数不属于三类的方法（如作为世界模型、轨迹筛选等），但主要聚焦三分类。

## 3. 实验设计
- **本文自身无实验**，是一篇综述论文。
- **综述涵盖的论文实验场景**：包括单任务/多任务、单智能体/多智能体、在线/离线/混合 RL 设置；涉及领域包括机器人操控、导航、游戏（如 Minecraft、Werewolf）、策略推理等。
- **Benchmark 多样性**：各引用论文使用不同环境（如 MetaWorld、Robosuite、Minecraft、文本游戏、多智能体协作等）。
- **对比方法**：各论文通常与标准 RL 基线（如 PPO、DQN）、纯 LLM 基线、或人类设计的奖励函数对比，部分还比较了不同微调策略。

## 4. 资源与算力
- **文中未明确说明自己使用的计算资源**。作为综述，未报告训练或推理的 GPU 型号、数量、时长。
- 引用的部分工作使用了 GPT-4、GPT-3、PaLM、CLIP 等大型模型，其推理成本高，但具体算力未量化。
- **结论**：资源开销是文中指出的未来方向之一（高推理成本、可扩展性问题），但未提供具体数值。

## 5. 实验数量与充分性
- **本文作为综述，未进行自身实验**，评估基于对 30+ 篇代表性论文的分析。
- **充分性**：文章覆盖了 2020 年 GPT-3 后至 2024 年的主要工作，分类清晰并给出表格（Table 1）对比各方法属性（FM、微调方式、任务设置、指标等），但受篇幅限制难免遗漏部分相关论文。
- **客观性**：作者指出了各方法优缺点（如参数化 vs 非参数化、综合规划 vs 增量规划），并讨论了局限，无明显偏向。

## 6. 主要结论与发现
- 集成 LLM/VLM 可显著提升 RL 的样本效率、泛化能力、可解释性和人机对齐。
- 分类法有效梳理了现有研究方向：作为 Agent（直接决策）、Planner（高层规划）、Reward（自动奖励设计）。
- 未来关键挑战：**接地问题**（语言计划到物理动作的映射）、**固有偏差**（LLM 偏见导致次优行为）、**表示问题**（数值信号与文本的转换）、**动作建议**（利用 LLM 作为教师提供动作指导，可加速学习）。
- 开放性不足：幻觉、计算成本、可扩展性、偏见缓解、更通用的表示空间等。

## 7. 优点
- **系统分类**：提出统一的三角色分类法，清晰组织文献，便于读者快速定位方法。
- **覆盖面广**：包括 LLM 和 VLM，涵盖最新进展（如 VLM 作为奖励模型、多智能体场景）。
- **深入分析**：对每类方法的优点、缺点、折衷进行了讨论（如参数化 vs 非参数化，综合 vs 增量规划，奖励函数 vs 奖励模型）。
- **指出明确未来方向**：给出四个具体开放问题（接地、偏差、表示、动作建议），有指导意义。

## 8. 不足与局限
- **篇幅限制**：仅选取代表性论文，可能遗漏部分重要工作（作者自己承认）。
- **缺乏定量比较**：作为综述，未提供统一 benchmark 下的性能对比，读者难以横向比较不同方法的优劣。
- **技术细节深度有限**：对每篇论文仅做概括性描述，未深入分析核心技术缺陷（如遗忘、幻觉、安全）。
- **应用局限**：多数方法仍处于模拟环境或受限场景，真实世界部署面临鲁棒性、延迟、硬件约束等挑战（文中已提及）。
- **偏差风险**：依赖的 LLM/VLM 本身存在偏见，文中未系统评估偏对象如何影响 RL 学得的策略。

（完）
