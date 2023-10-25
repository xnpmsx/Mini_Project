import React from 'react'
import { Link } from 'react-router-dom'
import { IoExitOutline } from 'react-icons/io5'
import './Admin.css'

function Admin() {
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
            <div className="admin-add-admin">
                Add admin
            </div>
        </section>
    </div>
  )
}

export default Admin
