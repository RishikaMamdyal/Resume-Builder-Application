import { useForm } from 'react-hook-form'
import './Home.css'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
export default function Personal(){
    
    const {register,handleSubmit,formState:{errors},reset}=useForm()
    const [record,setRecord]=useState
    (localStorage.getItem('record')!=null ? JSON.parse(localStorage.getItem('record')):[])
    useEffect(()=>{localStorage.setItem('record',JSON.stringify(record))},[record])
    const addStudent=(data)=>{
        setRecord([
            ...record,
            data
        ])
        reset()
        toast.success('Student Added Successfully..!!')
    }
    return(
        <>
        <div className='personal-container'>
            <div className='title'>
                <h2>Personal Information</h2>
            </div>
            <form onSubmit={handleSubmit(addStudent)}>
                <div  className='input-fields'>
                    <label>Enter Your Name</label>
                    <div className="field">
                        <input type='text'{...register('name',{
                            required:'Your name is required'
                        })}></input>
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                </div>
                <div className='input-fields'>
                <label> Email Address</label>
                <div className="field">
                    <input type='email'{...register('emailAdress',{
                        required:'username is required',
                        pattern:{
                            value:/^\S+@\S+$/i,
                            message:'Invalid Username'
                        }
                    })}></input>
                    {errors.emailAdress && <p>{errors.emailAdress.message}</p>}
                </div>
            </div>
                <div  className='input-fields'>
                    <label>Github Link</label>
                    <div className="field">
                        <input type='text'{...register('git',{
                            required:'Student Name  is required'
                        })}></input>
                        {errors.git && <p>{errors.git.message}</p>}
                    </div>
                </div>
                <div  className='input-fields'>
                    <label>Linked In </label>
                    <div className="field">
                        <input type='text'{...register('link',{
                            required:'Student Name  is required'
                        })}></input>
                        {errors.link && <p>{errors.link.message}</p>}
                    </div>
                </div>
                <div className='input-fields'>
                <label>Mobile Number</label>
                <div className="field">
                    <input type='number'{...register('mobile',{
                        required:'Percentage is required',
                    
                    })}></input>
                    {errors.mobile && <p>{errors.mobile.message}</p>}
                </div>
            </div>
            <div className='input-fields'>
                <label>Objective</label>
                <div className="field">
                    <input type='text'{...register('obj',{
                        required:'Percentage is required',
                    
                    })}></input>
                    {errors.obj && <p>{errors.obj.message}</p>}
                </div>
            </div>
               <button type='submit'>Submit</button>
            </form>
        </div>
        </>
    )
}