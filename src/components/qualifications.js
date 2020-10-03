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
                <h3>Education: Lambda School</h3>
                <p>This needs more, maybe 'accomplishments'? also thinking the experience descriptions i wrote in the resume? </p>
                <button onClick={History}>Previous Work Experience <p id='buttonP'>(non-programming)</p></button>
                <PrevWork />
                <button onClick={History} id='closeButton' className='display'>Close</button>
            </div>
        </div>
    )
}

export default Qualifications;