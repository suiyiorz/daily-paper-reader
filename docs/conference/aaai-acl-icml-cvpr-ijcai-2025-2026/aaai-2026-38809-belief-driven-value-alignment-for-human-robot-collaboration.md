---
title: Belief-Driven Value Alignment for Human-Robot Collaboration
title_zh: 信念驱动的价值对齐用于人机协作
authors: "Saisai Li, Bing Shi, Yiming Xia, Xiao Su"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38809/42771"
tags: ["query:ad"]
score: 8.0
evidence: 信念驱动的价值对齐用于人机协作
tldr: 针对人机价值对齐中假设人类完全理性的局限，提出基于粒子滤波的分层动态规划算法，通过建模机器人的信念状态自适应对齐人类偏好，在协作任务中显著提升对齐准确性。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38809/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 878, \"height\": 450, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38809/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 860, \"height\": 402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38809/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 860, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38809/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 863, \"height\": 405, \"label\": \"Figure\"}]"
motivation: 现有CIRL假设人类完全理性且能完全获取机器人信念。
method: 使用粒子滤波估计信念，结合分层动态规划求解博弈。
result: 在模拟人机协作场景中，对齐效果优于传统方法。
conclusion: 放松理性假设使得价值对齐更贴近真实协作场景。
---

## Abstract
As intelligent systems advance rapidly, human-robot collaboration is becoming increasingly important. Ensuring that the intelligent agent's behaviors match human intentions and value preferences is crucial for effective collaboration, which is termed the value alignment problem. Within the Reinforcement Learning (RL) paradigm, value alignment typically relies on pre-designed reward functions, and Cooperative Inverse Reinforcement Learning (CIRL) is often used to model value alignment as a human-robot game. However, existing works often assume that human is perfectly rational, and can fully obtain robot’s belief on human’s preference. To address this limitation, we propose a Particle Filter-based Hierarchical Dynamic Programming algorithm (PFHDP). By modeling the robot's belief state, this algorithm ensures the correct updates of human's estimate of the robot's belief. This allows human to adopt more targeted pedagogical behaviors to guide the robot based on her understanding of the robot's current belief, achieving belief alignment between human and robot and thereby promoting value alignment more effectively. Furthermore, we run experiments to evaluate the proposed method in two cooperative scenarios against some typical benchmark approaches. The experimental results show that our method can strengthen the alignment of belief states between human and robot, leading to enhanced value alignment.

---

## 论文详细总结（自动生成）

# 论文总结：Belief-Driven Value Alignment for Human-Robot Collaboration

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：在人机协作中，如何使机器人（AI智能体）的行为与人类的意图和价值观保持一致，即“价值对齐”（value alignment）。  
- **背景**：传统方法如强化学习依赖预设奖赏函数，而协作逆强化学习（CIRL）将其建模为两人博弈，但现有工作大多假设人类是完全理性的，且能直接获取机器人对自身偏好的信念（belief）。这种假设不现实，导致人类无法根据机器人当前信念采取有针对性的教学行为，进而影响对齐效果。  
- **整体含义**：本文提出一种更贴近真实场景的解决方案，通过双向信念对齐（人类→机器人信念，机器人→人类价值）来促进价值对齐。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：显式建模机器人信念（\( b_R \)）以及人类对机器人信念的估计（\( b_H(b_R) \)），利用粒子滤波（Particle Filter）持续跟踪并更新信念状态，使人类能基于对机器人信念的估计做出更精准的教学行为，最终实现价值对齐。  
- **关键技术细节**：
  - **前向策略优化模块（机器人决策）**：机器人基于当前信念 \( b_R \) 通过最大化联合动作价值函数选择动作（公式4），并采用贝叶斯更新信念（公式6）。
  - **反向教学优化模块（人类决策）**：人类使用Boltzmann模型（公式1）概率性选择动作，其效用来自联合动作价值 \( Q \)（公式7）。人类对机器人信念的估计 \( b_H(b_R) \) 通过粒子滤波实时推算（公式8-14）：从先验采样粒子，依据历史轨迹和机器人动作更新粒子权重，经系统重采样后得到近似分布。最终算法收敛时满足 \( b_H(b_R) = b_R \) 且 \( b_R(\hat{\theta}) \to 1 \)。
  - **算法流程（PFHDP）**：初始化信念和粒子集，每步循环：机器人选动作→人类选动作→获得奖赏并转移状态→生成预测粒子→计算权重→重采样→更新机器人信念 \( b_R \)→更新人类估计 \( b_H(b_R) \)→迭代至收敛后取出最大置信偏好 \( \theta_{\max} \) 并导出最优策略。

## 3. 实验设计
- **使用场景**：两个标准测试环境（引自Hadfield-Menell et al. 2016）
  - **ChefWorld**：一维协作场景，人类根据食谱选食材，机器人推断目标菜肴并辅助，奖赏为是否匹配目标。
  - **GridWorld**：二维网格场景，人类和机器人移动收集特征点，奖赏取决于人类对不同特征点的偏好（+1/-1）。
- **对比方法（Benchmark）**：
  - **ECIRL**（Malik et al. 2018）：经典CIRL，假设人类完全理性，基于MCTS求解。
  - **oDec-AIRL**（Suresh et al. 2024）：多智能体逆强化学习，通过去中心化控制隐式建模人类。
  - **ECIRL-R**（Malik et al. 2018变体）：考虑有限理性但忽略人类对机器人信念的估计。
- **评估指标**：
  - ChefWorld：真实偏好信念 \( b(\hat{\theta}) \)（越大越好）和平均累积奖赏。
  - GridWorld：真实与估计值差异（Euclidean距离，越小越好）和平均累积奖赏。

## 4. 资源与算力
- 文中**未明确说明**使用的GPU型号、数量或训练时长。仅在致谢中提到感谢北京并行科技提供的高性能计算资源，具体算力细节缺失。

## 5. 实验数量与充分性
- **实验数量**：每组实验重复10次取均值，保证稳定性。  
  - ChefWorld：信念演化图（1组）+ 不同规模（N=8/10等）累积奖赏图（1组）。
  - GridWorld：差异演化图（1组）+ 不同规模累积奖赏图（1组）。
  - 消融实验：理性系数β取0.5、1、5、10，分析信念对齐和价值对齐（2组图，含500步长交互）。
- **充分性与公平性**：  
  - 覆盖两个差异化的协作环境，对比了三种代表性基线（完美理性、隐式建模、有限理性无信念估计），实验条件控制合理。  
  - 消融实验验证了β的影响，并指出β=5时价值对齐最优，而β=10虽信念对齐快但教学行为减弱，论证充分。  
  - **局限**：所有实验在模拟环境中进行，未涉及真实人类受试者或物理机器人，因此实际泛化性有待验证。

## 6. 论文的主要结论与发现
- PFHDP通过显式建模 \( b_H(b_R) \) 实现了更精准的信念一致性，从而在两种协作场景下均取得了最高的累积奖赏和最低的信念估计差异，优于ECIRL、oDec-AIRL和ECIRL-R。
- 消融表明：人类理性系数β需保持在合理范围（如β=1~5），过小（β=0.5）导致随机行为无法提供区分性信号，过大（β=10）则削弱教学行为，反而降低价值对齐程度。
- 信念对齐（\( b_H(b_R)=b_R \)）是价值对齐的必要非充分条件，人类还需持续提供与真实偏好相关的辨别性动作。

## 7. 优点（方法和实验设计亮点）
- **方法创新**：首次在CIRL中系统引入人类对机器人信念的估计，利用粒子滤波实现可扩展的信念跟踪，突破了“人类完全理性且能获取机器人信念”的理想假设。
- **算法结构清晰**：分为前向策略优化和反向教学优化两个模块，便于理解和实现。
- **实验设计**：在不同复杂度的环境中验证，且针对理性系数β做了细致的消融，深入揭示了信念对齐与价值对齐的关系。

## 8. 不足与局限
- **实验覆盖**：仅使用纯模拟环境（ChefWorld/GridWorld），缺乏真实人类交互实验，无法评估人类实际行为建模的准确性。
- **计算复杂度**：粒子滤波在高维状态空间下可能面临效率问题，论文自身提及未来需整合深度网络以扩展到大尺度问题。
- **模型限制**：人类决策采用固定Boltzmann模型，未考虑人类策略的动态适应性或跨模态通信（如语言、手势）。
- **评估客观性**：未报告完整的超参数搜索过程，粒子数Nb=100的选取可能依赖经验，缺乏敏感性分析。
- **公平性**：对比方法ECIRL和ECIRL-R可能未实现其最新变体，但论文已尽量保持公平（统一环境与参数设置）。

（完）
