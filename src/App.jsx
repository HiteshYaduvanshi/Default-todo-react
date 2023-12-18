import Header from "./Components/Header";
import Inputbox from "./Components/Inputbox";
import ListBox from "./Components/ListBox";

function App() {
  
  return (
    <>
      <div className='w-full min-h-screen bg-[url("./img/bg.jpg")] bg-center bg-cover bg-no-repeat flex justify-center items-center flex-col overflow-hidden'>
        <Header heading="TO-DO" />
        <Inputbox/>
        <ListBox/>
      </div>
    </>
  );
}

export default App;
