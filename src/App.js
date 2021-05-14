import './App.css'
import Login from "./component/login"
import Child from "./component/child1"

function Hello(){
  return(
    <div className="main2">
      <h1 className="main1">Welcome</h1>
      <Login></Login>
      <Child></Child>
      
    </div>

  );
}
export default Hello;