// this objeto hace referencia al contexto donde se esta ejecutando la funcion
// this no hace referecnia al obj, sino al la funcion de bar, por lo que no puede referencia a bar
var obj = {
    foo: function() { return 'foo'},
    bar: function() {
        document.addEventListener('click', function(event){
            this.foo; //error 
        })
    }
}

// this remediar ese conflicto del cotexto, bind enlaza el this del contexto de obj y permite usarlo ya en la funcion bar ES5
var obj2 = {
    foo: function() { return 'foo'},
    bar: function() {
        document.addEventListener('click', function(event){
            this.foo; //error 
        }).bind(this)
    }
}

// con ES6 se soluciona eso usando arrow functions ya que lleva implicito el bind
var obj2 = {
    foo: () => {return 'foo'},
    bar: () => {
        document.addEventListener('click', event => {
            this.foo;
        })
    }
}