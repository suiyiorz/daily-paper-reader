---
title: "UniMM-V2X: MoE-Enhanced Multi-Level Fusion for End-to-End Cooperative Autonomous Driving"
title_zh: UniMM-V2X：基于MoE增强的多层级融合端到端协作自动驾驶
authors: "Ziyi Song, Chen Xia, Chenbing Wang, Haibao Yu, Sheng Zhou, Zhisheng Niu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/37870/41832"
tags: ["query:ad"]
score: 9.0
evidence: 端到端协作自动驾驶与多层级融合
tldr: 该论文提出UniMM-V2X，一种基于混合专家模型（MoE）的多层级融合框架，用于端到端协作自动驾驶。通过统一的多智能体感知、预测和规划融合策略，解决了现有方法仅关注感知层协作而忽略下游规划的问题。实验证明该框架在合作驾驶场景中显著提升了安全性和效率。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37870/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 869, \"height\": 666, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37870/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1841, \"height\": 690, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37870/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1644, \"height\": 411, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37870/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1773, \"height\": 421, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37870/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1831, \"height\": 528, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37870/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1471, \"height\": 468, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37870/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1446, \"height\": 600, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37870/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 765, \"height\": 240, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37870/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1693, \"height\": 558, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37870/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1016, \"height\": 278, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37870/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 882, \"height\": 561, \"label\": \"Table\"}]"
motivation: 现有协作自动驾驶方法主要关注感知融合，未能有效对齐下游规划与控制。
method: 设计基于MoE的多层级融合策略，实现感知、预测和规划的层次化协作。
result: 在多个车联网场景下，感知融合和规划性能均得到显著提升。
conclusion: 该工作为端到端协作自动驾驶提供了统一框架。
---

## Abstract
Autonomous driving holds transformative potential but remains fundamentally constrained by the limited perception and isolated decision-making with standalone intelligence. While recent multi-agent approaches introduce cooperation, they often focus merely on perception-level tasks, overlooking the alignment with downstream planning and control, or fall short in leveraging the full capacity of the recent emerging end-to-end autonomous driving. In this paper, we present UniMM-V2X, a novel end-to-end multi-agent framework that enables hierarchical cooperation across perception, prediction, and planning. At the core of our framework is a multi-level fusion strategy that unifies perception and prediction cooperation, allowing agents to share queries and reason cooperatively for consistent and safe decision-making. To adapt to diverse downstream tasks and further enhance the quality of multi-level fusion, we incorporate a Mixture-of-Experts (MoE) architecture to dynamically enhance the BEV representations. We further extend MoE into the decoder to better capture diverse motion patterns. Extensive experiments on the DAIR-V2X dataset demonstrate our approach achieves state-of-the-art (SOTA) performance with a 39.7% improvement in perception accuracy, a 7.2% reduction in prediction error, and a 33.2% improvement in planning performance compared with UniV2X, showcasing the strength of our MoE-enhanced multi-level cooperative paradigm.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：传统单智能体自动驾驶受限于传感器范围和孤立决策，难以应对罕见关键事件和预测其他车辆意图。现有V2X多智能体协作方法大多仅聚焦于感知层融合（目标检测、跟踪），忽略了对下游预测和规划的联合优化，导致感知结果与最终规划目标不一致。
- **动机**：端到端自动驾驶范式的兴起要求整个系统（感知→预测→规划）统一优化。然而，在多智能体协作中，仅靠感知融合不足以满足复杂场景下的安全与效率需求，迫切需要一种贯穿感知、预测和规划的多层级协作策略。
- **整体含义**：本文提出UniMM-V2X，首次在端到端多智能体框架中实现感知层与预测层的层次化融合，并通过混合专家模型（MoE）动态增强表征和运动建模，从而大幅提升规划的安全性和可靠性。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 2.1 核心思想
- 构建**多层级融合**（Multi-Level Fusion）架构：在感知层融合跟踪查询、地图查询和占据概率图；在预测层融合运动查询，使智能体能够共同推理未来行为。
- 引入**MoE（Mixture-of-Experts）** 增强表征建模：在BEV编码器和运动解码器中均集成稀疏MoE，使网络根据下游任务需求动态生成专用特征，并利用多个专家捕获不同运动模式（直行、左转、右转等）。

### 2.2 关键技术细节

#### a. MoE增强的编码器与解码器
- **MoE-BEV Encoder**：将标准FFN替换为稀疏MoE层（公式(1)）：
  \[
  \text{MoE}(x) = \sum_{i \in I_k(x)} \tilde{G}_i(x) \cdot f_i(x)
  \]
  其中 \(f_i\) 为专家网络，\(\tilde{G}_i\) 为归一化路由权重，\(I_k(x)\) 为选择的前k个专家（实验中k=2）。
- **加载平衡损失**（公式(2)）：\(L_{\text{moe}} = \lambda (\text{Var}(p) + \text{Var}(l))\)，防止专家崩溃。
- **MotionMoE Decoder**：在运动查询生成模块同样采用MoE结构，产生针对不同运动模式的查询 \(Q_M^{\text{veh}}\) 和 \(Q_M^{\text{other}}\)。

#### b. 感知层融合（TrackFusion）
- 将其他智能体的跟踪查询 \(Q_A^{\text{other}}\) 通过MLP变换到自车坐标系（公式(4)）。
- 将自车与其他智能体的查询和参考点位置信息拼接，经多层自注意力（MHSA）融合（公式(5)-(7)），实现上下文感知与空间敏感的特征融合。

#### c. 预测层融合（TrajFusion）
- 将其他智能体的运动查询 \(Q_M^{\text{other}}\) 基于锚点进行坐标对齐（公式(8)-(9)）。
- 融合后的运动查询 \(F_M\) 先经过MHSA，再通过交叉注意力（MHCA）与历史感知查询 \(Q_A\) 交互，获得感知增强的预测结果（公式(10)-(11)）。

### 2.3 损失函数
联合优化六个子任务：检测跟踪、地图构建、占用预测、运动预测、规划以及MoE负载平衡：
\[
L = L_{\text{track}} + L_{\text{map}} + L_{\text{occ}} + L_{\text{mot}} + L_{\text{plan}} + L_{\text{moe}}
\]

## 3. 实验设计

### 3.1 数据集与场景
- **主要数据集**：DAIR-V2X（Yu et al., 2022），包含约100个真实世界复杂交叉路口场景，常用于V2X协作自动驾驶研究。
- **额外验证**：V2X-Sim（Li et al., 2022），大规模仿真基准（结果见论文附录）。

### 3.2 Benchmark与对比方法
- **单智能体（无融合）基线**：VAD\*, UniAD\*, SparseDrive\*。
- **协作感知方法**：V2VNet, CooperNaut, Where2comm, CoBEVT, V2X-ViT, CoAlign。
- **端到端协作驾驶框架**：UniV2X（SOTA对比方法）。
- **消融实验**：对MoE放置位置（BEV编码器/运动解码器/感知解码器）、专家数量（4/8/16）、多层级融合组件等进行系统对比。

## 4. 资源与算力

- **GPU型号与数量**：8 张 NVIDIA A800 GPU。
- **训练时长**：
  - 感知阶段：40 epoch。
  - 端到端运动与规划阶段：20 epoch。
- **推理速度**：UniMM-V2X 约 5.4 FPS（略低于UniV2X的5.8 FPS，但差距可接受）。

## 5. 实验数量与充分性

- **实验组数**：主要结果表（表1-3）涵盖了规划、感知、预测三个维度的对比，包括6+种单智能体和5+种多智能体方法。
- **消融实验**：表4系统分析了多层级融合（P-Level, M-Level）与MoE（编码器、解码器）各组件贡献，共9组实验。
- **MoE配置消融**：表5研究了专家数量（4/8/16）和MoE在感知/运动解码器位置的影响，共12组实验。
- **带宽鲁棒性实验**：图5展示不同传输成本下性能变化，表明方法稳定性。
- **充分性评估**：实验覆盖了从感知到规划的完整管道，对比了有无融合、有无MoE、多种专家配置，并验证了通用性（V2X-Sim）。结论客观公平。

## 6. 论文的主要结论与发现

1. **多层级融合显著优于单层融合**：感知层融合改善感知，但无法充分改善规划；预测层融合提升规划安全性，但感知增益有限；二者结合带来一致性的全管道提升。
2. **MoE进一步提升表征灵活性和多模态建模能力**：BEV编码器MoE生成任务自适应特征，运动解码器MoE捕获多样化运动模式。二者协同后效果最优化。
3. **最终SOTA性能**：
   - 感知mAP提升39.7%（对比UniV2X），AMOTA提升77.2%；
   - 运动预测minADE降低7.2%，minFDE降低6.8%；
   - 规划L2误差降低33.2%，平均碰撞率降低52.0%。
4. **通信成本可控**：虽因传输运动查询略有增加，但相比BEV方法仍降低87.9倍，且规划收益远大于额外开销。

## 7. 优点

- **方法创新性**：首次在端到端协作自动驾驶中实现感知与预测的双层融合，并系统地将MoE引入编码器和解码器，思路清晰、技术完备。
- **实验设计全面**：对比基线覆盖单智能体与多智能体主流方法，消融实验细致拆解了每个模块贡献，验证充分。
- **可解释性**：通过查询级的实例与场景信息交换，增强了模型可解释性。
- **实用性验证**：报告了FPS、BPS等实际部署指标，并在不同带宽条件下展示鲁棒性。

## 8. 不足与局限

- **未进行闭环仿真/实车验证**：当前实验仅在DAIR-V2X和V2X-Sim数据集上进行开环评估，实际闭环控制中的稳定性和泛化性未验证（论文已在未来工作中提及）。
- **推理速度较低**：5.4 FPS可能无法满足高速场景实时性要求，虽然论文认为“代价可接受”，但离实际部署仍有差距。
- **运动预测评估仅基于单步/多步误差**：未在更长时域或规划一致性指标上深入分析。
- **MoE引入额外计算与内存**：虽然通信成本较低，但MoE层增加模型参数量和推理延迟，对资源受限设备可能不友好。
- **数据集规模有限**：DAIR-V2X仅约100个场景，且全部为特定交叉路口，场景多样性不足，存在过拟合风险。
- **公平性讨论**：对比方法中部分为早期工作（如CooperNaut 2022），最新方法如DiffusionDrive等未纳入对比（可能因时间线原因）。

（完）
