// Конфигурация
const CONFIG = {
  openingDate: "2025-09-01T15:00:00", // Дата открытия
  salonName: 'Свадебный салон "Элегантность"',
  address: "г. Москва, ул. Свадебная, д. 1",
  phone: "+7 (495) 123-45-67",
  email: "info@elegance-wedding.ru",
  workHours: {
    weekday: "Пн-Пт: 10:00 - 20:00",
    weekend: "Сб-Вс: 11:00 - 19:00",
  },
};

// Данные о товарах
const products = [
  {
    id: 1,
    name: "Свадебное платье «Амелия»",
    price: 45000,
    images: [
      "images/платье 2.jpg",
      "images/платье 6.jpg",
      "images/платье 5.jpg",
    ],
    category: "dresses",
    description: "Роскошное платье из французского кружева с длинным шлейфом",
  },
  {
    id: 2,
    name: "Свадебное платье «Изабелла»",
    price: 38000,
    images: ["images/платье.jpg", "images/платье 3.jpg", "images/платье 4.jpg"],
    category: "dresses",
    description: "Элегантное платье прямого кроя с открытой спиной",
  },
  {
    id: 3,
    name: "Фата «Нежность»",
    price: 8500,
    images: ["images/фата.jpeg"],
    category: "veils",
    description: "Длинная фата из тончайшего тюля с жемчужной вышивкой",
  },
  {
    id: 4,
    name: "Диадема «Королева»",
    price: 12000,
    images: ["images/диадема.jpg"],
    category: "tiaras",
    description: "Изящная диадема с кристаллами Swarovski",
  },
  {
    id: 5,
    name: "Туфли «Золушка»",
    price: 9500,
    images: ["images/туфли.jpeg"],
    category: "shoes",
    description: "Элегантные туфли на каблуке с жемчужными деталями",
  },
];

// Утилиты
const Utils = {
  formatPrice: (price) => {
    return price.toLocaleString("ru-RU") + " руб.";
  },

  preloadImages: (imageArray) => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  },
};

// Таймер обратного отсчета
class CountdownTimer {
  constructor(openingDate) {
    this.openingDate = new Date(openingDate);
    this.timerInterval = null;
    this.isOpened = false;

    this.daysElement = document.getElementById("days");
    this.hoursElement = document.getElementById("hours");
    this.minutesElement = document.getElementById("minutes");
    this.secondsElement = document.getElementById("seconds");
    this.countdownElement = document.getElementById("countdown");
    this.openedMessageElement = document.getElementById("opened-message");
  }

  start() {
    this.checkOpeningStatus();

    if (!this.isOpened) {
      this.timerInterval = setInterval(() => this.update(), 1000);
      this.update(); // Первоначальное обновление
    }
  }

  checkOpeningStatus() {
    const now = new Date();
    this.isOpened = now >= this.openingDate;

    if (this.isOpened) {
      this.showOpeningMessage();
    }
  }

  update() {
    const now = new Date();
    const difference = this.openingDate.getTime() - now.getTime();

    if (difference <= 0) {
      clearInterval(this.timerInterval);
      this.isOpened = true;
      this.showOpeningMessage();
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    this.daysElement.textContent = days.toString().padStart(2, "0");
    this.hoursElement.textContent = hours.toString().padStart(2, "0");
    this.minutesElement.textContent = minutes.toString().padStart(2, "0");
    this.secondsElement.textContent = seconds.toString().padStart(2, "0");
  }

  showOpeningMessage() {
    if (this.countdownElement) {
      this.countdownElement.style.display = "none";
    }
    if (this.openedMessageElement) {
      this.openedMessageElement.style.display = "block";
    }
  }
}

// Галерея товаров
class ProductGallery {
  constructor(products) {
    this.products = products;
    this.preloadImages();
  }

  preloadImages() {
    const allImages = [];
    this.products.forEach((product) => {
      product.images.forEach((image) => allImages.push(image));
    });
    Utils.preloadImages(allImages);
  }

  renderDresses() {
    const dressesContainer = document.getElementById("dresses-container");
    if (!dressesContainer) return;

    const dresses = this.products.filter(
      (product) => product.category === "dresses"
    );
    dressesContainer.innerHTML = "";

    dresses.forEach((dress) => {
      const dressCard = this.createDressCard(dress);
      dressesContainer.appendChild(dressCard);
    });
  }

  createDressCard(dress) {
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
                <p class="dress-price">${Utils.formatPrice(dress.price)}</p>
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

    return dressCard;
  }

  renderAccessories(category = "all") {
    const accessoriesContainer = document.getElementById(
      "accessories-container"
    );
    if (!accessoriesContainer) return;

    let accessories = this.products.filter(
      (product) => product.category !== "dresses"
    );

    if (category !== "all") {
      accessories = accessories.filter((item) => item.category === category);
    }

    accessoriesContainer.innerHTML = "";

    accessories.forEach((item) => {
      const accessoryCard = this.createAccessoryCard(item);
      accessoriesContainer.appendChild(accessoryCard);
    });
  }

  createAccessoryCard(item) {
    const accessoryCard = document.createElement("div");
    accessoryCard.className = "accessory-card";

    accessoryCard.innerHTML = `
            <div class="accessory-image">
                <img src="${item.images[0]}" alt="${item.name}">
            </div>
            <div class="accessory-info">
                <h3>${item.name}</h3>
                ${item.description ? `<p>${item.description}</p>` : ""}
                <p class="price">${Utils.formatPrice(item.price)}</p>
            </div>
        `;

    return accessoryCard;
  }
}

// Менеджер фильтров
class FilterManager {
  constructor() {
    this.currentCategory = "all";
    this.filterButtons = document.querySelectorAll(".filter-btn");
  }

  init() {
    this.filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.handleFilterClick(button);
      });
    });
  }

  handleFilterClick(button) {
    // Убираем активный класс у всех кнопок
    this.filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Добавляем активный класс к текущей кнопке
    button.classList.add("active");

    // Получаем категорию для фильтрации
    this.currentCategory = button.getAttribute("data-category");

    // Вызываем событие изменения фильтра
    document.dispatchEvent(
      new CustomEvent("filterChanged", {
        detail: { category: this.currentCategory },
      })
    );
  }
}

// Менеджер навигации
class NavigationManager {
  constructor() {
    this.initSmoothScroll();
  }

  initSmoothScroll() {
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
}

// Основной код приложения
class WeddingSalonApp {
  constructor(config, products) {
    this.config = config;
    this.products = products;
    this.timer = new CountdownTimer(config.openingDate);
    this.gallery = new ProductGallery(products);
    this.filterManager = new FilterManager();
    this.navigationManager = new NavigationManager();
  }

  init() {
    // Инициализация таймера
    this.timer.start();

    // Рендер товаров
    this.gallery.renderDresses();
    this.gallery.renderAccessories();

    // Инициализация фильтров
    this.filterManager.init();

    // Инициализация навигации
    this.navigationManager.init();

    // Обработчик изменения фильтра
    document.addEventListener("filterChanged", (e) => {
      this.gallery.renderAccessories(e.detail.category);
    });

    // Обновляем информацию в футере
    this.updateFooterInfo();
  }

  updateFooterInfo() {
    // Обновляем контактную информацию в футере
    const footerSections = document.querySelectorAll(".footer-section");
    if (footerSections.length >= 3) {
      // Вторая секция - контакты
      const contactsSection = footerSections[1];
      contactsSection.querySelector("p:nth-child(2)").textContent =
        this.config.address;
      contactsSection.querySelector("p:nth-child(3)").textContent =
        this.config.phone;
      contactsSection.querySelector("p:nth-child(4)").textContent =
        this.config.email;

      // Третья секция - часы работы
      const hoursSection = footerSections[2];
      hoursSection.querySelector("p:nth-child(2)").textContent =
        this.config.workHours.weekday;
      hoursSection.querySelector("p:nth-child(3)").textContent =
        this.config.workHours.weekend;
    }

    // Обновляем информацию в блоке контактов
    const contactItems = document.querySelectorAll(".contact-item");
    if (contactItems.length >= 3) {
      contactItems[0].querySelector("p").textContent = this.config.address;
      contactItems[1].querySelector("p").textContent = this.config.phone;

      const hoursElement = contactItems[2];
      hoursElement.querySelector("p:nth-child(2)").textContent =
        this.config.workHours.weekday;
      hoursElement.querySelector("p:nth-child(3)").textContent =
        this.config.workHours.weekend;
    }

    // Обновляем название салона в хедере
    const logoElement = document.querySelector(".logo");
    if (logoElement) {
      logoElement.textContent = this.config.salonName;
    }

    // Обновляем сообщение об открытии
    const openedMessage = document.querySelector(".opened-message p");
    if (openedMessage) {
      openedMessage.textContent = `Приходите к нам по адресу: ${this.config.address}`;
    }
  }
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  const app = new WeddingSalonApp(CONFIG, products);
  app.init();
});
