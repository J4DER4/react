import React from 'react';

class PasswordForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target.elements.passwordInput.value;
    console.log('Password:', password);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login__form">
        <div className="login__inputs">
          <div className="login__box">
            <input type="password" required className="login__input" id="passwordInput" autoFocus aria-label="password" />
          </div>
        </div>
        <button type="submit" className="login__button">Enter</button>
      </form>
    );
  }
}

function App() {
  return (
    <div className="login_container">
      <video autoPlay muted loop playsInline className="login__bg">
        <source src="ezgif.com-video-to-mp4-converter.mp4" type="video/mp4" />
      </video>
      <PasswordForm />
    </div>
  );
}

export default App; 