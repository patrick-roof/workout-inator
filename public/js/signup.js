const signup = document.getElementById('signup-form');
console.log(signup)

const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('signup successful')
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(email, password)
    if (email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/workoutpage');
      } else {
        alert(response.statusText);
      }
    }
  };

signup.addEventListener('submit-signup', signupFormHandler);
