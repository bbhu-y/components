import React from 'react'

class FromsyError extends React.Component {
  render () {
    let isPristine = this.props.isPristine()
    let isFormSubmitted = this.props.isFormSubmitted()
    let isRequired = this.props.showRequired()
    let isError = this.props.showError()
    let hadError = isRequired || isError
    let showError = hadError && (!isPristine || isFormSubmitted)
    const errorMessage = this.props.getErrorMessage() || this.props.defaultErrorMessage || ''
    return showError ? (
      <span className='validation-error FromsyError'>
        {isRequired && (this.props.defaultErrorMessage || '必填项不能为空')}
        {isError && errorMessage}
      </span>
    ) : null
  }
}

export default FromsyError