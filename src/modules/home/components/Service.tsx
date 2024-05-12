import React from 'react'
import Image from "next/image";

const Service = () => {
  return (
    <section className="service">
            <h3 className="h3 service-title font-bold">Service</h3>

            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box">
                  <Image
                    src="/icon-dev.svg"
                    alt="Web development icon"
                    width={40}
                    height={100}
                    className='service-icon'
                  />
                </div>  

                <div className="service-content-box">
                  <h4 className="h4 service-item-title font-bold">Web development</h4>

                  <p className="service-item-text">
                  Create web applications that are attractive and easy to use with modern technology.
                  </p>
                </div>
              </li>

            </ul>
          </section>
  )
}

export default Service
