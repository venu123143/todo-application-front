import axios from 'axios'
import React, { useState } from 'react'
import { server } from '../server'
import { useNavigate, useParams } from 'react-router-dom'
import { selectDarkMode } from '../redux/toggleReduxer'
import { useSelector } from 'react-redux'
const EditTask = () => {
    const isDarkMode = useSelector(selectDarkMode);
    const [name, setName] = useState("")
    const [completed, setCompleted] = useState(false)
    // const [num, setNum] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()
    const handleEdit = async () => {
        const res = await axios.patch(`${server}/${id}`, { name, completed })
        console.log(res);
        if (res) {
            navigate('/')
        }
    }
    const handleCheckbox = (e) => {
        console.log(e.target.checked);
        if (e.target.checked === true) {
            setCompleted(true)
        }
    }
    return (
        <div>
            <div className={isDarkMode ? "parent parent2" : "parent"}>
                <div className='subparent'>
                    <div className='EdittaskManager'>
                        <h2 className='heading '>Edit Task </h2>
                        <div>
                            <div className='inputfields'>
                                <label htmlFor="checkbox">Task Id</label>
                                <input type="text" className='input task' id='checkbox' readOnly value={id} />

                            </div>
                            <div className='inputfields'>
                                <label htmlFor="input">Name</label>
                                <input type="text" className='input' id='input' autoFocus value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='inputfields'>
                                <label htmlFor="checkbox">Completed</label>
                                <input type="checkbox" className='input' id='checkbox' onClick={handleCheckbox} value={id} />
                            </div>
                        </div>
                        <button onClick={handleEdit} className='button'>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTask