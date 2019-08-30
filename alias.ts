type Name = string;
type NameResolver = () => string;
//type NameResolver = Name | NameResolver;

function getName(n: NameResolver): Name{
    if (typeof n == "string"){
        return n;
    }
    else{
        return n();
    }

}