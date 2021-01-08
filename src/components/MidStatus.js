import React from 'react';
import styled from 'styled-components';

const MidStatusStyle = styled.div `
    width: 100vw;
    height: 1989px;
    background:white;
    position: relative;
    display: flex;
    flex-direction:column;
    align-items:center;
    .imageGroup{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        z-index: 1000;
        }
    .line{
        position: absolute;
        z-index: 2000;
        top: 1400px;
        left: 528px;
    }
    .colorBlock{
        width: 100vw;
        height: 1067px;
        background-color: #edebff;
        position: absolute;
        z-index: 100;
        margin-top: 922px;
        }
`
const MidStatus = () =>{
    return(
        <MidStatusStyle>
            <div className='imageGroup'>
                <h1 style={{marginTop:'174px', marginBottom:'54px'}}>현재 나의 현황을 한눈에</h1>
            <h2>지금까지의 현황과 현재 수강 중인 과목, 앞으로 들어야 할 과목을</h2>
                <br/>
            <h2>슬라이드 하나로 한눈에 확인할 수 있습니다.</h2> 
            
            <img src='/img/StatusGroup.png'/>
            <div className='line'>
            <img src='/img/dotLine.svg'/>
            </div>
            
            <div style={{marginTop:'272px',display:'flex'}}>
                <div>
                    <h1 style={{marginBottom:'25px'}}>태그 추가</h1>
                    <h2>원하는 태그를 추가할 수 있습니다.</h2>
                </div>
                <img style={{marginLeft:'104px'}} src='/img/TagImage.png'/>
            </div>
            
            </div>
            
       
            <div className="colorBlock"></div>
        </MidStatusStyle>
        
    );
}

export default MidStatus;