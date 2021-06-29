~~~javacript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
     if(qtdeCarrosVendidos === 0 || valorTotalVendas === 0) {
       return 2000
     } else {
       return 2000 + ((100 + .05*(valorTotalVendas / qtdeCarrosVendidos)) * qtdeCarrosVendidos)
     }
}
~~~