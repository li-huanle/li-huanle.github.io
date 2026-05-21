---
title: ChatOCR — 本地微信聊天记录识别工具
summary: 解决微信聊天截屏 OCR 在实际使用中的漏行、重复、表情错位、语音跳过等问题。
role: 独立开发
stack: ["Tauri", "macOS Vision", "DeepSeek OCR", "Rust"]
status: 进行中
highlight: 把"看似能用"的 OCR 工具打磨到"真的能用"，已发 v1.1.1 DMG。
metrics:
  - label: 当前版本
    value: 1.1.1
  - label: 平台
    value: macOS (Apple Silicon)
  - label: 打包形式
    value: DMG
  - label: 项目位置
    value: ~/ChatOCR
date: 2026-05-04
order: 4
---

## 问题

市面上的微信聊天 OCR 工具看起来能跑，实际用起来问题一堆：

- **漏行**：连续短句被过激过滤
- **重复识别**：同一条消息多次出现
- **头像 / 表情错位**：版式没切干净
- **语音消息跳过**：被当成图片忽略

## 我做了什么

| 问题 | 处理动作 |
|---|---|
| 重复识别 | 加入跨帧去重逻辑 |
| 漏行 | 放宽过激的短文本过滤 |
| 语音跳过 | 加入语音消息检测 + 消息类型渲染 |
| 长对话截断 | 提升 DeepSeek `max_tokens` |
| 选窗口费劲 | 加入 macOS 窗口列表识别 + 自动贴合微信窗口 |
| 提示词不贴 | OCR Prompt 重写，贴近微信聊天结构 |

## 当前已知风险

- Tauri 自带 DMG 打包脚本仍失败，目前依赖 `hdiutil` 手动生成。
- macOS Vision API 有 deployment version warning，需决定升 minimum deployment target 还是加 `@available` 保护。
- 准确率需要用真实微信窗口建一组回归集（文字、语音、表情、引用、群聊、连续短句、重复帧），目前是手测。

## 下一步

- 把 OCR 原始输出、中间解析结果、最终消息列表拆成可视化的调试面板，定位漏行来自哪一层。
- 对 DeepSeek 结果加 schema 校验，失败时保留原始行而不是 AI 静默吞消息。
- 建固定回归集 → 跑分 → 比对版本差异。
