---
order: 1
title: 禁用
---

不可用状态

```jsx
import Checkbox from 'components/Checkbox'

class App extends React.Component {
  render () {
    return (
      <div>
        <Checkbox
          checked={true}
          disabled
        >
        网站访问次数
        </Checkbox>
        <Checkbox
          checked={false}
          disabled
        >
        网站访问次数
        </Checkbox>
      </div>
    )
  }
}
ReactDOM.render(<App/>,mountNode)
```