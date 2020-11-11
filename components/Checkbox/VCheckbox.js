import React from 'react'
import PropTypes from 'prop-types'
import { propTypes, withFormsy } from 'formsy-react'
import ControlGroup from '../ControlGroup'
import FormsyError from '../FormsyError'
import Checkbox from '../Checkbox'

class VCheckbox extends React.Component {
  changeValue = (value) => {
    this.props.setValue(value);
    this.props.onChange && this.props.onChange(value)
  }
  render() {
    let { className, title, hidden, inline } = this.props
    const groupClassName = `${className || ''} VCheckbox`

    return (
      <ControlGroup
        className={groupClassName}
        title={title}
        hidden={hidden}
        inline={inline}
      >
        <Checkbox
          onChange={this.changeValue}
          checked={this.props.getValue()}
          disabled={this.props.disabled}
          beforeClick={this.props.beforeClick}
        >
          {this.props.children}
        </Checkbox>
        <FormsyError {...this.props}/>
      </ControlGroup>
    );
  }
}

VCheckbox.propTypes = {
  /**
   * 组件内容
   */
  children: PropTypes.node,
  /**
   * 类名
   */
  className: PropTypes.string,
  /**
   * 标题
   */
  title: PropTypes.string,
  /**
   * 是否隐藏
   */
  hidden: PropTypes.bool,
  /**
   * 是否是inline-block模式
   */
  inline: PropTypes.bool,

  ...propTypes,
}

VCheckbox.defaultProps = {
  children: null,
  className: null,
  title: null,
  hidden: false,
  inline: false
}

export default withFormsy(VCheckbox)