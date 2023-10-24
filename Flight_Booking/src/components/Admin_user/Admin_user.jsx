import React from 'react'
import './Admin_user.css'
import { IoExitOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function exit(){
    console.log("Log out")
}

function Admin_user() {
  return (
    <div>
        <div className='admin-nav'>
            <div className="admin-head">
                <div className="canfly">
                    <Link to='/admin'>Canfly</Link>
                </div>
                <div className="admin">
                    Admin name
                </div>
            </div>
            <IoExitOutline className='icon-admin-exit' size={25} onClick={exit} />
        </div>
        <section>
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
            <div className="admin-add-user">
                Add User
            </div>
        </section>
        
    </div>
  )
}

export default Admin_user
