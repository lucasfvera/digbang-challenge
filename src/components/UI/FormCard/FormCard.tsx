import React from 'react'
import { FormCardContainer, ButtonsSection, SummarySection, FormControllersContainer } from './FormCard.style'
import { TitleStyled, BodyStyled } from '../Typography/Typography.styles'
import {PrimaryActionBtn, SecondaryActionBtn} from '../Buttons/Buttons'
import SliderNumber from '../SliderNumber'


type Button = {
    label: string,
    id: string,
    action: (p?: any) => void,
}

type Slider = {
    value: number,
    minValue: number,
    maxValue: number,
    label: string,
    onChange: (p?: any) => void,
}

interface InheritedProps{
    header: string,
    primaryButton: Button,
    secondaryButton: Button,
    sumary: {label: string, value: number},
    primarySlider: Slider,
    secondarySlider: Slider,
}

const FormCard: React.FC<InheritedProps> = (props) => {

    const checkNaNorInfinity = (element: any) => {
        return isNaN(element)? 0: !Number.isFinite(element)? "-": element;
    }

    return (
        <FormCardContainer>
            <TitleStyled centered marginless color="white" bold small>{props.header}</TitleStyled>
            <FormControllersContainer>
                <SliderNumber 
                    value={props.primarySlider.value}
                    minValue={props.primarySlider.minValue}
                    maxValue={props.primarySlider.maxValue}
                    label={props.primarySlider.label}
                    onChange={props.primarySlider.onChange}
                    isCurrency
                />
                <SliderNumber 
                    value={props.secondarySlider.value}
                    minValue={props.secondarySlider.minValue}
                    maxValue={props.secondarySlider.maxValue}
                    label={props.secondarySlider.label}
                    onChange={props.secondarySlider.onChange}

                />
            </FormControllersContainer>
            <SummarySection>
                <BodyStyled color="white" centered marginless bold small>{props.sumary.label}</BodyStyled>
                <TitleStyled color="white" centered marginless bold>$ {checkNaNorInfinity(props.sumary.value)}</TitleStyled>
            </SummarySection>
            <ButtonsSection>
                <PrimaryActionBtn
                    onClick={props.primaryButton.action}
                    id={props.primaryButton.id}
                    style={{flex: 1}}
                >
                    <BodyStyled centered marginless bold large>{props.primaryButton.label}</BodyStyled>
                </PrimaryActionBtn>
                <SecondaryActionBtn
                    onClick={props.secondaryButton.action}
                    id={props.secondaryButton.id}
                    style={{flex: 0.5}}
                >
                    <BodyStyled centered marginless smallest normal>{props.secondaryButton.label}</BodyStyled>
                </SecondaryActionBtn>
            </ButtonsSection>
        </FormCardContainer>
    )
}

export default FormCard
