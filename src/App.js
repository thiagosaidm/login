import logo from './assets/logo.png'


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

            <div className='wrap-input'>
                <input type="email"/>
                <span className="focus_input" data-placeholder="E-mail" ></span>
            </div>
            <div className='wrap-input'>
                <input type="password" />
                <span className="focus_input" data-placeholder="Senha" ></span>
            </div>
            



            </form>
          </div>
      </div>
    </div>
    );
}

export default App;
