console.log('Hello World!');

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    if ( i == 5 ) {
        console.log('force error');
        var a = 3 + z;
    }
}, 1000);

console.log('second instruction');