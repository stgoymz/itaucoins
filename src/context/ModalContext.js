import { createContext, useState } from "react";

const ModalContext = createContext({visible:false, coin:{}, toggle: () => {}});


const ModalContextProvider = ({children}) => {
	const [visible, setVisible] = useState(false)
	const [coin, setCoin] = useState({})
	const value = {
		visible,
		coin,
		toggle: (coin) => {
			setCoin(coin)
			return setVisible(!visible)
		}
	}
	return (
		<ModalContext.Provider value={value}>
			{children}
		</ModalContext.Provider>
	)
}
export {ModalContext, ModalContextProvider};
