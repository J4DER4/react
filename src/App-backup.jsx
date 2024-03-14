import React from 'react';
import './style.css';
import rabbit from './img/rabbit.mp4';
import Page1 from './pages/Cv';

class PasswordForm extends React.Component {
  state = {
    password: '',
    isPasswordSubmitted: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Password:', this.state.password,);
    this.setState({ isPasswordSubmitted: true });
  }

  handleInputChange = (event) => {
    this.setState({ password: event.target.value }, () => {
      if (this.state.password.length === 10) {
        this.handleSubmit(event);
        this.setState({ password: '' });
      }
    });
  }

  render() {
    return(Page1);
    const formClass = this.state.isPasswordSubmitted ? 'login__form submitted' : 'login__form';
    const bgClass = this.state.isPasswordSubmitted ? 'login__bg submitted' : 'login__bg';
    return (
      <div className="view">
        <video autoPlay muted loop playsInline className={bgClass}>
          <source src={rabbit} type="video/mp4" /></video>
        
        <form onSubmit={this.handleSubmit} className={formClass}>
          <div className="login__inputs">
            <div className="login__box">
              <input 
                type="password" 
                required 
                className="login__input" 
                id="passwordInput" 
                autoFocus 
                aria-label="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                disabled={this.state.isPasswordSubmitted}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="login_container">

      <PasswordForm />
    </div>
  );
}

export default App;