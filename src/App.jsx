import './App.css'
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
import Counter from './counter';

function App() {
 
  function HandleClick () {
    alert('Button1 Clicked');
  }

  const HandleClick2 = () => {
    alert('Button2 Clicked')
  }

  const AddToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
     
      <h3>React Core Concepts</h3>

      {/* friends info */}

      <Friends></Friends>

      {/* Users information */}

      <Users></Users>

      {/* Team Players */}

      <Team></Team>

    {/* Counter making*/}

    <Counter></Counter>






      {/* button with event handler */}
      <button onClick={HandleClick}>Click1</button>
    <button onClick={HandleClick2}>Click2</button>
    <button onClick={() => {alert ('Button3 Clicked')}}>Click3</button>
    {/* difficult */}
    <button onClick={() => AddToFive (3)}>Click4</button>
      
    </>
  )
}

export default App
