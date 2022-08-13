import React from 'react'
import PrevWork from './prevWork'
import { useLocalStorage } from './useLocalStorage'

const Qualifications = (key) => {
    const [values, setValues] = useLocalStorage(key);

    const History = e => {
        e.preventDefault()
        setValues(!values);
        if (values === false) {
            window.document.getElementById('prevWork').classList.add('display')
            window.document.getElementById('closeButton').classList.add('display')
        } else {
            window.document.getElementById('prevWork').classList.remove('display')
            window.document.getElementById('closeButton').classList.remove('display')
        }
    }

    return (
        <div className='hvr-grow w-full text-center'>
            <div className="m-auto text-center relative my-2 bg-gray-500 rounded-3xl p-1.5 w-10/12">
                <div className='flex justify-evenly flex-col md:flex-row'>
                    <div>
                        <h3><i class="fas fa-laptop-code"></i> Education: Lambda School <i class="fas fa-laptop-code"></i></h3>
                        <p>March 2020 - Nov 2020</p>
                        <p>Participated in the Lambda Leadership program</p>
                        <p>Part of the Lambda X Endorsement program</p>
                    </div>
                    <div>
                        <a href='https://www.youracclaim.com/badges/50d30b03-c8f6-4054-ab84-062437c1598a/linked_in' target='_blank' rel="noopener noreferrer">
                            <img className="items-center justify-center w-56" src={require('../styles/Images/lambda-badge-full-stack-web.png')} alt='Lambda Badge' />
                        </a>
                    </div>
                    <div>
                        <img className="p-4 w-36" src={require('../styles/Images/OU.png')} alt='Oakland University Logo' />
                    </div>
                    <div>
                        <h3><i class="fas fa-university"></i> Previous Education: Oakland University <i class="fas fa-university"></i></h3>
                        <p>Studied Psychology with Focus in Child Development</p>
                        <p>2008-2012</p>
                        <p>Division 1 Athlete in Swimming</p>
                        <p>4 year Conference Champions</p>
                    </div>
                </div>
                <button onClick={History}>Previous Work Experience <p className="p-0 m-auto text-black">(non-programming)</p></button>
                <PrevWork />
                <button onClick={History} className='display mt-6 mb-4'>Close</button>
            </div>
        </div>
    )
}

export default Qualifications;