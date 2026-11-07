import React from 'react'
import { expertise } from '../../utilities/data'
import styles from './Expertise.module.css'
import robo2 from '../../assets/robo2.png'

const Expertise = () => {
  return (
    <div className={styles.expertise}>
      <div className={styles.Expertisediv}>
        <h3 className={styles.expertisehead}>Our area Of Expertise</h3>
      {expertise.map((ele, index)=>(
          <p className={styles.expertin} key={index}>{ele}</p>
      ))}
      </div>
       <div className={styles.imagediv}>
                  <img className={styles.robotimg} src={robo2} alt="working robot" />
              </div>
    </div>
  )
}

export default Expertise
