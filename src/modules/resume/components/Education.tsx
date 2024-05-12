import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'

const Education = () => {
  return (
    <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
      <FaUserGraduate />
      </div>

      <h3 className="h3 font-bold">Education</h3>
    </div>

    <ol className="timeline-list">
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          SDN BABAKAN SONDARI 02
        </h4>
        <span>2013 — 2019</span>
      </li>

      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          SMPN 2 KATAPANG
        </h4>
        <span>2019 — 2021</span>
      </li>

      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          SMKN 1 KATAPANG
        </h4>
        <span>2021 — 2024</span>
      </li>
    </ol>
  </section>
  )
}

export default Education
