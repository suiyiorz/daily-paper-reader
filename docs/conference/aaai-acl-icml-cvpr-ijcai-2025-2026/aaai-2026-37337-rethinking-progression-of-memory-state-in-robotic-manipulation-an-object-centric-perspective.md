---
title: "Rethinking Progression of Memory State in Robotic Manipulation: An Object-Centric Perspective"
title_zh: 重新思考机器人操作中记忆状态的进展：以物体为中心的视角
authors: "Nhat Chung, Taisei Hanyu, Toan Nguyen, Huy Le, Frederick Bumgarner, Duy Minh Ho Nguyen, Khoa Vo, Kashu Yamazaki, Chase Rainwater, Tung Kieu, Anh Nguyen, Ngan Le"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/37337/41299"
tags: ["query:ad"]
score: 7.0
evidence: 非马尔可夫机器人操作中的物体中心记忆
tldr: 针对机器人操作中因缺乏物体历史记忆导致策略失败的问题，提出物体中心记忆视角，并构建LIBERO-Mem基准，强调在非马尔可夫任务中跟踪物体状态变迁的重要性。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37337/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1755, \"height\": 584, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37337/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1817, \"height\": 495, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37337/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1324, \"height\": 532, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37337/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 883, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37337/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 881, \"height\": 1340, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37337/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 884, \"height\": 595, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37337/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 841, \"height\": 595, \"label\": \"Table\"}]"
motivation: 非马尔可夫设置下机器人依赖当前场景而非物体历史，导致操作失败。
method: 提出物体中心记忆框架，结合LIBERO-Mem任务套件进行压力测试。
result: 实验表明物体记忆可显著提升长序列操作成功率。
conclusion: 强调物体历史记忆对复杂机器人操作的关键作用。
---

## Abstract
As embodied agents operate in increasingly complex environments, the ability to perceive, track, and reason about individual object instances over time becomes essential, especially in tasks requiring sequenced interactions with visually similar objects. In non-Markovian settings, critical decision cues lie in object histories rather than the current scene. Without persistent memory of prior interactions (what was used, where it was placed, or how it changed), visuomotor policies may fail, repeat past actions, or overlook completed ones. To surface this challenge, we introduce LIBERO-Mem, a non-Markovian task suite for stress-testing robotic manipulation under object-level partial observability. It combines short- and long-horizon object tracking with temporally sequenced subgoals, requiring reasoning beyond the current frame. However, vision-language-action (VLA) models often struggle in such settings, with token scaling quickly becoming intractable even for tasks spanning just a few hundred frames. We propose Embodied-SlotSSM, a slot-centric VLA framework built for temporal scalability. It maintains spatio-temporally consistent slot identities and leverages them through two mechanisms: (1) slot-state-space modeling for reconstructing short-term history, and (2) a relational encoder to align the input tokens with action decoding. Together, these components enable temporally grounded, context-aware action prediction. Experiments show Embodied-SlotSSM's baseline performance on LIBERO-Mem and general tasks, offering a scalable solution for non-Markovian reasoning in object-centric policies.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：在非马尔可夫（non-Markovian）机器人操作任务中，传统视觉‑语言‑动作（VLA）模型依赖当前观察帧进行决策，忽略了对物体历史交互（如是否已抓取过某个特定碗、放置位置、操作次数）的记忆，导致策略重复、遗漏或失败。这一问题在需要长序列、多步推理且存在视觉相似物体的场景中尤为突出。
- **背景**：现实环境（如厨房、实验室）中，机器人频繁面对部分可观测的 POMDP 问题——相同视觉输入可能对应不同语义状态（例如，同一碗被拿起一次和两次的视觉差异极小，但所需动作完全不同）。缺乏物体级别的持久记忆是当前 VLA 模型的关键短板。
- **研究含义**：作者提出应重新审视“记忆状态”在机器人操作中的作用，从物体中心的视角构建持久、结构化的记忆机制，使机器人能够“记住”对每个具体物体的过去操作，从而做出正确决策。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：将物体中心表示与状态空间模型（SSM）结合，维护一组随时间保持身份一致的“插槽”（slots），每个插槽对应一个物体，并通过插槽级别的状态空间建模来编码短期与长期历史，最终将这些记忆特征用于动作解码。
- **关键技术细节**：
  1. **物体定位与插槽初始化**：使用 **Slot Attention** 将视觉特征分解为 \(K=16\) 个物体插槽 \(s^1_t,\dots,s^K_t\)。槽的初始化在 \(t=0\) 时随机，后续帧使用上个时间步的最终槽值，实现跨帧的身份一致性。
  2. **插槽状态空间建模（SlotSSM）**：对每个插槽独立应用输入依赖的 SSM 递归：
     \[
     h_t = A(e_t)h_{t-1} + B(e_t)e_t,\quad y_t = C(e_t)h_t，
     \]
     其中 \(e_t\) 为插槽编码。矩阵 \(A,B,C\) 按插槽做块对角化，每个块仅依赖于相应插槽输入，保证模块化。
  3. **瞬态记忆（Transient Memory）**：通过窗口预测机制，对每个插槽预测其过去 \(p\) 和未来 \(q\) 帧的表示（例如 \(p=q=1\)），从而捕捉短时运动连贯性。预测通过“Past MLP”独立解码每个插槽得到。
  4. **时序对比损失**：为增强插槽跨帧一致性，对比同一插槽在不同时间步的表示（正样本）与不同插槽或不同视频的表示（负样本）。
  5. **动作解码**：结合来自 Slot Fusion 的插槽记忆 \(d^j_t\)（融合当前槽、预测下一槽及 Oracle 子目标）和关系编码器（Relation Encoder）生成的 16 个关系标记，输入 LLM 动作解码器预测动作：
     \[
     \hat{a}_t \sim P_\theta(a_t \mid \{r^j_t\}, \{d^j_t\}, l)
     \]
     其中 \(l\) 为语言指令。
- **算法流程**（文字描述）：视觉输入 → DINOv2 编码 → Slot Attention 获得插槽 → SlotSSM 对每个插槽进行递归 → 窗口预测 + 对比损失训练 → Slot Fusion（加入 oracle 子目标） → Relation Encoder 生成关系标记 → 冻结的 LLM 解码器输出动作。

## 3. 实验设计：数据集、Benchmark、对比方法

- **数据集/Benchmark**：
  - **LIBERO-Goal**：用于评估一般操作任务的马尔可夫设置（10 个子任务，如 “bowl in stove” 等）。
  - **LIBERO-Mem**：本文新提出的非马尔可夫基准，包含 10 个任务，覆盖四种物体中心记忆类型：
    1. Object Motion（OM）：需记住上次动作（拿起/放下）。
    2. Object Sequence（OS）：需记住操作次数（如重复放置 3/5/7 次）。
    3. Object Relation（OR）：需跟踪物体间的顺序关系（如左右交换）。
    4. Object Occlusion（OO）：需记忆被遮挡物体的位置。
    每个任务含 120 条轨迹（100 训练 +20 验证），每任务 200–700 帧。
- **评估指标**：
  - LIBERO-Goal：任务成功率（%）。
  - LIBERO-Mem：子目标完成率（%），因任务被分解为原子子目标。
- **对比方法**：
  - **基线**：π0（Dense token VLA）、SlotVLA（h=1 和 h=8，即历史帧数为 1 或 8 的槽式 VLA）。
  - **本文方法**：Naive Embodied‑SlotSSM（简称 Naive E‑SlotSSM），使用 oracle 子目标作为额外信息。
- **实验设置**：所有实验在模拟器中运行，固定场景布局但随机初始化物体位姿。每个任务重复 N=20 个种子，计算平均成功率或子目标完成率。

## 4. 资源与算力

- **文中未明确说明**所使用的 GPU 型号、数量及训练时长。仅提到实验在仿真环境（LIBERO）中执行，未提供任何计算资源细节（如 GPU 类型、训练轮数、总计算量等）。因此无法评估其计算开销或可复现性。

## 5. 实验数量与充分性

- **实验数量**：
  - LIBERO-Goal：10 个任务，对比了三种方法（SlotVLA h=1, h=8, Naive E-SlotSSM）。
  - LIBERO-Mem：10 个任务，对比了四种方法（π0, SlotVLA h=1, SlotVLA h=8, Naive E-SlotSSM）。
  - 每个方法在每任务上运行 20 个种子，统计平均结果。
- **充分性评价**：
  - **覆盖性较好**：覆盖了多种记忆类型（OM、OS、OR、OO）以及一般操作。
  - **客观性**：多次随机种子，但基线方法在 LIBERO-Mem 上成功率极低（多数为 0%），仅本文方法有非零结果，可能存在选择性报告（因 baseline 完全失败，容易显示提升）。
  - **缺失消融实验**：未对 SlotSSM 窗口大小、插槽数量、对比损失贡献进行消融；未分析无 oracle 子目标时的性能。Naive E-SlotSSM 依赖 oracle，无法衡量自主记忆推理能力。
  - **公平性**：基线方法未使用 oracle 子目标，而本文方法额外使用了 oracle，对比存在不公平因素（作者明确说明这是“oracle‑supported”版本，称其为弱基线）。

## 6. 主要结论与发现

1. **LIBERO‑Mem 确实具有挑战性**：现有 VLA 模型（π0、SlotVLA）在非马尔可夫任务上子目标完成率几乎为零（平均 0%–5%），说明这些任务确实需要超出当前帧的持久记忆。
2. **Naive Embodied‑SlotSSM 有显著提升**：在 LIBERO‑Mem 上平均子目标完成率 14.8%，部分任务（如 T1、T3、T9、T10）获得非零成功（最高 50%），证明了插槽式记忆对物体中心 POMDP 的有效性。
3. **一般操作任务也受益**：在 LIBERO‑Goal 上，Naive E‑SlotSSM 平均成功率 83.0%，超过 SlotVLA（h=8）的 75.5%，表明结构化记忆对马尔可夫任务也有正向作用。
4. **槽一致性动态保持**：定性可视化显示，模型能在运动过程中稳定跟踪同一物体插槽，展现物体持久性（object permanence）。
5. **子目标推理仍是瓶颈**：即便有 oracle 提示，平均完成率仅 14.8%，说明自主推断子目标进度和记忆检索仍是开放挑战。

## 7. 优点

- **问题定义清晰**：明确指出现有 VLA 模型在非马尔可夫设置下的根本缺陷，并构建了专门的压力测试基准 LIBERO‑Mem，填补了该方向评估空白。
- **方法有创新性**：将 Slot Attention 与状态空间模型（SSM）结合，提出可扩展的物体中心记忆框架，兼顾模块化与时间序列建模。
- **理论支撑**：提出了命题 1，形式化地论证了历史信息在视觉混淆下辨别物体身份的必要性。
- **实验设计有层次**：既有一般任务（LIBERO‑Goal）又有专门非马尔可夫任务，方便对比记忆模块的增量贡献。
- **可视化**：展示了插槽注意力动态，直观证明模型学到了物体持久性。

## 8. 不足与局限

- **实验局限**：
  - **环境局限**：所有实验在模拟器（LIBERO）中完成，未在真实机器人上验证，泛化性存疑。
  - **Oracle 依赖**：Naive E‑SlotSSM 使用了 oracle 子目标（如 “bowl 1 on plate 3”），这在现实场景中不可能获得，使得结果不能完全反映模型自主记忆推理能力。作者也承认这是“弱基线”。
  - **基线选择不全面**：未与专门设计用于 POMDP 的强化学习方法（如循环策略、Transformer‑XL、Memory‑augmented 策略）对比；未与最新 Mamba 或 RNN 类 VLA 对比。
  - **缺失消融**：未分析插槽数量、SSM 状态维度、对比损失权重、窗口大小等超参数的影响。
- **性能局限**：即使有 oracle，平均子目标完成率仅 14.8%，很多任务仍完全失败（T4、T5、T6、T7、T8 为 0%），说明当前框架在长时序或复杂关系推理上远未成熟。
- **算力信息缺失**：未提供训练资源，影响可复现性和效率评估。
- **可扩展性问题**：作者指出 token scaling 在长序列中仍难以处理（16 个插槽 × 序列长度），本文方法本质上仍通过窗口限制规模，未完全解决该问题。
- **偏差风险**：由于基线几乎完全失败，任何非零结果都会显得突出，可能导致对方法真实能力的过高估计。

（完）
