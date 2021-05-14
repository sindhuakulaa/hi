import './child.css'

function sample(){
    const Samp=()=>{
        alert("is it clear for submission????") 
    }
    return(
<div>
    <h1 style={{color: "blue" , fontFamily: "cursive" ,}}>This is a heading</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
    <span>FirstName</span>
   <input id="i1" type="text" placeholder="entername"/>
   <span>LastName</span>
   <input id="i1" type="text" placeholder="entername"/>
   <span id="f3"></span>
   <button id="f" onClick={Samp}>Submit</button>
   

</div>

    );
}
export default sample;