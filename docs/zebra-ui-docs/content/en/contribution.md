# Contribution Guidelines

### introduce

Thank you for using ZebraUI.

Below are guidelines for submitting feedback or code to ZebraUI. Before submitting an issue or PR to ZebraUI, please take a few minutes to read the following.

### Issue specification

- When encountering a problem, please first confirm whether the problem has been recorded in the issue or has been fixed.
- When raising an issue, please describe the problem encountered in brief language, and add the environment and reproduction steps when the problem occurred.

## Participate in development

### Local development

Before developing locally, please make sure [Node.js >= 18](https://nodejs.org) is installed in your development environment.

### Directory Structure

ZebraUI uses monorepo for code management, which is mainly divided into the following modules:

```
root
└─ demos
    ├─ demo-cli # Sample project in cli mode
    ├─ demo-normal # uni_modules example project
└─docs
    ├─ zebra-ui-docs # Documentation files
└─ scripts # Script files
└─ src #zebra-ui main package
```

The normal development process is to link the src main package by running the cli project, modify the main package code, and then synchronize it to the uni_modules of the demo-normal example.

### Code specifications

When writing code, please note:

- Ensure that the code can pass the ESLint verification of the warehouse.
- Make sure the code format is standardized and use prettier for code formatting.
- Make sure you are not using APIs beyond the compatibility range, such as `async`, `await`.


## Submit Pull Request

### Reference Guide

If this is your first time submitting a Pull Request on GitHub, you can read the following two articles to learn:

- [First time participating in open source](https://github.com/firstcontributions/first-contributions/blob/main/translations/README.zh-cn.md)
- [How to contribute code gracefully on GitHub](https://segmentfault.com/a/1190000000736629)

### Pull Request Specification

Zebra-ui uses `eslint`, `prettier`, and `stylelint` to jointly constrain the code format.

Please run before submitting PR
```bash
pnpm run lint
```
Ensure that the format and style of the code are consistent and that there are no irregular references.

### Pull Request Process

1. Fork the main repository. If it has been forked, please synchronize the latest code of the main repository.
2. Create a new branch based on the master branch of the forked warehouse, such as `feature/xxx`.
3. Develop on the new branch. After the development is completed, submit a Pull Request to the master branch of the main warehouse.

### Submit code

Zebra uses `commitlint` and `czgit` to standardize the submission format and run commands when submitting code.

```bash
pnpm run commit
```

To ensure uniform submission format.

### Precautions

Before submitting a Pull Request, please synchronize the latest code of the master branch.