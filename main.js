let upload = document.getElementById('upload');
upload.addEventListener('change',() => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function (){
        let Arr =fr.result.split(/\r?\n|\n/).map(e => {
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo =0;
        Window.valMail = [];

        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e => {
                return `<td>${e}</td>`;
            })
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;

            if(em != ""){
                if(em.charAt(em.length - 4) == '.'){
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                else if(em.charAt(em.length - 3) == '.'){
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                else{
                    document.querySelector("table#inval").appendChild(creEle);
                    invalNo = invalNo + 1;
                    return false;
                }
            }
        });
        document.querySelector('#valCount').innerHTML = Window.valNo;
        document.querySelector('#invalCount').innerHTML = invalNo;
    };
});

// writing function for sending emails

function sendEmail(){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sahanigautam0446162@gmail.com",
        Password : "A3F40ADE613A9FE489BC0E96477B28014717",
        To: "sahanigautam0446162@gmail.com",
        From: "sahanigautam0446162@gmail.com",
        Subject: document.querySelector('#subject').value,
        Body: document.getElementById('msg').value
    }).then(
        message => alert(Window.valNo + " has been successfully sent")
    );
    console.log(document.getElementById('msg').value);
    console.log(document.getElementById('msg').innerHTML);
    console.log(document.getElementById('msg').innerText);
}