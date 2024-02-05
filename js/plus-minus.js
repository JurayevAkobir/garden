const plusMinus = document.querySelectorAll(".plus_minus "),
    plus = document.querySelectorAll(".plus_btn"),
    value = document.querySelectorAll(".value"),
    minus = document.querySelectorAll(".minus_btn");


plus.forEach(element => {
    let counter = 0;
    element.addEventListener("click", () => {
        value.textContent = counter;
        counter++;

    })
console.log(element);

});

// minus.forEach(element => {
//     minus.addEventListener("click", () => {
//         if (counter > 0) { counter--; }
//         value.textContent = counter;
//     })
    
// });

