import styled from "styled-components";
export const DivRegister = styled.div`
    display: flex;           
    flex-direction: column;  
    justify-content: center;  
    align-items: center;       
    margin: auto;            
    height: 100vh;          
    padding: 20px;

    form {
        background: rgba(255, 255, 255, 0.0); 
        width: 100%;   
        max-width: 500px;      
        border-radius: 16px;    
        padding: 20px;         
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); 
        display: flex;         
        flex-direction: column;
        align-items: center;    
    }

    h1 {
        font-family: 'Arial', sans-serif;
        color: #fff; 
        font-size: 24px; 
        margin: 1.6rem 0; 
    }

    div {
        margin-bottom: 15px; 
        width: 100%;          
        display: flex;        
        flex-direction: column;
        align-items: center;  
    }

    label {
        margin: 1.0rem 0;   
        display: block;        
        font-weight: bold;     
        text-align: center;    
        font-size: 20px;       
        font-family: 'Arial', sans-serif;
        color: #fff;
    }

    input {
        width: 90%; 
        padding: 10px;        
        border-radius: 10px;   
        font-size: 18px;      
        text-align: left;   
        color: #fff; 
        background-color: rgba(255, 255, 255, 0.2); 
        border: none;
        margin: 8px 0;
        
        &::placeholder {
            color: #fff; 
            opacity: 0.8; 
        }

        &:focus {
            border: none; 
            outline: none; 
            background-color: rgba(255, 255, 255, 0.3); 
            box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); 
        }
    }

    button {
        padding: 10px;   
        background: rgba(255, 255, 255, 0.1);    
        color: #fff;      
        border: none;       
        border-radius: 6px; 
        cursor: pointer;    
        margin-top: 15px;   
        display: block;      
        width: 40%; 
        height: 80%; 
        text-align: center;
        font-size: 16px;
        transition: background-color 0.3s ease, transform 0.3s ease; 

        &:hover {
            background-color: #00FFFF; 
            transform: scale(1.05); 
        }

        span {
            font-size: 1.6rem;
            margin: 1.0rem;
            font-family: 'Arial', sans-serif;
        }
    }

    nav {
        margin-top: 20px; 
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Arial', sans-serif;

        a {
            color: #fff; 
            text-decoration: none; 
            margin-left: 15px;
            font-size: 16px;
            transition: color 0.3s; 

            &:hover {
                color: #66CDAA; 
            }
        }
    }
`;