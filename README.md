# yc-search

## props

|  参数名称   | 类型  | 默认值 | 描述
|  ----  | ----  | ---- | ---- |
| options  | option[] | [] | 多出来的按钮配置见下方option |
| hiddenSearch  | Boolean | false | 是否隐藏搜索button |
| hiddenInput  | Boolean | false| 是否隐藏输入框 |


option 参数

|  参数名称   | 类型  | 默认值 | 描述
|  ----  | ----  | ---- | ---- |
| title  | string | '' | 按钮的文字 |
| emit  | string | '' | 按钮响应事件函数名称 |
| type  | string | '' | 按钮主题(primary,success,info,warning,danger,normal) |
| icon  | string | '' | 字体图标使用element-icon的class |
