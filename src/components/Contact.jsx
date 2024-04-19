import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sdtgxxb', 'template_dd7ddmj', form.current, 'hQxM7mNXxHCkuweL0')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div id='contact' className="flex flex-col w-full min-h-screen px-5 pt-32 md:mx-auto bg-custom">
   <div className='font-bold flex justify-center tracking-[5px] text-center text-white group overflow-y-hidden  '>
            <p className='relative md:text-3xl sm:text-2xl'>
              CONTACT ME
                     </p>
            </div>
    <div className='flex flex-col w-full h-auto m-auto mt-20 bg-white rounded-lg md:w-1/2 '>
    <form ref={form} onSubmit={sendEmail} className='p-5' action="#">
        <div >
          <label htmlFor="name" className='block p-2 font-sans text-base md:text-xl '>Name</label>
          <input type="text" name="user_name" autofocus className='w-full h-12 p-5 text-base bg-gray-200 rounded-md outline-none name md:text-xl ' placeholder='Enter your name'/>
        </div>
        <div >
          <label htmlFor="mail" className='block w-full p-2 font-sans text-base md:text-xl'>Mail</label>
          <input type="text" name="user_email" autoCorrect='off' required className='w-full h-12 p-5 text-base bg-gray-200 border-b-4 rounded-md outline-none md:text-xl mail' placeholder='Enter your mail'/>
        </div>
        <div >
          <label htmlFor="message  " className='block w-full p-2 font-sans text-base md:text-xl'>Message</label>
          <textarea type="textField" name="message" rows="7" col="60"  className='w-full p-5 text-base bg-gray-200 border-b-4 rounded-md outline-none md:text-xl message' placeholder='Type your message' />
        </div>
        <button type='submit' value="Send" className='block px-5 py-2 mt-4 ml-auto text-base text-white rounded-lg md:text-xl bg-custom'> Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Contact;