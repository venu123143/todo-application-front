import React, { useEffect, useState } from 'react'
// import style from "../styles/style"
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import axios from "axios"
import { server } from '../server'
import { BsFillCheckCircleFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
const HomePage = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [num, setNum] = useState(0)
  console.log(num);
  const fetchAllData = async () => {
    const data = await axios.get(`${server}`)
    setData(data.data.allData)
  }

  const handleSave = async () => {
    try {
      await axios.post(`${server}`, JSON.stringify({ name }), { headers: { "Content-Type": "application/json" } })
      setNum(num + 1)
      setName("")
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAllData()
  }, [num])
  const handleDelete = async (id) => {
    await axios.delete(`${server}/${id}`)
    setNum(num + 1)
    setName("")

  }

  const handleKeypress = async (e) => {
    if (e.keyCode === 13) {
      try {
        await axios.post(`${server}`, JSON.stringify({ name }), { headers: { "Content-Type": "application/json" } })
        setNum(num + 1)
        setName("")
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <div className='parent'>
        <div className='subparent'>
          <div className='taskManager'>
            <h2 className='heading'>Task Manager</h2>
            <div>
              <input type="text" autoFocus className='input' onKeyDown={handleKeypress} placeholder='e.g. wash dishes' value={name} onChange={(e) => setName(e.target.value)} />
              <button onClick={handleSave} className='button'>submit</button>
            </div>
          </div>
        </div>

        {
          data.length!==0 ? (data.map((each) => (
            <>
              <div className='savedata'>
                <div className='title-icon'>
                  <p className={each.completed === true ? 'icon' : null}>{each.name}</p>
                  <BsFillCheckCircleFill size={22} className={each.completed === true ? 'icons toggle' : 'icons'} />
                </div>
                <div>
                  <Link to={`/edit/${each._id}`}><button><AiOutlineEdit size={22} /></button></Link>
                  <button onClick={() => handleDelete(each._id)}><AiOutlineDelete size={22} /></button>
                </div>
              </div>
            </>
          ))) : (
            <>
              <p className='redcolor'>no tasks pending..!</p>
            </>
          )
        }
      </div >

    </>
  )
}

export default HomePage