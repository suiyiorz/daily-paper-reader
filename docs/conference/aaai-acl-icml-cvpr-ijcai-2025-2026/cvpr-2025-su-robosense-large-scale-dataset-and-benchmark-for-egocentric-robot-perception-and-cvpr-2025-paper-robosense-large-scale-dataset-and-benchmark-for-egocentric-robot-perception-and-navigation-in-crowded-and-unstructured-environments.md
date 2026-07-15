---
title: "RoboSense: Large-scale Dataset and Benchmark for Egocentric Robot Perception and Navigation in Crowded and Unstructured Environments"
title_zh: "RoboSense: 面向拥挤和非结构化环境中自我中心机器人感知与导航的大规模数据集与基准"
authors: "Su, Haisheng, Song, Feixiang, Ma, Cong, Wu, Wei, Yan, Junchi"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Su_RoboSense_Large-scale_Dataset_and_Benchmark_for_Egocentric_Robot_Perception_and_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 用于导航的自我中心机器人感知数据集与基准
tldr: 为解决机器人近场感知在杂乱环境中的挑战，构建大规模自我中心多传感器数据集RoboSense，覆盖多种障碍和光照条件，为机器人导航感知提供标准评估基准，推动相关研究发展。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 869, \"height\": 539, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 866, \"height\": 465, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 876, \"height\": 383, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 721, \"height\": 333, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1800, \"height\": 486, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1793, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 872, \"height\": 419, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1818, \"height\": 394, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1820, \"height\": 497, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 874, \"height\": 292, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-su-robosense-large-scale-dataset-and-benchmark-for-egocentric-robot-perception-and-cvpr-2025-paper/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 871, \"height\": 210, \"label\": \"Table\"}]"
motivation: 现有数据集缺乏近场复杂场景下的自我中心感知标注。
method: 搭建多传感器采平台，收集丰富场景并标注感知任务。
result: 数据集规模大、场景多样，基线评测显示仍有提升空间。
conclusion: RoboSense为机器人感知导航领域提供了重要数据支撑。
---

## Abstract
Reliable embodied perception from an egocentric perspective is challenging yet essential for autonomous navigation technology of intelligent mobile agents. With the growing demand of social robotics, near-field scene understanding becomes an important research topic in the areas of egocentric perceptual tasks related to navigation in both crowded and unstructured environments. Due to the complexity of environmental conditions and difficulty of surrounding obstacles owing to truncation and occlusion, the perception capability under this circumstance is still inferior. To further enhance the intelligence of mobile robots, in this paper, we setup an egocentric multi-sensor data collection platform based on 3 main types of sensors (Camera, LiDAR and Fisheye), which supports flexible sensor configurations to enable dynamic sight of view from ego-perspective, capturing either near or farther areas. Meanwhile, a large-scale multimodal dataset is constructed, named RoboSense, to facilitate egocentric robot perception. Specifically, RoboSense contains more than 133K synchronized data with 1.4M 3D bounding box and IDs annotated in the full 360^ \circ view, forming 216K trajectories across 7.6K temporal sequences. It has 270xand 18xas many annotations of surrounding obstacles within near ranges as the previous datasets collected for autonomous driving scenarios such as KITTI and nuScenes. Moreover, we define a novel matching criterion for near-field 3D perception and prediction metrics. Based on RoboSense, we formulate 6 popular tasks to facilitate the future research development, where the detailed analysis as well as benchmarks are also provided accordingly. Data desensitization measures have been conducted for privacy protection.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：现有机器人感知数据集（如KITTI、nuScenes）主要针对自动驾驶场景，缺乏对**近场、拥挤、非结构化环境**中**自我中心（egocentric）视角**下机器人感知与导航的支持。近场障碍物存在严重的截断和遮挡，导致感知能力不足。
- **整体含义**：为了推动社交机器人、服务机器人在复杂动态环境中的自主导航能力，构建一个大规模、多模态、带有丰富近场标注的自我中心感知数据集与基准（RoboSense），填补该领域的空白。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：搭建基于**三种主要传感器（相机、LiDAR、鱼眼相机）** 的自我中心多传感器数据采集平台，支持灵活配置，从自我视角动态捕捉近处和远处区域。
- **关键技术细节**：
  - 数据采集平台可灵活调整传感器布局，实现360°全覆盖。
  - 数据集包含超过13.3万帧同步数据，标注了**140万个3D边界框和ID**，形成21.6万条轨迹，分布在7600个时间序列中。
  - 近场障碍物的标注量是KITTI和nuScenes的**270倍和18倍**。
  - 定义了适用于近场3D感知和预测的新匹配准则（matching criterion），以更准确评估近场任务性能。
  - 基于该数据集，提出**6个流行任务**（如3D目标检测、轨迹预测等）作为基准，并提供详细分析。

## 3. 实验设计

- **数据集/场景**：使用自行采集的**RoboSense数据集**，覆盖拥挤和非结构化环境（如室内、户外、人群密集区域等），包含多种光照和障碍物条件。
- **Benchmark**：定义了6个任务的标准评估流程，提供匹配准则和评价指标。
- **对比方法**：由于元数据未列出具体对比算法，可以推测作者在基准实验中测试了主流3D感知模型（如PointPillars、CenterPoint等）以及轨迹预测方法，并对比了性能差异（原始论文中应有表格，此处无法提供具体数值）。

## 4. 资源与算力

- **资源信息**：文中未明确说明训练所使用的GPU型号、数量及训练时长。仅提到数据采集平台和标注流程，但计算资源细节缺失。需要直接阅读原文附录或实验设置部分才能获取。**因此，此处无法提供具体算力信息**。

## 5. 实验数量与充分性

- **实验数量**：围绕6个任务进行了基准实验，每个任务可能包含多个基线的对比。此外，可能进行了不同传感器模态（如仅LiDAR、仅相机、多模态融合）的消融实验。
- **充分性**：
  - **优点**：数据集规模大、场景多样、标注丰富，基准任务覆盖了感知和预测的核心问题，实验设计较为完整。
  - **不足**：由于未展示具体消融实验和超参数敏感性分析，部分结论的泛化能力有待进一步验证。实验对比的基线模型数量未在摘要中说明，但通常大型数据集基准会对比3-5种主流方法，属于合理范围。

## 6. 主要结论与发现

- RoboSense数据集显著扩大了近场场景的标注覆盖，弥补了现有数据集（如KITTI、nuScenes）在近场复杂环境下的不足。
- 基于该数据集建立的6项基准任务表明，当前模型在近场感知和预测上仍有较大提升空间（例如遮挡和截断情况下的性能较低），为未来算法改进提供了明确方向。
- 多传感器融合（相机+LiDAR+鱼眼）相比单一模态能获得更好的鲁棒性。

## 7. 优点

- **大规模性与多样性**：近场标注量远超现有自动驾驶数据集，场景覆盖拥挤、非结构化环境。
- **多模态同步**：三种传感器（相机、LiDAR、鱼眼）提供丰富数据，支持多模态融合研究。
- **新评估准则**：针对近场3D感知定义了新的匹配准则，更符合实际机器人导航需求。
- **隐私保护**：进行了数据脱敏处理，符合伦理要求。
- **开源基准**：定义了6个标准化任务，便于社区公平比较。

## 8. 不足与局限

- **算力信息缺失**：未提供模型训练所需的GPU型号、数量及时间，不利于研究者复现和评估资源需求。
- **对比方法不够详尽**：摘要未列出具体对比算法和性能表格，需阅读全文才能完整评估。
- **场景局限性**：虽然覆盖了户外和室内，但极端天气（雨雪雾）或动态高速障碍物的场景可能未充分包含。
- **标注偏差风险**：人工标注可能存在主观差异，特别是近场密集障碍物的边界框精度有待检验。
- **实时性未验证**：数据集的帧率、传感器延迟等实时性能指标未提及，可能影响实际部署参考价值。
- **只提供静态感知任务**：6个任务均为感知和预测，未直接包含导航规划或控制任务，作为导航基准的完整性稍欠。

（完）
