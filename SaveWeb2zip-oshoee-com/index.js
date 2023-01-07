function sendMail(){
    var params ={
            name: document.getElementById("name").value,
            
            email: document.getElementById("email").value,
            
            message: document.getElementById("message").value,
    }
}

const serviceID = 'service_263uvmi';
const tempelateID = 'template_qomr1u4';

emailjs
        .send(serviceID,tempelateID,params)
        .then(
             res =>{
        document.getElementById("name").value='';
        
        document.getElementById("email").value='';
        
        document.getElementById("message").value='';

        console.log(res);
        alert("your message sent");
    }
).catch((err)=>console.log("hello"+err));