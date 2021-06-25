/*

  Задание 1.

  Написать скрипт который будет будет переключать вкладки по нажатию
  на кнопки в хедере.

  Главное условие - изменять файл HTML нельзя.

  Алгоритм:
    1. Выбрать каждую кнопку в шапке
       + бонус выбрать одним селектором

    2. Повесить кнопку онклик
        button1.onclick = function(event) {

        }
        + бонус: один обработчик на все три кнопки

    3. Написать функцию которая выбирает соответствующую вкладку
       и добавляет к ней класс active

    4. Написать функцию hideAllTabs которая прячет все вкладки.
       Удаляя класс active со всех вкладок

  Методы для работы:

    getElementById
    querySelector
    classList
    classList.add
    forEach
    onclick

    element.onclick = function(event) {
      // do stuff ...
    }

*/

let click = 0
const allBtn = document.querySelectorAll('.showButton')
const allTab = document.querySelectorAll('.tab')
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', function () {
      click++
        let setBtn = allBtn[i].dataset.tab
        for (let j = 0; j < allTab.length; j++) {
            if (setBtn == allTab[j].dataset.tab) {
                allTab[j].classList.add('active')

            } if(click >= 3){
                setInterval(function hideAllTabs() {
                    allTab.forEach((item) => {
                        item.classList.remove('active')
                    })
                }, 4000)
            }

        }

    })

}

