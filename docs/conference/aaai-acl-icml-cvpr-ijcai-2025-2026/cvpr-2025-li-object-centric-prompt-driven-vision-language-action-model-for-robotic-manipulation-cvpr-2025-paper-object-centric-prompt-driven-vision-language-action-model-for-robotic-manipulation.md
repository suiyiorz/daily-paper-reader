---
title: Object-Centric Prompt-Driven Vision-Language-Action Model for Robotic Manipulation
title_zh: 以物体为中心的提示驱动视觉-语言-动作模型用于机器人操作
authors: "Li, Xiaoqi, Xu, Jingyun, Zhang, Mingxu, Liu, Jiaming, Shen, Yan, Ponomarenko, Iaroslav, Xu, Jiahui, Heng, Liang, Huang, Siyuan, Zhang, Shanghang, Dong, Hao"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Li_Object-Centric_Prompt-Driven_Vision-Language-Action_Model_for_Robotic_Manipulation_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 提示驱动的视觉-语言-动作模型用于机器人操作
tldr: 机器人操作中任务目标可通过多种模态传达，但语言可能含糊，图像可能过于详细。本文提出以物体为中心的提示驱动视觉-语言-动作模型，通过简单的2D视觉提示（如末端执行器姿态和接触方向）同时表达低级动作和高级规划。在多个操作任务上，该方法优于纯语言或纯图像方法，实现了更精确和灵活的操作。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1705, \"height\": 643, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1629, \"height\": 740, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1627, \"height\": 733, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1417, \"height\": 747, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1552, \"height\": 592, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 660, \"height\": 390, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1417, \"height\": 747, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 804, \"height\": 272, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-li-object-centric-prompt-driven-vision-language-action-model-for-robotic-manipulation-cvpr-2025-paper/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 863, \"height\": 263, \"label\": \"Table\"}]"
motivation: 现有机器人操作中多模态提示存在模糊或过细问题，缺乏统一表达。
method: 设计以物体为中心的2D视觉提示叠加在RGB图像上，同时编码低级动作和高级规划。
result: 在机器人操作基准上，该方法相比纯语言或纯图像输入取得了更高成功率。
conclusion: 基于视觉提示的方法为机器人操作提供了一种直观且有效的任务规约方式。
---

## Abstract
In robotic manipulation, task goals can be conveyed through various modalities, such as language, goal images, and goal videos. However, natural language can be ambiguous, while images or videos may offer overly detailed specifications. To address these challenges, we propose a novel approach using comprehensive multi-modal prompts that explicitly convey both low-level actions and high-level planning in a simple manner. Specifically, for each key-frame in the task sequence, our method allows for manual or automatic generation of simple and expressive 2D visual prompts overlaid on RGB images. These prompts represent the required task goals, such as the end-effector pose and the desired movement direction after contact. We develop a training strategy that enables the model to interpret these visual-language prompts and predict the corresponding contact poses and movement directions in SE(3) space. Furthermore, by sequentially executing all key-frame steps, the model can complete long-horizon tasks. This approach not only helps the model explicitly understand the task objectives but also enhances its robustness on unseen tasks by providing easily interpretable prompts. We evaluate our method in both simulated and real-world environments, demonstrating its robust manipulation capabilities.

---

## 论文详细总结（自动生成）

好的，以下是基于您提供的论文内容，按照要求生成的结构化、深入且客观的中文总结。

### 核心问题与整体含义（研究动机和背景）

- **核心问题**：在机器人操作任务中，如何有效且简洁地向机器人传达任务目标。现有主流方法存在明显缺陷：
    - **自然语言**：可能过于模糊或冗长，难以精确描述空间位置和动作细节。
    - **目标图像/视频**：包含大量与任务无关的背景信息，增加模型理解难度，且生成质量不稳定。
- **研究动机**：寻求一种既能精确表达低级动作（如抓取姿态、移动方向），又能清晰规划高级任务（如多步骤的长期任务）的、用户友好的目标表达方式。
- **整体含义**：本文提出一种**以物体为中心的、由视觉提示驱动的视觉-语言-动作模型**。通过使用简单、直观的2D“涂鸦”式视觉提示（叠加在RGB图像上），来统一表达机器人的“做什么”（接触点、姿态）和“怎么做”（接触后的移动方向），从而提升任务执行的精确性和鲁棒性。

### 论文提出的方法论

- **核心思想**：利用一系列带有颜色标记的2D视觉提示，以键帧序列的形式，明确表达每个子任务的具体目标。这些提示是“物体中心”的，意味着它们直接与要操作的物体关联，避免了无关信息的干扰。

- **关键技术细节**：
    1.  **视觉提示设计**：使用四种颜色的线条和点，叠加在RGB图像上：
        - **蓝色圆点**：表示接触点。
        - **红色线条**：表示末端执行器在接触时的z轴方向。
        - **绿色线条**：表示末端执行器在接触时的y轴方向（红绿线共同确定6D姿态）。
        - **黄色线条**：表示接触后的移动方向。
    2.  **输入格式**：模型同时接收带有视觉提示的RGB图像 \(I\) 和相应的文本语言提示 \(P\)。文本提示包含视觉提示的数字化信息（如接触点2D坐标、2D方向向量）。
    3.  **模型架构**：基于开源的视觉-语言-动作模型（VLA，如ManipLLM）构建。采用冻结预训练权重（如LLaMa、CLIP视觉编码器），仅微调注入的适配器和多模态投影模块，以保留预训练知识并提高训练效率。
    4.  **策略学习**：将3D姿态预测转化为语言建模任务，通过一系列从简到繁的“视觉-文本”输入对，逐步训练模型理解每种提示的物理含义。训练目标包含三个损失函数：
        - **文本监督损失 \(L_T\)**：将连续的3D方向向量离散化为100个bin，使用交叉熵损失监督模型输出正确的文本表示。
        - **正交性损失 \(L_O\)**：引入Gram-Schmidt损失，确保模型预测的末端执行器z轴和y轴方向正交，符合旋转矩阵的几何性质。
        - **投影损失 \(L_P\)**：将预测的3D方向向量反向投影回2D平面，与输入的2D方向提示计算余弦相似度损失，建立2D输入与3D输出的显式关联。
    5.  **推理交互**：支持用户手动绘制或自动生成（使用Grounding DINO检测物体，GPT-4选择方向）视觉提示。对于长时域任务，通过顺序执行一系列键帧提示，逐个完成子目标，从而完成整个任务。

### 实验设计

- **数据集与环境**：
    - **仿真环境**：SAPIEN模拟器，使用PartNet-Mobility数据集，包含约1500种不同的物体形状。
    - **真实环境**：Franka Emika机器人，配备Realsense 415相机。
- **基准任务**：涵盖多种基础操作，如拉抽屉、开门、开笔记本电脑盖等。也涉及长时域任务（如先拉门再推门）和真实世界任务（如打开垃圾桶、打开微波炉、擦拭桌子等）。
- **对比方法**：
    - **纯视觉模型**：Flowbot3D（基于点云的流预测）。
    - **语言条件模型**：ManipLLM（基于语言描述预测姿态）。
    - **目标图像条件模型**：Implicit3D（基于初始和最终状态点云预测姿态）。
    - **视觉提示条件模型**：RT-Trajectory（绘制整个末端执行器移动轨迹）。
    - **目标视频条件模型**：AVDC（生成任务视频并评估成功率）。

### 资源与算力

- 论文未明确说明模型训练所使用的**GPU型号、数量或具体训练时长**。
- 文中仅提及数据收集过程：在模拟器中，收集约10,000个训练样本耗费了**6-8小时**。

### 实验数量与充分性

- **实验数量**：较为充分。包括：
    1.  **与5种基线方法在15个任务上的对比实验**（表1）。
    2.  **消融实验**：分析不同提示类型（位置、z轴、y轴、移动方向）和有无视觉提示对性能的影响（表2）。
    3.  **鲁棒性分析**：测试模型对输入方向提示噪声的容忍度（图5）。
    4.  **真实世界实验**：在5个任务上分别进行多次（5-10次）测试（表3）。
    5.  **零样本泛化测试**：在测试集中包含未见过的物体类别。
    6.  **长期任务分解实验**：测试多步骤任务的完成能力。
- **充分性与公平性**：
    - **优点**：实验设计相对全面，涵盖了仿真与真实环境，并与多种主流方法（不同模态输入）进行了对比。消融实验设计合理，能有效验证各组件（不同提示、损失函数）的贡献。
    - **客观性**：对比实验中，所有方法使用相同的训练/测试分割，确保了公平性。但需注意，RT-Trajectory是作者复现的，可能存在细微差异。
    - **偏差风险**：仿真环境中的物体种类和操作相对固定，真实世界实验的物体和任务数量有限，结论的泛化性有待更大规模验证。

### 主要结论与发现

1.  **性能优越**：提出的CrayonRobo模型在绝大多数任务上，无论是使用吸盘还是平行爪，性能均显著优于所有基线方法（Flowbot3D, ManipLLM, Implicit3D, RT-Trajectory, AVDC）。
2.  **提示的有效性**：引入更多样化的提示（位置+方向+移动）能持续提升模型性能。多模态（视觉+语言）提示优于单一模态。
3.  **鲁棒性强**：模型对输入的方向提示噪声具有良好的容忍度（20%噪声下性能无明显下降），且能有效处理自动生成时可能引入的接触点偏差。
4.  **零样本迁移能力**：模型在未经过任何sim-to-real微调的情况下，在真实世界场景中成功执行了多种操作，展示了强大的零样本泛化能力。
5.  **长期任务潜力**：通过键帧序列分解，模型能有效完成长时域操作任务，且性能与单步任务相当。

### 优点

1.  **创新的人机交互方式**：提出的2D涂鸦式视觉提示非常直观、易用，允许用户灵活地指导机器人，降低了机器人编程和任务指定的门槛。
2.  **统一且精确的任务表达**：首次提出用一套简单的2D视觉提示同时编码“低级动作”（接触姿态）和“高级规划”（移动方向），解决了现有方法表达力不足或冗余的问题。
3.  **强大的泛化与鲁棒性**：通过设计合理的训练策略（多级输入对、投影损失等），模型展现出对未见任务和噪声输入的出色鲁棒性，这在实践中非常重要。
4.  **有效的长期任务分解框架**：将长时域任务分解为带有明确提示的键帧序列，是一种清晰且有效的解决思路。

### 不足与局限

1.  **缺乏避障能力**：作者明确指出，当前方法**无法直接处理避障问题**。虽然在结论中提及可以集成Curobo等运动规划库，但这并非方法固有的一部分。
2.  **真实实验规模有限**：真实世界的实验场景和物体种类相对较少（5个任务），每个任务的测试次数也有限（最多10次），结果的统计显著性可能不足。
3.  **依赖外部模型（自动生成）**：自动生成提示时，依赖Grounding DINO和GPT-4等外部模型，这些模型的质量和速度会直接影响整个系统的性能和效率。
4.  **计算资源信息缺失**：未提供模型训练的算力需求（GPU型号、数量、时间），不利于其他研究者进行成本评估和复现。
5.  **未覆盖所有操作类型**：论文中的任务主要集中在平移和特定接触姿态上。对于旋转动作（如旋钮），作者承认“移动方向”提示不适用，转而使用两个时间键帧，这增加了提示的复杂性。方法在处理更精细、更复杂的操作（如插入、装配）上的表现有待验证。

（完）
