import React from 'react';
import styles from "./Hero.module.css";
import workingSample2 from '../../assets/workingSample2.mp4';
import poster from "../../assets/backimg.png";



const Hero = () => {
  return (
    <div className={styles.home}>
      
      <div className={styles.goalDiv}>
        <h2 className={styles.goalhead}>Goal</h2>
        <p className={styles.para}>To empower industries with intelligent robotics that work 
            alongside humans to build a smarter world.</p>
        <p className={styles.para}>In the long term, our goal is to become a trusted innovation partner that drives digital transformation, reduces operational costs, and creates a safer and smarter future through robotics.</p>
      </div>

      <div className={styles.videoDiv}>
        <video className={styles.video} src={workingSample2} controls   muted loop poster={poster}/>
      </div>
      
      <div className={styles.missionDiv}>
        <h2 className={styles.missionhead}>Mission</h2>
      <p className={styles.para}>We focus on leveraging AI, IoT, and advanced automation to solve practical problems in sectors such as manufacturing, healthcare, logistics, agriculture, and smart infrastructure. By prioritizing user-centric design, scalability, and sustainability, our mission is to make robotics accessible not only to large enterprises but also to small and medium businesses.</p>
       </div>
    </div>
  )
}

export default Hero
