---
title: Geometric Projection of Information Manifolds for Robust Decision-Making with LLMs in Adversarial Driving Environments
title_zh: 面向对抗驾驶环境中基于大语言模型鲁棒决策的信息流形几何投影
authors: "xu zl, Qianqi Zhang, Yuntao Zou"
date: 2025-09-15
pdf: "https://openreview.net/pdf?id=eCtT0S3gr5"
tags: ["query:ad"]
score: 7.0
evidence: 基于大语言模型的自动驾驶对抗环境决策
tldr: 针对自动驾驶中感知异常导致决策失败的问题，提出LLM-ADF，利用信息几何指导的维度约减构建专用驾驶空间，将高维文本嵌入解耦为驾驶相关特征，并借助大语言模型的少样本学习能力增强鲁棒性。在对抗性驾驶场景中，LLM-ADF相比传统方法显著降低了事故率，为利用LLM应对边缘情况提供了新思路。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 小概率感知异常可能导致自动驾驶灾难性失败，现有方法对边缘情况泛化不足。
method: 利用信息几何构造自动驾驶空间，对文本嵌入降维解耦，结合LLM少样本学习。
result: 在多个对抗场景下，LLM-ADF决策鲁棒性优于基线。
conclusion: 信息几何引导的LLM框架能有效增强自动驾驶对感知异常的处理能力。
---

## Abstract
Perception uncertainty poses a critical challenge for autonomous driving systems (ADS), where small-probability anomalies can lead to catastrophic failures in decision-making. While existing approaches rely on redundant sensors or multi-modal fusion, they struggle with rare edge cases and require extensive datasets for training. We propose LLM-ADF, a Large Language Model-based Autonomous Driving Framework that leverages few-shot learning to enhance robustness against perceptual anomalies. Our key innovation lies in constructing a specialized autonomous driving space through information geometry-guided dimensionality reduction, decoupling high-dimensional text embeddings into driving-relevant features while preserving contextual reasoning capabilities. We introduce a manifold-based reasoning mechanism that connects the text space with the driving space, enabling LLMs to perform spatial-temporal inference even under corrupted inputs. The framework incorporates a self-correction database that enables continuous learning from historical anomalies, dynamically adjusting the manifold structure through Fisher information metrics. We construct an adversarial dataset with 2,730 anomalous frames simulating sensor failures and adversarial attacks. Experimental results on UniAD and ST-P3 benchmarks demonstrate that LLM-ADF achieves 24.93% average collision rate on UniAD, outperforming GPT-Driver by 22% under normal conditions and showing 14.9% degradation under anomalies compared to 17-21% for existing LLM-based methods. Our approach represents a paradigm shift towards few-shot learning in safety-critical autonomous systems, providing theoretical foundations and practical solutions for L4 autonomous driving deployment.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：自动驾驶系统在感知不确定性（如传感器失效、对抗攻击等小概率异常）下，决策可能产生灾难性失败。现有方法依赖冗余传感器或多模态融合，但对罕见边缘情况泛化能力不足，且需要大量训练数据。
- **整体含义**：本文提出一种基于大语言模型（LLM）的自动驾驶框架 LLM-ADF，利用少样本学习增强对感知异常的鲁棒性，旨在为 L4 级自动驾驶部署提供理论和实践方案。

## 2. 论文提出的方法论

- **核心思想**：通过信息几何引导的维度约减，构建专用的“自动驾驶空间”，将高维文本嵌入解耦为驾驶相关特征，同时保留上下文推理能力。引入基于流形的推理机制连接文本空间与驾驶空间，使 LLM 即使在输入被破坏时也能进行时空推理。框架还包含一个自纠正数据库，通过 Fisher 信息度量动态调整流形结构，实现从历史异常中持续学习。
- **关键技术细节**：
  - 信息几何引导的降维：利用流形上的 Fisher 度量将高维 LLM 嵌入投影到低维驾驶空间，保留驾驶相关几何结构。
  - 流形推理机制：在降维后的流形上进行推理，增强对噪声和异常输入的鲁棒性。
  - 自纠正数据库：记录历史异常案例，基于 Fisher 信息调整流形参数，实现少样本持续学习。
- **算法流程说明**：输入感知异常文本（如传感器故障描述）→ LLM 生成高维嵌入 → 信息几何投影到驾驶空间 → 流形推理得到驾驶决策 → 异常案例存入数据库并更新流形结构。

## 3. 实验设计

- **数据集/场景**：作者构建了一个包含 2,730 个异常帧的对抗性数据集，模拟传感器失效和对抗攻击（如强光、遮挡、对抗补丁等）。
- **Benchmark**：使用 UniAD 和 ST-P3 两个自动驾驶基准框架。
- **对比方法**：主要对比了 GPT-Driver 以及其他基于 LLM 的方法。在正常条件下，LLM-ADF 在 UniAD 上的平均碰撞率为 24.93%，优于 GPT-Driver 22%；在异常条件下，LLM-ADF 性能下降 14.9%，而其他基于 LLM 的方法下降 17-21%。

## 4. 资源与算力

- 文中未明确说明使用的 GPU 型号、数量或训练时长。仅提及框架基于 LLM，但未提供具体硬件配置信息。

## 5. 实验数量与充分性

- **实验数量**：论文未详细列出所有实验组数，但基于摘要可知至少包含：
  - 在 UniAD 和 ST-P3 两个基准上的整体性能对比。
  - 正常条件和异常条件（对抗场景）下的对比实验。
  - 与 GPT-Driver 等方法的直接比较。
- **充分性与公平性**：实验覆盖了正常和多种异常场景，数据集包含 2,730 帧，规模适中。但缺少消融实验（如去掉信息几何投影或自纠正数据库的效果）、不同 LLM 基座的对比、更多对抗攻击类型的测试。实验设计相对直接，但未充分论证各个组件的贡献。总体而言，实验有一定说服力，但不够全面。

## 6. 论文的主要结论与发现

- LLM-ADF 在正常条件下比 GPT-Driver 碰撞率降低 22%；在异常条件下性能下降幅度（14.9%）显著小于其他 LLM 方法（17-21%），证明其鲁棒性。
- 信息几何引导的流形投影能有效解耦驾驶相关特征，提升 LLM 对感知异常的推理能力。
- 自纠正数据库通过 Fisher 信息度量实现了少样本的持续学习，有助于适应罕见边缘案例。
- 该框架为在安全关键系统中利用 LLM 的少样本学习能力提供了理论依据和实用方案。

## 7. 优点

- **创新性**：将信息几何与 LLM 结合用于自动驾驶，提出流形投影和自纠正机制，构思新颖。
- **实用性**：针对实际自动驾驶中难以获取大量异常数据的痛点，提出少样本学习方案。
- **性能提升**：在对抗场景下碰撞率明显优于现有 LLM 方法，验证了鲁棒性。
- **理论基础**：利用 Fisher 信息和流形几何为模型可解释性和泛化提供了数学支撑。

## 8. 不足与局限

- **实验覆盖不足**：仅测试了 2,730 个异常帧，且未公开具体攻击类型和分布；缺少真实路测或大规模场景验证。
- **模型泛化性存疑**：只对比了 UniAD 和 ST-P3 两个基准，未验证在其他 ADS 框架上的表现。
- **算力与部署成本**：未报告 LLM 推理延迟和计算资源消耗，实际部署可能存在实时性挑战。
- **消融实验缺失**：未单独分析信息几何投影和自纠正数据库各自的贡献，无法确认关键组件重要性。
- **偏差风险**：数据集由作者自行构建，可能引入特定偏差；且未与其他非 LLM 的鲁棒决策方法（如强化学习、模型预测控制）对比。
- **应用限制**：框架依赖 LLM 的文本理解能力，若感知输入转为文本描述时信息损失较大，可能影响性能。

（完）
