/* Игральные кости генерируются произвольно два числа от 1 до 6*/

/*Есть два способа:
1) все расписано по шагово для первой кости
2) более короткий сжатый способ для второй кости
*/


//первая кость
var randonNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randonNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];//получаем первый элемент массива - левая кость

image1.setAttribute("src", randomImageSource); //устанавливаем произвольное значение для левой кости


//вторая кость
var randonNumber2 = Math.floor(Math.random() * 6) + 1;//генерируется произвольное число от 1 до 6

var randomImageSource2 = "images/dice" + randonNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //ищем в DOM вторую картинку кости и присваиваем произвольную картинку


//if Player 1 wins
if(randonNumber1 > randonNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if (randonNumber1 < randonNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
