// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const myservices = [
//   { title: "Robot Installation", desc: "Complete commissioning support" },
//   { title: "PLC Integration", desc: "Profinet & Modbus systems" },
//   { title: "Cycle Time Optimization", desc: "Improve productivity" }
// ];
// export default function myServicesCarousel() {
//   return (
//     <Swiper spaceBetween={20} slidesPerView={1} loop>
//         <h2>slider</h2>
//       {myservices.map((service, index) => (
//         <SwiperSlide key={index}>
//           <div className="card">
//             <h3>{service.title}</h3>
//             <p>{service.desc}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import workingSample1 from '../../assets/workingSample1.mp4';
import workingSample2 from '../../assets/workingSample2.mp4';
import workingSample3 from '../../assets/workingSample3.mp4';
import workingSample4 from '../../assets/workingSample4.mp4';
import workingSample5 from '../../assets/workingSample5.mp4';
import workingSample6 from '../../assets/workingSample6.mp4';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestCarousel() {
  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div style={cardStyle}><video src={workingSample3} muted controls style={{ width: "100%", height: "100%", objectFit: "cover" }}></video></div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={cardStyle}><video src={workingSample4} muted controls style={{ width: "100%", height: "100%", objectFit: "cover" }}></video></div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={cardStyle}><video src={workingSample2} muted controls style={{ width: "100%", height: "100%", objectFit: "cover" }}></video></div>
        </SwiperSlide>
         <SwiperSlide>
          <div style={cardStyle}><video src={workingSample1} muted controls style={{ width: "100%", height: "100%", objectFit: "cover" }}></video></div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={cardStyle}><video src={workingSample5} muted controls style={{ width: "100%", height: "100%", objectFit: "cover" }}></video></div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={cardStyle}><video src={workingSample6} muted controls style={{ width: "100%", height: "100%", objectFit: "cover" }}></video></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const cardStyle = {
  height: "350px",
  background: "#f5f5f5",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  overflow:'hidden'
};

