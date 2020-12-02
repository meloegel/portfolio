import React from 'react'


const Contact = () => {
    return (
        <div className='hvr-grow' id='contactDiv' >
            <div className="contact">
                <p>Email <i class="fas fa-envelope-square"></i>: Meloegel@gmail.com</p>
                <p>LinkedIn <i class="fab fa-linkedin"></i>: <a href='https://www.linkedin.com/in/mark-loegel/'>https://www.linkedin.com/in/mark-loegel/</a></p>
                <p>Github <i class="fab fa-github"></i>: <a href='https://github.com/meloegel'>https://github.com/meloegel</a></p>
                <p>Sourcerer.io <i class="fab fa-stripe-s"></i>: <a href='https://sourcerer.io/meloegel'>https://sourcerer.io/meloegel</a></p>
                <p>Location <i class="fas fa-location-arrow"></i>: Madison Heights, MI</p>
            </div>
        </div>
    )
}

export default Contact;