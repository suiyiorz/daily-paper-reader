---
title: "Bridging Past and Future: End-to-End Autonomous Driving with Historical Prediction and Planning"
title_zh: 连接过去与未来：具有历史预测与规划的端到端自动驾驶
authors: "Zhang, Bozhou, Song, Nan, Jin, Xin, Zhang, Li"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_Bridging_Past_and_Future_End-to-End_Autonomous_Driving_with_Historical_Prediction_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 10.0
evidence: 端到端自动驾驶，历史预测与规划
tldr: 针对现有端到端自动驾驶方法在运动规划中忽视历史信息或与多步预测不匹配的问题，提出BridgeAD，将运动和规划查询重构为多步查询，利用历史信息进行规划。在规划导向优化框架下，方法提升了多步预测和规划的一致性。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 855, \"height\": 711, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1789, \"height\": 981, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 855, \"height\": 707, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1680, \"height\": 1295, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 874, \"height\": 452, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 876, \"height\": 280, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1548, \"height\": 540, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 674, \"height\": 304, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 863, \"height\": 272, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 873, \"height\": 211, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 874, \"height\": 236, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 871, \"height\": 326, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-zhang-bridging-past-and-future-end-to-end-autonomous-driving-with-historical-prediction-cvpr-2025-paper/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1762, \"height\": 280, \"label\": \"Table\"}]"
motivation: 现有方法在端到端自动驾驶中未充分利用历史信息进行多步规划。
method: 提出BridgeAD，将运动查询和规划查询重构为多步查询，使其与历史预测对齐。
result: 在多个自动驾驶数据集上验证了规划性能的提升。
conclusion: 历史信息的有效利用可显著提升端到端自动驾驶的规划质量。
---

## Abstract
End-to-end autonomous driving unifies tasks in a differentiable framework, enabling planning-oriented optimization and attracting growing attention.Current methods aggregate historical information either through dense historical bird's-eye-view (BEV) features or by querying a sparse memory bank, following paradigms inherited from detection.However, we argue that these paradigms either omit historical information in motion planning or fail to align with its multi-step nature, which requires predicting or planning multiple future time steps. In line with the philosophy of "future is a continuation of past", we propose **BridgeAD**, which reformulates motion and planning queries as multi-step queries to differentiate the queries for each future time step. This design enables the effective use of historical prediction and planning by applying them to the appropriate parts of the end-to-end system based on the time steps, which improves both perception and motion planning. Specifically, historical queries for the current frame are combined with perception, while queries for future frames are integrated with motion planning. In this way, we bridge the gap between past and future by aggregating historical insights at every time step, enhancing the overall coherence and accuracy of the end-to-end autonomous driving pipeline. Extensive experiments on the nuScenes dataset in both open-loop and closed-loop settings demonstrate that BridgeAD achieves state-of-the-art performance. We will make our code and models publicly available.

---

## 论文详细总结（自动生成）

# 论文总结：Bridging Past and Future: End-to-End Autonomous Driving with Historical Prediction and Planning

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：现有端到端自动驾驶方法在利用时序信息时存在两个问题：
  1. **稠密历史BEV特征聚合**（如UniAD、VAD）仅在感知模块使用时间信息，忽略了历史信息在运动规划中的重要性。
  2. **稀疏记忆库查询**（如SparseDrive）将历史运动规划查询粗略交互，但每个查询对应一条轨迹，无法匹配运动规划的多步（multi-step）本质——即需要预测/规划多个未来时间步。
- **核心思想**：秉持“未来是过去的延续”这一哲学，提出BridgeAD，将运动和规划查询重构为多步查询，从而在感知和运动规划模块中按时间步级别有效利用历史预测与规划信息，提升整个流水线的连贯性和准确性。

## 2. 方法论

### 2.1 核心思想

- 将运动查询表示为 \( Q_{mot} \in \mathbb{R}^{N_a \times M_{mot} \times T_{mot} \times C} \)，规划查询表示为 \( Q_{plan} \in \mathbb{R}^{M_{plan} \times T_{plan} \times C} \)，其中 \(T_{mot}\) 和 \(T_{plan}\) 分别表示预测和规划的未来时间步数。
- 通过一个先进先出（FIFO）的记忆队列缓存过去K帧的运动和规划查询。
- **历史增强感知**：从历史运动查询中提取当前帧对应的查询（\(Q_{m2d}\)），与目标查询（\(Q_{obj}\)）进行交叉注意力，增强检测与跟踪。
- **历史增强运动预测**：从历史运动查询中提取未来 \(T_{m2m}\) 步的查询（\(Q_{m2m}\)），与当前运动查询（\(Q_{mot}\)）进行三步注意力：步级交叉注意力、步级自注意力、模式级自注意力。
- **历史增强规划**：类似地，从历史规划查询中提取未来 \(T_{p2p}\) 步的查询（\(Q_{p2p}\)），与当前规划查询（\(Q_{plan}\)）进行相同结构的注意力。
- **步级Mot2Plan交互**：选择运动查询中得分最高的模式，与规划查询在对应时间步上进行交叉注意力，确保预测与规划的一致性。

### 2.2 关键技术细节

- 运动预测时间步 \(T_{mot}=12\)（对应6秒，每0.5秒一步），规划时间步 \(T_{plan}=6\)（对应3秒）。
- 历史时间步：运动 \(T_{m2m}=6\)，规划 \(T_{p2p}=3\)。
- 缓存过去K=3帧。
- 损失函数包括检测（\(L_{det}\)）、在线地图（\(L_{map}\)）、运动预测（\(L_{mot}\)）、规划（\(L_{plan}\)），均使用L1回归和Focal分类损失，多模态采用winner-takes-all策略。

### 2.3 算法流程（文字说明）

1. 多视图图像经过图像编码器提取多尺度空间特征。
2. 历史增强感知模块：通过历史运动查询与目标查询的交叉注意力改进检测和跟踪，随后进行agent-agent和agent-map注意力。
3. 历史增强运动预测模块：多步运动查询与历史运动查询进行步级交叉注意力、步级自注意力和模式级自注意力。
4. 历史增强规划模块：多步规划查询与历史规划查询进行类似的三步注意力。
5. 步级Mot2Plan交互模块：运动查询与规划查询在对应未来时间步上交互。
6. 输出预测轨迹和规划轨迹。

## 3. 实验设计

- **数据集**：nuScenes（1000个驾驶场景，每段20秒，2Hz关键帧标注，6个相机）。
- **评估场景**：
  - **开环（open-loop）**：在nuScenes验证集上评估L2位移误差（1s/2s/3s及平均）和碰撞率。
  - **闭环（closed-loop）**：基于nuScenes的NeuroNCAP仿真器，提供逼真的安全关键场景，评估NeuroNCAP分数和碰撞率。
- **对比方法**：
  - 开环：OccWorld-D、Drive-WM、ST-P3、GenAD、UniAD、VAD、SparseDrive（均用官方检查点或结果）。
  - 闭环：VAD、UniAD、SparseDrive（带/不带后处理）。
  - 感知与预测：ViP3D、UniAD、SparseDrive、BEVFormer、VAD等。
- **基准指标**：
  - 规划：L2位移误差（m）、碰撞率（%）、FPS。
  - 感知：mAP、NDS（检测）；AMOTA、AMOTP、IDS（跟踪）。
  - 预测：ADE、FDE、MR、EPA（汽车/行人）。
- **模型变体**：BridgeAD-S（ResNet50，256×704输入），BridgeAD-B（ResNet101，512×1408输入）。

## 4. 资源与算力

- **训练硬件**：8块NVIDIA RTX A6000 GPU。
- **优化器**：AdamW，余弦退火学习率调度，权重衰减1e-3，初始学习率1e-4。
- **训练策略**：两阶段训练：先训练感知任务，再进行端到端训练。
- **推理速度**：BridgeAD-S在RTX 3090上5.0 FPS，BridgeAD-B 3.9 FPS（batch size=1）。推理延迟157.2 ms（快于VAD的224.3 ms和UniAD的555.6 ms）。
- **未明确说明训练时长**，但资源描述充分。

## 5. 实验数量与充分性

- **总实验组数**：
  - 开环规划对比：1个主表（表1），包含8种方法及两个变体。
  - 闭环规划对比：1个主表（表2），包含4种方法及有无后处理。
  - 感知结果：表4（检测和跟踪各一个子表），对比5种方法。
  - 运动预测结果：表3，对比3种方法，含汽车/行人。
  - 消融实验：
    - 表5：消融Historical Mot2Det Fusion和History-Enhanced Motion Prediction（3组）。
    - 表6：消融History-Enhanced Planning和Step-Level Mot2Plan Interaction（3组）。
    - 表7：消融步级自注意力和模式级自注意力（3组）。
    - 表8：消融历史时间步数量（6组）。
  - 定性分析：图3（开环）、图4（闭环安全关键场景对比）。
- **充分性评价**：实验覆盖全面，包括开/闭环、感知/预测/规划所有子任务，以及多组消融验证每个设计模块的有效性。对比方法均为最先进方法，且使用官方检查点或一致设置，整体客观公平。闭环测试使用NeuroNCAP这一标准仿真器，增强了结果的可信度。

## 6. 主要结论与发现

- BridgeAD在开环和闭环规划中均取得最先进性能（SOTA）。开环3秒平均L2误差0.59 m（BridgeAD-S），碰撞率0.09%；闭环NeuroNCAP分数1.52（无后处理），碰撞率76.2%，显著优于对比方法。
- 历史信息在感知和运动规划均有效：消融实验表明，移除任一历史增强模块都会导致性能下降。
- 步级自注意力和模式级自注意力对于传播历史信息到所有未来时间步和模式至关重要。
- 最佳历史时间步设置为运动6步、规划3步。
- 定性结果展示了BridgeAD在安全关键场景中（如避让对向逆行车辆）能够通过连续理解周围车辆运动做出正确避让，而对比方法（UniAD、SparseDrive）失败。

## 7. 优点

1. **创新的多步查询表示**：首次将运动/规划查询分解为时间步维度，实现步级历史信息交互，自然匹配多步预测任务。
2. **历史信息的细粒度融合**：根据时间步不同，历史查询分别用于感知（当前帧）和规划（未来帧），充分利用时序信息同时保持各模块的独立性。
3. **闭环性能提升显著**：在逼真仿真中碰撞率大幅降低，表明模型在连续驾驶中具有更好的鲁棒性和一致性。
4. **高效性**：推理速度优于VAD和UniAD，兼具性能与效率。
5. **代码开源承诺**：促进可复现性和后续研究。

## 8. 不足与局限

1. **实验覆盖范围**：仅在nuScenes单一数据集上评估，未在更大型或多样化的数据集（如Waymo Open Dataset、Argoverse 2）上验证泛化性。
2. **闭环仿真局限性**：NeuroNCAP基于nuScenes，场景多样性可能有限，且仿真与真实世界存在差距，无法完全反映实际驾驶中的复杂性和随机性。
3. **历史队列长度敏感性**：消融仅测试了K=3，更长的历史可能带来更多信息，但也增加累积误差风险，未深入探索。
4. **未考虑交互建模**：虽然步级Mot2Plan交互考虑了预测与规划的一致性，但多智能体间的交互依赖于后续的注意力机制，未显式建模博弈或协同。
5. **对ego状态依赖的讨论**：论文声称不使用ego状态作为输入以避免信息泄漏，但未深入分析ego历史状态与历史规划信息之间的潜在重叠。
6. **失败案例分析不足**：仅提供成功案例，未讨论方法在哪些场景下会失败（如极端天气、高动态交通流等）。

（完）
