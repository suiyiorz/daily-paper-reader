---
title: "StyleDrive: Towards Driving-Style Aware Benchmarking of End-To-End Autonomous Driving"
title_zh: "StyleDrive: 面向驾驶风格感知的端到端自动驾驶基准测试"
authors: "Ruiyang Hao, Bowen Jing, Haibao Yu, Zaiqing Nie"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/42463/46424"
tags: ["query:ad"]
score: 9.0
evidence: 端到端自动驾驶中的驾驶风格感知基准测试
tldr: 端到端自动驾驶缺乏考虑驾驶偏好的个性化研究。本文提出了StyleDrive，首个为个性化端到端自动驾驶构建的大规模真实世界数据集。该数据集融合了场景拓扑和由微调视觉语言模型推断的丰富动态上下文。该基准测试旨在推动个性化驾驶模型的开发与评估，提升用户信任和实际采用率。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1648, \"height\": 600, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1644, \"height\": 709, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 877, \"height\": 322, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 851, \"height\": 306, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 582, \"height\": 276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 576, \"height\": 274, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 580, \"height\": 275, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 578, \"height\": 273, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 583, \"height\": 276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-42463/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 586, \"height\": 274, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-42463/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1468, \"height\": 674, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-42463/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1460, \"height\": 553, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-42463/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 764, \"height\": 397, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-42463/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 628, \"height\": 278, \"label\": \"Table\"}]"
motivation: 现有端到端自动驾驶基准忽略了驾驶偏好的个性化，限制了用户信任和实际应用。
method: 构建了首个大规模真实世界数据集，融合场景拓扑和由VLM推断的动态上下文，支持个性化端到端自动驾驶评估。
result: 该数据集为个性化驾驶模型提供了全面的基准，有望推动该领域的研究。
conclusion: StyleDrive通过引入驾驶风格感知基准，弥补了端到端自动驾驶中个性化研究的空白。
---

## Abstract
Personalization, while extensively studied in conventional autonomous driving pipelines, has been largely overlooked in the context of end-to-end autonomous driving (E2EAD), despite its critical role in fostering user trust, safety perception, and real-world adoption. A primary bottleneck is the absence of large-scale real-world datasets that systematically capture driving preferences, severely limiting the development and evaluation of personalized E2EAD models. In this work, we introduce the first large-scale real-world dataset explicitly curated for personalized E2EAD, integrating comprehensive scene topology with rich dynamic context derived from agent dynamics and semantics inferred via a fine-tuned vision-language model (VLM). We propose a hybrid annotation pipeline that combines behavioral analysis, rule-and-distribution-based heuristics, and subjective semantic modeling guided by VLM reasoning, with final refinement through human-in-the-loop verification. Building upon this dataset, we introduce the first standardized benchmark for systematically evaluating personalized E2EAD models. Empirical evaluations on state-of-the-art architectures demonstrate that incorporating personalized driving preferences significantly improves behavioral alignment with human demonstrations.

---

## 论文详细总结（自动生成）

# StyleDrive 论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：端到端自动驾驶（E2EAD）尽管发展迅速，但严重缺乏对**驾驶风格个性化**的考虑。现有方法要么局限于模块化系统中的孤立场景（如跟车、换道），要么依赖不真实的人机交互仿真，难以扩展到真实世界的多样化环境。关键瓶颈是**缺少带有驾驶风格偏好的大规模真实世界数据集**，导致无法系统性地开发和评估个性化 E2EAD 模型。
- **整体含义**：本文提出 **StyleDrive**，这是首个专门为**个性化端到端自动驾驶**构建的大规模真实世界数据集和标准化基准。通过融合场景拓扑、动态语义与混合标注管道，为模型提供风格偏好标签，从而推动 E2EAD 从“平均性能优化”向“用户个性化对齐”迈进，增强用户信任和实际采用率。

## 2. 论文提出的方法论
### 核心思想
- 构建一个混合标注框架，综合利用**地图拓扑分析**、**微调视觉语言模型（VLM）的语义推理**、**规则与分布启发式**以及**人工验证**，为每个驾驶片段生成三种风格的偏好标签（激进、正常、保守）。
- 基于此数据集建立基准，通过**风格调制评价指标（SM-PDMS）** 和多个风格条件基线模型，评估个性化驾驶策略。

### 关键技术细节（流程）
1. **静态场景分类**：基于 nuPlan HD 地图拓扑，将每个驾驶片段归类为 11 种主要场景类型（如车道跟随、交叉口、并道等）。
2. **动态语义增强**：使用微调的 **Video-LLaMA3**（在 LingoQA 数据集上微调）从驾驶视频中提取高层语义属性（如是否有前车、行人、并道意图等）。
3. **客观偏好标注（规则&分布启发式）**：
   - 提取自车运动特征（速度、加速度、偏航率等）。
   - 结合场景类型和语义属性，基于统计分布和专家规则判定风格（如低速度宽间距→保守；突然换道且后车间距小→激进）。
4. **主观偏好标注（VLM 推理）**：
   - 将视频、场景描述和运动特征输入 VLM，回答如“车辆是否谨慎/挑衅”等问题，得到主观风格判定。
5. **融合与人工验证**：
   - **融合策略**：若任一来源标为激进 → 激进；若两者均标为保守 → 保守；其余为正常。这种风险感知策略确保激进风格不漏标，保守风格严格。
   - 再经人工审查边缘案例，保证标签质量。

### 评价指标：Style-Modulated PDMS（SM-PDMS）
- 在原有 PDMS 基础上，将 **Ego Progress (EP)**、**舒适性 (Comf.)**、**碰撞时间 (TTC)** 三个子指标根据目标风格进行调制（如激进风格接受更紧的跟车距离，保守风格要求更大的安全裕度），从而评估风格对齐程度。

## 3. 实验设计
### 使用的数据集
- **StyleDrive 数据集**：从大规模开放场景数据集 **OpenScene** 中采样构建，包含约 **3 万个驾驶场景**，覆盖新加坡和美国的城市与郊区环境，来自 16 位以上驾驶员。
- 数据划分：用于训练/验证/测试，但具体比例文中未详述。

### 基准（Benchmark）
- **仿真平台**：基于 **NavSim**（非反应式仿真），重放 StyleDrive 场景，评估风格条件模型。
- **评价指标**：SM-PDMS（含 NC、DAC 及风格调制子指标）。

### 对比方法
- **基线模型**：
  - **AD-MLP**：仅有状态输入的 MLP 轨迹回归。
  - **TransFuser**：融合图像和 LiDAR 的 Transformer 模型。
  - **WoTE**：基于 BEV 世界模型的端到端规划。
  - **DiffusionDrive**：基于扩散模型的轨迹生成。
- **风格条件变体**（“-Style”后缀）：在原有模型基础上，将**单热点风格向量**注入轨迹预测头（通过拼接+MLP 融合）。
- **消融实验**：固定风格条件（所有场景强制使用激进/正常/保守）以验证标签有效性。

### 实验数量与充分性分析
- **主要结果**（表2）：展示了 4 个基线及其风格条件版本共 8 个模型在 SM-PDMS 及子指标上的对比，并额外做了固定风格消融（3 个条件）。
- **开环 L2 误差**（表3）：对比了 8 个模型在 2s/3s/4s 预测误差。
- **敏感性分析**（表4）：对比 PDMS 与 SM-PDMS 在风格敏感子指标上的标准差与范围。
- **定性分析**（图5）：展示了 DiffusionDrive-Style 在不同风格条件下的轨迹可视化。
- **总体充分性**：实验覆盖多种模型架构、消融控制、定量与定性分析，较为充分。但缺少用户主观满意度调查、真实车辆测试，以及更多多样化指标的对比。

## 4. 资源与算力
- 论文**未明确说明** GPU 型号、数量、训练时长或总计算资源。仅在致谢中提及项目支持单位。因此无法量化算力消耗。

## 5. 实验数量与充分性
- **实验组数**：主要对比 8 个模型的基准结果（表2），另有 3 组固定风格消融、8 个模型的开环误差（表3）、2 组指标敏感性对比（表4），以及定性可视化。
- **公平性**：基线模型均采用公开实现，风格条件注入方式一致；评价指标 SM-PDMS 公开透明。但缺乏对同一模型多次运行的标准差报告，且未使用相同种子进行对比可能会影响公平性。
- **充分性**：实验设计覆盖了主流 E2EAD 架构，消融验证了标签可学习性，指标设计具有针对性。但仍可增加更多场景类型、更细粒度的风格标签以及交互式或真实闭环评估。

## 6. 论文的主要结论与发现
1. **风格条件模型提升行为对齐**：TransFuser-Style、WoTE-Style、DiffusionDrive-Style 的 SM-PDMS 均高于相应普通版本，证实了融入驾驶偏好的有效性。AD-MLP 因缺乏感知无法利用风格信息，表现下降。
2. **固定风格消融验证标签有效性**：固定风格时，随着风格从激进→正常→保守，NC、DAC 提升；但整体性能不及真实风格标签，说明标注可靠。
3. **开环误差下降**：风格条件模型在 L2 轨迹误差上低于普通版本，表明更接近人类驾驶行为。
4. **SM-PDMS 对风格更敏感**：对比原始 PDMS，SM-PDMS 在风格敏感子指标上标准差和范围更大，能更好区分不同风格策略。
5. **定性差异明显**：相同场景下不同风格条件产生显著不同的轨迹，体现了风格控制的可表达性。

## 7. 优点
- **首创性**：首个大规模真实世界个性化 E2EAD 数据集和基准，填补领域空白。
- **混合标注管道**：巧妙结合客观规则与主观 VLM 推理，并引入融合策略和人工验证，兼顾效率和准确性。
- **评价指标改进**：SM-PDMS 将风格感知引入传统评分，使评价更贴合个性化目标。
- **开源潜力**：数据集和基准基于公开数据构建（OpenScene、NavSim），可复现性强。
- **多模型基线**：覆盖从简单 MLP 到扩散模型不同复杂度，便于后续对比。

## 8. 不足与局限
- **风格粒度粗糙**：仅三分类（激进/正常/保守），无法捕捉更细腻的偏好差异（如激进程度、跟车距离偏好连续值）；作者也指出细粒度标注存在模糊问题。
- **风格注入机制简单**：仅将单热点向量拼接至网络头，未探索更复杂的条件嵌入（如学习风格嵌入、注意力调制等）。
- **仿真与现实差距**：基准基于非反应式仿真（NavSim），无法完全反映真实交互闭环性能。
- **缺乏用户主观验证**：标签有效性仅通过模型表现间接证明，未请真人驾驶员评估标注风格是否匹配实际偏好。
- **计算资源未公开**：未提供训练时间、GPU 型号等，影响复现和公平比较。
- **未考虑多风格共存**：驾驶员可能在不同场景中表现出不同风格，数据集采用场景级单一标签，忽略了场景内风格变化。
- **基线模型架构局限**：所有基线均为英文风格条件，未探索端到端个性化学习的原生设计（如联合场景-风格建模）。

（完）
