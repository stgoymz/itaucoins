import { useEffect, useState } from 'react';
import './styles/App.scss';
import axios from 'axios';
import ListCoins from './components/ListCoins';
import Header from './components/Header';
import ModalCoin from './components/ModalCoin';
import { ModalContextProvider} from './context/ModalContext';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getDataCoins = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=clp&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    setCoins(res.data);
  };

  useEffect(()=> {
    getDataCoins();
  },[]);
  return (
		<ModalContextProvider>
			<div className="App">
				<Header/>
				<div className='search'>
					<input type='text' onChange={e => setSearch(e.target.value)}  placeholder="Búsqueda de moneda"/>
				</div>
				<ListCoins coins={coins} search={search}/>
				<ModalCoin/>
			</div>
		</ModalContextProvider>
  );
}

export default App;
