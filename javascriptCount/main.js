
    function myFunction(text){
    var val = document.getElementById("name").value;
    var x = val.length;
    var z = val.toLowerCase();
    console.log(x);
    console.log(z);
    

    
 
    let vowel = ["a", "e", "i", "o", "u"]
    let count = 0;
    for(let value of z ){
        if (vowel.includes(value)) {
            count++;
            
        }

        console.log(count);
    }

    
    
    
}
