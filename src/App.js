import logo from './assets/logo.png'

import './styles.css'

function App() {
  return (
    <div className="container">
      <div className="container_login">
        <div className="wrap_login">
          <form className="login_form">
              <span className="form_title">
                  Olá! Seja bem vindo!
              </span>
              <span className="form_title">
                <img src={logo} alt="Logo"/>
              </span>
            
            <div className='wrap_input'>
                <input className='input' type="email"/>
                <span className="focus_input" data-placeholder="E-mail" ></span>
            </div>
            <div className='wrap_input'>
                <input className='input' type="password" />
                <span className="focus_input" data-placeholder="Senha" ></span>
            </div>
            
          <div className='login_form_btn'>
              <button className='login_btn'>Login</button>

          </div>

          <div className='forgot'>
            <span className='forgt_msg'>
               Esqueceu sua Senha?
            </span>
            <a className='forgot_link' href='#'>Redefinir Senha</a>
          </div>

          <div className='new_menber'>
            <span className='new_menber_content'>
               Crie sua Conta
            </span>
            <a className='new_menber_link' href='#'>Crie sua Conta</a>
          </div>



            </form>
          </div>
      </div>
    </div>
    );
}

export default App;
