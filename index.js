// Funcao de calculadora com as quatro operacoes basicas: soma, subtracao, multiplicacao e divisao
function calculadora(operacao, numero1, numero2) {
    switch (operacao) {
        case 'soma':
            return numero1 + numero2;
        case 'subtracao':
            return numero1 - numero2;
        case 'multiplicacao':
            return numero1 * numero2;
        case 'divisao':
            return numero1 / numero2;
        default:
            return 0;
    }
}