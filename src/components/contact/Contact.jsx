import React,{useState} from 'react'
import styles from './Contact.module.css';
import rslogo from '../../assets/RS LOGO.jpg'
import emailjs from "@emailjs/browser"





const Contact = () => {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        phone:'',
        task:'',
        location:'',
        message:''
    })

    const handleChange=(e)=>{
         setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
         
            e.preventDefault();
         console.log(formData,process.env.REACT_APP_EMAIL_SERVICE,
            process.env.REACT_APP_EMAIL_TEMPLATE,process.env.REACT_APP_EMAIL_PUBLIC);
         
         emailjs.send(
  process.env.REACT_APP_EMAIL_SERVICE,
  process.env.REACT_APP_EMAIL_TEMPLATE,
  formData,
  process.env.REACT_APP_EMAIL_PUBLIC
);
         alert('message sent succesfully.');
         setFormData({
        name:'',
        email:'',
        phone:'',
        task:'',
        location:'',
        message:''
    })
         
    }
  return (
    <div className={styles.contact}>
      
        <div className={styles.contactcell}>
            <img className={styles.rslogo} src={rslogo} alt="Company logo" />
            <p>robosoftservices22@gmail.com</p>
            <p>+91-8308341292</p>
        </div> 
      <div className={styles.formDiv}>
        <form className={styles.contactform} onSubmit={handleSubmit}>
            <div><label htmlFor="name">Name  : </label>
                 <input type="text" name='name' onChange={handleChange} value={formData.name} required placeholder='Enter your Name...' />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type='email' name='email' onChange={handleChange} value={formData.email}required placeholder='Enter your email...'/>
            </div>
            <div>
                <label htmlFor="phone">Cell      :  </label>
                <input type="tel" name='phone' pattern='[0-9]{10}' title='Enter 10 digit mobile number' onChange={handleChange} value={formData.phone} required placeholder='Enter Your Contact Number'/>

            </div>
            <div>
                <label htmlFor="task">Enquiry:</label>
                <input type="text" name='task' onChange={handleChange} value={formData.task} required placeholder='Specify Your enquiry' />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input type="text" name='location' onChange={handleChange} value={formData.location} required placeholder='Specify Your location' />
            </div>
            
            <div>
                <label htmlFor="message">Msg:</label>
                <textarea name="message" onChange={handleChange} value={formData.message} id="message" placeholder='Type your message here...' rows={5} maxLength={300}></textarea>
            </div>

            <button className={styles.submitbtn}>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
