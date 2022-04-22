import React from "react";
import './styled.scss';
import LogoSvg from '../../assets/logo.svg';
import {Forms} from '../../Components/forms';
import {Formspassword} from '../../Components/Formspassword';

export function SignIn(){

    return(
            <>
          <div className="background">&nbsp;</div> 
            <main className="container">

                <div className="Img_logo">
                    <img
                        src={LogoSvg}
                    />
                    <p>Centro de Diagnósticos de Análises Clínicas</p>
                </div>

        
            <div className="content">
                    <div className="title_element">
                        <h1>Login</h1>
                        <p>Não tem uma conta?<a href="https://google.com"> Solicite agora</a></p>
                    </div>

                    <div className="forms">
                        <Forms
                            name="E-mail"
                            type="text"
                        />
                          <Formspassword
                            name="Senha"
                            type="password"
                        />
                    </div>


                    <footer>
                        <button>
                            Entrar
                        </button>
                    </footer>

            </div>

            </main>
        </>
    );

};
