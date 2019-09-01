namespace	MySpace	{
export	class MyClass { 
public static myProperty: number = 1;
}
}

 console.log(MySpace.MyClass.MyProperty);
import {MySpace} from 'namespace.ts';	
console.log(MySpace.MyClass.MyProperty);
