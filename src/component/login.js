import './login.css';


function Teste(){
    const demo=()=>{
        alert(new Date());
        var fn=document.getElementById("x").value;
        var ln=document.getElementById("xx").value;
        document.getElementById("z").innerHTML=fn+ln;

        alert("eelldo")
    }
    
return(
    <div className="main">
        <span>MyFirstName</span>
   <input id="x" type="text" placeholder="entername"/>
   <span>LastName</span>
<input id="xx"type="text" placeholder="eneter Lastname" />
<span>Gmail</span>
<input id="ffff" type="text" placeholder="abc@gmail.com"/>
<span  id ="z" >
</span>
<div>
<button id="a" onClick={demo}>Submit</button>
</div>



    </div>
)
}
export default Teste;