// -------------special-function----------- 
// ----------------pentagon---------------
function calculatePentagon() {
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerText('pentagon', area)
}

function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// --------ellipse-------
function calculateEllipse() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerText('ellipse', area);
}

// ---------------rhombus----------
function calculateRhombus() {
    const majorInput = getInputValue('rhombus-major');
    const minorInput = getInputValue('rhombus-minor');
    const area = 0.5 * majorInput * minorInput;
    setInnerText('rhombus', area);
}