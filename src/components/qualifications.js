import React, { useState } from 'react'
import PrevWork from './previousWork/prevWork'


const Qualifications = (key) => {
    const [values, setValues] = useState(false)

    const openPrevWork = () => {
        setValues(!values)
    }

    return (
        <div className='hvr-grow w-full text-center' id="edu">
            <div className="m-auto text-center relative my-2 bg-gray-500 rounded-3xl p-1.5 w-11/12">
                <div className='flex justify-evenly flex-col md:flex-row'>
                    <div>
                        <h3><i class="fas fa-laptop-code" /> Education: Lambda School <i class="fas fa-laptop-code" /></h3>
                        <p>March 2020 - Nov 2020</p>
                        <p>Participated in the Lambda Leadership program</p>
                        <p>Part of the Lambda X Endorsement program</p>
                    </div>
                    <div>
                        <a href='https://www.youracclaim.com/badges/50d30b03-c8f6-4054-ab84-062437c1598a/linked_in' target='_blank' rel="noopener noreferrer">
                            <img className="items-center justify-center w-56" src={require('../Images/lambda-badge-full-stack-web.png')} alt='Lambda Badge' />
                        </a>
                    </div>
                    <div>
                        <img className="p-4 w-36" src={require('../Images/OU.png')} alt='Oakland University Logo' />
                    </div>
                    <div>
                        <h3><i class="fas fa-university" /> Previous Education: Oakland University <i class="fas fa-university" /></h3>
                        <p>Studied Psychology with Focus in Child Development</p>
                        <p>2008-2012</p>
                        <p>Division 1 Athlete in Swimming</p>
                        <p>4 year Conference Champions</p>
                    </div>
                </div>
                <button onClick={() => openPrevWork()}>Previous Work Experience <p className="p-0 m-auto text-black">(non-programming)</p></button>
                {values === true && <>
                    <PrevWork />
                    <button onClick={() => openPrevWork()} className='display mt-6 mb-4'>Close</button>
                </>}
            </div>
        </div>
    )
}

export default Qualifications;