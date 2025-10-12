// Конфигурация
const CONFIG = {
  openingDate: "2025-10-03T10:00:00",
  salonName: 'Свадебный салон "Невеста"',
  address: "г. Первомайск, ул. XIX Партсъезда, д. 5",
  phone: "+7 (959) 547-55-75",
  workHours: {
    weekday: "Пн-Пт: 09:00 - 17:00",
    weekend: "Сб-Вс: 09:00 - 17:00",
  },
  // Настройка отображения цен
  showPrices: false, // Теперь показываем цены, поменять на true когда появятся цены
  currency: "руб.",
};

// Данные о платьях с ценами
const products = [
  {
    id: 1,
    name: "Свадебное платье «Амелия»",
    price: 25500,
    images: [
      "dresses01.jpg",
      "dresses02.jpg",
      "dresses03.jpg",
      "dresses04.jpg",
    ],
    video: "images 1/dresses.mp4",
    category: "dresses",
  },
  {
    id: 2,
    name: "Свадебное платье «Изабелла»",
    price: 32400,
    images: [
      "dresses1.jpg",
      "dresses2.jpg",
      "dresses3.jpg",
      "dresses4.jpg",
      "dresses5.jpg",
      "dresses6.jpg",
      "dresses7.jpg",
      "dresses8.jpg",
      "dresses9.jpg",
    ],
    video: "dresses2.mp4",
    category: "dresses",
  },
  {
    id: 3,
    name: "Свадебное платье «Амарель»",
    price: 18700,
    images: [
      "dresses21.jpg",
      "dresses22.jpg",
      "dresses23.jpg",
      "dresses24.jpg",
      "dresses25.jpg",
    ],
    category: "dresses",
  },
  {
    id: 4,
    name: "Свадебное платье «Жозефина»",
    price: 29500,
    images: [
      "dresses31.jpg",
      "dresses32.jpg",
      "dresses33.jpg",
      "dresses34.jpg",
    ],
    video: "3dresses.mp4",
    category: "dresses",
  },
  {
    id: 5,
    name: "Свадебное платье «Королева»",
    price: 41200,
    images: [
      "dresses41.jpg",
      "dresses42.jpg",
      "dresses43.jpg",
      "dresses44.jpg",
      "dresses45.jpg",
      "dresses46.jpg",
      "dresses47.jpg",
      "dresses48.jpg",
    ],
    video: "dresses5.mp4",
    category: "dresses",
  },
  {
    id: 6,
    name: "Свадебное платье «Лунная невеста»",
    price: 36800,
    images: [
      "images 5/dresses1.jpg",
      "images 5/dresses2.jpg",
      "images 5/dresses3.jpg",
      "images 5/dresses4.jpg",
      "images 5/dresses5.jpg",
      "images 5/dresses6.jpg",
      "images 5/dresses7.jpg",
    ],
    videos: ["images 5/dresses.mp4", "images 5/dresses6.mp4"],
    category: "dresses",
  },
  {
    id: 7,
    name: "Свадебное платье «Очарование»",
    price: 27600,
    images: [
      "images 6/dresses1.jpg",
      "images 6/dresses2.jpg",
      "images 6/dresses3.jpg",
      "images 6/dresses4.jpg",
      "images 6/dresses5.jpg",
      "images 6/dresses6.jpg",
    ],
    videos: ["images 6/dresses2.MP4", "images 6/dresses.MP4"],
    category: "dresses",
  },
  {
    id: 8,
    name: "Свадебное платье «Мечта»",
    price: 33100,
    images: [
      "images 7/dresses1.jpg",
      "images 7/dresses2.jpg",
      "images 7/dresses3.jpg",
      "images 7/dresses4.jpg",
    ],
    videos: [
      "images 7/dresses.mp4",
      "images 7/dresses1.mp4",
      "images 7/dresses2.mp4",
    ],
    category: "dresses",
  },
  {
    id: 9,
    name: "Свадебное платье «Адель»",
    price: 24300,
    images: [
      "images 8/dresses1.jpg",
      "images 8/dresses2.jpg",
      "images 8/dresses3.jpg",
      "images 8/dresses4.jpg",
      "images 8/dresses5.jpg",
      "images 8/dresses6.jpg",
    ],
    category: "dresses",
  },
  {
    id: 10,
    name: "Свадебное платье «Ариэль»",
    price: 38900,
    images: [
      "images 9/dresses1.jpg",
      "images 9/dresses2.jpg",
      "images 9/dresses3.jpg",
      "images 9/dresses4.jpg",
      "images 9/dresses5.jpg",
      "images 9/dresses6.jpg",
      "images 9/dresses7.jpg",
      "images 9/dresses8.jpg",
    ],
    videos: ["images 9/dresses2.mp4", "images 9/dresses1.mp4"],
    category: "dresses",
  },
  {
    id: 11,
    name: "Свадебное платье «Лебединная песнь»",
    price: 35200,
    images: [
      "images 10/dresses1.jpg",
      "images 10/dresses2.jpg",
      "images 10/dresses3.jpg",
      "images 10/dresses4.jpg",
      "images 10/dresses5.jpg",
    ],
    videos: ["images 10/dresses2.mp4", "images 10/dresses1.mp4"],
    category: "dresses",
  },
  {
    id: 12,
    name: "Свадебное платье «Гармония»",
    price: 26700,
    images: [
      "images 11/dresses1.jpg",
      "images 11/dresses2.jpg",
      "images 11/dresses3.jpg",
      "images 11/dresses4.jpg",
      "images 11/dresses5.jpg",
    ],
    video: ["images 11/dresses.mp4"],
    category: "dresses",
  },
  {
    id: 13,
    name: "Свадебное платье «Элитное очарование»",
    price: 44500,
    images: [
      "images 12/dresses1.jpg",
      "images 12/dresses2.jpg",
      "images 12/dresses3.jpg",
      "images 12/dresses4.jpg",
      "images 12/dresses5.jpg",
    ],
    video: ["images 12/dresses.mp4"],
    category: "dresses",
  },
  {
    id: 14,
    name: "Свадебное платье «Елизавета»",
    price: 29800,
    images: [
      "images 13/dresses1.jpg",
      "images 13/dresses2.jpg",
      "images 13/dresses3.jpg",
      "images 13/dresses4.jpg",
      "images 13/dresses5.jpg",
    ],
    video: ["images 13/dresses.mp4"],
    category: "dresses",
  },
  {
    id: 15,
    name: "Свадебное платье «Сладкая девочка»",
    price: 21300,
    images: [
      "images 14/dresses1.jpg",
      "images 14/dresses2.jpg",
      "images 14/dresses3.jpg",
      "images 14/dresses4.jpg",
      "images 14/dresses5.jpg",
    ],
    category: "dresses",
  },
];

// Переменные для управления отображением платьев
let allDressesVisible = false;
const visibleDressesCount = 5;

// Проверка существования элемента
function getElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Элемент ${selector} не найден`);
  }
  return element;
}

// Форматирование цены
function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price) + " " + CONFIG.currency;
}

// Таймер обратного отсчета
function startCountdown() {
  const countdownDate = new Date(CONFIG.openingDate).getTime();
  const daysElement = getElement("#days");
  const hoursElement = getElement("#hours");
  const minutesElement = getElement("#minutes");
  const secondsElement = getElement("#seconds");
  const countdownSection = getElement("#countdown");
  const openedMessage = getElement("#opened-message");

  if (!daysElement || !countdownSection) return;

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      if (countdownSection) countdownSection.style.display = "none";
      if (openedMessage) openedMessage.style.display = "block";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysElement) daysElement.textContent = days.toString().padStart(2, "0");
    if (hoursElement)
      hoursElement.textContent = hours.toString().padStart(2, "0");
    if (minutesElement)
      minutesElement.textContent = minutes.toString().padStart(2, "0");
    if (secondsElement)
      secondsElement.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
}

// Создание карточки платья с ценой
function createDressCard(dress) {
  const dressCard = document.createElement("div");
  dressCard.className = "dress-card";
  dressCard.dataset.id = dress.id;

  // Обработка видео форматов
  const videos = Array.isArray(dress.videos)
    ? dress.videos
    : dress.video
      ? Array.isArray(dress.video)
        ? dress.video
        : [dress.video]
      : [];

  const allMedia = [...dress.images, ...videos];
  const hasMultipleMedia = allMedia.length > 1;

  // Формируем HTML для цены
  const priceHTML =
    CONFIG.showPrices && dress.price
      ? `<div class="dress-price">${formatPrice(dress.price)}</div>`
      : "";

  dressCard.innerHTML = `
    <div class="image-container">
      <img src="${dress.images[0]}" alt="${dress.name}" class="dress-image" loading="lazy">
      ${videos
        .map(
          (video, index) => `
        <video class="dress-video" data-index="${index}" preload="none" controls style="display: none;">
          <source src="${video}" type="video/mp4">
          Ваш браузер не поддерживает видео
        </video>
      `
        )
        .join("")}
      ${
        hasMultipleMedia
          ? `
        <button class="nav-button prev" aria-label="Предыдущее изображение">&#8249;</button>
        <button class="nav-button next" aria-label="Следующее изображение">&#8250;</button>
        <div class="image-counter">1 / ${allMedia.length}</div>
      `
          : ""
      }
      ${videos.length > 0 ? `<button class="video-button" aria-label="Воспроизвести видео">▶ Видео</button>` : ""}
    </div>
    <div class="dress-info">
      <h3>${dress.name}</h3>
      ${priceHTML}
      ${dress.description ? `<p class="dress-description">${dress.description}</p>` : ""}
    </div>
  `;

  // Инициализация функционала переключения медиа
  if (hasMultipleMedia) {
    initMediaNavigation(dressCard, dress, allMedia);
  }

  return dressCard;
}

// Инициализация навигации по медиа
function initMediaNavigation(dressCard, dress, allMedia) {
  let currentMediaIndex = 0;
  let isVideoPlaying = false;

  const prevButton = dressCard.querySelector(".prev");
  const nextButton = dressCard.querySelector(".next");
  const imageElement = dressCard.querySelector(".dress-image");
  const videoElements = dressCard.querySelectorAll(".dress-video");
  const counterElement = dressCard.querySelector(".image-counter");
  const videoButton = dressCard.querySelector(".video-button");

  const updateMediaDisplay = () => {
    // Скрываем все видео
    videoElements.forEach((video) => {
      video.style.display = "none";
      video.pause();
    });

    // Определяем, что показывать
    if (currentMediaIndex < dress.images.length) {
      // Показываем изображение
      imageElement.style.display = "block";
      imageElement.src = dress.images[currentMediaIndex];
      if (videoButton) {
        videoButton.textContent = "▶ Видео";
        videoButton.style.display = "block";
      }
      dressCard.classList.remove("video-playing");
      isVideoPlaying = false;
    } else {
      // Показываем видео
      const videoIndex = currentMediaIndex - dress.images.length;
      imageElement.style.display = "none";
      videoElements[videoIndex].style.display = "block";
      if (videoButton) {
        videoButton.textContent = "◼ Стоп";
        videoButton.style.display = "block";
      }
      dressCard.classList.add("video-playing");
      isVideoPlaying = true;
    }

    if (counterElement) {
      counterElement.textContent = `${currentMediaIndex + 1} / ${allMedia.length}`;
    }
  };

  // Обработчики навигации
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentMediaIndex =
        (currentMediaIndex - 1 + allMedia.length) % allMedia.length;
      updateMediaDisplay();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentMediaIndex = (currentMediaIndex + 1) % allMedia.length;
      updateMediaDisplay();
    });
  }

  // Обработчик кнопки видео
  if (videoButton) {
    videoButton.addEventListener("click", () => {
      if (isVideoPlaying) {
        // Переключаем на первое изображение
        currentMediaIndex = 0;
        updateMediaDisplay();
      } else {
        // Переключаем на первое видео
        currentMediaIndex = dress.images.length;
        updateMediaDisplay();
        // Воспроизводим первое видео
        if (videoElements.length > 0) {
          const firstVideo = videoElements[0];
          firstVideo
            .play()
            .catch((e) => console.log("Автовоспроизведение заблокировано:", e));
        }
      }
    });
  }

  // Инициализация
  updateMediaDisplay();
}

// Отображение платьев
function renderDresses() {
  const dressesContainer = getElement("#dresses-container");
  const showMoreBtn = getElement("#show-more-btn");

  if (!dressesContainer) {
    console.error("Контейнер для платьев не найден!");
    return;
  }

  const dresses = products.filter((product) => product.category === "dresses");
  console.log(
    `Всего платьев: ${dresses.length}, Показывать все: ${allDressesVisible}`
  );

  dressesContainer.innerHTML = "";

  // Определяем, сколько платьев показывать
  const dressesToShow = allDressesVisible
    ? dresses
    : dresses.slice(0, visibleDressesCount);

  console.log(`Будет показано платьев: ${dressesToShow.length}`);

  // Создаем и добавляем карточки платьев
  dressesToShow.forEach((dress) => {
    const dressCard = createDressCard(dress);
    dressesContainer.appendChild(dressCard);
  });

  // Обновляем состояние кнопки "Показать все"
  if (showMoreBtn) {
    if (dresses.length <= visibleDressesCount) {
      showMoreBtn.style.display = "none";
    } else {
      showMoreBtn.style.display = "block";
      showMoreBtn.textContent = allDressesVisible
        ? "Свернуть"
        : `Показать все платья (${dresses.length})`;
    }
  }
}

// Инициализация кнопки "Показать все платья"
function initShowMoreButton() {
  const showMoreBtn = getElement("#show-more-btn");
  if (!showMoreBtn) {
    console.error('Кнопка "Показать все платья" не найдена!');
    return;
  }

  console.log('Кнопка "Показать все платья" инициализирована');

  showMoreBtn.addEventListener("click", () => {
    console.log("Кнопка нажата! Текущее состояние:", allDressesVisible);
    allDressesVisible = !allDressesVisible;
    console.log("Новое состояние:", allDressesVisible);
    renderDresses();

    // Плавная прокрутка к началу секции после переключения
    if (allDressesVisible) {
      const dressesSection = getElement("#dresses");
      if (dressesSection) {
        setTimeout(() => {
          dressesSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
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
          block: "start",
        });
      }
    });
  });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  console.log("Инициализация свадебного салона...");

  // Запускаем основные функции
  startCountdown();
  renderDresses();
  initSmoothScroll();
  initShowMoreButton();
});

// Обработка ошибок загрузки изображений
document.addEventListener(
  "error",
  function (e) {
    if (e.target.tagName === "IMG") {
      console.warn("Ошибка загрузки изображения:", e.target.src);
      // Можно установить placeholder изображение
      // e.target.src = 'placeholder.jpg';
    }
  },
  true
);










