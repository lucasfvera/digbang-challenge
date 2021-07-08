import styled from "styled-components";


export const PrimaryActionBtn = styled.button`
    border: none;
    padding: var(--spacing-unit);
    background-color: var(--action-btn-primary-color);
    color: var(--pure-white);
    cursor: pointer;
    background-position: center;
    transition: background 0.8s;
    &:hover{
        background-color: var(--action-btn-primary-color-hover);
    }
    &:active {
        background-color: var(--action-btn-primary-color-clicked);
        background-size: 100%;
        transition: background 0s;
    }
`

export const SecondaryActionBtn = styled.button`
    border: none;
    padding: var(--spacing-unit);
    background-color: var(--action-btn-secondary-color);
    color: var(--pure-white);
    cursor: pointer;
    background-position: center;
    transition: background 0.8s;
    &:hover{
        background-color: var(--action-btn-secondary-color-hover);
    }
    &:active {
        background-color: var(--action-btn-secondary-color-clicked);
        background-size: 100%;
        transition: background 0s;
    }
`