---
title: "RGMP: Recurrent Geometric-prior Multimodal Policy for Generalizable Humanoid Robot Manipulation"
title_zh: "RGMP: 面向通用人形机器人操作的循环几何先验多模态策略"
authors: "Xuetao Li, Wenke Huang, Nengyuan Pan, Kaiyan Zhao, Songhua Yang, Yiming Wang, Mengde Li, Mang Ye, Jifeng Xuan, Miao Li"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38539/42501"
tags: ["query:ad"]
score: 9.0
evidence: 具有几何先验的多模态策略实现人形机器人操作
tldr: 现有的人形机器人操作主要依赖数据驱动方法，忽略了未见场景中的几何推理。本文提出RGMP，一种端到端框架，将几何语义技能推理与数据高效的视觉运动控制相结合。通过循环几何先验多模态策略，该方法在无需大量数据的情况下实现了泛化能力。实验表明，RGMP在多种操作任务上优于现有方法，为人形机器人的实际部署提供了高效解决方案。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38539/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 872, \"height\": 641, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38539/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1830, \"height\": 929, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38539/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 861, \"height\": 682, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38539/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1837, \"height\": 359, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38539/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 873, \"height\": 395, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38539/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1832, \"height\": 419, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38539/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1741, \"height\": 545, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38539/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 856, \"height\": 329, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38539/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 855, \"height\": 258, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38539/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 763, \"height\": 224, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38539/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 678, \"height\": 155, \"label\": \"Table\"}]"
motivation: 现有数据驱动方法忽视了未见场景中的几何推理，导致训练资源浪费和泛化能力不足。
method: 提出循环几何先验多模态策略（RGMP），端到端融合几何语义推理与数据高效的视觉运动控制。
result: 在多种人形机器人操作任务上，RGMP超越了现有方法，实现了高效且泛化的操作性能。
conclusion: RGMP有效利用几何先验提升了人形机器人操作的泛化能力和数据效率。
---

## Abstract
Humanoid robots exhibit significant potential in executing diverse human-level skills. However, current research predominantly relies on data-driven approaches that necessitate extensive training datasets to achieve robust multimodal decision-making capabilities and generalizable visuomotor control. These methods raise concerns due to the neglect of geometric reasoning in unseen scenarios and the inefficient modeling of robot-target relationships within the training data, resulting in a significant waste of training resources. To address these limitations, we present the Recurrent Geometric-prior Multimodal Policy (RGMP), an end-to-end framework that unifies geometric-semantic skill reasoning with data-efficient visuomotor control. For perception capabilities, we propose the Geometric-prior Skill Selector, which infuses geometric inductive biases into a vision language model, producing adaptive skill sequences for unseen scenes with minimal spatial common sense tuning. To achieve data-efficient robotic motion synthesis, we introduce the Adaptive Recursive Gaussian Network, which parameterizes robot-object interactions as a compact hierarchy of Gaussian processes that recursively encode multi-scale spatial relationships, yielding dexterous, data-efficient motion synthesis even from sparse demonstrations. Evaluated on both our humanoid robot and desktop robot, the RGMP framework achieves 87% task success in generalization tests and exhibits 5× greater data efficiency than the state-of-the-art model. This performance underscores its superior cross-domain generalization, paving the way for more versatile and data-efficient robotic systems.

---

## 论文详细总结（自动生成）

# 论文《RGMP: Recurrent Geometric-prior Multimodal Policy for Generalizable Humanoid Robot Manipulation》详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **背景**：人形机器人操作任务具有巨大潜力，但现有主流方法高度依赖数据驱动，需要大量训练数据集才能实现鲁棒的多模态决策和泛化视觉运动控制。
- **核心问题**：
  - 现有方法忽视了**未见场景中的几何推理**（如物体形状、空间关系），导致技能选择失误。
  - 机器人-目标关系的建模效率低下，造成**训练资源浪费**，数据利用率低。
  - 模型容易过拟合于演示特征，对未知物体/场景泛化能力差（仅40–60%成功率）。
- **总体目标**：提出端到端框架RGMP，融合**几何语义推理**与**数据高效的视觉运动控制**，实现人形机器人在稀疏演示下的强泛化操作。

## 2. 论文提出的方法论

### 核心思想
- 将**几何先验**注入视觉语言模型（VLM），实现适配未知场景的技能选择。
- 设计**递归高斯网络**对机器人-目标空间关系进行紧凑层次化建模，从稀疏演示中学习运动合成。

### 关键技术细节
1. **Geometric-prior Skill Selector (GSS)**  
   - 输入：用户指令 + RGB图像 + 预定义的几何常识（形状、相对位置等）
   - 步骤：
     - 第一阶段：VLM（Qwen-VL）理解指令并定位目标物体（生成边界框）。
     - 第二阶段：利用`Yolov8n-seg`获取物体形状信息；结合几何先验（如“圆柱体→抓取”，“不规则→捏取”）通过上下文提示选择技能。
   - 特点：即插即用、模块化、仅需20条规则约束即可鲁棒运行，无需任务特定微调。

2. **Adaptive Recursive Gaussian Network (ARGN)**  
   - **动机**：从视觉中隐式学习3D空间关系，避免显式3D重建。
   - **输入**：RGB图像 → 经过Stem层得到特征图F0
   - **关键模块**：
     - **Adaptive Decay Mechanism (ADM)**：通过卷积+激活函数生成内容自适应衰减因子W，控制历史记忆衰减。
     - **Rotary Position Embedding (RoPE)**：编码位置信息，增强对相对空间偏移的敏感性。
     - **递归计算**：将K、V切分为16×16图像块，按公式(3)逐步累积全局关联，形成**空间记忆**。  
       `W KV_i = (n_i + e^u ⊙ k_i ⊙ v_i) / (d_i + e^u ⊙ k_i)`，其中n、d为累积记忆。
     - **Spatial Mixing Block (SMB)** 和 **Channel Mixing Block (CMB)**：分别建模空间和通道特征交互。
     - **多尺度融合**：三个Stage的输出（F1,F2,F3）通过可学习权重α_i加权融合。
   - **动作预测**：融合特征经线性层生成初始动作a_in。
   - **Gaussian Mixture Model (GMM)**：用K=6个高斯分量拟合动作分布，通过马氏距离选择最近的聚类中心作为最终动作a*，避免单高斯回归到均值。
   - 损失函数：MSE(a_in, a_ground)

### 算法流程（文字说明）
1. **数据收集**：采集120条轨迹，每条包含RGB图像O和关节空间J。
2. **训练**（E个epoch）：  
   - 提取特征 → 通过ADM生成W → 应用RoPE → 递归计算SMB输出 → 残差连接 → CMB → 下采样，重复三次 → 多尺度融合 → 线性层预测动作 → 计算MSE损失 → 更新网络参数。
   - GMM参数通过EM算法从演示数据中学习。
3. **推理**：  
   - GSS接收指令O和图像，定位目标，获取形状信息，选择技能（如“抓取”）。  
   - 调用对应技能的子网络ARGN，输入当前图像，输出最终关节动作a*。

## 3. 实验设计

### 数据集与场景
- **自建数据集**：120条操作轨迹，每个技能类别（抓取、提起、捏取）收集40条演示。
- **评估平台**：  
  - 人形机器人（上肢）  
  - 桌面双机械臂机器人（跨本体泛化测试）
- **测试物体**：常规物体（Fanta罐、Sprite罐、纸巾）和非常规物体（压扁可乐罐、人类手、喷雾瓶、可乐瓶）；位置随机。

### Benchmark
- **模拟器**：ManiSkill2任务（推椅子、移动水桶、插充电器、开柜门/抽屉）。
- **对比方法**：
  - 基线：ResNet50、Transformer、ManiSkill2冠军方案、Octo、OpenVLA、RDT-1b、Diffusion Policy、Dex-VLA。
  - 消融对比：GSS vs 原始Qwen-VL；ARGN vs Diffusion Policy；有无GMM；RoPE/SMB/CMB组件。

### 评估指标
- `Acc_s`：技能选择成功率
- `Acc_t`：执行精度（动作准确度）
- `Acc = Acc_s × Acc_t`：最终成功率
- 泛化设置：仅用40次Fanta抓取演示训练，测试其他未见物体。

## 4. 资源与算力

- 论文**未明确说明**使用的GPU型号、数量、训练时长或总计算量。仅在致谢中提到“超算中心”和“武汉大学学习算法与软体操作实验室”提供计算支持。

## 5. 实验数量与充分性

- **共进行了多组实验**：
  - **表1**：GSS与Qwen-VL在5种物体上的对比（含3种视觉骨干），共10种组合×20次试验 → 统计充分。
  - **表2**：RGMP与8种方法在4种物体上的泛化对比 → 20次/物体。
  - **表3**：ARGN与GMM消融（纸巾、压扁可乐） → 验证各模块贡献。
  - **表4**：RoPE、SMB、CMB三组件的消融（4种物体） → 确认组合最优。
  - **表5**：数据效率对比（40–200样本） → 显示5×提升。
  - **图6**：ManiSkill2模拟器上5个任务的性能对比。
- **充分性评价**：
  - 实验覆盖了真实机器人环境、不同物体类别、跨本体迁移、模拟器任务。
  - 消融实验完整，对比方法多样，随机多次试验。
  - **但缺少对更多真实场景（如杂乱桌面、遮挡）的测试**，以及统计显著性检验。

## 6. 论文的主要结论与发现

- **RGMP框架**在泛化测试中达到**87%成功率**，相比Diffusion Policy提升约17个百分点。
- **数据效率**：仅需40次演示即可达到DP用200次演示的性能（5×提升）。
- **GSS**将技能选择准确率提升15–25%，验证了几何先验的有效性。
- **ARGN+GMM**有效缓解了过拟合和模式坍塌，尤其在稀疏数据下。
- **跨本体泛化**：从人形机器人迁移到桌面机器人表现稳定。
- 在ManiSkill2五个操作任务上均取得最佳成绩。

## 7. 优点

- **创新性**：首次将几何先验显式注入VLM用于技能选择，结合递归高斯网络进行运动建模，实现了语义推理与运动控制的统一。
- **数据效率高**：仅需少量演示即可训练，显著降低真实机器人数据采集成本。
- **模块化设计**：GSS即插即用，技能库可扩展；ARGN结构可分离，便于迁移。
- **实验扎实**：在两类机器人本体、多种物体、模拟与真实环境中验证了泛化性。
- **结果显著**：相比主流方法（Diffusion Policy、Octo等）有明确优势。

## 8. 不足与局限

- **资源开销未公开**：未报告训练和推理的GPU型号、时长、参数量，难以复现和横向比较效率。
- **实验范围有限**：
  - 只测试了抓取/捏取/提起三种技能，未涵盖更复杂的操作（如插拔、旋转）。
  - 真实场景仅在两个机器人上评估，未涉及动态障碍物、光照变化等。
  - 泛化测试中物体形状差异有限，未考虑极端变形或透明物体。
- **几何先验依赖**：GSS的规则约束需要人工定义（20条），在技能类别增多时扩展性存疑。
- **GMM组件数固定**：K=6的设定未提供理论依据或敏感性分析，可能不适用于所有任务。
- **没有与基于3D点云的方法对比**：隐式空间关系建模虽高效，但与显式3D方法相比缺乏直接比较。
- **长期任务未验证**：论文实验均为单步操作，多步骤序列任务未涉及。

（完）
