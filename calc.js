const calci=(a ,b,op)=>{
   switch(op){

    case "+" : console.log("additon= ",a+b);
    break;
    case "-" : console.log("substraction= ",a-b);
    break;
    case "*" : console.log("multiplication= ",a*b);
    break;
    case "/" : console.log("division= ",a/b);
    break;
    default : console.log("envalid option");

   }
}
calci(5,6,"+");
calci(10,6,"-");
calci(5,6,"*");
calci(4,2,"/");
