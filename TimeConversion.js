function timeConversion(s){
    // Time conversion
    var military = "";
    var numberToString = "";
    var aux = Number(s[1]);
    var aux2 = Number(s[0]);
    if(s.indexOf('AM') > -1 && aux == 2 && aux2 == 1){
        military += "00";
        for(let i = 2; i < s.length - 2; i++){
            military += s[i];
        }
    }else if(s.indexOf('AM') > -1){
        for(let i = 0; i < s.length - 2; i ++){
            military += s[i];
        }
    } else{
        if(aux == 2 && aux2 == 1){
            military += "12";
        }else if(aux == 0 || aux == 1){
            aux = aux + 22;
            numberToString = aux.toString();
            military += numberToString;
        }else {
            aux = 12 + aux;
            numberToString = aux.toString();
            military += numberToString;
        }
        for(let i = 2; i < s.length -2; i++){
            military += s[i];
        }
    }
    return (military);
}
