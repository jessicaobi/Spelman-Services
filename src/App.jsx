import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import ContactForm from "./Components/ContactForm"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import ProviderCard from "./Components/ProviderCard"
import ServiceCard from "./Components/ServiceCard"



import './App.css'
function App() {
const [searchTerm, setSearchTerm] = useState('')
const [selectedCategory, setSelectedCategory] = useState('All')
return (
<div>
<Header onSearch={setSearchTerm} />
<Hero title="SpelmanServices" />
{/* Render categories and providers */}
</div>
)
}