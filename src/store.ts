import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CryptoPrice, Cryptocurrency, Pair } from './types'
import { getCryptos, fetchCurrentCryptoPrice } from './services/CryptoService'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    currentPair: Pair
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {
        IMAGEURL : '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false,
    currentPair: {
        currency: '',
        criptocurrency: ''
    },
    fetchCryptos: async () => {
        try {
            const cryptocurrencies = await getCryptos()
            set(() => ({
                cryptocurrencies: cryptocurrencies || []
            }))
        } catch (error) {
            console.error('Error in fetchCryptos:', error)
            set(() => ({
                cryptocurrencies: []
            }))
        }
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true,
            currentPair: pair
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))