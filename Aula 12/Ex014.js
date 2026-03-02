const agora = new Date();
const diaSemana = agora.getDay();
const hora = agora.getHours();

/*
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/

switch (diaSemana) {
    case 1:
        console.log('Restaurante Fechado - Folga da Equipe');
        break;

    case 0:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        if (hora >= 18 && hora < 23){
            console.log('Restaurante Aberto - Pode entrar!')
        } else {
            console.log('Restaurante Fechado - Fora do horário de expediente');
        }
        break;

    default:
        console.log('[ERRO] Falha ao ler o relógio do sistema');
        break;
}
