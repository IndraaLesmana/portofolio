import React from 'react'
import { RiUserStarLine } from 'react-icons/ri'

const Experience = () => {
  return (
    <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
              <RiUserStarLine />
              </div>

              <h3 className="h3 font-bold">Experience</h3>
            </div>

            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Web Developer</h4>

                <span>2023 — PKL</span>

                <p className="timeline-text">
                create a javaonetop soccer school website whose function is to carry out online registration and information about the soccer school
                </p>
              </li>

            </ol>
          </section>
  )
}

export default Experience
