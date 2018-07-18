# 微信小程序-月日时分选择器-仿抽奖助手

> 参考这个选择器的思路修改而成的[leesonp/chooseTime](https://github.com/leesonp/chooseTime)

## 用法
1 在要添加选择器的位置插入组件
`<date-picker show="{{show}}" bindchangeDate="changeDate"/>`

2 `show`用来控制组件显示；`bindchangeDate`：监听时间变化的方法

3 返回的数据在e.detail 中,包括年月日时分秒












