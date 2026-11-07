import React from 'react'
import styles from './Work.module.css'
import { roboticsExperience ,projects} from '../../utilities/data'
import { useState } from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Work = () => {
    
    
const[showAllresponsibilities,setshowAllResponsibilities]=useState(false);
 const [expandedIndex, setExpandedIndex] = useState(null); 
 
 const[x,setX]=useState(0)
 const arr=roboticsExperience.slice(x,x+3)

 

 const handleslidenext=()=>{
if(x<roboticsExperience.length-3){
    setX(pre=>pre+1)
}
 }
 const handleslidepre=()=>{
    if(x>0){
        setX(pre=>pre-1)
    }
 }
    

    
  return (
    <div className={styles.work}>
        <button onClick={handleslidepre}>⏮️</button>
        
      {
        arr.map((ele,index)=>(
            <div key={index} className={styles.workunit}>
                
                <h2>{ele.client || ele.organization}</h2>
                <h3>({ele.location})</h3>
                <h4>robotBrand:{ele.robotBrand}</h4>
                <p>{ele.projectType}--{ele.date}</p>
                 <p>
  Responsibilities:&nbsp;
  {expandedIndex === index
    ? ele.responsibilities.join(', ')
    : ele.responsibilities[0]
  }

  <sub
    style={{ cursor: 'pointer',color:'red' }}
    onClick={() =>
      setExpandedIndex(expandedIndex === index ? null : index)
    }
  >
    {expandedIndex === index ? ' ...less' : ' ...more'}
  </sub>
</p>

                </div>
        ))
        
        
      }

      <button onClick={handleslidenext}>⏭️</button>
      <div className={styles.project}>
      {projects.map((ele,index)=>(
            <div key={index} className={styles.projectunit}>
                <h2>{ele.client || ele.organization}</h2>
                <h3>({ele.orgLocation})</h3>
                <h4>robot:{ele.robots}</h4>
                <p>Project:{ele.projectName}--{ele.duration}</p>
                 <p>
  Responsibilities:&nbsp;
  {expandedIndex === index
    ? ele.responsibilities.join(', ')
    : ele.responsibilities[0]
  }

  <sub
    style={{ cursor: 'pointer',color:'red' }}
    onClick={() =>
      setExpandedIndex(expandedIndex === index ? null : index)
    }
  >
    {expandedIndex === index ? ' ...less' : ' ...more'}
  </sub>
</p>
                </div>
        ))}
        </div>
    
    </div>
  )
}

export default Work
