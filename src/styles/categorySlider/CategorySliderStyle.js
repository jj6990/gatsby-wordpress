import styled from 'styled-components';
import device from '../Device';

const CategorySliderStyle = styled.section`
    .title-container {
        display: flex;
        justify-content:center;

    }

    h2 {
        font-size: 32px;
        text-align: center;
    }

    .category-cards-container {
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        overflow-x: auto;
    }

    .utility-card {
        background-color: var(--primary-color);
        color: white;
        padding: 15px;
    }

    .card-container {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        margin: 15px;
        min-width: 185px;
        width: 100%;
        position: relative;
    }

    .arrow-container {
        display: flex;
        justify-content: flex-end;
    }

    h3 {
        font-size: 20px;
        text-transform: uppercase;
    }

    .link-button {
        text-transform: uppercase;
        background-color: white;
        border-radius: 4px;
        text-align: center;
        padding: 16px;
        word-wrap: break-word;
    }

    .link-container {
        display: flex;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        bottom: 8%;
        left: 50%;
        margin-left: -40%;
        width: 150px;
    }

    .svg-inline--fa.fa-w-16 {
        width: 30px;
        height: 30px;
    }

    .gatsby-image-wrapper {
        object-fit: cover;

    }

    /* width */
    .category-cards-container::-webkit-scrollbar {
    height: 5px;
    
    }

    /* Track */
    .category-cards-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    .category-cards-container::-webkit-scrollbar-thumb {
    background:var(--primary-color);
    }

    /* Handle on hover */
    .category-cards-container::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`;

export default CategorySliderStyle;