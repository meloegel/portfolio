import React from 'react'


const Contact = () => {
    return (
        <div className='hvr-grow' id='contactDiv' >
            <div className="contact">
                <p>Email <i class="fas fa-envelope-square"></i>: <a href='mailto:Meloegel@gmail.com'>Meloegel@gmail.com</a></p>
                <p>LinkedIn <i class="fab fa-linkedin"></i>: <a href='https://www.linkedin.com/in/mark-loegel/'>https://www.linkedin.com/in/mark-loegel</a></p>
                <p>Github <i class="fab fa-github"></i>: <a href='https://github.com/meloegel'>https://github.com/meloegel</a></p>
                <p>Sourcerer.io <i class="fab fa-stripe-s"></i>: <a href='https://sourcerer.io/meloegel'>https://sourcerer.io/meloegel</a></p>
                <p>Location <i class="fas fa-location-arrow"></i>: <a href='https://www.google.com/maps/place/Madison+Heights,+MI+48071/@42.4574891,-83.2864404,10.66z/data=!4m5!3m4!1s0x8824c560e64063fb:0xfe0210da6a27be1d!8m2!3d42.4858692!4d-83.1052028' target='_blank' rel="noopener noreferrer"> Madison Heights, MI</a></p>
            </div>
        </div>
    )
}

export default Contact;