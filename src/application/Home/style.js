import styled from 'styled-components';
import indexLogo from '../../assets/images/home/indexLogo.webp';
import search2 from '../../assets/images/home/search2.webp';
import arrowDown from '../../assets/images/home/arrow-down.webp';
import style from '../../assets/global-style';


export const HomePage = styled.div`
    width:100vw;
`

export const Head = styled.div`
    width: 100%;
    & > .line {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        padding: .21333rem .4rem;
        background-color: ${style["background-color-v3"]};
        & > .logo {
            width: 1.84rem;
            height: .53333rem;
            background-image: url(${indexLogo});
            display: inline-block;
            margin-right: .26667rem;
            background-size: cover;
            background-position: center;
        }
        & > .ipt {
            flex-grow: 1;
        }
        & > .m-topSearchIpt {
            display: flex;
            flex-flow:row nowrap;
            align-items:center;
            justify-content:center;
            height: .74667rem;
            font-size: ${style["font-size-m"]};
            background-color: ${style["background-color-v2"]};
            border-radius: .10667rem;
            & > .icon {
                background-image: url(${search2});
                background-size: 100% 100%;
                display:inline-block;
                vertical-align:middle;
                background-repeat: no-repeat;
                width: .37333rem;
                height: .37333rem;
                margin-right: .13333rem;
            }
            & > .placeholder {
                color: ${style['font-color-v1']};
            }
        }
        & > .loginBtn {
            width: .98667rem;
            height: .53333rem;
            line-height: .53333rem;
            text-align: center;
            color: ${style["font-color-light"]};
            border: 1px solid ${style["font-color-light"]};
            border-radius: .10667rem;
            margin-left: .21333rem;
            font-size: ${style["font-size-s"]};
        }
    }
`

export const TabWrap = styled(Head)`
    position: relative;
    z-index: 2;
    background: ${style["background-color-v3"]};
    margin-top: -.01333rem;
    & > .m-tabs {
        padding-right: 1.33333rem;
        width: 100%;
        box-sizing:border-box;
        & > header {
            display: flex;
            flex-flow: row nowrap;
            background-color: ${style["background-color-v3"]};
            position: relative;
            .inner,.list {
                display: flex;
                flex-flow: row nowrap;
            }
            .list {
                flex-shrink:0;
                padding:0 .4rem;
                background-color: ${style["background-color-v3"]};
                .tab {
                    margin-left: .26667rem;
                    flex-shrink:0;
                    position: relative;
                    display:flex;
                    flex-flow:row nowrap;
                    align-items:center;
                    justify-content:center;
                    z-index:1;
                    text-align:center;
                    & > .txt {
                        display: inline-block;
                        padding: 0 .21333rem;
                        line-height: .8rem;
                        font-size: .37333rem;
                        color: #333;
                        text-align: center;
                    }
                }
                .tab:first-of-type{
                    margin-left:0;
                }
                .tab.active {
                    color: ${style["font-color-light"]};
                    & > .txt {
                        position: relative;
                        color: ${style["font-color-light"]};
                    }
                    .txt:after {
                        content: ' ';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: .05333rem;
                        background-color: ${style["font-color-light"]};
                    }
                }
            }
        }
    }
    .toggleWrap {
        display:flex;
        flex-grow:0;
        align-items:center;
        justify-content:center;
        position: absolute;
        top: 0;
        right: 0;
        & > .linear {
            width: .8rem;
            height: .8rem;
            background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);
            z-index:1;
        }
        & > .toggle {
            width: 1.33333rem;
            height: .8rem;
            text-align: center;
            background: #fff;
            & > .icon {
                background-image: url(${arrowDown});
                background-size:100% 100%;
                margin-top: .2rem;
                display: inline-block;
                vertical-align: middle;
                background-repeat: no-repeat;
                width: .4rem;
                height: .4rem;
                transition: transform .5s;
            }
        }
        & > .toggle.toggleActive .icon {
            transform:rotate(180deg);
        }
    }
`