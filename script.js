

// Знаходимо елементи сторінки
const addPetButton = document.getElementById("addPetButton");
const petModal = document.getElementById("petModal");
const closeModal = document.getElementById("closeModal");
const petForm = document.getElementById("petForm");
const animalsList = document.querySelector(".animals-list");
const formError = document.getElementById("formError");

// Відкриття модального вікна
addPetButton.addEventListener("click", function(event) {
    event.preventDefault();
    petModal.classList.add("active");
});

// Закриття вікна кнопкою X
closeModal.addEventListener("click", function() {
    petModal.classList.remove("active");
});

// Закриття при натисканні поза вікном
petModal.addEventListener("click", function(event) {
    if (event.target === petModal) {
        petModal.classList.remove("active");
    }
});

// Перевірка форми та додавання нового улюбленця
petForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("petName").value.trim();
    const type = document.getElementById("petType").value;
    const age = document.getElementById("petAge").value;

    // Перевірка введених даних
    if (name === "" || type === "" || age === "") {
        formError.textContent = "Будь ласка, заповніть усі поля!";
        return;
    }

    if (Number(age) < 0 || Number(age) > 50) {
        formError.textContent = "Введіть коректний вік від 0 до 50 років.";
        return;
    }

    // Створення нової картки
    const newPet = document.createElement("div");
    newPet.classList.add("animal");

    const petName = document.createElement("h3");
    petName.textContent = name;

    const petInfo = document.createElement("p");
    petInfo.textContent = "Вид: " + type + " | Вік: " + age + " років";

    const petMessage = document.createElement("p");
    petMessage.textContent = "Улюбленець доданий до вашого профілю.";

    newPet.appendChild(petName);
    newPet.appendChild(petInfo);
    newPet.appendChild(petMessage);

    animalsList.appendChild(newPet);

    // Очищення форми та закриття вікна
    petForm.reset();
    formError.textContent = "";
    petModal.classList.remove("active");

    alert("Улюбленця успішно додано!");
});

const toggleEventsButton = document.getElementById("toggleEventsButton");
const events = document.querySelectorAll(".pets-events .event");

if (toggleEventsButton && events.length > 0) {
    toggleEventsButton.addEventListener("click", function() {
        events.forEach(function(event) {
            event.classList.toggle("event-hidden");
        });

        const isHidden = events[0].classList.contains("event-hidden");

        toggleEventsButton.textContent = isHidden
            ? "Показати події"
            : "Приховати події";
    });
}

