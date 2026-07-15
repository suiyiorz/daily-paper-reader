---
title: "S-EPOA: Overcoming the Indistinguishability of Segments with Skill-Driven Preference-Based Reinforcement Learning"
title_zh: "S-EPOA: 通过技能驱动的偏好强化学习克服段落的不可区分性"
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0664.pdf"
tags: ["query:ad"]
score: 4.0
evidence: 技能驱动的偏好强化学习
tldr: 针对强化学习中段序列不可区分问题，提出技能驱动偏好学习框架，利用技能偏好引导策略优化，提升长序列决策性能。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1547, \"height\": 544, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 785, \"height\": 307, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1744, \"height\": 988, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1371, \"height\": 417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1813, \"height\": 482, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 783, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1427, \"height\": 326, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-664/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 819, \"height\": 259, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-664/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 804, \"height\": 263, \"label\": \"Table\"}]"
motivation: 传统偏好强化学习难以区分长期行为中的关键段。
method: 引入技能偏好作为区分信号，结合逆强化学习。
result: 在模拟基准上提升了策略学习效率和最终性能。
conclusion: 技能偏好有效解决了段级不可区分性挑战。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义

- **研究动机**：在基于偏好的强化学习（PbRL）中，人类需要对比两个行为片段（segment）并给出偏好。然而，当两个片段的行为非常相似（即“段落的不可区分性”）时，人类难以准确判断，导致偏好标签错误，影响奖励模型训练和策略性能。这一问题限制了PbRL在实际中的应用。
- **整体含义**：论文试图通过引入技能（skill）机制来克服这一不可区分性问题，使得对比的片段来自不同技能、行为差异显著，从而提高偏好标签的准确性，提升PbRL的鲁棒性与学习效率。

## 2. 论文提出的方法论

- **核心思想**：将无监督技能发现与偏好学习相结合。首先通过无监督预训练学习一组多样且可区分的技能；然后在在线训练阶段，设计一种基于技能的查询选择机制，优先选择来自不同技能、表现差异大的片段对进行人类偏好标注，从而减少不可区分性带来的标签错误。
- **关键技术细节**：
  - **技能预训练阶段**：使用互信息最大化（如APS、DIAYN、CIC等）训练策略 \(\pi(a|s, z)\)，使得不同技能 \(z\) 能产生不同的行为。预训练后得到一个具备多样技能的初始策略。
  - **基于技能的查询选择**：
    - 训练一个轨迹估计器 \(R_\theta(z)\)，用于预测技能 \(z\) 生成的轨迹在当前奖励模型下的累计回报。
    - 对于候选查询（两个片段 \(\sigma_0, \sigma_1\)，分别由技能 \(z_0, z_1\) 生成），计算选择指标：
      \[
      I(\sigma_0, \sigma_1) = (1 + |R_\theta(z_0) - R_\theta(z_1)|) \cdot (1 + \text{Var}(P_\psi[\sigma_1 \succ \sigma_0]))
      \]
      其中第一项衡量技能表现差异，第二项衡量奖励模型的不确定性。最终选择 \(I\) 最大的查询。
  - **在线训练**：使用所选查询获得人类偏好，更新奖励模型 \(\hat{r}_\psi\)，然后用该奖励模型训练策略（SAC）。
  - **技能任务适配**：通过采样多个技能，选择轨迹估计值最高的技能作为当前任务的技能 \(z_{\text{task}}\)，从而将多技能策略转化为单任务策略。
- **算法流程**（文字说明）：
  1. 无监督技能预训练，得到策略 \(\pi(a|s, z)\)。
  2. 每若干轮交互后，更新轨迹估计器 \(R_\theta(z)\)。
  3. 根据技能选择指标（公式7）选出最可区分的查询对，向教师获取偏好标签。
  4. 用偏好数据训练奖励模型，并用该奖励模型重标记经验回放缓冲区。
  5. 使用SAC更新策略（基于当前最佳技能 \(z_{\text{task}}\)）。

## 3. 实验设计

- **数据集/场景**：
  - **DMControl**：4个复杂运动任务（Cheetah_run、Walker_run、Quadruped_walk、Quadruped_run）。
  - **Metaworld**：3个机器人操作任务（Door_open、Button_press、Drawer_open）。
- **基准方法**（Baselines）：
  - PEBBLE、SURF、RUNE、RIME（均为最先进的PbRL方法），以及使用真实奖励的SAC作为性能上界。
- **噪声教师模型**：模拟人类决策不确定性。当两个片段的总真实奖励差异小于阈值 \(\epsilon \cdot R_{\text{avg}}\) 时，随机分配偏好标签（0/1）。\(\epsilon\) 取0.1、0.2、0.3。
- **对比内容**：
  - 学习曲线（Episode Return vs Timesteps）。
  - 查询可区分性比率（表1）。
  - 人类实验（图6）对比查询的区分难易度。
  - 可视化查询（图7）。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量以及训练时长。仅提及实验使用了5个随机种子（5 seeds）进行统计，但未提计算资源细节。

## 5. 实验数量与充分性

- **实验数量**：
  - 在7个任务上（4个DMControl + 3个Metaworld）进行主实验，每个任务多个 \(\epsilon\) 设置。
  - 消融实验（图5）：组件分析、理想教师、不同技能发现方法、不同查询数量、数据增强影响等。
  - 人类实验（图6）：3个随机种子，每个种子20个偏好标签。
- **充分性**：实验覆盖了多种任务类型（运动、操作）、多种噪声水平（0.1~0.3）、多个基线方法、多个消融设置，结果用标准差展示，统计性较好。但缺乏大规模或真实人类在线实验，且算力资源未报告，可能影响可重复性。

## 6. 论文的主要结论与发现

- S-EPOA在几乎所有任务和噪声水平下显著优于现有PbRL基线，表现出更强的鲁棒性和学习效率。
- 基于技能的查询选择能够选出更可区分的片段对，降低标签错误率，这一点通过人类实验和数值指标得到验证。
- 无监督技能预训练本身就能提升PbRL性能，而与技能查询选择结合效果最好。
- S-EPOA可以适配多种技能发现方法（APS、DIAYN、CIC），具有良好泛化性。
- 在理想教师（\(\epsilon=0\)）情况下，S-EPOA依然能提升学习效率。

## 7. 优点

- **问题定位精准**：首次明确指出并验证了PbRL中“段落的不可区分性”问题，并通过理论和实验证明。
- **方法创新性强**：将技能发现与查询选择有机结合，利用技能空间提升查询可区分性，设计简洁有效。
- **实验充分**：包括多种任务、多种噪声模型、消融实验和人类实验，验证方法有效性。
- **开源可复现**：提供了算法伪代码和实现细节（附录），便于复现。

## 8. 不足与局限

- **算力资源未公开**：未说明GPU型号、训练时间等，不利于他人评估计算成本。
- **实验仅使用仿真场景**：未在真实机器人或真实人类在线反馈中进行验证，真实性有限。
- **噪声教师模型假设简单**：仅基于总回报差异的阈值随机翻转，可能无法完全模拟人类标注误差的复杂模式。
- **对技能发现方法的依赖**：虽然实验显示多个方法均有效，但技能预训练质量和多样性仍可能影响最终性能，在极端复杂环境中可能不稳定。
- **未讨论长时任务或稀疏奖励环境**：实验任务相对简单（奖励密集），在更困难场景中的表现未知。
- **人类实验规模较小**：每个任务仅60个标签（3种子×20），可能存在统计偏差。

（完）
