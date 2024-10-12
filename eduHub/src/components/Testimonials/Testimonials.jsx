import React from 'react'
import './Testimonials.css'
import next_icon from '../../AssetsEduHub/next-icon.png'
import back_icon from '../../AssetsEduHub/back-icon.png'
import user_1 from '../../AssetsEduHub/user-1.png'
import user_2 from '../../AssetsEduHub/user-2.png'
import user_3 from '../../AssetsEduHub/user-3.png'
import user_4 from '../../AssetsEduHub/user-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn'/>
        <img src={back_icon} alt=""  className='back-btn'/>
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <h3>EduHub, USA</h3>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at EduHub was one of the best decisions i've ever made .
                        The supportive community , state-of-the-art facilities, and commitment to academic excellence have 
                        truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <h3>EduHub, USA</h3>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at EduHub was one of the best decisions i've ever made .
                        The supportive community , state-of-the-art facilities, and commitment to academic excellence have 
                        truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <h3>EduHub, USA</h3>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at EduHub was one of the best decisions i've ever made .
                        The supportive community , state-of-the-art facilities, and commitment to academic excellence have 
                        truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <h3>EduHub, USA</h3>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at EduHub was one of the best decisions i've ever made .
                        The supportive community , state-of-the-art facilities, and commitment to academic excellence have 
                        truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
