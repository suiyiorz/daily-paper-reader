---
title: Learning Diffusion Policy from Primitive Skills for Robot Manipulation
title_zh: 从原始技能学习扩散策略用于机器人操作
authors: "Zhihao Gu, Ming Yang, Difan Zou, Dong Xu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38889/42851"
tags: ["query:ad"]
score: 8.0
evidence: 技能条件化的扩散策略用于机器人操作
tldr: 针对全局指令导致动作生成错位的问题，提出SDP，利用原始技能（如“向上移动”）作为条件，结合扩散策略和视觉语言模型，实现可解释且高效的机器人操作。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38889/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 845, \"height\": 321, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38889/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 806, \"height\": 371, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38889/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1444, \"height\": 703, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38889/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1566, \"height\": 462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38889/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1668, \"height\": 340, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38889/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1358, \"height\": 717, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38889/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 866, \"height\": 405, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38889/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 773, \"height\": 546, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38889/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 844, \"height\": 210, \"label\": \"Table\"}]"
motivation: 现有扩散策略依赖全局指令，短时动作易产生失误。
method: 设计技能条件扩散策略SDP，抽象八种原始技能并用VLM提取视觉表示。
result: 在多种操作任务上优于基线方法，动作更精准。
conclusion: 原始技能接口为机器人操作提供了更直观的学习范式。
---

## Abstract
Diffusion policies have recently shown great promise for generating actions in robotic manipulation. However, existing approaches often rely on global instructions to produce short-term control signals, which can result in misalignment in action generation. We conjecture that the primitive skills, referred to as fine-grained, short-horizon manipulations, such as "move up" and "open the gripper", provide a more intuitive and effective interface for robot learning. To bridge this gap, we propose SDP, a skill-conditioned diffusion policy that integrates interpretable skill learning with conditional action planning. SDP abstracts eight reusable primitive skills across tasks and employs a vision-language model to extract discrete representations from visual observations and language instructions. Based on the representations, a lightweight router network is designed to assign a desired primitive skill for each state, which helps construct a single-skill policy to generate skill-aligned actions. By decomposing complex tasks into a sequence of primitive skills and selecting a single-skill policy, the proposed SDP ensures skill-consistent behavior across diverse tasks.
Extensive experiments on two challenging simulation benchmarks and real-world robot deployments demonstrate that SDP consistently outperforms state-of-the-art methods, providing a new paradigm for skill-based robot learning with diffusion policies.

---

## 论文详细总结（自动生成）

# 论文总结：《Learning Diffusion Policy from Primitive Skills for Robot Manipulation》

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：现有的扩散策略（Diffusion Policy）在机器人操作中通常依赖全局高层级指令（如“拿起柠檬并放入黄色平底锅”）来生成短时动作序列，导致指令与动作之间粒度错位（misalignment），易产生不精确或错误的行为。
- **动机**：作者认为，将复杂任务分解为可重复使用的、细粒度的“原始技能”（primitive skills，如“向上移动”、“关闭夹爪”）能提供更直观且有效的学习接口，从而提升动作生成的准确性和一致性。
- **贡献**：提出SDP（Skill-conditioned Diffusion Policy），首次将可解释的原始技能学习与条件扩散动作规划相结合，实现了从高指令到细粒度动作的端到端精确控制。

## 2. 论文提出的方法论

- **核心思想**：将复杂任务分解为一系列原始技能，每个技能对应一个短时操作；然后训练一个单技能扩散策略（single-skill diffusion policy），该策略以当前状态分配的技能为条件生成动作，确保动作与技能对齐。
- **关键技术细节**：
  - **原始技能抽象**：定义8种跨任务通用的原始技能（roll、yaw、open gripper、move up、translate、close gripper、move down、rotate）。利用组合提示集成（Compositional Prompt Ensemble）将技能转化为提示嵌入。
  - **视觉-语言模型（VLM）**：使用预训练编码器提取静态摄像头和腕部摄像头的视觉特征，并结合高层级指令文本，通过Transformer得到视觉-语言表示 \( z_{vl} \)。
  - **技能分配路由器**：对 \( z_{vl} \) 做平均池化后经MLP和Softmax，得到各技能的得分，选取Top-1技能，其嵌入 \( z \) 作为条件。
  - **单技能扩散策略**：扩散模型采用DiT（Diffusion Transformer）架构，共12个块。每个块中：
    - 通过AdaLN注入本体感受和时间步信息。
    - 通过Cross-Attention注入视觉-语言表示。
    - 引入LoRA风格的技能相关FFN层（由技能嵌入 \( z \) 生成两个权重矩阵 \( W_z^1, W_z^2 \)），与原始FFN并行，构成 \( \text{FFN}(x) = W_z^2(\text{SwishGLU}(W_z^1 x)) + \text{FFN}_{\text{ori}}(x) \)。
  - **训练损失**：结合扩散损失 \( \mathcal{L}_{\text{SM}} \) 和正交损失 \( \mathcal{L}_{\text{Orth}} \)（降低技能提示间余弦相似度），总损失 \( \mathcal{L} = \mathcal{L}_{\text{SM}} + 0.01\mathcal{L}_{\text{Orth}} \)。
- **算法流程**：训练时，从演示数据中学习VLM、路由器、扩散策略；推理时，给定观测和指令，先通过VLM和路由器分配技能，再用该技能参数化扩散策略，经4步DDIM去噪生成动作序列。

## 3. 实验设计

- **模拟基准**：
  - **CALVIN**：包含4个场景（A-D），共34个任务、24000条语言标注演示。评估设置：ABC→D（训练ABC，零样本测试D）和ABCD→D。指标：1-5个连续任务的成功率和平均完成长度。
  - **LIBERO**：四个套件（Spatial、Object、Goal、Long），每个套件10个任务，每任务50条示范。指标：成功率。
- **真实世界评估**：6自由度Lebai机械臂，收集9个任务（每个30条轨迹），包括空间意识、工具使用、语义理解、视觉泛化（未见过物体、复杂干扰物）。每任务20次试验报告平均成功率。
- **对比方法**：
  - 扩散策略类：DiffPolicy、Octo、MDT、MoDE。
  - VLA类：RoboFlamingo、GR-1、OpenVLA、UniVLA（CALVIN）；另外MaIL、UniActions在LIBERO上对比。
  - 消融实验额外比较加法、拼接、FiLM等技能条件注入方式。

## 4. 资源与算力

- **模拟实验**：基于DiT预训练模型，在4块A100 GPU上微调40个epoch，batch size 64，学习率 \(10^{-4}\)，使用静态和腕部摄像头图像（224×224）。**未明确指定训练总时长**（仅提及epoch数）。
- **真实世界实验**：仅使用静态摄像头，训练200个epoch。
- 复杂度分析：SDP参数量1017M，FLOPs 74.5G，推理时间45.1ms，大于MoDE（780M/57.4G/30.5ms）和Diff-P-T（286M/36.3G/22.1ms），但性能提升显著。

## 5. 实验数量与充分性

- **实验组数**：
  - CALVIN上两组设置（ABC→D和ABCD→D），报告3次随机种子的平均结果。
  - LIBERO上四个套件，各套件报告平均成功率。
  - 真实世界9个任务，分多任务学习和视觉泛化两类。
  - 消融实验：关键组件（6种配置消融）和技能条件策略（4种对比）分别在CALVIN和LIBERO-Long上进行。
  - 复杂度分析：对比三种方法。
  - 可视化分析：展示技能分配时间序列和对应观测图。
- **充分性与公平性**：实验覆盖模拟和真实场景，对比方法包含当前SOTA且均使用官方代码或默认超参数复现（备注中标记†）。消融实验逐步验证各组件贡献，控制变量合理。结论基于多次试验和统计结果（±标准差）。因此实验充分、客观、公平。

## 6. 论文的主要结论与发现

- SDP在CALVIN的ABC→D设置中，5个连续任务成功率达76.9%，比最优基线MoDE（62.4%）高14.5%，平均完成长度4.49（MoDE为3.92）。
- 在LIBERO上平均成功率96.9%，显著优于MaIL（83.5%）和UniVLA（92.5%），尤其LIBERO-Long达93.8%。
- 真实世界任务中，SDP在多任务学习和视觉泛化上均领先MoDE和OpenVLA，尤其对未见过物体（苹果）和干扰物鲁棒性更好。
- 消融实验证明：先验注入（Cross-Atten+AdaLN）、技能抽象、组合提示集成均贡献显著；LoRA式技能条件FFN优于加法、拼接、FiLM。
- 可视化显示技能分配与观测高度一致，具有可解释性。

## 7. 优点

- **可解释性**：技能分配是离散的、人类可理解的，可视化展示任务分解过程。
- **泛化能力**：零样本场景迁移（ABC→D）、跨任务共享技能、鲁棒干扰。
- **性能领先**：在多个基准上大幅超越SOTA，尤其在长时任务上优势明显。
- **端到端学习**：无需人工标注技能，路由器自动学习技能分配。
- **轻量级路由器**：仅用MLP+Top-1，计算开销小。
- **注入策略创新**：LoRA式FFN层结合AdaLN和Cross-Atten，有效捕捉技能-动作依赖。

## 8. 不足与局限

- **计算开销**：参数量1017M、FLOPs 74.5G，推理时间45.1ms，比基线更大，可能限制资源受限平台部署。
- **技能集覆盖**：仅定义8种技能，可能无法表达所有操作（如精确弯曲、旋转特定角度），需进一步扩展。
- **泛化局限**：在未见过形状（香蕉）上成功率下降，表明形状泛化仍需改进。
- **环境依赖性**：真实实验仅用静态摄像头，且任务数较少（9个），模拟环境为限定场景，未评估户外或动态障碍物。
- **未充分讨论失败模式**：未分析技能分配错误或动作失准的具体案例，仅展示成功可视化。
- **无标准化超参数敏感性分析**：正交损失权重γ=0.01固定，未探索其影响。

（完）
