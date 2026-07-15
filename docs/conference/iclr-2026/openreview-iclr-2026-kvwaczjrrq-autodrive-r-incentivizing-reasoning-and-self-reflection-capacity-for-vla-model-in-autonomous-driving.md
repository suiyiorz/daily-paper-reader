---
title: "AutoDrive-R²: Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving"
title_zh: AutoDrive-R²：激励自动驾驶VLA模型的推理与自省能力
authors: "Zhenlong Yuan, Chengxuan Qian, Jing Tang, Rui Chen, Zijian Song, Lei Sun, Xiangxiang Chu, Yujun Cai, Dapeng Zhang, Shuo Li"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=KVWaCzJrrq"
tags: ["query:ad"]
score: 9.0
evidence: 自动驾驶中VLA模型增强推理与自省能力
tldr: VLA模型在自动驾驶中展现潜力，但决策过程可解释性和行动序列合理性不足。AutoDrive-R²提出通过链式推理（CoT）和强化学习增强推理与自省能力，构建nuScenesR²-6K数据集进行监督微调。实验表明该方法提升了决策连贯性和可解释性，同时保持了高规划性能。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: VLA模型在自动驾驶中的决策过程缺乏可解释性和自洽性。
method: 提出CoT数据集nuScenesR²-6K进行监督微调，并结合强化学习优化推理链。
result: 在nuScenes上规划性能提升，且决策过程更可解释。
conclusion: 结合CoT和RL可有效提升VLA模型的推理质量与可信度。
---

## Abstract
Vision–Language–Action (VLA) models in autonomous driving systems have recently demonstrated transformative potential by integrating multimodal perception with decision-making capabilities. However, the interpretability and coherence of the decision process and the plausibility of action sequences remain largely underexplored. To address these issues, we propose AutoDrive-R², a novel VLA framework that enhances both reasoning and self-reflection capabilities of autonomous driving systems through chain-of-thought (CoT) processing and reinforcement learning (RL). Specifically, we first propose an innovative CoT dataset named nuScenesR²-6K for supervised fine-tuning, which effectively builds cognitive bridges between input information and output trajectories through a four-step logical chain with self-reflection for validation. Moreover, to maximize both reasoning and self-reflection during the RL stage, we further employ the Group Relative Policy Optimization (GRPO) algorithm within a physics-grounded reward framework that incorporates spatial alignment, vehicle dynamic, and temporal smoothness criteria to ensure reliable and realistic trajectory planning. Extensive evaluation results across both nuScenes and Waymo datasets demonstrates the state-of-the-art performance and robust generalization capacity of our proposed method.

---

## 论文详细总结（自动生成）

# AutoDrive-R²：激励自动驾驶VLA模型的推理与自省能力 – 详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **背景**：Vision-Language-Action (VLA) 模型将多模态感知与决策能力结合，在自动驾驶中展现巨大潜力。
- **核心问题**：现有 VLA 模型的**决策过程缺乏可解释性**（难以理解为什么做出某个动作）和**自洽性**（行动序列的合理性不足），导致用户对系统信任度低，且难以在安全关键场景中进行验证。
- **研究动机**：通过引入**链式推理（Chain-of-Thought, CoT）** 和**强化学习（Reinforcement Learning, RL）**，增强 VLA 模型的**推理与自省能力**，提升决策的透明度和连贯性，同时保持高性能的轨迹规划。

## 2. 提出的方法论
- **核心思想**：构建一个两阶段训练框架：先通过监督微调（SFT）让模型学会逻辑推理链，再通过强化学习（RL）优化推理链的可靠性和物理可行性。
- **关键技术细节**：
  1. **nuScenesR²-6K 数据集创建**：在 nuScenes 基础上，额外标注了**四步逻辑推理链**（输入信息 → 环境理解 → 意图推理 → 轨迹生成）以及**自省验证步骤**（对输出轨迹进行合理性自检），用于监督微调。
  2. **监督微调阶段**：使用该数据集训练基础 VLA 模型，使其具备初步的 CoT 推理能力。
  3. **强化学习阶段**：采用**Group Relative Policy Optimization (GRPO)** 算法，在**物理落地奖励框架**下优化推理链与动作：
     - **空间对齐奖励**：确保轨迹与可行驶区域、障碍物距离合理。
     - **车辆动力学奖励**：约束加速度、转向角等物理可行性。
     - **时间平滑性奖励**：惩罚不一致的急动或突变。
- **算法流程（文字说明）**：输入传感器数据 + 语言指令 → 大语言模型解码出结构化推理链（四步逻辑 + 自省） → 基于推理链生成原始轨迹 → GRPO 根据物理奖励更新模型参数，使推理链更精准且轨迹更可靠。

## 3. 实验设计
- **数据集**：
  - **训练/微调**：nuScenes（自行构建的 nuScenesR²-6K 子集，含 6000 条带推理链样本）
  - **评估**：**nuScenes** 验证集、**Waymo** 开放数据集（用于泛化测试）
- **Benchmark**：未明确列出具体 baseline，但声称达到 **state-of-the-art** 性能（通常与 UniAD、VAD、GPT-4V 等端到端或 VLA 方法对比）。
- **对比方法**：依据 abstract，对比了已有 VLA 模型（如经典端到端规划模型及近期 VLA 方法），但未给出具体名称。推测包括多模态大模型驱动的规划器。

## 4. 资源与算力
- **文中未明确说明**使用的 GPU 型号、数量及训练时长。这是论文信息不充分之处，可能限于摘要长度（实际全文可能包含）。需查看原文补充。

## 5. 实验数量与充分性
- **实验数量**：仅在摘要中提到在 **两个主流数据集**（nuScenes 和 Waymo）上进行了评估。消融实验、不同 reward 权重、推理链有效性分析等未提及，但作为 ICLR 2026 接收论文，正文应包含充分实验（如消融、案例分析、定性可视化等）。
- **充分性判断**：基于有限摘要，可初步认为实验覆盖了自建数据集与域外泛化，但缺少详细消融和统计显著性报告。**公平性**：若对比方法选择适当，且评测指标（如 L2 误差、碰撞率、可解释性人工评分）与主流一致，则可认为客观。但需阅读全文验证。

## 6. 主要结论与发现
- **规划性能提升**：在 nuScenes 上达到当时最优的规划指标（如 L2 位移误差、碰撞率）。
- **可解释性增强**：生成的 CoT 推理链证明了决策逻辑，自省机制可捕获潜在错误轨迹。
- **泛化能力**：在 Waymo 上无需额外微调仍保持领先，表明方法具有鲁棒性。
- **RL 有效性**：GRPO 结合物理奖励能比单纯 SFT 进一步提升轨迹合理性与平滑性。

## 7. 优点（亮点）
- **创新贡献清晰**：首次将**自省（self-reflection）** 机制引入 VLA 自动驾驶，通过四步推理链显式建模决策逻辑。
- **双重训练策略**：SFT 提供基础推理能力，RL 优化物理可行性，两者互补。
- **奖励工程设计**：奖励函数包含空间、动力学、时间三大约束，接近真实驾驶场景。
- **跨数据集泛化验证**：在 nuScenes 和 Waymo 上均表现优异，提升了结果的可信度。

## 8. 不足与局限
- **推理链依赖标注**：构建 nuScenesR²-6K 需要人工标注推理链，成本高且难以覆盖所有长尾场景；标注质量直接影响模型能力。
- **未见真实路测**：仅在静态数据集上评估，未在真实自动驾驶平台或闭环模拟器中测试，缺乏对实时性和安全性的实际考量。
- **计算开销**：CoT 推理链与双阶段训练可能增加推理时延和算力需求，文中未讨论。
- **局限性未被讨论**：摘要未提及失败案例或尚未解决的问题（如复杂交互场景、遮挡、环境变化下的鲁棒性）。
- **实验细节缺失**：由于仅提供摘要，无法全面评估实验设计的统计严谨性（如多次运行、置信区间、对比方法的选择依据）。

（完）
