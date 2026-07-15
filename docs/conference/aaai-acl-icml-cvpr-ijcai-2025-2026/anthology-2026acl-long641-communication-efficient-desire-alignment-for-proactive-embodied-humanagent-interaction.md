---
title: Communication-Efficient Desire Alignment for Proactive Embodied Human–Agent Interaction
title_zh: 通信高效的主动化身人机交互中的欲望对齐
authors: "Yuanfei Wang, Xinju Huang, Fangwei Zhong, Yaodong Yang (杨耀东), Yizhou Wang, Yuanpei Chen, Hao Dong"
date: 2026-07-01
pdf: "https://aclanthology.org/2026.acl-long.641.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 主动化身人机交互的家庭仿真
tldr: 真实世界的人机交互需要智能体快速熟悉用户偏好并提供主动帮助，但沟通成本高。本文提出通信高效的欲望对齐方法，并构建HA-Desire家庭仿真环境，其中LLM驱动代理用户模拟用户行为。该方法使智能体在有限交互中适应习惯并提供主动服务，实验表明显著提升了交互效率和用户满意度。
source: ACL-2026-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.641/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 753, \"height\": 284, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.641/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1489, \"height\": 622, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.641/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1497, \"height\": 660, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.641/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1495, \"height\": 354, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.641/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1500, \"height\": 355, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.641/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 802, \"height\": 258, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.641/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 671, \"height\": 518, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.641/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 805, \"height\": 468, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.641/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 826, \"height\": 153, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.641/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 535, \"height\": 276, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.641/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 825, \"height\": 339, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.641/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 825, \"height\": 223, \"label\": \"Table\"}]"
motivation: 智能体需要快速适应用户习惯并提供主动帮助，但沟通成本高。
method: 提出通信高效的欲望对齐方法，结合LLM代理用户和家庭仿真环境进行训练。
result: 在HA-Desire环境中，方法实现了高效的欲望对齐和主动帮助，提升了用户满意度。
conclusion: 该方法为现实世界中长期人机交互提供了一种低通信成本的适应方案。
---

## Abstract
Effective real-world human–agent interactions, such as household robotic services, are often long-term and repeated. Beyond executing tasks, agents are expected to quickly become familiar with individual users. In everyday use, people do not want to repeatedly specify precise instructions. Instead, they prefer agents that adapt to their habits and preferences over interaction while minimizing communication effort. This poses a key challenge: enabling agents to rapidly align with user needs and provide proactive assistance within limited communication. To study this problem in a realistic embodied setting, we first introduce HA-Desire, a home assistance simulation environment. HA-Desire features an LLM-driven proxy user with value-driven preferences and natural language behavior, enabling systematic evaluation of how agents adapt to users across interactions and satisfy their desires. We further propose FAMER, a framework that integrates goal-relevant memory, desire-centered mental reasoning, and efficient communication to infer user preferences from interaction while reducing unnecessary dialogue. Experiments across embodied household tasks and different LLMs show that FAMER improves both task success and interaction efficiency compared to existing baselines, highlighting the importance of communication-efficient desire alignment for proactive embodied agents that support users without requiring frequent instructions.

---

## 论文详细总结（自动生成）

# 论文总结：Communication-Efficient Desire Alignment for Proactive Embodied Human–Agent Interaction

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：在长期、重复的人机交互场景（如家庭机器人服务）中，用户不希望频繁给出精确指令，而是期望智能体通过有限的交互快速学习其习惯和偏好，并提供主动帮助。现有方法往往依赖简化环境或缺乏自然语言交互，无法模拟真实世界中用户具有价值驱动的偏好和最小化沟通成本的意愿。
- **研究意义**：解决该问题对于实现高效、用户友好的具身智能体在家庭场景中的部署至关重要。本文定义了“通信高效的欲望对齐”任务，并构建了仿真环境和算法框架来系统研究。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：提出 **FAMER**（Fast Adaptation via MEntal Reasoning）框架，利用 LLM 的推理和常识能力，通过三个模块协同工作，实现快速偏好推断、高效规划和通信优化。
- **关键技术细节**：
  - **Key Information Extraction**：从感知模块（Mask R-CNN + 3D点云）构建的场景图中提取目标相关信息（如物体位置），存入跨剧记忆缓冲区，减少重复探索。
  - **Desire-Centered Mental Reasoning**：
    - **Goal Confirmation**：通过LLM推理用户对代理提议的回应，提取已确认的目标。
    - **Desire Inference**：基于行动/对话历史、已确认目标和之前剧的目标，推理用户潜在的价值属性（如“渴”、“甜食偏好”）和剩余欲望，从而缩小假设空间。
  - **Efficient Communication**：在发起新询问前进行内部反思，避免冗余问题；若需沟通，则生成针对具体模糊点的聚焦询问，减少用户负担。
- **算法流程**（文字说明）：每轮交互，代理从环境获取RGB-D观测，经感知模块生成场景图；KeyInfo模块提取并存储关键位置信息；Desire模块结合记忆推理用户欲望并确认部分目标；Efficient Communication模块决定是否需要询问及如何问；最后Goal-oriented Planning过滤无关动作并执行下一步。

## 3. 实验设计：数据集/场景、Benchmark、对比方法

- **环境**：基于 VirtualHome 构建的 **HA-Desire** 仿真环境，包含6种房屋布局、110+物体类别，提供 RGB-D 观测。代理与LLM驱动的代理用户（GPT-4o）交互，用户具有隐藏的价值属性（如 Hungry, Thirsty 等），并通过自然语言提示而非直接告知目标。
- **Benchmark 任务**：
  - **Prepare Afternoon Snack**（10个潜在目标），分 Medium（2个目标，60步）和 Large（4个目标，120步）。
  - **Set Up Dinner Table**（8个潜在目标），同样分 Medium 和 Large。
- **对比方法**：
  - **CoELA**：多智能体协作框架，修改后缺乏明确目标追踪。
  - **ProAgent**：主动协作代理，扩展跨剧记忆。
  - **MHP**：基于MCTS的层次规划器，引入子目标采样。
- **评估指标**：Score（正确目标奖励+错误惩罚，归一化到0-1）、Communication Cost（对话token数）。

## 4. 资源与算力

- 论文明确说明：实验在一台配备 **NVIDIA GeForce RTX 4090 GPU** 和 **Intel Core i9-13900K CPU** 的工作站上进行。
- 未提及训练时长或总计算量。LLM采用 GPT-4o，调用次数与实验轮次相关，但未给出具体统计。

## 5. 实验数量与充分性

- **主要实验**：每个任务/难度/方法独立运行6次，每次与固定用户交互3个剧（K=3）。报告平均值。
- **消融实验**：在 Snack-M 上比较了三个变体（w/o Desire, w/o EC, w/o KeyInfo），验证各组件贡献。
- **附加实验**：
  - 用户偏好进化场景（6个剧，第4剧后重置价值属性）。
  - 情节长度影响（20-100步）。
  - 用户直接揭示目标设置。
  - 不同LLM骨干（GPT-4o, GPT-5, Gemini2.5, Qwen3）的鲁棒性测试。
  - **人类研究**：8名参与者，每人评估4种方法（CoELA, FAMER w/o Desire, FAMER w/o EC, FAMER），在 Snack-M 和 Table-L 任务上各3个剧，共192 episode交互，采用7点Likert评分（满意度、帮助性、通信效率）。
- **充分性评价**：实验设计较全面，覆盖了多种设置（不同难度、进化偏好、人类验证），对比基线合理，消融充分。但主要结果在仿真环境中，真实物理部署缺失。

## 6. 主要结论与发现

- FAMER 在所有任务和指标上显著优于三个基线，第三个剧即达到完美分数（Score=1.0），而 CoELA 次之，ProAgent 和 MHP 最差。
- 消融实验表明：**Desire-Centered Mental Reasoning** 和 **Efficient Communication** 模块对性能影响最大，KeyInfo 模块主要提升效率。
- 在进化偏好实验中，FAMER 能在偏好变化后快速恢复（第6剧恢复到0.79分）。
- 不同LLM骨干下性能稳定（平均分波动很小）。
- 人类研究显示 FAMER 在满意度（5.6）、帮助性（5.9）、通信效率（5.6）上均大幅领先其他方法（CoELA约4.4/4.7/4.2）。

## 7. 优点

- **环境创新**：HA-Desire 提供了具有价值驱动、自然语言交互的代理用户，更真实地模拟了用户偏好和通信负担，为相关研究提供了标准测试平台。
- **方法论亮点**：FAMER 将心理推理（Desire Inference）与高效通信（反射机制）结合，有效减少了冗余询问和探索，实现了快速适应。
- **实验完备性**：包括多种基线、消融、人类研究、LLM鲁棒性测试，结果可靠且可复现。
- **人类研究**：直接的真人用户验证增强了结论的现实意义。

## 8. 不足与局限

- **仿真局限性**：所有实验在模拟环境中进行，未部署到真实机器人上，无法反映真实世界的感知噪声、动作不确定性等挑战。
- **场景有限**：仅测试了两个家庭任务（Snack 和 Table），虽然可扩展但当前覆盖面窄。
- **抗风险考虑**：作者指出系统可能受到对抗性攻击（恶意输入导致代理误判），但未提出具体防护机制。
- **算力开销**：依赖 GPT-4o 等大型模型反复调用，在真实部署中可能面临延迟和成本问题，论文未讨论这一点。
- **实验公平性**：基线方法中 ProAgent 和 MHP 被扩展了跨剧记忆，但 CoELA 未明确增加，可能导致比较不公平；不过主结果仍是全面的。

（完）
