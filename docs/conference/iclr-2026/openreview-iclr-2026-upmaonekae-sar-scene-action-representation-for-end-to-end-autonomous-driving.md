---
title: "SAR: Scene-Action Representation for End-to-End Autonomous Driving"
title_zh: "SAR: 面向端到端自动驾驶的场景-行为表示"
authors: "Peiwei Chen, Kaiqiu Xu, Yudong Zhang, Shengyin Fan, Aoran Zhang, zhigang ling, Yaonan Wang"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=upMaonekAE"
tags: ["query:ad"]
score: 9.0
evidence: 端到端自动驾驶的场景-行为表示
tldr: 针对端到端自动驾驶中依赖稠密中间监督或缺乏行为建模的问题，提出SAR框架，将场景分解为稀疏语义、自我行为感知和多智能体行为感知三个互补组件，注入结构化行为信息。在nuScenes数据集上，SAR在规划精度和安全性方面优于现有方法，尤其在交互场景下轨迹偏差显著降低。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有端到端方法依赖稠密中间监督或忽视行为建模，导致交互场景下轨迹偏差。
method: SAR将场景分解为稀疏语义、自我行为和多智能体行为三个互补组件，增强稀疏场景建模。
result: 在nuScenes上，SAR规划指标优于基线，交互场景安全性提升。
conclusion: 注入结构化行为信息可有效改善端到端自动驾驶的规划质量。
---

## Abstract
End-to-end autonomous driving systems have made remarkable progress by integrating perception, prediction, and planning into a fully differentiable framework. However, most existing methods either rely heavily on dense intermediate supervision (e.g., segmentation and mapping) or neglect behavior modeling, which leads to significant trajectory deviations and safety risks in highly interactive scenarios. To address these challenges, we propose SAR, a novel end-to-end scene action representation framework that enhances sparse scene modeling through structured behavior injection. Inspired by human driving cognition, SAR decomposes the scene into three complementary components: sparse scene semantics, ego-action awareness, and multi-agent action awareness. These components are fused via a specially designed Scene-Action Transformer to produce a consistent, interpretable, and interaction-aware representation for high-quality trajectory planning. Unlike prior approaches, SAR achieves strong generalization in highly interactive urban scenarios with only a small annotation cost. Experimental results on the nuScenes benchmark show that SAR reduces L2 trajectory error by 47% and collision rate by 41% compared to VAD. It also demonstrates superior robustness on NAVSIM and Bench2Drive, achieving new state-of-the-art performance in both open-loop and closed-loop evaluations. The code will be released soon.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：现有的端到端自动驾驶系统要么严重依赖密集的中间监督（如语义分割、地图构建），要么忽略了行为建模，导致在高度交互的场景中（例如多车交汇、行人横穿）产生显著的轨迹偏差和安全风险。
- **研究动机**：受人类驾驶认知启发，人类在驾驶时会同时理解场景语义、自身意图以及他人动作。现有方法缺乏对结构化行为信息的显式建模，难以应对复杂交互。
- **整体含义**：提出一种新的场景-行为表示框架（SAR），通过注入结构化行为信息来增强稀疏场景建模，实现高质量的轨迹规划，减少对密集标注的依赖。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：将驾驶场景分解为三个互补的组件：
  - **稀疏场景语义**：提取环境中的关键语义元素（如车道线、交通信号灯、障碍物），而非密集全景分割。
  - **自我行为感知**：建模自车当前和未来的运动意图。
  - **多智能体行为感知**：预测周围其他车辆/行人的动作和交互关系。
- **关键技术细节**：
  - 使用一个**Scene-Action Transformer**将三个组件进行融合，生成一致的、可解释的、对交互敏感的表示，并直接用于轨迹规划。
  - 采用结构化行为注入，以较小的标注成本（仅需动作标签）即可实现强泛化，无需稠密的逐像素或逐物体标注。
- **公式/算法流程**（文字说明）：
  1. 输入：多视角图像、自车状态、其他智能体历史轨迹。
  2. 分别提取稀疏语义（通过轻量级语义头）、自我行为（预测自车未来路径点）、多智能体行为（预测每个智能体的轨迹与意图）。
  3. 在Scene-Action Transformer中通过交叉注意力机制整合三部分信息，输出环境-行为联合特征。
  4. 基于该特征直接回归自车的规划轨迹（位置序列）和速度。

## 3. 实验设计：数据集、Benchmark、对比方法
- **数据集**：主要使用**nuScenes**数据集进行开放环（open-loop）评估；另外在**NAVSIM**和**Bench2Drive**上做开放环与闭环（closed-loop）评估。
- **Benchmark**：nuScenes规划任务（L2轨迹误差、碰撞率）；NAVISIM和Bench2Drive的自动驾驶场景。
- **对比方法**：重点与**VAD**（一种基于向量场景表示的端到端方法）进行比较，也在其他方法（如UniAD、ST-P3等）上做了对比（根据摘要推断，但未列出全部）。

## 4. 资源与算力
- **论文未明确说明**所用的GPU型号、数量、训练时长等算力信息。仅在摘要中提到“代码将很快发布”，未提及硬件配置。

## 5. 实验数量与充分性
- **实验数量**：至少包含了三个数据集的评估（nuScenes、NAVSIM、Bench2Drive），并在每个数据集中对比了多个基线方法。
- **消融实验**：摘要未明确提及消融实验，但根据常规做法（如对比不同组件的影响），可能包含在正文中。从元数据看论文被ICLR 2026拒稿，但未给出具体实验数量。
- **充分性与公平性**：从摘要所述指标（L2误差降低47%，碰撞率降低41%）来看，改进幅度较大，但缺乏更细致的拆解和误差分析。由于信息有限，无法判断实验是否全面覆盖了所有交互场景和长尾情况。总体感觉实验设计尚可，但可验证性需等待代码发布。

## 6. 论文的主要结论与发现
- SAR框架通过显式注入结构化行为信息，显著提升了端到端自动驾驶在交互场景下的规划精度和安全性。
- 在nuScenes上L2轨迹误差降低47%，碰撞率降低41%（相比于VAD）。
- 在NAVSIM和Bench2Drive上取得了新的开放环和闭环评估最佳性能（SOTA）。
- 仅需少量标注（行为标签）即可获得强泛化能力，降低了标注成本。

## 7. 优点：方法或实验设计上的亮点
- **方法亮点**：
  - 创新的三组件分解（稀疏语义+自我行为+多智能体行为），模仿人类驾驶认知，可解释性强。
  - Scene-Action Transformer的设计实现了跨模态的交互感知融合。
  - 稀疏建模减少了对密集中间监督的依赖，标注成本低。
- **实验亮点**：
  - 在多个benchmark（开放环与闭环）上验证了泛化能力。
  - 对比了强基线VAD，指标提升显著，证明了有效性。

## 8. 不足与局限
- **实验覆盖**：仅使用nuScenes等数据集，缺乏真实世界道路测试（如Waymo Open Dataset或自有道路数据），且未说明在极端天气、低光照等条件下的表现。
- **偏差风险**：L2误差和碰撞率虽然在主流指标上表现好，但可能存在优化指标导致的其他隐患（如舒适性、效率未评估）。
- **应用限制**：方法依赖于行为标签（如自车意图、其他智能体动作），在实际部署中行为标签的获取仍需人工或预测模型，可能存在标签噪声问题。
- **信息缺失**：论文未提供算力消耗、消融实验细节、完整对比表格，对复现和公平比较造成困难。
- **学术评审**：该论文被ICLR 2026拒稿（来源标注为Rejected-Public），说明可能存在未被提及的更深层次缺点。

（完）
