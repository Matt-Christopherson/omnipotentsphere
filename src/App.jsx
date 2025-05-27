// Images
import cAlbum from './assets/images/bss.png'
import cBook from './assets/images/east of eden.jpg'
import cGame from './assets/images/sleepr.png'
import cMovie from './assets/images/friendship.jpg'
// Gifs
import goatse from './assets/gifs/goatse-monster.gif'
import babyJar from './assets/gifs/baby-jar.gif'
import babyJar2 from './assets/gifs/baby-jar2.gif'
import babyJar3 from './assets/gifs/baby-jar3.gif'
import babyJar4 from './assets/gifs/baby-jar4.gif'
import scanners from './assets/gifs/scanners.gif'
// Other Stuff
import './App.css'
import { useState } from 'react';
// Components
import Blog from './components/Blog/Blog.jsx'
import InterestBox from './components/InterestBox/InterestBox.jsx'
import BabyJar from './components/BabyJar/BabyJar.jsx'

function App() {
  const [content, setContent] = useState(<img src={scanners} id='scanners'></img>);

  function handleSelect(selectedButton) {
    setContent(selectedButton);
  }
  
  return (
    <div id='page-body'>
      <img id="goatse" src={goatse} />

      <header>
        <InterestBox caption="on repeat" altText="You Forgot it in People by Broken Social Scene" image={cAlbum} />
        <InterestBox caption="currently reading" altText="East of Eden" image={cBook} />
        <InterestBox caption="currently playing" altText="Citizen Sleeper" image={cGame} />
        <InterestBox caption="last watch" altText="Friendship" image={cMovie} />
      </header>

      <div className="page">
        <h2><strong>ABANDON ALL PRETEXT: THIS IS A SITE UNLIKE ANY OTHER!</strong></h2>

        <div id="baby-shelf">
          <BabyJar onSelect={() => handleSelect(<Blog/>)} image={babyJar} caption="theoretical magic" />
          <BabyJar onSelect={() => handleSelect(<h1>Coming Soon</h1>)} image={babyJar2} caption="moving pictures" />
          <BabyJar onSelect={() => handleSelect(<h1>Coming Soon</h1>)} image={babyJar3} caption="philosophical drivel" />
          <BabyJar onSelect={() => handleSelect(<h1>Coming Soon</h1>)} image={babyJar4} caption="everything else" />
        </div>
      </div>
      {content}
    </div>
  )
}

export default App
