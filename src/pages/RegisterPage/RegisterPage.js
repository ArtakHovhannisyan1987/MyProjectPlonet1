import React from 'react';
import "./RegisterPage.css";
import {useForm} from "react-hook-form";
import Input from '../../components/Input/Input'

const Register = () =>{
    const {handleSubmit, control} = useForm();
    const onSubmit = (data) => console.log(data);
    return(
        <div className='formheader'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="firstName" control={control} tpye={"text"} placeholder="First name" />
                <Input name="lastName" control={control} tpye={"text"} placeholder="Last Name" />
                <Input name="email" control={control} tpye={"email"} placeholder="Email" />
                <Input name="password" control={control} tpye={"password"} placeholder="Password" />
                <input type={"submit"} value={"submit"} />
            </form>
        </div>
    );
}
export default Register;

