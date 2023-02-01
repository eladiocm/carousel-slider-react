import './App.css'
import Carousel from './component/Carousel'
import Carousel2 from './component/Carousel2'

function App() {
  const images = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg']

  return (
    <div className="App">
      <Carousel images={images} autoPlay={true} />
      <Carousel2 />
    </div>
  )
}

export default App
