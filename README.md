# Progressive-Tune


<!-- ![](https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E4%B8%AD-green) -->

![](https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E5%B0%B1%E7%BB%AA-orange)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![](https://img.shields.io/crates/l/s)](https://img.shields.io/crates/l/s)
![](https://img.shields.io/badge/Vue-%5E2.6.14-success)
![](https://img.shields.io/badge/Node-%20%5E16.18.0-brightgreen)
![](https://img.shields.io/badge/npm-%5E8.19.2-blue)

Progressive-Tune的 Web 页面

---

(预览页面)--[Demo-Page]()

---

## 内容列表

- [Progressive-Tune](#progressive-tune)
  - [内容列表](#内容列表)
  - [背景](#背景)
- [Git规范](#git规范)
  - [Git分支命名](#git分支命名)
- [Git Commit Message格式](#git-commit-message格式)
  - [type 提交类型：](#type-提交类型)
  - [subject 提交描述](#subject-提交描述)
  - [相关仓库](#相关仓库)
  - [维护者](#维护者)
  - [如何贡献](#如何贡献)
    - [贡献者](#贡献者)
    - [特别感谢：](#特别感谢)
  - [使用许可](#使用许可)
  - [本地部署](#本地部署)

## 背景

`Progressive-Tune` 最开始因为 [@JDSA Ling](https://github.com/LingASDJ)
在 [Rosy-DR-Code-Ling](https://github.com/School-of-Website-Engineering/Rosy-DR-Code-Ling)
项目中了解到[@Aislandz](https://github.com/Aislandz)的 `Progressive-Tune`项目Web 界面需要优化，因此我们一拍即合，这个项目也就从这开始了。

# Git规范

## Git分支命名

* `master`：主分支，负责记录上线版本的迭代，该分支代码与线上代码是完全一致的。
* `develop`：开发分支，该分支记录相对稳定的版本，所有的feature分支和bugfix分支都从该分支创建。其它分支为短期分支，其完成功能开发之后需要删除
* `feature/*`：特性（功能）分支，用于开发新的功能，不同的功能创建不同的功能分支，功能分支开发完成并自测通过之后，需要合并到 develop 分支，之后删除该分支。
* `bugfix/*`：bug修复分支，用于修复不紧急的bug，普通bug均需要创建bugfix分支开发，开发完成自测没问题后合并到 develop 分支后，删除该分支。
* `release/*`
  ：发布分支，用于代码上线准备，该分支从develop分支创建，创建之后由测试发布到测试环境进行测试，测试过程中发现bug需要在该release分支上进行bug修复，所有bug修复完后，上线之前，需要合并该release分支到master分支和develop分支。
* `hotfix/`*：紧急bug修复分支，该分支只有在紧急情况下使用，从master分支创建，用于紧急修复线上bug，修复完成后，需要合并该分支到master分支以便上线，同时需要再合并到develop分支。

# Git Commit Message格式

**type : subject**

## type 提交类型：

* `revert:` 回滚代码
* `feat:` 新特性
* `fix:` 错误修复
* `improvement:` 功能改进
* `docs:` 文档修改
* `perf:`性能修改
* `test:`测试
* `refactor:` 代码重构
* `build:` 其他修改, 比如构建流程, 依赖管理

## subject 提交描述

**对应内容是commit 目的的简短描述，不超过50个字符**

---

## 相关仓库

- [Rosy-DR-Code-Ling](https://github.com/School-of-Website-Engineering/Rosy-DR-Code-Ling) — 💌 Rosy-DR-Code-Ling的Web页面
- [E-commerce](https://github.com/Galaxy-Wish-Star/E-commerce) — 助农电商项目-Vue
- [magic-ling-pixel-dungeon](https://github.com/AnsdoShip/Magic-Ling-Pixel-Dungeon) — 魔绫像素地牢
- [SkyHell](https://github.com/LingASDJ/SkyHell) — 天狱之境-TR
## 维护者

[@mason369](https://github.com/mason369)
[@liusxs](https://github.com/liusxs)
[@LingASDJ](https://github.com/LingASDJ)

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/School-of-Automation-Engineering/Progressive-Tune/issues) 或者提交一个
Pull Request。

Progressive-Tune 遵循 [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) 行为规范。

### 贡献者


<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/mason369">
            <img src="https://avatars.githubusercontent.com/u/93964390?v=4" width="100;" alt="mason369"/>
            <br />
            <sub><b>Mason</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->

***感谢以上参与项目的人***

---

### 特别感谢：

[IntelliJ WebStorm](https://zh.wikipedia.org/zh-hans/IntelliJ_IDEA) 是一款在各方面最大限度地提高开发人员生产力的 IDE，适用于前端平台语言。

<img src="https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm_icon.png?_gl=1*10616q8*_ga*MTEwMzE4MDQwOS4xNjU0NzQ0NjIw*_ga_9J976DJZ68*MTY1NTA5NzcyOC4yLjEuMTY1NTA5ODE3Ni42MA..&_ga=2.237879491.294686240.1655097729-1103180409.1654744620" style="width:200px; float:left"/>

[Node.js](https://nodejs.org/en/) 对一些特殊用例进行优化，提供替代的API，使得V8在非浏览器环境下运行得更好，V8引擎执行Javascript的速度非常快，性能非常好，基于Chrome
JavaScript运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。

<img src="https://nodejs.org/static/images/logo.svg" style="width:200px; float:left"/>

[Visual Studio Code](https://code.visualstudio.com/)在 Windows、macOS 和 Linux 上运行的独立源代码编辑器。
JavaScript 和 Web 开发人员的最佳选择，具有几乎可支持任何编程语言的扩展。

<img src="https://visualstudio.microsoft.com/wp-content/uploads/2019/09/vs-code-responsive-01-1.png" style="width:200px; float:left"/>

[Vue.js](https://cn.vuejs.org/)前端先进的渐进式JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。

<img src="https://cn.vuejs.org/logo.svg" style="width:200px; float:left" />

**当前进度**：

- [x] 人员招募
- [ ] 方案设计
- [ ] 编码
- [ ] Debug 测试
- [ ] 完成！

## 使用许可

[Apache License 2.0](LICENSE) © Richard Littauer

## 本地部署

``` bash
//出于Github缓存和最新依赖考虑，我们默认不提供node_modules的文件夹以及依赖项
//如果是首次配置,需要优先安装CNPM
# npm install -g cnpm -registry=https://registry.npm.taobao.org
//然后安装依赖，通过以下命令
# cnpm install

//serve 服务器测试
# cnpm run serve

//构建模块
# cnpm run build

```
