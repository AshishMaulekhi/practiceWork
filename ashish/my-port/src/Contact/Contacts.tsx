import React, { useState } from 'react'
import FlottingInput from './FlottingInput'
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const Contacts = () => {

const form={
  name:"",
  email:"",
  phone:"",
  message:""

}
const[formdata ,setformdata]=useState(form);

const handleChange=(id:string,value:string)=>{//here id -->denote the key value or from like name ,email etc and value denote the value of particular key
  setformdata({...formdata,[id]:value });
}

  return (
    <div className=' px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0    my-10 font-mono' id='Contact'>
      <h1 className='   text-4xl  sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-navyS-200'>
        <span className='text-mintS-500'>05&nbsp;</span>
        Contact
      </h1>
      <div data-aos="flip-left" data-aos-duration='800' className=' w-[75%] border-mintS-500 lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4'>
        <div className=' text-navyS-200  font-semibold text-3xl flex gap-2 items-cente sm-mx:text-2xl xs-mx:text-xl'>Let's Connect</div>
        <FlottingInput  id='name' name='Name' value={formdata.name} handleChange={handleChange} />
        <FlottingInput  id='email' name='Email' value={formdata.email} handleChange={handleChange} />
        <FlottingInput  id='phone' name='Phone Numnber' value={formdata.phone} handleChange={handleChange} />
        <FlottingInput  id='Message' name='Message' value={formdata.phone} handleChange={handleChange} />
        <Button variant='filled' size='md' fullWidth radius='lg' color='#64FFDA' className='!text-navyS-700 !font-bold !text-xl' rightSection={<IconArrowRight/>} > Send</Button>
      </div>
    </div>
  )
}

export default Contacts