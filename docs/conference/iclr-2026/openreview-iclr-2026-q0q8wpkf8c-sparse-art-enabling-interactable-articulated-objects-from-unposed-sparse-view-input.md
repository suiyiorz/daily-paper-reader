---
title: "Sparse-Art: Enabling Interactable Articulated Objects from Unposed Sparse-View Input"
title_zh: Sparse-Art：从无位姿稀疏视图实现可交互铰接物体
authors: "Tianru Dai, Jixuan Fan, Shengxian Wu, Wanhua Li, Chubin Zhang, Yansong Tang"
date: 2025-09-14
pdf: "https://openreview.net/pdf?id=Q0Q8WPKF8C"
tags: ["query:ad"]
score: 8.0
evidence: 从稀疏RGB图像中感知铰接物体
tldr: 从稀疏RGB图像中重建铰接物体的几何与运动学对于机器人感知至关重要。Sparse-Art提出了一种无训练的前馈框架，仅需每状态1-4张无位姿稀疏RGB图像即可重建和分析铰接物体，避免了耗时的每物体优化。该方法利用预训练模型，实现了对真实场景的泛化。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有方法重建铰接物体需要密集视图或个性化的每物体优化，难以用于实际机器人感知。
method: Sparse-Art利用预训练模型，从每状态1-4张无位姿RGB图像通过前馈方式重建几何与运动学。
result: 在多个数据集上，Sparse-Art实现了高质量重建和运动学分析，无需训练且泛化能力强。
conclusion: Sparse-Art为机器人铰接物体感知提供了一种高效、可泛化的解决方案。
---

## Abstract
Articulated object perception is essential for intelligent agents in robotics, embodied AI, and augmented reality, yet reconstructing their geometry and kinematics from sparse RGB images remains a significant challenge. Traditional optimization-based methods, such as those using NeRFs or 3DGS, deliver high fidelity but demand time-intensive per-object optimization, while data-driven approaches suffer from limited 3D datasets, restricting generalization to real-world scenarios.
To address these limitations, we introduce a novel, fully training-free and feed-forward framework that reconstructs and analyzes articulated objects from 1-4 sparse, unposed RGB images per state, captured in two states of the object. Our approach leverages pre-trained models for unified geometric-semantic processing without any fine-tuning, enabling efficient inference for part correspondences and joint classification, followed by lightweight optimization for parameter estimation.
Dataset-independent with a fully training-free and feed-forward design that eliminates the need for per-object training or extensive iterations, our method effectively bridges synthetic-to-real gaps, achieving superior performance on real-world objects. By integrating end-to-end zero-shot reconstruction with advanced inference and optimization, it provides an efficient, robust solution for articulation modeling, advancing scalable applications in robotics.

---

## 论文详细总结（自动生成）

### 论文中文总结：Sparse-Art：从无位姿稀疏视图实现可交互铰接物体

#### 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：如何从极少量（每状态1-4张）无相机位姿的稀疏RGB图像中，高效重建铰接物体的几何形状与运动学参数（如部件分割、关节类型与轴参数），且无需针对每个物体进行繁琐的训练或优化。
- **背景与动机**：铰接物体感知是机器人、具身智能和增强现实的关键能力。现有方法存在两大瓶颈：
  - 基于优化（NeRF、3DGS）的方法精度高，但需要密集视图和每物体耗时优化，难以实时或在线应用。
  - 数据驱动方法受限于铰接物体3D数据集稀少，泛化到真实场景差。
- **本文目标**：提出一种**完全免训练、前馈式**框架，仅利用预训练模型，从每状态1-4张无位姿稀疏RGB图像（两个状态）直接重建并分析铰接物体，弥补合成到真实的鸿沟，实现零样本泛化。

#### 2. 方法论：核心思想、关键技术与流程（文字说明）
- **核心思想**：利用预训练的基础模型（如视觉语言模型、深度预测模型等）作为即插即用模块，无需微调或每物体优化，通过前馈推理完成部件对应、关节分类，再结合轻量级优化进行参数估计。
- **关键技术细节**：
  - **两状态输入**：物体处于两个不同关节状态（如打开/关闭），每状态提供1-4张无位姿稀疏RGB图像。
  - **几何-语义统一处理**：预训练模型用于提取多视图一致的几何特征和语义特征，自动获得部件对应关系。
  - **关节分类与参数估计**：基于部件对应关系，通过轻量级优化（如最小二乘）估计关节类型（旋转/平移）及轴参数（方向、位置、范围）。
  - **零样本前馈**：整个流程无需训练，仅依赖预训练模型的泛化能力，直接前向推理。
- **算法流程**（简述）：
  1. 输入每状态1-4张RGB图像（无位姿）。
  2. 使用预训练模型提取特征并重构3D几何（如利用预训练的单视图/多视图深度网络）。
  3. 通过语义分割获得部件掩码，建立跨状态、跨视图的部件对应。
  4. 分类关节类型，优化关节轴参数。
  5. 输出可交互的铰接物体表示（几何+运动学）。

#### 3. 实验设计
- **数据集与场景**：
  - 从元数据看，方法在“多个数据集”上测试，包括真实物体。具体数据集名称未在给定文本中列出（可能原文有，但此处未提供）。
  - 涉及合成数据训练预训练模型？不，本文是training-free，故直接使用已有的公开预训练模型。
- **Benchmark**：可能与现有铰接物体重建方法（如基于NeRF/3DGS的优化方法、数据驱动方法）对比。
- **对比方法**：未详细列出，但Abstract提到优于传统优化方法和数据驱动方法。

#### 4. 资源与算力
- **未明确说明**：文中仅提到“fully training-free”，无需训练，因此没有训练算力需求。但推理算力（GPU型号、内存等）未提及。可以推断由于仅处理1-4张图像，推理成本很低。

#### 5. 实验数量与充分性
- **实验数量**：元数据只提“在多个数据集上”，未给出具体实验组数。可能包含：
  - 不同稀疏度（1/2/4张图）对比。
  - 合成数据 vs 真实数据泛化实验。
  - 与SOTA方法的定量对比（部件分割精度、关节轴误差等）。
- **充分性**：从Abstract描述看，实验“实现了高质量重建和运动学分析”，但缺少详细数据支持。由于本文信息有限，无法判断实验是否充分客观。不过“synthetic-to-real gaps”被有效弥补，暗示了真实场景评估。

#### 6. 主要结论与发现
- 提出一种**完全免训练、前馈式**的铰接物体感知框架，仅需每状态1-4张无位姿RGB图像。
- 无需每物体优化，推理高效，泛化能力强，尤其对真实物体表现出色。
- 弥合了合成与真实之间的差距，为机器人应用提供了可扩展的解决方案。

#### 7. 优点（方法或实验设计的亮点）
- **训练开销为零**：完全利用预训练模型，无需任何额外训练或微调，极大降低部署成本。
- **稀疏输入**：仅需1-4张无位姿图像，对数据获取要求极低，适合实际机器人场景。
- **前馈推理**：避免迭代优化，速度远快于传统NeRF/3DGS方法。
- **零样本泛化**：由于不依赖特定数据集，可泛化至未见过的真实物体。
- **轻量优化**：最后仅需简单优化估计关节参数，效率高。

#### 8. 不足与局限
- **实验细节缺失**：提供的文本中缺乏具体实验数据（精度、运行时间等），难以评估实际性能。
- **对预训练模型的依赖**：若预训练模型在铰接物体上表现不佳（如罕见形状或纹理），性能可能下降。
- **两个状态限制**：要求物体在两个不同关节状态下被观察，对于只有单一状态或无法改变状态的物体无效。
- **弱纹理或对称物体**：稀疏视图下无位姿输入可能导致部件对应歧义，可能性较未讨论。
- **算力与资源未报告**：无法评估推理阶段的硬件需求。
- **数据集覆盖**：未明确是否测试了多种关节类型（旋转、平移、混合），以及复杂物体（多关节、链式结构）。

（完）
