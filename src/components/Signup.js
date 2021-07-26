import React from "react";
import { useForm } from "react-hook-form";
import isEmail from 'validator/lib/isEmail';

const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
  },
  input: {
    width: "100%",
  },
};

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (e) => {
    console.log(e)
  }
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('username',{
              required: true,
              minLength: 6,
              maxLength: 15,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="Username"
            style={{...styles.input, borderColor: errors.username && "red"}}
            />
          <input
            {...register('email',{
              required: true,
              validate: (input) => isEmail(input),
            })}
            placeholder="Email"
            style={{...styles.input, borderColor: errors.email && "red"}}
            />
          <input
            {...register('password',{
              required: true,
              minLength: 6,
            })}
            placeholder="password"
            style={{...styles.input, borderColor: errors.password && "red"}}
            />
          <button type="submit">Submit</button>
        </form>
      </div>

  );
}