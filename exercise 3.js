let n,m,maximal,minimal, ran_num;

n = 0;
m = 100;

n = n/2;
m = m/2; 

minimal = Math.min(n,m);
maximal = Math.max(n,m);


//console.log(maximal, minimal, maximal - minimal)

ran_num = Math.round((Math.random()*Math.abs(maximal-minimal))+minimal);
ran_num = (ran_num*2)-1;
console.log(ran_num);