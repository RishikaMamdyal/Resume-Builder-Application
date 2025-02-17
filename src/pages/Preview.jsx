import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import './Preview.css'
export default function Preview(){
    const record =localStorage.getItem('record')? JSON.parse(localStorage.getItem('record')):[]
    const records =localStorage.getItem('records')? JSON.parse(localStorage.getItem('records')):[]
    const educations =localStorage.getItem('educations')? JSON.parse(localStorage.getItem('educations')):[]
    const workExperiences =localStorage.getItem('workExperiences')? JSON.parse(localStorage.getItem('workExperiences')):[]
    const certifications =localStorage.getItem('certifications')? JSON.parse(localStorage.getItem('certifications')):[]
    const [student,setStudent]=useState({})
    const[stud,setStud]=useState({})
    const [images, setImages] = useState([]);
    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageArray = [];
    
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
              imageArray.push(e.target.result);
              if (imageArray.length === files.length) {
                setImages((prevImages) => [ ...imageArray]);
              }
            };
            reader.readAsDataURL(file);
          }
        }
      };
    const params =useParams()
    const rollno = params.rollno
    useEffect(()=>{
        for (let i=0; i<record.length;i++){
            if(record[i].roll===rollno){
                setStudent(record[i])
            }
        }
    })
    const param =useParams()
    const rollnos = param.rollnos
    useEffect(()=>{
        for (let i=0; i<records.length;i++){
            if(records[i].rolls===rollnos){
                setStud(records[i])
            }
        }
    })
    return(
        <>
        <div className='resume'>
            
         <div className='flex-container'>
         <div className='Image'>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Uploaded ${index}`}
            style={{ width: '150px', height: '150px', objectFit: 'cover'  }}
          />
        ))}
      </div>
    </div>
               <div className='para'>
               <div className='field'>
               <p>{student.emailAdress}</p>
                    <label>Email Add:</label>
                    
                </div>
               
                <div className='field'>
                <p>{student.name}</p>
                    <label>Full Name:</label>
                    
                </div>
                <div className='field'>
                <p>{student.git}</p>
                    <label>GitHub ID:</label>
                    
                </div>
                <div className='field'>
                <p>{student.link}</p>
                    <label>LinkedIn:</label>
                    
                </div>
                <div className='field'>
                <p>{student.mobile}</p>
                    <label>Mobile No:</label>
                    
                </div>
            </div>
               </div>
        <div className=' view-container'>
           
            
           <div className='experiences3'>
           <table>
                <thead>
                    <tr>
                    
                    <th>Degree</th>
                    <th>Branch</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    educations.length===0 ?(
                        <tr>
                            <td colSpan='3'> No Records Available</td>
                        </tr>
                    ):(
                    educations.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.degree}</td>
                                <td>{item.branch}</td>
                                <td>{item.sdate}</td>
                                <td>{item.edate}</td>
                                <td>{item.percent}</td>
                                
                            </tr>
                        )
                    })
                )
                   }
                </tbody>
            </table>
           </div>

        </div>
        <div className=' view-container1'>
           
            
           <div className='experiences1'>
           <table>
                <thead>
                    <tr>
                    
                    <th>Job Title</th>
                    <th>Company Name</th>
                    <th>Location</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Job Description</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    workExperiences.length===0 ?(
                        <tr>
                            <td> No Records Available</td>
                        </tr>
                    ):(
                        workExperiences.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.job_title}</td>
                                <td>{item.company_name}</td>
                                <td>{item.location}</td>
                                <td>{item.start_date}</td>
                                <td>{item.end_date}</td>
                                <td>{item.job_description}</td>
                                
                            </tr>
                        )
                    })
                )
                   }
                </tbody>
            </table>
           </div>
           

        </div>
         <div className=' view-containers'>
           
            
           <div className='experiencess'>
           <table>
                <thead>
                    <tr>
                    
                    <th>Certificate Title</th>
                    <th>Organization</th>
                    <th>Issue date</th>
                    
                    </tr>
                </thead>
                <tbody>
                   {
                    certifications.length===0 ?(
                        <tr>
                            <td> No Records Available</td>
                        </tr>
                    ):(
                        certifications.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.certificate_title}</td>
                                <td>{item.oreganization}</td>
                                <td>{item.issued_date}</td>
                               
                               
                                
                            </tr>
                        )
                    })
                )
                   }
                </tbody>
            </table>
           </div>
         <div className='skilled'>

         <div className='parameter'>
               <div className='field'>
                <h3>* Professional </h3>
                
                <ul>
                <li>{stud.professional}</li>
                
                </ul>
            </div>
               
            </div>
            <div className='parameter1'>
               <div className='field'>
                <h3>* Technical </h3>
                <ul>
                <li>{stud.tech}</li>
                
                </ul>
              
                </div>
                </div>
                <div className='parameter2'>
              
                </div>
         </div>

        </div>
        <button>Downlode CV</button>
        
        </div>
        
        </>
    )
}