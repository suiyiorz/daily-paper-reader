---
title: "BIP3D: Bridging 2D Images and 3D Perception for Embodied Intelligence"
title_zh: BIP3D：连接2D图像与3D感知的具身智能模型
authors: "Lin, Xuewu, Lin, Tianwei, Huang, Lichao, Xie, Hongyu, Su, Zhizhong"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Lin_BIP3D_Bridging_2D_Images_and_3D_Perception_for_Embodied_Intelligence_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 以图像为中心的具身智能3D感知
tldr: 点云感知受稀疏性和噪声限制。BIP3D提出以图像为中心的3D感知模型，利用预训练2D视觉基础模型增强语义，并设计空间增强模块提升空间理解，通过显式3D位置编码融合2D特征，无需点云即可输出精确3D检测和分割。在多个具身感知基准上超越点云方法。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 858, \"height\": 494, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1760, \"height\": 528, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1783, \"height\": 553, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1793, \"height\": 472, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 868, \"height\": 201, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1818, \"height\": 363, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1783, \"height\": 470, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1755, \"height\": 380, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1739, \"height\": 685, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1650, \"height\": 276, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-lin-bip3d-bridging-2d-images-and-3d-perception-for-embodied-intelligence-cvpr-2025-paper/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1544, \"height\": 233, \"label\": \"Table\"}]"
motivation: 点云感知受限于稀疏、噪声和数据匮乏，且依赖昂贵传感器。
method: 提出BIP3D，利用预训练2D视觉模型和显式3D位置编码，构建图像中心的3D感知模型。
result: 在室内外3D检测和分割任务中，BIP3D性能优于点云方法且鲁棒性更强。
conclusion: 图像为中心的3D感知可绕过点云局限，为具身智能提供高效感知方案。
---

## Abstract
In embodied intelligence systems, a key component is 3D perception algorithm, which enables agents to understand their surrounding environments. Previous algorithms primarily rely on point cloud, which, despite offering precise geometric information, still constrain perception performance due to inherent sparsity, noise, and data scarcity. In this work, we introduce a novel image-centric 3D perception model, BIP3D, which leverages expressive image features with explicit 3D position encoding to overcome the limitations of point-centric methods. Specifically, we leverage pre-trained 2D vision foundation models to enhance semantic understanding, and introduce a spatial enhancer module to improve spatial understanding. Together, these modules enable BIP3D to achieve multi-view, multi-modal feature fusion and end-to-end 3D perception. In our experiments, BIP3D outperforms current state-of-the-art results on the EmbodiedScan benchmark, achieving improvements of 5.69% in the 3D detection task and 15.25% in the 3D visual grounding task. Code has been released at https://github.com/HorizonRobotics/BIP3D.

---

## 论文详细总结（自动生成）

# 论文结构化总结：BIP3D：连接2D图像与3D感知的具身智能模型

## 1. 核心问题与整体含义（研究动机和背景）

- **问题背景**：在具身智能系统中，3D感知（如目标检测、视觉定位）是关键模块。传统方法主要依赖点云（Point Cloud），但点云存在固有缺陷：深度传感器获取高质量点云困难（反射、透明物体、远距离、光照等）；点云稀疏、缺乏纹理、噪声大；点云数据标注成本高、数据稀缺。这些因素限制了点云中心（point-centric）方法的性能上限。
- **动机**：相比之下，2D图像数据丰富，2D视觉基础模型（如CLIP、EVA、DINO、GroundingDINO）具备强大语义理解与泛化能力。因此，作者提出**以图像为中心（image-centric）** 的3D感知模型BIP3D，利用预训练2D模型，显式引入3D位置编码，克服点云方法的局限，实现高效、高精度3D感知。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 基于2D模型GroundingDINO进行扩展，保留其网络架构和初始化权重，将多视角图像和文本作为输入，直接输出3D边界框。核心组件包括：文本/图像/深度编码器、特征增强器、空间增强器、多视角融合解码器。

### 关键技术细节
1. **特征增强器（Feature Enhancer）**：由于多视图输入特征向量数量庞大（EmbodiedScan中N=50，每视图多尺度特征图），仅对最大步长的特征图执行双向交叉注意力（文本-图像），其他尺度通过视图内多步长可变形注意力间接获取文本信息，降低计算和内存消耗。
2. **空间增强器（Spatial Enhancer）**：基于相机模型（内参、外参）显式构造3D位置编码。
   - 在视锥内均匀采样3D点（深度维度K个采样点），通过线性层映射为点位置嵌入（PPE）。
   - 利用图像特征和深度特征预测离散深度分布（DT），加权PPE得到图像位置嵌入（IPE）。
   - 最终将图像特征、深度特征、IPE融合得到增强后的图像特征 I′。
   - 区别于PETR（位置嵌入与图像无关），BIP3D的IPE依赖于图像预测的深度分布，更灵活。
3. **多视角融合解码器（Decoder with Multi-view Fusion）**：
   - 将GroundingDINO的2D可变形注意力替换为3D可变形聚合（借鉴Sparse4D）。
   - 对每个查询维护一个3D边界框（9自由度：x,y,z,l,w,h,roll,pitch,yaw），采样M个3D关键点（可学习偏移+固定先验点，如立体中心、六面中心）。
   - 利用相机模型将3D点投影到多视图2D特征图，进行双线性采样，再结合查询、3D框、相机参数预测权重系数，加权融合更新查询。
   - 显式过滤无效采样点（在视锥外）并置零权重，应对具身场景中视图数量和相机外参不固定的挑战。
4. **相机内参标准化（Camera Intrinsic Standardization）**：
   - 为解决图像中心模型对相机内参泛化性差的问题，将图像通过虚拟相机坐标系变换（逆投影）进行内参归一化（使用训练集内参均值作为标准内参），使输入图像具有统一内参。
5. **损失函数**：
   - 采用一对一匹配损失，包含分类对比损失（Focal Loss）、中心点回归损失（L2 Loss）、边界框回归损失（使用Wasserstein距离，避免方向歧义，比L1、角点倒角距离、排列角距离更优）。
6. **训练策略**：
   - 3D检测采用类别接地（category grounding）形式：将类别名称拼接作为文本输入。
   - 3D视觉定位：先加载检测模型权重作为预训练，再训练定位模型；训练时随机采样1~10个描述（而非固定数量）以缩小训练-测试域差距。

## 3. 实验设计

- **数据集与Benchmark**：使用**EmbodiedScan**基准，包含ScanNet、3RScan、Matterport3D三个子集，共4633个扫描（训练3113、验证817、测试703）。该benchmark包含RGB-D图像、多样相机类型，适合评估泛化性能。
- **对比方法**：
  - 3D检测：VoteNet（点）、ImVoxelNet（RGB-only）、FCAF3D（点-稀疏体素）、EmbodiedScan-D（多模态融合）。
  - 3D视觉定位：EmbodiedScan、SAG3D（CVPR 2024 Challenge）、DenseG（1st place）。
- **评估指标**：
  - 3D检测：AP 3D@0.25（IoU阈值0.25），并按类别（Head/Common/Tail）、物体体积（Small/Medium/Large）、子数据集（ScanNet/3RScan/MP3D）细分。
  - 3D视觉定位：Overall AP，并按难度（Easy/Hard）和视图依赖性（View-dep/View-indep）细分。

## 4. 资源与算力

- 文中明确说明：所有模型使用 **8块 NVIDIA 4090 GPU（24GB显存）** 训练，优化器为AdamW。但**未明确给出训练时长**（如epoch数或小时数）。附录可能包含更多参数，但正文未提及具体训练步数。

## 5. 实验数量与充分性

- **实验数量**：论文包含多组实验：
  - 3D检测主结果（表2）：与4种基线对比，含多个子指标。
  - 3D视觉定位主结果（表3）：验证集、测试集对比，含消融模型BIP3D-RGB。
  - 参数对比（表4）：简单展示2D/3D编码器参数量。
  - 预训练权重消融（表5）：对比ImageNet初始化和GroundingDINO初始化对EmbodiedScan和BIP3D的影响。
  - 相机内参标准化消融（表6）：多组输入（RGB/RGB-D）和CIS开关，涵盖训练集内/外泛化。
  - 边界框回归损失消融（表7）：对比CCD、L1、PCD、WD四种损失。
  - 训练描述数量消融（表8）：对比固定1/10个描述与随机1~10个。
- **充分性评估**：实验设计较充分，涵盖了核心模块（预训练、位置编码、损失、训练策略）的有效性验证，并在大规模benchmark上与多个SOTA对比，消融实验控制变量清晰。但仍缺少对更深层超参数（如采样点数量K、注意力层数）的探讨，以及跨数据集泛化（如直接迁移至其他无深度场景）的测试。整体公平客观。

## 6. 主要结论与发现

- 在EmbodiedScan上，BIP3D在3D检测任务中AP 3D@0.25达到**20.91%**，比EmbodiedScan基线（15.22%）提升**5.69%**；在尾部类别（Tail）和小物体上优势尤其显著（Tail: 16.03% vs 9.48%; Small: 5.72% vs 3.28%）。
- 在3D视觉定位任务上，验证集AP达**54.66%**（提升15.25%），测试集单模型57.05%，集成后**62.08%**，超越CVPR Challenge冠军DenseG 2.49%。
- 2D预训练（GroundingDINO）对图像中心模型至关重要（RGB-D提升5.99%），而对点中心模型效果甚微（仅1.11%）。
- 相机内参标准化可提升0.7%~1.3%性能，尤其对训练集未覆盖的相机泛化有帮助。
- Wasserstein距离作为边界框回归损失优于L1、角点倒角距离和排列角距离。
- 随机采样1~10个文本描述进行训练可缓解域差距，比固定数量描述提升**5.61%**。

## 7. 优点

- **创新性**：提出图像中心范式，绕过点云固有缺陷，继承2D基础模型强大语义，显式3D位置编码增强空间理解。
- **全面性**：模型同时支持3D检测和3D视觉定位，支持多视图、RGB-only或RGB-D输入，具备开放式检测潜力（类别接地）。
- **有效性**：消融实验清晰，验证了预训练、位置编码、损失函数、训练策略等的贡献；实验结果远超SOTA。
- **实践友好**：4.3节提到参数量对比：BIP3D的3D编码器参数仅0.09MB，远低于点中心模型的87.31MB；支持RGB-only输入有助于低成本大规模数据采集（众包）。
- **可复现性**：代码已开源。

## 8. 不足与局限

- **场景限制**：实验仅在EmbodiedScan（室内）上进行，未在室外（如KITTI、nuScenes）或多传感器融合场景验证泛化性。
- **依赖2D基础模型**：性能高度依赖GroundingDINO的初始化；若未来有更强2D模型，可能需重新适配。
- **计算开销**：虽然3D部分参数少，但2D编码器（Swin-T, BERT-Base）仍较大，且多视图输入（50帧）导致图像特征处理成本高。
- **未处理动态场景**：目前仅适用于静态场景（单帧关键帧），未来需扩展至联合检测跟踪。
- **深度信息利用**：深度输入主要用于提升定位精度，但对深度传感器仍有依赖；无深度时性能下降（RGB-only vs RGB-D: 17.40% vs 20.91%）。
- **训练/测试不一致**：训练时随机采样18张图像，测试时固定50张，可能存在域差异；文中未讨论这一差距。
- **缺少严格数学证明**：方法论部分详实但缺乏对收敛性、泛化界的理论分析。
- **仅一个benchmark**：未在ScanNet、ScanRefer等独立数据集上额外验证，以展示跨场景泛化。

（完）
