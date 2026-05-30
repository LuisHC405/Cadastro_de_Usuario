//Mini Programa 1
const namePersonal: string = "Luis";
const agePersonal: number = 21;
const isStudent: boolean = true;
console.log("=== USER DATA ===");
console.log ("Name: " + namePersonal);
console.log("Age: " + agePersonal);
if (isStudent == true){
    console.log("Student: " + isStudent);
}

//Mini Programa 2
const nameProduct: string = "Keyboard";
const priceProduct: number = 249.99;
const inStock: boolean = true;
console.log ("=== PRODUCT ===");
console.log ("Name: " + nameProduct);
console.log ("Price: " + priceProduct);
console.log ("In Stock: " + inStock);

//Mini Programa 3
const number1: number = 32;
const number2: number = 48;
const add: number = number1 + number2;
const minus: number = number1 - number2;
const multiplication: number = number1 * number2;
const division: number = number1 / number2;
console.log("=== CALCULATOR ===");
console.log("Number 1: " + number1);
console.log("Number 2: " + number2);
console.log("Sum: " + add);
console.log("Minus: " + minus);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
//Desafio
const nameStudent: string = "Mike";
const mark1: number = 7;
const mark2: number = 10;
const average: number = (mark1 + mark2)/2;
console.log(`=== SYSTEM ===
Name: ${nameStudent}
Mark 1: ${mark1}
Mark 2: ${mark2}
Average: ${average} `);
/*Mini Projeto do Dia
Sistema Escolar
 O programa deve ter:
nome do aluno
nota
 Mostre:
Excellent
Approved
Recovery
Failed
Dependendo da nota.
*/
const nameSTUDENT: string = "Luis";
const grade: number = 10;
if (grade === 10){
    console.log(`${nameSTUDENT} foi Excelente na prova`);
} else if (grade >= 7 && grade < 10){
    console.log (`${nameSTUDENT} passou na prova`);
} else if (grade < 7 && grade >= 4){
    console.log(`${nameSTUDENT} está em Recuperação`);
} else {
    console.log(`${nameSTUDENT} está Reprovado`)
}