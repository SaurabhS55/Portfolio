const ham = document.querySelector(".hamburger");
const nav = document.querySelector("#nav");
ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
})
nav.addEventListener('click',()=>{
    ham.classList.remove('active');
    nav.classList.remove('active');
})
function sendMail(){
    const service="service_2musf6d"
    const template="template_37ccgl6"
    const response={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('msg').value
    }
    console.log(response);
    emailjs
        .send(service,template,response)
        .then((res)=>{
            console.log(res);
            document.getElementById('success').style.display="block";
            setTimeout(() => {
                document.getElementById('success').style.display="none";
            }, 1000);
        })
}
// document.addEventListener('load',()=>{
//     document.getElementById("loader").style.display="none";
// })


