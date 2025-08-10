function addValue(item){
    document.getElementById("result").value+=item
}
function getResult(){
    
    try {
        document.getElementById("result").value=eval(document.getElementById("result").value)
        
    } catch{
        document.getElementById("result").value="Don't Play whit me "

    }

}
function getclear(){
    document.getElementById("result").value=" "
}