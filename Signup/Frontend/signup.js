const name=document.getElementById('name')
const sur=document.getElementById('sur')
const email=document.getElementById('email')
const password=document.getElementById('password')
const submit=document.getElementById('submit')

async function signup(e){
    try{
        e.preventDefault();
        console.log(e.email.value);

        const signupDetails = {
            name: name.value,
            lname: lname.value,
            email: email.value,
            password: password.value
        }
        console.log(signupDetails);
        const response = await axios.post("http://localhost:5500/user/signup", signupDetails);
            if(response.status === 201){
                window.location.href = "../Login/login.html"
            }else{
                throw new Error("Failed to login");
            }
    }catch(err){
        document.body.innerHTML += `<div style="color:red;">${err}</div>`;
    }
}