import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1> Custom App !</h1>
    </div>
  )
}
// const reactElement = { // this will not render  coz render functon in react might have different syntax type,props ,etc
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     } ,
//     children: 'Click me to visit google'
// }

const anotherReactElement = (
  <a href='https://www.google.com' target='_blank'>Visit google</a>
)

const username = "Raj"

const reactElement = React.createElement( // this will render
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement

)
