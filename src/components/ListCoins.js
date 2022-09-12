import React from 'react'
import ItemCoin from './ItemCoin';

const ListCoins = ({coins, search}) => {
  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
  });
  return (
		<>
			<h2 className='subtitle'>Mercado</h2>
			<ul className='list-coins'>
				{filteredCoins.map((coin, index) => (<ItemCoin key={index} coin={coin}/>))}
				{search !== '' && filteredCoins.length === 0 ?
					<p className="notfound">Sin resultados,<br/>intenta otra búsqueda</p>
					: null
				}
			</ul>
		</>
  )
}

export default ListCoins
