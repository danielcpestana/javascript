// IIFE -> Immediately invoked function expression

(function(altura){
    
    const sobrenome = 'Pestana'
    function criaNome(nome){
        return nome + ' '  + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Daniel'))
    }

    falaNome()
    console.log(`Altura: ` + altura + 'm' )
})(1.80);


