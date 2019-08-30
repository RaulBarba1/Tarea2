interface withLength {
    length: number;
}

function echo<T extends withLength> (arg: T){
    console.log(arg.length);
    return arg;
}
let a = echo ("aaa");
let t = echo({length: 2, name: "aa"});

//let b=echo(1);
