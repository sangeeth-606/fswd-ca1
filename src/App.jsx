
import './App.css'
import ClientTestimonials from './components/ClientTestimonials'

let datas=[{
  name:"Emily Watson",
  rev:"this service is amazing"
},{
name:"Desxter",
rev:"this service is good"}
]

function App() {
  

  return (
    <>
    {datas.map(function(data){
      return <ClientTestimonials name={data.name} rev={data.rev} key={data.id}/>
    })}
    
    </>
  )
}

export default App
