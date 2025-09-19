const artworks = {
    1: {
        title: "Destruição de Máquinas pelos Luditas",
        image: "fotos/1.png",
        description: "Gravura que retrata trabalhadores luditas destruindo máquinas têxteis com marretas durante a Revolução Industrial.",
        importance: "O movimento ludita surgiu como uma resposta desesperada dos artesãos e operários que viam as máquinas como inimigas, pois estavam sendo substituídos por elas. Os luditas acreditavam que o avanço tecnológico estava causando desemprego e piorando suas condições de vida. Essa destruição de máquinas foi uma das primeiras formas organizadas de resistência dos trabalhadores contra a exploração e as mudanças provocadas pela industrialização."
    },
    2: {
        title: "Protesto de Trabalhadores Sindicalizados",
        image: "fotos/2.png",
        description: "Fotografia histórica de uma passeata de trabalhadores sindicalizados segurando cartazes de protesto contra demissões e cortes salariais.",
        importance: "As manifestações como essa foram essenciais para consolidar os sindicatos como instrumentos legítimos de defesa dos direitos dos trabalhadores. Elas marcaram a luta por melhores salários, condições dignas de trabalho e segurança no emprego. A organização dos trabalhadores em sindicatos e greves foi um dos principais avanços sociais surgidos a partir da Revolução Industrial e contribuiu para a criação de legislações trabalhistas mais justas."
    },
    3: {
        title: "Primeira Reunião da Associação Internacional dos Trabalhadores (AIT)",
        image: "fotos/3.png",
        description: "Ilustração retratando uma das primeiras reuniões da Associação Internacional dos Trabalhadores, também conhecida como Primeira Internacional.",
        importance: "A fundação da AIT, em 1864, foi um passo fundamental na organização internacional da classe trabalhadora. Este movimento buscava unir trabalhadores de diferentes países na luta por melhores condições de trabalho e justiça social. A AIT foi um marco na história dos sindicatos e na formação de movimentos trabalhistas que ultrapassavam fronteiras, fortalecendo as reivindicações dos operários em todo o mundo."
    },
    4: {
        title: "Cartaz da Jornada de 8 Horas – 1º de Maio de 1919",
        image: "fotos/4.png",
        description: "Cartaz histórico da Confederação Geral do Trabalho (França), divulgado no 1º de Maio de 1919, exigindo a jornada de trabalho de 8 horas diárias.",
        importance: "A luta pela jornada de 8 horas foi uma das principais bandeiras do movimento operário. Antes disso, era comum que trabalhadores enfrentassem jornadas de até 16 horas por dia. O cartaz simboliza a conquista de um direito fundamental: '8 horas de trabalho, 8 horas de lazer e 8 horas de descanso'. Essa conquista melhorou significativamente a qualidade de vida dos trabalhadores e é celebrada até hoje no Dia Internacional do Trabalho."
    },
    5: {
        title: "Charge sobre o Trabalho Alienado",
        image: "fotos/5.png",
        description: "Charge humorística mostrando um trabalhador que, prestes a se aposentar, revela que vai andar até o fim da linha de montagem para finalmente descobrir o que estava produzindo há 30 anos.",
        importance: "A charge faz uma crítica ao trabalho alienado, muito comum durante e após a Revolução Industrial. No modelo industrial, os operários muitas vezes executavam tarefas repetitivas sem compreender o produto final de seu trabalho, o que gerava uma sensação de distanciamento e desvalorização. Essa crítica reforça a importância da valorização do trabalhador, do conhecimento sobre o processo produtivo e da luta sindical por condições de trabalho mais humanas e conscientes."
    }
};


function goToGallery() {
    window.location.href = 'galeria.html';
}

function goToHome() {
    window.location.href = 'index.html';
}

function openModal(artworkId) {
    const artwork = artworks[artworkId];
    if (!artwork) return;
    
    document.getElementById('modal-title').textContent = artwork.title;
    document.getElementById('modal-image').src = artwork.image;
    document.getElementById('modal-image').alt = artwork.title;
    document.getElementById('modal-description').textContent = artwork.description;
    document.getElementById('modal-importance').textContent = artwork.importance;
    
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 250); 
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Animar elementos da página inicial
    if (document.querySelector('.hero-content')) {
        const heroContent = document.querySelector('.hero-content');
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1.5s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    

    if (document.querySelectorAll('.artwork-card')) {
        const cards = document.querySelectorAll('.artwork-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.9s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        });
    }
});


const quizData = [
    {
        question: "Quem foram os Luditas?",
        options: [
            "Trabalhadores que destruíam máquinas",
            "Primeiros sindicalistas do Brasil",
            "Nobres que apoiavam operários"
        ],
        answer: 0
    },
    {
        question: "O que representou a fundação da AIT em 1864?",
        options: [
            "O início da Revolução Industrial",
            "A união internacional da classe trabalhadora",
            "A invenção da máquina a vapor"
        ],
        answer: 1
    },
    {
        question: "Qual conquista ficou conhecida como '8-8-8'?",
        options: [
            "8 horas de lazer, 8 horas de sono e 8 horas de estudo",
            "8 horas de trabalho, 8 horas de lazer e 8 horas de descanso",
            "8 horas de protesto, 8 horas de greve e 8 horas de negociação"
        ],
        answer: 1
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    quizData.forEach((q, i) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("quiz-question");
        questionDiv.innerHTML = `<h3>${i+1}. ${q.question}</h3>`;
        q.options.forEach((opt, idx) => {
            const label = document.createElement("label");
            label.classList.add("quiz-option");
            label.innerHTML = `
                <input type="radio" name="q${i}" value="${idx}"> ${opt}
            `;
            questionDiv.appendChild(label);
        });
        quizContainer.appendChild(questionDiv);
    });
}

document.getElementById("submit-quiz").addEventListener("click", () => {
    let score = 0;
    quizData.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });
    document.getElementById("quiz-result").textContent =
        `Você acertou ${score} de ${quizData.length} questões!`;
});

loadQuiz();

document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
