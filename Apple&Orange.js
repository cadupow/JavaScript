function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Apple and Orange
    var fruits = apples.length + oranges.length;
    var applesInRange = 0;
    var orangesInRange = 0;
    for(let i = 0; i < fruits; i++){
        if(apples[i]+a >= s && apples[i]+a <= t){
            applesInRange += 1;
        }
        if(oranges[i]+b >= s && oranges[i]+b <= t){
            orangesInRange += 1;
        }
    }
    console.log(applesInRange);
    console.log(orangesInRange);
}
