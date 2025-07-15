import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes('') , [result])
    
    return (
        <div className="result-wrapper">
            {loading ? (
                <Spinner />
            ) : hasResult ? (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Imagen Cryptomoneda"
                        />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="welcome-state">
                    <div className="welcome-content">
                        <img 
                            src="/images/logo.svg" 
                            alt="Bitcoin Logo" 
                            className="welcome-logo"
                            onError={(e) => {
                                console.error('Error loading logo:', e);
                                // Fallback to a default icon if logo fails to load
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                        <h2>Cotizador de Criptomonedas</h2>
                        <p>Selecciona una moneda y una criptomoneda para ver la cotización en tiempo real</p>
                        <div className="default-selection">
                            <span>🇺🇸 USD</span>
                            <span>→</span>
                            <span>₿ BTC</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
