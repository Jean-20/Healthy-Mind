import React from 'react';
import { Link } from 'react-router-dom';
import SectionTwo from '../Components/Home/SectionTwo';
import SectionThree from '../Components/Home/SectionThreee';
import MissionAndVision from '../Components/Home/MissionAndVision';
import SectionOne from '../Components/Home/SectionOne';
const AboutUs = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <MissionAndVision />

      <div className="contacto fixed bottom-0 end-0 mb-4 mr-4">
        <a href="https://chat.whatsapp.com/BY8OP7ePUfNCUiEFTxyKKr" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;