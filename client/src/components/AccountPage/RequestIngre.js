import React, { useState } from 'react';
//handles the tod list entering an ingrediant list
const RequestIngre = ({ addIngrediant }) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleIngrediant = (e) => {
        e.preventDefault();
        addIngrediant(userInput);
        setUserInput("");
    }
    return (



        <
        form onSubmit = { handleIngrediant } >
        <
        input value = { userInput }
        type = "text"
        onChange = { handleChange }
        placeholder = "Enter Ingrediant..." / >
        <
        button > Add Ingredient < /button> 


        <
        /
        form >



    );
};

export default RequestIngre;