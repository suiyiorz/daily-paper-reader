---
title: "Seeing Across Views: Benchmarking Spatial Reasoning of Vision-Language Models in Robotic Scenes"
title_zh: 跨越视角：机器人场景中视觉语言模型空间推理的基准测试
authors: "ZhiYuan Feng, Zhaolu Kang, Qijie Wang, Zhiying Du, Jiongrui Yan, Shi Shubin, Chengbo Yuan, Huizhi Liang, Yu Deng, Qixiu Li, Rushuai Yang, Ruichuan An, Leqi Zheng, Weijie Wang, Shawn Chen, Sicheng Xu, Yaobo Liang, Jiaolong Yang, Baining Guo"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=jXDZJAfRZB"
tags: ["query:ad"]
score: 7.0
evidence: 多视图空间推理视觉语言模型机器人场景
tldr: 视觉语言模型在机器人领域应用广泛，但现有评估仅关注单视图。MV-RoboBench基准专门评估多视图空间推理能力，发现当前VLM在多视图整合上存在显著不足，为VLA模型发展提供重要参考。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有VLM评估忽视了机器人多摄像头配置下的多视图推理能力。
method: 提出MV-RoboBench基准，设计多视图空间推理任务。
result: 当前VLM在多视图整合推理上表现不佳。
conclusion: 多视图推理是提升VLA模型表现的关键方向。
---

## Abstract
Vision-language models (VLMs) are essential to Embodied AI, enabling robots to perceive, reason, and act in complex environments. They also serve as the foundation for the recent Vision-Language-Action (VLA) models. Yet most evaluations of VLMs focus on single-view settings, leaving their ability to integrate multi-view information underexplored. At the same time, multi-camera setups are increasingly standard in robotic platforms, as they provide complementary perspectives to mitigate occlusion and depth ambiguity. Whether VLMs can effectively leverage such multi-view inputs for robotic reasoning therefore remains an open question. To bridge this gap, we introduce \textbf{MV-RoboBench}, a benchmark specifically designed to evaluate the multi-view spatial reasoning capabilities of VLMs in robotic manipulation. MV-RoboBench consists of 1.7k manually curated QA items across eight subtasks, divided into two primary categories: spatial understanding and robotic execution. We evaluate a diverse set of existing VLMs, including both open-source and closed-source models, along with enhanced versions incorporating Chain-of-Thought (CoT)-inspired techniques. The results show that state-of-the-art models remain far below human performance, underscoring the substantial challenges VLMs face in multi-view robotic perception. Additionally, our analysis uncovers two key findings: (i) spatial intelligence and robotic task execution are positively correlated in multi-view robotic scenarios; and (ii) strong performance on existing general-purpose single-view spatial understanding benchmarks does not reliably translate to success in the robotic spatial tasks assessed by our benchmark. We release MV-RoboBench as an open resource to foster progress in spatially grounded VLMs and VLAs, providing not only data but also a standardized evaluation protocol for multi-view embodied reasoning.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：当前视觉语言模型（VLM）在具身智能和机器人领域的评估大多局限于单视图设置，忽视了多摄像头配置下多视图信息的整合推理能力。机器人平台日益普及的多摄像头系统提供了互补视角以缓解遮挡和深度模糊问题，但VLM是否能有效利用多视图输入进行空间推理尚不清楚。
- **整体含义**：为填补这一空白，论文提出**MV-RoboBench**基准，专门评估VLM在机器人操作场景中的多视图空间推理能力，旨在推动面向空间认知的VLM和视觉-语言-动作（VLA）模型的发展。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：构建一个涵盖多视图空间推理的标准化基准，包括空间理解（spatial understanding）和机器人执行（robotic execution）两大类，共8个子任务。
- **关键技术细节**：
  - 数据来源：手动策划1.7k个QA条目，覆盖多种机器人操作场景。
  - 任务分类：
    - 空间理解：如物体相对位置、遮挡判断、尺寸比较等。
    - 机器人执行：如抓取规划、路径选择、动作顺序等。
  - 评估协议：提供标准化评估流程，确保多视图输入的一致性和公平性。
  - 引入Chain-of-Thought (CoT) 启发技术增强模型推理能力。
- **公式/算法**：论文未提供具体公式或算法流程，主要通过任务设计和评估协议实现。

## 3. 实验设计

- **数据集 / 场景**：MV-RoboBench基准，包含8个子任务的手动策划QA数据（共1.7k个条目）。
- **Benchmark**：MV-RoboBench本身即为评估基准，覆盖多视图机器人操作场景。
- **对比方法**：
  - 开源VLM（如LLaVA、InternVL等）。
  - 闭源VLM（如GPT-4V、Gemini等）。
  - 增强版本：结合Chain-of-Thought（CoT）技巧的模型变体。
- 人类表现作为上限参考。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量、训练时长等算力信息。论文仅给出评估结果，未提及训练或推理的具体硬件配置。若需了解算力，需查阅原论文附录或补充材料。

## 5. 实验数量与充分性

- **实验数量**：主要评估了多个VLM（包括开源和闭源）及其CoT增强版本，覆盖8个子任务。论文给出了总体性能对比，但未列出具体消融实验或跨数据集验证的详细组数。
- **充分性**：实验覆盖了多种主流模型，并对比了人类表现，具有一定的全面性。但缺少以下方面：
  - 未包含不同多视图输入数量（如2视图 vs 4视图）的消融。
  - 未分析任务难度与模型规模的关系。
  - 未在同一模型上测试不同推理策略（除CoT外）。
- **公平性**：使用同一基准和标准化协议，对比公正。但未明确说明是否控制输入分辨率、提示格式等变量，可能存在一定偏差。

## 6. 主要结论与发现

1. **现有VLM表现远低于人类**：最先进的模型在MV-RoboBench上仍显著落后于人类，表明多视图空间推理是当前VLM的重大挑战。
2. **空间智能与机器人任务执行正相关**：在多视图机器人场景中，空间理解能力与任务执行性能呈正相关。
3. **单视图基准表现不能迁移**：在现有通用单视图空间理解基准上表现优异的模型，在MV-RoboBench的机器人空间任务中未必成功，说明多视图推理是独特且关键的维度。
4. **为VLA模型提供重要参考**：多视图推理是提升VLA（视觉-语言-动作）模型表现的关键方向，MV-RoboBench可作为标准化评估平台。

## 7. 优点

- **问题新颖**：填补了多视图空间推理评估的空白，紧贴机器人实际部署场景。
- **数据集高质量**：手动策划1.7k QA条目，覆盖8个多样化任务，确保了任务的相关性和难度。
- **标准化评估协议**：提供了统一的多视图输入和推理评价流程，有利于公平比较和后续研究。
- **开源贡献**：公开数据和协议，促进社区发展。

## 8. 不足与局限

- **实验覆盖有限**：仅评估了有限数量的模型，未包括更多新近VLM（如CLIP变体、3D VLM等）。
- **消融分析不足**：未深入探究多视图数量、视角选择、分辨率等变量对性能的影响。
- **偏差风险**：数据可能存在场景偏好（如仅包括桌面操作），缺乏更复杂环境（如移动机器人、多臂协作）的评估。
- **应用限制**：基准基于静态QA形式，未涉及动态交互或在线推理，与实际机器人执行仍有距离。
- **算力信息缺失**：无法评估训练和推理成本，不利于实际部署决策。

（完）
