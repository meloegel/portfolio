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
        <div className='hvr-grow' id='edu'>
            <div className="qualifications">
                <div className='edu'>
                    <div>
                        <h3>Education: Lambda School</h3>
                        <p>March 2020 - Nov 2020</p>
                        <p>Participated in the Lambda Leadership program</p>
                        <p>Part of the Lambda X Endorsement program</p>
                    </div>
                    <div>
                        <a href='https://www.youracclaim.com/badges/50d30b03-c8f6-4054-ab84-062437c1598a/linked_in' target='_blank' rel="noopener noreferrer">
                            <img id='lambdaBadge' src={require('../styles/Images/lambda-badge-full-stack-web.png')} alt='Lambda Badge' />
                        </a>
                    </div>
                    <div>
                        <img id='ouLogo' src={require('../styles/Images/OU.png')} alt='Oakland Univeristy Logo' />
                    </div>
                    <div>
                        <h3>Previous Education: Oakland University</h3>
                        <p>Studied Psychology with Focus in Child Development</p>
                        <p>2008-2012</p>
                        <p>Division 1 Athlete in Swimming</p>
                        <p>4 year Conference Champions</p>
                    </div>
                </div>
                <button onClick={History}>Previous Work Experience <p id='buttonP'>(non-programming)</p></button>
                <PrevWork />
                <button onClick={History} id='closeButton' className='display'>Close</button>
            </div>
        </div>
    )
}

export default Qualifications;