import { useSpring, animated } from 'react-spring';
import { DivRegister } from './Style';


export function Register(){

    const props = useSpring({
        opacity: 1, 
        from: { opacity: 0 },
        config: { duration: 2000 }
    });


    return(

        <DivRegister>
        <animated.form style={props}>

                       <h1>Cadastro</h1>
                 <label htmlFor="email">Email</label>
                 <input type="email" 
                 id='email'
                 placeholder='Email'
                 required
                 />

                 <label htmlFor="senha">Senha</label>
                 <input type="password" 
                  id='senha'
                  placeholder='Senha'
                  required/>

                    <label htmlFor="senha2">Repita a senha</label>
                 <input type="password2" 
                  id='senha2'
                  placeholder='Repita a senha'
                  required/>

                  <button type="submit">Cadastrar</button>
                
                
        </animated.form>
        </DivRegister>

    
    )
}