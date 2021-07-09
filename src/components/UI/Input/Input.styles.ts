import styled from 'styled-components'

export const InputContainer = styled.label`
    position: relative;
`
export const CurrencySymbol = styled.span`
    color: white;
    font-family: "Montserrat",sans-serif;
    font-weight: bold;
    font-size: 22px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(var(--spacing-unit));
`

export const NumberStyledInput = styled.input`
    background: none;
    border: 1px solid white;
    padding: calc(var(--spacing-unit)/2) calc(var(--spacing-unit));
    transition: border 0.2s;
    color: white;
    font-family: "Montserrat",sans-serif;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    min-width: 120px;
        /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
        /* Firefox */
    &[type=number] {
    -moz-appearance: textfield;
    }
    &:focus{
        outline: none;
        border: 1px solid var(--secondary-color-light);
    }
`