// 80. Write a JavaScript program to implement the Luhn Algorithm used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc. 

// https://www.youtube.com/watch?v=wsphC8V36i0 == > Luhn algorithm explanation | How does it work | 

const luhnAlgorithm = (identificationNumbers) => {
    let identification = identificationNumbers.replace(/ /g, '').split('');
    let identificationReverse = identificationNumbers.replace(/ /g, '').split('').reverse();

    let REVERSED_POSITIVE_SUM = identificationReverse.reduce((accumulator, value, valueIndex, originalArray) => valueIndex % 2 == 0 ? accumulator+eval(value) : accumulator+0, 0);

    let EVEN_NUMBERS = identificationReverse.reduce((accumulator, value, valueIndex, originalArray) => {
        if(valueIndex % 2 !== 0){
            let sum = eval(value)*2;
            let sumString = `${sum}`;
		 
            if(sumString.length == 2){
                accumulator += eval(sumString[0]);
                accumulator += eval(sumString[1]);
            }
            else{
                accumulator += sum;
            };
        }
        return accumulator;
    }, 0);

    return (REVERSED_POSITIVE_SUM+EVEN_NUMBERS)%10 === 0;
}
const luhnAlgorithm_OneLiner = (identificationNumbers) => (identificationNumbers.replace(/ /g, '').split('').reverse().reduce((accumulator, value, valueIndex, originalArray) => valueIndex % 2 === 0 ? accumulator+eval(value) : accumulator + 0, 0) + identificationNumbers.replace(/ /g, '').split('').reverse().reduce((accumulator, value, valueIndex, originalArray) => valueIndex % 2 !== 0 ? `${eval(value)*2}`.length === 2 ? accumulator+ eval(`${eval(value)*2}`[0]) + eval(`${eval(value)*2}`[1]) : accumulator+eval(value)*2: accumulator,0)) % 10 == 0

console.log(luhnAlgorithm("48 47 3529 8926 3094"));
for(let i = 0 ; i < 3 ; i++){
    console.log('');
};
console.log(luhnAlgorithm_OneLiner("48 47 3529 8926 3094"));
console.log(luhnAlgorithm_OneLiner('4485275742308327'));
console.log(luhnAlgorithm_OneLiner('6011329933655299'));
console.log(luhnAlgorithm_OneLiner('123456789'));