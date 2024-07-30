function submitQuiz() {
    // Obtener respuestas del formulario
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    const q2 = document.getElementById('q2').value.trim().toLowerCase();
    const q3 = document.getElementById('q3').value.trim().toLowerCase();
    const q4 = document.getElementById('q4').value.trim().toLowerCase();
    const q5 = document.getElementById('q5').value.trim().toLowerCase();

    // Respuestas correctas 
    const correctAnswers = {
        q1: 'negro',
        q2: 'casita',
        q3: 'charlar',
        q4: 'ceviche',
        q5: 'Kingsman'
    };

    // Comprobar respuestas
    const allCorrect = (q1 === correctAnswers.q1 &&
                        q2 === correctAnswers.q2 &&
                        q3 === correctAnswers.q3 &&
                        q4 === correctAnswers.q4 &&
                        q5 === correctAnswers.q5);

    // Mensaje de resultado
    let message = `
        ¡Completaste el cuestionario amor! Veamos tus respuestas:
        <br><br>
        <strong>1. Mi color favorito:</strong> ${q1}
        <br>
        <strong>2. Mi lugar preferido para pasar el tiempo:</strong> ${q2}
        <br>
        <strong>3. Lo que más te gusta hacer juntos:</strong> ${q3}
        <br>
        <strong>4. Mi comida favorita:</strong> ${q4}
        <br>
        <strong>5. Mi película favorita:</strong> ${q5}
        <br><br>
    `;

    if (allCorrect) {
        message += `<strong>¡Todas las respuestas son correctas!</strong>`;
        document.getElementById('show-card').classList.remove('hidden');
    } else {
        message += `<strong>Algunas respuestas no son correctas. Inténtalo de nuevo e.e.</strong>`;
        document.getElementById('retry-quiz').classList.remove('hidden');
    }

    // Mostrar resultados
    document.getElementById('quiz-form').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('message').innerHTML = message;
}

function showCard() {
    // Personaliza el mensaje de la cartita aquí
    const cardMessage = `
        AMOREEEEEE,
        <br><br>
        ¡Te amo hasta el infinito!
        <br><br>
        Feliz 1 de agosto hermosota<3, dificil el cuestionario? si admito que no sabia de este día y que te estoy haciendo este regalito 3 días antes pero
        estoy seguro que la amanecida valdra la pena, es la primera vez que creo una propia web para hacerte un regalito asi que ignora
        si algunas cosas estan feitas JSAJSJAJ en fin, decirte que me encantas y eres el amor de mi vida, no se que haria sin ti y si en
        algun momento te hice sentir mal pido disculpas, no lo hice con mala intencion, soy un bebito de 20 añitos aun pwp, y bueno espero
        que le des a Wal del futuro muchos besitos ya que el yo de ahora esta muriendose, con cariño tu novio guapote<3
    `;

    // Ocultar el contenedor de resultados
    document.getElementById('result').classList.add('hidden');
    
    // Mostrar cartita
    document.getElementById('card-message').innerHTML = cardMessage;
    document.getElementById('card').classList.remove('hidden');
    document.getElementById('show-video').classList.remove('hidden'); // Mostrar botón de video
}

function hideCard() {
    document.getElementById('card').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden'); // Opcional, para volver a mostrar resultados si se cierra la cartita
}

function retryQuiz() {
    // Ocultar el resultado y mostrar el formulario nuevamente
    document.getElementById('result').classList.add('hidden');
    document.getElementById('quiz-form').classList.remove('hidden');
    document.getElementById('retry-quiz').classList.add('hidden');

    // Limpiar respuestas
    document.getElementById('quiz-form').reset();
}

function showVideo() {
    document.getElementById('video-container').classList.remove('hidden');
    document.getElementById('show-video').classList.add('hidden');
}

function hideVideo() {
    document.getElementById('video-container').classList.add('hidden');
    document.getElementById('show-video').classList.remove('hidden');
}
