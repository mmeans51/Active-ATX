import React from 'react'

function Login() {
  return (
  <div className='mainLogin'>
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <form >
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
              />
              <button className='d-block w-50' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Login