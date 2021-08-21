import { data } from 'jquery';
import React,{useState} from 'react';
import { useForm } from 'react-hook-form';

const SubmitForm=()=>{
    const {register,handleSubmit,formState: { errors }}=useForm();
    
    const [formData,setFormData]=useState("");
    const onSubmit = (data) => {
        //alert(JSON.stringify(data));
        console.log(data);
        setFormData(JSON.stringify(data));
        // setFormData([data,{
        //     id: data.length,
        //     Name: data.Name,
        //     Email:data.Email
        // }]);
      };
    //  const renderData= data.map((Name,Email)=>
    //  <li>{Name} and {}</li>)

    return(
        <div className="twelve wide stretched column">
            <div className="ui segment">
            <h2>React Hook Form</h2>
                <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>Name</label>
                    <input {...register("Name",{ required: true, maxLength: 20 })} />                     
                    {errors.Name?.type === 'required' && 
                    <div className="ui pointing red basic label">Name is required</div>}
                </div>
                <div className="field">
                    <label>Email</label>
                    <input {...register("Email",{required: true, pattern: /^[A-Za-z]+$/i })} />
                    {errors.Email?.type === 'required' && 
                    <div className="ui pointing red basic label">Email is required</div>}
                </div>
                    <input className="ui button blue" type="submit" />
                    <div>
            <h2>{formData}</h2>
            </div>
                </form>
            </div> 
                      
        </div>
    );

};

export default SubmitForm