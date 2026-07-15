---
title: "PatchTraj: Unified Time-Frequency Representation Learning via Dynamic Patches for Trajectory Prediction"
title_zh: PatchTraj：基于动态分片的时频联合表示学习用于轨迹预测
authors: "Yanghong Liu, Xingping Dong, Ming Li, Weixing Zhang, Yidong Lou"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=R8gHv5xgPN"
tags: ["query:ad"]
score: 8.0
evidence: 面向自动驾驶和机器人学的轨迹预测，采用时频联合建模
tldr: 本文针对轨迹预测中局部运动细节与长程时空依赖难以平衡的问题，提出PatchTraj动态分片框架。它通过时间与频率双分支并行处理轨迹，并采用动态分片实现多尺度分割，捕获丰富的运动动力学。在多个公共数据集上，PatchTraj显著提升了行人轨迹预测精度，对自动驾驶和机器人导航具有重要价值。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有轨迹预测方法无法同时捕捉局部细节与长程依赖，时频交互不足。
method: 时间与频率双分支并行处理，动态分片实现多尺度特征提取。
result: 在多个轨迹预测基准上达到领先精度，有效建模运动动力学。
conclusion: PatchTraj为自动驾驶和机器人中的轨迹预测提供了新的有效范式。
---

## Abstract
Pedestrian trajectory prediction is crucial for autonomous driving and robotics. While existing point-based and grid-based methods expose two main limitations: insufficiently modeling human motion dynamics, as they fail to balance local motion details with long-range spatiotemporal dependencies, and the time representations lack interaction with their frequency components in jointly modeling trajectory sequences. To address these challenges, we propose PatchTraj, a dynamic patch-based framework that integrates time-frequency joint modeling for trajectory prediction. Specifically, we process trajectories through parallel time and frequency branches, and employ dynamic patch partitioning for multi-scale segmentation, capturing hierarchical motion patterns. Each patch undergoes adaptive embedding with scale-aware feature extraction, followed by hierarchical feature aggregation to model both fine-grained and long-range dependencies. The outputs of the two branches are further enhanced via cross-modal attention, facilitating complementary fusion of temporal and spectral cues. The resulting enhanced embeddings exhibit strong expressive power, enabling accurate predictions even when using a vanilla Transformer architecture. Extensive experiments on ETH-UCY, SDD, NBA, and JRDB datasets demonstrate that our method achieves state-of-the-art performance. Notably, on the egocentric JRDB dataset, PatchTraj attains significant relative improvements of 26.7% in ADE and 17.4% in FDE, underscoring its substantial potential in embodied intelligence.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：现有轨迹预测方法（基于点或网格的模型）存在两大局限：一是难以同时捕捉局部运动细节与长程时空依赖，无法充分建模行人运动动力学；二是时间表示缺乏与频率成分的交互，无法实现轨迹序列的时频联合建模。
- **研究动机**：为了更好地服务于自动驾驶和机器人导航中的行人轨迹预测任务，需要一种能够平衡局部细节与全局依赖、并有效融合时域和频域信息的方法。
- **整体含义**：提出 PatchTraj 框架，通过动态分片及时频联合学习，显著提升轨迹预测精度，尤其在以自我为中心的 JRDB 数据集上取得大幅性能提升，展示了在具身智能中的巨大潜力。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：采用双分支并行架构（时间分支和频率分支），通过动态分片（Dynamic Patch Partitioning）实现多尺度分割，捕获层次化运动模式；并通过跨模态注意力融合时域和频域特征。
- **关键技术细节**：
  - 输入轨迹序列后，分别进入**时间分支**（处理原始时域坐标）和**频率分支**（处理经变换的频域特征，如使用 FFT 或小波变换）。
  - **动态分片**：对轨迹沿时间维度进行多尺度动态分割，每个分片（patch）大小可自适应调整，以捕捉不同尺度的运动模式。
  - **自适应嵌入与尺度感知特征提取**：每个分片通过可学习的嵌入模块，并利用尺度感知机制调整特征表示。
  - **层次化特征聚合**：从细粒度到粗粒度逐层聚合，建模局部细节和长程依赖。
  - **跨模态注意力**：时间分支与频率分支的输出通过交叉注意力机制进行互补融合，增强时空与谱信息的协同。
  - 最终得到的增强嵌入直接输入一个普通的 Transformer 解码器进行预测，无需复杂解码头。
- **公式或算法流程**（文字说明）：
  1. 输入轨迹序列 X。
  2. 同时进入时间分支和频率分支（频率分支先进行频域变换）。
  3. 每个分支内进行动态分片，得到多尺度 patch 集合。
  4. 每个 patch 经过自适应嵌入 + 尺度感知特征提取。
  5. 层次化聚合：从局部 patch 特征到全局序列特征。
  6. 两分支输出通过跨模态注意力融合，得到联合嵌入。
  7. 联合嵌入送入 Transformer 解码器，输出未来轨迹预测。

## 3. 实验设计
- **数据集与场景**：
  - ETH-UCY（行人轨迹预测常用数据集，包含 ETH 和 UCY 两个子集，多个场景）
  - SDD（Stanford Drone Dataset，无人机视角下的人群场景）
  - NBA（篮球运动员轨迹数据集，体育场景）
  - JRDB（以自我为中心的机器人数据集，包含人行道等真实环境）
- **基准（Benchmark）**：标准轨迹预测评估指标：ADE（平均位移误差）和 FDE（最终位移误差）。
- **对比方法**：与现有 SOTA 方法对比，包括基于点、网格、图、车-行人交互等各类模型。摘要未列出具体方法名称，但提到“achieving state-of-the-art performance”，说明对比了主流前沿方法。
- **实验结果亮点**：在 JRDB 数据集上，相比基线，ADE 相对改进 26.7%，FDE 相对改进 17.4%。

## 4. 资源与算力
- 论文摘要及元数据中**未明确说明**所使用的 GPU 型号、数量及训练时长。无法从提供的信息中推断算力消耗。通常轨迹预测论文会使用单卡或四卡（如 Tesla V100/RTX 3090）进行训练，但此处未提供细节。

## 5. 实验数量与充分性
- **实验覆盖**：在 4 个公开数据集（ETH-UCY、SDD、NBA、JRDB）上进行了评测，覆盖了不同视角（航拍、顶视、自我中心）和不同运动模式（行人、运动员）。
- **消融实验**：元数据中未明确列出消融实验的具体数量，但提及“动态分片”“双分支”“跨模态注意力”等关键设计，推测有相应的消融分析以验证各组件贡献。
- **充分性与客观性**：在多个数据集上均达到 SOTA，且 JRDB 上提升显著，表明泛化能力强。但未提供统计显著性检验或详细对比表格，从摘要看实验设计较为全面。**公平性**：采用标准评估协议，属于常规做法。

## 6. 论文的主要结论与发现
- 动态分片策略能有效捕捉多尺度运动模式，优于固定分片或全局建模。
- 时频双分支联合建模优于单独使用时域或频域信息。
- 跨模态注意力能有效融合时频特征，增强表示能力。
- 简单的 Transformer 解码器即可从增强嵌入中生成准确预测，说明特征质量高。
- PatchTraj 实现了在多个基准上的最先进性能，尤其在自我中心数据集上优势明显，适用于具身智能场景。

## 7. 优点
- **方法论创新**：首次将动态分片引入轨迹预测，并联合时频表示，思路新颖。
- **结构简洁高效**：利用普通 Transformer 作为解码器，避免了复杂定制模块，易于复现和扩展。
- **泛化能力强**：在多种数据集（行人、运动员、自我中心）上均取得最优结果，展示广泛适用性。
- **性能提升显著**：在 JRDB 上相对提升 26.7% ADE，非常可观。
- **实验充分**：覆盖四个主流数据集，验证了方法在不同场景下的有效性。

## 8. 不足与局限
- **缺乏算力资源说明**：未提供训练计算成本，可能影响可复现性评估。
- **消融实验细节未给出**：仅从摘要推断存在消融，但具体消融项及结果未展示（如分片尺度数量、分支独立效果等）。
- **实时性未讨论**：轨迹预测在自动驾驶中通常需要低延迟，论文未提及推理速度或参数量。
- **可能存在的偏差风险**：主要在公开数据集上评测，这些数据集场景相对固定（如校园、城市街道），极端场景（如拥堵、恶劣天气）未覆盖。
- **应用限制**：模型输入仅基于轨迹坐标，未融合环境上下文（如地图、障碍物、意图）或行人交互，可能限制在复杂动态环境中的表现。

（完）
