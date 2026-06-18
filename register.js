function registerUser(){


    let user = {


        firstName:
        document.getElementById("firstName").value,


        lastName:
        document.getElementById("lastName").value,


        email:
        document.getElementById("email").value,


        mobileNumber:
        document.getElementById("mobileNumber").value,


        password:
        document.getElementById("password").value


    };




    fetch("http://localhost:8080/api/register",
    {


        method:"POST",


        headers:{

            "Content-Type":"application/json"

        },


        body:JSON.stringify(user)


    })



    .then(response=>response.text())



    .then(result=>{


        document.getElementById("msg")
        .innerHTML=result;



        if(result.includes("Successfully")){


            setTimeout(()=>{


                window.location="login.html";


            },2000);


        }



    })



    .catch(error=>{


        document.getElementById("msg")
        .innerHTML="Server Error";


        console.log(error);


    });



}
