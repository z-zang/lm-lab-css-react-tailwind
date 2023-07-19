export interface IProperty {
    property: {
        location: string;
        country: string;
        property_type: string;
        bedroom_count: number;
        bathroom_count: number;
        price: string;
        image_urls: string[];
        title: string;
        description: string;
    };
}

export const Card: React.FC<IProperty> = ({ property: { title, location, country, property_type, image_urls, description, bedroom_count, bathroom_count, price } }) => {

    return (
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 justify-center gap-5 bg-gray-700 flex-1 hover:shadow-blue-300/50 lg:max-w-3xl">
            <div className="text-left px-10 py-8">
                <h4 className="text-2xl text-center mb-5 font-bold">{title}</h4>
                <div className="flex flex-col gap-5">
                    <span className="flex justify-center lg:justify-left lg:flex-col gap-5">
                        <p>📍 {location}</p>
                        <p>🌎 {country}</p>
                        <p>🏠 {property_type}</p>
                    </span>
                    <p>{description}</p>
                    <span className="flex flex-row justify-around">
                        <p>🛌 {bedroom_count}</p>
                        <p>🛁 {bathroom_count}</p>
                        <p>{price}</p>
                    </span>

                </div>
            </div>
            <img src={image_urls[0]} className="w-full h-72 md:h-full object-cover" />
        </div>
    )
}