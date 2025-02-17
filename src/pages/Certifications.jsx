import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import './Home.css'
import { useEffect, useState } from 'react'


export default function Certifications(){

    const {register,handleSubmit,formState:{errors},reset} = useForm()

    const [certifications,setCertifications] = useState( localStorage.getItem('certifications') != null ? JSON.parse(localStorage.getItem('certifications')) : [])
    // const [certifications, setCertifications] = useState([{ certificationTitle: '', issuingOrganization: '', issueDate: '', expirationDate: '', description: '' }])

    useEffect(() =>{
        localStorage.setItem('certifications',JSON.stringify(certifications))
    },[certifications])

    const onAddCertificate=(data) =>{
        // console.log(data)
        setCertifications([
            ...certifications,
            data
        ])
        reset()
        toast.success('Certificate added successfully !!!')
    }

    return(
        <>
            <div className="Certifications-container">
                <div className="title">
                    <h2>Certifications</h2>
                </div>
                <form onSubmit={handleSubmit(onAddCertificate)}>
                    <div className="input-fields">
                        <label>Certification Title</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('certificate_title',{
                                        required:'Certification Ttitle is required !'
                                    })
                                }
                            ></input>
                            { errors.certificate_title && <p>{errors.certificate_title.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Issuing Organization</label>
                        <div className="field">
                            <input 
                                type="text"
                                {
                                    ...register('oreganization',{
                                        required:'Organization Name is required !'
                                    })
                                }
                            ></input>
                            { errors.oreganization && <p>{errors.oreganization.message}</p>}
                        </div>
                    </div>
                    <div className="input-fields">
                        <label>Issue Date</label>
                        <div className="field">
                            <input 
                                type="date" 
                                {
                                    ...register('issued_date',{
                                        required:'Certificate Issue Date is required !'
                                    })
                                }
                                placeholder='City, State'
                            ></input>
                            { errors.issued_date && <p>{errors.issued_date.message}</p>}
                        </div>
                    </div>
                    <button type='submit'>Add Certificate</button>
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