import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

const FooterStyle = styled.div `
    width: 100vw;
    background : url('/img/FooterImg.png')no-repeat;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding-bottom:241px;
`
const Footer = () =>{
    return(
        <FooterStyle>
            <div style={{
                fontSize: '50px',
                fontWeight: 'bold',
                color: 'white',
                marginTop: '241px',
                marginBottom: '15px'
            }}>
                졸업 요건을 효율적으로 관리해보세요.
            </div>
            <div style={{
                fontSize: '40px',
                color: 'white',
                marginBottom: '110px'
            }}>
            게이트웨이로 졸업 관리 시작하기
            </div>
            <Link/>
        </FooterStyle>
    );
}

export default Footer;