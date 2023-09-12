// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"

    function checkNumbers (num){
        if(num > 0){
            return "დადებითი"
        }
        else{
            return "უარყოფითი"
        }
    }
    const test = checkNumbers(2)
    console.log (test);

// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე

    function getSum (){
        let sum = 0 
        for( let i = 0 ; i <100 ; i++){
            sum += i
        }
        return sum
    }

    console.log(getSum());


// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი

    function evenOrOdd (number){
        if (number % 2 ===0) {
            return "ლუწი"
        }
        else{
            return "კენტი"
        }
    }
    console.log(evenOrOdd(3));


// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

    const car = {
        year: 2018,
        model: "Mercedes",
    };

    function getAge(object) {
        const age = 2023 - object.year;
        return age;
    }

    console.log(getAge(car));


// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი

    function findMaxNumber(number){
        let max = number[0]
        for (let i = 0; i < number.length; i++) {
            if(max < number[i]){
                max = number[i]
            }
        }
        return max
    }
    const numbers = [17, 25, 167, 28, 18, 41];
    const maxNumber = findMaxNumber(numbers);
    console.log(maxNumber)



// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

    function findSmallestNumber(number) {
        let min = number[0]
        for(let i = 1 ; i<number.length ; i++){
            if(min>number[i]){
                min = number[i]
            }
        }
        return min
    }
    const smallestNumber = findSmallestNumber(numbers);
    console.log(smallestNumber)

// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"

function getReverseWord(word) {
    
    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");
    return reversedWord;
}
console.log(getReverseWord("ლექცია")); 
