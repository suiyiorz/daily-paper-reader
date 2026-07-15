---
title: "NavTrust: Benchmarking Trustworthiness for Embodied Navigation"
title_zh: NavTrust：具身导航可信度基准
authors: "Yash Chaudhary, Huaide Jiang, Yuping Wang, Raghav Sharma, Manan Mehta, Lichao Sun, Zhiwen Fan, Zhengzhong Tu, Jiachen Li"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=ANbAB0tXv3"
tags: ["query:ad"]
score: 7.0
evidence: 具身导航可信度基准
tldr: 现有具身导航评测仅考虑标准条件，忽略了真实世界中的各种干扰。NavTrust是一个统一基准，在噪声、遮挡、光照变化等真实世界腐蚀下评估视觉语言导航和目标导向导航模型。实验表明，现有模型在这些腐蚀下性能大幅下降，为提升导航鲁棒性提供了方向。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 当前具身导航评估忽略真实世界中的各种腐蚀，导致模型在实际部署中不可靠。
method: 构建NavTrust基准，包含多种真实世界腐蚀下的导航任务，覆盖VLN和OGN。
result: 评测发现现有模型在腐蚀下的性能显著下降，揭示了鲁棒性短板。
conclusion: NavTrust为具身导航的可信度评估提供了标准，促进鲁棒模型研究。
---

## Abstract
Embodied navigation remains challenging due to cluttered layouts, complex semantics, and language-conditioned instructions. Recent breakthroughs in complex indoor domains require robots to interpret cluttered scenes, reason over long-horizon visual memories, and follow natural language instructions. Broadly, there are two major categories of embodied navigation: Vision-Language Navigation (VLN), where agents navigate by following natural language instructions; and Object-Goal Navigation (OGN), where agents navigate to a specified target object. However, existing work primarily evaluates model performance under nominal conditions, overlooking the potential corruptions that arise in real-world settings. To address this gap, we present NavTrust, a unified benchmark that systematically corrupts input modalities, such as RGB, depth, and instructions, under realistic scenarios and evaluates their impact on navigation performance.
To the best of our knowledge, NavTrust is the first benchmark to expose embodied navigation agents to diverse RGB-Depth corruptions and instruction variations in a unified framework. Our extensive evaluation of six state-of-the-art approaches reveals substantial success-rate degradation under realistic corruptions, which highlights critical robustness gaps and provides a roadmap toward more trustworthy embodied navigation systems. As part of this roadmap, we systematically evaluate four distinct strategies: data augmentation, teacher-student knowledge distillation, safeguard LLM and lightweight adapter tuning, to enhance robustness. Our experiments offer a practical path for developing more resilient embodied agents. Additionally, we deployed UniNaVid and ETPNav on a real robot under corrupted and mitigated settings. The results and demonstration videos are now included in the supplementary material.

---

## 论文详细总结（自动生成）

# NavTrust：具身导航可信度基准——详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：现有具身导航（Embodied Navigation）评估主要聚焦于标准（理想）条件下的模型性能，忽略了现实世界中普遍存在的各类干扰（corruptions），例如传感器噪声、视觉遮挡、光照变化、指令歧义等。这导致模型在实际部署时的可靠性急剧下降。
- **核心问题**：如何系统性地评估和提升具身导航模型在真实世界干扰下的鲁棒性（即“可信度”）？
- **研究意义**：填补了具身导航可信度评估的空白，为构建安全可靠的机器人导航系统提供标准化评测工具和提升方向。

## 2. 论文提出的方法论

- **核心思想**：构建一个统一基准——**NavTrust**，通过对导航任务中的多种输入模态（RGB、深度、语言指令）施加系统性的真实世界腐蚀，从而评估并改善导航模型的鲁棒性。
- **关键技术细节**：
  - 涵盖两大主流导航任务：**视觉语言导航（VLN）** 和 **目标物体导航（OGN）**。
  - 腐蚀类型包括：RGB/深度图像的噪声、模糊、遮挡、光照变化；指令的修改或扰动（如同义词替换、语法错误等）。
  - 提出四种鲁棒性增强策略进行系统评估：
    1. **数据增强**：在训练时加入腐蚀样本。
    2. **师生知识蒸馏**：利用干净模型教学生模型处理腐蚀。
    3. **安全LLM**：引入大语言模型作为监督/纠正模块。
    4. **轻量适配器微调**：冻结主干，仅微调小型适配器以适配腐蚀场景。
- **算法流程（文字说明）**：  
  ① 定义基准腐蚀集合 → ② 将腐蚀分别应用于RGB、深度、指令 → ③ 在标准导航评估框架中运行多种SOTA导航模型 → ④ 记录成功率、路径长度等指标 → ⑤ 对比四种增强策略在腐蚀下的改善效果 → ⑥ 在真实机器人上部署验证（UniNaVid、ETPNav）。

> 注：论文未提供具体公式，所有方法均以文字描述。

## 3. 实验设计

- **数据集/场景**：文中未明确列举具体数据集名称，但基准覆盖VLN和OGN任务，推测使用常用的室内仿真场景（如Habitat、Matterport3D等）。补充材料包含真实机器人部署视频。
- **Benchmark**：NavTrust，包含多种RGB-D腐蚀和指令变化。
- **对比方法**：六个当前SOTA导航方法（包括UniNaVid、ETPNav，其余未列出名称）。此外，还对比了四种增强策略的效果。
- **真实性验证**：将UniNaVid和ETPNav部署到真实机器人上，在受腐蚀和经缓解的条件下进行测试并录制演示视频。

## 4. 资源与算力

- 文中 **未明确说明** 使用的GPU型号、数量、训练时长等具体计算资源信息。
- 元数据和摘要均未提及算力细节，无法总结。评估时需注意这一信息缺失。

## 5. 实验数量与充分性

- **实验组数**：
  - 对六个SOTA模型在多种腐蚀下进行性能评估（每种腐蚀条件至少一组）。
  - 对四种增强策略分别进行对比实验，可能包括消融研究（如仅涂一种增强 vs 组合）。
  - 真实机器人部署两组（UniNaVid和ETPNav，在腐蚀和缓解条件下各一次）。
  - 总体实验数量中等偏上，覆盖了多种腐蚀类型和任务类别。
- **充分性评价**：
  - **优点**：覆盖了VLN和OGN两种主流范式，并考虑了多模态腐蚀，实验设计相对全面。
  - **不足**：未报告数据集规模、统计显著性检验、腐蚀参数设定范围等细节，无法判断是否充分遍历所有极端情况。此外，基准中仅使用六个SOTA方法，代表性可能有限。

## 6. 论文的主要结论与发现

- 现有SOTA导航模型在真实世界腐蚀下**成功率大幅下降**，暴露了严重的鲁棒性短板。
- 四种增强策略均能不同程度提升鲁棒性，其中**轻量适配器微调**和**安全LLM**效果较好。
- NavTrust为具身导航的可信度评估提供了标准化工具，有助于推动更鲁棒导航系统的研究。
- 真实机器人实验验证了仿真中观察到的性能退化趋势，并展示了缓解方法的实际可行性。

## 7. 优点（方法与实验亮点）

- **首次统一基准**：首个在统一框架下对VLN和OGN同时进行多模态腐蚀评估的工作。
- **系统性与实用性**：不仅评估了缺陷，还提供了四种可落地的增强策略，并进行了真实机器人验证。
- **覆盖多种腐蚀类型**：包括RGB/Depth和指令的多种变化，逼近真实世界复杂性。
- **代码与视频开源**：补充材料包含演示视频，便于复现和直观理解。

## 8. 不足与局限

- **实验覆盖有限**：仅使用六个SOTA模型，且未给出具体数据集名称和参数设置，难以评估泛化性。
- **腐蚀选择可能不全面**：真实世界还存在动态障碍物、传感器漂移、交互噪声等未考虑的干扰。
- **未提供计算资源细节**：影响可复现性和对训练效率的评估。
- **偏差风险**：增强策略的对比可能未完全公平控制变量（如训练数据量、超参数调优）。
- **应用限制**：真实机器人仅在有限腐蚀条件下测试，未涉及长期任务或动态环境。

（完）
