---
title: "RoboTrust: Evaluating the Interaction Trustworthiness of Multi-modal Large Language Models in Embodied Agents"
title_zh: RoboTrust：评估多模态大语言模型在具身智能体中交互可信度的基准
authors: "Xueyang Zhou, Zijia Wang, Guiyao Tie, Sizhe Zhang, Junran Wu, Hecheng Wang, Xu Yongtian, Zhichao Ma, Yan Zhang, Xiangyu Zhang, Pan Zhou, Lichao Sun"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=q6wVgopVnq"
tags: ["query:ad"]
score: 8.0
evidence: 具身智能体可信度基准，评估多模态大模型
tldr: 多模态大模型在具身任务中潜力巨大，但可信度缺乏统一评估。RoboTrust首次系统定义具身智能体的信任维度（真实性、安全性、公平性、鲁棒性、隐私），并构建12个细粒度场景的基准。实验揭示了现有模型在动态环境中的信任缺陷，为开发可靠具身智能体提供指导。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 具身智能体的可信度是实际应用前提，但缺乏统一评估基准。
method: 定义信任五维度并设计12个细粒度评估场景，构建RoboTrust基准。
result: 多模态大模型在安全性和鲁棒性维度表现不佳，存在显著缺陷。
conclusion: RoboTrust为评估和提升具身智能体可信度提供了标准化平台。
---

## Abstract
Multimodal large language models (MLLMs) show great potential for embodied tasks, offering pathways toward real-world applications. Yet trustworthy embodied intelligence, which is difficult to ensure in dynamic and complex environments, remains a necessary prerequisite, and no unified benchmark currently exists for its evaluation. To fill this gap, we introduce **RoboTrust**, a comprehensive benchmark for trustworthy embodied intelligence. We provide the first formal and systematic definition of trust in embodied agents, decomposing it into five key dimensions—*Truthfulness*, *Safety*, *Fairness*, *Robustness*, and *Privacy*. Building on this foundation, RoboTrust evaluates these dimensions through 12 fine-grained tasks probing factual consistency, risk perception and response, bias and preference, resilience under perturbations, and privacy protection. Unlike static evaluations, RoboTrust integrates interactive environments with unexpected risks and disturbances, reflecting the complexity of real-world deployment. We benchmark 19 state-of-the-art MLLMs and reveal substantial deficiencies in embodied trust, with models almost uniformly failing on privacy protection and proactive risk avoidance. Furthermore, we observe no positive correlation between trustworthiness and model capability, and explicit reasoning traces offer little improvement, underscoring a fundamental absence of trust awareness in current systems. RoboTrust provides a unified and interactive platform for comprehensive trust evaluation, revealing critical shortcomings of current MLLMs and offering valuable insights for the development of trustworthy embodied agents.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）
多模态大语言模型（MLLMs）在具身任务中展现出巨大潜力，为真实世界应用提供了可能。然而，在动态复杂环境中确保具身智能体的可信度是实际部署的必要前提，但目前缺乏统一的评估基准。RoboTrust首次系统定义了具身智能体的信任维度，并构建了全面的评估基准，旨在揭示现有模型在可信度方面的缺陷，推动更可靠的具身智能体开发。

## 2. 方法论
- **核心思想**：将信任（Trust）形式化分解为五个关键维度——真实性（Truthfulness）、安全性（Safety）、公平性（Fairness）、鲁棒性（Robustness）和隐私（Privacy），并通过12个细粒度子任务进行评估。
- **关键技术细节**：
  - 真实性：检验事实一致性。
  - 安全性：评估风险感知与响应能力。
  - 公平性：检测偏差与偏好。
  - 鲁棒性：测试在扰动下的恢复能力。
  - 隐私：评估隐私保护机制。
- **评估方式**：与静态评估不同，RoboTrust集成了交互式环境，包含意外风险和干扰，模拟真实世界部署的复杂性。

## 3. 实验设计
- **数据集/场景**：基于五个信任维度构建了12个细粒度评估场景，覆盖动态环境中的各种可信度挑战。
- **Benchmark**：RoboTrust本身即为基准，提供统一、交互式的评估平台。
- **对比方法**：对19个最先进的MLLMs进行了基准测试，但论文摘要中未列出具体模型名称。

## 4. 资源与算力
论文摘要及元数据中未明确说明使用的GPU型号、数量、训练时长等算力信息。因此无法总结。

## 5. 实验数量与充分性
- 论文共进行了12个细粒度任务的评估，覆盖5个信任维度。
- 对比了19个SOTA MLLMs。
- 实验设计较为全面，但缺乏消融实验、跨域验证等细节描述（摘要中未提及）。从摘要看，实验充分性较高，但具体公平性（如模型选择、超参设置等）无法判断。

## 6. 主要结论与发现
- 现有MLLMs在具身可信度方面存在显著缺陷，尤其在隐私保护和主动风险规避上几乎全部失败。
- 可信度与模型能力（如推理能力）之间没有正相关性。
- 显式推理轨迹（explicit reasoning traces）对提升可信度几乎没有帮助，表明当前系统缺乏基本的信任意识。

## 7. 优点
- **首次系统性定义**：对具身智能体的信任维度进行了形式化、多维度分解。
- **动态交互环境**：与传统静态评估不同，RoboTrust引入意外风险和干扰，更具现实意义。
- **覆盖全面**：12个细粒度任务覆盖五个信任维度，评估维度完整。
- **揭示关键缺陷**：发现模型在隐私和安全性上的普遍失败，为后续研究指明方向。

## 8. 不足与局限
- **实验细节缺失**：由于摘要信息有限，无法得知具体任务设计、模型选择依据、评价指标等。
- **算力与资源未说明**：不利于复现和公平比较。
- **缺乏消融实验**：未验证各维度权重或任务设计对整体评估的影响。
- **仅针对MLLMs**：未涵盖其他类型具身智能体（如纯视觉或纯语言模型），范围有限。
- **应用限制**：基准场景可能无法完全覆盖真实世界所有可信度挑战，存在偏差风险。

（完）
