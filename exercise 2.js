let a, b, n,drobPart_a,dropPart_b;
a = 13.890123;
b = 2.891564;
n = 3;

a = Math.floor(a*10**n)/10**n;
b = Math.floor(b*10**n)/10**n;
console.log(a);
drobPart_a = (a % 1);
drobPart_b = (b % 1);
console.log(drobPart_a);
a1 = (Math.floor((drobPart_a*10**n)));
b1 = (Math.floor((drobPart_b*10**n)));
console.log("Первое число", a1, "Второе число", b1);

console.log("a1>b1", a1>b1);
console.log("a1<b1", a1<b1);
console.log("a1<=b1", a1>=b1);
console.log("a1<=b1", a1<=b1);
console.log("a1===b1", a1===b1);
console.log("a1!=b1", a1!=b1);