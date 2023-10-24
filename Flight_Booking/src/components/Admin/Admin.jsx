import React from 'react'
import './Admin.css'
import { IoExitOutline } from 'react-icons/io5'

function exit(){
    console.log("Log out")
}

function Admin() {
  return (
    <div>
        <div className='admin-nav'>
            <div className="admin-head">
                <div className="canfly">
                    Canfly
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
            </div>
        </section>
        
    </div>
  )
}

export default Admin
