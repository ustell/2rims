// Получаем элементы
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

console.log('menuToggle:', menuToggle);
console.log('menu:', menu);

// Проверяем, что элементы найдены
if (menuToggle && menu) {
  // Добавляем обработчик события для открытия и закрытия меню
  menuToggle.addEventListener('click', () => {
    console.log('Клик по кнопке меню');
    menu.classList.toggle('menu--active');
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', (event) => {
    const isClickInside = menu.contains(event.target) || menuToggle.contains(event.target);

    if (!isClickInside && menu.classList.contains('menu--active')) {
      menu.classList.remove('menu--active');
    }
  });
} else {
  console.error('Не удалось найти элементы меню. Проверьте классы в HTML.');
}
