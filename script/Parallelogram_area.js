function calculateParallelogramArea(){
    const base = getInputValueById('Parallelogram-base');
    // console.log(base)

    const height = getInputValueById('Parallelogram-height');
    // console.log(height)

    const area = base * height;
    console.log(area);

    setInnerTextById('Parallelogram-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.Value;
    const value = parseFloat(inputValueText);
    return value
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}