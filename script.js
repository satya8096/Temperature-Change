const select1 = document.getElementById("select1");

const select2 = document.getElementById("select2");

let option;

let option1;

// Option 1 function 

function getOption(){

    option = select1.value

}

//  Option 2 function

function getOption1(){

    option1 = select2.value

}

// Display function

function changeTemperature(){

    const input = document.getElementById("input").value;

    const displayresult = document.getElementById("displayresult");

    // Celcious to faharenheat

    if(option=="Celcious" && option1 == "Faharenheat"){

        let a = 9/5

        let number = (a*parseInt(input))+32

        displayresult.innerHTML = `Result : ${number}  <sup>0</sup>F`
    }

    // Celcious to Kelvins

    else if(option=="Celcious" && option1 == "Kelvins"){

        displayresult.innerHTML = `Result : ${parseInt(input)+273}  <sup>0</sup>K`
    }

    // Celcious to Celcious

    else if(option=="Celcious" && option1 == "Celcious"){

        displayresult.innerHTML = `Result : ${parseInt(input)}  <sup>0</sup>C`
        
    }

    // Faharenheat to celcious

    else if(option=="Faharenheat" && option1 == "Celcious") {
        
        let a = 5/9

        let number = (a*(parseInt(input)-32))

        displayresult.innerHTML = `Result : ${number}  <sup>0</sup>C`
    }

    // Faharenheat to kelvins

    else if(option=="Faharenheat" && option1 == "Kelvins"){

        let a = 5/9

        let number = ((parseInt(input)-32)*a)+273.15

        displayresult.innerHTML = `Result : ${number}  <sup>0</sup>K`

    }
 
    // Faharenheat to Faharenheat

    else if(option=="Faharenheat" && option1 == "Faharenheat"){

        displayresult.innerHTML = `Result : ${parseInt(input)}  <sup>0</sup>F`
        
    }

    // Kelvins to Celcious

    else if(option=="Kelvins" && option1 == "Celcious"){

        displayresult.innerHTML = `Result : ${parseInt(input)-273}  <sup>0</sup>C`
    }

    // Kelvins to Faharenheat

    else if(option=="Kelvins" && option1 == "Faharenheat"){

        let a = 9/5

        let number = (((parseInt(input)-273.15)*a))+32

        displayresult.innerHTML = `Result : ${parseInt(input)+1}  <sup>0</sup>F`
        
    }

    // Kelvins to Kelvins

    else if(option=="Kelvins" && option1 == "Kelvins"){

        displayresult.innerHTML = `Result : ${parseInt(input)}  <sup>0</sup>K`

    }
    
}