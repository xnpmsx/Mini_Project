import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoExitOutline } from 'react-icons/io5'
import './Admin.css'

function Admin() {

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
            <div className="admin-main">
                <div className="admin-main-user">
                    User : 10
                </div>
                <div className="admin-main-flight">
                    Flight : 15
                </div>
            </div>
            <section>
                <div className="list-user">
                    List Admin
                </div>

                <div className="admin-datauser">
                    <div className="admin-username">
                        Username : TAGOYAGI
                    </div>
                    <div className="admin-name">
                        Name : Eiei
                    </div>
                    <div className="admin-surname">
                        Surname : Gaga
                    </div>
                    <div className="admin-phone">
                        Phone : 0123456789
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
                        Username : TAGOYAGI
                    </div>
                    <div className="admin-name">
                        Name : Eiei
                    </div>
                    <div className="admin-surname">
                        Surname : Gaga
                    </div>
                    <div className="admin-phone">
                        Phone : 0123456789
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
                        Username : TAGOYAGI
                    </div>
                    <div className="admin-name">
                        Name : Eiei
                    </div>
                    <div className="admin-surname">
                        Surname : Gaga
                    </div>
                    <div className="admin-phone">
                        Phone : 0123456789
                    </div>
                    <div className="admin-edit">
                        Edit
                    </div>
                    <div className="admin-delete">
                        Delete
                    </div>
                </div>
                <div className="admin-add-admin" onClick={toggleModal}>
                    Add Admin
                </div>
            </section>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="modal-content-input">
                            <h2>Add Admin</h2>
                            <div className="modal-content-username">
                                Username <input type="text" className='modal-input' />
                            </div>
                            <div className="modal-content-password">
                                Password <input type="password" className='modal-input' />
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

export default Admin
