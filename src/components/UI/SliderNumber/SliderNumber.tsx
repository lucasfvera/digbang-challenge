import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { SliderWrapper, SupraLabelsContainer, SliderRangeLabelsContainer, SliderContainer } from './SliderNumber.styles';
import {BodyStyled} from '../Typography/Typography.styles';
import Input from '../Input'


interface InheritedProps{
    value: number,
    minValue: number,
    maxValue: number,
    label: string,
    onChange: ()=>void,
    isCurrency?: boolean,
}

const SliderNumber: React.FC<InheritedProps> = (props) => {
    return (
        <SliderWrapper>
            <SupraLabelsContainer>
                <BodyStyled color="white" marginless large extralight>{props.label}</BodyStyled>
                <Input isCurrency={props.isCurrency} min={props.minValue} max={props.maxValue} value={props.value} onChange={props.onChange}/>
            </SupraLabelsContainer>
            <SliderContainer>
                <Slider
                    value={props.value}
                    min={props.minValue}
                    max={props.maxValue}
                    onChange={props.onChange}
                    handleStyle={{border: "none"}}
                    trackStyle={{backgroundColor: "white"}}
                />
                <SliderRangeLabelsContainer>
                     <BodyStyled color="white" marginless>{props.isCurrency && "$"} {props.minValue}</BodyStyled>
                     <BodyStyled color="white" marginless>{props.isCurrency && "$"} {props.maxValue}</BodyStyled>
                </SliderRangeLabelsContainer>
            </SliderContainer>
        </SliderWrapper>
    )
}

export default SliderNumber
