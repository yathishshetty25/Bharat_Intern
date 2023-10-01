document.getElementById("convert").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("temp").value);
    const unit = document.getElementById("unit").value;
    let result = "";

    if (!isNaN(temperature)) {
        if (unit === "celsius") {
            const fahrenheit = (temperature * 9/5) + 32;
            const kelvin = temperature + 273.15;
            result = `${temperature}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
        } else if (unit === "fahrenheit") {
            const celsius = (temperature - 32) * 5/9;
            const kelvin = (temperature - 32) * 5/9 + 273.15;
            result = `${temperature}°F is ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
        } else if (unit === "kelvin") {
            const celsius = temperature - 273.15;
            const fahrenheit = (temperature - 273.15) * 9/5 + 32;
            result = `${temperature}K is ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
        }
    } else {
        result = "Please enter a valid temperature.";
    }

    document.getElementById("output").textContent = result;
});