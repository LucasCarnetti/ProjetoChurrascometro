// carne - 400gr por pessoa. Se > 6 horas, 650;
// cerveja - 1200ml de cerveja. Se > 6 horas, 2000ml (crianças não contam)
// bebidas - 1000ml/pessoa. Se > 6 horas, 1500ml

//crianças valem 0,5

const adultsInput = document.getElementById('adults');
const childrenInput = document.getElementById('childrens');
const hoursInput = document.getElementById('hours');

const result = document.getElementById('result');

function printResult(){
    let qtdAdults = adultsInput.value;
    let qtdChildren = childrenInput.value;
    let qtdHours = hoursInput.value;

    let qtdCarneTotal = (carnePP(qtdHours) * qtdAdults + (carnePP(qtdHours) / 2 * qtdChildren)) /1000
    let qtdCervejaTotal = ((cervejaPP(qtdHours) * qtdAdults)/355)
    let qtdBebidasTotal = ((bebidasPP(qtdHours) * qtdAdults)+ (bebidasPP(qtdHours)/2 * qtdChildren)) /1000
    result.innerHTML = '<p>'+qtdCarneTotal+'Kg de Carne</p><p>'
    +Math.ceil(qtdCervejaTotal)+' Latas(355ml) de cerveja</p><p>'
    +qtdBebidasTotal+' Litros de bebidas não alcoolicas</p>'
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