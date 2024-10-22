import styled from 'styled-components';

export const DivForm = styled.div`
    display: flex;           
    flex-direction: column;  
    justify-content: center;  
    align-items: center;       
    margin: auto;            
    height: 100vh;          
    padding: 20px;

    
    div {
        margin-bottom: 15px; 
        width: 100%;          
        max-width: 300px;     
    }

    label {
        margin-bottom: 5px;   
        display: block;        
    }

    input {
        width: 100%;          
        padding: 10px;        
        border: 1px solid #ccc; 
        border-radius: 4px;   
    }
`;