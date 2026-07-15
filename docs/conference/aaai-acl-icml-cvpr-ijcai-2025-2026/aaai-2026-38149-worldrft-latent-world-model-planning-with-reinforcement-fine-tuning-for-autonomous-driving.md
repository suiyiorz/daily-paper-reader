---
title: "WorldRFT: Latent World Model Planning with Reinforcement Fine-Tuning for Autonomous Driving"
title_zh: WorldRFT：基于强化学习微调的潜在世界模型规划用于自动驾驶
authors: "Pengxuan Yang, Ben Lu, Zhongpu Xia, Chao Han, Yinfeng Gao, Teng Zhang, Kun Zhan, Xianpeng Lang, Yupeng Zheng, Qichao Zhang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38149/42111"
tags: ["query:ad"]
score: 9.0
evidence: 基于潜在世界模型和强化学习微调的自动驾驶规划
tldr: 该论文提出WorldRFT框架，面向规划的潜在世界模型结合强化学习微调，以解决传统世界模型中表征学习与规划任务脱节的问题。通过层次化规划分解和局部交互细化机制，实现了更安全高效的端到端自动驾驶规划。实验验证了该方法在复杂驾驶场景中的优越性。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38149/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 869, \"height\": 536, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38149/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1835, \"height\": 545, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38149/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 875, \"height\": 468, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38149/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1439, \"height\": 469, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38149/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 703, \"height\": 415, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38149/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1836, \"height\": 806, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38149/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1832, \"height\": 572, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38149/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 902, \"height\": 420, \"label\": \"Table\"}]"
motivation: 现行潜在世界模型的重建导向表征学习不利于规划任务优化。
method: 提出规划导向的潜在世界模型，结合层次化规划分解和强化学习微调。
result: 在多个自动驾驶基准中规划性能提升，尤其安全关键场景表现突出。
conclusion: 强化微调有效对齐了世界模型的表征与规划目标。
---

## Abstract
Latent World Models enhance scene representation through temporal self-supervised learning, presenting a perception annotation-free paradigm for end-to-end autonomous driving. However, the reconstruction-oriented representation learning tangles perception with planning tasks, leading to suboptimal optimization for planning. To address this challenge, we propose WorldRFT, a planning-oriented latent world model framework that aligns scene representation learning with planning via a hierarchical planning decomposition and local-aware interactive refinement mechanism, augmented by reinforcement learning fine-tuning (RFT) to enhance safety-critical policy performance. Specifically, WorldRFT integrates a vision-geometry foundation model to improve 3D spatial awareness, employs hierarchical planning task decomposition to guide representation optimization, and utilizes local-aware iterative refinement to derive a planning-oriented driving policy. Furthermore, we introduce Group Relative Policy Optimization (GRPO), which applies trajectory Gaussianization and collision-aware rewards to fine-tune the driving policy, yielding systematic improvements in safety. WorldRFT achieves state-of-the-art (SOTA) performance on both open-loop nuScenes and closed-loop NavSim benchmarks. On nuScenes, it reduces collision rates by 83% (0.30% → 0.05%). On NavSim, using camera-only sensors input, it attains competitive performance with the LiDAR-based SOTA method DiffusionDrive (87.8 vs. 88.1 PDMS).

---

## 论文详细总结（自动生成）

# WorldRFT 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有基于潜在世界模型（Latent World Model）的端到端自动驾驶方法，采用**重建导向**的表示学习（通过时序自监督预测未来场景），导致感知与规划任务纠缠不清，表示学习偏离规划优化目标，使得最终规划策略**次优**。
- **关键挑战**：
  - 缺乏空间感知：重建目标产生通用表示，3D空间意识薄弱。
  - 规划交互机制低效：单全局查询无法有效捕捉局部结构，特征利用不充分。
  - 安全感知有限：基于模仿学习的被动行为克隆缺少显式安全目标，无法主动避让。
- **研究意义**：提出**规划导向**的潜在世界模型框架 WorldRFT，通过层次化规划分解、局部迭代细化和强化学习微调，对齐表示学习与规划需求，实现更安全、高效的自动驾驶规划。

## 2. 论文提出的方法论

- **核心思想**：将世界模型的表示学习从“重建”转向“规划”，利用几何先验增强空间理解，通过多子任务分解与局部细化提升规划质量，并引入强化学习微调注入安全目标。
- **关键技术细节**：
  1. **空间感知世界编码器（SWE）**：
     - 使用基础视觉编码器（如ResNet）提取2D特征。
     - 引入冻结的视觉几何基础模型 **VGGT** 提取3D token（相机、注册、3D token），通过**交叉注意力**将3D几何先验融入2D特征，得到统一的空间感知潜在表示 \(W_t^{\text{latent}}\)。
  2. **层次化规划细化（HPR）**：
     - 将端到端规划分解为三个并行子任务：
       - **目标区域定位**：用拉普拉斯分布建模目标区域（参数 μ, b），通过负对数似然损失训练。
       - **空间路径规划**：以固定空间间隔（2米）采样路径点，MLP解码。
       - **时间轨迹预测**：以固定时间间隔（0.5秒）预测未来轨迹点，MLP解码。
     - 子任务通过**统一查询交互框架**（共享自注意力交换信息）协同。
     - **局部感知迭代细化**：对初始结果（μ, b, T_path, T_traj）进行K次迭代，通过相机投影采样轨迹点对应的局部特征，结合尺度参数 b（反映场景不确定性）融合全局与局部信息，生成残差更新轨迹（步长 α=0.1）。
  3. **强化学习微调（RFT）**：
     - **碰撞感知奖励**：基于自车与周围智能体边界框距离，碰撞惩罚 -1，否则 0。
     - **高斯化轨迹建模**：将确定性轨迹输出建模为高斯分布（均值 μ_θ，方差 Σ_θ 由辅助网络估计），实现探索。
     - **策略优化**：采用 **Group Relative Policy Optimization (GRPO)**，从旧策略采样G条轨迹，计算相对优势（考虑误差累积：t时刻之后所有点的归一化奖励求和），优化包含裁剪和KL散度的目标函数。
  - **训练损失**：预训练阶段包含语义监督损失 \(L_{sem}\)、世界重建损失 \(L_{rec}\)（MSE预测未来潜在表示）、目标区域损失 \(L_{target}\)（负对数似然）、轨迹损失 \(L_{traj}\)（L1）；RL阶段损失为 \(L_{RL} = -J(\theta) + \lambda D_{KL}\)。

## 3. 实验设计

- **数据集与基准**：
  - **开环**：nuScenes 数据集，评估指标为位移误差（L2）和碰撞率（CR），预测1s/2s/3s及平均。
  - **闭环**：NavSim 模拟器，评估指标为 PDM Score（PDMS），包含无责碰撞（NC）、可行驶区域合规（DAC）、碰撞时间（TTC）、驾驶舒适性（Comf.）和自身进展（EP）。
- **对比方法**：
  - 基于感知的模仿学习方法：ST-P3、OccNet、UniAD、VAD、UncAD、PPAD、PARA-Drive、GenAD、LAW（perception-based）、DiffusionDrive。
  - 自监督/无感知方法：Epona、LAW（perception-free）、World4Drive、SSR、DriveX。
  - 包含相机与LiDAR输入的方法。
- **主要结果**：
  - nuScenes：WorldRFT（含RFT）平均碰撞率 0.05%，L2误差 0.48m，优于所有无感知方法，并超越大部分有感知方法；碰撞率相比无感知基线 LAW（0.30%）降低 83%。
  - NavSim：PDMS 87.8，在相机输入方法中最佳，接近LiDAR方法 DiffusionDrive（88.1）；各项子指标（NC 97.8, DAC 96.8, TTC 94.0）均显著提升。

## 4. 资源与算力

- **未明确说明**：论文中未提及所使用的 GPU 型号、数量、训练时长等具体算力信息。仅在摘要中注明代码已开源，但未提供训练资源细节。

## 5. 实验数量与充分性

- **实验组数**：
  - 两大基准主实验（Table 1, Table 2）覆盖 15+ 种对比方法。
  - 消融实验（Table 3）包含 8 组配置，分别验证 VGGT、各子任务（目标/路径/轨迹）、迭代细化模块的有效性。
  - 定性结果：轨迹可视化（图4）、注意力热图（图5）。
  - 另提及补充材料包含更多细节（如超参数、数据集描述、扩展实验等），但未在本文呈现。
- **充分性评价**：
  - **充分**：消融实验设计合理，逐步拆解各个组件贡献，验证了假设。
  - **客观公平**：与多类 SOTA 方法在统一基准下比较，包括开环和闭环，指标全面。
  - 不足之处：缺少对强化学习训练过程的稳定性分析（如奖励曲线）、对不同场景（如夜间、雨雪）的泛化测试；未在真实车上验证。

## 6. 论文的主要结论与发现

- 规划导向的潜在世界模型设计（SWE + HPR）显著提升了表示学习与规划的协同性，在无感知标注下达到甚至超越部分有感知方法的性能。
- 层次化规划分解（目标区域、空间路径、时间轨迹）比单任务规划更有效，局部感知迭代细化能进一步精细化轨迹。
- 强化学习微调（RFT + GRPO）有效降低碰撞率，从被动模仿转向主动避碰，且对常规轨迹精度影响极小（L2误差仅微增0.01m）。
- VGGT 融合3D几何先验带来了空间理解提升，尤其在可行驶区域合规性（DAC）上表现突出。
- 综合来看，WorldRFT 在安全关键指标上取得显著进步，具备实际部署潜力。

## 7. 优点

- **方法创新**：
  - 首次提出面向规划的潜在世界模型，区别于以往重建导向范式。
  - 创新性结合 VGGT 几何基础模型与潜在世界编码，无需显式深度监督。
  - 引入强化学习微调（GRPO）于自监督世界模型规划中，利用碰撞奖励主动优化安全。
- **实验设计**：
  - 同时在开环（nuScenes）和闭环（NavSim）两大标准基准进行评估，结果可信度高。
  - 消融实验完整，逐一验证每个设计组件的必要性。
  - 与大量 SOTA 方法（包括有感知和无感知）对比，凸显优势。
- **性能提升**：
  - 碰撞率降低 83%（开环），闭环 PDMS 超越多数 LiDAR 方法，安全性显著增强。
  - 在无感知标注下达到极佳性能，降低数据标注成本。

## 8. 不足与局限

- **实验覆盖不全**：
  - 未在真实道路场景或更复杂的模拟器（如CARLA高级天气、夜间、多车交互）中测试泛化性。
  - 仅讨论相机输入，未探索联合LiDAR或多模态融合可能带来的进一步提升。
  - 强化学习奖励函数仅基于碰撞，可能忽略其他安全因素（如交通规则、行人舒适性）。
- **偏差风险**：
  - 对比方法中部分结果可能使用的是不同实验设置（如是否包含ego状态），论文虽在脚注中说明，但直接比较时仍需谨慎。
  - 消融实验默认包括RFT，未单独展示各设计在没有RFT时的贡献分解（Table 3中已将RFT作为默认，但缺少无RFT的消融对比来完整量化每个组件的独立贡献）。
- **计算与部署**：
  - 未报告训练和推理的具体计算成本，VGGT与GRPO可能带来较大负载。
  - 尚需验证在实车嵌入式平台上的实时性。
- **理论深度**：对于为什么层次化规划分解能更好地匹配潜在世界表示的分析偏重工程设计，缺乏更严格的理论解释。

（完）
