---
title: "AgentSense: Virtual Sensor Data Generation Using LLM Agents in Simulated Home Environments"
title_zh: "AgentSense: 使用LLM智能体在模拟家庭环境中生成虚拟传感器数据"
authors: "Zikang Leng, Megha Thukral, Yaqi Liu, Hrudhai Rajasekhar, Shruthi K. Hiremath, Jiaman He, Thomas Plötz"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/37169/41131"
tags: ["query:ad"]
score: 7.0
evidence: 使用LLM智能体在模拟家庭中生成虚拟传感器数据
tldr: 智能家居中人类活动识别因缺乏多样标注数据而受限。本文利用化身智能体概念，在模拟家庭环境中让LLM引导的智能体执行日常活动，生成多样的传感器数据。AgentSense产生的数据覆盖不同家庭布局、传感器配置和人物行为，显著提升了HAR系统的泛化能力。该方法展示了化身智能体在数据增强中的有效性。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37169/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1836, \"height\": 976, \"label\": \"Figure\"}, {\"url\": \"assets/figures/aaai-2026-accepted/aaai-2026-37169/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1553, \"height\": 890, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37169/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1581, \"height\": 781, \"label\": \"Table\"}, {\"url\": \"assets/tables/aaai-2026-accepted/aaai-2026-37169/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 880, \"height\": 242, \"label\": \"Table\"}]"
motivation: 智能家居中人类活动识别缺乏大规模多样的标注数据。
method: 使用LLM生成多样角色和日常活动，由化身智能体在模拟家庭中执行，生成传感器数据。
result: 生成的数据提升了HAR系统的泛化性能，覆盖多种环境和行为。
conclusion: 化身智能体与LLM结合可有效生成合成数据，缓解数据稀缺问题。
---

## Abstract
A major challenge in developing robust and generalizable Human Activity Recognition (HAR) systems for smart homes is the lack of large and diverse labeled datasets. Variations in home layouts, sensor configurations, and individual behaviors further exacerbate this issue. To address this, we leverage the idea of embodied AI agents—virtual agents that perceive and act within simulated environments guided by internal world models. We introduce AgentSense, a virtual data generation pipeline in which agents live out daily routines in simulated smart homes, with behavior guided by Large Language Models (LLMs). The LLM generates diverse synthetic personas and realistic routines grounded in the environment, which are then decomposed into fine-grained actions. These actions are executed in an extended version of the VirtualHome simulator, which we augment with virtual ambient sensors that record the agents’ activities. Our approach produces rich, privacy-preserving sensor data that reflects real-world diversity. We evaluate AgentSense on five real HAR datasets. Models pretrained on the generated data consistently outperform baselines, especially in low-resource settings. Furthermore, combining the generated virtual sensor data with a small amount of real data achieves performance comparable to training on full real-world datasets. These results highlight the potential of using LLM-guided embodied agents for scalable and cost-effective sensor data generation in HAR.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

- **研究动机**：智能家居中的人类活动识别（HAR）系统依赖环境传感器，但开发鲁棒、泛化的模型面临两大障碍：大规模多样化的标注数据集稀缺，以及家庭布局、传感器配置和个体行为的巨大差异。传统真实数据采集成本高、隐私风险大。
- **整体含义**：本文提出利用大型语言模型（LLM）引导的化身智能体（Embodied Agents）在模拟家庭环境中执行日常活动，自动生成丰富、隐私保护的虚拟传感器数据，为HAR模型提供预训练数据，降低对真实数据的依赖，提升泛化性能。

### 2. 方法论

- **核心思想**：通过多级提示流水线，让LLM生成多样化的合成角色（Persona）及其日常例程，再分解为模拟器可执行的细粒度动作序列；然后扩展VirtualHome模拟器（X-VirtualHome），添加虚拟环境传感器（运动、门、设备激活），将动作执行转化为传感器触发事件，从而生成虚拟传感器数据。
- **关键技术细节**：
  - **多级提示**：
    1. **Persona生成**：LLM生成角色描述（年龄、职业、健康、生活方式等）。
    2. **高例程生成**：结合Persona、星期几、环境房间列表及示例调度（来自Homer数据集），生成每日活动时间表，并标记“在家”/“外出”，仅保留在家活动。
    3. **细粒度动作分解**：将每个高级活动分解为18种预定义模拟器动作（如walk、open），并利用房间内的对象列表约束LLM输出。
  - **LLM输出转换**：使用OpenAI的text-embedding-3-small将LLM输出的动作/对象嵌入，再通过FAISS检索接近的模拟器合法词汇，设定阈值（动作τ=0.8，对象τ=0.6），低于阈值则重新生成或丢弃，确保执行正确性。
  - **虚拟传感器实现**：
    - **运动传感器**：根据房间面积（≤30m²放1个，30-60放2个，>60放3个）放置在角落，检测半径5m，每0.2秒记录角色位置，当位置进入半径且移动速度>0.1m/s时触发ON/OFF状态。
    - **门/设备激活传感器**：通过监视模拟器环境图（Environment Graph）的状态变化：具有CAN OPEN属性的对象从CLOSED→OPEN触发门传感器；具有HAS SWITCH属性的对象从OFF→ON触发设备激活传感器。
- **算法流程**（文字说明）：
  1. 使用LLM生成Persona → 生成每日高例程 → 分解为低级动作序列。
  2. 清洗LLM输出，通过嵌入和最近邻检索映射到模拟器词汇，验证后组装成命令。
  3. 在X-VirtualHome中执行命令，监控角色轨迹和环境图状态，实时记录虚拟传感器事件。
  4. 输出带有时间戳、传感器ID、房间、状态等元数据的传感器日志。

### 3. 实验设计

- **数据集**：
  - **真实数据集**：5个公开智能家居数据集——Aruba、Milan、Kyoto7、Cairo（来自CASAS集合）和Orange4Home（来自Amiqual4Home环境）。这些数据集在传感器类型（运动、门、温度、设备等）、房屋布局（单层、多层）、居民数量（单人/双人）和样本量上存在差异，覆盖多种真实场景。
  - **虚拟数据集**：生成18个Persona、22个家庭环境、250天的虚拟传感器数据，共3266个活动窗口，每个窗口3-393个传感器触发（平均36个）。活动标签通过LLM映射到目标数据集的标签集。
- **基准与对比方法**：
  - 采用布局无关的TDOST框架（Thukral et al. 2025）作为分类器（Bi-LSTM + 句子嵌入）。两种嵌入变体：TDOST-Basic（传感器类型+位置）和TDOST-Temporal（添加时间信息）。
  - 对比设置：**Real**（仅在真实数据上训练测试） vs. **Real+Virtual**（先在虚拟数据上预训练，再在真实数据上微调，所有权重更新）。
- **评估指标**：准确率（Accuracy）、宏F1（Macro F1）、加权F1（Weighted F1）。

### 4. 资源与算力

- 文中未明确说明使用的GPU型号、数量、训练时长等算力信息。仅提及使用了OpenAI的text-embedding-3-small进行嵌入，以及FAISS索引和LangChain框架。分类器为轻量Bi-LSTM（64隐藏单元），但具体训练硬件和时长未报告。

### 5. 实验数量与充分性

- **主实验**：在5个数据集上，对TDOST-Basic和TDOST-Temporal两种变体分别进行Real和Real+Virtual对比，共计20组实验结果（表1）。
- **消融实验1**：改变用于微调的真实数据量（5%–100%），在5个数据集上绘制准确率、宏F1、加权F1曲线（图2），共计约15种样本量条件。
- **消融实验2**：组件有效性分析（表2），在Aruba数据集上测试环境多样性、周例程覆盖、角色多样性三个因素对宏F1的影响（共4种组合）。
- **充分性评估**：实验设计较为充分：覆盖多种真实数据集（不同传感器、布局、居民数）、多种嵌入策略、多组消融验证各组件贡献。使用相同框架和随机种子，控制数据量一致性，公平性较好。但仅基于一个分类器（TDOST）可能限制泛化结论。

### 6. 主要结论与发现

- **虚拟预训练显著提升HAR性能**：在所有5个数据集上，Real+Virtual设置下的准确率、宏F1、加权F1一致优于仅用真实数据训练。例如，Cairo数据集准确率从69.01%提升至75.61%，Orange4Home宏F1从21.56%提升至41.83%。
- **低资源场景下效果尤为突出**：仅使用5%–10%的真实数据微调，宏F1提升幅度可达10%–45%（如Aruba约10%，Kyoto7达45%）。
- **接近全数据性能**：在Cairo和Orange4Home上，使用200个左右真实样本即可达到接近全量真实数据训练的性能。
- **各组件均有贡献**：环境多样性、多天例程、多角色均能提升下游性能，其中角色多样性贡献最大（宏F1从68.35%增至72.20%）。

### 7. 优点

- **方法创新**：首次将LLM驱动的化身智能体用于生成环境传感器数据，弥合了语言模型与物理传感器数据之间的鸿沟。
- **隐私保护**：完全在模拟环境中生成数据，无需真实用户参与，避免隐私泄露风险。
- **可扩展性**：通过改变Persona、例程、环境布局，可低成本生成大规模多样化数据，适合数据稀缺场景。
- **实验扎实**：在5个真实数据集上进行了系统评估，并设计了多组消融实验，验证了方法各环节的有效性，结果可靠。

### 8. 不足与局限

- **单居民假设**：模拟仅考虑单居民场景，而部分真实数据集（如Cairo、Kyoto7）包含双居民，活动标签需解释为单人执行，可能损失多居民交互的复杂性。
- **活动空间无约束**：LLM自由生成活动，部分真实数据集标签（如“Other”）未覆盖，存在标签映射不完整的问题。
- **模拟与现实差距**：虚拟传感器触发逻辑（基于规则的位置检测和环境图状态）与真实传感器噪声、延迟等物理特性存在差距，可能影响下游泛化。
- **计算成本未评估**：未报告LLM调用次数、模拟运行时间等资源消耗，不利于实际部署的成本估算。
- **分类器单一**：仅使用TDOST框架，未验证在其他HAR模型（如Transformer、CNN）上的普适性。
- **未进行跨数据集迁移实验**：未测试虚拟数据预训练后在不同真实房间布局之间的迁移效果。

（完）
