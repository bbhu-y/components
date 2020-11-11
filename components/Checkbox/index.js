import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'

class MyCheckbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: this.props.checked || false
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.checked !== this.props.checked ||
      nextProps.checked !== this.state.checked) {
      this.setState({
        checked: nextProps.checked
      })
    }
  }
  handleChange = (event) => {
    const { beforeClick } = this.props
    Promise.resolve().then(() => {
      if (beforeClick) {
        return beforeClick(this.state.checked, event)
      } else {
        return true
      }
    }).then((clickAble) => {
      if (clickAble) {
        let checked = !this.state.checked
        this.setState({checked}, () => {
          this.props.onChange && this.props.onChange(checked, event)
        })
      }
    })
  }
  handlClick = (e) => {
    if (this.props.stopClickPropagation) {
      e.stopPropagation()
    }
  }
  render() {
    let checked = this.state.checked
    return (
      <Checkbox
        className={'Checkbox ' + (this.props.className || '')}
        checked={checked}
        indeterminate={!checked && this.props.indeterminate}
        onChange={this.handleChange}
        onClick={this.handlClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </Checkbox>
    )
  }
}

MyCheckbox.propTypes = {
  /**
   * 是否选中
   */
  checked: PropTypes.bool,
  /**
   * 是否部分选中，只在未选中时控制样式用
   */
  indeterminate: PropTypes.bool,
  /**
   * 是否阻止点击事件冒泡
   */
  stopClickPropagation: PropTypes.bool,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   * 点击改变状态前的判断函数，返回true则点击有效，返回false则点击无效，支持返回 Promise 包裹值
   * @returns {boolean|Promise}
   */
  beforeClick: PropTypes.func,
  /**
   * 变化时回调函数
   * @param {boolean} value
   */
  onChange: PropTypes.func
}

MyCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  stopClickPropagation: true
}

export default MyCheckbox