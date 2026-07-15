---
title: "Beyond Patterns: Harnessing Causal Logic for Autonomous Driving Trajectory Prediction"
title_zh: 超越模式：利用因果逻辑进行自动驾驶轨迹预测
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/1102.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 自动驾驶轨迹预测结合因果逻辑
tldr: 针对自动驾驶轨迹预测任务，该论文提出利用因果逻辑超越传统模式匹配方法。通过构建因果模型，实现了更可靠和可解释的轨迹预测，提升了驾驶系统的规划与决策能力。实验验证了方法在多种场景下的优越性。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1102/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 859, \"height\": 597, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1102/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 866, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1102/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1769, \"height\": 879, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1102/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 900, \"height\": 786, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1102/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1836, \"height\": 1192, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1102/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 894, \"height\": 392, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1102/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1635, \"height\": 349, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1102/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 886, \"height\": 753, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1102/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 886, \"height\": 284, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1102/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 886, \"height\": 295, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1102/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1558, \"height\": 368, \"label\": \"Table\"}]"
motivation: 现有轨迹预测方法依赖模式识别，缺乏对因果关系的理解，导致泛化性不足。
method: 提出因果逻辑驱动的轨迹预测框架，显式建模环境因素与轨迹之间的因果关系。
result: 在多个自动驾驶数据集上取得更准确的轨迹预测结果，并提升了可解释性。
conclusion: 因果逻辑为自动驾驶轨迹预测提供了新范式，有望增强系统鲁棒性。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：现有自动驾驶轨迹预测模型主要依赖数据驱动的统计模式匹配，例如从历史轨迹中学习“车辆在交叉口前加速”这类表面规律，却**缺乏对交通行为背后因果关系的理解**。这种“知其然不知其所以然”的模型在面对训练数据中未充分覆盖的罕见场景时，往往因混淆环境中的混杂因素（如空间地图、周围智能体信息）而做出错误预测，导致**泛化能力弱、鲁棒性差**。因此，作者提出将**因果推断（Causal Inference）** 引入轨迹预测，使模型能够区分因果关系与虚假相关性，提升在不同场景下的可靠性和准确度。
- **整体含义**：该工作旨在为自动驾驶系统提供一种**超越模式识别、具备因果推理能力**的轨迹预测新范式，通过显式建模空间地图（空间环境）与时间智能体（动态交互）的因果效应，实现更稳健、更具可解释性的预测。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 核心思想

- 构建因果图（Causal Graph），将影响轨迹预测的因素分为**历史轨迹X、空间地图S、时间智能体T、未来轨迹Y**，其中S和T作为混杂变量（Confounders），会产生后门路径（如Y ← S → X），导致模型学到伪相关。
- 利用**后门调整（Backdoor Adjustment）** 消除空间地图S的混杂效应，利用**反事实分析（Counterfactual Analysis）** 消除时间智能体T的混杂效应，从而揭示真实的因果效应。

### 关键技术细节

1. **因果图建模**：定义变量X（目标历史轨迹）、S（空间地图）、T（周围智能体历史状态）、Y（未来轨迹）。S同时影响X和Y，T也同时影响X和Y，形成后门路径。模型需阻断这些路径。
2. **后门调整（Backdoor Adjustment）**：对空间地图S进行分层枚举，通过扩散模型生成多种可能的道路结构，然后对每层计算条件预测，再按最大熵原则（P(s_i)=1/n）加权平均，消除S→X和S→T的偏差。公式：
   \[
   \tilde{Y} = \sum_{i=1}^{n} g_\theta(X, S=s_i, T) P(s_i)
   \]
3. **反事实分析（Counterfactual Analysis）**：对历史轨迹X进行干预，用假想值X_c（如零向量）替换真实X，重新计算预测\(\tilde{Y}_c\)，然后取差值\(Y = \tilde{Y} - \tilde{Y}_c\)，从而分离出时间智能体T的贡献。
4. **模型架构（两阶段）**：
   - **第一阶段：Token提取与去偏**。使用空间编码器（GRU+GAT）提取空间token S_h；时间编码器提取目标token X_h和周围token T_h；BEV编码器提取鸟瞰图token B_h。然后对S_h进行**扩散模型的后门调整**，生成多个后门空间token S_{h,i}。通过多视角注意力（空间/BEV/时间）融合得到目标token X_i^{attn}。
   - **第二阶段：跨模态渐进融合与多模态预测**。采用渐进式查询（Progressive Query）机制，通过多阶段注意力逐步细化锚点，生成事实查询Q_i；同时用反事实值（零向量）运行同样过程得到反事实查询Q_{ic}。双尺度信息融合（CNN）提取全局和局部特征G_i和G_{ic}。最后输入**因果解码器**，整合事实与反事实信息，输出多模态轨迹概率。
5. **学习策略**：两阶段训练。第一步单独训练扩散后门调整模块（L_{back}）；第二步固定该模块，联合训练全模型，损失包含意图损失L_int（交叉熵）和轨迹损失L_traj（不同数据集选用minADE、WSADE或RMSE等指标，加上负对数似然）。

## 3. 实验设计：数据集/场景、benchmark、对比方法

- **数据集**：五个真实世界数据集：
  - **ApolloScape**（城市复杂场景，含车辆、行人、自行车）
  - **nuScenes**（多模态城市场景，含交叉口等）
  - **NGSIM**（美国高速公路）
  - **HighD**（德国高速公路）
  - **MoCAD**（澳门城区道路，右舵驾驶）
- **Benchmark**：依据各数据集比赛标准，评估指标：
  - ApolloScape：WSADE（加权场景平均位移误差）、WSFDE（加权场景最终位移误差）
  - nuScenes：minADE（最小平均位移误差，k=1或5）、FDE（最终位移误差）
  - NGSIM/HighD/MoCAD：RMSE（均方根误差），按预测时间（1-5秒）分别报告。
- **对比方法**：每个数据集均与当时SOTA方法对比。例如：
  - nuScenes：Trajectron++、MultiPath、LaPred、PGP、LAformer、NEST、DEMO、Traj-LLM等。
  - ApolloScape：TPNet、TP-EGT、S2TNet、MSTG、SafeCast、CoT-Drive等。
  - NGSIM/HighD/MoCAD：WSiP、MHA-LSTM、STDAN、GaVa、HLTP++、BAT、CS-LSTM等。
- **附加实验**：
  - **鲁棒性实验**：在nuScenes上加入噪声（基于曲率）和随机丢弃帧（20%/40%），对比PGP、Q-EANet、NEST、DEMO。
  - **域泛化实验**：将nuScenes按区域划分为4个子集（Queenstown、Boston Seaport、Hollandvillage、Onenorth），进行跨域训练和测试，用Kolmogorov-Smirnov检验确认驾驶行为差异显著，对比PGP、DEMO。
  - **消融实验**：移除BEV编码器、渐进融合、双尺度融合、完整因果推断模块（共5个变体），在nuScenes和ApolloScape上评估。
  - **即插即用验证**：将因果推断模块嵌入PGP模型中，替换其GRU编码器并添加反事实解码器，在nuScenes上可视化对比。

## 4. 资源与算力

- **未明确说明**：论文正文和附录中均未提及所使用的GPU型号、数量及训练时长。仅提及模型支持实时推理，但未给出具体硬件配置。因此无法从中获取算力信息。

## 5. 实验数量与充分性

- **实验数量**：
  - 主性能对比：**5个数据集** × 多种SOTA方法（每个数据集3-8个对比方法）。
  - 鲁棒性实验：在nuScenes上设置4种干扰条件（2种噪声水平、2种丢帧比例），对比4个基线。
  - 域泛化实验：在4个区域间交叉验证，呈现热力图（图4）。
  - 消融实验：**5个变体**，在两个数据集上报告指标。
  - 即插即用可视化验证：1个典型场景对比。
  - 此外，论文还报告了统计学检验（Kolmogorov-Smirnov）。
- **充分性评价**：实验覆盖多种交通场景（城市、高速、复杂交叉口）、多种度量方式，考虑了鲁棒性和泛化性，消融验证了各组件必要性。但域泛化实验仅在一个数据集（nuScenes）上进行，未在其他数据集上重复；即插即用验证仅展示了定性结果，缺乏定量对比。总体而言，实验设计较为全面，但可进一步扩展。

## 6. 论文的主要结论与发现

- 在**所有五个数据集**上，所提模型在关键指标（WSADE、WSFDE、minADE、FDE、RMSE）上均**超越当前SOTA**，尤其在城市复杂场景和长时预测（3-5秒）上提升显著（如ApolloScape: WSADE提升1.84%，WSFDE提升8.20%）。
- 在**鲁棒性测试**中，面对噪声和帧丢失，模型仍保持最优性能，表明因果推理有效过滤了虚假相关。
- **域泛化实验**显示，模型在未见区域仍能保持较低误差，而基线方法性能显著下降。
- 消融实验确认每个组件（BEV编码器、渐进融合、双尺度融合、因果推断）均贡献正向效果，其中因果推断移除后性能下降最严重。
- 即插即用实验证明因果范式可嵌入现有模型（如PGP）并帮助其在复杂车道分叉场景中做出正确转向预测，而原始模型失败。
- **核心结论**：因果推断能够有效提升轨迹预测的准确度、鲁棒性和泛化能力，是实现自动驾驶安全可靠预测的重要方向。

## 7. 优点

- **方法创新性**：首次在自动驾驶轨迹预测中统一应用后门调整和反事实分析，并分解空间与时间两类混杂因素，形成完整的因果推理框架。
- **模型设计巧妙**：利用扩散模型自动近似空间地图的分层结构进行后门调整，避免人工枚举；渐进式融合模拟人类推理过程，提升实时性和精度。
- **实验全面**：覆盖多种真实数据集、多种指标、多种场景（城市、高速、混合交通），且专门测试了鲁棒性和域泛化。
- **即插即用验证**：证明因果模块可独立嵌入现有模型，提升了方法的通用性和实用价值。
- **可解释性**：通过因果分析和反事实对比，模型能给出为何如此预测的解释，增强透明度和可信度。

## 8. 不足与局限

- **未报告算力和推理时间**：虽然声称支持实时推理，但未提供具体硬件环境和帧率，无法评估实际部署成本。
- **域泛化实验范围有限**：仅在一个数据集（nuScenes）内部分区域进行跨域测试，未在其他数据集或更大跨域（如从美国到中国）上验证，可能存在数据集偏差。
- **即插即用验证仅定性**：只给出了单一场景的路径可视化对比，缺乏定量指标（如minADE变化），说服力不够强。
- **因果图假设的合理性**：论文假设空间地图S和周围智能体T是主要混杂变量，但交通场景中可能存在其他混杂（如天气、信号灯状态、驾驶员意图等），未考虑完全。
- **评价指标局限**：主要使用位移误差类指标，未涉及碰撞率、舒适度等安全相关指标，实际应用价值需进一步验证。
- **模型复杂度**：含扩散后门调整、多阶段渐进融合等模块，参数规模和计算开销未讨论，可能对轻量级部署构成挑战。

（完）
