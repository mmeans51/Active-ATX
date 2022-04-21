import React, { useState } from 'react';

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  // the useMutation() Hook creates and prepares a JavaScript function that wraps around our mutation code and returns it to us
  // In our case, it returns in the form of the addUser function that's returned. We also get the ability to check for errors
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // excecute addUser mutation and pass in variable data from form
      // will now pass the data from the form state object as variables for our addUser mutation function
      // Upon success, we destructure the data object from the response of our mutation and simply log it to see if we're getting our token
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);

      // Now when you sign up successfully, you'll be redirected to the homepage with your token stored in localStorage
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mainSignup">
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-md-6">
          <div className="card">
            <h4 className="card-header">Sign Up</h4>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your Username"
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="d-block w-50" type="submit">
                  Submit
                </button>
              </form>
              {error && <div> Sign up failed </div>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
