import styled from 'styled-components';

import Background from '../../assets/background-png.svg';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${(props) => props.theme.secondWhite};
    background-size: cover;
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)      
    ),
    url('${Background}');
    min-height: 100vh;
`;

export const Banner = styled.div`
    background: url('${Texture}');
    background-color: ${(props) => props.theme.black};
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

    img {
        width: 130px;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: ${(props) => props.theme.green};
    text-align: center;
    position: relative;

    &::after {
        position: absolute;
        left: calc(50% + -28px);
        bottom: 0;
        content: ' ';
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.green};
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
    gap: 40px;
`;