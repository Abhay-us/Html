let A = []
document.writeln("Array A = "+ A);
document.writeln("<br />");
let B = new Array();
document.writeln("Array B = "+ B);
document.writeln("<br />");

document.writeln("Length of Array A = "+ A.length);
document.writeln("<br />");

document.writeln("Length of Array B = "+ B.length);
document.writeln("<br />");

// to insert items in an array
A.push(10);
A.push(20);
A.push(30);
A.push(40);
A.push(50);
A.push(60);
document.writeln("Array A = "+ A);
document.writeln("<br />");

document.writeln("Length of Array A = "+ A.length);
document.writeln("<br />");


B.push(10);
B.push(20);
B.push(30);
B.push(40);
B.push(50);
B.push(60);
document.writeln("Array B = "+ B);
document.writeln("<br />");

document.writeln("Length of Array B = "+ B.length);
document.writeln("<br />");

document.writeln(A == B);   /// Output: false
document.writeln("<br />");

document.writeln(A === B);   /// Output: false
document.writeln("<br />");

// // // Initialize an array with size
let C = new Array(10);
document.writeln("Array C = "+ C);
document.writeln("<br />");

document.writeln("Length of Array c = "+ C.length);
document.writeln("<br />");

C[0] = 0
C[1] = 10
C[2] = 20
C[3] = 30
C[4] = 40
C[5] = 50
C[6] = 60
C[7] = 70
C[8] = 80
C[9] = 90

document.writeln("Array C = "+ C);
document.writeln("<br />");

// // Read elements of Array
document.writeln("Array C = "+ C);
document.writeln("<br />");

document.writeln("Element at index 4 of Array C = "+ C[4]);
document.writeln("<br />");

// By using Loops
for(i=0; i<C.length; i++){
    document.writeln("Element at index" + i+" of Array C = "+ C[i]);
    document.writeln("<br />");
}

i=0;
while(i<C.length){
    document.writeln("Element at index" + i+" of Array C = "+ C[i]);
    document.writeln("<br />");
    i++;
}

i=0;
do{
    document.writeln("Element at index" + i+" of Array C = "+ C[i]);
    document.writeln("<br />");
    i++;
}while(i<C.length);

// Update any value 
C[4] = 444
document.writeln("Array C = "+ C);
document.writeln("<br />");

// Insert element at first index
C.unshift(999)
document.writeln("Array C = "+ C);
document.writeln("<br />");

document.writeln("Length of Array c = "+ C.length);
document.writeln("<br />");

// Delete first element
C.shift()
C.shift()
document.writeln("Array C = "+ C);
document.writeln("<br />");

document.writeln("Length of Array c = "+ C.length);
document.writeln("<br />");

// Delete last element
C.pop()
C.pop()
document.writeln("Array C = "+ C);
document.writeln("<br />");

document.writeln("Length of Array c = "+ C.length);
document.writeln("<br />");

C.pop()
document.writeln("Array C = "+ C);
document.writeln("<br />");

document.writeln("Length of Array c = "+ C.length);
document.writeln("<br />");

// Array Reverse
C.reverse()
document.writeln("Array C = "+ C);
document.writeln("<br />");

document.writeln("Length of Array c = "+ C.length);
document.writeln("<br />");

// 
let D = new Array(10);
document.writeln("Array D = "+ D);
document.writeln("<br />");

document.writeln("Length of Array D = "+ D.length);
document.writeln("<br />");

D.fill(0);
document.writeln("Array D = "+ D);
document.writeln("<br />");

document.writeln("Concat = " + A.concat(B));

document.writeln("<br />");

let E = A.concat(B);
document.writeln("Array E = "+ E);
document.writeln("<br />");

document.writeln("Index of Element 50 of Array E = " + E.indexOf(50));
document.writeln("<br />");
document.writeln("Index of Element 50 of Array E = " + E.lastIndexOf(50))
document.writeln("<br />");

E[5] = 50;
document.writeln("Array E = "+ E);
document.writeln("<br />");

document.writeln("Index of Element 50 of Array E = " + E.findIndex((i) => i==50));
document.writeln("<br />");
document.writeln("Index of Element 50 of Array E = " + E.findLastIndex((i) => i== 50))
document.writeln("<br />");


document.writeln("Index of Element 50 of Array E = " + E.indexOf(50,5));
document.writeln("<br />");
document.writeln("Index of Element 50 of Array E = " + E.lastIndexOf(50, 1))
document.writeln("<br />");