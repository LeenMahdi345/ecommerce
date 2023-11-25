import * as yup from 'yup';
export const registerSchema =yup.object({
    userName:yup.string().required(" userName is req").min(3,"must at least 3 char").max(30,"max is 30 char"),
    email: yup.string().required("email is req").email(),
    password:yup.string().required("password is req").min(3,"must at least 3 char").max(30,"max is 30 char")
})