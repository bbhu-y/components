import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'bisheng/router';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Select, Menu, Row, Col, Icon,  Button, Dropdown } from 'antd';
import * as utils from '../utils';
import { version as antdVersion } from '../../../../package.json';


class Header extends React.Component {
    getMoreMenuItems = () => {
      return (
        <Menu.Item>
          edt-components
        </Menu.Item>
      )
    }
    getMoreMenu = () => {
      const menu = <Menu>{this.getMoreMenuItems()}</Menu>;
      const downstyle = this.props.isRTL ? '-1px 2px 0 0' : '-1px 0 0 2px';
      return (
        <Dropdown overlay={menu} placement="bottomRight" key='more'>
          <Button size="small" className="header-more-button">
            <FormattedMessage id="app.header.menu.more" />
            <Icon
              type='down'
              style={{
                fontSize: '9px',
                margin: downstyle,
                verticalAlign: 'middle',
              }}
            />
          </Button>
        </Dropdown>
      );
    }
    renderMenu = () => {
        const { location, themeConfig, intl: { locale } } = this.props;
        const module = location.pathname
        .replace(/(^\/|\/$)/g, '')
        .split('/')
        .slice(0, -1)
        .join('/');

        let activeMenuItem = module || 'home';
        if (location.pathname === 'CHANGELOG') {
          activeMenuItem = 'docs/react';
        }else if(location.pathname.includes('docs/components')) {
          activeMenuItem = 'components'
        }

        const docVersions = { ...themeConfig.docVersions, [antdVersion]: antdVersion };
        const versions = Object.keys(docVersions);
        return [
            this.getMoreMenu(),
            <Button size="small"  key="version" className="header-lang-button">
              {versions[versions.length-1]}
              </Button>,
            <Menu
              className="menu-site"
              mode='horizontal'
              selectedKeys={[activeMenuItem]}
              id="nav"
              key="nav"
            >
              <Menu.Item key="home" className="hide-in-home-page">
                <Link to={utils.getLocalizedPathname('/')}>
                  <FormattedMessage id="app.header.menu.home" />
                </Link>
              </Menu.Item>
              <Menu.Item key="docs/react">
                <Link to={utils.getLocalizedPathname('/docs/react/start')}>
                  <FormattedMessage id="app.header.menu.documentation" />
                </Link>
              </Menu.Item>
              <Menu.Item key="components">
                <Link to={utils.getLocalizedPathname('/docs/components/introduce')}>
                  <FormattedMessage id="app.header.menu.components" />
                </Link>
              </Menu.Item>
            </Menu>,
          ];
    }
    render() {
        const { location, themeConfig, intl: { locale } } = this.props;
        const headerClassName = classNames({
            clearfix: true,
        });
        return (
            <header id="header" className={headerClassName}>
                <Row>
                    <Col xxl={4} xl={5} lg={5} md={5} sm={24} xs={24}>
                        <Link to={utils.getLocalizedPathname('/')} id="logo">
                            edt-formsy
                        </Link>
                    </Col>
                    <Col xxl={20} xl={19} lg={19} md={19} sm={0} xs={0}>
                        {this.renderMenu()}
                    </Col>
                </Row>
            </header>
        )
    }
}

export default injectIntl(Header);