---
title: Incentivizing Safer Actions in Policy Optimization for Constrained Reinforcement Learning
title_zh: 约束强化学习中激励更安全行为的策略优化方法
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0592.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 约束强化学习用于安全机器人控制
tldr: 机器人强化学习中的安全性至关重要。本文提出一种在约束RL策略优化中激励更安全行为的方法，通过优化目标和约束的权衡，引导策略满足安全约束。在多个安全关键任务上验证了该方法能有效降低违规次数，同时保持任务性能。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 666, \"height\": 359, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 876, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 758, \"height\": 340, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1817, \"height\": 639, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 876, \"height\": 240, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1817, \"height\": 640, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1817, \"height\": 636, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 882, \"height\": 310, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 875, \"height\": 606, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 880, \"height\": 609, \"label\": \"Figure\"}]"
motivation: 标准RL策略优化可能选择高风险动作，难以满足机器人操作的安全性约束。
method: 在策略优化目标中引入安全激励项，平衡任务奖励与约束满足。
result: 在安全RL基准上，该方法显著降低了约束违规率，且奖励损失小。
conclusion: 通过精心设计的安全激励可有效提升RL策略在安全约束下的表现。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

### 论文中文总结

#### 1. 核心问题与整体含义（研究动机和背景）
- **问题**：在约束强化学习（Constrained RL）中，智能体需要在最大化累积奖励的同时满足预定义的安全约束（成本限制）。连续控制场景下，现有策略优化方法在约束边界附近存在不稳定性，导致训练次优、约束违规或过于保守的策略。
- **动机**：传统方法（如惩罚函数法）仅在约束违反后施加惩罚，缺乏对安全行为的提前激励，引发学习动力学突变；同时，过度激励可能导致策略过于保守，无法达成任务目标。因此，需要一种能在安全区内提供正向激励、在边界附近平滑过渡到惩罚的机制，以稳定训练并平衡安全与性能。

#### 2. 方法论：核心思想、关键技术细节、公式/算法流程
- **核心思想**：利用连续可微的指数线性单元（CELU）作为惩罚函数，将成本函数转化为安全区内的正向激励，并在违反约束时平滑过渡为惩罚，从而引导策略主动保持在安全区内。
- **关键技术细节**：
  - 采用 **CELU** 函数（Continuously Differentiable Exponential Linear Unit）替代常见的 ELU 或 ReLU，解决梯度不连续问题。定义：  
    `CELU(x, α) = α(exp(x/α) - 1)` for x < 0, `= x` for x ≥ 0。其中 α 控制激励的饱和点（−α），避免过度激励。
  - 将 CELU 嵌入策略优化损失函数，联合奖励损失和成本损失：  
    `L(π_k) = L_R(π_k) + η Σ CELU(L_{C_i}(π_k))`  
    其中 `L_R` 为奖励的 PPO 损失（带裁剪），`L_{C_i}` 为成本约束估计（包含优势函数项和当前成本-阈值差），η 为惩罚因子。
  - 通过重要性采样和裁剪稳定更新；算法流程（Algorithm 1）基于 PPO 框架，采样轨迹后计算奖励和成本优势，结合 CELU 损失更新策略，并检查 KL 散度约束（实践中用梯度裁剪实现）。
- **理论保证**：
  - **Theorem 1**：若 η ≥ 最优拉格朗日乘子无穷范数，则优化目标与原约束问题等价。
  - **Theorem 2**：给出近似误差上界，包含 KL 散度项和 CELU 项的贡献。

#### 3. 实验设计
- **场景/数据集**：三个安全 RL 基准环境：
  - **MuJoCo Safety Velocity**（Ant、HalfCheetah、Humanoid、Swimmer）：控制机器人速度不超过约束阈值（25），α=0.5。
  - **Safety Gymnasium**（Goal、Button 任务）：导航至目标同时避开危险区域，约束阈值 25，α=0.1。
  - **Bullet Safety Gymnasium**（Ball、Car 在圆形/收集任务）：约束阈值 25，α=1.0。
  - **多智能体场景**：MetaDrive 模拟器（合作驾驶任务），训练 2000 回合，对比 MAPPO 和 MAP3O。
- **基线方法**：包括一阶方法（CUP、FOCOPS）、拉格朗日方法（CPPOPID、PPO+Lagrangian）、二阶方法（CPO、PCPO）、惩罚函数法（IPO、P3O）以及 vanilla PPO。所有基线来自 OmniSafe 仓库。
- **评估指标**：累积奖励和累积成本（约束违规次数）。每个实验进行了多次独立运行？文本未明确提及随机种子数，但报告了平均曲线（含标准差阴影）。

#### 4. 资源与算力
- **未明确说明**：论文未提及使用的 GPU 型号、数量、训练时长等硬件资源信息。仅提到代码和补充材料开源于 GitHub。

#### 5. 实验数量与充分性
- 实验数量：在 4 大类环境（含多智能体）上进行了评估，每个环境下多个子任务（总计不少于10个任务）。另外进行了两组消融实验：α 在 HalfCheetah/Humanoid 上的影响；成本阈值 d 在 PointGoal1/CarGoal1 上的影响。
- 充分性分析：
  - 覆盖了不同难度、不同成本特性的环境，包括连续移动、导航、障碍规避、多智能体协作，较为充分。
  - 对比了 8 种以上的基线方法，涵盖主流范式，对比公平。
  - 消融实验验证了关键超参数的作用，合理。
  - 但缺乏对 η、学习率、网络架构等的敏感性分析；未报告统计显著性检验（如 t 检验）和随机种子数量，可能影响结论的稳健性。

#### 6. 论文主要结论与发现
- IP3O 在大多数环境中实现了最优或接近最优的约束满足（成本违规最低或并列最低），同时保持了与基线相当的累积奖励，尤其在 MuJoCo 速度和 Bullet Safety Gym 中优势明显。
- 在 Safety Gymnasium 中因 α 较低（0.1）奖励较高但违规略增，体现了可调性。
- 多智能体场景中，MAIP3O 在奖励和成本上均与 MAPPO/MAP3O 持平。
- 消融表明：α=0.5 在速度任务上平衡最佳；成本阈值 d 的变化下 IP3O 能稳定学习可行策略。

#### 7. 优点
- **方法创新**：首次在约束 RL 中采用 CELU 作为自适应激励-惩罚函数，实现了从正激励到惩罚的平滑过渡，解决了现有惩罚函数突变和过度保守的问题。
- **理论贡献**：提供了与原始约束问题等价性证明（Theorem 1）和近似误差上界（Theorem 2）。
- **实验全面**：覆盖多个标准基准和多智能体扩展，对比方法丰富，消融实验有针对性。
- **可调性**：超参数 α 允许用户根据任务安全严格度调节激励强度。

#### 8. 不足与局限
- **实验局限**：未报告随机种子数、统计显著性检验，部分曲线方差可能较大；缺乏对大规模多智能体系统（如超过4个智能体）或高维视觉输入的评估。
- **资源信息缺失**：未说明算力消耗，不利于可重复性。
- **理论深度**：Theorem 2 的误差界依赖于 KL 散度等项，未提供更紧的界的构造或实际可计算性。
- **应用限制**：方法基于 PPO 框架，可能不直接适用于离策略算法；超参数 α 和 η 的选择需手动调优，未给出自动调节策略。
- **偏差风险**：主要从“安全区激励”角度证明，但未讨论在极端安全阈值下（如 d=0）是否依然有效。

（完）
