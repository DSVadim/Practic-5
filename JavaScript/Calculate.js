var x = prompt('Please, enter x:');

let f =0;

if (x<0) {
    f=Math.pow(Math.tan(x),3)*x;
} else if (x==0) {
    f=Math.pow(Math.PI, 3);
} else  {
    f=Math.sqrt(x) - Math.log(x);
}

document.write(`f = ` +f);