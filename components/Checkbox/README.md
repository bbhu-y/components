---
category: Components
title: Checkbox
subtitle: 多选框
---

复选框控件 - 对 ant-design 的 Checkbox 组件的包装


## API
### Checkbox
| 名称 | 类型 | 默认值 | 描述 |
|:-----|:-----|:-----|:-----|
| checked | bool | false |  是否选中 |
| disabled | bool | false |  是否禁用 |
| beforeClick | function |  |  点击改变状态前的判断函数，返回true则点击有效，返回false则点击无效，支持返回 Promise 包裹值<br><br>**Signature:**<br>`function() => undefined`<br> |
| onChange | function |  |  变化时回调函数<br><br>**Signature:**<br>`function(value: boolean) => void`<br>*value:* null |

### VCheckbox
| 名称 | 类型 | 默认值 | 描述 |
|:-----|:-----|:-----|:-----|
| children | node | null |  组件内容 |
| className | string | null |  类名 |
| title | string | null |  标题 |
| hidden | bool | false |  是否隐藏 |
| inline | bool | false |  是否是inline-block模式 |
