import React,{useState} from 'react'
import FormCard from '../UI/FormCard'
import { LANG, INTEREST_RATE } from '../../config/constants'

const CreditSimulator = () => {
    const [creditAmount, setCreaditAmount] = useState<number>(19500);
    const [creditTerm, setCreditTerm] = useState<number>(16);
    const handleCreditAmountChange = (e: number) => {
        console.log(e)
        setCreaditAmount(e)
    }
    const primaryBtn = {
        label: "OBTENÉ CRÉDITO",
        id: "primary-action-btn",
        action: () => console.log("Crédito obtenido")
    };
    const secondaryBtn = {
        label: "VER DETALLE DE CUOTAS",
        id: "secondary-action-btn",
        action: () => console.log("Información de cuotas")
    };
    const sumary = {
        label: "CUOTA FIJA POR MES",
        value: Math.round((creditAmount * INTEREST_RATE / creditTerm + Number.EPSILON) * 100) / 100
    };
    const totalAmountSlider = {
        value: creditAmount,
        minValue: 5000,
        maxValue: 50000,
        label: LANG.totalAmount.toUpperCase(),
        onChange: handleCreditAmountChange
    };
    const creditTermSlider = {
        value: creditTerm,
        minValue: 3,
        maxValue: 24,
        label: LANG.term.toUpperCase(),
        onChange: setCreditTerm,
    };

    return (
        <FormCard 
            header={LANG.simulateYourCredit.toUpperCase()} 
            primaryButton={primaryBtn} 
            secondaryButton={secondaryBtn}
            sumary={sumary}
            primarySlider={totalAmountSlider}
            secondarySlider={creditTermSlider}
        />
    )
}

export default CreditSimulator
