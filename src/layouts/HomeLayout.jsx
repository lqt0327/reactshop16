import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { BottomNav, Page } from './HomeLayout.style';
import config from '../api/config';

// const WithAnimationRouters = withRouter(AnimationRouters)
function Home(props) {
    const [bHomeStyle,setBHomeStyle] = useState(true);
    const [bCartStyle,setBCartStyle] = useState(false);
    const [bClassStyle,setBClassStyle] = useState(false);
    const [bDesStyle,setBDesStyle] = useState(false);
    const [bMyStyle,setBMyStyle] = useState(false);

    const { route } = props;

    useEffect(() => {
        handleNavStyle()
        return () => {
        }
    })
    const goPage = (url) => () => {
        console.log(props);
        props.history.push(url);
    }
    const handleNavStyle = () => {
        console.log(props.location.pathname)
        switch(props.location.pathname) {
            case config.path + 'home':
                setBHomeStyle(true)
                setBCartStyle(false)
                setBClassStyle(false)
                setBMyStyle(false)
                setBDesStyle(false);
                break;
            case config.path + 'cart':
                setBHomeStyle(false)
                setBCartStyle(true)
                setBClassStyle(false)
                setBMyStyle(false)
                setBDesStyle(false);
                break;
            case config.path + 'classify':
                setBHomeStyle(false)
                setBCartStyle(false)
                setBClassStyle(true)
                setBMyStyle(false)
                setBDesStyle(false);
                break;
            case config.path + 'deserve':
                setBHomeStyle(false)
                setBCartStyle(false)
                setBClassStyle(false)
                setBMyStyle(false)
                setBDesStyle(true);
                break;
            case config.path + 'user':
                setBHomeStyle(false)
                setBCartStyle(false)
                setBClassStyle(false)
                setBDesStyle(false);
                setBMyStyle(true)
                break;
            default:
                break;
        }
    }
    return (
        <Page>
            {renderRoutes(route.routes)}
            <BottomNav>
                <ul className="item" onClick={goPage('/home')}>
                    <li className={bHomeStyle ? "icon-home active" : "icon-home"}></li>
                    <li className={bHomeStyle ? "text active" : "text"}>首页</li>
                </ul>
                <ul className="item" onClick={goPage('/classify')}>
                    <li className={bClassStyle ? "icon-class active" : "icon-class"}></li>
                    <li className={bClassStyle ? "text active" : "text"}>分类</li>
                </ul>
                <ul className="item" onClick={goPage('/deserve')}>
                    <li className={bDesStyle ? "icon-deserve active" : "icon-deserve"}></li>
                    <li className={bDesStyle ? "text active" : "text"}>值得买</li>
                </ul>
                <ul className="item" onClick={goPage('/cart')}>
                    <li className={bCartStyle ? "icon-cart active" : "icon-cart"}></li>
                    <li className={bCartStyle ? "text active" : "text"}>购物车</li>
                </ul>
                <ul className="item" onClick={goPage('/user')}>
                    <li className={bMyStyle ? "icon-my active" : "icon-my"}></li>
                    <li className={bMyStyle ? "text active" : "text"}>个人</li>
                </ul>
            </BottomNav>
        </Page>
    )
}

export default React.memo(Home);