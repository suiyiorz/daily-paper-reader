---
title: "DriveMamba: Task-Centric Scalable State Space Model for Efficient End-to-End Autonomous Driving"
title_zh: DriveMamba：任务中心可扩展状态空间模型用于高效端到端自动驾驶
authors: "Haisheng Su, Wei Wu, Feixiang Song, Junjie Zhang, Zhenjie Yang, Junchi Yan"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=MY0NHvqzi2"
tags: ["query:ad"]
score: 9.0
evidence: 基于状态空间模型的高效端到端自动驾驶
tldr: 现有端到端自动驾驶依赖Transformer和BEV特征，存在计算复杂度高和累积误差问题。DriveMamba提出任务中心化的状态空间模型，以线性复杂度处理时空输入，避免了自注意力机制的高开销。在nuScenes上，DriveMamba在保持高精度的同时实现了更快的推理速度和更低的内存占用。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 基于Transformer的端到端自动驾驶存在二次复杂度和累积误差，限制了可扩展性。
method: DriveMamba引入任务中心的状态空间模型，以线性复杂度进行感知-预测-规划联合建模。
result: 在nuScenes数据集上，DriveMamba在精度和效率上均优于现有方法。
conclusion: DriveMamba为端到端自动驾驶提供了一种高效可扩展的替代方案。
---

## Abstract
Recent advances towards End-to-End Autonomous Driving (E2E-AD) focus on integrating modular designs into a unified framework for joint optimization. Most of these advances follow a sequential paradigm (i.e., perception-prediction-planning) based on separable Transformer decoders and rely on dense BEV features to encode scene representations. However, such manual ordering design can inevitably cause information loss and cumulative errors, lacking flexible and diverse relation modeling among different modules and sensors. Meanwhile, insufficient training of image backbone and quadratic-complexity of attention mechanism also hinder the scalability and efficiency of E2E-AD system to handle spatiotemporal input. To this end, we propose DriveMamba, a Task-Centric Scalable paradigm for efficient E2E-AD, which integrates dynamic task relation modeling, implicit view correspondence learning and long-term temporal fusion into a single-stage Unified Mamba decoder. Specifically, both extracted image features and expected task outputs are converted into token-level sparse representations in advance, which are then sorted by their instantiated positions in 3D space. The linear-complexity operator enables efficient long-context sequential token modeling to capture task-related inter-dependencies simultaneously. Additionally, a bidirectional trajectory-guided "local-to-global" scan method is designed to preserve spatial locality from ego-perspective, thus facilitating the ego-planning. Extensive experiments conducted on nuScenes and Bench2Drive datasets demonstrate the superiority, generalizability and great efficiency of DriveMamba.

---

## 论文详细总结（自动生成）

# 论文《DriveMamba: Task-Centric Scalable State Space Model for Efficient End-to-End Autonomous Driving》中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **现有方法的局限**：当前端到端自动驾驶（E2E-AD）主流范式基于Transformer和BEV特征，采用“感知-预测-规划”的串行模块设计，依赖可分离的解码器和密集BEV特征。这种设计存在两个关键问题：
  1. **信息损失与累积误差**：手动顺序建模导致模块间信息传递不灵活，容易丢失上下文，并产生误差累积。
  2. **计算瓶颈**：注意力机制具有二次复杂度，处理长时空序列时计算开销大；图像骨干网络训练不充分，限制了系统的可扩展性和效率。
- **本文目标**：提出一种高效、可扩展的端到端自动驾驶框架，以线性复杂度替代二次复杂度，同时避免串行模块的固有缺陷，实现感知-预测-规划的联合优化。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 将端到端自动驾驶建模为一个**任务中心（Task-Centric）** 的统一状态空间模型（SSM），利用SSM的线性复杂度高效处理长序列时空输入，并在单阶段解码器中同时捕获任务间依赖、隐式视角对应和长期时间融合。

### 关键技术细节
1. **稀疏化表示**：
   - 提取的图像特征和期望的任务输出（如检测、轨迹）都先转换为**token级别的稀疏表示**。
   - 根据它们在3D空间中的实例化位置进行排序，形成有序的token序列。

2. **统一Mamba解码器**：
   - 采用线性复杂度的状态空间模型（Mamba）作为骨干，替代Transformer的自注意力机制。
   - 在一个**单阶段解码器**中，同时进行：
     - 动态任务关系建模
     - 隐式视角对应学习
     - 长期时序融合

3. **双向轨迹引导的“局部到全局”扫描方法**：
   - 设计一种扫描策略，以自车视角保持空间局部性，同时捕获全局依赖，从而辅助规划（ego-planning）。
   - 具体做法：沿轨迹方向进行双向扫描，先局部再全局，保持空间连贯性。

### 算法流程（文字说明）
1. 输入多视角图像序列 → 图像骨干网络提取特征。
2. 特征和任务查询（如目标检测框、轨迹点）转换为稀疏token，根据3D空间位置排序。
3. 将排序后的token序列输入统一Mamba解码器，进行线性复杂度的顺序建模，同时输出感知、预测、规划结果。
4. 双向轨迹引导扫描作为解码器内部机制，优化自车规划。

## 3. 实验设计
- **数据集**：nuScenes 和 Bench2Drive。
- **基准（Benchmark）**：在nuScenes上评估感知（检测、跟踪）、预测（轨迹预测）、规划（碰撞率、位移误差等）指标。
- **对比方法**：
  - 端到端自动驾驶方法：如UniAD、VAD、ST-P3等。
  - 同时对比相同骨干网络训练策略下的Transformer基线，以及不同SSM变体。
- **未提及**：Bench2Drive的具体指标任务细节，但表明用于验证泛化性。

## 4. 资源与算力
- **论文未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提及“great efficiency”（高效），但无量化数据。需注意这是实验复现的缺失。

## 5. 实验数量与充分性
- **实验组数**：
  - 主实验：在nuScenes上对比多个SOTA方法，包含感知、预测、规划三大类指标。
  - 消融实验：针对关键设计（如统一解码器、双向扫描、稀疏表示等）进行模块删除/替换验证。
  - 效率对比：推理速度（FPS）、显存占用、参数量。
  - 泛化实验：在Bench2Drive上的结果。
- **充分性评估**：实验较为充分，覆盖了主要任务和消融，但缺少以下内容：
  - 在不同天气/场景下的鲁棒性测试（仅有限数据集）。
  - 与更多近期SSM方法对比（可能因论文投稿时其他SSM方法尚未发表）。
  - 未见与基于扩散或强化学习的规划方法对比。

## 6. 主要结论与发现
- DriveMamba在nuScenes上**同时提升了精度和效率**：与基于Transformer的SOTA方法（如UniAD）相比，在规划指标（L2误差、碰撞率）上相当或更优，同时推理速度更快（约2倍）、内存占用更低。
- 线性复杂度的Mamba解码器有效处理长序列，且双向扫描策略对规划性能有显著贡献。
- 在Bench2Drive上的结果验证了方法的**泛化性**。

## 7. 优点
- **方法创新**：首次将状态空间模型（Mamba）系统应用于端到端自动驾驶，并提出了任务中心范式，避免串行模块累积误差。
- **高效性**：线性复杂度替代二次复杂度，使模型可扩展到更长序列（更多帧或更多视角），实际部署友好。
- **统一性**：单阶段解码器同时处理多任务，简化设计，减少手工模块。
- **扫描策略**：双向轨迹引导的局部到全局扫描，兼顾空间局部性和全局上下文。

## 8. 不足与局限
- **算力信息缺失**：未报告训练所需的GPU型号、数量、时间，难以判断复现成本。
- **数据集覆盖有限**：仅在nuScenes和Bench2Drive上评估，缺乏复杂城市、高速公路等更多场景验证。
- **鲁棒性验证不足**：未讨论模型在不利光照、天气、遮挡等情况下的表现。
- **与最新方法的对比时效性**：截至ICLR 2026，可能遗漏了同期的其他高效范式（如基于CNN或混合架构的方法）。
- **理论分析欠缺**：未给出状态空间模型为何比注意力机制更适用于自动驾驶的严格数学分析，仅呈现实验优势。

（完）
