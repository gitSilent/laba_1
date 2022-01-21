// задание 1
let x1,x2,y1,y2,side1,side2,s;
x1 = -5;
x2 = 10;
y1 = 8;
y2 = 5;

side1 = Math.abs(x1-x2);
side2 = Math.abs(y1-y2);
s = side1 * side2;
console.log("Сторона 1 = ", side1, "|", "Сторона 2 = ", side2);

console.log("Площадь прямоугольника равна", s);