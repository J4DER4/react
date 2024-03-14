import React, {useState} from 'react';
import './style.css';


import Rabbit from './img/rabbit.mp4';
import Cv from './pages/cv.jsx';
//import Login from './pages/login.jsx';

function EmptyPage() {return <div/>;}
  

function App() {
  const [currentPage, SetCurrentPage] = useState(null);

  const handlePasswordSubmit = (password) => {
    const pages= {
      '1111111111': Cv,
    };
    SetCurrentPage(pages[password]);
    console.log(SetCurrentPage(pages[password]))
  };

  const CurrentPage = currentPage || EmptyPage;
  return (
    <div className="page__container">
      <PasswordForm onPasswordSubmit={handlePasswordSubmit} />
      {CurrentPage}
    </div>
  );
  
}


class PasswordForm extends React.Component {
  
  state = {
    password: '',
    isPasswordSubmitted: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onPasswordSubmit(this.state.password);
    this.setState({ isPasswordSubmitted: true });
    //Handle CSS animations
    console.log('Password:', this.state.password);
    document.querySelector('.login__form').disabled = true;
    document.querySelector('.login__bg').style.animation = 'bgTransfer 4s ease-in-out';
    document.querySelector('.login__form').style.animation = 'fadeOut 1s ease-in-out';
    setTimeout(() => {document.querySelector('.login__form').style.opacity = '0'}, 1000);
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

    return (
      <div className="logandbg__view">
        <video autoPlay muted loop playsInline className={'login__bg'}>
        <source src={Rabbit} type="video/mp4" /></video>
            <form onSubmit={this.handleSubmit} className='login__form'>
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
        </form>
      </div>
    );
  }
}






export default App;