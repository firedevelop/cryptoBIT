import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { ChangeEvent, useState } from "react"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchForm() {
    const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })
    const [error, setError] = useState('')
    
    const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            currency: e.target.value
        })
    }

    const handleCryptoClick = (cryptoName: string) => {
        const newPair = {
            ...pair,
            criptocurrency: cryptoName
        }
        setPair(newPair)
        
        if(newPair.currency === '') {
            setError('Debes seleccionar una moneda primero')
            return
        }
        setError('')
        fetchData(newPair)
    }

    return (
        <div className="sidebar">
            <div className="currency-selector">
                <label htmlFor="currency">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
                    onChange={handleCurrencyChange}
                    value={pair.currency}
                >
                    <option value="">-- Seleccione --</option>
                    {currencies.map( currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="crypto-list">
                <h3>Criptomonedas</h3>
                <div className="crypto-grid">
                    {cryptocurrencies.map( crypto => (
                        <div
                            key={crypto.CoinInfo.Name}
                            className={`crypto-item ${pair.criptocurrency === crypto.CoinInfo.Name ? 'selected' : ''}`}
                            onClick={() => handleCryptoClick(crypto.CoinInfo.Name)}
                        >
                            <img 
                                src={`https://cryptocompare.com${crypto.CoinInfo.ImageUrl || '/media/37746251/btc.png'}`}
                                alt={crypto.CoinInfo.FullName}
                                className="crypto-logo"
                            />
                            <div className="crypto-info">
                                <span className="crypto-symbol">{crypto.CoinInfo.Name}</span>
                                <span className="crypto-name">{crypto.CoinInfo.FullName}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
