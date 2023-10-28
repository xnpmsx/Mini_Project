import React, { useState } from 'react'

function Airline({Airlined, setAirlined}) {

    const [IsActive, setIsActive] = useState(false)
    const option = ["Nokair", "Airasia", "Kanbinthai"]
    
  return (
    <div>
        <div className="dropdown">
            <div className="dropdown-btn" onClick={ (e) => setIsActive(!IsActive) }>
                {Airlined}
            </div>
            {IsActive && (
                <div className="dropdown-content">
                    {option.map((option) => (
                        <div className="dropdowm-item" 
                        onClick={(e) => {
                                setAirlined(option)
                                setIsActive(false)
                            }}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Airline
