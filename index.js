//

// This part is not working properly!!!!!!

//

// function Generate(){
//     alert(`The Certificates Have Been Generated`);

//     printCert(0);
//     printCert(1);
//     printCert(2);
    
// }

// function printCert(I){

//     let day = new Date().toLocaleDateString().replaceAll("-", "/").slice(0, 10);


//     // printCert(today, 3);
//     // const mJSON = '{"name": "Abdullah","grade": "99%","course": "JS"}'

//     // const A1 = JSON.parse(mJSON);

//     const excelContent = [
//         {
//             name: "Jack Doe",
//             grade: "90%",
//             email: "AB.test.task@gmail.com",
//             course: "HTML"
//         },
//         {
//             name: "Jane Doe",
//             grade: "76%",
//             email: "AB.test.task@gmail.com",
//             course: "CSS"
//         },
//         {
//             name: "Abdullah Al-Sharqawi",
//             grade: "100%",
//             email: "aasharq99@gmail.com",
//             course: "JS"
//         }
//     ];


//     if(I === 0){
//         emailContent = {
//             to_name: excelContent[0].name,
//             message: "http://127.0.0.1:5500/Certificate.html",
//             to_email: excelContent[0].email
//         }  

//         document.getElementById("NME").innerHTML = excelContent[0].name;
//         document.getElementById("CS").innerHTML = "For Compleating the "+excelContent[0].course+" Course";
//         document.getElementById("GD").innerHTML = "With A Grade of "+excelContent[0].grade;
//         document.getElementById("DT").innerHTML = day;

//         sendEmail(emailContent);
//     }

//     else if(I === 1){
//         emailContent = {
//             to_name: excelContent[1].name,
//             message: "http://127.0.0.1:5500/Certificate.html",
//             to_email: excelContent[1].email
//         }  

//         document.getElementById("NME").innerHTML = excelContent[1].name;
//         document.getElementById("CS").innerHTML = "For Compleating the "+excelContent[1].course+" Course";
//         document.getElementById("GD").innerHTML = "With A Grade of "+excelContent[1].grade;
//         document.getElementById("DT").innerHTML = day;

//         sendEmail(emailContent);
//     }

//     else if(I === 2){
//         emailContent = {
//             to_name: excelContent[2].name,
//             message: "http://127.0.0.1:5500/Certificate.html",
//             to_email: excelContent[2].email
//         }  

//         document.getElementById("NME").innerHTML = excelContent[2].name;
//         document.getElementById("CS").innerHTML = "For Compleating the "+excelContent[2].course+" Course";
//         document.getElementById("GD").innerHTML = "With A Grade of "+excelContent[2].grade;
//         document.getElementById("DT").innerHTML = day;

//         sendEmail(emailContent);
//     }
// }


// function sendEmail(email){
//     emailjs.init("0CGPMjHzm16JAhRPl");

//     emailjs.send("AB-Serv-12", "CG1", email);
// }


//

// Prt 2 is working ==> i tried to create a way to send an email for each element in the array but i could not find a way to share an element between two html pages

//

function Generate(){
    alert(`The Certificates Have Been Generated`);

    const excelContent = [
        {
            name: "John Doe",
            grade: "90%",
            email: "AB.test.task@gmail.com",
            course: "HTML"
        },
        {
            name: "Jane Doe",
            grade: "76%",
            email: "AB.test.task@gmail.com",
            course: "CSS"
        },
        {
            name: "Abdullah Al-Sharqawi",
            grade: "100%",
            email: "aasharq99@gmail.com",
            course: "JS"
        }
    ];

    emailContent = {
        to_name: excelContent[2].name,
        message: "http://127.0.0.1:5500/Certificate.html",
        to_email: excelContent[2].email
    }  


    emailjs.init("0CGPMjHzm16JAhRPl");

    emailjs.send("AB-Serv-12", "CG1", emailContent);
}

printCert(2);

function printCert(I){

    let day = new Date().toLocaleDateString().replaceAll("-", "/").slice(0, 10);


    // printCert(today, 3);
    // const mJSON = '{"name": "Abdullah","grade": "99%","course": "JS"}'

    // const A1 = JSON.parse(mJSON);

    const excelContent = [
        {
            name: "John Doe",
            grade: "90%",
            email: "AB.test.task@gmail.com",
            course: "HTML"
        },
        {
            name: "Jane Doe",
            grade: "76%",
            email: "AB.test.task@gmail.com",
            course: "CSS"
        },
        {
            name: "Abdullah Al-Sharqawi",
            grade: "100%",
            email: "aasharq99@gmail.com",
            course: "JS"
        }
    ];


    if(I === 0){
        document.getElementById("NME").innerHTML = excelContent[0].name;
        document.getElementById("CS").innerHTML = "For Compleating the "+excelContent[0].course+" Course";
        document.getElementById("GD").innerHTML = "With A Grade of "+excelContent[0].grade;
        document.getElementById("DT").innerHTML = day;
    }

    else if(I === 1){
        document.getElementById("NME").innerHTML = excelContent[1].name;
        document.getElementById("CS").innerHTML = "For Compleating the "+excelContent[1].course+" Course";
        document.getElementById("GD").innerHTML = "With A Grade of "+excelContent[1].grade;
        document.getElementById("DT").innerHTML = day;
    }

    else if(I === 2){
        document.getElementById("NME").innerHTML = excelContent[2].name;
        document.getElementById("CS").innerHTML = "For Compleating the "+excelContent[2].course+" Course";
        document.getElementById("GD").innerHTML = "With A Grade of "+excelContent[2].grade;
        document.getElementById("DT").innerHTML = day;
    }
}

