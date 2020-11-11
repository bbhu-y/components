---
order: 0
title: 基本
---

简单用法

```jsx
import Checkbox from 'components/Checkbox'

class App extends React.Component {
  render () {
    return (
      <Checkbox>
        网站访问次数
      </Checkbox>
    )
  }
}
ReactDOM.render(<App/>,mountNode)
```