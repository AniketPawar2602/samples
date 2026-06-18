function login() {


    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;



    if(email === "" || password === "") {

        document.getElementById("msg").innerHTML =
        "Please enter email and password";

        return;

    }



    let loginData = {


        email: email,

        password: password


    };




    fetch("http://localhost:8080/api/login",
    {

        method: "POST",


        headers: {

            "Content-Type": "application/json"

        },


        body: JSON.stringify(loginData)


    })



    .then(response => response.json())



    .then(result => {



        if(result.status === "SUCCESS") {



            /*
              Store user details
              for dashboard usage
            */


            localStorage.setItem(
                "email",
                email
            );


            localStorage.setItem(
                "firstName",
                result.firstName
            );


            localStorage.setItem(
                "lastName",
                result.lastName
            );


            localStorage.setItem(
                "userType",
                result.userType
            );



            localStorage.setItem(
                "message",
                result.message
            );




            // Redirect to dashboard

            window.location.href =
            "dashboard.html";



        }

        else {



            document.getElementById("msg")
            .innerHTML =
            result.message;



        }



    })



    .catch(error => {



        console.log(error);


        document.getElementById("msg")
        .innerHTML =
        "Unable to connect with server";


    });



}
