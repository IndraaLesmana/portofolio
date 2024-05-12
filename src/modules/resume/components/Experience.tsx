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
                <h4 className="h4 timeline-item-title">Creative director</h4>

                <span>2015 — Present</span>

                <p className="timeline-text">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et qvuas molestias
                  exceptur.
                </p>
              </li>

            </ol>
          </section>
  )
}

export default Experience
