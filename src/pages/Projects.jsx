import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import './Home.css'
import { useEffect, useState } from 'react'


export default function Projects1(){

    const {register,handleSubmit,formState:{errors},reset} = useForm()

    const [projects,setProjects] = useState( localStorage.getItem('projects') != null ? JSON.parse(localStorage.getItem('projects')) : [])
    // const [projects, setProjects] = useState([{ projectTitle: '', description: '', technologiesUsed: '', projectLink: '' }])

    useEffect(() =>{
        localStorage.setItem('projects',JSON.stringify(projects))
    },[projects])

    const onAddProjects=(data) =>{
        // console.log(data)
        setProjects([
            ...projects,
            data
        ])
        reset()
        toast.success('Project added successfully !!!')
    }

    return(
        <>
            <div className="projects-container">
                <div className="title">
                    <h2>Projects</h2>
                </div>
                <form onSubmit={handleSubmit(onAddProjects)}>
                    <div className="input-fields">
                        <label>Project Title</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('project_title',{
                                        required:'Project Title is required !'
                                    })
                                }
                            ></input>
                            { errors.project_title && <p>{errors.project_title.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Description</label>
                        <div className="field">
                            <textarea
                                {
                                    ...register('project_description',{
                                        required:'Project Descrioption is required !'
                                    })
                                }    
                            ></textarea>
                            { errors.project_description && <p>{errors.project_description.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Technologies Used</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('technology_used',{
                                        required:'Used Technologies are required !'
                                    })
                                }
                                placeholder='City, State'
                            ></input>
                            { errors.technology_used && <p>{errors.technology_used.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                            <label>Link to Project</label>
                            <div className="field">
                                <input 
                                    type="url" 
                                    {
                                        ...register('project_links',{
                                            required:'Project Links are required !'
                                        })
                                    }
                                    placeholder='GitHub, Live Demo, etc.'
                                ></input>
                                { errors.project_links && <p>{errors.project_links.message}</p>}
                            </div>
                    </div>
                    <button type='submit'>Add Project</button>
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