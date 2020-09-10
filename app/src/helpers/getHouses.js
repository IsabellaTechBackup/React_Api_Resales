


export const getHouses = async({bed, bath}) => {
    //const url = `https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=BWd7ZzJ7reQn729zVE65QJdygG6aZeQE`; 
    console.log('bed'+ bed);
    const url =`https://ro.inmo.cloud/property-search/?lang=es&P_Beths=${bed}&P_PropertyTypes=2-2,2-4&P_Location=Marbella,Nueva+Andalucia`;
    const resp = await fetch( url );
    const { Property } = await resp.json();
    console.log(url);
    const houses = Property.map( house => {
        return {
            id: house.Reference,
            image: house.MainImage,
            bed: house.Bedrooms,
            bath: house.Bathrooms,
            desc: house.Description,
            type: house.TypeVal,
        }
    })

    return houses;


}