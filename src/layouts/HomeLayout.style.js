import styled from 'styled-components';
import style from '../assets/global-style';
import TabBarImg from '../assets/images/homeLayout/tabBar.webp';

export const Page = styled.div`
    width:100vw;
    min-height:calc(100vh - 1.3067rem);
    background-color:${style["background-color"]};
    & > .test {
        width:100px;
        height:100px;
        background-image: url(${TabBarImg});
        background-size: .53333rem 6.53333rem;
        background-position: 0 -2rem;
        background-repeat: no-repeat;
    }
`

export const BottomNav = styled.nav`
    width:100vw;
    position:fixed;
    bottom:0;
    left: 0;
    height: 1.3067rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 0.5rem;
    box-sizing:border-box;
    z-index:99;
    & > .item {
        height: 100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        & > .text {
            display: block;
            margin-top: .09333rem;
            font-size: ${style["font-size-s"]};
            color: ${style["font-color-v1"]};
            line-height: 1;
        }
        & > .text.active {
            color:${style["font-color-light"]};
        }
        & > .icon-home {
            background-image: url(${TabBarImg});
            background-position: 0 -3.3334rem;
            background-repeat: no-repeat;
            background-size: 0.5333rem 6.5333rem;
            width: .53333rem;
            height: .53333rem;
        }
        & > .icon-home.active {
            background-position: 0 -2.6667rem;
        }
        & > .icon-class {
            background-image: url(${TabBarImg});
            background-position: 0 -2rem;
            background-repeat: no-repeat;
            background-size: 0.5333rem 6.5333rem;
            width: .53333rem;
            height: .53333rem;
        }
        & > .icon-class.active {
            background-position: 0 -1.3333rem;
        }
        & > .icon-deserve {
            background-image: url(${TabBarImg});
            background-position: 0 -4.6667rem;
            background-repeat: no-repeat;
            background-size: 0.5333rem 6.5333rem;
            width: .53333rem;
            height: .53333rem;
        }
        & > .icon-deserve.active {
            background-position:0 -4rem;
        }
        & > .icon-cart {
            background-image: url(${TabBarImg});
            background-position: 0 -.66667rem;
            background-repeat: no-repeat;
            background-size: 0.5333rem 6.5333rem;
            width: .53333rem;
            height: .53333rem;
        }
        & > .icon-cart.active {
            background-position: 0 0;
        }
        & > .icon-my {
            background-image: url(${TabBarImg});
            background-position: 0 -6rem;
            background-repeat: no-repeat;
            background-size: 0.5333rem 6.5333rem;
            width: .53333rem;
            height: .53333rem;
        }
        & > .icon-my.active {
            background-position: 0 -5.3333rem;
        }
    }
`