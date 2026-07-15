---
title: "Perception in Plan: Coupled Perception and Planning for End-to-End Autonomous Driving"
title_zh: 感知即规划：端到端自动驾驶中感知与规划的耦合
authors: "Bozhou Zhang, Jingyu Li, Nan Song, Li Zhang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38230/42192"
tags: ["query:ad"]
score: 9.0
evidence: 端到端自动驾驶中感知与规划的耦合
tldr: 该论文提出VeteranAD框架，将感知集成到规划过程中，实现感知与规划的深度耦合。通过多模式锚定轨迹作为规划表示，引导感知模块随时间动态关注关键区域。实验表明该框架比传统顺序范式更高效，显著提升了复杂驾驶场景下的规划性能。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38230/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 872, \"height\": 576, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38230/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1822, \"height\": 933, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38230/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 870, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38230/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1615, \"height\": 1223, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38230/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1732, \"height\": 536, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38230/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1483, \"height\": 635, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38230/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1510, \"height\": 222, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38230/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 736, \"height\": 267, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38230/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 841, \"height\": 185, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38230/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1789, \"height\": 223, \"label\": \"Table\"}]"
motivation: 现有端到端自动驾驶采用顺序感知-规划范式，感知与规划缺乏交互。
method: 设计感知进入规划框架，使用多模式锚定轨迹引导感知随时间演化。
result: 在多个自动驾驶基准上实现了更优的规划精度和效率。
conclusion: 感知与规划的耦合是端到端自动驾驶的重要进化方向。
---

## Abstract
End-to-end autonomous driving has achieved remarkable advancements in recent years. Existing methods primarily follow a perception–planning paradigm, where perception and planning are executed sequentially within a fully differentiable framework for planning-oriented optimization. We further advance this paradigm through a "perception-in-plan'' framework design, which integrates perception into the planning process.  This design facilitates targeted perception guided by evolving planning objectives over time, ultimately enhancing planning performance. Building on this insight, we introduce VeteranAD, a coupled perception and planning framework for end-to-end autonomous driving. By incorporating multi-mode anchored trajectories as planning priors, the perception module is specifically designed to gather traffic elements along these trajectories, enabling comprehensive and targeted perception. Planning trajectories are then generated based on both the perception results and the planning priors. To make perception fully serve planning, we adopt an autoregressive strategy that progressively predicts future trajectories while focusing on relevant regions for targeted perception at each step. With this simple yet effective design, VeteranAD fully unleashes the potential of planning-oriented end-to-end methods, leading to more accurate and reliable driving behavior. Extensive experiments on the NAVSIM and Bench2Drive datasets demonstrate that our VeteranAD achieves state-of-the-art performance.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：现有端到端自动驾驶方法普遍采用顺序的“感知-规划”范式（perception–planning paradigm），即先进行感知，再进行规划，整个流程通过全微分框架实现面向规划的优化。然而，这种顺序执行的方式使得感知模块无法主动响应规划的需求，未能充分发挥“规划导向优化”的潜力。
- **核心问题**：如何将感知模块深度整合到规划过程中，使感知能够根据动态变化的规划目标进行针对性调整，从而提升最终规划性能。
- **整体含义**：本文提出“感知即规划”（perception-in-plan）的新范式，将感知集成到规划内部，通过规划先导（如多模式锚定轨迹）引导感知模块聚焦关键区域，实现感知与规划的紧密耦合。该范式有望克服传统顺序范式的局限，推动端到端自动驾驶向更智能、更鲁棒的方向发展。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：设计一个“感知-规划耦合”框架（VeteranAD），以多模式锚定轨迹作为规划先验，指引感知模块沿轨迹采集交通要素（车道、周围智能体等）；然后基于感知结果和规划先验生成规划轨迹。采用自回归策略逐步预测未来轨迹，每一步都结合规划先验进行局部针对性感知，实现感知完全服务于规划。
- **关键技术细节**：
  - **整体框架**：包含图像编码器、规划感知整体感知模块（Planning-Aware Holistic Perception）和局部自回归轨迹规划模块（Localized Autoregressive Trajectory Planning）。
  - **图像编码**：多视图图像经编码器提取图像特征，再通过LSS方法生成BEV特征，并利用Transformer解码出周围智能体特征。
  - **规划感知整体感知模块**：以锚定轨迹上的点为引导，分别对图像特征、BEV特征和智能体特征进行位置引导的交叉注意力。对于智能体，利用相对距离编码增强距离感知。
  - **局部自回归轨迹规划模块**：在每一步自回归地预测轨迹点偏移量（ΔPft）以修正锚定点，从而得到最终规划轨迹。使用运动感知层归一化（Motion-Aware Layer Normalization）来根据上一时刻状态和当前引导点更新轨迹查询。
  - **损失函数**：包含BEV分割损失、智能体边界框损失、规划回归损失（L1）和规划分类损失（Focal损失），均衡因子λ均为10（NAVSIM）或1（Bench2Drive）。
- **算法流程说明**：
  1. 输入多视图图像，经图像编码器得到图像特征、BEV特征、智能体特征。
  2. 从聚类得到的锚定轨迹初始化多模式规划查询Qtraj。
  3. 对每个时间步t，利用锚定点Pt作为引导，让Qtraj分别与图像、BEV、智能体特征进行交叉注意力（位置引导），实现感知。
  4. 通过MLP解码器预测偏移ΔPft，修正锚定点得到Pt^f。
  5. 自回归推进到下一步，直到生成完整轨迹序列。
  6. 最后输出分类分数，并计算总损失进行端到端训练。

## 3. 实验设计：数据集、benchmark及对比方法

- **数据集与benchmark**：
  - **NAVSIM**：大规模真实世界数据集，用于非反应性仿真和基准测试。提供2Hz的传感器数据、HD地图和物体边界框。分为navtrain（1192场景）和navtest（136场景）。评价指标：PDM Score (PDMS)，由No At-Fault Collisions (NC)、Drivable Area Compliance (DAC)、Time-to-Collision (TTC)、Comfort (Comf.)、Ego Progress (EP) 组成。
  - **Bench2Drive**：基于CARLA v2的闭环评估基准，训练集10000个短片段，评估集220条独立短路线。开放循环指标：平均L2误差；闭环指标：Driving Score和Success Rate。
- **对比方法**：
  - NAVSIM：VADv2-V8192、Hydra-MDP-V8192、UniAD、LTF、PARA-Drive、Transfuser、DRAMA、Hydra-MDP++、DiffusionDrive、WoTE等。
  - Bench2Drive：AD-MLP、VAD、Dual-AEB、UniAD-Tiny/Base、DriveTransformer、TCP、ThinkTwice、DriveAdapter等（含专家特征蒸馏方法）。
- **额外实验**：在nuScenes数据集上进行了开放循环规划对比，与VAD比较L2位移误差和碰撞率。

## 4. 资源与算力

- **训练配置**：8块NVIDIA GeForce RTX 3090 GPU，总批大小32，训练16个epoch。
- **时间**：训练约8小时（对比DiffusionDrive约9小时）；推理延迟平均22.3ms（对比DiffusionDrive 18.4ms）。
- 文中未明确给出总训练轮数对应的具体时间，但从效率分析段落可知大致时间。

## 5. 实验数量与充分性

- **实验组数**：主要包括：
  - 主对比实验：NAVSIM（Table 1，10+方法对比）和Bench2Drive（Table 2，12+方法对比）。
  - 消融实验（Table 3-5）：组件消融（整体感知模块和自回归规划模块）、注意力类型消融（图像/BEV/智能体注意力）、自回归vs非自回归解码。
  - 额外数据集实验：nuScenes验证集（Table 6，对比VAD）。
  - 定性结果展示（Figure 3、4）。
- **充分性分析**：实验覆盖两个主流数据集（开放闭环均有），对比方法包括近年SOTA（如DiffusionDrive、WoTE、DriveTransformer等），消融实验设计合理，分别验证了模块、注意力类型和解码方式的作用。结果具有统计显著性，且在不同设置下表现一致。整体上实验充分、客观公平（使用相同 backbone ResNet-34，与其他方法公平比较；Bench2Drive实验中带*的专家蒸馏方法也单独列出）。唯一不足是未在真实闭环仿真器（如nuPlan）上验证，但采用了Bench2Drive的闭环评估，具有代表性。

## 6. 主要结论与发现

- **主要结论**：提出的VeteranAD框架在NAVSIM上取得了PDMS 90.2的SOTA结果，显著优于所有对比方法（包括使用LiDAR的方法）。在Bench2Drive上，开放循环L2误差达到0.60，优于所有基线；闭环Driving Score 64.22、Success Rate 33.85%，与最先进方法（如DriveTransformer、DriveAdapter）相当，证明了方法的有效性和泛化能力。
- **关键发现**：
  - “感知即规划”范式相比传统顺序范式具有显著优势，尤其体现了规划先导对感知的引导作用。
  - 自回归解码优于非自回归解码（Table 5），因为自回归能逐点聚焦感知，更紧密耦合感知与规划。
  - 结合图像、BEV、智能体三种注意力可获得最佳性能，任何单一看法缺失都会导致下降（BEV注意力影响最大）。
  - 锚定轨迹作为规划先导是核心，移除后性能大幅下降（Table 3第一行）。

## 7. 优点

- **方法创新**：提出“感知即规划”新范式，突破了顺序执行的局限，使感知与规划深度融合。设计简单但有效，仅需在现有可微框架中引入锚定轨迹引导的自回归感知。
- **实验充分且公平**：在两大主流数据集上对比了多种SOTA方法，消融实验覆盖了模块、注意力类型和解码方式，结果验证了设计选择的必要性。
- **性能优异**：仅使用摄像头（无LiDAR）即超越使用多模态输入的许多方法，表明框架的高效性。
- **可复现性**：提供开源代码（GitHub），便于研究者复现和改进。
- **效率合理**：在近似计算量下取得了显著更优性能，训练和推理时间与SOTA方法相当（如DiffusionDrive）。

## 8. 不足与局限

- **闭环仿真能力受限**：作者指出，模仿学习类端到端方法的共同局限在于闭环仿真能力不足（如遇到分布外场景容易失败）。当前VeteranAD在Bench2Drive上的闭环表现虽与SOTA持平，但仍有提升空间。
- **依赖锚定轨迹聚类**：锚定轨迹通过K-Means从训练数据中聚类得到，可能对驾驶场景的多样性覆盖有限，极端情况或罕见场景下可能引导不足。
- **未在真正实时硬件平台验证**：所有实验均为离线仿真或非反应性仿真，与实际路测仍有差距。
- **对比方法的选择**：在Bench2Drive上未与最新的扩散模型类方法（如DiffusionDrive）直接对比（后者未提供Bench2Drive结果？），但通过NAVSIM已充分对比。此外，未在nuPlan等大规模闭环基准上测试。
- **泛化性**：目前仅在NAVSIM和Bench2Drive两个数据集上验证，不同数据集（如Waymo）上的表现未知。
- **模型复杂度**：虽推理延迟可接受，但自回归机制增加了顺序处理步数，可能在高实时性要求下产生额外开销。

（完）
