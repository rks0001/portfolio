import React from 'react';

function ContactForm() {
  return (
    <div className="flex justify-center py-4">
      
      <form
      className='flex flex-col w-full md:w-6/12'
        action="https://formspree.io/f/xrgwqpwq"
        method="POST"
      >
        <label className='py-1 text-[3vh]'>
          Your Name:
        </label>
        <input className='bg-[#1f1f1f] p-3 h-[6vh] rounded-lg' placeholder="Enter your Full Name" type="text" name="text" />

        <label className='py-1 text-[3vh]'>Your Message:</label>
        <textarea
        className='bg-[#1f1f1f] p-3 rounded-lg h-[30vh]'
          placeholder="Write a Message"
          name="message"
          rows="6"
        ></textarea>

        <button className='bg-[#5429cf] py-2  h-[7vh] text-xl font-medium mt-4' type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
