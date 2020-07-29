import React, { memo } from 'react';
import { connect } from 
'react-redux';
import * as actionTypes from './store/actionCreators';

function Recommend(props){
    const { testData } = props
    const { getTestDataDispatch } = props
    const handleTest = () => {
        getTestDataDispatch({ keywords: "Hkeywords" });
    }
    console.log(props);
    return (
        <>
            Recommend
            <button type="button" onClick={handleTest}>测试</button>
        </>
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