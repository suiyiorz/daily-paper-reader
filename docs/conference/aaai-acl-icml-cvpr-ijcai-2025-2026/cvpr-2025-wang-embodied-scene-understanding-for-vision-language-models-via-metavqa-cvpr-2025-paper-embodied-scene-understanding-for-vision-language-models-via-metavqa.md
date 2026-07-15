---
title: Embodied Scene Understanding for Vision Language Models via MetaVQA
title_zh: 基于MetaVQA的视觉语言模型具身场景理解
authors: "Wang, Weizhen, Duan, Chenda, Peng, Zhenghao, Liu, Yuxin, Zhou, Bolei"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Wang_Embodied_Scene_Understanding_for_Vision_Language_Models_via_MetaVQA_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 面向视觉语言模型作为具身智能体的场景理解基准
tldr: 视觉语言模型在具身AI代理方面具有潜力，但缺乏标准化的闭环评估基准。本文提出MetaVQA，一个综合基准，通过视觉问答和闭环模拟评估VLM的空间推理和序列决策能力。该基准利用Set-of-Mark提示和来自nuScenes和Waymo的真值标注，自动生成丰富的交通场景问答对，促进面向对象和上下文丰富的指令理解。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1785, \"height\": 472, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 854, \"height\": 383, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 862, \"height\": 346, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1021, \"height\": 563, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 861, \"height\": 406, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1804, \"height\": 805, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1802, \"height\": 658, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 853, \"height\": 312, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 401, \"height\": 142, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 397, \"height\": 163, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 801, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-wang-embodied-scene-understanding-for-vision-language-models-via-metavqa-cvpr-2025-paper/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 849, \"height\": 449, \"label\": \"Table\"}]"
motivation: 缺乏标准化闭环基准来评估VLM作为具身智能体的空间推理和决策能力。
method: 构建MetaVQA基准，利用Set-of-Mark提示和真实世界交通场景数据自动生成VQA对和闭环评估。
result: MetaVQA提供了全面的评估框架，揭示了VLM在具身场景中的优势和不足。
conclusion: MetaVQA填补了VLM在具身场景理解评估方面的空白，有助于推进该领域研究。
---

## Abstract
Vision Language Models (VLMs) demonstrate significant potential as embodied AI agents for various mobility applications. However, a standardized, closed-loop benchmark for evaluating their spatial reasoning and sequential decision-making capabilities is lacking. To address this, we present MetaVQA: a comprehensive benchmark designed to assess and enhance VLMs' understanding of spatial relationships and scene dynamics through Visual Question Answering (VQA) and closed-loop simulations. MetaVQA leverages Set-of-Mark prompting and top-down view ground-truth annotations from nuScenes and Waymo datasets to automatically generate extensive question-answer pairs based on diverse real-world traffic scenarios, ensuring object-centric and context-rich instructions. Our experiments show that fine-tuning VLMs with the MetaVQA Dataset significantly improves their embodied scene understanding, which is evident not only in improved VQA accuracy but also in emerging safety-aware driving maneuvers. In addition, the learning exhibits strong transferability from simulation to real-world observation. The project webpage is at https://metadriverse.github.io/metavqa.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：视觉语言模型（VLM）在具身智能体（如自动驾驶、机器人控制）中展现出潜力，但缺乏一个标准化、闭环的基准来评估其空间推理和序列决策能力。现有基准（如DriveLM、ELM）采用异质化的对象引用方式（像素坐标、数值型空间信息），与人类自然语言习惯不一致，导致性能诊断困难；同时，评估多停留在开环VQA任务上，缺乏交互式闭环评估，且安全关键场景覆盖不足。
- **研究意义**：构建一个统一的、可零样本评估的基准，既能诊断VLM的具身场景理解能力，又能通过微调提升其性能，并验证知识从仿真到真实世界的可迁移性。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：通过**Set-of-Mark (SoM) 提示**和**程序化问答生成**，构建大规模VQA数据集，并配合**闭环仿真**评估VLM的具身场景理解。
- **关键技术细节**：
  - **场景聚合**：从nuScenes（真实RGB图像）和Waymo Open Motion Dataset（WOMD，无RGB，需重建）提取场景图，并使用MetaDrive仿真器重建WOMD场景的数字孪生。
  - **Set-of-Mark注释**：对真实图像（投影3D边界框）和仿真图像（利用实例分割）中的每个目标对象添加2D边界框和数字标签，便于VLM进行视觉接地。
  - **问答生成**：基于场景图，针对30种问题类型（分为空间、具身、接地三大超类），通过模板和程序化查询生成多项选择问题，包含正确答案和干扰项，并附解释字段用于训练。所有问题统一使用自然语言短语（如“front”、“medium distance”）描述空间关系，避免数值坐标。
  - **闭环评估**：在MetaDrive仿真器中加载真实世界场景和安全关键场景（使用CAT生成对抗性攻击），VLM作为自车规划器，每0.5秒接收SoM标注的第一人称图像和状态提示，选择离散动作（转向和加速度），并记录碰撞率、离路率、路径完成率等指标。

## 3. 实验设计：数据集、Benchmark、对比方法

- **数据集与场景**：
  - **训练集**：包含150,000个问题，其中50,000来自Waymo仿真场景，50,000来自nuScenes真实图像，50,000来自nuScenes仿真重建图。总数据库包含4,305,450个问题，来自442,102帧（400个nuScenes场景 + 6,900个Waymo场景，共16.5小时驾驶日志）。
  - **测试集**：9,725个问题，来自212个场景，约一半为仿真、一半为真实。
- **Benchmark**：
  - **开环VQA任务**：多项选择准确率、解析失败率。
  - **闭环驾驶任务**：碰撞率、离路率、平均位移误差(ADE)、最终位移误差(FDE)、路径完成率。
- **对比方法**：LLaVA-NeXT、LLaVA-OneVision、GPT-4o、Qwen2、Llama3.2、InternVL2-8B（含零样本和微调版本）。部分模型进行了基于MetaVQA数据集的微调。

## 4. 资源与算力

- 文中**未明确说明**使用的GPU型号、数量及训练时长。仅提及使用了多个开源VLM（如InternVL2-8B、Llama3.2等），但未报告训练硬件配置或计算成本。

## 5. 实验数量与充分性

- **实验组数**：论文包含以下主要实验：
  1. 零样本VQA准确率对比（表4）。
  2. 微调后VQA准确率提升（表4、图7）。
  3. **Sim-to-Real迁移实验**：使用仿真数据训练、真实数据测试，以及两者混合训练的对比（表2）。
  4. **数据可扩展性实验**：不同训练数据规模（9,375、37,500、150,000）下的性能（表3）。
  5. **闭环驾驶评估**：6个模型（含微调版本）在120个场景（60个真实场景+60个安全关键场景）上的性能（表5）。
  6. **人类评估**：6名参与者对35个问题的准确率（88%）。
  7. **接地能力评估**：零样本接地准确率（表1）。
- **充分性**：实验覆盖了开环与闭环、仿真与真实、多种VLM架构、不同数据规模、消融训练源，设计较为全面。但缺少对同一VLM不同微调策略（如参数高效微调）的比较，以及更细粒度的安全关键场景分类。

## 6. 主要结论与发现

1. **Set-of-Mark提示可实现有效的无歧义对象引用**，VLM零样本接地准确率平均69.6%，最高87.4%，支持公平评估。
2. **基于MetaVQA数据集微调显著提升VLM的具身场景理解能力**，在开环VQA和闭环驾驶任务中均有明显改进（例如InternVL2-8B微调后VQA准确率从59.2%提升至86.9%）。
3. **学习具有从仿真到真实世界的可迁移性**：仅在仿真数据上微调，在真实图像测试集上准确率从59.2%提升至80.7%，接近仅在真实数据上训练的效果（82.5%），两者混合训练效果最佳（86.9%）。
4. **数据规模与性能正相关**，随着训练数据增大（9,375→150,000），准确率持续提升。
5. **闭环评估中微调VLM表现出更强的安全意识**：碰撞率、离路率等指标均有改善，模型能学会避免碰撞并做出合理决策。

## 7. 优点

- **标准化评估框架**：采用统一的多项选择格式+SoM提示，解决了现有基准的异质问题，支持零样本评估。
- **大规模自动化数据生成**：基于场景图和模板，可扩展生成超400万问题，覆盖30种类型，且经过人类验证。
- **闭环仿真评估**：首次在安全关键场景下对VLM进行交互式评估，弥补了现有研究仅开环测试的不足。
- **Sim-to-Real迁移验证**：证明了合成数据对真实世界理解的有效性，降低了真实标注成本。
- **开源与可复现**：提供了项目网站和数据集，促进了社区研究。

## 8. 不足与局限

- **仅使用单帧图像**：未利用多帧历史信息，而具身决策常需时间上下文。
- **固定视角**：仅单目前向视角，缺乏多相机信息，可能限制空间理解。
- **算力成本未报告**：缺乏对训练/推理效率的分析，不利于实际部署评估。
- **问题类型覆盖有限**：未包含复杂交通规则、行人意图交互等更高层次推理。
- **闭环评估场景规模较小**：仅120个场景，且对抗场景生成方法单一（CAT），泛化性存疑。
- **模型微调策略简单**：未探索LoRA等高效微调方法，也未报告过拟合风险。
- **人类评估样本量小**（6人35题），统计显著性可能不足。

（完）
