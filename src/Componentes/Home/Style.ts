import styled from "styled-components";

export const DivForm = styled.div`
    display: flex;           
    flex-direction: column;  
    justify-content: center;  
    align-items: center;       
    margin: auto;            
    height: 100vh;          
    padding: 20px;

    form {
        background: rgba(255, 255, 255, 0.0); 
        width: 80%;   
        max-width: 500px;      
        height: 500px;       
        border-radius: 16px;    
        padding: 20px;         
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        display: flex;         
        flex-direction: column;
        align-items: center;    
    }

    h1 {
        font-family: 'Arial', sans-serif;
        color: white;
        font-size: 16px;
        margin: 1.6rem;
    }

    div {
        margin-bottom: 15px; 
        width: 100%;          
        display: flex;        
        flex-direction: column;
        align-items: center;  
    }

    label {
        margin: 1.8rem;
        margin-bottom: 5px;   
        display: block;        
        font-weight: bold;     
        text-align: center;    
        font-size: 28px;       
        font-family: 'Arial', sans-serif;
        color: white;
    }

    input {
        width: 60%;            
        padding: 10px;        
        border-radius: 16px;   
        font-size: 20px;      
        text-align: left;   
        color: white; 
        background-color: rgba(255, 255, 255, 0.2); 
        border:none;
        margin:8px;
        
        &::placeholder {
            color: #fff; 
            opacity: 1; 
        }


        &:focus {
            border: none; 
            outline: none; 
    }
    }

    button {
        padding: 10px;   
        background: rgba(255, 255, 255, 0.1);    
        color: white;      
        border: none;       
        border-radius: 6px; 
        cursor: pointer;    
        margin-top: 15px;   
        display: block;      
        width: 30%;         
        text-align: center;
        font-size: 22px;
         transition: background-color 0.3s ease, transform 0.3s ease; 

        &:hover {
            background-color: #66CDAA; 
              transform: scale(1.05); 
        }


       

        span {
            font-size: 1.6rem;
            margin: 1.0rem;
            font-family: 'Arial', sans-serif;
        }
    }
`;