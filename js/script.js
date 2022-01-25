// Declare Variables
var input = "";
var input2 = "";
var valueOne;
var valueTwo;
var method = "";
var total;

// Inputs For Value One

    function inputOne(){
        "use strict";
        input = input + "1";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputTwo(){
        "use strict";
        input = input + "2";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputThree(){
        "use strict";
        input = input + "3";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputFour(){
        "use strict";
        input = input + "4";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputFive(){
        "use strict";
        input = input + "5";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputSix(){
        "use strict";
        input = input + "6";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputSeven(){
        "use strict";
        input = input + "7";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputEight(){
        "use strict";
        input = input + "8";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputNine(){
        "use strict";
        input = input + "9";
        document.getElementById("printValueOne").innerHTML = input;
    }
    function inputZero(){
        "use strict";
        input = input + "0";
        document.getElementById("printValueOne").innerHTML = input;
    }

    // Inputs for Value Two
    function inputOne2(){
        "use strict";
        input2 = input2 + "1";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputTwo2(){
        "use strict";
        input2 = input2 + "2";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputThree2(){
        "use strict";
        input2 = input2 + "3";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputFour2(){
        "use strict";
        input2 = input2 + "4";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputFive2(){
        "use strict";
        input2 = input2 + "5";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputSix2(){
        "use strict";
        input2 = input2 + "6";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputSeven2(){
        "use strict";
        input2 = input2 + "7";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputEight2(){
        "use strict";
        input2 = input2 + "8";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputNine2(){
        "use strict";
        input2 = input2 + "9";
        document.getElementById("printValueTwo").innerHTML = input2;
    }
    function inputZero2(){
        "use strict";
        input2 = input2 + "0";
        document.getElementById("printValueTwo").innerHTML = input2;
    }

    // Math Methods

    function addd() {
        valueOne = parseInt(input);
        method = "add";
        document.getElementById("printMethodTwo").innerHTML = "";
        document.getElementById("printMethod").innerHTML = "+";
        document.getElementById("printValueOne").innerHTML = valueOne.toString();
        document.getElementById("inputOne").setAttribute("onclick", "inputOne2();")
        document.getElementById("inputTwo").setAttribute("onclick", "inputTwo2();")
        document.getElementById("inputThree").setAttribute("onclick", "inputThree2();")
        document.getElementById("inputFour").setAttribute("onclick", "inputFour2();")
        document.getElementById("inputFive").setAttribute("onclick", "inputFive2();")
        document.getElementById("inputSix").setAttribute("onclick", "inputSix2();")
        document.getElementById("inputSeven").setAttribute("onclick", "inputSeven2();")
        document.getElementById("inputEight").setAttribute("onclick", "inputEight2();")
        document.getElementById("inputNine").setAttribute("onclick", "inputNine2();")
        document.getElementById("inputZero").setAttribute("onclick", "inputZero2();")
        input = "";

        
    }

    function multiplyy() {
        valueOne = parseInt(input);
        method = "multiply";
        document.getElementById("printMethodTwo").innerHTML = "";
        document.getElementById("printMethod").innerHTML = "&times;";
        document.getElementById("printValueOne").innerHTML = valueOne.toString();
        document.getElementById("inputOne").setAttribute("onclick", "inputOne2();")
        document.getElementById("inputTwo").setAttribute("onclick", "inputTwo2();")
        document.getElementById("inputThree").setAttribute("onclick", "inputThree2();")
        document.getElementById("inputFour").setAttribute("onclick", "inputFour2();")
        document.getElementById("inputFive").setAttribute("onclick", "inputFive2();")
        document.getElementById("inputSix").setAttribute("onclick", "inputSix2();")
        document.getElementById("inputSeven").setAttribute("onclick", "inputSeven2();")
        document.getElementById("inputEight").setAttribute("onclick", "inputEight2();")
        document.getElementById("inputNine").setAttribute("onclick", "inputNine2();")
        document.getElementById("inputZero").setAttribute("onclick", "inputZero2();")
        input = "";

        
    }

    function subtractt() {
        valueOne = parseInt(input);
        method = "subtract";
        document.getElementById("printMethodTwo").innerHTML = "";
        document.getElementById("printMethod").innerHTML = "-";
        document.getElementById("printValueOne").innerHTML = valueOne.toString();
        document.getElementById("inputOne").setAttribute("onclick", "inputOne2();")
        document.getElementById("inputTwo").setAttribute("onclick", "inputTwo2();")
        document.getElementById("inputThree").setAttribute("onclick", "inputThree2();")
        document.getElementById("inputFour").setAttribute("onclick", "inputFour2();")
        document.getElementById("inputFive").setAttribute("onclick", "inputFive2();")
        document.getElementById("inputSix").setAttribute("onclick", "inputSix2();")
        document.getElementById("inputSeven").setAttribute("onclick", "inputSeven2();")
        document.getElementById("inputEight").setAttribute("onclick", "inputEight2();")
        document.getElementById("inputNine").setAttribute("onclick", "inputNine2();")
        document.getElementById("inputZero").setAttribute("onclick", "inputZero2();")
        input = "";

        
    }

    function dividee() {
        valueOne = parseInt(input);
        method = "divide";
        document.getElementById("printMethodTwo").innerHTML = "";
        document.getElementById("printMethod").innerHTML = "/";
        document.getElementById("printValueOne").innerHTML = valueOne.toString();
        document.getElementById("inputOne").setAttribute("onclick", "inputOne2();")
        document.getElementById("inputTwo").setAttribute("onclick", "inputTwo2();")
        document.getElementById("inputThree").setAttribute("onclick", "inputThree2();")
        document.getElementById("inputFour").setAttribute("onclick", "inputFour2();")
        document.getElementById("inputFive").setAttribute("onclick", "inputFive2();")
        document.getElementById("inputSix").setAttribute("onclick", "inputSix2();")
        document.getElementById("inputSeven").setAttribute("onclick", "inputSeven2();")
        document.getElementById("inputEight").setAttribute("onclick", "inputEight2();")
        document.getElementById("inputNine").setAttribute("onclick", "inputNine2();")
        document.getElementById("inputZero").setAttribute("onclick", "inputZero2();")
        input = "";

        
    }

    function powY() {
        valueOne = parseInt(input);
        method = "powerOfY";
        document.getElementById("printMethodTwo").innerHTML = "";
        document.getElementById("printMethod").innerHTML = "^";
        document.getElementById("printValueOne").innerHTML = valueOne.toString();
        document.getElementById("inputOne").setAttribute("onclick", "inputOne2();")
        document.getElementById("inputTwo").setAttribute("onclick", "inputTwo2();")
        document.getElementById("inputThree").setAttribute("onclick", "inputThree2();")
        document.getElementById("inputFour").setAttribute("onclick", "inputFour2();")
        document.getElementById("inputFive").setAttribute("onclick", "inputFive2();")
        document.getElementById("inputSix").setAttribute("onclick", "inputSix2();")
        document.getElementById("inputSeven").setAttribute("onclick", "inputSeven2();")
        document.getElementById("inputEight").setAttribute("onclick", "inputEight2();")
        document.getElementById("inputNine").setAttribute("onclick", "inputNine2();")
        document.getElementById("inputZero").setAttribute("onclick", "inputZero2();")
        input = "";

        
    }

    function sqrrt() {
        valueOne = parseInt(input);
        total = Math.sqrt(valueOne);
        document.getElementById("printValueOne").innerHTML = total.toFixed(4);
        input = total.toFixed(0);
            valueOne = total;
            valueTwo = 0;
            method = "";
            total = 0;
            input2 = "";


    }

    function cubrt() {
        valueOne = parseInt(input);
        total = Math.cbrt(valueOne);
        document.getElementById("printValueOne").innerHTML = total.toFixed(4);
        input = total.toFixed(0);
            valueOne = total;
            valueTwo = 0;
            method = "";
            total = 0;
            input2 = "";


    }

    function powTwo() {
        valueOne = parseInt(input);
        total = Math.pow(valueOne, 2);
        document.getElementById("printValueOne").innerHTML = total.toFixed(0);
        input = total.toFixed(0);
        valueOne = total;
        valueTwo = 0;
        method = "";
        total = 0;
        input2 = "";
    }


    // Calculating
    function equals(){
    valueTwo = parseInt(input2);
    document.getElementById("printMethodTwo").innerHTML = "";
  
        if (method == "add"){
            total = parseInt(valueOne) + parseInt(valueTwo);
            document.getElementById("printValueTwo").innerHTML = "";
            document.getElementById("printMethod").innerHTML = "";
            document.getElementById("printValueOne").innerHTML = total;
            input = total;
            valueTwo = 0;
            method = "";
            total = 0;
            input2 = "";
        } else {
            if (method == "multiply") {
            total = parseInt(valueOne) * parseInt(valueTwo);
            document.getElementById("printValueTwo").innerHTML = "";
            document.getElementById("printMethod").innerHTML = "";
            document.getElementById("printValueOne").innerHTML = total;
            input = total;
            valueTwo = 0;
            method = "";
            total = 0;
            input2 = "";

            } else {
                if(method == "subtract") {
            total = parseInt(valueOne) - parseInt(valueTwo);
            document.getElementById("printValueTwo").innerHTML = "";
            document.getElementById("printMethod").innerHTML = "";
            document.getElementById("printValueOne").innerHTML = total;
            input = total;
            valueTwo = 0;
            method = "";
            total = 0;
            input2 = "";
                } else {
                    if(method == "divide") {
                        total = parseInt(valueOne) / parseInt(valueTwo);
                        document.getElementById("printValueTwo").innerHTML = "";
                        document.getElementById("printMethod").innerHTML = "";
                        document.getElementById("printValueOne").innerHTML = total;
                        input = total;
                        valueTwo = 0;
                        method = "";
                        total = 0;
                        input2 = "";
                            } else {                             
                                if(method == "powerOfY") {
                                    total = Math.pow(parseInt(valueOne), parseInt(valueTwo));
                                    document.getElementById("printValueTwo").innerHTML = "";
                                    document.getElementById("printMethod").innerHTML = "";
                                    document.getElementById("printValueOne").innerHTML = total;
                                    input = total;
                                    valueTwo = 0;
                                    method = "";
                                    total = 0;
                                    input2 = "";
                                        } else {
                        
                                        }
                            }
                            }
                }
            }
        }


    // Clear


    function clearr(){
        input = "";
        input2 = "";
        valueOne = 0;
        valueTwo = 0;
        method = "";
        total = 0;
    document.getElementById("printValueOne").innerHTML = "0";
    document.getElementById("printValueTwo").innerHTML = "";
    document.getElementById("printMethod").innerHTML = "";
    document.getElementById("printMethodTwo").innerHTML = "";
    document.getElementById("inputOne").setAttribute("onclick", "inputOne();")
    document.getElementById("inputTwo").setAttribute("onclick", "inputTwo();")
    document.getElementById("inputThree").setAttribute("onclick", "inputThree();")
    document.getElementById("inputFour").setAttribute("onclick", "inputFour();")
    document.getElementById("inputFive").setAttribute("onclick", "inputFive();")
    document.getElementById("inputSix").setAttribute("onclick", "inputSix();")
    document.getElementById("inputSeven").setAttribute("onclick", "inputSeven();")
    document.getElementById("inputEight").setAttribute("onclick", "inputEight();")
    document.getElementById("inputNine").setAttribute("onclick", "inputNine();")
    document.getElementById("inputZero").setAttribute("onclick", "inputZero();")
    }