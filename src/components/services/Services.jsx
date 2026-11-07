import React from 'react'
import { services } from '../../utilities/data'
import styles from './Services.module.css'
import robot from '../../assets/robot.jpeg'

const Services = () => {
  return (
    <div className={styles.services}>
        <div className={styles.imagediv}>
            <img className={styles.robotimg} src={robot} alt="working robot" />
        </div>
       <div className={styles.serviceDiv}>
         <h3 className={styles.serviceshead}>Our Services</h3>
      {services.map((ele,index)=>(
        <p className={styles.service} key={index}>{ele}</p>
      ))}
       </div>
    </div>
  )
}

export default Services
