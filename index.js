/*function _sendMail(){
    Email.send({
        Host : "smtp.google.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}*/
function _sendMail(){
    Email.send({
        SecureToken : "a2c8451d-4453-47f5-8fde-0eb743942650",
        To : "mjmorales.mcv+myWeb@gmail.com",
        From : "mjmorales.mcv@gmail.com",
        Subject : "Nuevo Usuario!",
        Body : "Hola! Soy" + escape(document.getElementById("fnombre")) + " Y te escribo desde " + escape(document.getElementById("fmail")) + " y te dedico estas palabras: " + escape(document.getElementById("msg")),
        }).then(
            message => alert("YA ESTAMOS EN CONTACTO!")
        );
}