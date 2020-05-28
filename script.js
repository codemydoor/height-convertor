let button = document.querySelector('.button')
button.onclick=function convert(e){
    let foot = document.querySelector('.feetbox')
    let inches = document.querySelector('.inchesbox')
    let result = document.querySelector('.countvalue')
    e.preventDefault();
    foot=parseInt(foot.value);
    inches = parseInt(inches.value);
    if(isNaN(foot) || isNaN(inches)){
        result.textContent === 0
    }else{
        let convertfeet = foot * 30.48;
        let convertinches = inches * 2.54
        const centimeterValue = convertfeet + convertinches;
        result.textContent = centimeterValue + " cm";
    }
   
   
};





