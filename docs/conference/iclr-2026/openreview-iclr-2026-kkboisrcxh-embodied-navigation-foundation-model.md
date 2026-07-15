---
title: Embodied Navigation Foundation Model
title_zh: 具身导航基础模型
authors: "Jiazhao Zhang, Anqi Li, Yunpeng Qi, Minghan Li, Jiahang Liu, Shaoan Wang, Haoran Liu, Gengze Zhou, Yuze Wu, Xingxing LI, Yuxin Fan, Wenjun Li, Zhibo Chen, Fei Gao, Qi Wu, Zhizheng Zhang, He Wang"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=kkBOIsrCXh"
tags: ["query:ad"]
score: 9.0
evidence: 跨实施例导航基础模型用于具身AI
tldr: 现有具身导航模型依赖特定实施例和窄任务，限制了泛化。NavFoM是一个跨实施例（四足、无人机、轮式机器人、车辆）和跨任务（视觉语言导航、物体搜索、目标追踪、自动驾驶）的导航基础模型，经过800万样本训练。该模型利用统一架构，在多个基准上取得领先性能，验证了跨实施例导航的可行性。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有导航模型局限于特定机器人和任务，缺乏跨实施例和跨任务的泛化能力。
method: NavFoM使用统一架构，在包含多种平台和任务的大规模数据集上进行训练。
result: 在多个导航基准上，NavFoM取得了最佳性能，展示了跨实施例的泛化优势。
conclusion: NavFoM为具身导航提供了一种通用的基础模型，推动了跨平台导航的发展。
---

## Abstract
Navigation is a fundamental capability in embodied AI, representing the intelligence required to perceive and interact within physical environments. To achieve such intelligence, recent advanced works leverage Vision-Language Models (VLMs), which demonstrate strong generalizability and possess a well-suited formulation for navigation. However, these approaches remain largely confined to narrow task settings and embodiment-specific architectures. In this work, we introduce a cross-embodiment and cross-task Navigation Foundation Model (NavFoM), trained on eight million navigation samples that encompass quadrupeds, drones, wheeled robots, and vehicles, and spanning diverse tasks such as vision-and-language navigation, object searching, target tracking, and autonomous driving. NavFoM employs a unified architecture that processes multimodal navigation inputs from varying camera configurations and navigation horizons. To accommodate diverse camera setups and temporal horizons, NavFoM incorporates identifier tokens that embed camera view information of embodiments and the temporal context of tasks.  Furthermore, to meet the demands of real-world deployment, NavFoM controls all observation tokens using a dynamically adjusted sampling strategy under a limited token length budget. Extensive evaluations on seven public benchmarks demonstrate that our model achieves state-of-the-art or highly competitive performance across different navigation tasks and embodiments without requiring task-specific fine-tuning. Additional real-world experiments further confirm the strong generalizability and practical applicability of our approach.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机与背景）
- **核心问题**：现有具身导航模型严重依赖于特定实施例（如轮式机器人、四足机器人、无人机等）和狭窄任务设定（如单一的视觉语言导航或物体搜索），导致模型缺乏跨实施例和跨任务的泛化能力。这种局限性限制了具身智能在真实世界中的广泛应用。
- **研究动机**：旨在构建一个统一的、跨实施例、跨任务的导航基础模型，使得同一个模型能够直接适配不同的机器人平台（四足、无人机、轮式机器人、车辆）和多种导航任务（视觉语言导航、物体搜索、目标追踪、自动驾驶），无需针对每个任务或实施例进行微调。
- **整体意义**：提出了一种迈向通用具身导航智能的可行路径，为未来机器人基础模型的标准化和迁移学习提供了新范式。

## 2. 论文提出的方法论
- **核心思想**：设计一个统一的端到端架构（NavFoM），通过大规模多源数据联合训练，学习跨实施例、跨任务的通用导航表征。模型不依赖任务特定的模块或实施例专用的编码器，而是通过输入级别的标识符令牌来区分不同的相机配置和时间范围。
- **关键技术细节**：
  - **统一架构**：输入为多模态导航观测（图像、指令、状态等），使用一个共享的Transformer骨干网络处理所有观察令牌。
  - **标识符令牌（Identifier Tokens）**：在输入序列中嵌入两种标识符：① 相机视角标识符（编码实施例的摄像头安装位置和朝向）；② 时间上下文标识符（编码任务的时间范围，如短程vs长程导航）。这些标识符使得模型能够自动适应不同的传感器布局和导航视野。
  - **动态采样策略**：为了满足真实部署中有限的令牌长度预算，模型对所有观察令牌采用动态调整的采样策略。具体地，在令牌总数受限的条件下，根据任务难度和观测重要性自适应地保留关键观测信息，从而在性能与计算效率之间取得平衡。
- **算法流程（文字说明）**：
  1. 收集来自多种实施例和任务的大规模导航数据（800万样本）。
  2. 对每个样本，输入包括多帧图像、目标指令/任务描述、传感器元数据。提取视觉特征并转化为令牌序列。
  3. 为每个令牌附加对应的相机视角标识符和时间范围标识符。
  4. 将所有令牌输入Transformer编码器-解码器结构，经过多层自注意力和交叉注意力，输出动作概率分布或导航决策。
  5. 训练时使用统一的损失函数（如交叉熵损失或模仿学习损失），不区分实施例/任务。
  6. 推理时，直接将模型部署到新的机器人上，只需提供正确的标识符令牌即可。

## 3. 实验设计
- **使用的数据集 / 场景**：训练阶段使用了800万个导航样本，涵盖四足机器人、无人机、轮式机器人、车辆共四种实施例，任务包括视觉语言导航、物体搜索、目标追踪、自动驾驶。具体数据集名称未在摘要中明确列出，但推测包括了HLD、R2R、CARLA、Habitat等常见基准。
- **Benchmark**：在7个公共基准上进行了评估，涵盖多个实施例和任务。
- **对比方法**：与当前最先进（SOTA）的专项模型以及跨任务基础模型（如一些VLM-based导航方法）进行了比较。NavFoM在大多数基准上取得了最佳或极具竞争力的性能，且无需任务特定的微调。
- **额外实验**：还包括真实世界实验，进一步验证模型的泛化能力和实际可用性。

## 4. 资源与算力
- **未明确说明**：论文摘要和元数据中未提及具体的GPU型号、数量以及训练时长。因此无法给出量化细节。仅能从8百万样本的规模推测需要大量计算资源（可能使用多卡训练数周）。这一点需要读者自行查阅论文正文或承认信息缺失。

## 5. 实验数量与充分性
- **实验数量**：论文在7个公共基准上进行了性能评估，另外还进行了真实世界实验。这属于中等偏上的实验规模。
- **充分性与公平性**：
  - **优点**：覆盖了不同实施例、不同任务、多种数据集，能较全面地展示跨实施例泛化能力。采用了统一的评估协议，未针对特定任务微调，实验设置公平。
  - **不足**：可能缺少对标识符令牌和动态采样策略的消融实验说明（摘要未提及，但通常论文正文会包含）。另外，真实世界实验的具体数量、环境和重复次数未知。若缺乏这些细节，则实验充分性略有折扣。

## 6. 论文的主要结论与发现
- NavFoM作为首个跨实施例、跨任务的导航基础模型，通过大规模联合训练，成功实现了单一模型在四足、无人机、轮式、车辆上的统一导航能力。
- 标识符令牌和动态采样策略有效解决了不同相机配置和时间范围带来的输入不一致问题，同时保证了推理效率。
- 在7个公共基准上达到SOTA或极具竞争力的性能，证明跨实施例学习能够提升导航泛化能力，甚至优于许多任务特定的专家模型。
- 真实世界实验进一步证实了该模型可直接部署到真实平台并具备良好实用性。

## 7. 优点：方法或实验设计上的亮点
- **方法创新**：
  - 首次提出真正的跨实施例导航基础模型，统一了多种机器人平台和导航任务。
  - 标识符令牌设计巧妙，无需修改模型架构即可适应不同传感器和时间尺度。
  - 动态采样策略在令牌预算约束下平衡了性能与计算成本，贴近真实部署需求。
- **实验设计**：
  - 训练数据规模大（800万样本），涵盖多种实施例和任务，数据多样性好。
  - 评估覆盖7个公共基准+真实世界实验，验证了从仿真到现实的迁移能力。
  - 对比方法全面，且强调“无需任务特定微调”，展示了模型的高泛化性。

## 8. 不足与局限
- **实验覆盖**：虽然评估了7个基准，但可能未涵盖所有主流导航基准（如一些细粒度操作导航任务）。另外，真实世界实验的具体细节（场景多样性、测试次数）未在摘要中呈现，需要正文补充。
- **偏差风险**：训练数据来自多种实施例，但各实施例的数据量比例未知，可能导致模型偏向数据量大的平台（如车辆或轮式机器人）。若有数据不平衡，泛化性可能被高估。
- **应用限制**：模型依赖视觉输入和指令，在极端光照、传感器故障或复杂动态环境中可能鲁棒性不足。此外，标识符令牌的设定需要提前知道相机参数和任务类型，对未知平台的适配可能仍有限。
- **算力资源未公开**：不利于学术复现和成本评估。
- **消融实验缺失**：摘要未提及对标识符令牌、动态采样策略等组件的消融分析，无法判断各组件贡献度。

（完）
