/// links location and information of homework works to be displayed 
const worksInfo = {
    urlLink: ["https://text-editor-mm-19.herokuapp.com/",
            "https://watch.screencastify.com/v/2tSgSURA3KFGoKEbN40Z",
            "https://watch.screencastify.com/v/i2O4Ze16iGPK6uptGC20",
            "https://watch.screencastify.com/v/Dgc6bgockCvGAMeZXhBy",
            "https://shrouded-eyrie-81862.herokuapp.com/",
"https://drive.google.com/file/d/1NmFVXjeOv9QQfiM3FMvG5-2YYfw6Z7PU/view",
        // "https://drive.google.com/file/d/1LlUAUnrNxKqgGgh-7QmrCBzpQ2JznV-U/view",
        //     "https://marymd98.github.io/Unit6-Homework/",
        //     "https://marymd98.github.io/Unit5-Homework/",
        //     "https://marymd98.github.io/Unit4-Homework/",
        //     "https://marymd98.github.io/Unit3-Homework/",
        //     "https://marymd98.github.io/Unit2-Homework/",
        //     "https://marymd98.github.io/Unit1-Homework/"
        ],
    repoLink:["https://github.com/MaryMD98/Text-editor.git",
            "https://github.com/MaryMD98/Tech-Blog.git",
            "https://github.com/MaryMD98/E-Commerce-ORM.git",
            "https://github.com/MaryMD98/EmployeeTraker.git",
            "https://github.com/MaryMD98/NoteTaker.git",
            "https://github.com/MaryMD98/TeamProfile-generator.git",
        //     "https://github.com/MaryMD98/ReadMe-generator.git",
        //     "https://github.com/MaryMD98/Unit6-Homework.git",
        //     "https://github.com/MaryMD98/Unit5-Homework.git",
        //     "https://github.com/MaryMD98/Unit4-Homework.git",
        //     "https://github.com/MaryMD98/Unit3-Homework.git",
        //     "https://github.com/MaryMD98/Unit2-Homework.git",
        //     "https://github.com/MaryMD98/Unit1-Homework.git"
        ],
    imgSRC: ["./Assets/pictures/hw-projects/hw19.png",
            "./Assets/pictures/hw-projects/hw14.png",
            "./Assets/pictures/hw-projects/hw13.png",
            "./Assets/pictures/hw-projects/hw12.png",
            "./Assets/pictures/hw-projects/hw11-NoteTaker.png",
            "./Assets/pictures/hw-projects/hw10-TeamGenerator.png",
        //     "./Assets/pictures/hw-projects/hw9-ReadME generator.png",
        //     "./Assets/pictures/hw-projects/hw6-Screenshot.png",
        //     "./Assets/pictures/hw-projects/hw5-Screenshot.png",
        //     "./Assets/pictures/hw-projects/hw4-Screenshot.png",
        //     "./Assets/pictures/hw-projects/hw3-Screenshot.png",
        //     "./Assets/pictures/hw-projects/hw2-Screenshot.png",
        //     "./Assets/pictures/hw-projects/hw1-Screenshot.png"
        ],
    title: ["Text Editor PWA",
            "Tech Blog","E-Commerce ORM", "Employee Tracker",
            "Note Taker","Team Profile Generator",
        //     "ReadME Generator",
        //     "Weather Dashboard","Work Day Scheduler","Coding Quiz Challenge",
        //     "Password Generator","Portafolio","Code Refactor"
        ],
    cardTXT:["Homework 19 Repo",
            "Homework 14 Repo","Homework 13 Repo","Homework 12 Repo",
            "Homework 11 Repo","Homework 10 Repo",
        //     "Homework 9 Repo",
        //     "Homework Six Repo","Homework Five Repo","Homework Four Repo",
        //     "Homework Three Repo","Homework Two Repo","Homework One Repo"
        ],
};

/// links location and information of projects to be displayed
const ProjectsInfo = {
    urlLink: ["https://sygmo.github.io/stellar-sights/",
            "https://nameless-shelf-34042.herokuapp.com/",
            "#"],
    repoLink:["https://github.com/sygmo/stellar-sights.git",
            "https://github.com/clabel95/Project-2.git",
            "#"],
    imgSRC: ["./Assets/pictures/hw-projects/project1-screenshot.png",
            "./Assets/pictures/hw-projects/project2.png",
            "./Assets/pictures/image-2.png"],
    title: ["Stellar Sights","Anyone Can Cook!","Project Three"],
    cardTXT:["Project One Repo","Project Two Repo","Project Three Repo"],
};

// initialize the display of works and projects to display on coresponding area
function initDisplay(){
    /// this send the info about projects to the function display
    var index = 3;
    const ProjectsEI = document.querySelector(".projects");
    Display (ProjectsEI, index, ProjectsInfo);

    /// this send the info about works to the function display
    index = 6;
    const worksEI = document.querySelector(".works");
    Display (worksEI, index, worksInfo);
}

/// create the elements to the cards to be dsplayed
// use the info from works and projects to display
function Display (parentEl, indexDIS, info ) {
    
    for(var i=0; i<indexDIS; i++){
        const colEI = document.createElement("div");
        colEI.setAttribute("class","col-sm-4");
        const cardEI = document.createElement("div");
        cardEI.setAttribute("class","card");
        const cardBodyEl = document.createElement("div");
        cardBodyEl.setAttribute("class","card-body");

        const h4El = document.createElement("h4");
        h4El.setAttribute("class","card-title");
        h4El.textContent = info.title[i];

        const aE2l = document.createElement("a");
        aE2l.setAttribute("href",info.repoLink[i]);

        const pEl = document.createElement("p");
        pEl.setAttribute("class","card-text");
        pEl.setAttribute("style","font-size: 14px");
        pEl.textContent = info.cardTXT[i];

        const aEl = document.createElement("a");
        aEl.setAttribute("href",info.urlLink[i]);

        const imgEl = document.createElement("img");
        imgEl.setAttribute("src",info.imgSRC[i]);

        aE2l.appendChild(pEl);
        aEl.appendChild(imgEl);

        cardBodyEl.append(h4El,aE2l,aEl);
        cardEI.append(cardBodyEl);
        colEI.append(cardEI);

        parentEl.append(colEI);
    }
}

initDisplay();

// <!-- card one of the projects -->
// <div class="col-sm-4">
//     <div class="card">
//         <div class="card-body">
//             <h4 class="card-title">Stellar Sights</h4>
//             <a href = "https://sygmo.github.io/stellar-sights/">
//                 <p class="card-text">Project One</p>
//             </a>
//             <a href = "https://sygmo.github.io/stellar-sights/">
//                 <img src="./Assets/pictures/hw-projects/project1-screenshot.png" alt="screenshot of project one stellar sights">
//             </a> 
//          </div>
//     </div>
// </div>