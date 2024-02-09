import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from "swiper/modules";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      logo: <FaGoogle />,
      name: 'Raghad Lotfy',
      test: `I owe my success to this university. It's just so amazing to see how much I have grown in the past few years. I am so grateful for the opportunities that I have been given`,
    },
    {
      id: 2,
      logo: <FaGithub />,
      name: 'Nada Hussein',
      test: "It was a pleasure collaborating with Meri on different projects. One of the things that I think is special about her is that she never settles, even after completing the projects she finds other resources and strengthens her knowledge. Collaborating with her is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      logo: <FaTwitter />,
      name: 'akbar (Aku) Khan',
      test: 'I worked with Meri in the same team and her communication skills are very strong. Her programming skill is one of the bests, given the time frame in the field. She is a good team player.  She will probably fit in most of the companies not only because she\'s a good team worker, but also because she has very good skills and I know she has much more potential to be shown.',
    },
    {
      id: 4,
      logo: <BsLinkedin />,
      name: 'Isai Céspedes',
      test: "I mentored Meri some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    },
    
  ];
  return (
    <>
      <header id="testmonials" className="header" />
        <h3
        style={{
          marginTop: "9rem",
          textAlign: "center",
        
        }}
        >ALUMNI FEEDBACK</h3>
        <h1
          style={{
            marginBottom: "10rem",
          }}
        >
          Testimonials
        </h1>
        <Swiper
          className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={2}
          pagination={{ clickable: true }}
        >
          {testimonials.map((test) => (
            <SwiperSlide className="testimonial" key={test.id}>
              <div className="client__avatar">{test.logo}</div>
              <h5 className="client__name">{test.name}</h5>
              <small className="client__review">{test.test}</small>
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}

export default Testimonials