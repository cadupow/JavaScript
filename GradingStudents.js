function gradingStudents(grades) {
    // Grading Students
    var aux = 0;
    var result = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 38){
            result.push(grades[i]);
        }else if(grades[i] % 5 >= 3){
            aux = grades[i];
        for(let i = 0; aux % 5 != 0; i++){
            aux += 1;
            if(aux % 5 == 0){
                result.push(aux);
            }
        }
        }else{
            result.push(grades[i]);
        }
    }
    return result;
}
