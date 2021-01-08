import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

const HeaderStyle = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(115deg, #6c63ff 1%, #6d64ff 58%, #8b85f4 95%);
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        .headerContainer{
            justify-content: space-between;
            width: 100vw;
            /* position: absolute; */
            display:flex;
            /* align-items: center; */
            .logoBlock{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 80px;
            
            }
            .main-image{
                overflow-x: hidden;
                height: 100vh;
            }
    }
    
`
const Header = () =>{
    return(
        
        <HeaderStyle>
            <div className="headerContainer">
                <div className='logoBlock'>
                    <img src='/img/Logo.svg' style={{marginTop:'146px', marginBottom:'160px'}}/>
                    <img src='/img/LogoGateway.svg' style={{marginBottom:'27px'}}/>
                    <div style={{
                        fontSize: '30px',
                        color: 'white',
                        marginBottom: '144px'
                    }}>
                        세종대생을 위한 한눈에 보는
                        <br/>
                        졸업 자가 진단 서비스
                    </div>
                    <Link/>
                </div>
                <img src='/img/GroupHeader.png' className="main-image"/>
            </div>
            
        </HeaderStyle>
        
       
    );
}

export default Header;