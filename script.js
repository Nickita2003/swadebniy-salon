// Данные о товарах
const products = [
  {
    id: 1,
    name: "Свадебное платье «Амелия»",
    price: 45000,
    images: [
      "платье.jpg",
      "платье 2.jpg",
      "платье 3.jpg",
    ],
    category: "dresses",
    description: "Роскошное платье из французского кружева с длинным шлейфом",
  },
  {
    id: 2,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: [
      "платье 4.jpg",
      "платье 5.jpg",
      "платье 6.jpg",
    ],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 3,
    name: "Фата «Нежность»",
    price: 8500,
    images: ["фата.jpeg"],
    category: "veils",
    description: "Длинная фата из тончайшего тюля с жемчужной вышивкой",
  },
  {
    id: 4,
    name: "Диадема «Королева»",
    price: 12000,
    images: ["диадема.jpg"],
    category: "tiaras",
    description: "Изящная диадема с кристаллами Swarovski",
  },
  {
    id: 5,
    name: "Туфли «Золушка»",
    price: 9500,
    images: ["туфли.jpeg"],
    category: "shoes",
    description: "Элегантные туфли на каблуке с жемчужными деталями",
  },
];

// Таймер обратного отсчета
function startCountdown() {
  const openingDate = new Date("2024-09-01T10:00:00");
  const countdownElement = document.getElementById("countdown");
  const openedMessageElement = document.getElementById("opened-message");

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  const timer = setInterval(() => {
    const now = new Date();
    const difference = openingDate.getTime() - now.getTime();

    if (difference <= 0) {
      clearInterval(timer);
      countdownElement.style.display = "none";
      openedMessageElement.style.display = "block";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, "0");
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
}

// Отображение платьев
function renderDresses() {
  const dressesContainer = document.getElementById("dresses-container");
  const dresses = products.filter((product) => product.category === "dresses");

  dressesContainer.innerHTML = "";

  dresses.forEach((dress) => {
    const dressCard = document.createElement("div");
    dressCard.className = "dress-card";

    let currentImageIndex = 0;

    dressCard.innerHTML = `
            <div class="image-container">
                <img src="${dress.images[0]}" alt="${dress.name}" class="dress-image">
                ${
                  dress.images.length > 1
                    ? `
                    <button class="nav-button prev">&#8249;</button>
                    <button class="nav-button next">&#8250;</button>
                    <div class="image-counter">1 / ${dress.images.length}</div>
                `
                    : ""
                }
            </div>
            <div class="dress-info">
                <h3>${dress.name}</h3>
                ${dress.description ? `<p class="dress-description">${dress.description}</p>` : ""}
                <p class="dress-price">${dress.price.toLocaleString("ru-RU")} руб.</p>
            </div>
        `;

    // Добавляем обработчики для переключения изображений
    if (dress.images.length > 1) {
      const prevButton = dressCard.querySelector(".prev");
      const nextButton = dressCard.querySelector(".next");
      const imageElement = dressCard.querySelector(".dress-image");
      const counterElement = dressCard.querySelector(".image-counter");

      prevButton.addEventListener("click", () => {
        currentImageIndex =
          (currentImageIndex - 1 + dress.images.length) % dress.images.length;
        imageElement.src = dress.images[currentImageIndex];
        counterElement.textContent = `${currentImageIndex + 1} / ${dress.images.length}`;
      });

      nextButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % dress.images.length;
        imageElement.src = dress.images[currentImageIndex];
        counterElement.textContent = `${currentImageIndex + 1} / ${dress.images.length}`;
      });
    }

    dressesContainer.appendChild(dressCard);
  });
}

// Отображение аксессуаров
function renderAccessories(category = "all") {
  const accessoriesContainer = document.getElementById("accessories-container");
  let accessories = products.filter(
    (product) => product.category !== "dresses"
  );

  if (category !== "all") {
    accessories = accessories.filter((item) => item.category === category);
  }

  accessoriesContainer.innerHTML = "";

  if (accessories.length === 0) {
    accessoriesContainer.innerHTML = "<p>Нет товаров в этой категории</p>";
    return;
  }

  accessories.forEach((item) => {
    const accessoryCard = document.createElement("div");
    accessoryCard.className = "accessory-card";

    accessoryCard.innerHTML = `
            <div class="accessory-image">
                <img src="${item.images[0]}" alt="${item.name}">
            </div>
            <div class="accessory-info">
                <h3>${item.name}</h3>
                ${item.description ? `<p>${item.description}</p>` : ""}
                <p class="price">${item.price.toLocaleString("ru-RU")} руб.</p>
            </div>
        `;

    accessoriesContainer.appendChild(accessoryCard);
  });
}

// Инициализация фильтрации аксессуаров
function initFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Убираем активный класс у всех кнопок
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Добавляем активный класс к текущей кнопке
      button.classList.add("active");

      // Фильтруем аксессуары
      const category = button.getAttribute("data-category");
      renderAccessories(category);
    });
  });
}

// Плавная прокрутка к якорям
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  startCountdown();
  renderDresses();
  renderAccessories();
  initFilterButtons();
  initSmoothScroll();
});
