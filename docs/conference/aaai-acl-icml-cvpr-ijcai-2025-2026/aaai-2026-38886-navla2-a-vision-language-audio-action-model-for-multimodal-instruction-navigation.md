---
title: "NaVLA$^2$: A Vision-Language-Audio-Action Model for Multimodal Instruction Navigation"
title_zh: NaVLA^2：面向多模态指令导航的视觉-语言-音频-动作模型
authors: "Jugang Fan, Peihao Chen, Changhao Li, Qing Du, Jian Chen, Mingkui Tan"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38886/42848"
tags: ["query:ad"]
score: 8.0
evidence: 多模态指令实现具身导航
tldr: 现有具身导航任务仅提供单模态指令，在复杂环境中易歧义。本文提出MINav多模态指令导航新任务，指令包含类别、RGB图、文本和音频描述。并设计NaVLA^2模型融合多模态输入，有效消歧并定位目标。实验表明多模态指令显著提升导航成功率，特别是在相似物场景中。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38886/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 856, \"height\": 453, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38886/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1831, \"height\": 987, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38886/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1833, \"height\": 690, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-38886/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 815, \"height\": 318, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38886/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1747, \"height\": 583, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38886/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 777, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-38886/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 722, \"height\": 230, \"label\": \"Table\"}]"
motivation: 单模态导航指令在复杂多模态环境中存在歧义，导致导航失败。
method: 提出MINav任务和NaVLA^2模型，融合类别、图像、文本和音频多模态线索进行指令跟随。
result: 在仿真和现实环境中，多模态指令相比单模态大幅提升导航成功率。
conclusion: 多模态指令能有效降低歧义，提升具身导航的鲁棒性。
---

## Abstract
Embodied navigation is a fundamental capability for intelligent agents, yet remains challenging in partially observable environments where navigation instructions can be difficult to interpret. However, existing tasks only provide unimodal instructions, which are ambiguous in complex multimodal environments with multiple similar objects, and may result in misinterpretation and navigation failure. To overcome these limitations, we introduce MINav, a novel task where the navigation path is precisely described by a multimodal instruction. The instruction provides multimodal cues, including object categories, RGB images, language descriptions, and auditory descriptions, which help the agent to disambiguate and ground objects in the environment and navigate effectively. We further construct a large-scale dataset of 43.9K navigation episodes using a two-stage pipeline that first annotates multimodal references of objects and then synthesizes diverse multimodal instructions. We find that existing methods struggle on MINav task, indicating substantial room for improvement in agents' multimodal grounding. To address this, we propose NaVLA^2, a vision-language-audio-action model that additionally integrates spatial audio and employs a CoThinkAct module to jointly generate high-level reasoning and consistent low-level actions. Experimental results demonstrate that NaVLA^2 significantly outperforms competitive baselines on MINav benchmark. We hope that our proposed MINav and NaVLA^2 will facilitate future research toward agents with stronger multimodal understanding and grounding capabilities for navigation.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **现有局限**：已有具身导航任务（如VLN、目标导航）仅提供**单模态指令**（文字或类别），在复杂多模态环境（多个相似物体、重叠场景）中容易产生歧义，导致导航失败。
- **核心洞见**：人类自然地利用视觉、语言、听觉等多模态信息来定位自身、识别地标并推断目标方向。
- **论文贡献**：提出 **MINav**（Multimodal Instruction Navigation）新任务，代理接收**多模态指令**（包含物体类别、RGB图像、语言描述、听觉描述），并要求在部分可观测环境中遵循这些指令完成导航。同时提出 **NaVLA²** 模型，集成视觉、语言、音频与动作，并引入可解释的推理机制。

## 2. 方法论：核心思想、关键技术细节
- **整体架构**：NaVLA² 是一个端到端的 Vision-Language-Audio-Action 模型，基于 LLM（Vicuna-7B-v1.5）构建，处理**多模态观测**（RGB图像 + 双耳空间音频）和**多模态指令**（类别、图像、文本、听觉描述）。
- **关键模块**：
  - **空间-语义音频编码器（Spatial-Semantic Audio Encoder）**：
    - 语义分支：单声道下混 → CLAP 编码 → 语义适配器（MLP）。
    - 空间分支：原始双耳音频 → SpatialAST 编码 → 空间适配器（MLP）。
    - 输出拼接，同时捕获“什么声音”和“来自何方”。
  - **CoThinkAct 模块**：
    - 从 LLM 最后隐藏层提取上下文表示。
    - 一路通过 **lm_head** 生成**高层次链式思考（CoT）**，描述当前目标与相对方向，并以特殊 token `[NAV]` 结尾。
    - 另一路提取 `[NAV]` token 的隐藏状态，通过 **action_head**（MLP）解码为 **N 步低层次意图对应的动作序列**。
    - 实现“思考与行动”并行，增强可解释性和动作一致性。
- **训练三阶段**：
  1. **音频-文本对齐**：813K 空间音频-文本对（合并 AudioCaps、WavCaps、Clotho 等，并叠加空间 RIR 方向），训练音频适配器。
  2. **多模态指令微调**：1M 样本混合（图像、视频、音频问答），全量微调 LLM。
  3. **MINav 微调**：379K 导航样本（指令、历史观测、当前观测、未来 N 步动作），LoRA 微调 LLM（rank=16），同时训练 token embeddings、lm head 和 action head。
- **动作空间**：`{FORWARD (25cm), TURN_LEFT (30°), TURN_RIGHT (30°), STOP}`。

## 3. 实验设计
- **数据集与场景**：
  - 基于 HM3DSem（145 训练场景，36 测试场景），使用两级自动管线生成 43.9K 训练 episodes、2.6K 测试 episodes；另由人工筛选出 360 个高质量 episodes（test-mini）。
  - 模拟器基于 Habitat + SoundSpaces 2.0，动态启用音频传感器，通过卷积 RIR 产生双耳空间音频。
- **基准与对比方法**：
  - **零样本**：Random、Qwen2.5-Omni、Gemini-1.5-flash、CA-Nav+GPT-4。
  - **微调**：IL(instr-nav)、RL(goal-nav)、RL(instr-nav)（基于 DD-PPO）、Navid（开源 VLA 基线，仅支持视觉+文本）。
  - 所有基线在相同训练数据量下训练，确保公平。
- **评估指标**：Success Rate (SR)、Oracle Success Rate (OSR)、Success weighted by Path Length (SPL)、Navigation Error (NE)、Trajectory Length (TL)、nDTW。

## 4. 资源与算力
- **文中未明确说明**使用的 GPU 型号、数量以及训练总时长。仅提到使用 Vicuna-7B-v1.5、CLIP ViT-L/14 等预训练模型，以及 LoRA 微调。算力信息缺失。

## 5. 实验数量与充分性
- **主要实验**：
  - 表1：整体性能对比（13种方法/变体，包含多种基线范式）。
  - 表2：音频编码器消融（空间/语义分支的四组合）。
  - 表3：CoThinkAct 消融（无 Action Head、无 CoT、完整版）。
  - 图4：模态影响分析（按目标模态分组、按参考模态数量分组）。
- **充分性评价**：
  - **充分**：覆盖了不同范式（随机、Omni-MLLM、地图式、RL、IL、VLA），消融实验覆盖音频分支和推理模块的关键设计，模态分析有洞察力。
  - **客观公平**：所有微调方法使用相同训练数据量，零样本方法使用相同prompt。但 Nvidia 等 VLA 基线缺少音频输入，对比略不利于对方；音频输入可能是 NaVLA² 性能优势来源之一。
  - **不足**：缺少真实世界导航实验，仅在仿真场景（HM3DSem）中评估；test-mini 子集仅 360 episodes，统计稳定性存疑；未进行跨数据集泛化测试（如 Matterport3D）。

## 6. 主要结论与发现
- NaVLA² 在 MINav 上取得 **SR 27.2%**，远超最佳基线 RL(instr-nav) 的 15.6%（+11.6%），SPL 也明显领先（19.6% vs 15.2%）。
- **多模态指令**比单模态指令显著提升导航成功率；提供更多模态（图像贡献最大）有助于消歧。
- **空间音频**比语义音频贡献更大，二者结合最佳；**CoThinkAct** 综合提升性能与可解释性。
- **现有方法在 MINav 上普遍表现不佳**，表明多模态指令导航仍然是一个有挑战的开放问题。

## 7. 优点
- **任务创新**：首次提出多模态指令导航（MINav），更贴近真实人类导航，弥补单模态歧义问题。
- **数据集构建自动化**：两阶段管线（多模态参考注释 + 指令合成）可扩展，且引入听觉描述和空间音频渲染。
- **模型设计**：首个将空间音频集成到 VLA 中的工作，双分支音频编码 + CoThinkAct 同时提升感知和推理可解释性。
- **实验设计全面**：对比多种基线范式，消融实验覆盖关键组件，并分析了模态类型和数量对性能的影响。

## 8. 不足与局限
- **仅在仿真环境评估**：未在真实机器人或真实场景中验证，实际部署可能面临传感器噪声、声学建模差异等。
- **算力信息缺失**：未报告 GPU 型号、数量、训练时长，影响复现与资源评估。
- **指令生成依赖 GPT-4**：存在潜在的描述偏差或不一致性，可能影响模型泛化（GPT-4 的生成风格固定）。
- **test-mini 规模较小**：仅 360 个 episodes，统计意义有限，且人工筛选可能引入选择偏差。
- **动作空间离散且简单**：仅包括前进和转向，未考虑连续控制、避障等更复杂场景。
- **Navid 等基线缺少音频输入**：说明音频对 NaVLA² 贡献巨大，但并未完全控制音频通道的影响（或许可通过在 NaVLA² 上去除音频再对比来进一步验证）。

（完）
