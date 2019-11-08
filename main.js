
function guessApp(){
    var v = Math.floor(Math.random() * 10 + 1);
    var name = document.getElementById("name").value;
    
    if(name != ""){

        $(document).ready(function(){
        
        
            for(i=1;i<=15;i++){

            
                $(".box"+i).animate({
                    opacity:'1'
                });

            }
        
        
            $(".box"+v).animate({
                opacity:'0'
            });
        
            
         });
    }
    document.getElementById("name").value="";
    
}
