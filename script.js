const amount = document.getElementById("bill_input");
const reset_button = document.getElementById('reset_button');
const number_of_people = document.getElementById('number_of_people');
const error_message = document.getElementById('message');
let tip_amount = document.getElementById('tip_amount');
let eachPersonTotal = document.getElementById('total_bill');
let customInput = document.getElementById('custom-input');
let percentButtons = Array.from(document.getElementsByClassName('tip_buttons'));



percentButtons.map((button)=>{
    button.addEventListener('click',()=>{
        let percent = parseInt(button.textContent);
        let amount_number = Number(amount.value);
        if(Number(number_of_people.value)===0){return;} 
        let tip_for_person = (amount_number*percent/100)/Number(number_of_people.value);
        let total = (amount_number+amount_number*percent/100)/Number(number_of_people.value);
        tip_amount.textContent='$'+tip_for_person.toFixed(2);
        eachPersonTotal.textContent='$'+total.toFixed(2);
        customInput.value="";
        if(amount_number===0||number_of_people.value===0){
            tip_amount.textContent ='$0.00';
            eachPersonTotal.textContent = '$0.00';
        }
    })
})

customInput.addEventListener('input',(event)=>{
    if(customInput.value>0){
        reset_button.style.backgroundColor= "#26C2AE";
        let customNumber = Number(event.target.value);
        let amount_number = Number(amount.value);
        if(Number(number_of_people.value)===0){return;} 
        let tip_for_person = (amount.value*customNumber/100)/Number(number_of_people.value);
        let total = (amount_number+amount_number*customNumber/100)/Number(number_of_people.value);
        tip_amount.textContent='$'+tip_for_person.toFixed(2);
        eachPersonTotal.textContent='$'+total.toFixed(2);
    }else if(customInput.value<=0){
        event.target.value="";
    }    
})

amount.addEventListener("input",(event)=>{
    if(event.target.value<=0){
        amount.value=1;
    }else{
        reset_button.style.backgroundColor= "#26C2AE";
        let customNumber = Number(customInput.value);
        if(Number(number_of_people.value)===0){return;};    
        let tip_for_person = (event.target.value*customNumber/100)/Number(number_of_people.value);
        let total = (Number(event.target.value)+Number(event.target.value)*customNumber/100)/Number(number_of_people.value);
        tip_amount.textContent='$'+tip_for_person.toFixed(2);
        eachPersonTotal.textContent='$'+total.toFixed(2);
        console.log(total);
    }
})

number_of_people.addEventListener("input",(event)=>{
    if(event.target.value<=0){
        number_of_people.value=0;
        number_of_people.style.border = "2px solid #E17052";
        error_message.style.display="block";
    }else{
        error_message.style.display="none";
        number_of_people.style.border = "none";
        reset_button.style.backgroundColor= "#26C2AE";
        let customNumber = Number(customInput.value);
        let amount_number = Number(amount.value);
        if(Number(number_of_people.value)===0){return;}     
        let tip_for_person = (amount_number*customNumber/100)/number_of_people.value;
        let total = (amount_number+amount_number*customNumber/100)/number_of_people.value;
        tip_amount.textContent='$'+tip_for_person.toFixed(2);
        eachPersonTotal.textContent='$'+total.toFixed(2);
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
})




    
    