import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import ContactForm from "./Components/ContactForm"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import ProviderCard from "./Components/ProviderCard"
import ServiceCard from "./Components/ServiceCard"
import { categories, providers } from "./data"

import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProvider, setSelectedProvider] = useState(null)

  // Whenever the Contact is clicked, it sets the selected provider to whatever provider was clicked
  const onContact = (provider) => {
    setSelectedProvider(provider)
  }

  const filteredProviders = providers.filter(provider => {
    if (selectedCategory === "All") {
      return true;

    }
    return provider.category === selectedCategory;

  })

  const searchFunction = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredSearch = providers.filter(
    provider =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  )



  const closeContact = () => setSelectedProvider(null)


  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <Hero title="SpelmanServices" />
      {/* Render categories and providers */}


      <button onClick={() => setSelectedCategory("Tutoring")}>Tutoring</button>
      <button onClick={() => setSelectedCategory("Hair & Beauty")}>Hair & Beauty</button>
      <button onClick={() => setSelectedCategory("Design")}>Design</button>
      <button onClick={() => setSelectedCategory("'All'")}>All</button>


      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={searchFunction}
        />
        <div>
          {filteredSearch.map(provider => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onContact={onContact}
            />
          ))}
        </div>
      </div>

      {/* Mapping through all of the services */}
      <div className="services">
        {categories.map(serviceCategory => (
          <ServiceCard
            key={serviceCategory.name}
            serviceCategory={serviceCategory}
          />
        ))}
      </div>


      {/* Mapping through all of the providers
      <div className="providers">
        {providers.map(provider => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            onContact= {onContact}
          />
        ))}
      </div> */}

      <div className="providers">
        {filteredProviders.map(provider => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            onContact={onContact}
          />
        ))}
      </div>


      {/* This renders the selected provider and passes the selected provider to the Contact Form component */}

      {/* The key is necessary because without it, whenever the user tried to click on contact on another provider, a new form would not populate */}
      {/* The key shows that they have different instances of a form being submitted */}
      {selectedProvider && (
        <ContactForm 
        key = {selectedProvider.id}
        provider={selectedProvider} onClose={closeContact} />
      )}
    </div>
  )
}

export default App;