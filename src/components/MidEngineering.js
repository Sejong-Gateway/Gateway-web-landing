import React from 'react';
import styled from 'styled-components';

const MidEngineeringStyle = styled.div `
    .responsive {
        width:90rem;
        margin: 0 auto;
        @media(max-width:64rem){
        width: 48rem;
        }
        @media(max-width:48rem){
        width: 100vw;
        }
    }
    width: 100vw;
    height: 127rem;
    background:white;

    position: relative;
    display: flex;
    flex-direction:column;
    align-items:center;
    .colorBlock{
        width: 100vw;
        height:  51.125rem;
        background-color: #f7f7ff;
        position: absolute;
        z-index: 100;
        margin-top: 75.875rem;
    }
`
const MidEngineering = () =>{
    return(
        <MidEngineeringStyle>
            <h1 style={{marginTop:'10.875rem', marginBottom:'3.375rem'}}>공학인증도 편리하게</h1>
            <h2>공학인증 과목의 필수 선·후수와 설계과목 이수 순서를 볼 수 있습니다.</h2>
            <br/>
            <h2>필수 선·후수에서 원하는 과목을 눌러 후수 과목을 확인할 수 있고,</h2>
            <h2>이미 이수한 과목은 진한 보라색으로 표시됩니다.</h2>
            <img style={{zIndex:'1000'}}src='/img/EngineeringImg.png'/>

            <div className="colorBlock"></div>
        </MidEngineeringStyle>
        
    );
}

export default MidEngineering;