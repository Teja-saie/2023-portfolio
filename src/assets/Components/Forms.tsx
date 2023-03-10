import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mayzbwbz");
  
  if (state.succeeded) {
    return (
      <p className='text-white font-semibold text-2xl text-center'>
        Thanks for submitting!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='mx-auto max-w-md'>
      <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>
        Name
      </label>
      <input
        id="name"
        name="name"
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      
      <label htmlFor="email" className='block text-gray-700 font-bold mb-2 mt-4'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className='text-red-500 text-xs italic'
      />
      
      <label htmlFor="message" className='block text-gray-700 font-bold mb-2 mt-4'>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className='text-red-500 text-xs italic'
      />
      
      <button
        type="submit"
        disabled={state.submitting}
        className='bg-third hover:bg-fourth text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
