import { useSpring, animated } from 'react-spring';
import { DivRegister } from './Style';
import { NavLink } from 'react-router-dom';
import { SignIn } from 'phosphor-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
    Email: z.string().min(6, "Email obrigatório"),
    Password: z.string().min(1, "Senha obrigatória"),
    Password2: z.string().min(1, "Senha obrigatória"),
}).refine(data => data.Password === data.Password2, {
    message: "As senhas devem ser iguais",
    path: ["Password2"]
});

type FormRegister = z.infer<typeof schema>;

export function Register() {
    const { reset, handleSubmit, register, formState: { errors } } = useForm<FormRegister>({
        resolver: zodResolver(schema)
    });

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 2000 }
    });

    const onSubmit = (data: FormRegister) => {
        console.log('Registrado com sucesso', data);
        reset();
    };

    return (
        <DivRegister>
            <animated.form style={props} onSubmit={handleSubmit(onSubmit)}>
                <h1>Cadastro</h1>

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id='email'
                    placeholder='Email'
                    {...register('Email')}
                    required 
                />
                {errors.Email && <p>{errors.Email.message}</p>}

                <label htmlFor="senha">Senha</label>
                <input 
                    type="password" 
                    id='senha'
                    placeholder='Senha'
                    {...register('Password')}
                    required 
                />
                {errors.Password && <p>{errors.Password.message}</p>}

                <label htmlFor="senha2">Repita a senha</label>
                <input 
                    type="password" 
                    id='senha2'
                    placeholder='Repita a senha'
                    {...register('Password2')}
                    required 
                />
                {errors.Password2 && <p>{errors.Password2.message}</p>}

                <button type="submit">Cadastrar</button>

                <nav>
                    <SignIn size={16} />
                    <NavLink to="/">Login</NavLink>
                </nav>
            </animated.form>
        </DivRegister>
    );
}