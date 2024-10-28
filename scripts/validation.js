function validate(){

    let invalid = [];
    let valid = [];
    Array.from(document.querySelector("form")).filter((input) => input.type !== "submit" &&  input.type !== "fieldset").forEach((input) => { 
        if(input.value.trim() == null || input.value.trim() == ""){
            invalid.push(input.name + "Validation");
        }
        else{
            valid.push(input.name + "Validation");
        }
    });

    valid.forEach(f => document.getElementById(f).innerHTML = null)  
    if(invalid.length > 0){
        invalid.forEach(f => document.getElementById(f).innerHTML = "This field cannot be empty")        
        return false;
    }
    return true;  
}

