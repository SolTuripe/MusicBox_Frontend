export function Cards(props) {
    const { img, name, artist, genre, year, userName, price } = props


    return (
        <div >
            <div>
                <img src={img} alt={'img' + name} />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{'Artist' + artist}</p>
                <p>{'Genre' + genre}</p>
                <p>{'Year' + year}</p>
                <p>{userName}</p>
                <p className="Pricecard">{'PRECIO:' + price}</p>
                <button className="ButtonP">Agregar a el Carrito</button>
            </div>
        </div>
    );
};