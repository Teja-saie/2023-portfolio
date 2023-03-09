import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mayzbwbz");
  if (state.succeeded) {
      return <p className='text-white font-semibold text-2xl'>Thanks for Submitting!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        name="name"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
