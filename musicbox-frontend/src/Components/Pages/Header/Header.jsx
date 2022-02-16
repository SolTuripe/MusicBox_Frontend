import {BiSearchAlt} from 'react-icons/bi'
import{AiOutlineShoppingCart} from 'react-icons/ai'
import{GiAudioCassette} from 'react-icons/gi'




export function Header () {
    return (
        <div>
          <Header classname="Header"> 
              <BiSearchAlt className='Header-Icons'/>
              <h1 className='Header-Text'>MUSIC</h1>
              <GiAudioCassette className='Header-Icons' />
              <h1 className='Header-Text'>BOX</h1>
              <AiOutlineShoppingCart className='Header-Icons'/>
 </Header>
 </div>
    )
};