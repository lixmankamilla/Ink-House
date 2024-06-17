const arrOfReproductions = [
  {
    category: "Франция",
    img: "img/img-1.jpg",
    author: "Марсель Руссо",
    name: "Охота Амура",
    desc: "Холст, масло (50х80)",
    price: "14 500 руб",
  },
  {
    category: "Франция",
    img: "img/img-2.jpg",
    author: "Анри Селин",
    name: "Дама с собачкой",
    desc: "Акрил, бумага (50х80)",
    price: "16 500 руб",
  },
  {
    category: "Франция",
    img: "img/img-3.jpg",
    author: "Франсуа Дюпон",
    name: "Процедура",
    desc: "Цветная литография (40х60)",
    price: "20 000 руб",
  },
  {
    category: "Франция",
    img: "img/img-4.jpg",
    author: "Луи Детуш",
    name: "Роза",
    desc: "Бумага, акрил (50х80) ",
    price: "12 000 руб",
  },
  {
    category: "Франция",
    img: "img/img-5.jpg",
    author: "Франсуа Дюпон",
    name: "Птичья трапеза",
    desc: "Цветная литография (40х60) ",
    price: "22 500 руб",
  },
  {
    category: "Франция",
    img: "img/img-6.jpg",
    author: "Пьер Моранж",
    name: "Пейзаж с рыбой",
    desc: "Цветная литография (40х60) ",
    price: "20 000 руб",
  },
  {
    category: "Германия",
    img: "img/en-img-1.jpg",
    author: "Курт Вернер",
    name: "Над городом",
    desc: "Цветная литография (40х60)",
    price: "16 000 руб",
  },
  {
    category: "Германия",
    img: "img/en-img-2.jpg",
    author: "Макс Рихтер",
    name: "Птенцы",
    desc: "Холст, масло (50х80)",
    price: "14 500 руб",
  },
  {
    category: "Германия",
    img: "img/en-img-3.jpg",
    author: "Мартин Майер",
    name: "Среди листьев",
    desc: "Цветная литография (40х60)",
    price: "20 000 руб",
  },
  {
    category: "Германия",
    img: "img/en-img-4.jpg",
    author: "Герман Беккер",
    name: "Яркая птица",
    desc: "Цветная литография (40х60) ",
    price: "13 000 руб",
  },
  {
    category: "Германия",
    img: "img/en-img-5.jpg",
    author: "Вульф Бауэр",
    name: "Дятлы",
    desc: "Бумага, акрил (50х80)  ",
    price: "20 000 руб",
  },
  {
    category: "Германия",
    img: "img/en-img-6.jpg",
    author: "Вальтер Хартманн",
    name: "Большие воды",
    desc: "Бумага, акрил (50х80)  ",
    price: "23 000 руб",
  },
  {
    category: "Англия",
    img: "img/ge-img-1.jpg",
    author: "Пол Смит",
    name: "Дикий зверь",
    desc: "Акварель, бумага (50х80)",
    price: "19 500 руб",
  },
  {
    category: "Англия",
    img: "img/ge-img-2.jpg",
    author: "Джон Уайт",
    name: "Скалистый берег",
    desc: "Цветная литография (40х60)",
    price: "17 500 руб",
  },
  {
    category: "Англия",
    img: "img/ge-img-3.jpg",
    author: "Джим Уотсон",
    name: "Река и горы",
    desc: "Акварель, бумага (50х80) ",
    price: "20 500 руб",
  },
  {
    category: "Англия",
    img: "img/ge-img-4.jpg",
    author: "Юджин Зиллион",
    name: "Белый попугай",
    desc: "Цветная литография (40х60)  ",
    price: "15 500 руб",
  },
  {
    category: "Англия",
    img: "img/ge-img-5.jpg",
    author: "Эрик Гиллман",
    name: "Ночная рыба",
    desc: "Бумага, акрил (50х80)  ",
    price: "12 500 руб",
  },
  {
    category: "Англия",
    img: "img/ge-img-6.jpg",
    author: "Альфред Барр",
    name: "Рыжий кот",
    desc: "Цветная литография (40х60) ",
    price: "21 000 руб",
  },
];

const btnArr = document.querySelectorAll(".site-options-button");
const optionsBtnNav = document.querySelector(".site-options-nav");
const reproductionsBlock = document.querySelector(".site-options-block");
const reproductionsBlocks = document.querySelectorAll(".site-option");

const filterProductsByCategory = (arrOfProducts, category) => {
  const newArr = arrOfProducts.filter((el) => {
    if (el.category === category) {
      return true;
    }
  });
  return newArr;
};

optionsBtnNav.addEventListener("click", (event) => {
  const target = event.target;
  btnArr.forEach((btn) => {
    if (target === btn) {
      btnArr.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
      reproductionsBlocks.forEach((el) => {
        el.remove();
      });
      const newArrOfProducts = filterProductsByCategory(
        arrOfReproductions,
        target.textContent
      );
      let items = "";

      newArrOfProducts.forEach((el) => {
        items += `
        <div class="site-option">
                <div class="site-option-image">
                  <img
                    src="${el.img}"
                    width="310px"
                    height="422px"
                  />
                </div>
    
                <div class="author">${el.author}</div>
    
                <div class="picture-name">${el.name}</div>
    
                <div class="picture-desc">${el.desc}</div>
    
                <div class="picture-price">${el.price}</div>
    
                <div class="buy-button">В корзину</div>
        </div>
        `;
      });
      reproductionsBlock.innerHTML = items;
    }
  });
});
