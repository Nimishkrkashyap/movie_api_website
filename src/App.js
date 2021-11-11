import './App.css';
import ShowName from './Component/ShowName/Showname';
import ShowDetail from './Component/ShowDetail/ShowDetail';
import ShowBooking from './Component/ShowBooking/ShowBooking'
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
          <Route exact path='/' element={<ShowName />}/>
          <Route exact path='/ShowDetail/:id' element={<ShowDetail />}/>
          <Route exact path='/TicketBooking/:id' element={<ShowBooking />} />
          </Routes>
    </>
  );
}

export default App;
