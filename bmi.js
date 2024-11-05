document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const weightInput = document.querySelector('#bmi-form input[name="weight"]');
    const heightInput = document.querySelector('#bmi-form input[name="height"]');
    const weightUnit = document.getElementById('weightUnit');
    const heightUnit = document.getElementById('heightUnit');
    const bmiOutput = document.getElementById('bmi');
    const descOutput = document.getElementById('desc');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('form submitted');
        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value);
        console.log('Parsed Weight:', weight);
        console.log('Parsed Height:', height);
        
        if (weightUnit.value === 'pounds') {
            weight *= 0.453592; 
        }
        
        if (heightUnit.value === 'inches') {
            console.log('height unit is inches');
            height *= 0.0254; 
        } else if (heightUnit.value === 'cm') {
            console.log('height unit is cm');
            height /= 100; 
        }
        else{
            console.log('height is in meters');
        }
        console.log('height after covertion',height);
        console.log('Converted Weight:', weight);
        console.log('Converted Height:', height);

        console.log('weight(kg)',weight);
        console.log('height(m)',height);

        let bmi = weight / (height * height);

        console.log('BMI:', bmi);

        bmiOutput.textContent = bmi.toFixed(1);
        if (bmi < 18.5) {
            descOutput.textContent = 'You are underweight';
            bmiOutput.className= 'underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            descOutput.textContent = 'You are healthy';
            bmiOutput.className= 'healthy';
        } else if (bmi >= 25 && bmi < 30) {
            descOutput.textContent = 'You are overweight';
            bmiOutput.className= 'overweight';
        } else {
            descOutput.textContent = 'You are obese';
            bmiOutput.className= 'obese';
        }
    });
    document.querySelector('.reset_button button').addEventListener('click', function() {
        console.log('reset button clicked');
        form.reset();
        bmiOutput.textContent = '0';
        descOutput.textContent = 'N/A';
        bmiOutput.className = ''
    });
});
