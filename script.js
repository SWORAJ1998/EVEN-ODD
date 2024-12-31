function check(){
    let NUM=document.getElementById('num').value
    NUM=parseFloat(NUM)
    if (NUM%2==0){
        document.getElementById('even').innerHTML="it is a even number"
    }
    else{
        document.getElementById('even').innerHTML="it is a odd number"
    }
 
}