import { useState } from 'react';
import logo from './assets/logo.png'

import './styles.css'

function App() {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
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
                <input className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email} 
                onChange={e => setemail(e.target.value)} />
                <span className="focus_input" data-placeholder="E-mail" ></span>
            </div>
            <div className='wrap_input'>
                <input className={password !== "" ? 'has-val input' : 'input'}
                type="password" 
                value={password}
                onChange={e =>setPassword(e.target.value)}
                 />
                <span className="focus_input" data-placeholder="Senha" ></span>
            </div>
            
          <div className='login_form_btn'>
              <button className='login_btn'>Login</button>

          </div>

          <div className='form_footer'>
            <span className='forgt_msg'>
               Esqueceu sua Senha?
            </span>
            <a className='forgot_link' href='#'>Redefinir Senha</a>
          </div>

          <div className='form_footer'>
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
