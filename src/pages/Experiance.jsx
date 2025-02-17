import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import './Home.css'
import { useEffect, useState } from 'react'


export default function Experiance(){

    const {register,handleSubmit,formState:{errors},reset} = useForm()

    const [workExperiences,setWorkExperiences] = useState( localStorage.getItem('workExperiences') != null ? JSON.parse(localStorage.getItem('workExperiences')) : [])
    // const [workExperiences, setWorkExperiences] = useState([{ jobTitle: '', companyName: '', location: '', startDate: '', endDate: '', jobDescription: '' }])

    useEffect(() =>{
        localStorage.setItem('workExperiences',JSON.stringify(workExperiences))
    },[workExperiences])

    const onAddExperiance=(data) =>{
        // console.log(data)
        setWorkExperiences([
            ...workExperiences,
            data
        ])
        reset()
        toast.success('Work Experiance added successfully !!!')
    }

    return(
        <>
            <div className="experiance-container">
                <div className="title">
                    <h2>Work Experience</h2>
                </div>
                <form onSubmit={handleSubmit(onAddExperiance)}>
                    <div className="input-fields">
                        <label>Job Title</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('job_title',{
                                        required:'Job Title is required !'
                                    })
                                }
                            ></input>
                            { errors.job_title && <p>{errors.job_title.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Company Name</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('company_name',{
                                        required:'Company Name is required !'
                                    })
                                }
                            ></input>
                            { errors.company_name && <p>{errors.company_name.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Location</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('location',{
                                        required:'Job Location is required !'
                                    })
                                }
                                placeholder='City, State'
                            ></input>
                            { errors.location && <p>{errors.location.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                            <label>Start Date</label>
                            <div className="field">
                                <input 
                                    type="date"
                                    {
                                        ...register('start_date',{
                                            required:'Joinning Date is required !'
                                        })
                                    }
                                ></input>
                                { errors.start_date && <p>{errors.start_date.message}</p>}
                            </div>
                    </div>
                    <div className="input-fields">
                        <label>End Date</label>
                        <div className="field">
                            <input 
                                type="date"
                                {
                                    ...register('end_date',{
                                        required:'Termination Date is required !'
                                    })
                                }
                            ></input>
                            { errors.end_date && <p>{errors.end_date.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Job Description</label>
                        <div className="field">
                            <textarea
                                {
                                    ...register('job_description',{
                                        required:'Job Description is required !'
                                    })
                                }
                            ></textarea>
                            { errors.job_description && <p>{errors.job_description.message}</p>}
                        </div>
                    </div>
                    <button type='submit'>Add Experiance</button>
                </form>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                    background: '#363636',
                    color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                    duration: 3000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                    },
                }}
            />
        </>
    )
}