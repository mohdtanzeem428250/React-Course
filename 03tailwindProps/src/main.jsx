import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Props from './components/Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <div className="min-h-screen flex items-center justify-center">
      <Props 
        name="Mohd Tanzeem" 
        age={20} 
        jobTitle="Software Developer" 
        buttonText="View Profile" 
      />
      <Props 
        name="Rahul Kumar" 
        age={21} 
        jobTitle="Frontend Developer" 
        buttonText="View Profile" 
      />
      <Props 
        name="Faizan" 
        age={20} 
        jobTitle="Backend Developer" 
        buttonText="View Profile" 
      />
      <Props 
        name="Areeb" 
        age={25} 
        jobTitle="Digital Marketing Specialist" 
        buttonText="View Profile" 
      />
      
    </div>
  </StrictMode>,
)
