import styled from 'styled-components';

export const DivForm = styled.div`
    display: flex;           
    flex-direction: column;  
    justify-content: center;  
    align-items: center;       
    margin: auto;            
    height: 100vh;          
    padding: 20px;

   
    form {
        background-color:white; 
        width: 100%;         
        max-width: 800px;      
        height: 400px;       
        border-radius: 16px;    
        padding: 20px;         
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
        display: flex;         
        flex-direction: column;
        align-items: center;    
    }

    div {
        margin-bottom: 15px; 
        width: 100%;          
        display: flex;        
        flex-direction: column;
        align-items: center;  
    }

    label {
        margin:1.6rem;
        margin-bottom: 5px;   
        display: block;        
        font-weight: bold;     
        text-align: center;    
        font-size: 28px;       
        font-family: 'Arial', sans-serif;
    }

    input {
        width: 60%;            
        padding: 10px;        
        border: 1px solid #ccc; 
        border-radius: 4px;   
        font-size: 20px;      
        text-align: center;    
    }

    button {
        padding: 10px;      
        background-color: #007bff; 
        color: white;      
        border: none;       
        border-radius: 6px; 
        cursor: pointer;    
        margin-top: 15px;   
        display: block;      
        width: 30%;         
        text-align: center;
        font-size: 22px;
           

        &:hover {
            background-color: #0056b3; 
        }
    }
`;