/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.

  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода

      Number.toString( ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btn = document.createElement('button');
const p = document.createElement('p');
const div = document.createElement('div')
const pToDiv = document.createElement('p')

btn.onclick = () => {

    const r = getRandomIntInclusive(0, 255);
    const g = getRandomIntInclusive(0, 255);
    const b = getRandomIntInclusive(0, 255);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    btn.setAttribute('style', `background:transparent;height:${g}px;min-height:50px;
    transition:all .5s;width:${r}px;min-width:50px; border:1px solid #fefefe;color:#fefefe;`);

    p.innerText = `rgba(${r},${g},${b})`;

    const rr = g.toString(16);
    const gg = r.toString(16);
    const bb = b.toString(16);

    div.style.backgroundColor = `#${rr}${gg}${bb}`;

    pToDiv.innerText = `#${rr}${gg}${bb}`;

}

btn.innerText = 'Click';
btn.setAttribute('style', `background:red;height:50px;width:200px;width:50px;`);

div.setAttribute('style', ' background: white; width:500px;height:500px;')

document.body.appendChild(btn);
document.body.appendChild(p);
document.body.appendChild(div)
div.appendChild(pToDiv)




