const buttons=document.querySelectorAll('button');
const inp=document.getElementById('inp');

for(let button of buttons){
    button.addEventListener('click',(e)=>{
        // e.target contains the reference of the button clicked
        const btntext=e.target.innerText;
        // console.log(btntext);
        if(btntext==='C')
        inp.value="";
        else if(btntext==='x')
        inp.value+='*'
        else if(btntext=='⬅'){
            inp.value=inp.value.slice(0,-1);
        }
        else if(btntext==='='){
        try{
        inp.value=eval(inp.value);
        }
        catch(e){
            inp.value='Invalid operation'
        }
        }
        
        else
        inp.value+=btntext;
    })
}