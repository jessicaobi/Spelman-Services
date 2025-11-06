// Service card component to display the different services

function ServiceCard({ serviceCategory }) {

    return (
        <div>
            <div className="name">
                {serviceCategory.name}
            </div>

            <div className="icon">
                {serviceCategory.icon}
            </div>

            <div className="count">
                {serviceCategory.count}
            </div>
        </div>
    )
}

export default ServiceCard;