import { DivForm } from './Style'; 
import { useSpring, animated } from 'react-spring';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Schema, z } from 'zod';


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
        config: { duration: 1000 }
    });

    const onSubmit = (data: FormData) => {
        console.log('Dados do formulário:', data);
      
    };

    return (
        <DivForm> 
            <animated.form style={props} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Usuário</label>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Nome do usuário ou email" 
                        {...register('username', { required: 'Usuário é obrigatório' })}
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Senha" 
                        {...register('password', { required: 'Senha é obrigatória' })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button type="submit">Entrar</button>
            </animated.form>
        </DivForm>
    );
}