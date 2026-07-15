---
title: "ACTIVE-o3 : Empowering MLLMs with Active Perception via Pure Reinforcement Learning"
title_zh: ACTIVE-o3：通过纯强化学习赋能多模态大语言模型的主动感知
authors: "Muzhi Zhu, Hao Zhong, Canyu Zhao, Zongze Du, Mingyu Liu, Zheng Huang, Anzhou Li, Hao Chen, Cheng Zou, Jingdong Chen, Ming Yang, Chunhua Shen"
date: 2026-04-30
pdf: "https://openreview.net/pdf/1c8a11946e536a1970c8f20558beeae012dfb898.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 多模态大模型的主动感知与强化学习
tldr: 多模态大语言模型在主动感知方面存在效率低、区域选择不准确问题。提出Active-o3框架，通过纯强化学习训练MLLM进行主动视觉感知，系统定义MLLM主动感知任务，在效率与准确性上超越GPT-o3的缩放策略。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 多模态大语言模型缺乏主动感知能力，现有策略效率低且不准确。
method: 提出强化学习框架Active-o3，直接优化多模态大语言模型的主动感知策略。
result: 在主动感知任务上显著提升效率与准确性。
conclusion: 强化学习可有效赋予多模态大语言模型主动感知能力。
---

## Abstract
Active vision, also known as active perception, refers to actively selecting where and how to look in order to gather task-relevant information. It is a critical component of efficient perception and decision-making in humans and advanced embodied agents. With the rise of Multimodal Large Language Models (MLLMs) as central planners in robotic systems, the lack of methods for equipping MLLMs with active perception has become a key gap. We first provide a systematic definition of MLLM-based active perception tasks and show that GPT-o3's zoom-in strategy can be viewed as a special case, though it suffers from low efficiency and inaccurate region selection. To address these issues, we propose Active-o3, a reinforcement learning framework built on GRPO that equips MLLMs with active perception capabilities. Leveraging a modular sensing-action design and a dual-form reward, Active-o3 autonomously learns efficient and stable region selection strategies without explicit supervision. We further establish a comprehensive benchmark covering both open-world tasks (small/dense-object grounding) and domain-specific scenarios (remote sensing, autonomous driving, interactive segmentation). Experimental results demonstrate that Active-o3 significantly enhances active perception capabilities compared to Qwen2.5-VL-CoT. Moreover, we show that our RL framework not only preserves the model’s general understanding ability but can also serve as a proxy task for leveraging perception data, further improving performance on benchmarks such as RealWorldQA. We hope that our work can provide a simple codebase and unified evaluation protocol to facilitate future research on active perception with MLLMs.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：多模态大语言模型（MLLMs）作为机器人系统中央规划器时，缺乏主动感知能力——即主动选择“看哪里”和“如何看”以高效获取任务相关信息的能力。现有方法（如 GPT-o3 的 zoom-in 策略）虽然是一种特殊形式，但存在效率低、区域选择不准确的问题。
- **研究动机**：主动感知是人类和具身智能体高效感知与决策的关键组成部分。随着 MLLMs 在机器人领域的广泛应用，赋予其主动感知能力已成为一个关键空白。
- **背景意义**：论文首次系统性地定义了基于 MLLM 的主动感知任务，并指出该领域亟需统一规范和高效训练方法。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：通过纯强化学习（RL）框架 Active-o3，让 MLLM 自主学习主动感知策略，无需人工指定的显式监督信号。
- **关键技术细节**：
  - **框架基础**：基于 GRPO（Group Relative Policy Optimization）构建，是一种针对 MLLM 的强化学习算法。
  - **模块化感知-行动设计**：将感知过程分解为“感知模块”和“行动模块”，增强泛化能力。
  - **双形式奖励（dual-form reward）**：同时考虑任务完成准确性和区域选择效率，鼓励模型在最少视觉采样下达成目标。
  - **学习过程**：模型通过与环境交互，自主学习如何通过缩放（zoom-in）操作选择信息量最丰富的局部区域，无需人工标注区域优先级。
- **与现有方法的关系**：GPT-o3 的 zoom-in 策略被视为该方法的一个特例，但 Active-o3 通过 RL 优化避免了人工设计的低效规则。

## 3. 实验设计：数据集、基准和对比方法
- **数据集/场景**：涵盖两类场景：
  - **开放世界任务**：小物体定位、密集物体定位（如复杂场景中的微小目标）。
  - **特定领域场景**：遥感图像、自动驾驶、交互式分割。
- **Benchmark**：论文建立了综合基准，包含上述多个场景的标准化评估协议。
- **对比方法**：主要与 **Qwen2.5-VL-CoT**（结合思维链的多模态模型）进行比较。此外，在 RealWorldQA 上评估了通用理解能力，验证 RL 训练未退化模型原有能力。
- **评估指标**：主动感知效率（如平均缩放次数）、区域选择准确性（最终定位精度）、以及通用任务性能（RealWorldQA 准确率）。

## 4. 资源与算力
- **文中未明确说明**：论文文本（摘要和元数据）未提及具体使用的 GPU 型号、数量或训练时长。需要指出这一信息缺失，但根据 ICML 常见工作量可推测使用了 A100 或 H100 级别的集群。

## 5. 实验数量与充分性
- **实验组数**：涵盖了 5 个具体场景（小物体、密集物体、遥感、自动驾驶、交互式分割），并在 RealWorldQA 上做了泛化测试。此外，可能有消融实验（如去掉双形式奖励、使用不同 RL 算法等），但摘要未列举具体数量。
- **充分性评价**：
  - **优点**：场景类型多样，从通用到专业领域，覆盖面较广；对比基线当前（Qwen2.5-VL-CoT）具有代表性。
  - **不足**：仅对比了一个基线模型（Qwen2.5-VL-CoT），未与更多 MLLM（如 GPT-4V, Gemini 等）比较；也未与专门的主动感知方法（非 MLLM 的）对比。消融实验和统计显著性检验未提及。

## 6. 论文的主要结论与发现
- **主要结论**：Active-o3 显著提升了 MLLM 的主动感知能力，相比 Qwen2.5-VL-CoT 在效率和准确性上均有大幅改善。
- **额外发现**：RL 框架不仅不会破坏模型的通用理解能力，还可作为代理任务利用感知数据，进一步提升模型在 RealWorldQA 等基准上的性能。
- **贡献总结**：提供了首个系统性的 MLLM 主动感知定义、训练框架和统一评估协议，为后续研究奠定了基础。

## 7. 优点：方法或实验设计上的亮点
- **方法创新**：纯强化学习范式无需人工标注区域偏好，完全由任务奖励驱动，具有通用性和可扩展性。
- **模块化设计**：感知-行动解耦，便于迁移到不同感知模态（如语音、触觉）。
- **双形式奖励**：同时优化正确性和效率，避免模型盲目放大成本。
- **实验设计亮点**：包含开放世界和专业领域，验证了方法的广泛适用性；使用 RealWorldQA 检查通用能力保留，防止过拟合到特定场景。
- **开源精神**：作者宣称将提供简单代码库和统一评估协议，有利于社区复现与推进。

## 8. 不足与局限
- **实验覆盖不足**：
  - 基线对比单一（仅 Qwen2.5-VL-CoT），缺乏与更多主流 MLLM 或传统主动视觉方法的比较。
  - 未在真实机器人平台或动态环境中验证。
- **偏差风险**：
  - 任务定义中可能隐含对“缩放操作”的偏好，未探索其他主动感知动作（如移动、旋转）。
  - 奖励设计可能存在未考虑的长尾情况（如极端稀疏目标）。
- **应用限制**：
  - 训练依赖 GRPO 算法，计算成本较高，算力资源未公开可能影响可复现性。
  - 当前框架针对静态图像，视频流或多模态同步感知场景未测试。
- **信息缺失**：全文未公开详细实验参数、消融结果表格，仅依赖摘要描述，完整性受限。

（完）
