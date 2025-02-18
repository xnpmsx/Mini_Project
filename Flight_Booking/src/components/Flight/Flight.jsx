import React, { useState } from 'react';
import './Flight.css';
import { MdEventSeat } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Axios from 'axios';
const seats = Array.from({ length: 15 }, (_, index) => `A${index + 1}`);

const Flight = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedAndReservedSeats, setSelectedAndReservedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      Axios.post('http://localhost:3333/cancel-reservation', { seatNumber })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      Axios.post('http://localhost:3333/reserve-seat', { seatNumber })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

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

        <div className="ticket">
                <div className="ticket-form-flight">
                        <div className="goto">
                            เดินทางไปที่ : Thailand 
                        </div>
                        <div className="date">
                            วัน : 01/12/2024
                        </div>
                        <div className="time">
                            เวลา : 09:00 น.
                        </div>
                </div>
            </div> 

        <div className="seat_main_1">
          {/* red */}
          <div className="seat_1">
            <div className="A">A</div>
            <div
              className={`seat ${selectedSeats.includes("A1") ? 'seat-selected' : selectedAndReservedSeats.includes("A1") ? 'seat-reserved' : ''}`}
              onClick={() => handleSeatClick("A1")}
            >
              <MdEventSeat color={selectedSeats.includes("A1") || selectedAndReservedSeats.includes("A1") ? 'gray' : 'red'} size={'40'} />
            </div>


            <div className={`seat ${selectedSeats.includes("A2") ? 'seat-selected' : selectedAndReservedSeats.includes("A2") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A2")}>
              <MdEventSeat color={selectedSeats.includes("A2") || selectedAndReservedSeats.includes("A2") ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A3") ? 'seat-selected' : selectedAndReservedSeats.includes("A3") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A3")}>
              <MdEventSeat color={selectedSeats.includes("A3") || selectedAndReservedSeats.includes("A3") ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A4") ? 'seat-selected' : selectedAndReservedSeats.includes("A4") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A4")}>
              <MdEventSeat color={selectedSeats.includes("A4") || selectedAndReservedSeats.includes("A4") ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A5") ? 'seat-selected' : selectedAndReservedSeats.includes("A5") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A5")}>
              <MdEventSeat color={selectedSeats.includes("A5") || selectedAndReservedSeats.includes("A5") ? 'gray' : 'red'} size={'40'} />
            </div>

          </div>

          {/* blue */}

          <div className="seat_2">
            <div className={`seat ${selectedSeats.includes("A6") ? 'seat-selected' : selectedAndReservedSeats.includes("A6") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A6")}>
              <MdEventSeat color={selectedSeats.includes("A6") || selectedAndReservedSeats.includes("A6") ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A7") ? 'seat-selected' : selectedAndReservedSeats.includes("A7") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A7")}>
              <MdEventSeat color={selectedSeats.includes("A7") || selectedAndReservedSeats.includes("A7") ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A8") ? 'seat-selected' : selectedAndReservedSeats.includes("A8") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A8")}>
              <MdEventSeat color={selectedSeats.includes("A8") || selectedAndReservedSeats.includes("A8") ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A9") ? 'seat-selected' : selectedAndReservedSeats.includes("A9") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A9")}>
              <MdEventSeat color={selectedSeats.includes("A9") || selectedAndReservedSeats.includes("A9") ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A10") ? 'seat-selected' : selectedAndReservedSeats.includes("A10") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A10")}>
              <MdEventSeat color={selectedSeats.includes("A10") || selectedAndReservedSeats.includes("A10") ? 'gray' : 'blue'} size={'40'} />
            </div>

          </div>

          {/* red */}

          <div className="seat_3">
            <div className={`seat ${selectedSeats.includes("A11") ? 'seat-selected' : selectedAndReservedSeats.includes("A11") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A11")}>
              <MdEventSeat color={selectedSeats.includes("A11") || selectedAndReservedSeats.includes("A11") ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A12") ? 'seat-selected' : selectedAndReservedSeats.includes("A12") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A12")}>
              <MdEventSeat color={selectedSeats.includes("A12") || selectedAndReservedSeats.includes("A12") ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A13") ? 'seat-selected' : selectedAndReservedSeats.includes("A13") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A13")}>
              <MdEventSeat color={selectedSeats.includes("A13") || selectedAndReservedSeats.includes("A13") ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A14") ? 'seat-selected' : selectedAndReservedSeats.includes("A14") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A14")}>
              <MdEventSeat color={selectedSeats.includes("A14") || selectedAndReservedSeats.includes("A14") ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("A15") ? 'seat-selected' : selectedAndReservedSeats.includes("A15") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("A15")}>
              <MdEventSeat color={selectedSeats.includes("A15") || selectedAndReservedSeats.includes("A15") ? 'gray' : 'red'} size={'40'} />
            </div>
          </div>
        </div>


        <div className="seat_main_2">
          {/* red */}
          <div className="seat_1_main_2">
            <div className="B">
              B
            </div>
            <div className={`seat ${selectedSeats.includes("B1") ? 'seat-selected' : selectedAndReservedSeats.includes("B1") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B1")}>
              <MdEventSeat color={(selectedSeats.includes("B1") || selectedAndReservedSeats.includes("B1")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B2") ? 'seat-selected' : selectedAndReservedSeats.includes("B2") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B2")}>
              <MdEventSeat color={(selectedSeats.includes("B2") || selectedAndReservedSeats.includes("B2")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B3") ? 'seat-selected' : selectedAndReservedSeats.includes("B3") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B3")}>
              <MdEventSeat color={(selectedSeats.includes("B3") || selectedAndReservedSeats.includes("B3")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B4") ? 'seat-selected' : selectedAndReservedSeats.includes("B4") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B4")}>
              <MdEventSeat color={(selectedSeats.includes("B4") || selectedAndReservedSeats.includes("B4")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B5") ? 'seat-selected' : selectedAndReservedSeats.includes("B5") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B5")}>
              <MdEventSeat color={(selectedSeats.includes("B5") || selectedAndReservedSeats.includes("B5")) ? 'gray' : 'red'} size={'40'} />
            </div>

          </div>

          {/* blue */}

          <div className="seat_2_main_2">
            <div className={`seat ${selectedSeats.includes("B6") ? 'seat-selected' : selectedAndReservedSeats.includes("B6") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B6")}>
              <MdEventSeat color={(selectedSeats.includes("B6") || selectedAndReservedSeats.includes("B6")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B7") ? 'seat-selected' : selectedAndReservedSeats.includes("B7") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B7")}>
              <MdEventSeat color={(selectedSeats.includes("B7") || selectedAndReservedSeats.includes("B7")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B8") ? 'seat-selected' : selectedAndReservedSeats.includes("B8") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B8")}>
              <MdEventSeat color={(selectedSeats.includes("B8") || selectedAndReservedSeats.includes("B8")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B9") ? 'seat-selected' : selectedAndReservedSeats.includes("B9") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B9")}>
              <MdEventSeat color={(selectedSeats.includes("B9") || selectedAndReservedSeats.includes("B9")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B10") ? 'seat-selected' : selectedAndReservedSeats.includes("B10") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B10")}>
              <MdEventSeat color={(selectedSeats.includes("B10") || selectedAndReservedSeats.includes("B10")) ? 'gray' : 'blue'} size={'40'} />
            </div>

          </div>

          {/* red */}

          <div className="seat_3_main_2">
            <div className={`seat ${selectedSeats.includes("B11") ? 'seat-selected' : selectedAndReservedSeats.includes("B11") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B11")}>
              <MdEventSeat color={(selectedSeats.includes("B11") || selectedAndReservedSeats.includes("B11")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B12") ? 'seat-selected' : selectedAndReservedSeats.includes("B12") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B12")}>
              <MdEventSeat color={(selectedSeats.includes("B12") || selectedAndReservedSeats.includes("B12")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B13") ? 'seat-selected' : selectedAndReservedSeats.includes("B13") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B13")}>
              <MdEventSeat color={(selectedSeats.includes("B13") || selectedAndReservedSeats.includes("B13")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B14") ? 'seat-selected' : selectedAndReservedSeats.includes("B14") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B14")}>
              <MdEventSeat color={(selectedSeats.includes("B14") || selectedAndReservedSeats.includes("B14")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("B15") ? 'seat-selected' : selectedAndReservedSeats.includes("B15") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("B15")}>
              <MdEventSeat color={(selectedSeats.includes("B15") || selectedAndReservedSeats.includes("B15")) ? 'gray' : 'red'} size={'40'} />
            </div>
          </div>
        </div>

        <div className="seat_main_3">
          {/* red */}
          <div className="seat_1_main_3">
            <div className="C">
              C
            </div>
            <div className={`seat ${selectedSeats.includes("C1") ? 'seat-selected' : selectedAndReservedSeats.includes("C1") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C1")}>
              <MdEventSeat color={(selectedSeats.includes("C1") || selectedAndReservedSeats.includes("C1")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C2") ? 'seat-selected' : selectedAndReservedSeats.includes("C2") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C2")}>
              <MdEventSeat color={(selectedSeats.includes("C2") || selectedAndReservedSeats.includes("C2")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C3") ? 'seat-selected' : selectedAndReservedSeats.includes("C3") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C3")}>
              <MdEventSeat color={(selectedSeats.includes("C3") || selectedAndReservedSeats.includes("C3")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C4") ? 'seat-selected' : selectedAndReservedSeats.includes("C4") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C4")}>
              <MdEventSeat color={(selectedSeats.includes("C4") || selectedAndReservedSeats.includes("C4")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C5") ? 'seat-selected' : selectedAndReservedSeats.includes("C5") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C5")}>
              <MdEventSeat color={(selectedSeats.includes("C5") || selectedAndReservedSeats.includes("C5")) ? 'gray' : 'red'} size={'40'} />
            </div>

          </div>

          {/* blue */}

          <div className="seat_2_main_3">
            <div className={`seat ${selectedSeats.includes("C6") ? 'seat-selected' : selectedAndReservedSeats.includes("C6") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C6")}>
              <MdEventSeat color={(selectedSeats.includes("C6") || selectedAndReservedSeats.includes("C6")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C7") ? 'seat-selected' : selectedAndReservedSeats.includes("C7") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C7")}>
              <MdEventSeat color={(selectedSeats.includes("C7") || selectedAndReservedSeats.includes("C7")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C8") ? 'seat-selected' : selectedAndReservedSeats.includes("C8") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C8")}>
              <MdEventSeat color={(selectedSeats.includes("C8") || selectedAndReservedSeats.includes("C8")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C9") ? 'seat-selected' : selectedAndReservedSeats.includes("C9") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C9")}>
              <MdEventSeat color={(selectedSeats.includes("C9") || selectedAndReservedSeats.includes("C9")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C10") ? 'seat-selected' : selectedAndReservedSeats.includes("C10") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C10")}>
              <MdEventSeat color={(selectedSeats.includes("C10") || selectedAndReservedSeats.includes("C10")) ? 'gray' : 'blue'} size={'40'} />
            </div>

          </div>

          {/* red */}

          <div className="seat_3_main_3">
            <div className={`seat ${selectedSeats.includes("C11") ? 'seat-selected' : selectedAndReservedSeats.includes("C11") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C11")}>
              <MdEventSeat color={(selectedSeats.includes("C11") || selectedAndReservedSeats.includes("C11")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C12") ? 'seat-selected' : selectedAndReservedSeats.includes("C12") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C12")}>
              <MdEventSeat color={(selectedSeats.includes("C12") || selectedAndReservedSeats.includes("C12")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C13") ? 'seat-selected' : selectedAndReservedSeats.includes("C13") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C13")}>
              <MdEventSeat color={(selectedSeats.includes("C13") || selectedAndReservedSeats.includes("C13")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C14") ? 'seat-selected' : selectedAndReservedSeats.includes("C14") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C14")}>
              <MdEventSeat color={(selectedSeats.includes("C14") || selectedAndReservedSeats.includes("C14")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("C15") ? 'seat-selected' : selectedAndReservedSeats.includes("C15") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("C15")}>
              <MdEventSeat color={(selectedSeats.includes("C15") || selectedAndReservedSeats.includes("C15")) ? 'gray' : 'red'} size={'40'} />
            </div>
          </div>
        </div>
        <div className="seat_main_4">
          {/* red */}
          <div className="seat_1_main_4">
            <div className="D">
              D
            </div>
            <div className={`seat ${selectedSeats.includes("D1") ? 'seat-selected' : selectedAndReservedSeats.includes("D1") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D1")}>
              <MdEventSeat color={(selectedSeats.includes("D1") || selectedAndReservedSeats.includes("D1")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D2") ? 'seat-selected' : selectedAndReservedSeats.includes("D2") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D2")}>
              <MdEventSeat color={(selectedSeats.includes("D2") || selectedAndReservedSeats.includes("D2")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D3") ? 'seat-selected' : selectedAndReservedSeats.includes("D3") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D3")}>
              <MdEventSeat color={(selectedSeats.includes("D3") || selectedAndReservedSeats.includes("D3")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D4") ? 'seat-selected' : selectedAndReservedSeats.includes("D4") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D4")}>
              <MdEventSeat color={(selectedSeats.includes("D4") || selectedAndReservedSeats.includes("D4")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D5") ? 'seat-selected' : selectedAndReservedSeats.includes("D5") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D5")}>
              <MdEventSeat color={(selectedSeats.includes("D5") || selectedAndReservedSeats.includes("D5")) ? 'gray' : 'red'} size={'40'} />
            </div>

          </div>

          {/* blue */}

          <div className="seat_2_main_4">
            <div className={`seat ${selectedSeats.includes("D6") ? 'seat-selected' : selectedAndReservedSeats.includes("D6") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D6")}>
              <MdEventSeat color={(selectedSeats.includes("D6") || selectedAndReservedSeats.includes("D6")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D7") ? 'seat-selected' : selectedAndReservedSeats.includes("D7") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D7")}>
              <MdEventSeat color={(selectedSeats.includes("D7") || selectedAndReservedSeats.includes("D7")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D8") ? 'seat-selected' : selectedAndReservedSeats.includes("D8") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D8")}>
              <MdEventSeat color={(selectedSeats.includes("D8") || selectedAndReservedSeats.includes("D8")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D9") ? 'seat-selected' : selectedAndReservedSeats.includes("D9") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D9")}>
              <MdEventSeat color={(selectedSeats.includes("D9") || selectedAndReservedSeats.includes("D9")) ? 'gray' : 'blue'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D10") ? 'seat-selected' : selectedAndReservedSeats.includes("D10") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D10")}>
              <MdEventSeat color={(selectedSeats.includes("D10") || selectedAndReservedSeats.includes("D10")) ? 'gray' : 'blue'} size={'40'} />
            </div>


          </div>

          {/* red */}

          <div className="seat_3_main_4">
            <div className={`seat ${selectedSeats.includes("D11") ? 'seat-selected' : selectedAndReservedSeats.includes("D11") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D11")}>
              <MdEventSeat color={(selectedSeats.includes("D11") || selectedAndReservedSeats.includes("D11")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D12") ? 'seat-selected' : selectedAndReservedSeats.includes("D12") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D12")}>
              <MdEventSeat color={(selectedSeats.includes("D12") || selectedAndReservedSeats.includes("D12")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D13") ? 'seat-selected' : selectedAndReservedSeats.includes("D13") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D13")}>
              <MdEventSeat color={(selectedSeats.includes("D13") || selectedAndReservedSeats.includes("D13")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D14") ? 'seat-selected' : selectedAndReservedSeats.includes("D14") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D14")}>
              <MdEventSeat color={(selectedSeats.includes("D14") || selectedAndReservedSeats.includes("D14")) ? 'gray' : 'red'} size={'40'} />
            </div>

            <div className={`seat ${selectedSeats.includes("D15") ? 'seat-selected' : selectedAndReservedSeats.includes("D15") ? 'seat-reserved' : ''}`} onClick={() => handleSeatClick("D15")}>
              <MdEventSeat color={(selectedSeats.includes("D15") || selectedAndReservedSeats.includes("D15")) ? 'gray' : 'red'} size={'40'} />
            </div>
          </div>
        </div>

        <div className="seat_main_5">
          <div className="seat_1_main_5">
            <div className="seat_left_1_main_5">
              1
            </div>
            <div className="seat_left_2_main_5">
              2
            </div>
            <div className="seat_left_3_main_5">
              3
            </div>
            <div className="seat_left_4_main_5">
              4
            </div>
            <div className="seat_left_5_main_5">
              5
            </div>
          </div>
          <div className="seat_3_main_5">
            <div className="seat_mid_1_main_5">
              6
            </div>
            <div className="seat_mid_2_main_5">
              7
            </div>
            <div className="seat_mid_3_main_5">
              8
            </div>
            <div className="seat_mid_4_main_5">
              9
            </div>
            <div className="seat_mid_5_main_5">
              10
            </div>
          </div>
          <div className="seat_3_main_5">
            <div className="seat_right_1_main_5">
              11
            </div>
            <div className="seat_right_2_main_5">
              12
            </div>
            <div className="seat_right_3_main_5">
              13
            </div>
            <div className="seat_right_4_main_5">
              14
            </div>
            <div className="seat_right_5_main_5">
              15
            </div>
          </div>
        </div>
        <div className="btn-main">
          <Link to='/'>Back</Link>
          <Link to='/Pay'>Next</Link>
        </div>
      </div>
    </>
  )
}

export default Flight
