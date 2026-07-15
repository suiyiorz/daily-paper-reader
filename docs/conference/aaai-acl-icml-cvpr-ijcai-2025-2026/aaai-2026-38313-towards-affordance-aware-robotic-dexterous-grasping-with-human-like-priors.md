---
title: Towards Affordance-Aware Robotic Dexterous Grasping with Human-like Priors
title_zh: 面向功能意识的类人灵巧抓取机器人
authors: "Haoyu Zhao, Linghao Zhuang, Xingyue Zhao, Cheng Zeng, Haoran Xu, Yuming Jiang, Jun Cen, Kexiang Wang, Jiayan Guo, Siteng Huang, Xin Li, Deli Zhao, Hua Zou"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38313/42275"
tags: ["query:ad"]
score: 9.0
evidence: 机器人灵巧抓取结合功能意识与类人先验
tldr: 该论文提出AffordDex框架，通过两阶段训练学习通用的灵巧抓取策略。第一阶段预训练轨迹模仿器以捕获人类手部运动先验，第二阶段训练残差模块适应不同物体功能位置。实验表明，该方法在多种物体上实现了类人自然且功能意识强的抓取，促进了机器人下游操作任务。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38313/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 778, \"height\": 775, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38313/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1730, \"height\": 879, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38313/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 768, \"height\": 613, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38313/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1727, \"height\": 744, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38313/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 771, \"height\": 386, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38313/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 747, \"height\": 351, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38313/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 628, \"height\": 341, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38313/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 864, \"height\": 444, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38313/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 828, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38313/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1814, \"height\": 784, \"label\": \"Table\"}]"
motivation: 现有灵巧抓取方法忽略功能位置和类人姿态，限制了下游操作。
method: 两阶段训练：先预训练人类运动先验，再训练残差模块适应物体功能。
result: 在多种物体上实现了高效且类人的抓取，提升了下游操作性能。
conclusion: 功能意识与类人先验的结合是实现通用灵巧操作的关键。
---

## Abstract
A dexterous hand capable of generalizable grasping objects is fundamental for the development of general-purpose embodied AI. However, previous methods focus narrowly on low-level grasp stability metrics, neglecting affordance-aware positioning and human-like poses which are crucial for downstream manipulation.  To address these limitations, we propose AffordDex, a novel framework with two-stage training that learns a universal grasping policy with an inherent understanding of both motion priors and object affordances.  In the first stage, a trajectory imitator is pre-trained on a large corpus of human hand motions to instill a strong prior for natural movement. In the second stage, a residual module is trained to adapt these general human-like motions to specific object instances. This refinement is critically guided by two components: our Negative Affordance-aware Segmentation (NAA) module, which identifies functionally inappropriate contact regions, and a privileged teacher-student distillation process that ensures the final vision-based policy is highly successful. Extensive experiments demonstrate that AffordDex not only achieves universal dexterous grasping but also remains remarkably human-like in posture and functionally appropriate in contact location. As a result, AffordDex significantly outperforms state-of-the-art baselines across seen objects, unseen instances, and even entirely novel categories.

---

## 论文详细总结（自动生成）

# 中文总结：Towards Affordance-Aware Robotic Dexterous Grasping with Human-like Priors

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：现有灵巧抓取方法过于关注低层抓取稳定性指标（如成功抓取物体的物理稳定性），忽视了**功能意识（affordance-aware positioning）** 和**类人姿态（human-like poses）**，而这些对于下游操作任务（例如避免刀具刀刃、准备打开瓶盖等）至关重要。
- **背景**：灵巧手具有高自由度，传统运动规划方法难以应对；近期的强化学习方法虽然取得了高成功率，但产生的抓取缺乏语义和功能合理性，且运动姿态生硬、非类人。人类则能自然地从视觉线索推断通用功能，并执行安全合理的抓取。

## 2. 方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：将自然性和功能正确性解耦并协同：先通过人类运动先验约束策略到自然姿态流形，再通过视觉理解负面功能区域引导策略避开不安全接触点。
- **两阶段框架（AffordDex）**：
  - **第一阶段：人类手部轨迹模仿（Human Hand Trajectory Imitating, HTI）**
    - 使用模仿学习在大规模人类手部运动数据集（OakInk2）上预训练基策略π_H，使其输出自然、类人的手部动作。
    - 设计奖励函数r_H，包含手指模仿奖励（基于手部关键点距离的指数衰减）和平滑性奖励（惩罚过大能耗）。
  - **第二阶段：功能意识残差学习（Affordance-aware Residual Learning）**
    - **负面功能感知分割模块（Negative Affordance-aware Segmentation, NAA）**：
      - 离线执行：对3D网格进行程序化纹理→六视图渲染→使用GPT-4V获取负面功能描述→用SAM在每张图上密集分割→CLIP+文本查询选择最匹配的掩膜→投影到3D点云获得负面功能点集N_t。
      - 作用：提供明确几何约束，告诉策略哪些区域不应接触。
    - **残差模块R**：在冻结π_H的基础上，用PPO训练状态基教师策略π_T（输入包含机器人状态、物体状态、点云和负面功能），学习残差动作Δa_t，最终动作a_t = π_H(S_t) + Δa_t。
    - 教师奖励函数：包含抓取距离惩罚、目标距离惩罚、成功奖励和负面功能接触惩罚。
    - **教师-学生蒸馏**：使用DAgger算法将状态基教师策略蒸馏为视觉基学生策略π_S（仅输入机器人状态、点云和负面功能，不访问物体真实状态），提升最终视觉策略的成功率和鲁棒性。

## 3. 实验设计：数据集、场景、基准与对比方法
- **数据集**：
  - **UniDexGrasp**：3165个物体实例（133类），用于评估seen objects（3200个）、unseen objects from seen categories（140个）、unseen categories（100个）。
  - **OakInk2**：约2200条人体手部操作序列，用于预训练π_H；同时用于评估跨数据集的泛化性能。
- **基准场景**：在Isaac Gym模拟器中执行抓取任务，每个物体随机旋转并掉落至桌面，若在200步内将物体送达目标位置则算成功。
- **对比方法**：PPO、DAPG、GSL、ILAD、UniDexGrasp、UniDexGrasp++、DexGrasp Anything（共7种基线）。
- **指标**：
  - **Succ**：抓取成功率
  - **HLS（Human-likeness Score）**：由Gemini 2.5 Pro根据抓取视频序列评分，衡量类人程度（1-10分，越高越自然）
  - **AS（Affordance Score）**：评估功能性正确性，计算每个指尖与负面功能点集的距离（大于2cm计1分，值越低表示抓取位置越合理）

## 4. 资源与算力
- 论文明确说明：所有实验在**单块NVIDIA RTX 4090 GPU**上进行。
- 训练配置：使用4096个并行环境（在Isaac Gym中），网络为MLP（4隐藏层，1024/1024/512/512），视觉分支使用PointNet+Transformer。
- **NAA模块耗时**：每个物体约160秒（一次性离线处理）。
- 未明确给出完整训练时长，但据GPU和并行环境数量可推断训练规模中等。

## 5. 实验数量与充分性
- **主要实验**：在UniDexGrasp数据集上，分别对状态基和视觉基设置进行4种泛化场景（seen obj、unseen obj from seen cat、unseen cat、OakInk2）的对比，总计约8组成功率表（表1）。
- **消融实验**：
  - 对HTI、NAA、蒸馏三个模块进行逐项消融（表2，状态基和视觉基各1组）。
  - 将HTI和NAA模块应用于UniDexGrasp++基线进行扩展验证（表3，1组）。
- **定性结果**：展示了多组抓取可视化对比（图4、5、6、7）。
- **充分性评价**：实验覆盖了多种泛化设置、多种基线、模块组合消融，且在两个不同数据集上测试，设计较为全面。消融实验清晰展示了各模块贡献。但所有实验均在仿真中进行，未涉及真实机器人部署，这可能是局限之一。

## 6. 主要结论与发现
- AffordDex在**所有泛化场景**（seen、unseen obj、unseen cat、跨数据集）上均取得最高成功率（Seen Obj状态基89.2%，视觉基87.0%），远超所有基线。
- **HLS显著提升**：相比UniDexGrasp++（HLS约5.4），AffordDex达到8.6（状态基）和8.3（视觉基），表明姿态更自然。
- **AS大幅降低**：AffordDex的AS在状态下为4~10，而基线通常为16~29，证明NAA有效避免不合理接触区域。
- 消融实验证实：去掉HTI后HLS下降，策略产生不自然姿态；去掉NAA后AS上升，抓取位置不合理；去掉教师-学生蒸馏后成功率下降。
- 将HTI+NAA应用于UniDexGrasp++能显著提升其HLS和AS，验证了模块的通用性。

## 7. 优点
- **框架新颖性**：首次将人类运动先验与负面功能意识有机结合，采用两阶段训练，实现了自然与功能的兼顾。
- **NAA模块创新**：将分割转化为分类问题，利用SAM+CLIP+GPT-4V实现开集、精细的负面功能分割，无需人工标注。
- **蒸馏机制实用**：通过教师-学生蒸馏将状态基知识迁移至视觉基策略，克服了视觉姿态估计不精确带来的困难。
- **实验设计全面**：多个泛化层次、广泛基线对比、模块消融，且提供扩展性验证（应用于其他方法），结果可信。
- **代码和项目页公开**（afforddex.github.io），有利于复现。

## 8. 不足与局限
- **仿真环境局限**：所有实验仅在Isaac Gym仿真中进行，未在真实机器人上验证。仿真与真实之间的Sim-to-Real gap可能影响实际部署效果。
- **NAA依赖VLM的准确性**：使用GPT-4V生成描述和CLIP进行匹配，对于高度复杂或纹理稀少的物体，分割精度可能下降（论文也提及“可能无法捕获所有凹形”）。
- **计算开销**：NAA离线处理每个物体约160秒，且需多步渲染和模型推理，在大规模物体库上可能较慢。
- **仅针对抓取**：虽然论文强调灵巧抓取是下游操作的基础，但方法未扩展到后续操作任务（如物体重新定向、工具使用等）。
- **评分指标主观性**：HLS由Gemini 2.5 Pro自动评分，虽然一致性好，但缺乏与人类主观评价的对照，且Gemini评分可能引入未知偏差。
- **数据集的多样性有限**：实验主要基于UniDexGrasp和OakInk2，物体类别和场景多样性不足以完全代表真实世界中千变万化的物体和任务需求。

（完）
