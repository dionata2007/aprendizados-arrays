const notas1 = [5.6, 9, 8.5, 7];
const notas2 = [8.4, 5.2, 9];
const notas3 = [4.4, 8.1,];
const notas4 = [9.5, 7.2, 8];

const notasGerais = [notas1, notas2, notas3, notas4];

let media = 0;

for (let i = 0; i <notasGerais.length; i++) {
    for (let j = 0; j <notasGerais[i].length; j++) {
        media += notasGerais[i][j] / notasGerais[i].length;
    }
}
media = media / notasGerais.length;

console.log(media);