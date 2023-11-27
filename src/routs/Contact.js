import React from 'react'
import Nabver from '../components/Nabver';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <Nabver/>
      <HeroImg2 heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
