document.addEventListener("DOMContentLoaded", function(){
    //initialize links to DOM
    const sumOutputField = document.querySelector(".sum");
    const plusButton = document.querySelector(".plus");
    const minusButton = document.querySelector(".minus");
    const numberInput = document.querySelector("input");

    //add event listeners
    plusButton.addEventListener("click", function(event){
        event.preventDefault();
        addNumber(numberInput.value);
    });
    minusButton.addEventListener("click", function(event){
        event.preventDefault();
        addNumber(-numberInput.value);
    });
    plusButton.addEventListener("mouseover", function(event){
        invertColors(event.target);
    });
    minusButton.addEventListener("mouseover", function(event){
        invertColors(event.target);
    });    
    plusButton.addEventListener("mouseout", function(event){
        restoreColors(event.target);
    });
    minusButton.addEventListener("mouseout", function(event){
        restoreColors(event.target);
    });  

    //app functions
    function addNumber(thisNumber){  // add the input number to the existing output number.  Turn it red if the new sum is negative
        let newSum = parseInt(sumOutputField.innerText) + parseInt(thisNumber);
        if (newSum < 0){
            sumOutputField.style.color = "#FF0000";
        } else {
            sumOutputField.style.color = "#000000";
        }
        sumOutputField.innerText = newSum;
    }

    function invertColors(thisButton){ // invert colors of + & - buttons when mouse is over them
        thisButton.style.color = "#a9a9a9";
        thisButton.style.backgroundColor = "#FFFFFF";
    }

    function restoreColors(thisButton){  // change colors of + & - buttons back to normal when mouse moves away
        thisButton.style.color = "#FFFFFF";
        thisButton.style.backgroundColor = "#a9a9a9";
    }
})