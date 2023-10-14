import React from 'react'

function Pay() {
  return (
    <div>
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

            PAY
        </div>
    </div>
  )
}

export default Pay
