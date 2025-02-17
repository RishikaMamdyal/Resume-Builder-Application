import { useForm } from 'react-hook-form'
import './Home.css'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
export default function Skills(){
    
    const {register,handleSubmit,formState:{errors},reset}=useForm()
    const [records,setRecords]=useState
    (localStorage.getItem('records')!=null ? JSON.parse(localStorage.getItem('records')):[])
    useEffect(()=>{localStorage.setItem('records',JSON.stringify(records))},[records])
    const addStudents=(data)=>{
        setRecords([
            ...records,
            data
        ])
        reset()
        toast.success('Education added Successfully..!!')
    }
    return(
        <>
        <div className='skills-container'>
            <div className='title'>
                <h2>Skills</h2>
            </div>
            <form onSubmit={handleSubmit(addStudents)}>
            {/* <p>* Enter Multiple Values</p> */}
                <div  className='input-fields'>
                    <label>Professional Skills</label>
                    <div className="field">
                        <input type='text'{...register('professional',{
                            required:'Professional Skill is required'
                        })}></input>
                        {errors.professional && <p>{errors.professional.message}</p>}
                    </div>
                </div>
                <div  className='input-fields'>
                    <label>Technical Skills</label>
                    <div className="field">
                        <input type='text'{...register('tech',{
                            required:'Technical Skill is required'
                        })}></input>
                        {errors.tech && <p>{errors.tech.message}</p>}
                    </div>
                </div>
                
               <button type='submit'>Save</button>
            </form>
        </div>
        </>
    )
}