import React from 'react'
import './Flight.css'
import { MdEventSeat } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Flight = () => {
  return (
    <>
    <div className='Home'>
      <div className='nav'>
        <div className="logo">
          <Link to="/">Canfly</Link>
        </div> 
        <div className="navcenter">
          <div className="navhome">
            <Link to="/">Home</Link>
          </div>
          <div className="navorder">
            <Link to="/">Your order</Link>
          </div>
          <div className="navfav">
            <Link to="/">Favourites</Link>
          </div>
        </div>
        <div className="in">
          <div className='sign'>
            <Link to="/Signin">SIGN IN</Link>
          </div>
          <div className='log'>
            <Link to="/Login">LOG IN</Link>
          </div>
        </div>
      </div>

        <div className="seat_main_1">
            {/* red */}
            <div className="seat_1">
                <div className="seat_left_1">
                <MdEventSeat color='red' size={'25'}/> 
                </div>
                
                <div className="seat_left_2">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_left_3">
                <MdEventSeat color='red' size={'25'}/> 
                </div>

                <div className="seat_left_4">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_left_5">
                <MdEventSeat color='red' size={'25'}/> 
                </div>
              
            </div>

            {/* blue */}

            <div className="seat_2">
                <div className="seat_mid_1">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_2">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_3">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_4">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_5">
                <MdEventSeat color='blue' size={'25'}/>
                </div>
                
            </div>

            {/* red */}

            <div className="seat_3">
                <div className="seat_right_1">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_2">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_3">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_4">
                <MdEventSeat color='red' size={'25'}/>
                </div>
              
                <div className="seat_right_5">
                <MdEventSeat color='red' size={'25'}/>
                </div>
            </div>
        </div>


        <div className="seat_main_2">
            {/* red */}
            <div className="seat_1_main_2">
                <div className="seat_left_1">
                <MdEventSeat color='red' size={'25'}/> 
                </div>
                
                <div className="seat_left_2">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_left_3">
                <MdEventSeat color='red' size={'25'}/> 
                </div>

                <div className="seat_left_4">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_left_5">
                <MdEventSeat color='red' size={'25'}/> 
                </div>
              
            </div>

            {/* blue */}

            <div className="seat_2_main_2">
                <div className="seat_mid_1">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_2">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_3">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_4">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_5">
                <MdEventSeat color='blue' size={'25'}/>
                </div>
                
            </div>

            {/* red */}

            <div className="seat_3_main_2">
                <div className="seat_right_1">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_2">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_3">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_4">
                <MdEventSeat color='red' size={'25'}/>
                </div>
              
                <div className="seat_right_5">
                <MdEventSeat color='red' size={'25'}/>
                </div>
            </div>
        </div>
        <div className="seat_main_3">
            {/* red */}
            <div className="seat_1_main_3">
                <div className="seat_left_1">
                <MdEventSeat color='red' size={'25'}/> 
                </div>
                
                <div className="seat_left_2">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_left_3">
                <MdEventSeat color='red' size={'25'}/> 
                </div>

                <div className="seat_left_4">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_left_5">
                <MdEventSeat color='red' size={'25'}/> 
                </div>
              
            </div>

            {/* blue */}

            <div className="seat_2_main_3">
                <div className="seat_mid_1">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_2">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_3">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_4">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_5">
                <MdEventSeat color='blue' size={'25'}/>
                </div>
                
            </div>

            {/* red */}

            <div className="seat_3_main_3">
                <div className="seat_right_1">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_2">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_3">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_4">
                <MdEventSeat color='red' size={'25'}/>
                </div>
              
                <div className="seat_right_5">
                <MdEventSeat color='red' size={'25'}/>
                </div>
            </div>
        </div>
        <div className="seat_main_4">
            {/* red */}
            <div className="seat_1_main_4">
                <div className="seat_left_1">
                <MdEventSeat color='red' size={'25'}/> 
                </div>
                
                <div className="seat_left_2">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_left_3">
                <MdEventSeat color='red' size={'25'}/> 
                </div>

                <div className="seat_left_4">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_left_5">
                <MdEventSeat color='red' size={'25'}/> 
                </div>
              
            </div>

            {/* blue */}

            <div className="seat_2_main_4">
                <div className="seat_mid_1">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_2">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_3">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_4">
                <MdEventSeat color='blue' size={'25'}/>
                </div>

                <div className="seat_mid_5">
                <MdEventSeat color='blue' size={'25'}/>
                </div>
                
            </div>

            {/* red */}

            <div className="seat_3_main_4">
                <div className="seat_right_1">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_2">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_3">
                <MdEventSeat color='red' size={'25'}/>
                </div>

                <div className="seat_right_4">
                <MdEventSeat color='red' size={'25'}/>
                </div>
              
                <div className="seat_right_5">
                <MdEventSeat color='red' size={'25'}/>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Flight
