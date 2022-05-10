import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Full Name</label>
            <input type='text' placeholder='Full Name' />
            <label>Email</label>
            <input type='email' placeholder='Email' />
            <label> Subject</label>
            <input type='text' placeholder='Subject' />
            <label> Details</label>
            <textarea rows='6' placeholder='Type a short message here' />
            <button className='btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form