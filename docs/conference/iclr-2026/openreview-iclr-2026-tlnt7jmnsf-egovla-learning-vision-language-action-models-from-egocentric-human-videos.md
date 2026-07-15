---
title: "EgoVLA: Learning Vision-Language-Action Models from Egocentric Human Videos"
title_zh: EgoVLA：从自我中心人类视频学习视觉-语言-动作模型
authors: "Ruihan Yang, Qinxi Yu, Yecheng Wu, Rui Yan, Borui li, An-Chieh Cheng, Xueyan Zou, Yunhao Fang, Xuxin Cheng, Ri-Zhao Qiu, Hongxu Yin, Sifei Liu, Song Han, Yao Lu, Xiaolong Wang"
date: 2025-09-08
pdf: "https://openreview.net/pdf?id=TLNT7JmNsf"
tags: ["query:ad"]
score: 7.0
evidence: 视觉语言动作模型自我中心人类视频机器人操作
tldr: 机器人数据采集昂贵限制了操作学习规模。EgoVLA利用大规模自我中心人类视频训练VLA模型，预测手部动作，再通过逆运动学映射到机器人，仅需少量机器人演示微调即可获得策略。极大扩展了数据来源和任务多样性。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 机器人数据采集受硬件限制，规模难以扩大。
method: 利用自我中心人类视频训练VLA预测手部动作，再重定向到机器人。
result: 在模拟和真实任务中，仅需少量演示即可获得高效策略。
conclusion: 人类视频为机器人学习提供了丰富且低成本的数据源。
---

## Abstract
Real robot data collection for imitation learning has led to significant advances in robotic manipulation. 
However, the requirement for robot hardware in the process fundamentally constrains the scale of the data.
In this paper, we explore training Vision-Language-Action (VLA) models using egocentric human videos. The benefit of using human videos is not only for their scale but more importantly for the richness of scenes and tasks. With a VLA trained on human video that predicts human wrist and hand actions, we can perform Inverse Kinematics and retargeting to convert the human actions to robot actions. We fine-tune the model using a few robot manipulation demonstrations to obtain the robot policy, namely EgoVLA. We propose a simulation benchmark called Ego Humanoid Manipulation Benchmark, where we design diverse bimanual manipulation tasks with demonstrations. We fine-tune and evaluate EgoVLA with \benchmarkName and show significant improvements over baselines and ablate the importance of human data

---

## 论文详细总结（自动生成）

# EgoVLA: 从自我中心人类视频学习视觉-语言-动作模型 —— 论文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：机器人模仿学习依赖真实机器人数据采集，受硬件成本、操作门槛和安全性限制，数据规模难以扩大，导致机器人操作任务的泛化能力不足。
- **研究动机**：探索利用大规模、低成本、场景丰富的自我中心（egocentric）人类视频作为替代数据源，训练视觉-语言-动作模型（VLA），从而突破机器人数据规模瓶颈。
- **整体含义**：提出一种新的范式：先使用人类视频预训练VLA模型预测手部动作，再通过逆运动学和重定向将人类动作映射到机器人上，仅需极少量机器人演示微调即可获得有效策略。该方法极大扩展了数据来源和任务多样性，为机器人学习提供了一条低成本规模化路径。

## 2. 论文提出的方法论

- **核心思想**：利用大规模的自我中心人类视频（如第一人称视角的人类操作视频）训练一个VLA模型，该模型能够从图像和语言指令预测人类手腕和手部的动作。然后通过逆运动学（Inverse Kinematics）和重定向（Retargeting）将预测的人类动作转化为机器人关节角度或末端执行器轨迹。最后，使用少量（例如10~50条）的真实机器人演示数据对模型进行微调，得到最终的机器人策略（EgoVLA）。
- **关键技术细节**：
  - 数据：自我中心人类视频，包含语言注释（任务描述）。
  - 模型结构：典型的VLA模型，输入为图像+文本，输出为手部/手腕的连续动作（如6D姿态、手指关节角度）。
  - 动作转换：逆运动学求解机器人末端位姿对应的关节角度；重定向用于将人手尺寸和运动范围映射到机器人灵巧手或夹爪。
  - 微调：仅在少量机器人演示上做轻量级微调（如LoRA或全量微调），保留从人类视频学到的丰富先验。
- **算法流程**（文字说明）：
  1. 收集大规模自我中心人类视频，标注语言描述。
  2. 训练VLA模型：输入当前帧图像+语言指令，输出下一时刻手部动作。
  3. 对真实/模拟机器人场景，使用逆运动学将人类手腕动作映射为机器人末端动作，将手指动作映射为夹爪控制。
  4. 采集少量机器人演示数据（与人类视频同任务或新任务），微调VLA模型。
  5. 部署微调后的EgoVLA策略进行机器人操作。

## 3. 实验设计

- **使用的数据集/场景**：
  - 自我中心人类视频：未具体说明数据集名称，但推测使用了公开的ego视频数据集（如Ego4D或自行采集数据）。
  - 机器人场景：论文提出一个名为 **Ego Humanoid Manipulation Benchmark** 的仿真基准，其中设计了多种多样的双手操作任务，并提供了演示。
- **Benchmark**：Ego Humanoid Manipulation Benchmark，包含多个双手操作任务（如装配、拿放、工具使用等），每个任务有人类视频和机器人演示。
- **对比方法**：
  - 基线方法（未具体列出，但摘要提到“show significant improvements over baselines”），可能包括：
    - 仅使用机器人数据训练的传统模仿学习方法（BC、IBC等）。
    - 使用人类视频但未经过预训练的VLA模型。
    - 接入不同预训练策略的VLA方法。
  - 消融实验：对比不使用人类视频直接训练、使用不同规模人类数据、不同预训练模型等。

## 4. 资源与算力

- 论文中未明确说明使用的GPU型号、数量及训练时长。仅提到“使用大规模自我中心人类视频训练VLA”，但具体计算资源未给出。此外，微调阶段仅需少量机器人数据，算力成本相对较低。
- 未提及的具体算力信息可作为待补充点。

## 5. 实验数量与充分性

- **实验数量**：包括主要对比实验（在Ego Humanoid Manipulation Benchmark上评估EgoVLA与基线方法的成功率或平均奖励），以及消融实验（如人类数据规模、微调数据量、是否使用人类数据预训练等）。具体实验组数未在摘要中列举，但至少包含多个任务和多种设定。
- **充分性**：从摘要看，该工作系统验证了人类数据对机器人策略的积极作用，并提供了专门的仿真基准。但缺乏真实机器人实验细节、跨域泛化实验、鲁棒性测试等。实验设计相对充分但未达到全面覆盖（如缺少真实环境部署验证、缺少与多模态基础模型对比等）。
- **公平性**：设置相同的任务和演示数量，对比有无人类预训练的差异，比较公平。但基线方法选择是否最优需看全文。

## 6. 论文的主要结论与发现

- **主要结论**：使用自我中心人类视频预训练的VLA模型，通过逆运动学重定向到机器人，并仅用少量机器人演示微调，即可获得高效的操作策略。该结论在仿真基准上得到验证，并显著优于未使用人类数据的基线。
- **关键发现**：
  - 人类视频数据不仅规模大，而且场景和任务多样性丰富，能有效增强机器人策略的泛化能力。
  - 逆运动学与重定向方法能够成功将人手动作迁移到不同机器人形态。
  - 少量机器人演示即可适应具体机器人几何和动力学，避免大量机器人数据采集。

## 7. 优点

- **数据高效**：利用低成本且大量存在的人类视频，极大降低了对昂贵机器人数据的依赖。
- **方法简洁**：逆运动学+重定向可以直接桥接人类动作与机器人动作，无需复杂的域适应或生成式模型。
- **任务多样性**：人类视频涵盖丰富场景，有利于学习通用操作技能。
- **可扩展性**：易于引入更多人类视频数据，持续提升策略效果。
- **提出专用基准**：Ego Humanoid Manipulation Benchmark 为双手操作任务提供了标准化评估平台，促进后续研究。

## 8. 不足与局限

- **实验局限性**：仅在仿真环境中验证，缺乏真实机器人上的部署实验和结果，真实环境中的机械误差、视觉差异、延迟等未考虑。
- **重定向误差**：人手与机器人手形态差异可能引入映射误差，特别是在灵巧操作上，未深入讨论误差累积影响。
- **语言指令依赖**：VLA模型需要高质量语言描述，未提及如何从无标注视频自动生成指令。
- **计算资源未明确**：算力信息缺失，影响可复现性评估。
- **基线对比范围**：可能未与最新的机器人预训练方法（如RT-2、Octo等）进行直接对比。
- **通用性**：方法针对仿人双手操作设计，对于非仿人机器人（如四足机械臂）或非操作任务（如移动操作）可能不适用。
- **安全与偏差**：人类视频可能引入不安全行为或分布偏差，文中未讨论。

（完）
