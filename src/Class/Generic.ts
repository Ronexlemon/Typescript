function identity<Type>(arg:Type):Type{
    return arg;
}

console.log("the number is", identity<string>("hello"))


