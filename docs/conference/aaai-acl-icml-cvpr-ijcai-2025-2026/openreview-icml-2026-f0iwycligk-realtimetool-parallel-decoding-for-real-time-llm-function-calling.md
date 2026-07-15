---
title: "RealtimeTool: Parallel Decoding for Real-Time LLM Function Calling"
title_zh: RealtimeTool：面向实时LLM函数调用的并行解码方法
authors: "Xiaoxin Shi, Jiaxin Wan, Linkang Dong, Wei Jiang, Yue Liu, Zengfeng Huang"
date: 2026-04-30
pdf: "https://openreview.net/pdf/70c074b8abc8a4c18b78fc6fffea49cac1520465.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 实时LLM函数调用支持具身智能
tldr: LLM函数调用延迟限制了具身智能等实时应用。本文发现函数调用具有结构化输出的弱因果依赖和冗余特性，提出RealtimeTool，引入特殊令牌实现并行解码：压缩低熵令牌并作为模式选择器。在多个基准上达到10Hz控制频率的实时性，为具身智能体实时交互提供了高效工具。
source: ICML-2026-Accepted
selection_source: conference_retrieval
motivation: 自回归解码延迟阻碍LLM函数调用在实时场景（如具身智能）中的应用。
method: 提出RealtimeTool，利用结构化输出冗余和弱因果依赖，引入双角色特殊令牌实现并行解码。
result: 在函数调用任务上实现4-6倍解码加速，达到实时交互频率。
conclusion: 利用输出结构特性的并行解码方案可有效降低LLM推理延迟，赋能实时具身应用。
---

## Abstract
LLM-based function calling enables intelligent agents to interact with external tools and environments, yet autoregressive decoding imposes a fundamental latency bottleneck that limits real-time applications such as embodied intelligence, game AI, and interactive avatars (e.g., 10 Hz control frequency). We observe that function calling differs fundamentally from free-form text generation: structured outputs exhibit substantial token redundancy (delimiters, parameter names) and weak causal dependencies among arguments---two properties that must be exploited jointly to achieve real-time performance. We present RealtimeTool, which introduces special tokens that serve a dual role: compressing low-entropy tokens (4--6× reduction) while acting as mode selectors that enable independent parallel generation of function name and arguments. This synergistic design achieves 3--6× end-to-end speedup (up to 9.6×) with only +8.2% parallelization overhead, while maintaining competitive or improved accuracy across five benchmarks on Qwen-series models (0.5B--14B). With quantization on a consumer-grade GPU, RealtimeTool reaches 61.2 ms P50 latency at 4B scale---enabling 16 Hz real-time control and bridging the gap between LLM function calling and latency-critical real-world deployment.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：LLM 的函数调用（function calling）在实时应用（如具身智能、游戏 AI、交互式虚拟角色）中面临自回归解码带来的延迟瓶颈，例如需要达到 10 Hz 的控制频率，但现有自回归解码无法满足。
- **背景与动机**：函数调用与自由文本生成有本质区别——其输出具有结构化特性，存在大量令牌冗余（如分隔符、参数名），且参数间因果依赖较弱。作者发现必须同时利用这两个特性才能实现实时性能。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：引入双角色特殊令牌（special tokens），一方面压缩低熵令牌（减少 4–6 倍），另一方面作为模式选择器，实现函数名和参数的独立并行生成。
- **关键技术细节**：
  - 特殊令牌同时承担两个角色：压缩低熵令牌（减少冗余）和模式选择（允许并行解码函数名和参数）。
  - 利用结构化输出的弱因果依赖特性，打破自回归顺序依赖，在解码时并行生成函数名和各参数。
  - 设计上的协同效应：压缩低熵令牌 + 并行化仅带来 +8.2% 的并行化开销，即可获得 3–6 倍端到端加速（最高 9.6 倍）。
- **算法流程（文字说明）**：在传统自回归框架中，输出序列按顺序生成每个令牌；RealtimeTool 通过插入特殊令牌，在解码早期确定函数名和参数的“骨架”，然后低熵令牌被压缩为少量特殊表示，同时多个参数位置可以并行解码，避免了逐令牌的因果等待。

### 3. 实验设计：使用的数据集 / 场景、benchmark、对比方法
- **数据集 / 场景**：未明确列出具体数据集名称，但提到在五个 benchmark 上评测，覆盖 Qwen 系列模型（0.5B–14B）。
- **Benchmark**：五个函数调用相关基准（具体名称未给出，可能为公开的函数调用评测集）。
- **对比方法**：未明确列出具体对比方法，但论文声称与基准自回归解码相比，实现了显著加速，并保持竞争性或更好的准确率。

### 4. 资源与算力
- 文中提到：在消费级 GPU 上使用量化，在 4B 规模模型上达到 61.2 ms P50 延迟，实现 16 Hz 实时控制。
- **未明确说明**：具体 GPU 型号、数量、训练时长等详细信息。仅提及“consumer-grade GPU”和量化。

### 5. 实验数量与充分性
- **实验数量**：在五个 benchmark 上测试，覆盖 0.5B 到 14B 不同规模模型。此外，应包含消融实验（如分析压缩令牌和并行化各自贡献，但文中未详述）。
- **充分性与客观性**：实验设计覆盖不同模型大小和多个基准，且报告了 P50 延迟和加速比（4–6 倍，最高 9.6 倍）。但缺乏更细粒度的消融和对比方法列表，公平性有待更完整披露。

### 6. 论文的主要结论与发现
- RealtimeTool 在函数调用任务上实现了 4–6 倍解码加速（最高 9.6 倍），而并行化开销仅 +8.2%。
- 量化后在消费级 GPU 上，4B 模型延迟降至 61.2 ms（P50），达到 16 Hz 实时控制频率，远超 10 Hz 的目标。
- 与自回归基线相比，准确率保持竞争或更优。

### 7. 优点
- 巧妙利用结构化输出的冗余性和弱因果依赖，提出双角色特殊令牌，实现高效并行解码。
- 加速效果显著（3–6 倍），且开销低，不牺牲准确率。
- 在消费级硬件上即可达到实时交互频率，降低了落地门槛。
- 方法通用性强，覆盖从 0.5B 到 14B 的多种模型。

### 8. 不足与局限
- **实验覆盖**：未公开具体 benchmark 名称和详细对比方法，可能削弱可复现性。
- **偏差风险**：仅使用 Qwen 系列模型，未在 LLaMA、GPT 等其他架构上验证通用性。
- **应用限制**：方法依赖函数调用输出的结构化特性，可能不适用于自由文本生成或其他无结构任务。
- **算力信息缺失**：未提供训练/微调的 GPU 配置、耗时等关键资源细节。

（完）
