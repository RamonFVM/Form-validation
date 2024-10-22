import { DivForm } from './Style'; // Ajuste o caminho conforme necessário

export function Home() {


    return (
        <DivForm> 
            <form>
                <div>
                    <label htmlFor="username">Usuário</label>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Nome do usuário ou email" 
                        required 
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Senha" 
                        required 
                    />
                </div>

                <button type="submit">Entrar</button>
            </form>
        </DivForm>
    );
}