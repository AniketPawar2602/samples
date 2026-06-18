let email =
sessionStorage.getItem("email");


let firstName =
sessionStorage.getItem("firstName");


let lastName =
sessionStorage.getItem("lastName");


let userType =
sessionStorage.getItem("userType");




// Display user information

document.getElementById("welcomeMessage")
.innerHTML =
"Welcome, " + firstName + " " + lastName;



if(userType === "A"){


    document.getElementById("roleMessage")
    .innerHTML =
    "Logged in as : ADMIN";


}

else{


    document.getElementById("roleMessage")
    .innerHTML =
    "Logged in as : USER";


    // Hide download button for normal user

    document.getElementById("downloadBtn")
    .style.display="none";


}





function showExistingUsers(){



    let url;



    // Admin

    if(userType === "A"){


        url =
        "http://localhost:8080/api/users";


    }


    // Normal User

    else{


        url =
        "http://localhost:8080/api/users/"
        +
        email;


    }






    fetch(url)



    .then(response=>response.json())



    .then(data=>{



        let table =
        document.getElementById("userTable");



        table.innerHTML="";



        // Admin returns Array

        if(Array.isArray(data)){



            data.forEach(user=>{


                table.innerHTML +=

                `
                <tr>

                <td>
                ${user.firstName}
                </td>


                <td>
                ${user.lastName}
                </td>


                <td>
                ${user.email}
                </td>


                <td>
                ${user.mobileNumber}
                </td>


                </tr>
                `;


            });



        }


        // User returns single object

        else{



            table.innerHTML =

            `
            <tr>

            <td>
            ${data.firstName}
            </td>


            <td>
            ${data.lastName}
            </td>


            <td>
            ${data.email}
            </td>


            <td>
            ${data.mobileNumber}
            </td>


            </tr>
            `;


        }



    })



    .catch(error=>{


        console.log(error);


    });



}







function downloadCSV(){


    window.location.href =

    "http://localhost:8080/api/download";


}







function logout(){


    sessionStorage.clear();


    window.location.href =
    "login.html";


}
