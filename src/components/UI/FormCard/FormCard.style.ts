import styled from 'styled-components'

export const FormCardContainer = styled.div`
    background-color: var(--primary-color-dark);
    padding: calc(var(--spacing-unit) * 4);
    display: flex;
    flex-direction: column;
    min-width: 400px;
`

export const ButtonsSection = styled.div`
    display: flex;
    column-gap: var(--spacing-unit);
`

export const SummarySection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
    background-color: var(--primary-color-darkest);
`

export const FormControllersContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: calc(var(--spacing-unit) * 4) 0;
    row-gap: calc(var(--spacing-unit) * 3);
`