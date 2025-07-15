import { useEffect } from "react"
import CriptoSearchForm from "../components/CriptoSearchForm"
import { useCryptoStore } from "../store"
import CryptoPriceDisplay from "../components/CryptoPriceDisplay"
import Footer from "../components/Footer"

export default function Home() {
    const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

    useEffect(() => {
        fetchCryptos()
    }, [])

    return (
        <div className="app-container">
            <div className="app-header">
                <img 
                    src="/images/logo.svg" 
                    alt="Bitcoin Logo" 
                    className="app-logo"
                />
                <h1 className="app-title">
                    crypto <span>BIT</span>
                </h1>
            </div>

            <div className="main-layout">
                <CriptoSearchForm />
                <div className="content">
                    <CryptoPriceDisplay />
                </div>
            </div>

            <Footer />
        </div>
    )
}
