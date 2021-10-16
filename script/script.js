// carne - 400gr por pessoa. Se > 6 horas, 650;
// cerveja - 1200ml de cerveja. Se > 6 horas, 2000ml (crianças não contam)
// bebidas - 1000ml/pessoa. Se > 6 horas, 1500ml

//crianças valem 0,5

const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('childrens');
const hoursInput = document.getElementById('hours');
const sugs = document.getElementById('check')

const result = document.getElementById('result');

function printResult(){
    let qtdAdults = adultsInput.value;
    let qtdChildren = childrenInput.value;
    let qtdHours = hoursInput.value;
    if(qtdAdults <= 0 || qtdAdults == ''){
        alert('Sem adultos não há churrasco');
        location.reload();
    
    }
    else if(qtdHours <= 0 || qtdHours == ''){
        alert('Defina o tempo do seu churrasco');
        location.reload();
    }
    else{
    
    let qtdCarneTotal = (carnePP(qtdHours) * qtdAdults + (carnePP(qtdHours) / 2 * qtdChildren)) /1000
    let qtdCervejaTotal = ((cervejaPP(qtdHours) * qtdAdults)/355)
    let qtdBebidasTotal = ((bebidasPP(qtdHours) * qtdAdults)+ (bebidasPP(qtdHours)/2 * qtdChildren)) /1000
    let randomSugs = Math.floor(Math.random()*10)//cria numero randomico para selecionar um index do array que vai conter as receitas
    let ingredientes = ingredient(qtdCarneTotal, randomSugs)
    let preparo = prepare(randomSugs)
    
    result.innerHTML = '<p>'+qtdCarneTotal+'Kg de Carne</p><p>'
    +Math.ceil(qtdCervejaTotal)+' Latas(355ml) de cerveja</p><p>'
    +qtdBebidasTotal+' Litros de bebidas não alcoolicas</p>'
    if(sugs.checked){
        result.innerHTML += '<p>'+ingredientes+'</p><p>'+preparo+'</p>'
        }
    
    }
}
function carnePP(qtdHours){
    if(qtdHours >= 6){
        return 650;
    }
    else{
        return 400;
    }
}
function cervejaPP(qtdHours){
    if(qtdHours >= 6){
        return 2000
    }
    else{
        return 1200
    }
}
function bebidasPP(qtdHours){
    if(qtdHours >=6){
        return 1500
    }
    else{
        return 1000
    }
}
function ingredient(qtdCarneTotal, randomSugs){
    
    let primeiraSugs = "<br>Porco e Alcatra no espeto</p><p>Ingredientes:<p>"+(qtdCarneTotal * 0.6)+"Kg de Lombo de porco</p><p>"+(qtdCarneTotal * 0.2)+"Kg de linguicinha toscana</p><p>Vinagre de vinho tinto</p><p>Cebola, alho e sal a gosto</p>"
    let segundaSugs = "<br>Churrasco de Carneiro</p><p>Ingredientes:<p>"+(qtdCarneTotal)+"Kg de Carne de carneiro cortado em pedaços médios</p><p>Vinho branco Seco</p><p>1/2 copo de vinagre branco</p><p>1 cabeça de alho</p><p>Cebolas a gosto</p><p>1 xícara de azeite</p><p>Alecrim, pimenta do reino e sal a gosto</p>"
    let terceiraSugs = "<br>Picanha no forno</p><p>Ingredientes:<p>"+(qtdCarneTotal)+"Kg de Picanha</p><p>Sal grosso temperado</p>"
    let quartaSugs = "<br>Picanha Especial</p><p>Ingredientes:<p>"+(qtdCarneTotal)+"Kg de Picanha</p><p>Sal grosso temperado</p>"
    let quintaSugs = "<br>Churrasco gaúcho com aperitivo de linguiça toscana</p><p>Ingredientes:<p>"+(qtdCarneTotal * 0.8)+"Kg de Costela de gado</p><p>"+(qtdCarneTotal * 0.2)+"Kg de linguiça toscana</p><p>Sal grosso</p>"
    let sextaSugs = "<br>Espetinhos de coxão mole em cubos</p><p>Ingredientes:<p>"+(qtdCarneTotal * 0.8)+"kg de Coxão mole em cubos</p><p>"+(qtdCarneTotal * 0.2)+"Kg de bacon em tiras</p><p>Espetinhos de madeira</p><p>Pimenta do reino, Azeite e Sal a gosto</p>"
    let setimaSugs =  "<br>Picanha na manteiga verde</p><p>Ingredientes:<p>"+(qtdCarneTotal)+"kg de Picanha</p><p>"+(qtdCarneTotal * 0.25)+"Kg de Manteiga com sal</p><p>"+(qtdCarneTotal * 0.1)+"Kg de Alho sem casca</p><p>Salsa, Cebolinha e Sal a gosto"
    let oitavaSugs = "<br>Churrasco gaúcho com aperitivo de linguiça toscana</p><p>Ingredientes:<p>"+(qtdCarneTotal * 0.8)+"Kg de Costela de gado</p><p>"+(qtdCarneTotal * 0.2)+"Kg de linguiça toscana</p><p>Sal grosso</p>"
    let nonaSugs = "<br>Picanha Especial</p><p>Ingredientes:<p>"+(qtdCarneTotal)+"Kg de Picanha</p><p>Sal grosso temperado</p>"
    let decimaSugs = "<br>Porco e Alcatra no espeto</p><p>Ingredientes:<p>"+(qtdCarneTotal * 0.6)+"Kg de Lombo de porco</p><p>"+(qtdCarneTotal * 0.2)+"Kg de linguicinha toscana</p><p>Vinagre de vinho tinto</p><p>Cebola, alho e sal a gosto</p>"
    let sugsArray = [primeiraSugs, segundaSugs, terceiraSugs, quartaSugs, quintaSugs, sextaSugs, setimaSugs, oitavaSugs, nonaSugs, decimaSugs]
    
    return sugsArray[randomSugs]
    
}
function prepare(randomSugs){
    let primeiraRec = "<br>Misture o vinagre, a cebola cortada em tiras, o alho e o Sal.\
    <br>Colocar as carnes para marinar, no mínimo 2 horas, nesta mistura Coloque as carnes no espeto e então leve para a churrasqueira.\
    <br>Vire a carne com frequência para assar uniformemente até chegar no ponto desejado.\
    <br>De tempos em tempos, vá colocando o liquido em que elas ficaram marinando por cima das carnes\
    <br>Quando pronto, sirva com maionese e farofa" 
    let segundaRec = "<br>Separe a carne.\
    <br>Coloque metade do vinho e o restante dos ingredientes no liquidificador e bata bem.\
    <br>Em uma vasilha, coloque o molho do liquidificador junto com os pedaços de carneiro.\
    <br>Acrescente o restante do vinho.\
    <br>Deixe tudo de um dia para o outro na parte debaixo da geladeira até a hora do churrasco.\
    <br>Pode ser assado em grelha ou espeto."
    let terceiraRec = "<br>Em uma assadeira, coloque a picanha e cubra toda a superfície com o sal grosso temperado.\
    <br>Leve ao forno médio(180 graus), pré aquecido, por aproximadamente 55min, ou até que esteja pronto.\
    <br>Retire do forno e descarte a camada de sal.\
    <br>Fatie a carne e sirva em seguida o seu churrasco de forno."
    let quartaRec = "<br>Tendo em vista que a picanha tem o formato de triângulo, visualize a parte mais larga e centralize a faca no meio da peça.\
    <br>Inicie o corte até o final, na vertical, depois respeite a largura de 2 dedos e faça novamente mais um corte da vertical, resultando 2 porções de 600 g cada.\
    <br>Tempere a picanha com sal grosso 10 minutos antes de levar à grelha.\
    <br>Certifique-se que o braseiro esteja bem formado, evitando labaredas.\
    <br>Coloque a peça na grelha em uma altura de 30 cm da brasa, por aproximadamente 5 minutos de cada lado.\
    <br>Em seguida, eleve a peça a 40 cm da brasa, por aproximadamente 10 minutos, para a carne ficar do ponto para malpassada."
    let quintaRec = "<br>Espete a costela e a linguiça toscana.\
    <br>Coloque a linguiça toscana para assar.\
    <br>Espalhe o sal grosso pela costela.\
    <br>10 min após ter colocado a linguiça para assar, coloque a costela também.\
    <br>Quando assada, sirva a linguiça como aperitivo.\
    <br>Quando assada a costela, bata com as costas de uma faca nela, para tirar o excesso de sal.\
    <br>Sirva com arroz e salada de maionese"
    let sextaRec = "<br>Tempere os cubos de coxão mole com o azeite, o sal e a pimenta do reino.\
    <br>Para montar os espetinhos, coloque um cubo de carne e um pedaço de bacon.\
    <br>Continue até completar o espetinho e repita estre processo nos demais.\
    <br>Leve à churrasqueira em fogo brando.\
    <br>Quando os espetinhos estiverem dourados, retire da churrasqueira.\
    <br>Prato pronto é só servir e bom apetite! O tempo de preparo depende do braseiro utilizado.\
    <br>Vale lembrar que o fogo muito alto, vai dourar por fora e não vai assar por dentro."
    let setimaRec = "<br>Bata no processador: A salsa, cebolinha, alho e o Anjinomoto.\
    <br>Acrescente a manteiga e bata até ficar bastante cremoso.\
    <br>Coloque toda a mistura no freezer por 15 minutos.\
    <br>Corte a picanha em fatias da largura de 2 dedos e polvilhe sal a gosto.\
    <br>Coloque as fatias em uma grelha(quente) para assar por 3min 30segundos de cada lado.\
    <br>Sirva a picanha em seguida com a manteiga verde por cima (uma colher de sopa)."
    let oitavaRec = "<br>Espete a costela e a linguiça toscana.\
    <br>Coloque a linguiça toscana para assar.\
    <br>Espalhe o sal grosso pela costela.\
    <br>10 min após ter colocado a linguiça para assar, coloque a costela também.\
    <br>Quando assada, sirva a linguiça como aperitivo.\
    <br>Quando assada a costela, bata com as costas de uma faca nela, para tirar o excesso de sal.\
    <br>Sirva com arroz e salada de maionese"
    let nonaRec = "<br>Tendo em vista que a picanha tem o formato de triângulo, visualize a parte mais larga e centralize a faca no meio da peça.\
    <br>Inicie o corte até o final, na vertical, depois respeite a largura de 2 dedos e faça novamente mais um corte da vertical, resultando 2 porções de 600 g cada.\
    <br>Tempere a picanha com sal grosso 10 minutos antes de levar à grelha.\
    <br>Certifique-se que o braseiro esteja bem formado, evitando labaredas.\
    <br>Coloque a peça na grelha em uma altura de 30 cm da brasa, por aproximadamente 5 minutos de cada lado.\
    <br>Em seguida, eleve a peça a 40 cm da brasa, por aproximadamente 10 minutos, para a carne ficar do ponto para malpassada."
    let decimaRec = "<br>Misture o vinagre, a cebola cortada em tiras, o alho e o Sal.\
    <br>Colocar as carnes para marinar, no mínimo 2 horas, nesta mistura Coloque as carnes no espeto e então leve para a churrasqueira.\
    <br>Vire a carne com frequência para assar uniformemente até chegar no ponto desejado.\
    <br>De tempos em tempos, vá colocando o liquido em que elas ficaram marinando por cima das carnes\
    <br>Quando pronto, sirva com maionese e farofa" 
    let recArray = [primeiraRec, segundaRec, terceiraRec, quartaRec, quintaRec, sextaRec, setimaRec, oitavaRec, nonaRec, decimaRec]

    return recArray[randomSugs]
}