---
title: "H-RDT: Human Manipulation Enhanced Bimanual Robotic Manipulation"
title_zh: "H-RDT: 人操作增强的双手机器人操作"
authors: "Hongzhe Bi, Lingxuan Wu, Tianwei Lin, Hengkai Tan, Zhizhong Su, Hang Su, Jun Zhu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38875/42837"
tags: ["query:ad"]
score: 9.0
evidence: 人操作增强的双手机器人操作
tldr: 机器人操作中缺少大规模高质量演示数据。本文利用大规模第一人称人体操作视频及3D手部姿态作为行为先验，提出H-RDT（人机扩散变换器）将人类操作知识迁移到双手机器人。在多种操作任务上，H-RDT显著提升了成功率和泛化能力，表明人体操作数据是一种有效的机器人学习来源。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38875/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1832, \"height\": 1135, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38875/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1402, \"height\": 919, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38875/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 893, \"height\": 684, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38875/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 834, \"height\": 288, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38875/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 870, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38875/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1268, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38875/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 874, \"height\": 247, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38875/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 830, \"height\": 461, \"label\": \"Table\"}]"
motivation: 机器人操作数据稀缺，尤其是双手机器人演示数据难以获得。
method: 利用第一人称人类操作视频中的3D手部姿态作为先验，通过扩散变换器迁移到双手机器人。
result: 在多种双手机器人操作任务上，H-RDT提升了成功率和泛化能力。
conclusion: 人体操作数据可以有效增强机器人操作能力，缓解数据稀缺问题。
---

## Abstract
Imitation learning for robotic manipulation faces a fundamental challenge: the scarcity of large-scale, high-quality robot demonstration data. Recent robotic foundation models often pre-train on cross-embodiment robot datasets to increase data scale, while they face significant limitations as the diverse morphologies and action spaces across different robot embodiments make unified training challenging. In this paper, we present  H-RDT (Human to Robotics Diffusion Transformer), a novel approach that leverages human manipulation data to enhance robot manipulation capabilities. Our key insight is that large-scale egocentric human manipulation videos with paired 3D hand pose annotations provide rich behavioral priors that capture natural manipulation strategies and can benefit robotic policy learning. We introduce a two-stage training paradigm: (1) pre-training on large-scale egocentric human manipulation data, and (2) cross-embodiment fine-tuning on robot-specific data with modular action encoders and decoders. Built on a diffusion transformer architecture with 2B parameters, H-RDT uses flow matching to model complex action distributions. The modular design of action encoder and decoder components enables effective knowledge transfer from the unified human embodiment to diverse robot platforms through efficient fine-tuning. Extensive evaluations encompassing both simulation and real-world experiments, single-task and multitask scenarios, as well as few-shot learning and robustness assessments, demonstrate that H-RDT outperforms training from scratch and existing state-of-the-art methods, including π0 and RDT, achieving significant improvements of 13.9% and 40.5% over training from scratch in simulation and real-world experiments, respectively. The results validate our core hypothesis that human manipulation data can serve as a powerful foundation for learning bimanual robotic manipulation policies.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **数据稀缺**：机器人操作模仿学习面临的核心瓶颈是缺乏大规模、高质量的机器人演示数据。现有方法（如ACT、Diffusion Policy、VLA模型）依赖昂贵的遥操作设备，数据采集成本高、规模受限。
- **跨实体训练困难**：当前通用机器人策略（如RT-2、OpenVLA、π0、RDT）常在多实体机器人数据集上预训练，但不同机器人的形态和动作空间差异巨大，导致统一训练困难，且现有机器人数据集整体规模仍然有限。
- **人类操作数据的潜力**：相比之下，人类操作行为数据极其丰富。近年涌现的大规模第一人称（egocentric）视频数据集（如EgoDex，829小时、338k条轨迹）带有精确的3D手部姿态标注，蕴含着丰富的操作策略和物体交互先验。
- **本文目标**：提出H-RDT（Human to Robotics Diffusion Transformer），系统性地利用大规模人类操作数据来增强机器人操作能力，缓解数据稀缺问题，并实现跨实体知识迁移。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 利用人类操作数据中的行为先验（抓取模式、物体操作策略、双手协调模式）来指导机器人策略学习。
- 采用两阶段训练范式：第一阶段在大规模人类数据上预训练，第二阶段在机器人特定数据上微调，并设计模块化的动作编码器和解码器以适应不同机器人形态。

### 关键技术细节
- **人类动作表示设计**：将人类双手动作表示为48维向量，包括：
  - 双手腕部位置（3D）和朝向（6D）：18维，与机器人末端执行器姿态一致。
  - 指尖位置（双手所有手指的3D坐标）：30维。
  - 这种表示涵盖了主流机器人（末端执行器控制）的动作空间，实现了跨形态的知识蒸馏。
- **两阶段训练**：
  - **阶段1：人类数据预训练**。在完整EgoDex数据集（338K+轨迹，194个任务）上训练，使用48维人手动作表示。
  - **阶段2：跨实体微调**。保留预训练的视觉编码器、语言编码器和Transformer骨干权重；重新初始化状态适配器、动作适配器和动作解码器以适应目标机器人动作空间（如14维双臂+夹爪）。
- **架构**：基于扩散Transformer（2B参数），采用**流匹配（Flow Matching）** 代替传统扩散模型：
  - 构建直线流路径：`a_τ = τ · a* + (1-τ)z`，其中`z`为高斯噪声，`τ∈[0,1]`为流时间。
  - 损失函数：`L_FM = E[||vθ(a_τ, τ, c) - (z - a*)||^2]`，学习将噪声分布变换为目标动作分布的向量场。
  - 推理时通过ODE求解器确定步数积分得到动作序列。
- **网络组件**：
  - 视觉编码器：DinoV2 + SigLIP + MLP适配器。
  - 语言编码器：T5-XXL + MLP适配器。
  - 动作编码器：模块化MLP，编码状态和噪声动作。
  - Transformer骨干：LLaMA-3风格（RMSNorm、SwiGLU），自注意力处理串联输入，图像和语言特征通过分离的交叉注意力注入，流时间通过AdaLN注入。
  - 动作解码器：模块化MLP，输出目标机器人动作空间。

## 3. 实验设计：数据集、场景、基准、对比方法

### 数据集
- **人类数据**：EgoDex（829小时/338K条轨迹，194个任务，包含3D手部姿态和语言描述）。
- **机器人数据**：
  - 仿真：RoboTwin 2.0平台（45个任务，约2250条演示）。
  - 真实世界：三个平台——Aloha-Agilex-2.0（Piper双臂）、双UR5+UMI、双ARX5。

### 实验场景
- **仿真**：单任务（13个任务，Easy/Hard模式）、多任务（45个任务，Hard模式）、跨实体（Aloha-Agilex-1.0和Franka-Panda）。
- **真实世界**：
  - 毛巾折叠、杯子到杯垫放置（Aloha-Agilex-2.0，各25次试验）。
  - 113个多样拾放任务（双ARX5，1-5次演示/任务，少样本）。
  - 外卖袋放置任务（双UR5+UMI，分解为4个子任务，25次试验）。

### 对比方法
- RDT（Robotics Diffusion Transformer）
- π0（Vision-Language-Action Flow Model）
- w/o human（H-RDT无人类预训练版本，即从头训练）

## 4. 资源与算力
- 论文中**未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提及模型为2B参数的扩散Transformer，但未给出训练资源细节。

## 5. 实验数量与充分性
- **实验丰富性**：论文共设计了多组实验，涵盖：
  - 仿真单任务（13个任务，两个难度模式，分别评估）。
  - 仿真多任务（45个任务，代表性子集10个任务展示结果）。
  - 仿真跨实体（两个机器人平台）。
  - 真实世界三个平台，共约5个具体任务（毛巾折叠、杯子放置、113个拾放、外卖袋放置），每个任务25次或更多试验。
  - 少样本学习（1-5次演示）。
  - 环境鲁棒性（域随机化：光照、物体杂乱、桌面高度变化）。
- **充分性评价**：实验覆盖全面，从仿真到真实，从单任务到多任务，从常规到少样本，从单一实体到跨实体。对比方法包括当前SOTA且包含消融（w/o human）。数据统计指标（成功率、详细得分分解）合理。实验设计较为客观、公平，能够支撑结论。

## 6. 主要结论与发现
- **人类操作数据是有效的机器人学习之源**：H-RDT相比从头训练（w/o human）在仿真中平均提升13.9%，在真实世界中提升40.5%。
- **优于现有SOTA**：在仿真多任务中，H-RDT平均成功率87.2%，显著超过RDT（28.8%）和π0（48.4%）。在真实世界中，毛巾折叠52% vs RDT 40%；杯子放置64% vs RDT 28%；外卖袋放置58% vs RDT 29%。
- **少样本学习优势明显**：在113个任务、1-5次演示条件下，H-RDT成功率41.6%，优于π0（31.2%）、RDT（16.0%）、w/o human（17.6%）。
- **跨实体泛化有效**：在Aloha-Agilex-1.0和Franka-Panda上均提升显著（+20.0%和+18.9%），验证了模块化动作适配器设计的有效性。
- **环境鲁棒性**：在域随机化Hard模式下，H-RDT仍优于其他方法。

## 7. 优点：方法或实验设计亮点
- **创新利用人类数据**：首次在大规模（338K轨迹）人类操作数据上预训练，并成功迁移到多种机器人形态，克服了以往仅用小规模或单形态的限制。
- **模块化跨实体适配**：通过共享动作表示空间（48维人手姿态）和模块化编码器/解码器，实现了从人类统一形态到不同机器人的高效微调，无需复杂重定位或配对数据。
- **流匹配训练**：相比传统扩散模型，流匹配训练更稳定、推理更高效。
- **实验设计全面**：覆盖仿真与真实、单任务与多任务、少样本、跨实体、环境鲁棒性等多个维度，对比方法包括最新SOTA和消融，结论可信度高。

## 8. 不足与局限
- **算力资源未报告**：缺少对训练GPU型号、数量、时长的描述，降低了复现性和资源评估的透明度。
- **人类数据依赖标注**：依赖EgoDex等具有精确3D手部姿态标注的数据集，这类数据仍相对稀缺，可能限制方法的普适性。
- **动作空间限制**：人类动作表示仅包含手部，未考虑全身运动或工具使用场景；对于需要非末端执行器控制的机器人（如全身移动操作）可能不适用。
- **真实世界任务多样性有限**：真实实验仅涵盖有限任务类型（折叠、放置），未涉及更复杂的装配、精细操作等，可能低估泛化边界。
- **少样本实验缺乏统计显著性检验**：虽显示H-RDT明显优于基线，但未提供置信区间或统计检验，可能受随机波动影响。
- **长期依赖与闭环能力未明确评估**：缺少对策略在长时间跨度或多步错误恢复中的表现分析。
- **人类行为先验的负面迁移风险**：未探讨当人类操作策略与机器人最优策略不一致时，预训练是否会引入偏差。

（完）
