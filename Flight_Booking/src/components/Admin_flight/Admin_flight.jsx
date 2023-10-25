import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoExitOutline } from 'react-icons/io5'
import './Admin_flight.css'

function Admin_flight() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <div>
        <div className='admin-nav'>
            <div className="admin-head">
                <div className="canfly">
                    <Link to='/admin'>Canfly</Link>
                </div>
                <div className="admin-topic">
                    <div className="admin-topic-user">
                        <Link to='/admin_user'>User</Link>
                    </div>
                    <div className="admin-topic-flight">
                        <Link to='/admin_flight'>Flight</Link>
                    </div>
                </div>
                <div className="admin">
                    Admin name
                </div>
            </div>
            <IoExitOutline className='icon-admin-exit' size={25} />
        </div>
        <section>
            <div className="list-user">
                List Flight
            </div>
            <div className="admin-datauser">
                <div className="admin-username">
                    Airline : Nokair
                </div>
                <div className="admin-name">
                    Destination : Puket
                </div>
                <div className="admin-surname">
                    Date : 2566-12-01
                </div>
                <div className="admin-phone">
                    Time : 09:30:00
                </div>
                <div className="admin-edit">
                    Edit
                </div>
                <div className="admin-delete">
                    Delete
                </div>
            </div>
            <div className="admin-datauser">
                <div className="admin-username">
                    Airline : Nokair
                </div>
                <div className="admin-name">
                    Destination : Puket
                </div>
                <div className="admin-surname">
                    Date : 2566-12-01
                </div>
                <div className="admin-phone">
                    Time : 09:30:00
                </div>
                <div className="admin-edit">
                    Edit
                </div>
                <div className="admin-delete">
                    Delete
                </div>
            </div>
            <div className="admin-datauser">
                <div className="admin-username">
                    Airline : Nokair
                </div>
                <div className="admin-name">
                    Destination : Puket
                </div>
                <div className="admin-surname">
                    Date : 2566-12-01
                </div>
                <div className="admin-phone">
                    Time : 09:30:00
                </div>
                <div className="admin-edit">
                    Edit
                </div>
                <div className="admin-delete">
                    Delete
                </div>
            </div>
            <div className="admin-add-user"  onClick={toggleModal}>
                Add Flight
            </div>
        </section>

        {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content-flight">

                        <h2>Add Flight</h2>

                        <div className="modal-content-input-user">

                            <div className="modal-content-input-user-1">
                                <div className="modal-content-username">
                                    Airline <input type="text" className='modal-input-airline' />
                                </div>
                                <div className="modal-content-password">
                                    Destination <input type="text" className='modal-input' />
                                </div>
                            </div>
                            <div className="modal-content-input-user-2">
                                <div className="modal-content-username">
                                    Date <input type="date" className='modal-input' />
                                </div>
                                <div className="modal-content-password">
                                    Time <input type="time" className='modal-input' />
                                </div>
                            </div>
                            
                        </div>
                        <div className="modal-button">
                            <button className='button-add-admin'>Add</button>
                            <button className='button-close-admin' onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}

    </div>
  )
}

export default Admin_flight
