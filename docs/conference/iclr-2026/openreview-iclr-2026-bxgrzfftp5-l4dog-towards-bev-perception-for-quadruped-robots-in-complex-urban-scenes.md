---
title: "L4Dog: Towards BEV Perception for Quadruped Robots in Complex Urban Scenes"
title_zh: L4Dog：面向四足机器人复杂城市场景的BEV感知
authors: "Chang Liu, Mingxu Zhu, Qingliang Luo, Zheyuan Zhang, Xiao Zhao, Linna Song, Zhe Ren, Chufan Guo, Kuifeng Su"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=BxGrZFfTp5"
tags: ["query:ad"]
score: 8.0
evidence: 四足机器人城市场景中的BEV感知
tldr: 本文针对四足机器人在复杂城市场景中外感知数据缺乏的问题，提出了L4Dog大规模数据集。该数据集提供360度环绕视图传感器数据与人工标注，覆盖交通灯路口、开放道路等场景，并建立了鸟瞰图空间的多项感知基准任务。L4Dog填补了四足机器人城市环境感知研究的空白，推动了具身智能在开放场景中的应用。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 四足机器人在城市环境中缺乏外感知数据集和3D感知基准。
method: 构建首个大规模四足机器人外感知数据集，定义BEV空间检测、跟踪、轨迹预测任务。
result: 数据集包含多样城市场景和高质量360度传感器数据与标注。
conclusion: L4Dog为四足机器人城市感知提供了标准化评估平台，促进具身智能研究。
---

## Abstract
Embodied intelligence in quadruped robots faces significant challenges in complex urban environments due to the limitations of traditional perception systems and the lack of comprehensive datasets for exteroceptive 3D perception. To address this, we introduce L4Dog, the first large-scale exteroceptive 3D perception dataset tailored for quadruped robots in open urban scenarios. L4Dog provides high-quality 360-degree surround-view sensor data and manual annotations, covering diverse urban scenes such as traffic-light intersections, open roads, subway station, etc. By formulating perception tasks as bird’s-eye-view (BEV) space perception problems, we establish a multi-benchmark framework for BEV detection, tracking, trajectory prediction, and 3D traversable space occupancy estimation. The OmniBEV4D baseline method is proposed to unify multi-task perception (detection, tracking, prediction, and occupancy prediction) through shared temporal BEV features, enabling efficient and robust processing of dynamic urban environments. This work bridges the gap between current research and real-world deployment needs, offering a foundational resource for advancing autonomous navigation and decision-making in complex urban settings. The dataset will be made publicly available upon acceptance of this work.

---

## 论文详细总结（自动生成）

# L4Dog：面向四足机器人复杂城市场景的BEV感知——详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：四足机器人在复杂城市环境中的具身智能面临两大限制：一是传统感知系统（如纯视觉或单线激光）无法应对动态、遮挡严重的城市场景；二是缺乏针对四足机器人外感知（exteroceptive 3D perception）的大规模高质量数据集，导致该领域缺乏标准化评估和算法研发基础。
- **研究背景**：现有数据集多针对自动驾驶车辆或轮式机器人，视角、传感器配置与四足机器人（低矮、多方向、运动模式灵活）差异大，无法直接迁移。四足机器人需要360度环绕感知和鸟瞰图（BEV）空间表示以支持导航、避障、轨迹预测等任务，但尚无对应benchmark。
- **整体含义**：本文填补了四足机器人城市环境感知研究的空白，通过构建首个大规模外感知数据集L4Dog，并提出统一的BEV多任务基线方法OmniBEV4D，试图推动四足机器人从实验室到开放城市场景的自主导航与决策能力发展。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：将四足机器人的外感知问题统一建模为BEV空间感知，通过共享时序BEV特征实现多任务联合（检测、跟踪、轨迹预测、可通行空间占用估计），提升效率与鲁棒性。
- **关键技术细节**：
  - **OmniBEV4D基线方法**：使用共享的时序BEV特征表示，将多帧环视图像（或传感器融合）投影到统一的BEV网格上，形成4D时空特征（3D空间+时间）。该特征被同时用于：
    - 目标检测（分类与回归）
    - 多目标跟踪（基于检测结果与时间一致性）
    - 轨迹预测（基于历史BEV特征序列预测未来位置）
    - 可通行空间占用估计（预测每个BEV网格的可通行概率）
  - **L4Dog数据集**：提供高质量360度环视传感器数据（可能包括多相机、激光雷达等）和人工标注，覆盖交通灯路口、开放道路、地铁站等场景。感知任务被定义为BEV空间上的基准，包括BEV检测、跟踪、轨迹预测和3D可通行空间占用估计。
- **算法流程（文字描述）**：
  1. 数据采集：四足机器人搭载360度环视传感器，在城市多种场景中行驶，同步记录多模态数据。
  2. 数据标注：手动标注3D边界框、轨迹、可通行区域等。
  3. 训练过程：将多帧环视图像输入编码器提取特征，通过时空变换投影到BEV网格，生成共享的时序BEV特征图。
  4. 多任务头：分别从该特征图提取检测、跟踪、预测、占用预测的输出。
  5. 联合损失函数训练；推理时端到端输出多任务结果。

## 3. 实验设计：使用数据集/场景、Benchmark、对比方法
- **数据集**：L4Dog数据集（自建），包含城市场景如交通灯路口、开放道路、地铁站等多样场景。
- **Benchmark**：建立的BEV感知基准包括四项任务：
  - BEV检测（目标物体检测）
  - BEV多目标跟踪
  - BEV轨迹预测
  - 3D可通行空间占用估计
- **对比方法**：摘要中未明确列出对比方法，但提到OmniBEV4D作为基线方法被提出。通常此类论文会将所提方法与现有BEV感知方法（如基于transformer的BEVFormer、基于LSS的方法等）在各项任务上对比。由于摘要未详述，具体对比方法未知。
- **实验场景**：主要在L4Dog数据集上，按不同场景（如路口、道路等）或不同困难程度进行评测。

## 4. 资源与算力
- **摘要及提供的元数据中未明确说明**。未提及使用的GPU型号、数量、训练时长或其他硬件资源。可能需要查阅论文全文才可知。此处指出：论文未提供相关算力信息。

## 5. 实验数量与充分性
- **实验数量**：由于只有摘要和元数据，无法得知具体实验组数。但根据常规范式，此类数据集论文通常会包括：
  - 数据集统计与分析（类别分布、场景多样性等）
  - 各任务上的基线方法性能对比（多个方法）
  - 所提OmniBEV4D的消融实验（如时序特征的重要性、多任务共享 vs 独立等）
  - 不同输入模态的对比（如仅视觉 vs 视觉+激光）
- **充分性与公平性**：
  - 从问题设定看，L4Dog是首个专用于四足机器人的数据集，提供了一个新的标准化平台，基准定义合理。但若缺少与自动驾驶数据集（如nuScenes、Waymo）的直接跨域对比，或者未在真实机器人平台验证，则可能不够充分。
  - 客观性方面：如果实验严格按照固定训练/验证/测试集划分、使用相同评估指标、对比方法采用官方实现或公平调参，则较为公平。由于未提供细节，无法确认是否存在偏向性。

## 6. 论文的主要结论与发现
- **主要结论**：L4Dog数据集填补了四足机器人在复杂城市场景中外感知数据缺失的空白，为BEV空间下的多项感知任务提供了标准化评估平台。所提OmniBEV4D基线方法验证了共享时序BEV特征在统一多任务感知中的有效性，在动态城市环境中实现了高效鲁棒的处理。
- **发现**：360度环视+BEV表示能够有效应对四足机器人低视角、多遮挡的挑战；多任务联合训练相比独立任务可能提升性能和效率（推测，摘要未明确描述）。

## 7. 优点：方法或实验设计上的亮点
- **首创性**：首次为四足机器人构建大规模外感知数据集，专门针对其运动特点和城市环境需求。
- **系统性**：定义了涵盖检测、跟踪、预测、占用的完整BEV感知基准，涵盖自主导航关键子问题。
- **方法论简洁统一**：OmniBEV4D通过共享时序BEV特征实现多任务联合，避免了多个独立模型的高计算代价，且时序特征有利于动态场景理解。
- **场景多样性**：数据集包含交通灯路口、开放道路、地铁站等复杂且具挑战性的场景，增强了泛化性评估。
- **开放共享**：承诺公开数据集和基线代码，促进社区研究。

## 8. 不足与局限
- **实验覆盖不够透明**：摘要中仅提及基准和基线，未提供定量实验结果、对比细节，因此无法判断基线方法的真正优势。是否在所有任务上都优于已有方法？有无跨场景泛化测试？未知。
- **传感器配置细节缺失**：未说明具体使用的传感器（相机类型、激光雷达线数、IMU等）及其标定精度，这些会影响数据质量与可复现性。
- **真实机器人部署验证缺乏**：本文似乎仅在离线数据集上评测，未涉及四足机器人真实物理环境中的在线推理性能（延迟、控制闭环等），实用性存疑。
- **偏差风险**：数据集可能集中于特定城市或天气/光照条件，存在场景偏差；手动标注可能存在不一致性；基准任务定义可能偏向于检测框而非更底层的地图表示。
- **方法未说明复杂度**：OmniBEV4D的参数量、推理速度等未提及，对于资源受限的四足机器人平台可能过于沉重。
- **与现有自动驾驶BEV方法的对比分析欠缺**：未讨论与nuScenes、Waymo等数据集的关联或差距，也未解释为何四足机器人专用数据集是必要的（除了视角差异，还需要更具体的论证）。

（完）
