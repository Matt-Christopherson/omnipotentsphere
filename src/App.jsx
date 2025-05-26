import goatse from './assets/gifs/goatse-monster.gif'

import cAlbum from './assets/images/bss.png'
import cBook from './assets/images/east of eden.jpg'
import cGame from './assets/images/sleepr.png'
import cMovie from './assets/images/friendship.jpg'

import babyJar from './assets/gifs/baby-jar.gif'
import babyJar2 from './assets/gifs/baby-jar2.gif'
import babyJar3 from './assets/gifs/baby-jar3.gif'
import babyJar4 from './assets/gifs/baby-jar4.gif'

import './App.css'

import InterestBox from './components/InterestBox/InterestBox.jsx'
import BabyJar from './components/BabyJar/BabyJar.jsx'

function App() {

  return (
    <div id='page-body'>
      <img id="goatse" src={goatse} />

      <header>
        <InterestBox caption="on repeat" altText="You Forgot it in People by Broken Social Scene" image={cAlbum} />
        <InterestBox caption="currently reading" altText="East of Eden" image={cBook} />
        <InterestBox caption="currently playing" altText="Citizen Sleeper" image={cGame} />
        <InterestBox caption="last watch" altText="Friendship" image={cMovie} />
      </header>

      <div class="page">
        <h2><strong>ABANDON ALL PRETEXT: THIS IS A SITE UNLIKE ANY OTHER!</strong></h2>

        <div id="baby-shelf">
          <BabyJar link="#" image={babyJar} caption="theoretical magic" />
          <BabyJar link="#" image={babyJar2} caption="moving pictures" />
          <BabyJar link="#" image={babyJar3} caption="philosophical drivel" />
          <BabyJar link="#" image={babyJar4} caption="everything else" />
        </div>
      </div>
    </div>

  )
}

export default App
