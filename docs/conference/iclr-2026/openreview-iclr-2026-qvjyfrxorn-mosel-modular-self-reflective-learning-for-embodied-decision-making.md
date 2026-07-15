---
title: "MoSEL: Modular Self-Reflective Learning for Embodied Decision-Making"
title_zh: MoSEL：面向具身决策的模块化自省学习
authors: "Jr-Jen Chen, Yu-Chiang Frank Wang, Yilun Du"
date: 2025-09-17
pdf: "https://openreview.net/pdf?id=QVjyFrXOrn"
tags: ["query:ad"]
score: 8.0
evidence: 面向具身决策的模块化自省学习框架
tldr: 机器人自主执行长时序任务需要层次推理和动态适应。MoSEL提出模块化自省学习框架，结合层次规划、多模态基础模型（LVLM、视频扩散、逆动力学模型）和自反思机制。机器人通过自省从失败中学习，无需人类监督。实验证明该方法在长期任务中显著提升成功率和鲁棒性。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 机器人难以自主执行长时序任务，缺乏从自身经验学习的能力。
method: 组合层次规划与多模态基础模型，加入模块化自省学习环路。
result: 在复杂长期任务中成功率大幅提升，且无需人工标注。
conclusion: 自省学习可赋予机器人自主适应与持续改进能力。
---

## Abstract
Enabling robots to autonomously perform complex, long-horizon tasks remains challenging due to the need for hierarchical reasoning and dynamic adaptability. Humans overcome this by interacting with environment and learning from their own experience, which is infeasible for existing robots without human supervision. To enable similar capabilities in robotic agents, we introduce MoSEL, an modular self-reflective learning framework for robotic decision making. MoSEL combines hierarchical planning with multimodal foundation models, including LVLMs, video diffusion, and inverse dynamics models. These components work together to break down complex tasks, generate executable visual plans, and perform actions. We further introduce a modular self-reflective learning framework that autonomously identifies failures and iteratively refines policies with minimal human intervention. Evaluations on LIBERO-LONG and RoboTwin benchmarks demonstrate that MoSEL outperforms existing methods, achieving over $33\%$ and $46\%$ average performance improvements, respectively. Our results underscore the effectiveness of autonomous self-improvement and accurate failure identification in advancing robust robotic manipulation.

---

## 论文详细总结（自动生成）

# MoSEL：面向具身决策的模块化自省学习 — 详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：机器人难以自主执行复杂、长时程（long-horizon）任务，因为这类任务需要层次推理和动态适应能力。传统机器人缺乏从自身经验中学习的能力，往往需要人类监督或人工标注。
- **研究动机**：人类通过与环境的交互并从自身经验中学习来克服类似挑战。受此启发，研究旨在赋予机器人类似的自主自省学习能力，使其无需大量人工干预就能持续改进。
- **整体含义**：提出一种模块化自省学习框架，使机器人能够自主识别失败、迭代优化策略，从而在长期任务中显著提升成功率和鲁棒性。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：MoSEL 结合层次规划与多模态基础模型，并引入模块化自省学习循环，让机器人从失败中自主学习，无需人类监督。
- **关键技术细节**：
  - **层次规划**：将复杂长时程任务分解为子任务序列。
  - **多模态基础模型组合**：
    - 大视觉语言模型（LVLM）：用于理解任务语义和场景。
    - 视频扩散模型（Video Diffusion）：生成可执行的视觉计划。
    - 逆动力学模型（Inverse Dynamics Models）：将视觉计划映射为具体动作。
  - **模块化自省学习环路**：自主检测失败（如动作执行失败、规划错误），并利用失败信号迭代更新策略（例如调整子任务分解、修正动作生成），所需人工干预最小化。
- **算法流程（文字描述）**：
  1. 输入复杂任务指令 → LVLM 解析并分解为子任务。
  2. 视频扩散模型生成每个子任务的视觉计划（期望状态序列）。
  3. 逆动力学模型将视觉计划转化为具体机器人动作。
  4. 执行动作后，通过环境反馈（如传感器、视觉观察）检测是否成功。
  5. 若失败，自省模块分析失败类型（规划失败/执行失败），并自动调整对应模块参数或策略，重复步骤2-4直至成功或达到最大尝试次数。

## 3. 实验设计
- **数据集/场景**：
  - **LIBERO-LONG**：长期任务基准，包含复杂、多步骤操作场景。
  - **RoboTwin**：另一个具身操作基准（可能类似机器人双任务或多物体操作）。
- **对比方法**：未在摘要中明确列出具体对比方法，但声称“优于现有方法”，在 LIBERO-LONG 上平均性能提升超过 33%，在 RoboTwin 上提升超过 46%。
- **评价指标**：任务成功率（或平均性能分数），具体细节未提供。

## 4. 资源与算力
- **未明确说明**：摘要和元数据中未提及任何 GPU 型号、数量、训练时长等信息。无法判断采用的算力规模。

## 5. 实验数量与充分性
- **实验数量**：涉及两个标准基准，每个基准可能包含多个任务场景。但未说明具体任务数量或重复次数。
- **充分性与公平性**：
  - 提供了与现有方法的定量对比，性能提升幅度显著且一致。
  - 但缺少消融实验的详细描述（如只移除自省模块、只移除某个模型等），无法完全证明模块独立贡献。
  - 未提供统计学显著性检验（如多次运行的标准差）或跨不同机器人平台泛化实验。整体实验设计尚可，但客观性和完整性可进一步提升。

## 6. 主要结论与发现
- MoSEL 在 LIBERO-LONG 和 RoboTwin 上分别取得平均 33% 和 46% 的性能提升。
- 自主自我改进（self-improvement）和准确失败识别（accurate failure identification）是提升机器人鲁棒性的关键因素。
- 模块化自省学习可有效降低对人工监督的依赖，赋予机器人持续适应能力。

## 7. 优点
- **方法亮点**：创新性地将层次规划、多种多模态基础模型（LVLM、视频扩散、逆动力学）组合，并引入无需人工标注的自省反馈循环。
- **实验亮点**：在两个公开基准上取得大幅度性能提升，验证了方法的有效性。
- **实际意义**：减少人工干预，为实现可自主进化机器人提供了可行路径。
- **模块化设计**：各组件可独立升级或替换，具有良好的扩展性。

## 8. 不足与局限
- **实验覆盖有限**：仅在两个基准上验证，未涉及真实世界杂乱环境、动态障碍或物理接触不确定性。
- **偏差风险**：无法排除方法对特定任务或场景的过拟合风险；未报告任务失败的具体类别分布。
- **资源与成本未披露**：缺少算力细节，难以评估方法的可复现性和资源门槛。
- **与现有方法对比不完整**：未列出具体对比方法的名称和细节，使结果说服力降低。
- **理论分析缺失**：未提供自省收敛性证明或失败检测的理论保证。
- **应用限制**：可能高度依赖视觉输入质量和预训练基础模型的泛化能力，在低纹理或光照变化大的场景中退化风险。

（完）
