// Создать игру, где пользователь должен отгадать число в диапазоне от 1-100. Программа сама рандомно будет выбирать это число. У нашего пользователя будет 3 попытки, чтобы отгадать.

// Генерируем случайное число от 1 до 100



let attempts = 3;

// Функция для начала новой игры
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
    attempts = 3; // Начальное количество попыток
    document.getElementById("message").textContent = ""; // Очистка сообщений
    document.getElementById("user-input").value = ""; // Очистка поля ввода
}

// Функция для проверки догадки пользователя
function guessNumber() {
    const userGuess = parseInt(document.getElementById("user-input").value);
    
    // Проверка на корректность ввода
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = "Пожалуйста, введите число от 1 до 100.";
        return;
    }
    
    // Проверка догадки
    if (userGuess === randomNumber) {
        document.getElementById("message").textContent = "Поздравляем! Вы угадали число!";
    } else {
        attempts--; // Уменьшаем количество попыток
        if (attempts > 0) {
            const hint = userGuess < randomNumber ? "больше" : "меньше";
            document.getElementById("message").textContent = `Неправильно! Мое число ${hint}. У вас осталось ${attempts} попыток.`;
        } else {
            document.getElementById("message").textContent = `Вы проиграли! Загаданное число было ${randomNumber}.`;
        }
    }
}

// Инициализация игры при загрузке страницы
startGame();