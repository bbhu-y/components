import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Header from './header';
import cnLocale from '../../../zh-CN';
import * as utils from '../utils';
import '../../static/style';

if (typeof window !== 'undefined') {
  // Expose to iframe
  window.react = React;
  window['react-dom'] = ReactDOM;
  // eslint-disable-next-line global-require

  // Error log statistic
  window.addEventListener('error', function onError(e) {
    // Ignore ResizeObserver error
    if (e.message === 'ResizeObserver loop limit exceeded') {
      e.stopPropagation(); 
      e.stopImmediatePropagation();
    }
  });

  if (process.env.NODE_ENV === 'production') {
    LogRocket.init('kpuw4z/ant-design');
    setupLogRocketReact(LogRocket);
  }
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        const { pathname } = props.location;
    
         this.state = {
           appLocale: cnLocale,
         };
    }

    render() {
      const { children, restProps} = this.props;
      const { appLocale } = this.state;
      const title = 'edt-formsy'
      const description = 'edt-formsy'
    
      return (
          <>
            <Helmet encodeSpecialCharacters={false}>
                <html lang='zh' />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
            </Helmet>
            <IntlProvider locale={appLocale.locale} messages={appLocale.messages} defaultLocale="en-US">
                <ConfigProvider locale={zhCN}>
                  <div className="page-wrapper">
                    <Header {...this.props} />
                    {children}
                  </div>
                </ConfigProvider>
            </IntlProvider>
          </>
         
      );
    }
  }