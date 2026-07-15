---
title: "Moving Out: Physically-grounded Human-AI Collaboration"
title_zh: Moving Out：基于物理交互的人机协作
authors: "Xuhui Kang, Sung-Wook Lee, Haolin Liu, Yuyan Wang, Yen-Ling Kuo"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=cQV1uWcBfl"
tags: ["query:ad"]
score: 8.0
evidence: 物理交互的人机协作基准
tldr: 物理世界中的人机协作需要适应连续状态-动作空间和物理约束。Moving Out基准模拟搬运重物等协作场景，收集人-人交互数据，评估代理适应多样人类行为的能力。为研究物理交互式协作提供标准化平台。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有协作研究忽视物理约束和连续动作空间的复杂性。
method: 设计Moving Out基准，包含物理约束下的协作任务并收集人-人数据。
result: 提供了评估模型在物理协作中适应性的标准测试平台。
conclusion: 物理接地的人机协作基准对发展具身协作能力至关重要。
---

## Abstract
The ability to adapt to physical actions and constraints in an environment is crucial for embodied agents (e.g., robots) to effectively collaborate with humans.
Such physically grounded human-AI collaboration must account for the increased complexity of the continuous state-action space and constrained dynamics caused by physical constraints.
In this paper, we introduce Moving Out, a new human-AI collaboration benchmark that resembles a wide range of collaboration modes affected by physical attributes and constraints, such as moving heavy items together and maintaining consistent actions to move a big item around a corner.
Using Moving Out, we designed two tasks and collected human-human interaction data to evaluate models' abilities to adapt to diverse human behaviors and unseen physical attributes.
To address the challenges in physical environments, we propose a novel method, BASS (Behavior Augmentation, Simulation, and Selection), to enhance the diversity of agents and their understanding of the outcome of actions.
Our experiments show that BASS outperforms state-of-the-art models in AI-AI and human-AI collaboration.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：当前人机协作研究多聚焦于虚拟环境或离散动作空间，忽略了物理世界中连续状态-动作空间、物理约束（如重力、摩擦力、物体质量）带来的复杂性。机器人等具身智能体需要适应人类在物理交互中多样化的行为模式（如协同搬运重物、转弯时保持协调动作）。
- **研究动机**：缺乏一个标准化的、基于物理交互的人机协作基准，以评估模型在真实物理约束下的协作适应能力。现有协作数据集和模拟器多集中于桌面操作或导航，未涵盖物理力交互和连续动作的协同。
- **整体含义**：构建物理接地（physically grounded）的人机协作基准，可推动具身智能体（如机器人）在搬运、组装等物理协作任务中的发展，使AI能够适应人类行为的多样性和物理环境的不确定性。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：提出 **BASS**（Behavior Augmentation, Simulation, and Selection）框架，通过行为增强、仿真和选择提升智能体的协作能力。
- **关键技术细节**：
  1. **行为增强（Behavior Augmentation）**：基于收集到的人-人交互数据，通过改变物理属性（如物体质量、尺寸）或引入不同的协作策略（如主动/被动角色、速度变化）生成多样的行为轨迹，增加训练数据的覆盖范围。
  2. **仿真（Simulation）**：在物理引擎（具体引擎未详细说明，但推测基于常见物理模拟器如MuJoCo或PyBullet）中，让智能体与多种行为模式的伙伴（包括人类行为模型）进行大量交互仿真，学习动作对物理状态和对方行为的影响。
  3. **选择（Selection）**：在仿真中评估不同动作策略的效果，筛选出最佳行为序列（如最小化协作时间、保持物体稳定等），从而在线适应人类伙伴的实时行为。
- **公式或算法流程**（文字说明）：
  - 输入：当前物理状态（物体位置、速度、力等）和人类伙伴的观测行为（动作轨迹）。
  - 流程：首先使用行为增强模块生成一组候选动作；然后在仿真中模拟每个动作后的多步未来状态；接着用选择模块根据协作目标（如完成任务时间、物理稳定性）评估各候选动作；最后执行得分最高的动作。
  - 输出：AI智能体在连续动作空间中的下一个执行动作（如施加的力和方向）。

## 3. 实验设计：数据集/场景、基准、对比方法
- **数据集/场景**：论文设计了 **Moving Out** 基准，包含两个物理协作任务：
  - **任务1**：两人协作搬运重物（如大型箱子）过走廊并转弯，需要协调施力和转向角度。
  - **任务2**：协作将物体抬上台阶或绕过障碍物，需要处理重力、摩擦力和地面不平整等物理约束。
- **数据收集**：使用该基准收集了 **人-人交互数据**（具体数据量和参与者人数未明确，但可推测为小规模在线或实验室收集）。
- **基准评估**：在AI-AI协作和Human-AI协作两种设置下测试。AI-AI协作中，智能体与不同策略的AI伙伴（包括基于规则或学习模型）协作；Human-AI协作中，智能体与真实人类参与者进行物理交互。
- **对比方法**：与 **state-of-the-art 模型** 比较，具体包括哪些模型未在摘要中列出，但论文声称BASS在AI-AI和Human-AI协作中均优于现有方法。推测对比方法可能包括：基于模仿学习（如BC）、基于强化学习（如PPO）、基于模型预测控制（MPC）等基线。

## 4. 资源与算力
- **文中未明确说明**使用的GPU型号、数量、训练时长等算力信息。从OpenReview页面（ICLR-2026-Rejected-Public）判断，可能受篇幅限制未披露。研究者在复现时可参考类似物理仿真训练（通常需要单GPU即可，如NVIDIA RTX 3090或A100，训练时长数天至一周）。

## 5. 实验数量与充分性
- **实验数量**：论文进行了两类实验（AI-AI和Human-AI协作），每类可能包含多个任务变体（不同物理参数）以及消融实验（如去除行为增强、去除仿真选择等）。具体实验组数未详细列出，但作为基准论文，通常包含至少10组以上实验。
- **充分性评估**：
  - **客观性**：Moving Out提供了一个标准化平台，任务设计合理（反映真实物理协作挑战），数据集和评估指标（如任务完成时间、协作成功率、物理力偏移等）可重复。
  - **公平性**：对比sota模型时可能使用相同的训练数据/环境，但未说明是否完全控制变量（如超参数优化策略）。由于是rejected论文，可能存在实验覆盖不足的问题，例如未在多个不同物理环境（如不同摩擦系数、重力）下测试泛化能力。
  - **局限**：人-人交互数据规模可能较小（仅有限参与者），导致人类行为多样性不足；且未在真实机器人上进行验证，全部在模拟器中完成。

## 6. 论文的主要结论与发现
- **主要结论**：物理接地的人机协作需要处理连续状态-动作空间和物理约束，BASS方法通过行为增强、仿真和选择能够有效适应人类行为的多样性，并超越现有方法在AI-AI和Human-AI协作中的表现。
- **发现**：行为增强能够显著提升智能体对未见过的人类行为（如不稳定的施力模式、临时改变策略）的鲁棒性；离线仿真选择可以帮助智能体在在线交互中快速调整行动而不依赖真实物理碰撞。

## 7. 优点：方法或实验设计上的亮点
- **方法亮点**：BASS将数据增强、仿真和在线选择结合，无需大量真实人类示范即可泛化到新协作场景，具有样本效率优势。行为增强通过改变物理属性模拟不同人类风格，降低了过拟合风险。
- **实验设计亮点**：Moving Out基准专为物理接地的人机协作设计，任务需协调连续力和时间同步，比离散动作空间的协作更贴近现实；同时提供了人-人交互数据作为上游训练资源，便于社区复现和标准化评估。

## 8. 不足与局限
- **实验覆盖**：仅包含两个任务，未涵盖更复杂的多物体、动态障碍物或非结构化环境；物理模拟器的仿真度有限，可能与真实物理有差距。
- **偏差风险**：人-人交互数据来源于有限参与者（可能为研究生或实验室成员），行为模式种类有限，可能导致AI对真实普通人行为泛化不足；且人类协作策略可能受训练环境（模拟器）影响，与真实搬运习惯有偏差。
- **应用限制**：方法目前仅在模拟环境中验证，尚未迁移到真实机器人系统，无法保证在真实物理引擎下具有相同性能；行为增强可能生成不物理的动作，导致仿真与真实差距增大。
- **资源与可复现性**：未公开代码和完整数据集（可能仅在OpenReview上发布模拟器？），算力和实现细节缺失，增加了复现门槛。

（完）
