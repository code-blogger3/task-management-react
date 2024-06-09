import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  return(  <>

  {boards.lenght> 0?
<>
<Header
  setIsBoardModalOpen={setIsBoardModalOpen}
  isBoardModalOpen={isBoardModalOpen}
/>
  <Sidebar/>
</>  :

<head>hhh</head>
}

  </>)
}
  

export default App;
