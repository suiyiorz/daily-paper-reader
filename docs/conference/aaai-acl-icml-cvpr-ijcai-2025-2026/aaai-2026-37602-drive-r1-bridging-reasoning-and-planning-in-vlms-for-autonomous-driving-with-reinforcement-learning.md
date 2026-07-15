---
title: "Drive-R1: Bridging Reasoning and Planning in VLMs for Autonomous Driving with Reinforcement Learning"
title_zh: Drive-R1：基于强化学习的VLM推理与规划桥接在自动驾驶中的应用
authors: "Yue Li, Meng Tian, Dechang Zhu, Jiangtong Zhu, Zhenyu Lin, Zhiwei Xiong, Xinhai Zhao"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/37602/41564"
tags: ["query:ad"]
score: 9.0
evidence: 基于强化学习的大视觉语言模型推理与规划在自动驾驶中的应用
tldr: 该论文针对大视觉语言模型（VLM）在自动驾驶中推理与规划脱节的问题，提出Drive-R1。通过强化学习微调，使模型在较少依赖历史捷径的情况下，将链式推理正确对齐到运动规划。实验表明，该方法有效提升了规划准确性和可解释性，推动了VLM在端到端驾驶中的应用。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37602/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1630, \"height\": 562, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37602/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1664, \"height\": 517, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37602/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1464, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37602/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 867, \"height\": 734, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37602/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1445, \"height\": 428, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37602/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1649, \"height\": 705, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37602/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 872, \"height\": 305, \"label\": \"Table\"}]"
motivation: VLM在自动驾驶中存在推理与规划不一致以及依赖历史输入捷径的问题。
method: 使用强化学习微调小规模专用VLM，将链式推理正确引导至运动规划。
result: 在真实驾驶数据集上推理质量和规划性能均得到提升。
conclusion: 强化学习有效对齐了VLM的推理与规划，为自动驾驶智力增强提供方案。
---

## Abstract
Large vision-language models (VLMs) for autonomous driving (AD) are evolving beyond perception and cognition tasks toward motion planning. However, we identify two critical challenges in this direction: (1) VLMs tend to learn shortcuts by relying heavily on history input information, achieving seemingly strong planning results without genuinely understanding the visual inputs; and (2) the chain-of-thought (COT) reasoning processes are always misaligned with the motion planning outcomes, and how to effectively leverage the complex reasoning capability to enhance planning remains largely underexplored. In this paper, we start from a small-scale domain-specific VLM and propose Drive-R1, designed to bridge the scenario reasoning and motion planning for AD. Drive-R1 first undergoes the supervised finetuning on an elaborate dataset containing both long and short COT data. Drive-R1 is encouraged to reason step-by-step from visual input to final planning decisions. Subsequently, Drive-R1 is trained within a reinforcement learning framework that incentivizes the discovery of reasoning paths that are more informative for planning, guided by rewards based on predicted trajectories and meta actions. Experimental evaluations on the nuScenes and DriveLM-nuScenes benchmarks demonstrate that Drive-R1 achieves superior performance compared to existing state-of-the-art VLMs. We believe that Drive-R1 presents a promising direction for bridging reasoning and planning in AD, offering methodological insights for future research and applications.

---

## 论文详细总结（自动生成）

# Drive-R1 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

论文指出，将大视觉语言模型（VLM）应用于自动驾驶运动规划时存在两个关键挑战：

- **视觉信息利用不足（捷径学习）**：现有VLM在预测轨迹时过度依赖历史文本输入（如自车状态、历史轨迹），即使完全去掉视觉输入，模型性能反而持平或更好，说明模型并未真正理解场景视觉信息，而是学习到了数据集统计捷径。
- **链式推理与规划结果不一致**：即使训练模型输出链式推理（COT），推理过程往往与最终轨迹预测脱节。长COT在简单场景下可能引入“过度思考”噪声，且自然语言推理的粗粒度难以与数值化轨迹精确对齐。

因此，论文旨在**桥接场景推理与运动规划**，使VLM既能输出可解释的逐步推理，又能生成精准、安全的轨迹，避免模型对历史信息的过度依赖和推理-规划的不一致。

## 2. 方法论：核心思想、关键技术细节

### 核心思想

Drive-R1 采用 **两阶段训练+强化学习** 范式：
1. **域适应阶段**：在大规模自动驾驶领域数据集上对通用VLM进行全参数微调（SFT第一步），建立领域感知能力。
2. **推理-规划对齐阶段**：先使用精心构建的RP-CoT数据集（含长/短COT）进行第二段SFT；再通过基于GRPO的强化学习微调，用组合奖励函数引导推理路径与轨迹预测对齐。

### 关键技术细节

#### RP-CoT数据构建
- 基于五个关键领域（交通知识理解、通用元素识别、交通图生成、目标属性理解、自车决策与规划）生成结构化COT。
- 采用半自动流程：从公开数据获取场景描述和QA→语言模型生成事件→结合轨迹和元动作生成COT（含<think>和<trajectory>标签）→VLM（GPT-4o）精炼→人工检查。
- 区分短COT（简单场景，无推理）和长COT（复杂场景，逐步推理）。

#### 两阶段SFT
- **第一阶段**：在包含3百万样本的领域数据集上微调InternVL2-4B，使模型掌握AD领域知识。
- **第二阶段**：在RP-CoT数据集上训练，采用“快-慢思考”策略：用第一阶段模型预测场景难度，高难度场景配长COT，低难度场景配短COT或直接输出轨迹，避免过度推理。

#### 强化学习（RL）
- **算法**：采用GRPO（Group Relative Policy Optimization），对每个问题采样G个候选输出，计算组内相对优势，并包含KL散度项限制策略偏移。
- **奖励函数**：由四部分组成：
  - 轨迹奖励（结果级）：基于预测轨迹与真值的L2距离，经sigmoid变换。
  - 元动作奖励（过程级）：评估推理中的横向和纵向元动作正确性，各0.5分。
  - 重复惩罚：惩罚冗余推理。
  - 格式奖励：确保输出结构正确。
- 训练在SFT后的模型上进行，避免不稳定更新。

## 3. 实验设计

### 数据集
- **域适应数据**：来自多个公开AD数据集（如IDD-X、Dolphins、LingoQA、DriveLM等），约3百万样本。
- **RP-CoT数据集**：基于nuScenes和DriveLM-nuScenes构建，共约4072个长/短COT样本；用于SFT第二阶段和RL。
- **评估基准**：
  - nuScenes验证集（6019样本）
  - DriveLM-nuScenes验证集（799样本）

### Benchmark指标
- **L2距离**（1s、2s、3s及平均）
- **碰撞率**（1s、2s、3s及平均）

### 对比方法
- **端到端方法**：ST-P3、UniAD、UniAD-E、VAD-E
- **VLM方法**：DriveVLM、RDA-Driver、OmniDrive、EMMA、GPT-Driver等

## 4. 资源与算力

论文明确说明：
- SFT第一阶段：32块V100，batch size 256。
- SFT第二阶段：16块V100，batch size 128。
- RL阶段：2块V100，batch size 16，rollout数量6（消融实验中使用12、24）。
- 训练时长未明确说明，但可推断为多轮迭代。

## 5. 实验数量与充分性

论文进行了以下主要实验：
- **主表对比**（表2）：在nuScenes和DriveLM-nuScenes上对比6~8种基线方法。
- **消融实验**（表1、表3）：
  - COT长度影响：长/短/混合COT对比。
  - SFT vs. RL：不同阶段模型（BA、DS）的RL效果。
  - 奖励设计：不同奖励组件组合效果（表3）。
  - Rollout数量：6、12、24的影响。
  - 视觉输入消融：有无视觉输入对BA/DS模型的影响（图1、表1）。
- 共约10+组实验，涵盖方法有效性、组件必要性、参数影响。

**充分性评价**：实验设计较全面，覆盖了关键模块，对比方法多样，消融细致。但仅使用两个公开数据集（nuScenes及其变体），未在更大规模或真实闭环测试，存在一定局限。指标仅L2和碰撞率，缺少更多安全性和舒适性指标。

## 6. 主要结论与发现

- 现有VLM规划存在严重捷径学习：即使去掉视觉输入，模型仍能输出竞争性轨迹，说明历史文本信息主导。
- 长COT直接SFT会降低性能；采用“快-慢思考”混合COT（短+长）可显著改善。
- 强化学习（GRPO）在已经域适应的模型上能进一步对齐推理与规划，降低碰撞率和轨迹误差。
- Drive-R1在nuScenes和DriveLM-nuScenes上达到SOTA：平均L2 0.31，碰撞率0.09（DriveLM-nuScenes上碰撞率0.10）。
- 奖励设计中的元动作奖励和重复惩罚对安全引导有效；但小模型增加rollout可能不稳定。

## 7. 优点

- **问题诊断深刻**：通过“去掉视觉输入”实验清晰揭示了捷径学习问题，动机扎实。
- **方法设计合理**：两阶段SFT+GRPO结构，先域适应再推理对齐，符合实际训练逻辑。
- **数据构造系统化**：RP-CoT数据集覆盖五个关键领域，并引入长/短COT区分，减少过度推理。
- **奖励函数精细**：结合结果级（轨迹）和过程级（元动作）信号，并加入重复惩罚，促进简洁高效推理。
- **实验规范**：数值结果解释清晰，消融设计逻辑连贯，对比方法覆盖主流。

## 8. 不足与局限

- **数据集单一**：仅在nuScenes和DriveLM-nuScenes上评估，数据量较小（799/6019样本），场景多样性有限，泛化性存疑。
- **指标局限**：仅用L2和碰撞率，缺少横向/纵向加速度、舒适性、启停行为等评价，且均为开环指标，未进行闭环仿真验证。
- **模型规模小**：基于InternVL2-4B，参数量有限，论文也承认小模型学习强推理能力受限（引用相关文献）。
- **RL训练稳定性**：rollout增加到24时观察到训练崩溃，表明小模型对RL超参数敏感，可复现性可能受影响。
- **未公开完整代码**：论文提供了GitHub链接（https://github.com/Depth2World/Drive-R1），但具体复现依赖未详述。
- **推理速度与部署**：未讨论模型推理延迟、实时性等工程问题，缺乏实用化讨论。

（完）
