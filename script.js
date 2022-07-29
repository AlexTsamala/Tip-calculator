const amount = document.getElementById("bill_input");
const reset_button = document.getElementById('reset_button');
const number_of_people = document.getElementById('number_of_people');
const error_message = document.getElementById('message');
let tip_amount = document.getElementById('tip_amount');
let eachPersonTotal = document.getElementById('total_bill');
let customInput = document.getElementById('custom-input');
let percentButtons = Array.from(document.getElementsByClassName('tip_buttons'));
let percent;
let colorChanger ;
function updateInfo(){
    let amount_number = Number(amount.value);
    if(Number(number_of_people.value)===0||!percent){return} 
    let tip_for_person = (amount_number*percent/100)/Number(number_of_people.value);
    let total = (amount_number+amount_number*percent/100)/Number(number_of_people.value);
    tip_amount.textContent='$'+tip_for_person.toFixed(2);
    eachPersonTotal.textContent='$'+total.toFixed(2);
    
    if(amount.value.length>6){
        tip_amount.style.fontSize = "30px";
        eachPersonTotal.style.fontSize = "30px";
    }

    if(amount.value.length>12){
        tip_amount.style.fontSize = "20px";
        eachPersonTotal.style.fontSize = "20px";
    }
}

percentButtons.map((button)=>{
        button.addEventListener('click',(event)=>{
            
            
            if(colorChanger!=undefined){
                colorChanger.style.backgroundColor ="#00474B";
                colorChanger.style.color = "#FFFFFF";
            } 
            event.target.style.backgroundColor ="#26C2AE";
            event.target.style.color = "#00474B";
            colorChanger = event.target;
            percent = parseInt(button.textContent);
            updateInfo();
            customInput.value="";
    })
})

customInput.addEventListener('input',(event)=>{
    if(customInput.value>0){
        reset_button.style.backgroundColor= "#26C2AE";
        percent=event.target.value;
        updateInfo();
    }else if(customInput.value<=0){
        customInput.value="";
    }
    colorChanger.style.backgroundColor ="#00474B";
    colorChanger.style.color = "#FFFFFF";    
})

amount.addEventListener("input",(event)=>{
    if(event.target.value<=0){
        amount.value=1;
    }else{
        reset_button.style.backgroundColor= "#26C2AE";
        updateInfo();
    }
})

number_of_people.addEventListener("input",(event)=>{
    if(number_of_people.value % 1 != 0){
        number_of_people.value=Math.round(number_of_people.value);
    }
    if(event.target.value<=0){
        number_of_people.value=0;
        number_of_people.style.border = "2px solid #E17052";
        error_message.style.display="block";
    }else{
        error_message.style.display="none";
        number_of_people.style.border = "none";
        reset_button.style.backgroundColor= "#26C2AE";
        updateInfo()
    }
})

reset_button.addEventListener('click',()=>{
    amount.value="";
    number_of_people.value="";
    reset_button.style.backgroundColor= "#0D686D";
    error_message.style.display="none";
    number_of_people.style.border = "none";
    tip_amount.textContent= '$0.00';
    eachPersonTotal.textContent = '$0.00';
    customInput.value="";
    tip_amount.style.fontSize = "48px";
    eachPersonTotal.style.fontSize = "48px";
    colorChanger.style.backgroundColor ="#00474B";
    colorChanger.style.color = "#FFFFFF";
})




    
    