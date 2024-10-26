import { DivForm } from './Style'; 
import { useSpring, animated } from 'react-spring';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { NavLink } from 'react-router-dom';
import { User } from 'phosphor-react';


const schema = z.object({
    email: z.string().min(6, 'Usuário é obrigatório'),
    password: z.string().min(1, 'Senha é obrigatória'),
});

type FormData = z.infer<typeof schema>;

export function Home() {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema), 
    });
    
    const props = useSpring({
        opacity: 1, 
        from: { opacity: 0 },
        config: { duration: 2000 }
    });

    const onSubmit = (data: FormData) => {
        console.log('Dados do formulário:', data);
        reset()
    };

    return (
        <DivForm> 
            <animated.form style={props} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Login</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        
                        <input 
                            type="text" 
                            id="email" 
                            placeholder="Email" 
                            {...register('email')}
                        />
                    </div>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                     
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Senha" 
                            {...register('password')}
                        />
                    </div>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button type="submit">Entrar</button>


                <nav>
                    <User size={16} />
                    <NavLink to="Cadastro">se cadastrar</NavLink>
                </nav>
                

            
            </animated.form>
        </DivForm>
    );
}