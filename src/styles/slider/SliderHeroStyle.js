import styled from 'styled-components';
import device from '../Device';

const SliderHeroStyle = styled.div` 
        .slider-container__inner {
            display: flex;
            flex-flow: row;
            width: calc(4 * 100%);
            position: relative;
        }

        .slider {
            width:100%;
            position:relative;

        }

        .gatsby-image-wrapper {
            display: flex;
            width: 100vw;
            height: 500px;
        }

        img {
            width: 100%; 
        }

        .info-hero-container {
            position: absolute;
            bottom: 5%;
            left: 0%;
            width: 33%;
            height: auto;
            padding: 20px;
            background-color: transparent;
            display: flex;
            flex-flow: column;
            justify-content: center;
            text-align: left;
            border-bottom: 5px solid var(--primary-color);
            transition-property: border, background-color;
            transition-duration: .5s;
            transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
            
            @media ${device.laptop} {
                background-color: #f6f6f600;
                border-bottom: none;
            }
        }

        .info-hero-container:hover {
            border-bottom: 5px solid var(--primary-color);
            background-color: var(--gray-light-color);
        } 

        

        h1 {
            font-size: 30px;
            margin: 0;
        }

        p {
            font-size: 16px;
        }

        .slider-btns {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
        }

        .slider-controls {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;

        }

        .slider-controls button {
            background: none;
            border: none;
            cursor: pointer;
        }

        .slider-next-btn, 
        .slider-prev-btn {
            display: flex;
            justify-content: space-between;
        }

        .slider-next-btn svg {
            margin-left: 10px;
        }

        .slider-prev-btn svg {
            margin-right: 10px;
        }
`

export default SliderHeroStyle;