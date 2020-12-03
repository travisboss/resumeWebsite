import React from 'react';
import { useSelector } from 'react-redux'

const About = () => {
  const data = useSelector(state => state.resumeData.data);

  const name = (data.main && data.main.name) || '';
  const bio = (data.main && data.main.bio) || '';
  const address = (data.main && data.main.address) || {};
  const email = (data.main && data.main.email) || '';
  const resumeDownload = (data.main && data.main.resumedownload) || '';

  return (
    <section id="about">
      <div className="row">
        <div className="three columns header-col">
          <h2><span>About Me</span></h2>
        </div>
        <div className="nine columns main-col">
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span><br />
                <span>{address.street}<br />
                  {address.city} {address.state}, {address.zip}
                </span><br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-eye"></i>View Resume</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
