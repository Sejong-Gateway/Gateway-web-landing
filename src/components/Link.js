import React from 'react';
import styled from 'styled-components';

const LinkBlock = styled.div `
    display: flex;
    align-items: center;
    white-space: nowrap;
    .linkStyle{
        /* width: 226px;
        height: 70px; */
        padding: 20px 42px;
        border-radius: 8px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;

        font-size: 20px;
        font-weight: bold;
        color: #6c63ff;

        img{
            margin-right: 16px;
        }
    }
`

const Link =()=>{

    return(
        <LinkBlock>
        <div className = 'linkStyle' style={{marginRight:'34px'}}>
            <img src='/img/google-play.png'/>
            Google Play
        </div>

        <div className = 'linkStyle'>
            <img src='/img/apple.png'/>
            App Store
        </div>
        </LinkBlock>
    );
}

export default Link;