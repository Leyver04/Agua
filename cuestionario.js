const questions = [
    { 
      question: "¿Cuál es una consecuencia directa del desperdicio de agua en las comunidades?", 
      options: ["Incremento de la biodiversidad", "Aumento de la presión hídrica", "Reducción de las reservas de agua dulce", "Mejora en la distribución del agua"], 
      correct: 2 
    },
    { 
      question: "¿Qué problema causa el vertido de aguas residuales sin tratar?", 
      options: ["Incremento del pH del agua", "Aumento de oxígeno disuelto", "Proliferación de algas tóxicas", "Mejora de la calidad del agua"], 
      correct: 2 
    },
    { 
      question: "¿Cuál es el principal motor del ciclo del agua?", 
      options: ["El viento", "La gravedad", "La energía solar", "La rotación terrestre"], 
      correct: 2 
    },
    { 
      question: "¿Qué medida comunitaria puede reducir el desperdicio de agua?", 
      options: ["Fomentar el uso de piscinas privadas", "Promover la instalación de sistemas de captación de agua pluvial", "Incrementar el precio del agua", "Eliminar las campañas de concientización"], 
      correct: 1 
    },
    { 
      question: "¿Cuál de estos contaminantes es más difícil de eliminar del agua?", 
      options: ["Arena", "Residuos plásticos", "Aceites y grasas", "Metales pesados"], 
      correct: 3 
    },
    { 
      question: "¿Cómo afecta el desperdicio de agua a la agricultura?", 
      options: ["Aumenta la fertilidad del suelo", "Reduce la disponibilidad de agua para el riego", "Disminuye la erosión del suelo", "Mejora la productividad"], 
      correct: 1 
    },
    { 
      question: "¿Qué sucede cuando el vapor de agua se enfría en la atmósfera?", 
      options: ["Se evapora", "Se infiltra", "Se condensa", "Se precipita"], 
      correct: 2 
    },
    { 
      question: "¿Cómo afecta la contaminación del agua a la salud humana?", 
      options: ["Fortalece el sistema inmunológico", "Reduce el riesgo de infecciones", "Puede causar enfermedades gastrointestinales", "Aumenta la disponibilidad de agua potable"], 
      correct: 2
    },
    { 
      question: "¿Cuál de los siguientes fenómenos provoca el movimiento del agua desde los océanos hacia la atmósfera?", 
      options: ["Escorrentía", "Evaporación", "Condensación", "Infiltración"], 
      correct: 1
    },
    { 
      question: "¿Cuál es un efecto indirecto del desperdicio de agua en las zonas urbanas?", 
      options: ["Incremento en la calidad del agua", "Aumento en los costos del servicio de agua", "Mejora en el acceso al agua potable", "Reducción de la contaminación"], 
      correct: 1
    },
    { 
      question: "¿Qué parte del ciclo del agua contribuye directamente a la formación de aguas subterráneas?", 
      options: ["Condensación", "Precipitación", "Infiltración", "Escorrentía"], 
      correct: 2
    },
    { 
      question: "¿Qué práctica ayuda a reducir el desperdicio de agua en el hogar?", 
      options: ["Regar las plantas al mediodía", "Utilizar lavadoras con carga completa", "Lavar el auto con manguera", "Dejar la llave abierta al lavar los platos"], 
      correct: 1
    },
    { 
      question: "¿Cuál de las siguientes actividades tiene mayor impacto en la contaminación del agua?", 
      options: ["Utilizar productos de limpieza ecológicos", "Desechar residuos industriales sin tratamiento previo", "Regar plantas con agua de lluvia", "Consumir agua embotellada"], 
      correct: 1
    },
    { 
        question: "¿Qué proceso del ciclo del agua implica el paso del agua de estado líquido a gaseoso?", 
        options: ["Condensación", "Infiltración", "Evaporación", "Precipitación"], 
        correct: 2 
      },
      { 
        question: "¿Cuál es una consecuencia ambiental directa de la contaminación del agua?", 
        options: ["Aumento en la población de peces", "Mejora en la calidad del aire", "Disminución de la biodiversidad acuática", "Incremento en la producción agrícola"], 
        correct: 2 
      }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let username = "";
    
    // Elementos DOM
    const nameInputContainer = document.getElementById("name-input-container");
    const usernameInput = document.getElementById("username");
    const startButton = document.getElementById("start-button");
    
    const questionContainer = document.getElementById("question-container");
    const nextButton = document.getElementById("next-button");
    const resultsContainer = document.getElementById("results");
    const scoreText = document.getElementById("score");
    const restartButton = document.getElementById("restart-button");
    
    // Evento para comenzar el cuestionario
    startButton.addEventListener("click", () => {
      username = usernameInput.value.trim();
    
      if (username === "") {
        alert("Por favor ingresa tu nombre.");
        return;
      }
    
      nameInputContainer.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      nextButton.classList.remove("hidden");
    
      // Animación para mostrar preguntas
      questionContainer.style.opacity = "1";
    
      loadQuestion();
    });
    
    // Función para cargar una pregunta
    function loadQuestion() {
      const questionData = questions[currentQuestionIndex];
    
      // Insertar pregunta y opciones en el contenedor con estilos avanzados
      questionContainer.innerHTML = `
        <div class="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg animate-fade-in">
          <h2 class="text-lg md:text-xl font-bold mb-6 text-center text-blue-400">${questionData.question}</h2>
          <div class="space-y-4">
            ${questionData.options
              .map(
                (option, index) => `
                <label class="block p-3 md:p-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300 transform border border-blue-400 text-white font-medium">
                  <input type="radio" name="answer" value="${index}" class="mr-2 accent-cyan-500">${option}
                </label>
              `
              )
              .join("")}
          </div>
        </div>
      `;
    }
    
    // Función para mostrar los resultados
    function showResults() {
      questionContainer.classList.add("hidden");
      resultsContainer.classList.remove("hidden");
    
      scoreText.innerHTML = `
        <span class="text-blue-400 font-bold">${username}</span>, tus resultados fueron 
        <span class="text-green-400 font-bold">${score}/${questions.length}</span>.
      `;
    }
    
    // Evento para avanzar a la siguiente pregunta
    nextButton.addEventListener("click", () => {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
    
      if (!selectedOption) return alert("Por favor selecciona una opción.");
    
      if (parseInt(selectedOption.value) === questions[currentQuestionIndex].correct) {
        score++;
      }
    
      currentQuestionIndex++;
    
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        nextButton.classList.add("hidden");
        showResults();
      }
    });
    
    // Evento para reiniciar el cuestionario
    restartButton.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
    
      resultsContainer.classList.add("hidden");
    
      nameInputContainer.classList.remove("hidden");
    });