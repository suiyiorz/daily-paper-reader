---
title: "How Foundational Skills Influence VLM-based Embodied Agents: A Native Perspective"
title_zh: 基础技能如何影响基于VLM的具身智能体：原生视角
authors: "Bo Peng, Pi Bu, Keyu Pan, Xinrun Xu, Yingxiu Zhao, Miao Chen, Yang Du, Lin Li, Jun Song, Tong Xu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/37781/41743"
tags: ["query:ad"]
score: 8.0
evidence: VLM驱动具身智能体基准
tldr: 现有VLM驱动具身智能体基准使用高层次命令或离散动作空间，脱离现实。提出NativeEmbodied基准，采用统一的低层动作空间，在复杂场景中评估多项技能，填补了高低层联合评估的空白。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37781/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1793, \"height\": 857, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37781/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 702, \"height\": 699, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37781/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 869, \"height\": 254, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37781/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 869, \"height\": 329, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37781/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 755, \"height\": 860, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37781/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1682, \"height\": 476, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37781/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1535, \"height\": 814, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37781/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1834, \"height\": 756, \"label\": \"Table\"}]"
motivation: 当前基准采用非原生设置，缺乏对低层与高层技能的联合评估。
method: 构建NativeEmbodied基准，使用统一低层动作空间，设计三个代表性高层任务。
result: 揭示了基础技能对具身智能体性能的关键影响。
conclusion: 为VLM驱动具身智能体的评估提供了更真实的原生基准。
---

## Abstract
Recent advances in vision–language models (VLMs) have shed light on human-level embodied intelligence. However, existing benchmarks for VLM-driven embodied agents still rely on high-level commands or discretised action spaces—``non-native'' settings that diverge markedly from the real world. Moreover, current benchmarks focus exclusively on high-level tasks,  while lacking joint evaluation and analysis on both low- and high-level. To bridge these gaps, we present \textbf{NativeEmbodied}, a challenging benchmark for VLM-driven embodied agents that adopts a unified, native low-level action space. Built upon diverse simulated scenes, NativeEmbodied first designs three representative high-level tasks in complex scenarios to evaluate overall performance. For more detailed and comprehensive performance analysis, we further decouple the entangled skills behind complex tasks and construct four types of low-level tasks, each corresponding to a key fundamental embodied skill.
This joint evaluation across task and skill granularities enables a fine-grained assessment of embodied agent. Comprehensive experiments on the best VLMs reveal pronounced deficiencies in certain fundamental embodied skills. Further analysis shows that these bottlenecks severely constrain performance on high-level tasks. Our NativeEmbodied not only pinpoints the key challenges faced by current VLM-driven embodied agents, but also provides valuable insight for future development of this field.

---

## 论文详细总结（自动生成）

好的，遵照您的要求，以下是对该论文的详细中文总结：

# 论文深度分析总结：《基础技能如何影响基于VLM的具身智能体：原生视角》

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：视觉-语言模型（VLM）的进步推动了具身智能的发展，但现有VLM驱动的具身智能体评估基准存在严重缺陷。
- **核心问题**：
    1.  **非原生动作空间（Non-Native Action Space）**：现有基准通常将低级动作抽象为高级命令（如“看向苹果”、“传送到桌子”）。这种“非原生”设置掩盖了空间对齐、导航等关键具身技能，与现实世界脱节。
    2.  **任务耦合（Coupled Task Design）**：现有基准仅关注高层任务，这些任务纠缠了多种基础技能，仅凭整体成功率无法诊断出具体是哪项技能成为了瓶颈。
- **研究意义**：本文旨在回答两个关键问题：Q1：VLM具身智能体真正必需的基础技能有哪些？Q2：这些基础技能如何影响高层任务的执行？
- **核心贡献**：为解决上述问题，本文提出了 **NativeEmbodied** 基准，从更真实、更细粒度的视角评估VLM驱动的具身智能体。

## 2. 论文提出的方法论

- **核心思想**：采用“自底向上”的解耦评估策略。首先定义并评估核心的低级基础技能，然后在这些技能的基础上构建和评估高层复杂任务，从而精确诊断性能瓶颈。
- **关键技术细节**：
    1.  **原生动作空间（Native Action Space）**：
        - 动作空间是AI2THOR模拟器提供的最底层原始动作，如 `MoveAhead x米`， `RotateRight x度`， `LookUp x度`等。
        - 这些动作的“原生性”在于：没有抽象封装，要求智能体像真实机器人一样，通过微小的运动和旋转指令与环境交互。
    2.  **解耦的任务层次结构（Decoupled Task Hierarchy）**：
        - **高层复杂任务**（3类）：评估整体性能。
            - **探索**：通过问询物体数量、位置等问题，评估智能体的环境感知能力。
            - **搜索**：要求智能体定位并导航到指定物体，并使用屏幕中心的十字准星对准它，评估导航与精细对齐能力。
            - **交互**：执行“拾取-放置”任务，如将目标物体放入指定容器中，评估操作与学习能力。
        - **低级基础技能**（4类）：评估核心具身能力，每个技能对应一个独立任务，目的是从复杂任务中解耦出来。
            - **感知**：要求智能体以结构化格式描述视野中的物体、其空间位置及所在容器。
            - **空间对齐**：智能体初始位置靠近目标，且目标在视野内，仅允许旋转视角以将十字准星对准目标，评估精细视觉-运动控制能力。
            - **导航**：智能体需从远处移动至目标物体1米范围内，评估路径规划和运动执行能力。
            - **规划**：将运动抽象为可调用的导航接口，评估智能体的任务拆解和序列规划能力。
    3.  **数据收集流水线**：
        - 利用AI2THOR模拟器批量化生成样本。
        - 采用“人机协作”方法，先使用高级VLM进行5轮评估，根据成功率筛选出“完全成功”和“完全失败”的样本，再由人工专家审核评估其难度和可行性，确保数据集的高质量和适当难度。

## 3. 实验设计

- **数据集/场景**：使用 **AI2THOR** 模拟器构建的 **NativeEmbodied** 基准，包含 **1,085个** 样本，覆盖3个高层任务和4个低层任务。
- **Benchmark特性**：具有原生（Native）、多模态（Multimodal）、解耦（Decoupled）等特性，填补了现有基准在精细度、原生性和任务层次上的空白。
- **对比方法（Baselines）**：共评估了15个开闭源VLM，涵盖四大模型家族：
    - **GPT家族**：GPT-4o， GPT-4v， GPT-o3， GPT-o4-mini。
    - **Claude家族**：Claude-3.5-Sonnet, Claude-3.7-Sonnet, Claude-4-Sonnet, Claude-4-Opus。
    - **Gemini家族**：Gemini-2.0-flash, Gemini-2.5-flash, Gemini-2.5-pro。
    - **Qwen家族**：Qwen2.5-VL-72B/32B/7B/3B。
- **评估指标**：除了成功率外，还引入了**平均步数**、**加权平均步数**、**平均最近距离**、**平均最近像素距离**、**精确率/召回率/F1分数**等多维度指标进行细粒度评估。

## 4. 资源与算力

- **未明确说明**：论文中并未明确提及训练/推理所使用的具体GPU型号、数量以及训练时长。仅提到在推理时，所有VLM的温度统一设置为0。因此，无法从论文中获得具体的算力需求信息。

## 5. 实验数量与充分性

- **实验数量**：论文进行了多组、大规模的实验，包括：
    - **主实验**：对所有15个模型在3类高层任务和4类低层任务上进行了全面评估。
    - **消融实验（基础技能）**：选取Claude-3.5-Sonnet，分别替换感知、对齐、导航和规划四个技能模块，观察其对高层任务的影响。
    - **消融实验（思考模式）**：在Gemini-2.5-Pro和Claude-4-Opus上，对比了“开启思考模式”与“不开启”的性能差异。
    - **错误案例分析**：定性分析了三种最常见的错误类型。
- **充分性与客观性评估**：
    - **充分性**：实验设计非常全面且系统。主实验覆盖了主流VLM，消融实验设计精巧，能有效验证核心假设。错误案例分析也增加了研究的深度。
    - **客观性与公平性**：论文严格控制了变量（如温度），并报告了多个指标（成功率、效率），避免了单一指标的片面性。消融实验专注于一个代表性模型，得出的结论具有一定的普适性，但并未在所有模型上重复消融，这可以被视为一个小的局限。整体而言，实验设计严谨，分析客观。

## 6. 论文的主要结论与发现

1.  **高层任务挑战巨大**：当前最强的VLM在高层的原生设置任务中也表现挣扎。例如，在“搜索”任务上，最佳模型GPT-o3的成功率也仅为34.9%。这表明现有VLM距离在真实世界中自主完成复杂任务还相差甚远。
2.  **基础技能表现不均衡**：模型在感知和规划任务上表现相对较好，但在**空间对齐**和**导航**这些需要动态空间交互的任务上表现极差。超过一半的模型导航成功率低于50%，且大部分模型的对齐成功率也极低。这揭示了**精细空间操作**是当前VLM的关键短板。
3.  **基础技能的瓶颈效应**：技能消融实验证实，**导航和规划**是“探索”和“交互”等长周期任务的共同瓶颈；而**对齐能力**是“搜索”任务的核心瓶颈。
4.  **思维模式的双刃剑效应**：开启“思考模式”能**提升**感知和规划这类认知能力，但会**显著降低**对齐和导航这类行动执行能力。这说明过度推理可能会干扰直觉化的动作执行。
5.  **常见错误模式**：智能体在原生环境中常出现**探索不足**（过早下结论）、**冗余视角调整**（陷入死循环）和**频繁碰撞**（无法从历史经验中学习）等问题。

## 7. 优点

- **创新性强的基准设计**：NativeEmbodied是首个采用完全“原生”低级动作空间进行高低层任务联合评估的基准，非常贴近现实机器人操作场景。
- **精细化的诊断能力**：通过解耦任务，该基准能够像“显微镜”一样，将复杂任务分解为具体技能，从而精确识别出智能体的核心能力缺陷，而非仅仅给出一个笼统的成功率。
- **深刻的实验与分析**：实验设计系统，涵盖了主实验、关键消融实验和思维模式探索，分析深入，发现了“双刃剑效应”等深刻结论，为未来VLM具身智能体的研究提供了明确的方向指引。

## 8. 不足与局限

- **模拟环境与现实差距**：尽管动作是“原生”的，但实验仍在AI2THOR模拟器中完成。与现实世界中的物理动力学、传感器噪声、物体不确定性等仍有差距，结论在真实机器人上的泛化性有待验证。
- **任务类型和场景有限**：基准仅包含三种高层任务，虽然具有代表性，但仍相对单一。复杂交互场景（如多步骤、多物体协作）的覆盖不够广泛。
- **未涉及模型训练与微调**：本文主要聚焦于模型在零样本或少样本情况下的推理评估，并未探索如何通过强化学习或数据微调来改进基础技能。其贡献在于**诊断问题**，而非**解决问题**。
- **消融实验模型有限**：核心的技能消融实验仅在Claude-3.5-Sonnet上进行，虽然其具有代表性，但在其他模型上重复该实验能增强结论的普适性。

（完）
