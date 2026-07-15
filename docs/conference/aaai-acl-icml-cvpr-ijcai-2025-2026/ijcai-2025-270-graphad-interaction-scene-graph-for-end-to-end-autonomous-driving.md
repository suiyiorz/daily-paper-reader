---
title: "GraphAD: Interaction Scene Graph for End-to-end Autonomous Driving"
title_zh: GraphAD：端到端自动驾驶的交互场景图
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0270.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 端到端自动驾驶的交互场景图
tldr: 端到端自动驾驶需要有效建模交互场景。提出GraphAD，利用交互场景图增强感知和规划。在自动驾驶基准上验证了其有效性。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-270/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 898, \"height\": 534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-270/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1829, \"height\": 831, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-270/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 859, \"height\": 1267, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-270/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1659, \"height\": 469, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-270/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 524, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-270/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 831, \"height\": 273, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-270/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 806, \"height\": 230, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-270/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 780, \"height\": 184, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-270/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 791, \"height\": 184, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-270/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 748, \"height\": 322, \"label\": \"Table\"}]"
motivation: 端到端自动驾驶需要有效表示交通参与者之间的交互关系。
method: 构建交互场景图，融合多智能体动态信息用于规划。
result: 在自动驾驶数据集上取得优越性能。
conclusion: 场景图有助于提升端到端自动驾驶的交互理解。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文总结：GraphAD: Interaction Scene Graph for End-to-end Autonomous Driving

## 1. 核心问题与整体含义
- **研究动机**：端到端自动驾驶中，建模自车、其他智能体（车辆、行人）与地图元素之间的复杂交互至关重要。现有方法依赖注意力机制处理异构交互，但缺乏几何先验，且计算开销大，容易将建模能力浪费在不重要的元素上。
- **核心挑战**：如何利用几何先验高效、精准地提取关键交互信息，同时实现预测和规划任务的统一优化。
- **整体含义**：本文提出基于交互场景图（Interaction Scene Graph, ISG）的统一框架，将强先验知识引入图模型，显式建模动态智能体之间及智能体与地图之间的稀疏、关键连接，从而提升端到端驾驶的安全性和性能。

## 2. 方法论
- **核心思想**：构建包含动态场景图（DSG）和静态场景图（SSG）的交互场景图，以图节点表示智能体和地图元素，以有向边表示交互关系，通过迭代更新节点特征完成运动预测和规划。
- **关键技术细节**：
  - **场景表示**：多视图图像经过图像编码器、图像到BEV变换（Lift-Splat-Shoot）及多帧时间聚合，得到统一时空BEV特征。
  - **结构化元素提取**：TrackFormer执行端到端3D检测与跟踪；MapFormer学习向量化地图元素（车道中心线、分隔线、路缘、人行横道）。
  - **图构建**：
    - **图节点**：动态节点（智能体）包含轨迹提议和隐式特征；静态节点（地图元素）包含BEV坐标和特征。
    - **图连接**：通过基于轨迹提议的几何距离计算节点间相似度，为每个节点连接K个最近邻。DSG中距离为两智能体轨迹间最小距离；SSG中为智能体轨迹到地图点集的最小距离。
    - **图特征聚合**：将邻居节点特征与目标节点特征拼接后经MLP处理，再通过max-pooling聚合；经过多层迭代，更新后的动态节点特征用于预测多模态轨迹，并反馈更新下一层节点几何。
  - **规划头**：融合自车状态、高等级驾驶指令和ISG处理后的自车查询，经MLP输出规划轨迹；并利用占位预测进行后优化以降低碰撞。
- **公式说明**：DSG距离公式 \(H_d(p_i^d, p_j^d) = \min_{t=1}^{M_d} \|x_i^d(t) - x_j^d(t)\|_2\)；SSG距离公式 \(H_s(p_i^d, p_j^s) = \min_{t=1}^{M_d} \left( \min_{k=1}^{M_s} \|x_i^d(t) - x_j^s(k)\|_2 \right)\)。

## 3. 实验设计
- **数据集**：nuScenes（1000个复杂驾驶场景，关键帧2Hz，含1.4M个3D标注框）。
- **Benchmark**：
  - **开放环规划**：评估L2位移误差（1s/2s/3s/平均）和碰撞率。
  - **运动预测**：评估minADE、minFDE、Miss Rate、EPA。
- **对比方法**：
  - 规划：NMP、SA-NMP、FF、EO、ST-P3、UniAD、VAD、GPT-Driver、Agent-Driver。
  - 预测：Constant Pos/Vel、PnPNet、ViP3D、UniAD。
- **实验设置**：主实验使用ResNet101-DCN、输入640×？；消融实验使用ResNet50、输入256×704。采用多阶段训练（先检测+地图，再冻结backbone训练跟踪+图预测，最后加入占位+规划）。

## 4. 资源与算力
- **文中未明确说明**：未提及所使用的GPU型号、数量、训练时长等算力信息。仅给出了输入分辨率、backbone类型、BEV特征通道数等网络配置。因此无法评估计算资源需求。

## 5. 实验数量与充分性
- **实验数量**：
  - 主实验：2个表格（Table 1 规划，Table 2 预测）。
  - 消融实验：4个表格（Table 3~6），分别验证：
    - DSG/SSG有效性（对比注意力和仅用DSG/SSG）。
    - 节点距离函数选择（特征距离、当前位置距离、轨迹距离）。
    - 图聚合方法（注意力、MLP+avg-pooling、MLP+max-pooling）。
    - 规划头组件（图、自车状态、后优化的组合）。
- **充分性与公平性**：
  - 消融实验覆盖了方法的核心设计，对比了多种替代方案，实验设计较为全面。
  - 与SOTA方法比较时，统一采用nuScenes验证集相同评测协议，且复现了VAD的结果，对比公平。
  - 但未在其他数据集（如Waymo、Argoverse）上验证，泛化性有待证明。

## 6. 主要结论与发现
- 提出的GraphAD在nuScenes开放环规划任务上达到SOTA：碰撞率比Agent-Driver降低42.9%（0.12% vs 0.21%），L2误差也显著低于所有对比方法。
- 运动预测任务上，minADE 0.68m、EPA 0.514，全面超越UniAD。
- 消融实验表明：DSG和SSG均贡献显著；基于轨迹提议的几何距离优于特征距离和当前距离；MLP+max-pooling聚合最佳；自车状态和后优化对规划性能提升关键。
- 定性可视化显示，动态场景图能自动关联有潜在冲突的智能体，使规划更安全。

## 7. 优点
- **方法创新**：首次将图神经网络（GNN）用于端到端自动驾驶，显式建模异构交互，引入强几何先验，使网络聚焦关键交互。
- **高效性**：通过稀疏图连接（DSG K=24，SSG K=8）大幅减少无效交互计算。
- **迭代优化**：轨迹预测与图权重相互依赖，通过迭代更新实现精细化交互建模。
- **性能突出**：在多个关键指标上大幅超越现有方法，尤其碰撞率降低明显。
- **消融全面**：系统性地验证了各组件贡献，设计决策有依据。

## 8. 不足与局限
- **应用限制**：仅在nuScenes上验证，未在更大规模、不同场景的数据集（如Waymo、高速公路场景）测试，模型泛化性未知。
- **未覆盖元素**：目前未考虑交通灯、路牌、路由决策等更多交互因素，实际驾驶中这些也至关重要。
- **计算资源未披露**：缺乏训练/推理的计算开销数据（FLOPs、参数量、延迟），难以评估实际部署可行性。
- **偏差风险**：nuScenes场景以城市道路为主，缺乏极端天气、夜间、乡村等多样性；且数据集标注频率为2Hz，可能影响时序建模效果。
- **对比方法时效性**：引用的Agent-Driver等方法为2023年，但本文发表于2025年，可能部分SOTA方法未被纳入对比（如后续改进版本）。

（完）
