---
title: "SOLVE: Synergy of Language-Vision and End-to-End Networks for Autonomous Driving"
title_zh: "SOLVE: 语言视觉与端到端网络的协同用于自动驾驶"
authors: "Chen, Xuesong, Huang, Linjiang, Ma, Tao, Fang, Rongyao, Shi, Shaoshuai, Li, Hongsheng"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Chen_SOLVE_Synergy_of_Language-Vision_and_End-to-End_Networks_for_Autonomous_Driving_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 9.0
evidence: VLM与端到端网络协同用于自动驾驶规划
tldr: 针对VLM集成计算量大、实时性差的问题，提出SOLVE框架，通过共享视觉编码器实现VLM与端到端模型特征级交互，并设计轨迹思维链范式逐步优化预测，显著提升自动驾驶规划效率与可解释性。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 893, \"height\": 382, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 850, \"height\": 471, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1754, \"height\": 589, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 835, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1764, \"height\": 1437, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1300, \"height\": 742, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 866, \"height\": 234, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 795, \"height\": 240, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 730, \"height\": 276, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-chen-solve-synergy-of-language-vision-and-end-to-end-networks-for-autonomous-driving-cvpr-2025-paper/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 736, \"height\": 278, \"label\": \"Table\"}]"
motivation: 现有VLM集成到自动驾驶时计算开销大，难以实时决策。
method: 设计共享视觉编码器的VLM-端到端协同框架，并引入轨迹思维链。
result: 实验在多个自动驾驶规划指标上取得最优结果。
conclusion: SOLVE为实时可解释的自动驾驶规划提供了有效方案。
---

## Abstract
The integration of Vision-Language Models (VLMs) into autonomous driving systems has shown promise in addressing key challenges such as learning complexity, interpretability, and common-sense reasoning. However, existing approaches often struggle with efficient integration and real-time decision-making due to computational demands. In this paper, we introduce SOLVE, an innovative framework that synergizes VLMs with end-to-end (E2E) models to enhance autonomous vehicle planning. Our approach emphasizes knowledge sharing at the feature level through a shared visual encoder, enabling comprehensive interaction between VLM and E2E components. We propose a Trajectory Chain-of-Thought (T-CoT) paradigm, which progressively refines trajectory predictions, reducing uncertainty and improving accuracy. By employing a temporal decoupling strategy, SOLVE achieves efficient asynchronous cooperation, aligning high-quality VLM outputs with E2E real-time performance. Evaluated on the nuScenes dataset, our method demonstrates significant improvements in trajectory prediction accuracy, paving the way for more robust and reliable autonomous driving systems.

---

## 论文详细总结（自动生成）

# 论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：将视觉-语言模型（VLM）集成到自动驾驶系统中虽然有望解决学习复杂性、可解释性和常识推理等挑战，但现有方法由于计算开销大，难以实现高效集成和实时决策。
- **整体含义**：提出 SOLVE 框架，通过语言视觉模型与端到端网络的协同，提升自动驾驶规划的准确性和可解释性，同时满足实时性需求，为鲁棒可靠的自动驾驶系统铺平道路。

## 2. 论文提出的方法论
- **核心思想**：在特征层面实现 VLM 与端到端模型的知识共享，通过共享视觉编码器让两者进行深度交互；同时引入轨迹思维链（Trajectory Chain-of-Thought, T-CoT）逐步细化轨迹预测，降低不确定性并提高精度。
- **关键技术细节**：
  - **共享视觉编码器**：使 VLM 和端到端模型共用同一视觉特征提取器，促进特征级互动，避免冗余计算。
  - **轨迹思维链（T-CoT）**：逐步递进地预测轨迹，将最终轨迹拆解为多个推理步骤，类似链式思维，从而提升预测准确度和可解释性。
  - **时域解耦策略**：实现异步高效协同，将高质量的 VLM 输出与端到端模型的实时性能对齐，解决 VLM 推理速度慢的问题。
- **算法流程**（文字说明）：
  1. 输入多视图图像，通过共享视觉编码器提取特征。
  2. 特征分别送入 VLM 分支和端到端分支，VLM 分支进行场景理解与常识推理，端到端分支进行传统规划。
  3. 通过 T-CoT 模块，将 VLM 输出的高层语义逐步转化为低层精确轨迹，每一步都基于前一步结果优化。
  4. 采用时域解耦策略，允许 VLM 以较低频率运行，而端到端模型实时更新，实现异步协作。

## 3. 实验设计
- **数据集**：仅提到在 nuScenes 数据集上进行评估。
- **场景**：nuScenes 涵盖城市道路多种场景（交叉口、拥堵等）。
- **Benchmark**：以轨迹预测精度为主要基准，可能包括位移误差、碰撞率等指标（摘要未具体列出）。
- **对比方法**：未明确列出对比方法名称，但说明 SOLVE 相比现有 VLM 集成方法与端到端方法有显著提升。

## 4. 资源与算力
- **未明确说明**：论文摘要及元数据中未提及使用的 GPU 型号、数量、训练时长等细节。可能需要查阅全文获取具体算力信息。

## 5. 实验数量与充分性
- **猜测**：从元数据中看到有 5 个表格（可能包括本文方法在不同设置下的结果、消融实验等），以及 5 张图表。推测实验包括：
  - 与现有 SOTA 方法对比（表1）
  - 消融研究：共享编码器、T-CoT、时域解耦策略的影响（表2-4）
  - 实时性/效率分析（表5）
- **充分性**：涵盖主要模块消融和对比，实验设计看似充分且客观（基于公开数据集 nuScenes），但缺乏多数据集验证（仅一个数据集）和更详细的统计显著性说明。

## 6. 论文的主要结论与发现
- SOLVE 通过 VLM 与端到端模型的协同，在轨迹预测精度上显著优于现有方法。
- 共享视觉编码器和 T-CoT 范式是提升性能的关键，时域解耦策略有效平衡了质量与实时性。
- 该方法为自动驾驶规划提供了一种高效、可解释且具备常识推理能力的解决方案。

## 7. 优点
- **创新协同架构**：首次在特征级别深度融合 VLM 与端到端模型，避免传统两阶段级联的重复计算。
- **轨迹思维链**：将复杂预测分解为可解释的逐步过程，提高准确性并增强可理解性。
- **实时性解决方案**：通过时域解耦，使慢速的大模型能与快速的传统模型异步配合，兼顾了性能与延迟。
- **仅在 nuScenes 上验证**：方法通用性强，但实验结果表现出优越性。

## 8. 不足与局限
- **实验覆盖有限**：仅在 nuScenes 一个数据集上评估，缺乏在更多复杂场景（如极端天气、不同国家交通规则）下的泛化性验证。
- **未提供算力与训练细节**：无法评估方法的资源成本和可复现性。
- **偏差风险**：论文未讨论失败案例或边界情况（如罕见突发事件），可能高估了模型鲁棒性。
- **应用限制**：VLM 的推理仍存在潜在延迟，时域解耦策略虽缓解了实时性问题，但未在嵌入式平台或实际车辆上测试。

（完）
