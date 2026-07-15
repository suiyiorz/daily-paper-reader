---
title: Self-Consistent Model-based Adaptation for Visual Reinforcement Learning
title_zh: 视觉强化学习的自一致模型自适应
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0800.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 基于自一致模型自适应的视觉强化学习
tldr: 视觉强化学习面临样本效率问题。提出自一致模型自适应方法，通过模型一致性约束改进表示学习，在多个视觉控制任务上提升样本效率和性能。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-800/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 551, \"height\": 293, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-800/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1838, \"height\": 505, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-800/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1206, \"height\": 476, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-800/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 897, \"height\": 575, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-800/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 566, \"height\": 802, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-800/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1677, \"height\": 296, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-800/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 748, \"height\": 689, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-800/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 893, \"height\": 688, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-800/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 679, \"height\": 331, \"label\": \"Table\"}]"
motivation: 视觉强化学习中模型预测不一致导致样本效率低。
method: 引入自一致性约束，使模型预测与真实体验保持一致。
result: 在视觉控制基准上取得更高样本效率和最终性能。
conclusion: 模型一致性是提升视觉强化学习有效性的关键。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文《Self-Consistent Model-based Adaptation for Visual Reinforcement Learning》结构化总结

## 1. 核心问题与整体含义

- **研究动机**：视觉强化学习（VRL）智能体在真实世界部署时，由于存在视觉干扰（如背景变化、视角移动、遮挡、颜色变化等），其性能会严重下降。现有方法通过数据增强或微调策略表示来应对干扰，但需要先验知识（如手工设计增强函数）或针对特定策略进行独立微调，缺乏通用性和效率。
- **整体含义**：本文提出一种即插即用的自适应方法SCMA，在不修改策略参数的前提下，通过无监督分布匹配将干扰观测转换为干净观测，从而提升多种策略在不同干扰环境下的泛化能力，降低实际部署中的性能差距。

## 2. 方法论

### 2.1 核心思想
- 使用一个**去噪模型**（denoising model）将“杂乱/干扰观测”映射为“干净观测”，使策略直接处理去噪后的输入。
- 由于无法获得成对的干净-干扰观测，设计一个**无监督分布匹配目标**，迫使去噪后观测的分布与干净环境下观测的分布一致，同时保留与干扰观测的相关性。
- 利用**预训练的世界模型**（world model）来估计干净观测的条件分布（给定动作序列），从而评估去噪模型输出是否“像”干净环境下的观测。

### 2.2 关键技术细节
- **问题形式化**：将带干扰的视觉RL建模为Noisy Partially-Observed MDP (NPOMDP)。干净观测 \( o_t \) 通过噪声函数 \( f_n \) 得到干扰观测 \( o_t^n \)。目标是学习后验去噪分布 \( p(o_t \mid o_t^n) \)。
- **无监督替代目标 \( \mathcal{L}_{KL} \)**：最小化两个联合分布之间的KL散度：
  \[
  \mathcal{L}_{KL} = D_{KL}\left( p(o_{1:T}^n \mid a_{1:T}) \, q(o_{1:T} \mid o_{1:T}^n) \;\big\|\; p(o_{1:T} \mid a_{1:T}) \, q(o_{1:T}^n \mid o_{1:T}) \right)
  \]
  其中 \( q(o_{1:T} \mid o_{1:T}^n) \) 和 \( q(o_{1:T}^n \mid o_{1:T}) \) 分别是可学习的去噪分布和加噪分布。
- **理论分析**：证明 \( \mathcal{L}_{KL} \) 的解集包含一切与真实噪声函数 \( f_n \) 同构（homogeneous）的噪声函数的后验去噪分布。通过引入**奖励信号**或**限制去噪模型架构**可以减少同构函数数量，使解收敛到真实后验。
- **实际损失推导**：
  - 自一致重建损失 \( \mathcal{L}_{sc}^t \)：鼓励去噪后观测符合世界模型的重建预测。
  - 噪声重建损失 \( \mathcal{L}_n^t \)：防止去噪模型忽视干扰观测信息。
  - 奖励预测损失 \( \mathcal{L}_{rew}^t \)：当奖励信号可用时，帮助过滤与奖励无关的干扰。
  - 总损失：\( \mathcal{L}_{SCMA}^t = \mathcal{L}_{sc}^t + \mathcal{L}_n^t + \mathcal{L}_{rew}^t \)。

### 2.3 算法流程
1. **预训练阶段**：在干净环境中训练策略（如Dreamer）和世界模型（基于RSSM），掌握技能并捕捉干净环境的动态分布。
2. **适配阶段**：保持策略和世界模型冻结，只在干扰环境中采集轨迹（动作由策略基于去噪观测采样），优化去噪模型（通常为图像到图像网络）的上述三部分损失。去噪模型输出作为策略的输入，实现即插即用。

## 3. 实验设计

### 3.1 数据集/场景
- **DMControlGB**：基于DeepMind Control Suite，设置三种干扰：
  - `video hard`：自然视频背景（来自Places365）
  - `moving view`：移动摄像机视角
  - `color hard`：随机颜色变化
- **DMControlView**：额外的视角变化场景。
- **RL-ViGen**：桌面机械臂操作任务（Door, Lift, TwoArm），包含easy和extreme干扰。
- **自建Occlusion场景**：随机遮挡1/4观测区域。
- **真实机器人数据**：使用Mobile ALOHA机器人执行苹果抓取任务，收集正常环境数据和三种干扰环境数据（水果背景、蓝色灯光、变化光照）。

### 3.2 Benchmark与对比方法
- **适应方法**：PAD, MoVie
- **增强方法**：SVEA, SGQN, Dr.G
- **任务诱导方法**：TIA, TPC, DreamerPro
- **基线还包括**：CURL（对比学习）等。
- 所有增强方法使用相同的测试干扰图片集（Place365），适应方法在干净环境预训练1M步，再在干扰环境适配0.1M~0.5M步。

### 3.3 评估指标
- 每个任务使用3个随机种子，报告最后episode的平均奖励（mean ± std）。

## 4. 资源与算力

- 论文**未明确说明**使用的GPU型号、数量及训练时长（如小时数）。
- 训练配置：预训练1M步（环境交互步数），适配步数0.1M~0.5M步；使用了Dreamer作为基础世界模型和策略，世界模型在干净环境预训练。
- 仅提及在标准实验设置下进行，但未给出计算资源细节。

## 5. 实验数量与充分性

- **实验数量丰富**：在4种主要干扰类型（video hard, moving view, color hard, occlusion）上，每个类型含5个DMControl任务（ball in cup-catch, cartpole-swingup, finger-spin, walker-stand, walker-walk），共约20个主要实验；此外包含RL-ViGen的6个子任务（3种机器人×2种难度）。
- **跨任务泛化**：测试一个任务中训练的去噪模型直接用于另一任务（walker-walk ↔ walker-stand）。
- **跨策略泛化**：用Dreamer训练的去噪模型直接用于SGQN策略。
- **消融实验**：逐一移除三个损失项（\( \mathcal{L}_{sc}, \mathcal{L}_{n}, \mathcal{L}_{rew} \)），分析各自贡献。
- **样本效率**：展示了不同算法在video hard上的性能曲线。
- **真实机器人数据**：在3种干扰设置下评估去噪模型对逆动力学模型（IDM）动作预测的改进。
- **充分性评估**：实验覆盖了多种干扰类型、多种任务、跨策略/跨任务泛化、消融、样本效率、真实数据，较为全面。每项实验给出均值与标准差，结果可信。但缺少对超参数敏感性的系统性分析。

## 6. 主要结论与发现

- SCMA **显著缩小了各种视觉干扰下的性能差距**，在Occlusion等困难场景下优势尤其明显（例如SGQN+SCMA提升88%）。
- 去噪模型**即插即用**，可推广到不同任务和不同算法策略（如SGQN），无需重新适配。
- 在**无奖励信号**的情况下，SCMA仍能取得优于其他适应方法的平均性能，且奖励预测损失有助于聚焦关键特征（如小球、杆）。
- **样本效率高**：SCMA仅需少量下游干扰数据（如总适配步数的10%）即可接近最终性能。
- 在真实机器人数据上，SCMA有效缓解环境干扰，提升动作预测准确性。

## 7. 优点

1. **策略无关**：去噪模型独立于策略，可作为预处理模块应用于任何策略，降低微调成本。
2. **无配对数据要求**：通过无监督分布匹配和世界模型，充分利用环境动态信息，避免收集成对观测的困难。
3. **理论支撑**：明确了无监督目标与有监督最优解的关系，并分析同构噪声函数问题，通过奖励和架构设计减少岐义。
4. **实验全面**：覆盖多种干扰和实际机器人数据，验证通用性和实用性。
5. **样本高效**：适配速度快，适合真实部署场景。

## 8. 不足与局限

1. **依赖世界模型质量**：需要预训练一个能够准确模拟干净环境动态的世界模型，若世界模型能力不足（如复杂机器人或真实场景），性能可能受限。论文未探索更强的世界模型（如扩散模型）。
2. **同构噪声函数问题**：理论上无监督目标无法彻底区分所有噪声函数，需要额外信号或架构约束，可能在某些特殊干扰下失效。
3. **未报告计算开销**：缺少GPU型号、训练时间等资源信息，读者难以评估运行成本。
4. **任务范围有限**：主要基于模拟器连续控制任务，对于离散动作、长时域任务或高维观测的泛化能力未验证。
5. **真实机器人实验规模较小**：仅用于评估IDM的动作预测，未进行端到端策略部署实验。
6. **消融实验分析略简**：缺少对去噪模型架构选择、世界模型大小等超参数的影响分析。

（完）
