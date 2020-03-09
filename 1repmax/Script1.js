weight = document.getElementById("weight");
reps = document.getElementById("reps");
strenghtGenetics = document.getElementById("sg");
metrics = document.getElementById("metrics");
var metric = new Map();
metric.set(0, "kg");
metric.set(1, "lbs");
var div = document.getElementById("box"); //div tag with the list of 90% of 1rm to 10%
div.style.display = "none";
 
function calculation() { // takes all the formula result to avrage
    //calls all the formula functions
    Brzycki()
    McGlothin()
    Lombardi()
    OConner()
    Epley()

    //negative values not accepted
    if (weight.value < 0) {
        div.style.display = "none";
        console.log("Negative Values Are Not Accepted")
        document.getElementById("rm").innerHTML = "Negative Values Are Not Accepted";
    }
    //number needs to be greater or equal to 1
    else if (weight.value < 1 && weight.value >= 0) {
        div.style.display = "none";
        console.log("Please Input A Number Greater Than 1")
        document.getElementById("rm").innerHTML = "Please Input A Number Greater Than 1";
    }
    //Lifted weight is not accepted above 2000
    else if (weight.value > 2000) {
        div.style.display = "none";
        console.log("Nobody is that strong")
        document.getElementById("rm").innerHTML = "Nobody is that strong";
    }
    else {
        //else calculate the avrage of each formula
        if (reps.value > 1) {
            div.style.display = "block";
            console.log(strenghtGeneticsfunction())
            avrage = ((BResult + McResult + LResult + OResult + EResult) / 5) * strenghtGeneticsfunction()
            console.log(avrage)
            document.getElementById("rm").innerHTML = "Your One Rep Max Is " + Math.round(avrage * 10) / 10 + metric.get(metricsfunction());

            //calculates the 90%-10% of 1rm if the reps are above 1
            function percentageAvg() {

                let amount = [90 + "%", 80 + "%", 70 + "%", 60 + "%", 50 + "%", 40 + "%", 30 + "%", 20 + "%", 10 + "%"];
                let str = "";
                for (let i = amount.length - 1; i >= 0; i--) {
                    if (i == 0) {
                        //10%
                        str = Math.round((avrage * 0.9) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element0").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 1) {
                        //20%
                        str = Math.round((avrage * 0.8) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element1").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 2) {
                        //30%
                        str = Math.round((avrage * 0.7) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element2").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 3) {
                        //40%
                        str = Math.round((avrage * 0.6) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element3").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 4) {
                        //50%
                        str = Math.round((avrage * 0.5) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element4").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 5) {
                        //60%
                        str = Math.round((avrage * 0.4) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element5").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 6) {
                        //70%
                        str = Math.round((avrage * 0.3) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element6").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 7) {
                        //80%
                        str = Math.round((avrage * 0.2) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element7").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 8) {
                        //90%
                        str = Math.round((avrage * 0.1) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element8").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    console.log(amount[i] + " of your 1 rm is " + str);
                }

            }
            percentageAvg()


        }
        //if the reps equals to 1 then it displays the 1rm as lifted weight 
        else if (reps.value == 1) {
            div.style.display = "block";
            console.log(weight.value)
            document.getElementById("rm").innerHTML = "Your One Rep Max Is " + Math.round(weight.value * 10) / 10 + metric.get(metricsfunction());

            //calculates the 90%-10% of 1rm if the reps are equal to 1
            function percentageWe() {

                let amount = [90 + "%", 80 + "%", 70 + "%", 60 + "%", 50 + "%", 40 + "%", 30 + "%", 20 + "%", 10 + "%"];
                let str = "";
                for (let i = amount.length - 1; i >= 0; i--) {
                    if (i == 0) {
                        //10%
                        str = Math.round((weight.value * 0.9) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element0").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 1) {
                        //20%
                        str = Math.round((weight.value * 0.8) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element1").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 2) {
                        //30%
                        str = Math.round((weight.value * 0.7) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element2").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 3) {
                        //40%
                        str = Math.round((weight.value * 0.6) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element3").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 4) {
                        //50%
                        str = Math.round((weight.value * 0.5) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element4").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 5) {
                        //60%
                        str = Math.round((weight.value * 0.4) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element5").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 6) {
                        //70%
                        str = Math.round((weight.value * 0.3) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element6").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 7) {
                        //80%
                        str = Math.round((weight.value * 0.2) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element7").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    if (i == 8) {
                        //90%
                        str = Math.round((weight.value * 0.1) * 10) / 10 + metric.get(metricsfunction());
                        document.getElementById("element8").innerHTML = (amount[i] + " of your 1 rm is " + str);
                    }
                    console.log(amount[i] + " of your 1 rm is " + str);
                }

            }
            percentageWe()
        }
    }
}

//Shows either kg or lbs
function metricsfunction() {
    if (metrics.value == 0) {
        return 0
        //returns 0 which is used for the map to get the string kg
    }
    else if (metrics.value == 1) {
        return 1
        ////returns 1 which is used for the map to get the string lbs
    }
}

/* function that returns a number to multiply with the 1rm
numbers between range of 1-10 can be selected in the website in the strenght genetics list */
function strenghtGeneticsfunction() {
    if (strenghtGenetics.value == 1) {
        return 0.95
    }
    else if (strenghtGenetics.value == 2) {
        return 0.965
    }
    else if (strenghtGenetics.value == 3) {
        return 0.98
    }
    else if (strenghtGenetics.value == 4) {
        return 0.99
    }
    else if (strenghtGenetics.value == 5) {
        return 1
    }
    else if (strenghtGenetics.value == 6) {
        return 1.02
    }
    else if (strenghtGenetics.value == 7) {
        return 1.04
    }
    else if (strenghtGenetics.value == 8) {
        return 1.06
    }
    else if (strenghtGenetics.value == 9) {
        return 1.08
    }
    else if (strenghtGenetics.value == 10) {
        return 1.1
    }
}

//all the 1 rep max formulas, can be found here https://en.wikipedia.org/wiki/One-repetition_maximum
function Epley() {
    EResult = weight.value * (1 + (reps.value / 30))
}

function Brzycki() {
    BResult = (weight.value) / (1.0278 - (0.0278 * reps.value))
}

function McGlothin() {
    McResult = (100*weight.value) / (101.3 - (2.67123 * reps.value))
}

function Lombardi() {
    LResult = Math.pow(reps.value, 0.10) * weight.value
}

function OConner() {
    OResult = weight.value * (1 + (reps.value/40))
}


