# 贡献指南

### 介绍

感谢你使用 ZebraUI。

以下是关于向 ZebraUI 提交反馈或代码的指南。在向 ZebraUI 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下内容。

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。

## 参与开发

### 本地开发

在进行本地开发前，请先确保你的开发环境中安装了 [Node.js >= 18](https://nodejs.org)。

### 目录结构

ZebraUI 采用 monorepo 进行代码管理，主要分为如下几个模块:

```
root
└─ demos
   ├─ demo-cli       # cli方式的示例项目
   ├─ demo-normal    # uni_modules方式的示例项目
└─ docs
   ├─ zebra-ui-docs  # 文档文件
└─ scripts           # 脚本文件   
└─ src               # zebra-ui的主包 
```

常规开发流程为通过运行cli项目链接src主包，修改主包代码，之后同步给demo-normal示例的uni_modules。

### 代码规范

在编写代码时，请注意：

- 确保代码可以通过仓库的 ESLint 校验。
- 确保代码格式是规范的，使用 prettier 进行代码格式化。
- 确保没有使用超出兼容性范围的 API，比如 `async`, `await`.


## 提交 Pull Request

### 参考指南

如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

- [第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/main/translations/README.zh-cn.md)
- [如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

### Pull Request 规范

zebra-ui使用`eslint`,`prettier`,`stylelint` 共同约束代码格式。

在提交pr前请运行
```bash
pnpm run lint
```
保证代码的格式和样式的顺序一致，且不会出现不规范的引用。

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码。
2. 基于 fork 后仓库的 master 分支新建一个分支，比如 `feature/xxx`。
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 master 分支。

### 提交代码

zebra使用`commitlint`及`czgit`规范提交格式，提交代码时运行命令

```bash
pnpm run commit
```

以确保提交格式的统一。

### 注意事项

提 Pull Request 前，请同步master分支的最新代码。


