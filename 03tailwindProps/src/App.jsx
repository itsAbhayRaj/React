import './App.css'
import Card from './components/Card'
function App() {
  let MyObj = {
    name: "Abhay",
    work: "SDE"
  }
  const img1 = "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg"
  const img2 = "https://images.pexels.com/photos/53977/eagle-owl-raptor-falconry-owl-53977.jpeg"
  const img3 = "https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg"
  return (
    <>
      <h1 className='bg-green-600 mb-4 text-black p-4 rounded-3xl'>Tailwind test</h1>
      {/* <Card Obj={MyObj}/> // similarily array can be passed */}
      <div className='flex'>
      <Card name="Parrot" title="About Parrot" imgSrc = {img1}/>
      <Card name="Owl" imgSrc = {img2}/> 
      <Card name="Humming Bird" title="About Humming Bird" imgSrc ={img3}/>
      </div>
    </>
  )
}

export default App
