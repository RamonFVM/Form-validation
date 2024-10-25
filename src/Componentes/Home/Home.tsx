import { DivForm } from './Style'; 
import { useSpring, animated } from 'react-spring';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { NavLink } from 'react-router-dom';
import { User } from 'phosphor-react';


const schema = z.object({
    username: z.string().min(1, 'Usuário é obrigatório'),
    password: z.string().min(1, 'Senha é obrigatória'),
});

type FormData = z.infer<typeof schema>;

export function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema), 
    });
    
    const props = useSpring({
        opacity: 1, 
        from: { opacity: 0 },
        config: { duration: 2000 }
    });

    const onSubmit = (data: FormData) => {
        console.log('Dados do formulário:', data);
    };

    return (
        <DivForm> 
            <animated.form style={props} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Login</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        
                        <input 
                            type="text" 
                            id="username" 
                            placeholder="email" 
                            {...register('username')}
                        />
                    </div>
                    {errors.username && <span>{errors.username.message}</span>}
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