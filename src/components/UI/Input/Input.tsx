import React from 'react'
import {NumberStyledInput, InputContainer, CurrencySymbol} from './Input.styles'

interface InheritedProps{
    min: number,
    max: number,
    value: number,
    onChange: (p?: any) => void,
    isCurrency?: boolean,
    style?: Object
}

// This still need to validate if the user enter an invalid number (outside range)

const Input: React.FC<InheritedProps> = (props) => {
    const validateNumber = (num: number, max: number) => {
        if(num === 0) return null;
        if(num > max) return max;
        return num
    }

    return (
        <InputContainer style={props.style}>
            {props.isCurrency && <CurrencySymbol>$</CurrencySymbol>}
            <NumberStyledInput 
                type="number"
                min={props.min}
                max={props.max}
                value={props.value}
                onChange={e=> props.onChange(validateNumber(Number(e.target.value),props.max))}
            />
        </InputContainer>
    )
}

export default Input
