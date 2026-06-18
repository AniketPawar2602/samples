// Get logged-in user details from localStorage

let email = localStorage.getItem("email");

let firstName = localStorage.getItem("firstName");

let lastName = localStorage.getItem("lastName");

let userType = localStorage.getItem("userType");



// Display welcome message

document.getElementById("welcomeMessage").innerHTML =
"Welcome, " + firstName + " " + lastName;




// Display role

if(userType === "A") {


    document.getElementById("roleMessage").innerHTML =
    "Logged in as : ADMIN";


}
else {


    document.getElementById("roleMessage").innerHTML =
    "Logged in as : USER";


    // Hide download button for normal user

    document.getElementById("downloadBtn")
    .style.display = "none";


}




// Show Existing User Button Function

function showExistingUsers(){


    let url;


    // Admin case

    if(userType === "A"){


        url =
        "http://localhost:8080/api/users";


    }


    // Normal User case

    else{


        url =
        "http://localhost:8080/api/users/" + email;


    }





    fetch(url)



    .then(response => response.json())



    .then(data => {



        let table =
        document.getElementById("userTable");


        table.innerHTML = "";




        // Admin receives list of users

        if(Array.isArray(data)){



            data.forEach(user => {



                table.innerHTML += `

                <tr>

                    <td>${user.firstName}</td>

                    <td>${user.lastName}</td>

                    <td>${user.email}</td>

                    <td>${user.mobileNumber}</td>

                </tr>

                `;


            });



        }



        // Normal user receives single user object

        else {



            table.innerHTML = `

            <tr>

                <td>${data.firstName}</td>

                <td>${data.lastName}</td>

                <td>${data.email}</td>

                <td>${data.mobileNumber}</td>

            </tr>

            `;


        }



    })



    .catch(error => {


        console.log(error);


        alert("Unable to fetch user data");


    });



}






// Admin CSV Download

function downloadCSV(){


    window.location.href =

    "http://localhost:8080/api/download";


}






// Logout

function logout(){


    localStorage.clear();


    window.location.href = "login.html";


}
