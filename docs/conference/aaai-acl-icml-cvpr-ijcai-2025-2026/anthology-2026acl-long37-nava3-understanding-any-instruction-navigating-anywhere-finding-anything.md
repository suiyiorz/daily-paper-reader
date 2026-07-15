---
title: "NavA3: Understanding Any Instruction, Navigating Anywhere, Finding Anything"
title_zh: NavA3：理解任意指令、导航任意位置、找到任意物体
authors: "Lingfeng Zhang, Xiaoshuai Hao, Yingbo Tang, Haoxiang Fu, Xinyu Zheng, Pengwei Wang, Zhongyuan Wang, Wenbo Ding, Shanghang Zhang"
date: 2026-07-01
pdf: "https://aclanthology.org/2026.acl-long.37.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 具身导航，在真实开放场景中理解高级指令
tldr: 现有具身导航任务局限于预定义目标和简单指令，无法满足真实场景中复杂开放世界需求。本文提出NavA3，一个长时程具身导航任务，要求理解高级人类指令并在真实环境中进行开放词汇空间感知目标导航。该方法挑战了现有导航范式，推动了具身智能向实际应用落地。
source: ACL-2026-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.37/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1553, \"height\": 783, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.37/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1532, \"height\": 694, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.37/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1525, \"height\": 394, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.37/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1505, \"height\": 541, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2026-long/anthology-2026.acl-long.37/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1562, \"height\": 652, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.37/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1498, \"height\": 538, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.37/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 793, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.37/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 785, \"height\": 373, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2026-long/anthology-2026.acl-long.37/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 810, \"height\": 387, \"label\": \"Table\"}]"
motivation: 现有导航任务与人类真实需求差距大，缺乏对高级指令的理解和开放词汇目标定位能力。
method: 提出了一个长时程导航任务和相应方法，结合高级指令理解与开放词汇空间感知定位。
result: 在真实世界场景中验证了任务挑战性，并展示了现有方法的局限性。
conclusion: NavA3促使具身导航研究更贴近真实需求，推动开放世界中的智能导航发展。
---

## Abstract
Embodied navigation is a fundamental capability of embodied intelligence, enabling robots to move and interact within physical environments. However, existing navigation tasks primarily focus on predefined object navigation or instruction following, which significantly differs from human needs in real-world scenarios involving complex, open-ended scenes. To bridge this gap, we introduce a challenging long-horizon navigation task that requires understanding high-level human instructions and performing spatial-aware object navigation in real-world environments. Existing embodied navigation methods struggle with such tasks due to their limitations in comprehending high-level human instructions and localizing objects with an open vocabulary. In this paper, we propose NavA 3 , a hierarchical framework divided into two stages: global and local policies. In the global policy, we leverage the reasoning capabilities of Reasoning-VLM to parse high-level human instructions and integrate them with global 3D scene views. This allows us to reason and navigate to regions most likely to contain the goal object. In the local policy, we have collected a dataset of 1.0 million samples of spatial-aware object affordances to train the NaviAfford model (PointingVLM), which provides robust open-vocabulary object localization and spatial awareness for precise goal identification and navigation in complex environments. Extensive experiments demonstrate that NavA 3 achieves SOTA results in navigation performance and can successfully complete long-horizon navigation tasks across different robot embodiments in real-world settings, paving the way for universal embodied navigation. The dataset and code will be made available.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：现有具身导航任务（如VLN和ObjectNav）主要聚焦于预定义目标或详细步骤指令，与人类在真实世界中提出的高级、开放式指令（如“我想喝咖啡”）存在巨大差距。这类指令需要复杂的语义推理和空间感知，而现有方法难以应对。
- **核心问题**：如何让机器人在真实复杂环境中理解高级人类指令，并完成开放词汇、空间感知的长时程目标导航。
- **整体含义**：本文提出NavA3框架，填补了从简单导航任务到真实人机交互需求的空白，推动具身智能向实用化发展。

## 2. 方法论：核心思想与关键技术细节
- **核心思想**：采用层次化全局-局部策略，将长时程导航分解为两个阶段：
  - **全局策略（Global Policy）**：利用Reasoning-VLM（基于GPT-4o）解析高级指令，推断目标对象和可能所在区域（如“咖啡机可能在茶室”），并引导机器人前往该区域。使用标注的全局3D场景（包括房间级语义标注）辅助推理。
  - **局部策略（Local Policy）**：到达目标区域后，在每个路点用Pointing-VLM（即NaviAfford模型）进行精确目标定位。通过全景RGB扫描，结合深度图，将检测到的目标点坐标（通过相机内参和机器人位姿变换）转换为机器人坐标系，实现精确导航。若未找到目标，则利用Reasoning-VLM决定继续探索或切换区域。
- **关键技术细节**：
  - **3D场景构建**：通过LiDAR扫描生成点云，重建为3D场景，并转换为俯视图用于全局和局部策略。
  - **NaviAfford模型**：收集约50K图像和100万QA对（来自LVIS和Where2Place数据集），包含物体功能（object affordance）和空间功能（spatial affordance）两种标注，训练Qwen2.5-VL-7B模型以输出点坐标，实现开放词汇的空间感知定位。
  - **损失函数**：使用监督微调（SFT），损失为交叉熵：$L = - \sum_{i=1}^{N} \log P(t_i | t_{<i}, Q, V)$。
  - **坐标变换**：从像素坐标到机器人世界坐标，利用相机内参和机器人位姿进行转换（公式(5)(6)）。

## 3. 实验设计
- **数据集/场景**：建立包含5个真实场景的基准（Meeting Room A, Meeting Room B, Tea Room, Workstation, Balcony），共50个任务（每场景10个），每个任务做10次rollout以减少随机性。评估Pointing-VLM时使用1000张训练集外图像。
- **Benchmark**：采用导航误差（NE）和成功率（SR，目标1米内视为成功）。
- **对比方法**：
  - 闭源通用VLM：GPT-4o, Claude-3.5-Sonnet, Qwen-VL-Max。
  - 开源通用VLM：Janus-Pro-7B, Qwen2.5-VL-7B, LLaVA-Next-7B。
  - 导航专用方法：NaVid, NaVILA, MapNav（均经修改以适应本任务）。
- **消融实验**：
  - 全局策略中不同标注组件（有/无地图、无标注、无房间级标注）。
  - 不同Reasoning-VLM（GPT-4o, Claude, Qwen-VL-Max等，包括不同参数规模）。
  - 不同Pointing-VLM（GPT-4o, Claude, Qwen2.5-VL, RoboPoint等，对比NaviAfford）。

## 4. 资源与算力
- **训练资源**：4块H100 GPU，优化器AdamW，学习率1e-5，训练1个epoch，batch size每GPU 4，梯度累积2步，有效batch size 32。论文未明确提及训练总时长。
- **部署平台**：RealMan轮式机器人和Unitree Go2四足机器人，均搭载Intel RealSense D435i RGB-D相机。

## 5. 实验数量与充分性
- **实验数量**：总共在5个场景的50个任务上进行了导航性能对比，每个任务10次rollout（总约500次）。消融实验覆盖了3个方面（标注、Reasoning-VLM、Pointing-VLM），每个方面在2个场景（茶室和工作站）上进行。Pointing-VLM评估使用1000张图像。
- **充分性与客观性**：
  - 对比方法覆盖了闭源/开源通用VLM和导航专用方法，较为全面。
  - 消融实验设计合理，能验证各个模块（标注、不同VLM、定位模型）的贡献。
  - 但由于仅使用5个室内场景，可能未涵盖更多样的环境（如室外、动态场景）。另外，所有任务均由人类专家定义指令和目标，可能存在一定主观性。总体而言，实验在可控条件下较充分，但泛化性需进一步验证。

## 6. 主要结论与发现
- NavA3在所有场景上显著优于现有SOTA方法：平均SR达66.4%，而最好基线MapNav仅25.2%，提升41.2个百分点；NE也大幅降低（例如茶室：1.89m vs 9.12m）。
- 通用VLM（闭源/开源）在本长时程导航任务中几乎失效（SR接近0%），表明需要专门设计层次化推理和空间定位模块。
- 消融实验表明：
  - 详细语义标注对Reasoning-VLM的空间推理至关重要。
  - 更强的Reasoning-VLM（如GPT-4o）带来更高成功率。
  - 专门训练的NaviAfford模型在对象功能定位和导航成功率上均优于通用VLM和之前最好的RoboPoint。

## 7. 优点
- **问题定义新颖**：首次提出结合高级指令理解和开放词汇空间感知的长时程导航任务，更贴近真实需求。
- **层次化框架设计**：全局-局部策略有效分解复杂任务，兼具可解释性和模块化优势。
- **数据贡献**：收集100万空间感知物体功能数据集，训练NaviAfford模型，该模型在开放词汇定位上表现出色。
- **跨实体验证**：在轮式和四足机器人上均成功部署，证明框架的通用性。
- **实验充分**：对比多种基线并做多组消融，验证了各组件有效性。

## 8. 不足与局限
- **感知依赖**：系统依赖精确深度信息（RGB-D），在反射面、透明物体或弱光环境下深度估计可能不准确，影响导航精度。
- **模块化延迟**：全局和局部策略独立运行，非端到端，可能导致高层推理与低层控制之间的延迟，未来可探索统一动作生成。
- **场景局限性**：实验仅在5个室内场景进行，未评估室外或动态环境（如人、移动障碍物），泛化性有待进一步验证。
- **动态适应性不足**：当前框架未处理环境中物体移动或临时变化，未来需引入自适应机制。
- **依赖性**：全局策略依赖GPT-4o等商业模型，可能受API成本、可用性和隐私限制。

（完）
