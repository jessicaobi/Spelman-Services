function ProviderCard({ provider, onContact }) {

    return (
        <div className="card">
            <img src={provider.image} alt={provider.name} />
            <h3>{provider.name}</h3>
            <p>{provider.service}</p>
            <p>{provider.price}</p>
            <button onClick={() => onContact(provider)}>
                Contact
            </button>
        </div>
    )
}

export default ProviderCard;