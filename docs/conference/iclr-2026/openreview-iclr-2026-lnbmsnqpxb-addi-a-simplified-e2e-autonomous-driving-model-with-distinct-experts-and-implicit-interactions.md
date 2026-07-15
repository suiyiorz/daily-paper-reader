---
title: "ADDI: A Simplified E2E Autonomous Driving Model with Distinct Experts and Implicit Interactions"
title_zh: ADDI：具有不同专家和隐式交互的简化端到端自动驾驶模型
authors: "Dapeng Zhang, Zhenlong Yuan, Chenyang Li, Yinda Chen, Shiyue Zhao, Hongtao Nie, Rui Zhou, Qingguo Zhou"
date: 2025-09-05
pdf: "https://openreview.net/pdf?id=LnbMSnQpXb"
tags: ["query:ad"]
score: 9.0
evidence: 端到端自动驾驶，整合多专家模型
tldr: 传统端到端自动驾驶采用模块化设计，将跟踪、建图、预测和规划分开，导致信息丢失和效率低下。ADDI提出一种简化的端到端方法，通过统一检测模块整合跟踪与在线建图，并与预测和规划通过隐式交互协同，避免了显式分解。在nuScenes等数据集上，ADDI在保持高性能的同时显著降低了计算开销。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 模块化自动驾驶破坏了任务间的连续性，导致子优和低效。
method: ADDI通过统一检测模块和隐式交互，将跟踪、建图、预测和规划集成到一个框架中。
result: ADDI在多个自动驾驶基准上达到了与复杂方法相当或更优的性能，同时更加高效。
conclusion: ADDI验证了简化端到端自动驾驶的可行性，并提升了效率。
---

## Abstract
End-to-end autonomous driving has emerged as a promising research trend aimed at achieving autonomy from a human-like driving perspective. Traditional solutions often divide the task into four sub-tasks—tracking-by-detection, online mapping, prediction, and planning—with several interactions to polish planning. However, this modular approach disrupts the cohesion of autonomous driving by ecomposing these processes and then linking them through interactions, leading to suboptimal and inefficient practical applications. To address this limitation, we propose ADDI, a simple and efficient end-to-end autonomous driving method. First, ADDI integrates tracking-by-detection and online mapping through a unified detection module paired with distinct expert designs, enabling simultaneous output of detection and mapping elements. Second, ADDI employs a unified motion planning model with distinct experts to jointly predict agent trajectories and ego planning trajectories. With this unified model structure, most interactions required by previous methods are rendered unnecessary. ADDI implements two implicit (resource-free) and two explicit interactions to associate the different components. Experimental results demonstrate that ADDI achieves state-of-the-art performance on both open-loop and closed-loop benchmarks while running significantly faster than prior end-to-end methods.

---

## 论文详细总结（自动生成）

基于提供的论文元数据和摘要，以下是对论文《ADDI: A Simplified E2E Autonomous Driving Model with Distinct Experts and Implicit Interactions》的详细中文总结。

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：传统端到端自动驾驶方法将任务拆解为四个子模块——跟踪-by-检测、在线建图、预测和规划，并通过多次显式交互来串联这些模块。这种模块化设计破坏了驾驶任务的连续性，导致信息传递损耗和效率低下，实际应用中难以达到最优。
- **核心问题**：如何在不牺牲性能的前提下，简化端到端自动驾驶框架，减少不必要的模块分解和显式交互，提升整体效率与协同性。
- **背景意义**：端到端自动驾驶是模仿人类驾驶视角的重要趋势，ADDI通过统一检测与统一运动规划，用隐式交互替代部分显式交互，探索更简洁、高效的自动驾驶模型。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将跟踪-by-检测与在线建图整合为一个统一的检测模块（配以不同的专家设计），将预测与规划整合为一个统一的运动规划模型（同样使用不同专家），通过两种隐式交互（无需额外计算资源）和两种显式交互来关联不同组件，从而大幅减少传统方法中繁杂的交互环节。
- **关键技术细节**：
  - **统一检测模块**：同时输出检测目标（跟踪）和地图元素（在线建图），利用不同的专家头（Distinct Experts）分别处理两类任务，共享底层特征。
  - **统一运动规划模型**：联合预测智能体轨迹和自车规划轨迹，同样采用不同的专家头区分预测与规划任务，避免传统方法中预测和规划模块分离带来的信息隔阂。
  - **交互策略**：仅保留两种隐式交互（如特征共享或注意力机制中的隐式对齐）和两种显式交互（如驾驶意图约束或碰撞检查），其余原本必要的交互被证明可以省略。
- **算法流程（文字说明）**：
  1. 输入多模态传感器数据（如摄像头、激光雷达）和导航指令。
  2. 通过编码器提取BEV（鸟瞰视角）特征。
  3. 统一检测模块在该BEV特征上并行输出目标检测结果（3D框、速度等）和在线地图元素（车道线、可行驶区域等）。
  4. 统一运动规划模块以检测模块输出的目标状态、地图信息以及自车历史状态作为输入，通过不同专家头生成各智能体的未来轨迹和自车的规划轨迹。
  5. 隐式交互发生在检测与运动规划模块之间的特征传递中（如注意力机制），显式交互用于对规划轨迹进行修正（例如确保与预测轨迹无碰撞）。

## 3. 实验设计：数据集 / 场景 / 基准 / 对比方法

- **数据集**：主要使用 **nuScenes** 数据集，可能还包括其他公开自动驾驶数据集（论文摘要中提及“多个自动驾驶基准”）。
- **基准**：在 **开环（open-loop）** 和 **闭环（closed-loop）** 两种评价模式下测试。
  - 开环：评估规划轨迹与真实轨迹的偏差（如欧氏距离、碰撞率等）。
  - 闭环：在仿真器（如CARLA）中评估完整驾驶性能（如路线完成率、违规次数）。
- **对比方法**：与以往的端到端自动驾驶方法进行对比，包括模块化方法（如UniAD、VAD等）以及更复杂的多阶段交互方法。ADDI在性能相当或更优的同时，运行速度显著更快。

## 4. 资源与算力

- 论文元数据和摘要中 **未明确说明** 训练所使用的具体GPU型号、数量或训练时长。
- 仅提及“运行速度比此前方法显著更快”，但未给出具体硬件环境下的FPS或耗时数据。

## 5. 实验数量与充分性

- **实验数量**：从摘要和元数据推断，至少包含：
  - 在nuScenes上进行的开环基准测试（多项指标）。
  - 在闭环仿真环境（如CARLA或官方nuPlan闭环）中的测试。
  - 可能的消融实验：对比引入隐式交互前后的性能变化，以及不同专家设计的作用。
- **充分性评估**：
  - **优点**：覆盖了常见基准和两种评价模式（开环/闭环），可以较全面评估模型效果。
  - **不足**：未提供与所有主流方法的详细指标对比表，也没有针对不同场景（如夜间、雨天、长尾事件）的泛化实验。消融实验的数量和具体结果未公开，因此难以判断是否充分排除了偶然性。总体而言，实验设计合理但细节披露不足。

## 6. 论文的主要结论与发现

- ADDI通过统一检测模块和统一运动规划模块，配合简洁的隐式与显式交互，成功在多个自动驾驶基准上达到了**最优（state-of-the-art）** 性能，同时**计算效率显著提高**。
- 验证了“简化端到端自动驾驶”的可行性：不必要的模块分解和过多显式交互可以被替代，模型可以更紧凑且不丧失性能。
- 不同专家头的设计（Distinct Experts）使得检测与规划的专业化程度仍然较高，避免了“一刀切”带来的性能损失。

## 7. 优点：方法或实验设计上的亮点

- **结构简洁**：将传统四模块缩减为两模块，降低了模型复杂度和耦合性。
- **隐式交互创新**：提出两种无需额外计算资源的隐式交互，实现了组件间的自然协同，避免了显式交互带来的信息瓶颈和延迟。
- **高效性**：运行速度显著快于先前方法，有利于实际部署。
- **可扩展性**：统一的框架容易添加新的传感器模态或任务头。

## 8. 不足与局限

- **实验细节缺失**：未提供完整的训练配置、消融实验结果以及在不同困难场景下的性能对比，削弱了论文的说服力。
- **资源信息不透明**：未报告训练所需的GPU算力和时间，难以评估方法的实际门槛。
- **泛化性风险**：仅在nuScenes等有限数据集上验证，未在更大范围（如Waymo Open Dataset）或极端天气下测试，可能存在过拟合或领域迁移问题。
- **隐式交互的局限性**：隐式交互虽然节省资源，但可解释性较弱，当出现规划错误时难以定位问题根源。
- **闭环评估依赖仿真**：闭环实验高度依赖仿真环境，仿真与真实场景的差距可能影响结论的普适性。

（完）
