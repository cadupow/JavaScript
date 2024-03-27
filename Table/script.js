function gerarTabela(aluno){
    var acumulado = "<table>"
    + "<thead>"
    + "<th>Nome</th>"
    + "<th>RA</th>"
    + "<th>P1</th>"
    + "<th>P2</th>"
    + "<th>Média</th>"
    + "</thead>"
    + "<tbody>";
    var mediaP1 = 0;
    var mediaP2 = 0;
    var aprovados = 0;
    var reprovados = 0;
    for(let i = 0; i < aluno.length; i++){
            aluno[i].media = (aluno[i].p1 + aluno[i].p2)/2;
            acumulado += "<tr>"
            + "<td>" + aluno[i].nome + "</td>"
            + "<td>" + aluno[i].ra + "</td>"
            if(aluno[i].p1 < 6){
                acumulado += "<td class='reprovado'>" + aluno[i].p1 + "</td>";
            } else{
                acumulado += "<td class='aprovado'>" + aluno[i].p1 + "</td>";
            }
            if(aluno[i].p2 < 6){
                acumulado += "<td class='reprovado'>" + aluno[i].p2 + "</td>";
            } else{
                acumulado += "<td class='aprovado'>" + aluno[i].p2 + "</td>";
            }
            if(aluno[i].media < 6){
                acumulado += "<td class='reprovado'>" + aluno[i].media + "</td>";
                reprovados++;
            } else{
                acumulado += "<td class='aprovado'>" + aluno[i].media + "</td>";
                aprovados++;
            }
            acumulado += "</tr>";
            mediaP1 += aluno[i].p1;
            mediaP2 += aluno[i].p2;
    }
    mediaP1 = mediaP1/aluno.length;
    mediaP2 = mediaP2/aluno.length;
    acumulado += "<tr>"
    + "<td colspan='2' class='media'>Média da Turma</td>";
    if(mediaP1 < 6){
        acumulado += "<td class='reprovado'>" + mediaP1 + "</td>";
    } else{
        acumulado += "<td class='aprovado'>" + mediaP1 + "</td>";
    } if(mediaP2 < 6){
        acumulado += "<td class='reprovado'>" + mediaP2 + "</td>";
    } else{
        acumulado += "<td class='aprovado'>" + mediaP2 + "</td>";
    }
    acumulado += "</tr>"
    + "</tbody>"
    + "</table>"
    + "<p>Quantidade de <span class='aprovado'>aprovados</span>: " + aprovados + "</p>"
    + "<p>Quantidade de <span class='reprovado'>reprovados</span>: " + reprovados + "</p>";
    document.write(acumulado);
}