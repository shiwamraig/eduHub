import React from 'react'
import './About.css'
import about_img from '../../AssetsEduHub/about.png'
import play_icon from '../../AssetsEduHub/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt=""  className='play-icon'/>
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>EduHub University is committed to shaping the next generation of innovators, leaders, and problem solvers. Founded on the principles of excellence in education
            , we offer a diverse range of programs designed to meet the demands of a rapidly changing world</p> <br />
            <p>At EduHub University, we believe in a holistic approach to education. Our world-class faculty and modern curriculum are designed to ensure that students not only excel academically but also develop critical thinking, creativity, and a global perspective. </p><br />
            <p>We are dedicated to empowering students to achieve their full potential and make a meaningful impact in society. Whether you’re looking to build a career in technology, the arts, business, or any other field, EduHub University provides the resources, mentorship, and network to help you succeed. Join us in our mission to inspire and shape the future.</p>
        </div>
    </div>
  )
}

export default About
