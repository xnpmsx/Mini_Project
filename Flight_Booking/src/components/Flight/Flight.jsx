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
                <div className="A">
                  A
                </div>
                <div className="seat_left_1">
                <MdEventSeat color='red' size={'40'}/> 
                </div>
                
                <div className="seat_left_2">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_left_3">
                <MdEventSeat color='red' size={'40'}/> 
                </div>

                <div className="seat_left_4">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_left_5">
                <MdEventSeat color='red' size={'40'}/> 
                </div>
              
            </div>

            {/* blue */}

            <div className="seat_2">
                <div className="seat_mid_1">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_2">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_3">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_4">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_5">
                <MdEventSeat color='blue' size={'40'}/>
                </div>
                
            </div>

            {/* red */}

            <div className="seat_3">
                <div className="seat_right_1">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_2">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_3">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_4">
                <MdEventSeat color='red' size={'40'}/>
                </div>
              
                <div className="seat_right_5">
                <MdEventSeat color='red' size={'40'}/>
                </div>
            </div>
        </div>


        <div className="seat_main_2">
            {/* red */}
            <div className="seat_1_main_2">
                <div className="B">
                  B
                </div>
                <div className="seat_left_1">
                <MdEventSeat color='red' size={'40'}/> 
                </div>
                
                <div className="seat_left_2">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_left_3">
                <MdEventSeat color='red' size={'40'}/> 
                </div>

                <div className="seat_left_4">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_left_5">
                <MdEventSeat color='red' size={'40'}/> 
                </div>
              
            </div>

            {/* blue */}

            <div className="seat_2_main_2">
                <div className="seat_mid_1">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_2">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_3">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_4">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_5">
                <MdEventSeat color='blue' size={'40'}/>
                </div>
                
            </div>

            {/* red */}

            <div className="seat_3_main_2">
                <div className="seat_right_1">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_2">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_3">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_4">
                <MdEventSeat color='red' size={'40'}/>
                </div>
              
                <div className="seat_right_5">
                <MdEventSeat color='red' size={'40'}/>
                </div>
            </div>
        </div>
        <div className="seat_main_3">
            {/* red */}
            <div className="seat_1_main_3">
                <div className="C">
                  C
                </div>
                <div className="seat_left_1">
                <MdEventSeat color='red' size={'40'}/> 
                </div>
                
                <div className="seat_left_2">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_left_3">
                <MdEventSeat color='red' size={'40'}/> 
                </div>

                <div className="seat_left_4">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_left_5">
                <MdEventSeat color='red' size={'40'}/> 
                </div>
              
            </div>

            {/* blue */}

            <div className="seat_2_main_3">
                <div className="seat_mid_1">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_2">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_3">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_4">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_5">
                <MdEventSeat color='blue' size={'40'}/>
                </div>
                
            </div>

            {/* red */}

            <div className="seat_3_main_3">
                <div className="seat_right_1">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_2">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_3">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_4">
                <MdEventSeat color='red' size={'40'}/>
                </div>
              
                <div className="seat_right_5">
                <MdEventSeat color='red' size={'40'}/>
                </div>
            </div>
        </div>
        <div className="seat_main_4">
            {/* red */}
            <div className="seat_1_main_4">
                <div className="D">
                  D
                </div>
                <div className="seat_left_1">
                <MdEventSeat color='red' size={'40'}/> 
                </div>
                
                <div className="seat_left_2">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_left_3">
                <MdEventSeat color='red' size={'40'}/> 
                </div>

                <div className="seat_left_4">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_left_5">
                <MdEventSeat color='red' size={'40'}/> 
                </div>
              
            </div>

            {/* blue */}

            <div className="seat_2_main_4">
                <div className="seat_mid_1">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_2">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_3">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_4">
                <MdEventSeat color='blue' size={'40'}/>
                </div>

                <div className="seat_mid_5">
                <MdEventSeat color='blue' size={'40'}/>
                </div>
                
            </div>

            {/* red */}

            <div className="seat_3_main_4">
                <div className="seat_right_1">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_2">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_3">
                <MdEventSeat color='red' size={'40'}/>
                </div>

                <div className="seat_right_4">
                <MdEventSeat color='red' size={'40'}/>
                </div>
              
                <div className="seat_right_5">
                <MdEventSeat color='red' size={'40'}/>
                </div>
            </div>
        </div>

        <div className="seat_main_5">
              <div className="seat_1_main_5">
                <div className="seat_left_1">
                  1
                </div>
                <div className="seat_left_2">
                  2
                </div>
                <div className="seat_left_3">
                  3
                </div>
                <div className="seat_left_4">
                  4
                </div>
                <div className="seat_left_5">
                  5
                </div>
              </div>
              <div className="seat_3_main_5">
                <div className="seat_left_1">
                  6
                </div>
                <div className="seat_left_2">
                  7
                </div>
                <div className="seat_left_3">
                  8
                </div>
                <div className="seat_left_4">
                  9
                </div>
                <div className="seat_left_5">
                  10
                </div>
              </div>
              <div className="seat_3_main_5">
                <div className="seat_left_1">
                  11
                </div>
                <div className="seat_left_2">
                  12
                </div>
                <div className="seat_left_3">
                  13
                </div>
                <div className="seat_left_4">
                  14
                </div>
                <div className="seat_left_5">
                  15
                </div>
              </div>
        </div>

    </div>
    </>
  )
}

export default Flight
