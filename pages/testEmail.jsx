import React, { useState } from 'react';


const testEmail = () => {
    const [recipientEmail, setRecipientEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ recipientEmail, subject, message }),
        });
  
        if (response.ok) {
          console.log('Email sent successfully');
          // Handle success, show a success message, or redirect the user
        } else {
          console.log('Failed to send email');
          // Handle error, show an error message, or redirect the user
        }
      } catch (error) {
        console.log('Failed to send email', error);
        // Handle error, show an error message, or redirect the user
      }
    };
  
    return (
      <form className='mt-36 flex flex-col gap-4 w-full'>
        <input
          type="email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          placeholder="Recipient Email"
          required
          className='mx-auto w-1/2 bg-gray-600 px-5 py-2 rounded-md text-white'
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
          className='mx-auto w-1/2 bg-gray-600 px-5 py-2 rounded-md text-white'
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className='mx-auto w-1/2 bg-gray-600 px-5 py-2 rounded-md text-white'
          />
          <button onClick={handleSubmit} className='mx-auto w-1/2 bg-blue-600 px-5 py-2 rounded-md text-white'>
            Submit
            </button>
          </form>
    )
}

export default testEmail

