function wish(name, message = "Hello"){
    console.log(`${message} ${name}`);
}

function wish2(name, message='Hello'){
    if(name){   //not defined
        console.log(`${message} ${name}`);
    }
    else{
        console.log('Hello Guest');
    }
}

wish('scott', 'Hi');
wish('Larry');
wish();

wish2('Mark', 'Hi')
wish2()