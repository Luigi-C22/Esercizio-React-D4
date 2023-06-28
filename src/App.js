import './App.css';
import MyNav from './components/main/MyNav';
import LatestRelease from './components/main/LatestRelease';
import Welcome from './components/main/Welcome';
import MyFooter from './components/main/MyFooter';



function App() {
  return (
    <>
    <MyNav />
    <Welcome />
    <LatestRelease />
    <MyFooter />
    </>
    
  );
}

export default App;
