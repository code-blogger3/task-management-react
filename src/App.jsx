import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  return(  <>
  <Header
  setIsBoardModalOpen={setIsBoardModalOpen}
  isBoardModalOpen={isBoardModalOpen}
/>
  <Sidebar/>
  </>)
}
  

export default App;
