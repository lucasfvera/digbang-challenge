import styled from 'styled-components'

interface baseTextProps{
    label?: string
}

interface TextProps{
    readonly smallest?: boolean,
    readonly small?: boolean,
    readonly large?: boolean,
    readonly bold?: boolean,
    readonly semibold?: boolean,
    readonly normal?: boolean,
    readonly extralight?: boolean,
    readonly thin?: boolean,
    readonly centered?: boolean,
    readonly color?: string,
    readonly marginless?: boolean,
}

const baseText = styled.p<baseTextProps>`
    font-family: "Montserrat",sans-serif;
    font-weight: 400;
`

export const TitleStyled = styled(baseText)<TextProps>`
    font-size: ${props=> props.small? "22px": props.large? "48px": "32px"};
    font-weight: ${props=> props.bold? 700: props.semibold? 600: props.normal? 500: props.extralight? 200: props.thin? 100: 400};
    color: ${props=> props.color? props.color : "inherit"};
    margin: ${props=> props.marginless? "0": "auto"};
    text-align: ${props=> props.centered? "center": "left"};
`

export const BodyStyled = styled(baseText)<TextProps>`
    font-size: ${props=> props.small? "12px": props.smallest? "10px": props.large? "16px": "14px"};
    font-weight: ${props=> props.bold? 700: props.semibold? 600: props.normal? 500: props.extralight? 200: props.thin? 100: 400};
    color: ${props=> props.color? props.color : "inherit"};
    margin: ${props=> props.marginless? "0": "auto"};
    text-align: ${props=> props.centered? "center": "left"};
`