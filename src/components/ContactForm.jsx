import React from 'react';

function ContactForm() {
  return (
    <div className="flex justify-center py-4">
      
      <form
      className='flex flex-col w-full md:w-6/12'
        action="https://formspree.io/f/xrgwqpwq"
        method="POST"
      >
        <label className='py-1'>
          Your Name:
        </label>
        <input className='bg-[#1f1f1f] p-3 rounded-lg' placeholder="Enter your Full Name" type="text" name="text" />

        <label className='py-1'>Your Message:</label>
        <textarea
        className='bg-[#1f1f1f] p-3 rounded-lg'
          placeholder="Write a Message"
          name="message"
          rows="4"
        ></textarea>

        <button className='bg-[#5429cf] py-2 mt-4' type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
