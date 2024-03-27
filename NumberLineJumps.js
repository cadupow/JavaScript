function kangaroo(x1, v1, x2, v2) {
    // Number Line Jumps
    var meet = "";
    if(x1 == x2){
        meet = "YES";
    }else if(x1 > x2 && v1 >= v2){
        meet = "NO";
    } else if(x2 > x1 && v2 >= v1){
        meet = "NO";
    } else if(x1 > x2){
            for(let i = 1; i != 0; i++){
                x1 += v1;
                x2 += v2;
                if(x1 == x2){
                    meet = "YES";
                    break;
                } else if(x2 > x1){
                    meet = "NO";
                    break;
                }
            }
        }else{
            for(let i = 1; i != 0; i++){
                x1 += v1;
                x2 += v2;
                if(x1 == x2){
                    meet = "YES";
                    break;
                } else if(x1 > x2){
                    meet = "NO";
                    break;
                }
            }
        }
    return meet;
}
