---
title: 元元提示法笔记 — 让 AI 智能体真正运转的秘密
summary: GarryTan 2026-05-09 分享的方法论：与其写一个超长 prompt，不如让 AI 帮你生成 prompt，再用 prompt 跑工作流。
domain: AI 工作流
tags: ["Prompt 工程", "GarryTan", "智能体", "Skill"]
date: 2026-05-09
order: 8
---

## 解决什么问题

直接写超长 prompt 容易翻车：维护成本高、迁移困难、调试不可见。GarryTan 提出的"元元提示法"是把这个过程拆成两层：

```
你 → 用提示让 AI 写一个 prompt → 用这个 prompt 跑实际任务
```

第一层是"造工具"，第二层是"用工具"。

## 核心思想

1. **不要追求一个完美 prompt**，追求一个能稳定生成 prompt 的元 prompt
2. **每个工作流都应该可以被 skillify**（沉淀为 skill 文件）
3. **Cross-Modal Eval**：用一个 AI 审核另一个 AI 的输出，做 gate

## 三个配套工作流

| 工作流 | 作用 |
|---|---|
| Book-Mirror（书镜） | 逐章读书 → 双栏映射个人经历 → 个人镜像 |
| Meeting-Enrichment | 会议 → 实体脑页更新 → 知识图谱 |
| Cross-Modal-Eval | 多模型质量审核 gate |

## 元元提示法的实操

**Step 1**：定义任务 → 写元 prompt
```
"我需要一个 prompt 来做 [任务]。
任务的输入是 [X]，输出是 [Y]。
请生成一个高质量的 prompt，要求：
- 包含明确角色、目标、输入输出格式
- 包含 5 个示例
- 包含失败案例的边界处理
"
```

**Step 2**：把生成的 prompt 当模板
- 保存到 Skill 库
- 输入变量化（用占位符）
- 留可调参数（创造力 / 严谨度等）

**Step 3**：跑工作流
- 用模板 + 实际数据 → AI 跑任务
- 用 Cross-Modal-Eval 审核结果
- 不达标自动回到 Step 1 迭代

## 为什么有效

- **元 prompt 复用率 > 业务 prompt**：业务每周变，元 prompt 几个月不变
- **维护成本低**：改一个元 prompt = 改一整类业务
- **可观测**：每次生成的 prompt 都可以审阅，不像黑盒

## 风险边界

- 元 prompt 的稳定性必须先测试通过：用 5 个不同任务输入，看生成的 prompt 是否一致
- AI 模型变更（GPT-4 → GPT-5）会让元 prompt 失效，需要重新校准
- 不适合极简任务：3 行能解决的事不要套元元提示法

## 配套资料

- 原文存档：2026-05-09 GarryTan 分享
- 实战案例：Book-Mirror / Meeting-Enrichment / Cross-Modal-Eval 三件套
