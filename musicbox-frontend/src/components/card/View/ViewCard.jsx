import{AiOutlineShoppingCart} from 'react-icons/ai'


export function CardsView(props) {
    const { img, name, artist, genre, year, userName, price, description } = props


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
                <p>{description}</p>
                <button className="ButtonP"><AiOutlineShoppingCart/></button>
                <button className="ButtonSeeMore"><img src="" alt=""/></button>

            </div>
        </div>
    );
};