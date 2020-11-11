---
order: 0
title: 快速上手
---

## 安装

设置私有源

npm config set registry http://42.186.91.212:8100/

安装

npm install --save edt-formsy

## 使用
```jsx
import React from 'react';
import VInput from 'edt-formsy/Input/VInput'
import Formsy from 'edt-formsy'

class Demo extends React.Component {
  handleValidSubmit = (data) => {
    console.log(data)
  }
  handleInvalidSubmit = () => {
    console.log('invalid submit')
  }
  render () {
    return (
      <Formsy
        ref={_ref => {this.formsy = _ref}}
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
        <VInput
          name='user'
        />
      </Formsy>
    )
  }
}

export default Demo
```

## 相关文档
https://github.com/christianalfoni/formsy-react/blob/master/API.md