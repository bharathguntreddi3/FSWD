// only ine and the last parameter can be the Rest Parameter
function wish(message, ... names){
    for (let n of names){
        console.log(`${message} ${names}`)
    }
}

wish('Hello', 'Jack', 'Joe', 'Andy')

wish('Hi')