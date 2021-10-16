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
    let ingredientes = sugestion(qtdCarneTotal, randomSugs)
    
    result.innerHTML = '<p>'+qtdCarneTotal+'Kg de Carne</p><p>'
    +Math.ceil(qtdCervejaTotal)+' Latas(355ml) de cerveja</p><p>'
    +qtdBebidasTotal+' Litros de bebidas não alcoolicas</p>'
    if(sugs.checked){
        result.innerHTML += '<p>'+ingredientes+'</p>'
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
function sugestion(qtdCarneTotal, randomSugs){
    
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