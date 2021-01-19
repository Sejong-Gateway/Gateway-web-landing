import React from 'react';
import styled from 'styled-components';

const LinkBlock = styled.div `
    display: flex;
    align-items: center;
    white-space: nowrap;
    .linkStyle{
        padding: 1.25rem 2.625rem;
        border-radius: 0.5rem;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;

        font-size: 1.25rem;
        font-weight: bold;
        color: #6c63ff;

        img{
            margin-right: 1rem;
        }
    }
`

const Link =()=>{

    return(
        <LinkBlock>
        <a href="https://play.google.com/store/apps/details?id=jerry.app.gateway" alt="link" style={{textDecoration:"none"}}>
        <div className = 'linkStyle' style={{marginRight:'2.125rem'}}>
            <img src='/img/google-play.png'/>
            Google Play
        </div>
        </a>

        <a href="https://www.naver.com/" alt="link" style={{textDecoration:"none"}}>
        <div className = 'linkStyle'>
            <img src='/img/apple.png'/>
            App Store
        </div>
        </a>
        </LinkBlock>
    );
}

export default Link;