// create a dummy data representing the questions, options and answers
// create the html syntax to display the data
// select the data view
// map through the data to display each on the webpage
// add an event listener to each data option, so that user can select an option
// display the selected option
// display the correct answer
// display if selection is correct or wrong
// sum up the total after the entire selection

let quizData = [
    {
        question: 'What is the name of the protocol that allows computers to communicate over the internet?',
        options: ["FTP", "HTTP", "TCP/IP", "SMTP"],
        answer: "TCP/IP",
    },

    {
        question: 'What is the term for a software program that runs on a web server and responds to requests from web browsers?',
        options: ["Web service", "Web application", "Web script", "Web page"],
        answer: "Web application",
    },

    {
        question: 'What is the name of the unit of measurement for digital information that consists of eight bits?',
        options: ["Byte", "Bit", "Nibble", "Pixel"],
        answer: "Byte",
    },

    {
        question: 'What is the popular version control used by developers?',
        options: ["VS Code", "Git", "Github", "Tailwind"],
        answer: "Git",
    },

    {
        question: 'What is the name of the first electronic computer, which was developed in 1946 by John Mauchly and J. Presper Eckert?',
        options: ["Z3", "UNIVAC", "EDVAC", "ENIAC"],
        answer: "ENIAC",
    },
]

let dataView = document.querySelector(".data-view")

function quizApp() {
    let corrects = 50;
    let wrong = 0;
    let result = 0;

    let quizArray = quizData.map((quiz, index) => {
        return `<div class="row my-3 py-2 justify-content-between">
                    
                    <div class="left col-6 shadow">
                        <div class="d-flex">
                            <p class="col-1">${index + 1}</p>
                            <p class="question" style="font-size: 20px;">${quiz.question}</p>
                        </div>
                        <select name="" id="select-item" class="box">
                            <option value="" select-disabled>Select an answer</option>
                            ${quiz.options.map((option) => {
                                return `<option value=${option}>${option}</option>`;
                            })}
                        </select>
                    </div>

                    <div class="right col-5 shadow">
                        <p class="selected blue">Selected answer:</p>
                        <p class="correct green">Correct answer:</p>
                        <p class="status yellow">Status:</p>
                    </div>
                </div>`;
    });

    dataView.innerHTML = quizArray.join('');  

    let selectElement = document.querySelectorAll("select"); 

    selectElement.forEach((select, index) => {
        select.addEventListener("change", (event) => {
            let selectValue = event.target.value;
            let picked = document.querySelectorAll(".selected")[index];
            picked.innerHTML = `Selected answer: ${selectValue}`;
            let correct = document.querySelectorAll('.correct')[index];
            correct.innerHTML = `Correct answer: ${quizData[index].answer}`;

            if(quizData[index].answer === selectValue) {
                document.querySelectorAll('.status')[index].innerHTML = `Status: Correct`;
                result += corrects;
                document.querySelector('.result').innerHTML = `${result}/250`;
            } else {
                document.querySelectorAll('.status')[index].innerHTML = `Status: Wrong`
                result += wrong;
                document.querySelector('.result').innerHTML = `${result}/250`;
            }

        });
    });
}

quizApp ();

let input = document.getElementById(".input");