function validate(){

    let output = document.getElementById("invalid")
    let form = document.querySelector("form");
    let invalid = [];
    Array.from(form).filter((input) => input.type !== "submit" &&  input.type !== "fieldset").forEach((input) => { 
        if(input.value.trim() == null || input.value.trim() == "") invalid.push(input.name)
    });

    if(invalid.length > 0){
        output.innerHTML = "The following fields cannot be empty: "
        invalid.forEach(x => output.innerHTML += "<br>" + x) 
        return false;
    }
    return true;
    
}

