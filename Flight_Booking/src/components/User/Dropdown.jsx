import React from 'react'

function Dropdown() {

    const [IsActive, setIsActive] = useState(false)
    
  return (
    <div>
        <div className="dropdown">
            <div className="dropdown-btn" onClick={ (e) => setIsActive(!IsActive) }>
                เดินทางไปที่ไหน
            </div>
            {IsActive && (
                <div className="dropdown-content">
                    <div className="dropdowm-item">
                        Puket
                    </div>
                    <div className="dropdowm-item">
                        Bankkok
                    </div>
                    <div className="dropdowm-item">
                        Karbi
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Dropdown
