function staircase(n) {
    // Staircase
    var aux = n;
    for(let i = 0; i < n; i++){
        var step = "";
        for(let e = 0; e < n; e++){
            if(e == aux - 1){
                break;
            }
            step = step + " ";
        }
        for(let j = aux; j <= n; j++){
            step = step + "#";
        }
        console.log(step);
        aux -= 1;
    }
}
