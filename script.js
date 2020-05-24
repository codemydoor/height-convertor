let button = document.querySelector('.button')
button.onclick=function convert(e){
    let foot = document.querySelector('.feetbox')
    let inches = document.querySelector('.inchesbox')
    let result = document.querySelector('.countvalue')
    e.preventDefault();
    foot=parseInt(foot.value);
    inches = parseInt(inches.value);
    if(isNaN(foot) || isNaN(inches)){
        result.textContent = 0
    }else{
        let convertfeet = foot * 12;
        const centimeterValue = convertfeet + inches;
        result.textContent = centimeterValue + " cm";
    }
   
   
};





