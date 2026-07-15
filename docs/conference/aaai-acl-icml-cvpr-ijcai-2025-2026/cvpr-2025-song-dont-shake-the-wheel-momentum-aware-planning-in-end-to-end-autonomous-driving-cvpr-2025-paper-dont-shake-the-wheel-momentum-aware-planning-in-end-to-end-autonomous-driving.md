---
title: "Don't Shake the Wheel: Momentum-Aware Planning in End-to-End Autonomous Driving"
title_zh: 别抖方向盘：端到端自动驾驶中的动量感知规划
authors: "Song, Ziying, Jia, Caiyan, Liu, Lin, Pan, Hongyu, Zhang, Yongchang, Wang, Junming, Zhang, Xingyu, Xu, Shaoqing, Yang, Lei, Luo, Yadan"
date: 2025-06-01
pdf: "https://openaccess.thecvf.com/content/CVPR2025/papers/Song_Dont_Shake_the_Wheel_Momentum-Aware_Planning_in_End-to-End_Autonomous_Driving_CVPR_2025_paper.pdf"
tags: ["query:ad"]
score: 9.0
evidence: 端到端自动驾驶中的动量感知规划
tldr: 端到端自动驾驶框架通常依赖单帧轨迹预测，导致控制不稳定和遮挡脆弱性。为此提出MomAD框架，引入轨迹动量和感知动量以稳定和优化轨迹预测。通过拓扑轨迹匹配和动量规划交互器两大组件，在nuScenes数据集上验证了该方法能有效提升规划质量和鲁棒性。
source: CVPR-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 871, \"height\": 1100, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1795, \"height\": 453, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 870, \"height\": 344, \"label\": \"Figure\"}, {\"url\": \"assets/figures/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1797, \"height\": 794, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1803, \"height\": 441, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 862, \"height\": 271, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 863, \"height\": 352, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1805, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 863, \"height\": 357, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1798, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 864, \"height\": 328, \"label\": \"Table\"}, {\"url\": \"assets/tables/cvpr-2025-accepted/cvpr-2025-song-dont-shake-the-wheel-momentum-aware-planning-in-end-to-end-autonomous-driving-cvpr-2025-paper/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 862, \"height\": 222, \"label\": \"Table\"}]"
motivation: 端到端自动驾驶中单帧轨迹预测导致控制不稳定和易受遮挡影响。
method: 提出MomAD框架，包含拓扑轨迹匹配和动量规划交互器，利用历史信息增强规划一致性。
result: 在nuScenes上实验表明该方法有效提升了轨迹稳定性和规划质量。
conclusion: 动量感知机制为端到端自动驾驶提供更稳定的规划能力。
---

## Abstract
End-to-end autonomous driving frameworks enable seamless integration of perception and planning but often rely on one-shot trajectory prediction, which may lead to unstable control and vulnerability to occlusions in single-frame perception. To address this, we propose the Momentum-Aware Driving (MomAD) framework, which introduces trajectory momentum and perception momentum to stabilize and refine trajectory predictions. MomAD comprises two core components: (1) Topological Trajectory Matching (TTM) employs Hausdorff Distance to select the optimal planning query that aligns with prior paths to ensure coherence; (2) Momentum Planning Interactor (MPI) cross-attends the selected planning query with historical queries to expand static and dynamic perception files. This enriched query, in turn, helps regenerate long-horizon trajectory and reduce collision risks. To mitigate noise arising from dynamic environments and detection errors, we introduce robust instance denoising during training, enabling the planning model to focus on critical signals and improve its robustness. We also propose a novel Trajectory Prediction Consistency (TPC) metric to quantitatively assess planning stability. Experiments on the nuScenes dataset demonstrate that MomAD achieves superior long-term consistency (>3s) compared to SOTA methods. Moreover, evaluations on the curated Turning-nuScenes shows that MomAD reduces the collision rate by 26% and improves TPC by 0.97m (33.45%) over a 6s prediction horizon, while closed-loop on Bench2Drive demonstrates an up to 16.3% improvement in success rate.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **背景**：端到端自动驾驶框架虽然实现了感知与规划的深度整合，但普遍依赖单帧（one-shot）轨迹预测，这导致控制不稳定、易受遮挡影响，尤其在复杂动态场景中表现脆弱。
- **核心问题**：现有方法存在两大缺陷：①确定性规划缺乏动作多样性，有安全性风险；②多模态轨迹预测虽考虑多种行为，但一次性输出且仅依赖当前帧感知，缺乏时序一致性，导致车辆轨迹颤抖（vehicle trembling）。
- **动机**：受人类驾驶行为中“动量”（momentum）概念的启发——车辆应保持前向运动平滑性，既要继承历史轨迹趋势（轨迹动量），也要利用历史感知信息增强视野（感知动量），从而实现稳定、连贯的规划输出。

## 2. 方法论：核心思想、关键技术细节
- **总体框架**：MomAD 基于稀疏场景表示（SparseDrive），在稀疏感知模块提取实例特征 \(F_{ins}^t\) 后，引入动量感知规划模块，包含两大核心子模块：
  - **Topological Trajectory Matching (TTM)**：
    - 目的：从当前多模态候选轨迹 \(T_t = \{T_t^k\}_{k=1}^K\) 中，选择与历史轨迹 \(T_{t-1}\) 最匹配的一条，确保时序连贯性。
    - 关键技术：使用 Hausdorff 距离度量候选轨迹与历史轨迹的全局匹配程度（公式2），选择最小距离的轨迹索引 \(k^*\)（公式3）。该方法克服了逐点欧氏距离对局部变动的敏感性。
    - 坐标变换：将当前轨迹转换到历史时刻坐标系（公式1），实现公平对齐。
  - **Momentum Planning Interactor (MPI)**：
    - 目的：将 TTM 选出的规划查询 \(Q_t^{p*}\) 与历史规划查询 \(Q_{t-1}^p\) 进行交叉注意力，融合历史动静态感知信息，生成更丰富的查询 \(\tilde{Q}_t^{p*}\)。
    - 技术细节：首先对历史查询和分数进行 LSTM 处理得到 \(Q_{t-1}^{p'}\)（公式4），然后以当前查询为Query，以历史查询为Key/Value进行交叉注意力（公式5），最后将结果输入轨迹预测头（PlanHead）重新生成多模态轨迹 \(\tilde{T}_t, \tilde{S}_t\)。
  - **鲁棒实例去噪（Robust Instance Denoising via Perturbation）**：
    - 在训练时向实例特征引入可控高斯噪声，并用轻量encoder-decoder学习去噪，增强模型对感知噪声的鲁棒性，稳定规划输出。
- **新评价指标**：提出 Trajectory Prediction Consistency (TPC) 指标，衡量当前预测轨迹与历史预测轨迹之间的平均偏差（公式6），定量评估规划稳定性。

## 3. 实验设计
- **数据集**：
  - **nuScenes**（开环评估）：700/150序列用于训练/验证，每帧6个环视相机图像。
  - **Turning-nuScenes**：从nuScenes验证集中筛选转弯场景（17个场景，680个样本），专门评估时序一致性。
  - **Bench2Drive**（闭环评估）：基于CARLA Leaderboard 2.0，使用官方训练集（1000个片段）和220条测试路线。
- **Benchmark**：对比方法包括 UniAD、VAD、SparseDrive 等 SOTA 方法。采用 L2 位移误差（L2）、碰撞率（Collision Rate），以及新提出的 TPC 指标。
- **实验类型**：
  - 开环规划（nuScenes，3s/6s预测窗口）
  - 转弯场景规划（Turning-nuScenes）
  - 长轨迹预测（4-6s）
  - 闭环规划（Bench2Drive）
  - 感知/跟踪/建图/运动预测对比（表5）
  - 消融实验：鲁棒去噪模块（ED）和动量规划模块（MP）各自的影响、历史帧数影响、MP内部子模块（Add vs Query Mixer）比较。
- **实验充分性**：实验覆盖多任务、多场景、多种指标，消融实验设计合理（控制变量），对比公平（禁用ego状态信息，复现官方checkpoint）。在主流指标上展示全面结果，并在转弯场景和长期预测上补充验证，证明方法的通用性和稳定性。此外，在闭环平台上也进行了验证。

## 4. 资源与算力
- 论文中明确提到的GPU资源：
  - 训练推理硬件：RTX4090（用于实时性比较，FPS 7.8），部分基线使用A100（如UniAD在A100上FPS 1.8）。
  - 训练细节：长轨迹预测模型训练10个epoch，其余未明确说明训练总时长/具体GPU数量。
- 其他算力信息未详细披露（如训练所需GPU卡数、总时数）。

## 5. 实验数量与充分性
- **实验组数量**：包括主表（表1-4）、感知/跟踪/建图/运动预测结果（表5）、消融实验（表6-8），共约8个核心表格，外加可视化对比（图4）。
- **消融维度**：
  - 鲁棒去噪模块（ED）与动量规划模块（MP）的组合（表6），并测试不同噪声强度（0.05, 0.1, 0.2, 0.3）。
  - 历史帧数影响（t=1,2,3）（表7）。
  - MP内部子模块：Add vs Query Mixer（表8）。
- **充分性评价**：实验设计较为充分，覆盖了开环、闭环、转弯场景、长期预测，且消融实验揭示了各组件的作用。但在以下方面略有不足：①训练超参数（如噪声类型、LSTM结构选择）未作更细致讨论；②没有在更多样化的数据集上测试（如Waymo、Argoverse）；③闭环实验仅使用Base训练集（1000 clips），未使用完整训练集。

## 6. 主要结论与发现
- MomAD 在 nuScenes 开环规划上达到 SOTA：L2 0.60m（Avg），碰撞率 0.09%，TPC 0.54m，比 SparseDrive 全面改善。
- 在 Turning-nuScenes 转弯场景中，MomAD 将3s预测碰撞率从0.98%降至0.79%（降19.4%），6s预测TPC降低0.97m（33.45%）。
- 长期轨迹预测（6s）上，MomAD 在 nuScenes 上L2降低0.50m（16.95%），在 Turning-nuScenes 上L2降低0.85m（25.30%），碰撞率降低显著。
- 闭环 Bench2Drive 上，MomAD 相比 VAD 多模态变体成功率提升16.3%，舒适性得分提升7.2%。
- 消融实验证实：同时使用 ED（去噪）和 MP（动量规划）效果最佳；历史帧数 t=2 最优；Query Mixer 优于简单 Add 操作。

## 7. 优点
- **创新性**：首次将“动量”概念（含轨迹动量和感知动量）引入端到端规划，从物理学类比出发，设计直观有效。
- **方法有效**：TTM 使用 Hausdorff 距离而非简单欧氏距离，更好地捕捉全局轨迹一致性；MPI 通过交叉注意力融合历史查询，扩大感知范围。
- **鲁棒性提升**：去噪模块增强了模型对感知噪声的抗干扰能力，且简单高效。
- **新指标 TPC**：填补了规划稳定性评估的空白，更全面地反映了时序一致性。
- **严谨实验**：覆盖多种场景（直道、转弯、长预测、闭环），并对比多个 SOTA 方法，消融实验详细。
- **代码开源**：提供源码链接，便于复现和验证。

## 8. 不足与局限
- **实验覆盖有限**：仅使用 nuScenes 和 Bench2Drive，未在更大的自动驾驶数据集（如 Waymo、Argoverse）或真实环境测试，泛化性有待验证。
- **模式坍塌风险**：作者指出标准 teacher-forcing 轨迹回归可能导致模式坍塌，限制轨迹多样性，未来工作建议使用扩散模型或推测解码改进。
- **性能开销**：MomAD 的 FPS（7.8）略低于 SparseDrive（9.0），在实时部署上需权衡。
- **噪声设置未深入探索**：虽然尝试了不同噪声水平（0.05-0.3），但未对不同类型噪声（如稀疏/相关噪声）进行系统分析。
- **闭环比对基线有限**：闭环 Bench2Drive 上只对比了复现的 VAD 变体和 SparseDrive，与更多闭环方法对比仍需加强。
- **对历史帧数敏感**：表7显示 t=2 最佳，t=3 反而下降，说明简单堆叠更多历史帧可能引入噪声，如何自适应选择历史长度未充分探讨。

（完）
