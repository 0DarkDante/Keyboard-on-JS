let inp = document.querySelector('input'),
    keyboard = document.querySelector('.keyboard'),
    Enter = document.querySelector('.enter'),
    keys = document.querySelectorAll('.key'),
    backspace = document.querySelector('.backspace'),
    capslock = document.querySelector('.capslock');
    let isCapsLockOn = false;


inp.addEventListener('click', function(){
  keyboard.style.display = 'flex';
});    

Enter.addEventListener('click', function(){
  keyboard.style.display = '';
});

let characters = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
  'Space', 'Backspace', '-', '=', "'", '\\', '[', ']', 'Caps Lock' 
];

for (let key of keys) {
  key.addEventListener('click', function() {
    for (let character of characters) {
      if (character === key.textContent) {
        if (character === 'Backspace') {
          inp.value = inp.value.slice(0, -1); // Удаление последнего символа
        } else if (character === 'Space') {
          inp.value += ' '; // Добавление пробела
        } else if (character === 'Caps Lock') {
          isCapsLockOn = !isCapsLockOn; // Изменение состояния Caps Lock
          updateCapsLockKey(); // Обновляем текст клавиши Caps Lock
        } else {
          inp.value += isCapsLockOn ? character.toUpperCase() : character;
        }

        break; // Прерываем цикл после обработки нажатия
      }
    }
  });
}

// Функция для обновления текста клавиши Caps Lock
function updateCapsLockKey() {
  capslock.textContent = isCapsLockOn ? 'CAPS LOCK' : 'Caps Lock';
}
