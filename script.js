function calculateBMI() {
    let feet = document.getElementById("feet").value;
    let inches = document.getElementById("inches").value;
    let weight = document.getElementById("weight").value;
    if (feet === "" || inches === "" || weight === "") {
        alert("Please enter your height (feet & inches) and weight.");
        return;
    }
    let totalInches = (parseInt(feet) * 12) + parseInt(inches);
    let heightInMeters = totalInches * 0.0254;
    let bmi = (weight / (heightInMeters ** 2)).toFixed(2);
    let result = document.getElementById("result");
    let category = document.getElementById("category");
    let dietTips = document.getElementById("diet-tips");
    let tipsBoxes = document.querySelectorAll(".tips-box");
    tipsBoxes.forEach(box => box.style.display = "none");
    result.innerText = `Your BMI: ${bmi}`;
    if (bmi < 18.5) {
        category.innerHTML = `Category: <span style="color:blue;">Underweight </span>`;
        document.getElementById("underweight").style.display = "block";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category.innerHTML = `Category: <span style="color:green;">Normal </span>`;
        document.getElementById("normal").style.display = "block";
    } else if (bmi >= 25 && bmi < 29.9) {
        category.innerHTML = `Category: <span style="color:orange;">Overweight </span>`;
        document.getElementById("overweight").style.display = "block";
    } else {
        category.innerHTML = `Category: <span style="color:red;">Obese </span>`;
        document.getElementById("obese").style.display = "block";
    }
    dietTips.style.display = "block";
    dietTips.scrollIntoView({ behavior: 'smooth' });
}
