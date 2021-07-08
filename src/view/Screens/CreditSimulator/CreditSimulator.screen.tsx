import React from 'react'
import '../screens.css'
//core components
import CreditSimulator from '../../../components/CreditSimulator'

const CreditSimulatorScreen: React.FC = () => {
    return (
        <div className="screen-wrapper">
            <CreditSimulator />
        </div>
    )
}

export default CreditSimulatorScreen
