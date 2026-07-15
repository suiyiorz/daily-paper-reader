---
title: "RoCA: Robust Cross-Domain End-to-End Autonomous Driving"
title_zh: "RoCA: 鲁棒的跨域端到端自动驾驶"
authors: "Rajeev Yasarla, Shizhong Han, Hsin-Pai Cheng, Apratim Bhattacharyya, Shweta Mahajan, Litian Liu, Yunxiao Shi, Risheek Garrepalli, Hong Cai, Fatih Porikli"
date: 2026-04-30
pdf: "https://openreview.net/pdf/95a84909dd20724702715f37ac767abc2e8d6d20.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 鲁棒的跨域端到端自动驾驶框架
tldr: 端到端自动驾驶在跨域部署时面临挑战，现有LLM方法无法保证域适应性能且微调成本高。本文提出RoCA，通过高斯过程建模自车和周围车辆信息的联合概率分布，学习一组基元令牌。该方法无需昂贵的LLM重训练即可实现鲁棒的跨域驾驶，在多个城市数据集上验证了有效性。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 现有端到端自动驾驶方法在跨域部署时性能下降，且LLM方法微调成本高昂。
method: 提出RoCA框架，利用高斯过程建模令牌的联合概率分布，学习基元令牌实现跨域适应。
result: 在多个跨域数据集上，RoCA显著提升了驾驶性能，且无需昂贵的LLM重训练。
conclusion: RoCA有效解决了端到端自动驾驶的跨域泛化问题，降低了域适应成本。
---

## Abstract
End-to-end (E2E) autonomous driving has recently emerged as a new paradigm, offering significant potential. However, few studies have looked into the practical challenge of deployment across domains (e.g., cities). Although several works have incorporated Large Language Models (LLMs) to leverage their open-world knowledge, LLMs do not guarantee cross-domain driving performance and may incur prohibitive retraining costs during domain adaptation. In this paper, we propose RoCA, a novel framework for robust cross-domain E2E autonomous driving. RoCA formulates the joint probabilistic distribution over the tokens that encode ego and surrounding vehicle information in the E2E pipeline. Instantiating with a Gaussian process (GP), RoCA learns a set of basis tokens with corresponding trajectories, which span diverse driving scenarios. Then, given any driving scene, it is able to probabilistically infer the future trajectory. By using RoCA together with a base E2E model in source-domain training, we improve the generalizability of the base model, without requiring extra inference computation. In addition, RoCA enables robust adaptation on new target domains, significantly outperforming direct finetuning. We extensively evaluate RoCA on various cross-domain scenarios and show that it achieves strong domain generalization and adaptation performance.

---

## 论文详细总结（自动生成）

# 论文总结：RoCA: 鲁棒的跨域端到端自动驾驶

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：端到端（E2E）自动驾驶在实际部署中面临跨域（如不同城市）时的性能显著下降问题。尽管已有工作引入大语言模型（LLM）利用其开放世界知识，但LLM并不能保证跨域驾驶性能，且域适应时微调成本高昂。
- **动机**：需要一种无需昂贵LLM重训练、能够鲁棒泛化并高效适应新域的方法。
- **整体含义**：提出RoCA框架，通过高斯过程建模自车与周围车辆信息的联合概率分布，学习基元令牌（basis tokens），使模型具备跨域泛化和适应能力，降低域适应成本。

## 2. 方法论
- **核心思想**：在端到端管道中，将自车和周围车辆编码为令牌（tokens），并利用高斯过程（Gaussian Process, GP）对这些令牌的联合概率分布进行建模。学习一组基元令牌及其对应的轨迹，这些基元令牌覆盖多样的驾驶场景。对于任意给定驾驶场景，可以概率性地推断未来轨迹。
- **关键技术细节**：
  - 与基础端到端模型（base E2E model）在源域联合训练，不增加额外推理计算。
  - 在目标域适配时，RoCA通过GP推断实现鲁棒适应，显著优于直接微调。
  - 无需LLM重训练，降低了计算开销。
- **公式/算法流程**（文字说明）：
  - 输入：自车和周围车辆状态 → 编码为令牌序列。
  - 使用高斯过程建模令牌的联合分布，学习一组基元令牌。
  - 基元令牌对应先验轨迹，通过GP回归对新场景进行概率预测。
  - 训练时联合优化基础模型和GP模块；推理时直接采样或取期望。

## 3. 实验设计
- **数据集/场景**：多个跨域场景（不同城市），具体数据集名称文中未明确列出（但提及“various cross-domain scenarios”）。
- **Benchmark**：对比方法包括直接微调（direct finetuning）、可能还有基础模型本身及其他跨域方法（文中未列出具体对比方法名称，强调“significantly outperforming direct finetuning”）。
- **对比方法**：直接微调（最直接的基线），以及可能其他SOTA（论文摘要未提供完整列表，需查看全文）。

## 4. 资源与算力
- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅在摘要中提及“without requiring extra inference computation”，未给出训练成本。

## 5. 实验数量与充分性
- **实验数量**：涵盖多种跨域场景，但具体组数未在摘要中列出。至少包括源域训练、目标域直接微调、RoCA适应等对比。
- **充分性**：摘要声称“extensively evaluate”，但未提供详细的消融实验或统计显著性检验。考虑到是ICML-2026接收论文，推测有充分的消融实验、泛化性验证，但基于此摘要无法完全判断公平性与客观性。

## 6. 主要结论与发现
- RoCA显著提升了基础模型在跨域场景下的泛化能力，且适配新域时性能优于直接微调。
- 无需LLM重训练，降低了域适应成本，同时不增加推理计算量。
- 证实了高斯过程建模令牌联合分布可有效捕捉驾驶场景多样性，实现鲁棒跨域驾驶。

## 7. 优点
- **方法创新**：将高斯过程应用于端到端自动驾驶的跨域泛化，为域适应提供了概率建模思路。
- **效率优势**：无需LLM重训练，降低计算开销；推理时不增加额外计算。
- **鲁棒性**：在多个跨域场景中均取得优异性能，适应性强。

## 8. 不足与局限
- **实验细节缺失**：摘要未列出具体数据集、对比方法、消融实验数量，尚需查看全文确认。
- **算力报告缺失**：未提供训练资源信息，难以评估方法的实际成本。
- **潜在偏差**：仅提及跨城市域，未讨论其他域偏移（如天气、光照、传感器差异）的适用性。
- **可复现性**：基于摘要无法判断代码或模型是否开源，存在复现障碍。

（完）
