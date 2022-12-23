/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
//  import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
// import App from "./components/Gallaryheader";
import imageData from "./components/Gallaryimage";
import Body from "./components/body";
import Header from "./components/Gallaryheader";
function App(){
  return(
<div>
  <Header/>
  <Body data={imageData}/>
<GallaryFooter/> 
</div>
  )
}


export default App;
