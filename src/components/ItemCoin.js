import { useContext } from 'react'
import { numberToClp } from 'chilean-formatter';
import { ModalContext } from '../context/ModalContext';


const ItemCoin = ({coin}) => {
	const {toggle} = useContext(ModalContext);
  return (
    <li className='coin' onClick={() => toggle(coin)}>
        <div className='coin__profile'>
            <div className='coin__avatar'>
                <img src={coin.image} alt={coin.name} />
            </div>
            <div className='coin__header'>
                <strong className='coin__name'>{coin.name}</strong>
                <small>{coin.symbol.toUpperCase()}</small>
            </div>
        </div>
        <div className='coin__status'>
            <strong className='coin__value'>{numberToClp(coin.current_price)}</strong>
            <small
                className={coin.price_change_percentage_24h > 0 ? 'success' : 'danger'}
                >
                {coin.price_change_percentage_24h}
            </small>
        </div>
    </li>
  )
}

export default ItemCoin
