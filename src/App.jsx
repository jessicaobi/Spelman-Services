// Importing the useState hook from the react library
import { useState } from 'react'
// Importing all of the components necessary for the project from the components folder
import ContactForm from "./Components/ContactForm"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import ProviderCard from "./Components/ProviderCard"
import ServiceCard from "./Components/ServiceCard"
// Importing the categories and providers from the datas javascript file
import { categories, providers } from "./data"
// Importing the CSS for the project
import './App.css'

function App() {
  // Initializing the search term, selected categrory, and selected provider for filtering
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProvider, setSelectedProvider] = useState(null)


  // Whenever the Contact is clicked, it sets the selected provider to whatever provider was clicked. This will be used later to pull up the contact form
  const onContact = (provider) => {
    setSelectedProvider(provider)
  }

  // Whenever we close the contact, we need to clear the selected provider, otherwise the first initally clicked selected provider will continuously pop up
  const closeContact = () => setSelectedProvider(null)

  // Filtering through the providers
  const filteredProviders = providers.filter(provider => {

    // Setting the filtered category to whatever is selected by the user
    const filteredCategory = selectedCategory === "All" || provider.category === selectedCategory;
    // Setting the filtered search to whatever is typed in by the user
    // The lowercase function is to considered all cases
    const filteredSearch = searchTerm === "" ||
      provider.service.toLowerCase().includes(searchTerm.toLowerCase());
    return filteredCategory && filteredSearch;

  })

  //  Whenever something is typed into the search box, this is updating the value of the searchTerm variable
  const searchFunction = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      {/* Sending the search related values to the Header component */}
      <Header onSearch={setSearchTerm}
        searchTerm={searchTerm}
        searchFunction={searchFunction} />

      {/* Sending the welcome message to the Hero component */}
      <Hero

        welcomeMessage={"Welcome to Spelman Services! This page is dedicated for students to promote their own services!"} />


      {/* For whatever button is clicked, it is updating the valued of the selectedCategory to that */}
      <button onClick={() => setSelectedCategory("Tutoring")}>Tutoring</button>
      <button onClick={() => setSelectedCategory("Hair & Beauty")}>Hair & Beauty</button>
      <button onClick={() => setSelectedCategory("Design")}>Design</button>
      <button onClick={() => setSelectedCategory("All")}>All</button>


      <div>


        {/* Mapping through all of the types of services services */}
        <div className="card-grid-seperate">
          {categories.map(serviceCategory => (
            <ServiceCard
              key={serviceCategory.name}
              serviceCategory={serviceCategory}
            />
          ))}
        </div>

      </div>


      {/* Mapping through all all of the providers */}
      <div className="card-grid">
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
          key={selectedProvider.id}
          provider={selectedProvider} onClose={closeContact} />
      )}

      {/* Sending a message to the footer */}
      <Footer

        spelmanMessage={"Checkout more general information about Spelman College at: https://www.spelman.edu/"} />
    </div>
  )
}

export default App;