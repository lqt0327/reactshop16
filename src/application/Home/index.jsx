import React, { memo } from 'react';
import { connect } from 
'react-redux';
import * as actionTypes from './store/actionCreators';
import { HomePage, Head, TabWrap } from './style';

function Recommend(props){
    const { testData } = props
    const { getTestDataDispatch } = props
    const handleTest = () => {
        getTestDataDispatch({ keywords: "Hkeywords" });
    }
    console.log(props);

    const header = () => {
        return (
            <Head>
                <div className="line">
                    <a href="/" className="logo"></a>
                    <div className="m-topSearchIpt ipt">
                        <i className="icon"></i>
                        <span className="placeholder">搜索商品, 共34430款好物</span>
                    </div>
                    <div className="loginBtn">登录</div>
                </div>
                <TabWrap>
                    <div className="m-tabs">
                        <header>
                            <div className="inner" style={{position:"relative",height:"100%",width:"100%",overflow:"hidden"}}>
                                <div className="list">
                                <div className="tab active">
                                    <span className="txt">居家生活</span>
                                </div>
                                <div className="tab active">
                                    <span className="txt">居家生活</span>
                                </div>
                                <div className="tab active">
                                    <span className="txt">居家生活</span>
                                </div>
                                    {
                                        new Array(8).fill(0).map((item,index)=>{
                                            return (
                                                <div className="tab active" key={index}>
                                                    <span className="txt">居家生活</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="toggleWrap">
                        <div className="linear"></div>
                        <div className="toggle">
                            <div className="icon"></div>
                        </div>
                    </div>
                </TabWrap>
            </Head>
        )
    }

    return (
        <HomePage>
            {header()}
            <button type="button" onClick={handleTest}>测试</button>
        </HomePage>
    )
} 
const mapStateToProps = (state) => ({
    testData: state.recommend
})
const mapDispatchToProps = (dispatch) => {
    return {
        getTestDataDispatch(data) {
            dispatch(actionTypes.addHistoryKeywords(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));