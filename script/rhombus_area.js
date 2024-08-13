function calculateRhombusArea(){
    const p1 = getInputValueById('rhombus-p1')
    // console.log(p1);

    const p2 = getInputValueById('rhombus-p2');
    // console.log(p2)

    const area = 0.5 * p1 * p2;
    // console.log(area)

    setInnerTextById('rhombus-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}