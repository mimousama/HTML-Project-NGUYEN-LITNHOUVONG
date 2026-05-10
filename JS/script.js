
// Add event listener to the contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }
});

// FIND YOUR PROGRAM QUIZ
const quizQuestions = [
    {
        question: "What best describes your current situation?",
        options: [
            { text: "I'm starting my IT studies from scratch.", scores: { bachelor: 3 } },
            { text: "I have a Bachelor's and love building software.", scores: { master_se: 3 } },
            { text: "I have a Bachelor's and I'm passionate about security.", scores: { master_cy: 3 } },
            { text: "I have a Master's and want to push the boundaries of research.", scores: { phd: 3 } }
        ]
    },
    {
        question: "What excites you the most in tech?",
        options: [
            { text: "Learning the fundamentals: algorithms, programming, networks.", scores: { bachelor: 2 } },
            { text: "Designing and shipping complex software products.", scores: { master_se: 2 } },
            { text: "Protecting systems and outsmarting hackers.", scores: { master_cy: 2 } },
            { text: "Exploring open questions and publishing original research.", scores: { phd: 2 } }
        ]
    },
    {
        question: "Your ideal work environment is...",
        options: [
            { text: "A hands-on classroom where I build my foundations.", scores: { bachelor: 2 } },
            { text: "An agile team shipping a product together.", scores: { master_se: 2 } },
            { text: "A security operations centre or a red team.", scores: { master_cy: 2 } },
            { text: "A research lab or a university.", scores: { phd: 2 } }
        ]
    },
    {
        question: "Your career goal is to become...",
        options: [
            { text: "An IT generalist ready for any challenge.", scores: { bachelor: 2, master_se: 1 } },
            { text: "A software architect or lead developer.", scores: { master_se: 2, bachelor: 1 } },
            { text: "A cybersecurity expert or ethical hacker.", scores: { master_cy: 2 } },
            { text: "A professor, researcher, or PhD.", scores: { phd: 2 } }
        ]
    },
    {
        question: "How do you feel about maths and theory?",
        options: [
            { text: "I prefer hands-on coding over heavy theory.", scores: { bachelor: 2, master_se: 1 } },
            { text: "I enjoy it when it serves a practical purpose.", scores: { master_se: 2, master_cy: 1 } },
            { text: "I find cryptography and formal models fascinating.", scores: { master_cy: 2, phd: 1 } },
            { text: "I live for proofs, theorems and academic papers.", scores: { phd: 2 } }
        ]
    }
];

const quizResults = {
    bachelor: {
        title: "Bachelor in computer science",
        desc: "You're ready to build strong IT foundations. This 3-year program will equip you with core skills in programming, algorithms, and networks — the perfect launchpad for your career."
    },
    master_se: {
        title: "Master in software engineering",
        desc: "You're a builder at heart. This 2-year program will sharpen your skills in software architecture, agile methods, and cloud computing to turn your ideas into robust products."
    },
    master_cy: {
        title: "Master in cybersecurity",
        desc: "You're drawn to protection and challenge. This 2-year program will make you an expert in ethical hacking, cryptography, and incident response in an ever-evolving threat landscape."
    },
    phd: {
        title: "PhD in information technology",
        desc: "You're a researcher at heart. This 3 to 5-year program will give you the tools to conduct original research, publish your findings, and contribute to the advancement of IT."
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const questionBlock = document.getElementById('quiz-question-block');
    const resultBlock   = document.getElementById('quiz-result');
    const questionEl    = document.getElementById('quiz-question');
    const optionsEl     = document.getElementById('quiz-options');
    const stepEl        = document.getElementById('quiz-step');
    const progressBar   = document.getElementById('quiz-progress-bar');
    const restartBtn    = document.getElementById('quiz-restart');

    if (!questionBlock) return; // not on programs page

    let currentQuestion = 0;
    let scores = { bachelor: 0, master_se: 0, master_cy: 0, phd: 0 };

    function showQuestion(index) {
        const q = quizQuestions[index];
        stepEl.textContent = 'Question ' + (index + 1) + ' / ' + quizQuestions.length;
        progressBar.style.width = ((index + 1) / quizQuestions.length * 100) + '%';
        questionEl.textContent = q.question;
        optionsEl.innerHTML = '';

        q.options.forEach(function (option) {
            const btn = document.createElement('button');
            btn.className = 'quiz-option-btn';
            btn.textContent = option.text;
            btn.addEventListener('click', function () {
                // Add scores
                Object.keys(option.scores).forEach(function (key) {
                    scores[key] += option.scores[key];
                });
                currentQuestion++;
                if (currentQuestion < quizQuestions.length) {
                    showQuestion(currentQuestion);
                } else {
                    showResult();
                }
            });
            optionsEl.appendChild(btn);
        });
    }

    function showResult() {
        
        const best = Object.keys(scores).reduce(function (a, b) {
            return scores[a] >= scores[b] ? a : b;
        });
        const result = quizResults[best];

        document.getElementById('quiz-result-title').textContent = result.title;
        document.getElementById('quiz-result-desc').textContent  = result.desc;

        questionBlock.hidden = true;
        resultBlock.hidden   = false;
    }

    function resetQuiz() {
        currentQuestion = 0;
        scores = { bachelor: 0, master_se: 0, master_cy: 0, phd: 0 };
        questionBlock.hidden = false;
        resultBlock.hidden   = true;
        showQuestion(0);
    }

    restartBtn.addEventListener('click', resetQuiz);
    showQuestion(0);
});

// Accordion for programs page
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const isActive = item.classList.contains('active');

            
            document.querySelectorAll('.accordion-item').forEach(function (el) {
                el.classList.remove('active');
                el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                el.querySelector('.accordion-body').classList.remove('open');
            });

            
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                body.classList.add('open');
            }
        });
    });
});

// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.fontWeight = 'bold';
        link.style.color = '#BE6E45';
    }
});