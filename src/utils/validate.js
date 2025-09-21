

export const checkValidData = (email, password) =>{

const isEmailValid =  /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email);
const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9A-Za-z]).{8,32}$/.test(password);

if(!isEmailValid) return "Email is not Valid";
if(!isPasswordValid) return "Password is not valid";

return null;


};