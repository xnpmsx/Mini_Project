import React from 'react'
import { Link } from 'react-router-dom'
import { IoExitOutline } from 'react-icons/io5'
import './Admin_flight.css'

function Admin_flight() {
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
            <div className="admin-add-user">
                Add Flight
            </div>
        </section>
    </div>
  )
}

export default Admin_flight
