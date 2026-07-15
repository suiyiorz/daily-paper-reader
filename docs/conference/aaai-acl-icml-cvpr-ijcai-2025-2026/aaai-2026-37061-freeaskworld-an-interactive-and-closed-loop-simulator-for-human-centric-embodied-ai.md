---
title: "FreeAskWorld: An Interactive and Closed-Loop Simulator for Human-Centric Embodied AI"
title_zh: FreeAskWorld：一个面向人类中心具身AI的交互式闭环仿真器
authors: "Yuhang Peng, Yizhou Pan, Xinning He, Jihaoyu Yang, Xinyu Yin, Han Wang, Xiaoji Zheng, Chao Gao, Jiangtao Gong"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/37061/41023"
tags: ["query:ad"]
score: 8.0
evidence: 具身智能仿真平台
tldr: 针对现有仿真平台难以模拟复杂人类中心社会行为的局限，提出FreeAskWorld交互式仿真框架，集成大语言模型进行高层行为规划和语义交互。框架支持可扩展的逼真人机仿真，并扩展经典视觉语言导航任务为语义丰富的方向询问设置。验证了框架在多样具身任务中的有效性。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37061/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1786, \"height\": 771, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37061/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 747, \"height\": 536, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37061/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1627, \"height\": 747, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37061/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 745, \"height\": 503, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37061/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 885, \"height\": 527, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37061/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 867, \"height\": 315, \"label\": \"Table\"}]"
motivation: 现有仿真平台缺乏对人类中心社会行为的建模，难以支持复杂的具身AI研究。
method: 提出FreeAskWorld框架，利用大语言模型进行高层行为规划与语义交互，构建模块化数据生成流水线。
result: 在视觉语言导航任务上验证了框架的有效性，生成了语义丰富的方向询问数据集。
conclusion: 该仿真器为人类中心具身AI研究提供了可扩展的闭环仿真环境。
---

## Abstract
As embodied intelligence emerges as a core frontier in artificial intelligence research, simulation platforms must evolve beyond low-level physical interactions to capture complex, human-centered social behaviors. We introduce FreeAskWorld, an interactive simulation framework that integrates large language models (LLMs) for high-level behavior planning and semantically grounded interaction, informed by theories of intention and social cognition. Our framework supports scalable, realistic human-agent simulations and includes a modular data generation pipeline tailored for diverse embodied tasks.To validate the framework, we extend the classic Vision-and-Language Navigation (VLN) task into a semantically enriched Direction Inquiry setting, wherein agents can actively seek and interpret navigational guidance. We present and publicly release FreeAskWorld, a large-scale benchmark dataset comprising reconstructed environments, six diverse task types, 16 core object categories, 63,429 annotated sample frames, and more than 17 hours of interaction data to support training and evaluation of embodied AI systems. We benchmark VLN models, and human participants under both open-loop and closed-loop settings. Experimental results demonstrate that models fine-tuned on FreeAskWorld outperform their original counterparts, achieving enhanced semantic understanding and interaction competency. These findings underscore the efficacy of socially grounded simulation frameworks in advancing embodied AI systems toward sophisticated high-level planning and more naturalistic human-agent interaction.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义

- **研究动机**：现有具身AI仿真平台主要关注底层物理交互（如碰撞避免、路径规划），缺乏对复杂人类中心社会行为的建模，例如动态社交互动、多轮对话、意图推理等。经典视觉语言导航（VLN）任务存在三个局限：静态单次指令、缺乏社交意图建模、仿真环境缺乏动态人类和社交元素。
- **整体含义**：提出**FreeAskWorld**——一个集成大语言模型（LLM）的交互式闭环仿真框架，用于模拟高保真的人类-智能体社会交互，并通过扩展VLN任务为方向询问任务，验证社交交互对导航能力的提升。论文旨在弥合底层物理仿真与高层社交规划之间的鸿沟，推动具身AI向更自然的人机交互发展。

## 2. 论文提出的方法论

- **核心思想**：利用LLM进行高层行为规划、语义指令生成和自然人行为模拟；结合Unity引擎实现逼真的3D环境、动态行人、车辆和天气系统；构建闭环交互流水线，使智能体能够主动寻求信息并实时调整计划。
- **关键技术细节**：
  - **模拟器设计**：
    - **人群模拟模块**：通过两阶段生成角色档案（年龄、文化、职业等）和日程表；基于MotionX动画库驱动SMPL-X骨架；利用LLM生成符合人格和地理背景的导航风格（如地标使用、方向类型、距离描述、语句长度）。
    - **外观变化**：方法1：使用多模态大模型基于UV映射和语义档案生成纹理，并随机修改SMPL-X形状参数；方法2：利用Synbody数据集生成更逼真的带服装鞋帽的模型。
    - **其他功能**：2D占用热图生成（基于体素碰撞采样）、动态天气和交通仿真、基于A*和社交力模型的机器人运动规划、WebSocket同步闭环架构。
  - **数据生成流水线**：初始化环境随机化 → 智能体搜索附近人类并请求导航 → LLM生成类人指令 → 智能体使用社交合规导航策略前往目标 → 若超时则再次询问 → 成功后记录各模态数据。
  - **方向询问任务**：扩展VLN，智能体可主动发起询问（计入NDI指标），评估自我评估、信息寻求和动态适应能力。
- **公式/算法**：未给出具体公式，但使用A*全局规划+社交力模型局部避障，LLM通过提示工程生成指令。

## 3. 实验设计

- **数据集与场景**：
  - 自建**FreeAskWorld数据集**：包括室内/室外连续场景，提供全景RGB、深度、语义分割、2D/3D边界框、占用热图、对话历史、轨迹等，含63,429帧标注、17小时交互数据。
  - 对比现有VLN数据集：Talk2Nav、R2R、REVERIE、ScaleVLN、NavRAG、GSA-R2R、HA-R2R、NaVid、DynamicVLN、VLN-Video。
- **Benchmark**：
  - **开环评估**：在FreeAskWorld开环测试集上直接评估（使用L2误差等）。
  - **闭环评估**：在模拟器内闭环运行，每100步或碰撞后终止，指标包括TL、SR、SPL、NE、OSR、ONE、NDI。
- **对比方法**：
  - **人类基线**：4名实验者（2人只使用初始指令，2人可追问），作为上限参照。
  - **ETPNav**（层次化拓扑规划+跨模态Transformer+避障启发式）及其在FreeAskWorld微调版本**ETPNav-FT**。
  - **BEVBert**（基于混合拓扑-度量地图的多模态预训练）及其微调版本**BEVBert-FT**。

## 4. 资源与算力

- 论文明确提到：模型运行于**RTX 3080**显卡上，仿真器运行于**RTX 3060**显卡上。但未说明训练时长、总GPU数量、数据生成耗时等具体算力消耗。也未提及微调时的完整计算预算。因此算力细节不充分。

## 5. 实验数量与充分性

- **实验组数**：
  - 开环实验：对比原始模型与微调模型在开环测试集上的误差。
  - 闭环实验：人类基线（两种策略）、4个模型变体（原始+微调）在闭环模拟器中测试，每个episode多次重复取平均。
  - 数据集验证：通过人工校验指令与目标的对应性（定性）。
- **充分性评价**：
  - **优点**：同时提供了开环和闭环两组评估，且包含人类基线作为上限，揭示了模型与人类的巨大差距，具有启示性。
  - **不足**：
    1. 仅对比了两种深度模型（ETPNav、BEVBert），缺乏更多主流VLN模型的对比（如VLN-BERT、HAMT等）。
    2. 微调数据仅来源于自建数据集，未在标准VLN数据集上评测迁移/泛化能力。
    3. 人类基线只有4名实验者，样本量较小，可能引入个体差异。
    4. 未进行消融实验（如去掉LLM指令生成、不使用社交力模型、不同外观变化方法等），难以量化各组件的贡献。
    5. 闭环实验中微调模型SR仍为0，说明任务极具挑战，但论文倾向于将失败归因于低层导航能力不足，缺少对失败原因的深入分析（如归因于碰撞、超时还是决策错误）。
  - **总体**：实验设计合理、指标完整，但规模有限，可进一步强化公平性和覆盖度。

## 6. 论文的主要结论与发现

- **社交交互提升导航**：在方向询问任务中，允许追问的人类基线成功率从40.2%升至82.6%，证明主动信息获取对导航有显著帮助。
- **微调有效性**：在FreeAskWorld上微调后的ETPNav-FT和BEVBert-FT在开环和闭环指标上均优于原始版本（L2误差降低约50%），表明数据集对改善语义理解和交互能力有用。
- **现有模型局限**：即使微调，闭环SR仍为0，说明当前VLN模型在动态社交导航、长期规划、抽象推理和记忆等方面与人类差距巨大，尤其在高层次决策上存在瓶颈。
- **交互作为额外信息模态**：论文强调有意图的结构化交互不仅是社交信号，更是智能体获取静态感知无法提供的信息的关键路径，凸显了社交仿真在具身AI中的根本价值。

## 7. 优点

- **方法论创新**：将LLM引入仿真器的高层行为规划，实现了可扩展、类人的社交交互生成，超越了传统基于规则或低层物理模型的方法。
- **任务设计新颖**：方向询问任务拓展了VLN范式，使智能体能够主动寻求帮助，评估自我认知和适应能力，更贴近真实人机协作场景。
- **数据集质量高**：提供了多模态、大规模、含动态元素和社交交互的数据集（63K帧、17小时），且包含六种合成数据类型，支持多种下游任务（导航、预测、人机交互）。
- **实验对比全面**：同时对比人类和多种模型，闭合和开环双设置，指标涵盖导航效率、成功率、误差、询问次数等。
- **开源与可复现**：提供了代码和数据集，并设计了基于WebSocket的同步闭环架构，便于后续研究。

## 8. 不足与局限

- **实验规模有限**：只评估了两种模型，缺少更多基线；微调仅使用自建数据集，未测试在标准VLN benchmark（如R2R测试集）上的迁移效果；人类基线实验者数量少，结果可能不稳定。
- **缺乏消融实验**：未分析各模块（LLM指令生成、社交力模型、外观变化、天气系统等）对最终性能的独立贡献，难以指导后续优化。
- **闭环成功率低**：微调模型SR为0，论文未深入剖析失败原因（碰撞、超时比例等），也未提出改进方案，任务难度可能过高，但未与现有任务难度做对比。
- **可解释性与偏差风险**：LLM生成的指令风格受训练数据影响，可能引入刻板印象（如性别导航风格差异）；场景均为合成数据，Sim2Real泛化性未验证。
- **计算资源不详**：训练数据生成的算力消耗、LLM推理延迟等未报告，影响实际部署的可行性评估。
- **应用限制**：当前仅聚焦于方向询问，论文中提到的未来任务（协商、信任构建等）尚未实现；仿真环境基于Unity，与视觉导航社区常用的Habitat/Matterport3D不直接兼容，迁移成本高。

（完）
