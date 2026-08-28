// Calculator function with the four basic operations: addition, subtraction, multiplication, and division
function calculator(operation, number1, number2) {
    switch (operation) {
        case 'addition':
            return number1 + number2;
        case 'subtraction':
            return number1 - number2;
        case 'multiplication':
            return number1 * number2;
        case 'division':
            return number1 / number2;
        default:
            return 0;
    }
}