function calculadora(){

    do{
        var operacao = Number(prompt('Escolha uma operação:\n1 - Soma(+)\n2 - Subtração (-) \n' +
        '3 - Multiplicação (*)\n4 - Divisão Real (/)\n5 - Divisão Inteira (%)\n' +
        '6 - Potenciação(**)\n0 - Para cancelar'))

        if(operacao == 0){
            alert('Operação cancelada.');
        }else if(isNaN(operacao) || operacao < 0  || operacao > 6){
            alert('Informe uma operação válida')
        }
        else{            
            let n1 = Number(prompt('Numero: '))
            let n2 = Number(prompt('Numero: '))

            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
            }

            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
            }

            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} x ${n2} = ${resultado}`)
            }

            function divisao_real(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
            }

            function divisao_inteira(){
                resultado = n1 % n2
                //alert(`${n1} / ${n2} = ${resultado}`)
                alert(`O resto da divisão de ${n1} e ${n2} = ${resultado}`)
            }

            function potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} ^ ${n2} = ${resultado}`)
            }
        }
        /*            
        if(operacao == 1) soma()
        else if (operacao == 2) subtracao()
        else if (operacao == 3) multiplicacao()
        else if (operacao == 4) divisao_real()
        else if (operacao == 5) divisao_inteira()
        else if (operacao == 6) potenciacao()
        else ('Digite um valor válido.')
        }
        */
       switch(operacao){
            case 1:
                soma()
                break
            case 2:
                subtracao()
                break
            case 3:
                multiplicacao()
                break
            case 4:
                divisao_real()
                break
            case 5:
                divisao_inteira()
                break
            case 6:
                potenciacao()
                break
            
       }
    }while(operacao != 0)

        
        
        
       


}

calculadora();








