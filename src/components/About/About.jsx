import React from 'react';
import styles from './About.module.css'
import backimg from '../../assets/backimg.png'
const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.abouttext}>
      <h2>AboutUs</h2>
      <p className={styles.para}>We are a technology-driven robotics startup committed to building intelligent, reliable, and practical robotic solutions that solve
         real-world challenges. Our work sits at the intersection of robotics, artificial intelligence, and automation, where innovation meets purpose</p>
       <p className={styles.para}>Founded with a vision to simplify complex processes, we design robots that improve efficiency, accuracy, and safety across industries such as manufacturing, healthcare, logistics, agriculture, and smart infrastructure. Our approach is rooted in problem-first engineering—we focus on understanding industry needs before creating scalable and cost-effective robotic systems.</p>
       <p className={styles.para}> Our team is made up of engineers, developers, and innovators who believe robotics should work alongside humans, not replace them. By combining smart hardware with intelligent software, we aim to empower businesses of all sizes to embrace automation without complexity.</p>
       <p className={styles.para}>As we grow, our mission remains clear: to make advanced robotics accessible, adaptable, and impactful, contributing to a smarter and more sustainable future.</p>
      </div>
      <div className={styles.founder}>
              <img src={backimg} alt="Founder of robosoft" title='NarsimanSingh Gaherwar' />
              <h2>Founder & CEO</h2>
              <p>Robosoft Services</p>
            </div>
    </div>
  )
}

export default About
