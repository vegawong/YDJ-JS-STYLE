

本配置基于airbnb的配置项目做的修改,[源项目README](airbnb-README.md)

### _Usage:_

- clone 本项目到本地

  ```ruby
  $ git clone http://gitlab.jingzhuan.cn/yidejia/yidejia-js-style.git
  ```

  或

  ```ruby
  $ git clone git@gitlab.jingzhuan.cn:yidejia/yidejia-js-style.git
  ```

- cd 进入该项目的子目录

  ```ruby
  # 其中安装依赖会用到FB的yarn包管理器
  $ cd yidejia-js-style && npm run link:eslint
  ```

- 在你的项目中引用改配置

  ```ruby
  $ cd /yourProject

  $ npm link eslint-config-yidejia

  # 创建.eslintrc文件, (也可以手动创建)
  $ eslint --init

  ```

  在创建的.eslintrc文件中添加以下内容

  ```json
  {
    "root": true,
    "extends": "yidejia",
    "env": {
      "browser": true
    },
    "rules": {
    }
  }
  ```

  配合你使用的编辑器eslint插件进行相关设置即可使用

- ### EDITORCONFIG

  编辑器的`editorconfig`插件配置

  - USAGE:

  ```ruby
  $ npm run link:editorconfig
  ```

