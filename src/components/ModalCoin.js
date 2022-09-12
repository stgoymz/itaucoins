import { useContext } from 'react';
import { numberToClp } from 'chilean-formatter';
import { ModalContext } from "../context/ModalContext";
import { format } from 'date-fns';

const ModalCoin = () => {
	const {visible, coin, toggle} = useContext(ModalContext);
	return(
		<>
			{visible ?
				<>
					<div className="modal">
							<button className='modal__close' onClick={toggle}></button>
							<div className='coin'>
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
							</div>
							<dl className='grid'>
								<span className='grid__item'>
									<dt>Cap. de mercado</dt>
									<dd>{coin.market_cap ? numberToClp(coin.market_cap) : 'Sin información'}</dd>
								</span>
								<span className='grid__item'>
									<dt>Volumen de comercio en 24 horas</dt>
									<dd>{coin.market_cap_change_24h ? numberToClp(coin.market_cap_change_24h) : 'Sin información'}</dd>
								</span>
								<span className='grid__item'>
									<dt>Valoración tras la dilución total</dt>
									<dd>{coin.fully_diluted_valuation ? numberToClp(coin.fully_diluted_valuation) : 'Sin información'}</dd>
								</span>
								<span className='grid__item'>
									<dt>Cantidad circulante</dt>
									<dd>{coin.circulating_supply ? numberToClp(coin.circulating_supply) : 'Sin información'}</dd>
								</span>
								<span className='grid__item'>
									<dt>Cantidad total</dt>
									<dd>{coin.total_volume ? numberToClp(coin.total_volume) : 'Sin información'}</dd>
								</span>
								<span className='grid__item'>
									<dt>Última actualización</dt>
									<dd>{format(new Date(coin.last_updated), 'dd/MM/yyyy hh:mm')}</dd>
								</span>
							</dl>
					</div>
					<div className="backdrop"></div>
				</>
			: null
			}
		</>
	)
}
export default ModalCoin;
