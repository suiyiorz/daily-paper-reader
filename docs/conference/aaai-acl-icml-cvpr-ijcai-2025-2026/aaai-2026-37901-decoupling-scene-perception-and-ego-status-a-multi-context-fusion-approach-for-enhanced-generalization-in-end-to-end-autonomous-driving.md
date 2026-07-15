---
title: "Decoupling Scene Perception and Ego Status: A Multi-Context Fusion Approach for Enhanced Generalization in End-to-End Autonomous Driving"
title_zh: 解耦场景感知与自身状态：端到端自动驾驶泛化的多上下文融合方法
authors: "Jiacheng Tang, Mingyue Feng, Jiachao Liu, Yaonong Wang, Jian Pu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/37901/41863"
tags: ["query:ad"]
score: 9.0
evidence: 端到端自动驾驶感知规划泛化
tldr: 现有端到端自动驾驶架构因过早融合自身状态导致泛化受限。本文提出AdaptiveAD，采用多上下文融合策略解耦场景感知与自身状态，避免ego状态作为捷径。双分支BEV编码器分别处理场景和自身信息，在规划模块晚融合，显著提升了在未知环境下的鲁棒性和泛化能力。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37901/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 852, \"height\": 614, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37901/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1761, \"height\": 653, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37901/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 828, \"height\": 556, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37901/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 855, \"height\": 492, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37901/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 814, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37901/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1373, \"height\": 736, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37901/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 794, \"height\": 479, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37901/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 869, \"height\": 356, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37901/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 876, \"height\": 319, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37901/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 866, \"height\": 463, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37901/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 871, \"height\": 463, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37901/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 861, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37901/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 864, \"height\": 173, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37901/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 865, \"height\": 248, \"label\": \"Table\"}]"
motivation: 端到端自动驾驶架构过度依赖自身状态，导致泛化差和场景理解不足。
method: 提出AdaptiveAD，通过双分支BEV编码器和多上下文融合策略，在规划模块晚融合场景和自身状态，避免ego捷径。
result: 在多个仿真和真实数据集上，AdaptiveAD显著提升了驾驶规划泛化性能。
conclusion: 解耦场景感知与自身状态可有效提升自动驾驶系统的鲁棒性和通用性。
---

## Abstract
Modular design of planning-oriented autonomous driving has markedly advanced end-to-end systems. However, existing architectures remain constrained by an over-reliance on ego status, hindering generalization and robust scene understanding. We identify the root cause as an inherent design within these architectures that allows ego status to be easily leveraged as a shortcut. Specifically, the premature fusion of ego status in the upstream BEV encoder allows an information flow from this strong prior to dominate the downstream planning module. To address this challenge, we propose AdaptiveAD, an architectural-level solution based on a multi-context fusion strategy. Its core is a dual-branch structure that explicitly decouples scene perception and ego status. One branch performs scene-driven reasoning based on multi-task learning, but with ego status deliberately omitted from the BEV encoder, while the other conducts ego-driven reasoning based solely on the planning task. A scene-aware fusion module then adaptively integrates the complementary decisions from the two branches to form the final planning trajectory. To ensure this decoupling does not compromise multi-task learning, we introduce a path attention mechanism for ego-BEV interaction and add two targeted auxiliary tasks: BEV unidirectional distillation and autoregressive online mapping. Extensive evaluations on the nuScenes dataset demonstrate that AdaptiveAD achieves state-of-the-art open-loop planning performance. Crucially, it significantly mitigates the over-reliance on ego status and exhibits impressive generalization capabilities across diverse scenarios.

---

## 论文详细总结（自动生成）

# Decoupling Scene Perception and Ego Status: 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有端到端自动驾驶架构（如 UniAD、VAD）普遍存在对自身状态（ego status）的过度依赖，导致模型倾向于“惯性驾驶”而非“看路驾驶”。这种因果混淆（causal confusion）使模型在复杂或长尾场景下泛化能力差，容易产生致命轨迹。
- **根源诊断**：作者指出问题不仅是数据偏差（如 nuScenes 中直行场景占比高），更关键的是**架构层面的设计缺陷**——自身状态过早地融合进 BEV 编码器，使得下游规划模块可以直接利用这个强先验作为捷径，绕过复杂的场景理解。
- **研究意义**：提出一种从架构层面切断捷径的方案，通过解耦场景感知与自身状态，提升系统的鲁棒性和泛化能力，推动端到端自动驾驶向更安全、更可解释的方向发展。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 核心思想
提出 **AdaptiveAD**，采用**多上下文融合策略（multi-context fusion）**，显式地将场景驱动推理（scene-driven）与自身状态驱动推理（ego-driven）解耦为双分支结构，再通过自适应融合模块整合两类决策，从而从根本上抑制自身状态捷径。

### 关键技术细节

- **双分支架构**：
  - **场景驱动分支（scene-driven branch）**：BEV 编码器中**刻意移除 ego status 注入**，仅基于环视图像的多尺度特征生成纯场景感知的 BEV 特征图 \( B_{woes} \)，进而解码为场景向量（agent 和 map 查询），最终生成仅依赖环境线索的规划决策 \( E_{woes} \)。
  - **自身驱动分支（ego-driven branch）**：保留传统的 ego status 增强（BEV query enhancement），生成包含运动补偿的 BEV 特征图 \( B_{wes} \)，直接与 ego 查询交互生成基于运动学惯性的规划决策 \( E_{wes} \)。该分支轻量化，不经过场景解码器。

- **路径注意力（Path Attention）**：
  - 替代标准可变形注意力，用于 ego 查询与 BEV 特征图的交互。
  - 具体：对每个规划模态，先解码出一个初步轨迹，沿轨迹均匀采样 T 个参考点（时间维度），每个参考点独立学习 K 个局部采样偏移和权重。这迫使模型沿着假设的未来路径收集证据，模拟人类驾驶员扫描路线的习惯。
  - 公式：\( \text{PathAttn}(E_i, P^i, B) = \sum_{t=1}^{T} W_t [ \sum_{k=1}^{K} a_{i,t,k} W'_t B_{i,t,k}^{samp} ] \)，其中采样点通过双线性插值从 BEV 得到。

- **场景感知融合模块（Scene-Aware Fusion）**：
  - 融合两个分支的输出 \( E_{woes} \) 和 \( E_{wes} \)。
  - 首先用全局平均池化从场景分支 BEV 提取全局场景特征，初始化融合查询 \( E_{fusion} \)。
  - 然后通过多头自注意力对齐两个分支的查询（解决特征空间不对齐），再通过交叉注意力合成最终决策。

- **辅助任务**（支持解耦后的多任务学习）：
  - **BEV 单向蒸馏（BEV Unidirectional Distillation）**：将自身分支的 BEV（含运动补偿）作为教师，场景分支的 BEV 作为学生，进行蒸馏。包含密集特征蒸馏（带权重聚焦前景）、关键点间蒸馏、通道间蒸馏，确保场景分支 BEV 不受运动模糊影响。教师不传播梯度。
  - **自回归在线地图（Autoregressive Online Mapping）**：强制模型在规划轨迹与真实轨迹下的地图感知结果一致。对每个未来时刻，计算两轨迹下感知区域的重叠区域，仅对该区域内的地图实例施加掩码 L1 损失；并用高斯 Wasserstein 距离损失稳定梯度。形成从规划到地图的反馈闭环。

- **整体流程**：输入多视图图像 → 共享 backbone 提取特征 → 双分支并行处理 → 场景感知融合 → 输出最终轨迹。

## 3. 实验设计

### 数据集与场景
- **主要评估**：**nuScenes** 数据集（标准视觉中心端到端驾驶基准），使用训练集训练，验证集报告结果。
- **补充评估**：
  - **NAVSIM**（非反应式仿真 benchmark）。
  - **Bench2Drive**（基于 CARLA 的闭环仿真器）。

### 评价指标
- **开环规划**：L2 位移误差（L2）和碰撞率（Collision Rate），在 1s、2s、3s 及平均上进行评估。
- **闭环性能**（针对 NAVSIM 和 Bench2Drive）：PDM Score（PDMS）、Driving Score（DS）、Success Rate（SR）。

### 对比方法
- 主要基线：**VAD**（作者重实现，记为 VAD§）、**UniAD**、**PPAD**、**SparseDrive**、**BridgeAD**、**FusionAD** 等。
- 消融中对比自身变体：标准可变形注意力 vs 路径注意力，以及各组件逐步添加。
- 插件通用性测试：将路径注意力和自回归在线地图集成到 UniAD 和 SparseDrive 中。

## 4. 资源与算力

- **训练配置**：32 块 NVIDIA A100 GPU，每个 GPU batch size = 2，总共训练 60 个 epoch，优化器为 AdamW，学习率调度为 CosineAnnealing。
- **推理测试**：所有 FPS 测试在一张 NVIDIA GeForce RTX 3090 GPU 上进行（除 UniAD 和 PPAD 外）。AdaptiveAD 的推理速度为 **3.0 FPS**。
- 文中未明确说明总训练时间或 GPU 小时数，但给出了显式的 GPU 数量和 epoch。

## 5. 实验数量与充分性

- **主实验结果**：1 张表（Table 1），对比 6 种方法，展示 L2 和碰撞率的全面指标。
- **场景泛化测试**：1 张表（Table 2），按导航指令（直行 ST vs 左/右转 LR）分层评估，并包含不同的 LR 划分。
- **自身状态依赖测试**：2 张表（Table 3 在 nuScenes, Table 4 在 NAVSIM 和 Bench2Drive），注入不同噪声（×0.0, ×0.5, ×1.5, 100 m/s）到 ego velocity。
- **消融实验**：1 张表（Table 5），逐步添加双分支、蒸馏、场景感知初始化、自回归地图，共 5 个设置。另有 Table 6 对比路径注意力和标准可变形注意力。
- **插件通用性**：1 张表（Table 7），在 UniAD 和 SparseDrive 上集成组件。
- **定性结果**：3 张图（Figure 5, 6, 7），展示轨迹比较、蒸馏效果、收敛速度。
- **充分性评价**：实验覆盖标准性能、泛化能力、鲁棒性（对自身状态噪声）、消融分析、组件通用性，设计全面且公平（对比了同基线并重实现 VAD；消融采用逐步递增保证因果关系）。样本数量：nuScenes 作为标准 benchmark 足够，NAVSIM 和 Bench2Drive 补充了闭环评估。实验客观充分。

## 6. 论文的主要结论与发现

- AdaptiveAD 在 nuScenes 开环规划上达到 **SOTA**：平均 L2 误差 0.47m（比 VAD 降低 22%），平均碰撞率 0.12%（降低 57%）。
- **泛化能力显著提升**：在转弯场景中，VAD 性能大幅下降，而 AdaptiveAD 保持稳定，说明其更依赖场景理解而非惯性。
- **对自身状态依赖大幅削弱**：当 ego velocity 被置零或注入噪声时，VAD 的 L2 误差暴涨超过 800%，而 AdaptiveAD 的退化幅度小得多；在闭环评估中也维持更高更稳定的分数。
- 辅助任务（蒸馏和自回归地图）对维持解耦后性能至关重要：蒸馏提升场景分支 BEV 质量，自回归地图加速收敛并减少多任务冲突。
- 路径注意力优于标准可变形注意力，且与基方法开销相同。
- 所提组件（路径注意力、自回归地图）可作为插件提升其他 SOTA 模型（UniAD、SparseDrive）的性能。

## 7. 优点

- **创新性**：首次从架构层面诊断并解决自身状态捷径问题，提出显式解耦+自适应融合的范式，而非仅数据或正则化方法。
- **方法完整性**：不仅解耦，还设计了配套的路径注意力、蒸馏和反馈任务，确保多任务学习不受影响，体系完备。
- **实验充分**：覆盖开环/闭环、标准/扰动、多种 benchmark，消融严谨，并验证组件通用性。
- **结果突出**：性能大幅超越现有方法，尤其是鲁棒性提升显著，展示了实际部署潜力。
- **可解释性**：路径注意力沿未来轨迹采样，行为更直观。
- **代码与协作**：基于 MMDetection3D 实现，易于复现（文中虽未提供代码，但实现继承开源框架）。

## 8. 不足与局限

- **计算效率**：推理速度 3.0 FPS，略低于部分基线（VAD 3.4 FPS，SparseDrive 5.2 FPS），在实时性要求高的场景下可能存在压力。未在嵌入式平台测试。
- **训练成本高**：依赖 32 块 A100，对于中小实验室复现困难。
- **场景覆盖**：主要基于 nuScenes（城市道路），未在高速路、乡村路或极端天气条件下验证。闭环实验只在 Bench2Drive 进行，该模拟器覆盖场景有限。
- **安全评估**：碰撞率虽然低，但并非零；在极端噪声（100 m/s）下仍会失效（碰撞率 4.86%）。未进行对抗性攻击或极端长尾测试。
- **依赖数据质量**：辅助任务（蒸馏、自回归地图）需要精确的 GT 轨迹和地图标注，实际部署中标注噪声可能影响效果。
- **偏差风险**：虽然缓解了自身状态捷径，但场景分支仍可能因训练数据分布（如 nuScenes 中左右转场景少）而学到其他偏差（如天气、道路类型）。
- **未明确讨论的局限性**：论文未提及多模态融合（如 LiDAR）、时序长度选择（仅 2s 历史+3s 未来）的影响，也未与其他解耦类方法（如显式因果模型）对比。
- **可复现性**：未提供代码仓库，仅描述框架细节，可能影响后续验证。

（完）
