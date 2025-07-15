import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Credits() {
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

            <div className="credits-container">
                <div className="credits-content">
                    <Link to="/" className="back-link">
                        ← Back to App
                    </Link>
                    
                    <h2 className="credits-title">Credits & Acknowledgments</h2>
                    
                    <div className="credits-section">
                        <h3>� Licenses & Attributions</h3>
                        
                        <div className="license-item">
                            <h4>logo.svg</h4>
                            <p><strong>Logo License: Bitcoin (BTC)</strong></p>
                            <ul className="license-details">
                                <li>Commercial use: Allowed</li>
                                <li>Personal use: Allowed</li>
                                <li>Modification: Allowed</li>
                                <li>Redistribution: Allowed</li>
                                <li>Exclusive rights: Not granted</li>
                                <li>Credit: Not required</li>
                                <li>Attribution: Not required</li>
                                <li>License type: Public domain / Open-source</li>
                            </ul>
                            <a href="https://cryptologos.cc/bitcoin" target="_blank" rel="noopener noreferrer">
                                https://cryptologos.cc/bitcoin
                            </a>
                        </div>

                        <div className="license-item">
                            <h4>bg.jpg</h4>
                            <p>
                                Foto de <a href="https://unsplash.com/es/@polarmermaid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Anne Nygård</a> en <a href="https://unsplash.com/es/fotos/interfaz-grafica-de-usuario-aplicacion-x07ELaNFt34?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Unsplash</a>
                            </p>
                        </div>

                        <div className="license-item">
                            <h4>CryptoCompare</h4>
                            <h5>Atribución de Datos</h5>
                            <p>Los datos utilizados en este proyecto/aplicación se obtienen de la API gratuita de CryptoCompare.</p>
                            <p>Agradecemos a CryptoCompare por proporcionar esta información.</p>
                            
                            <p><strong>Licencia de Uso:</strong></p>
                            <p>Esta aplicación utiliza datos bajo la licencia <strong>Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0)</strong>.</p>
                            
                            <p>Puedes encontrar más información sobre CryptoCompare y sus términos de API en:</p>
                            <ul className="license-links">
                                <li>
                                    <strong>Sitio web de CryptoCompare:</strong> 
                                    <a href="https://www.cryptocompare.com/" target="_blank" rel="noopener noreferrer">
                                        https://www.cryptocompare.com/
                                    </a>
                                </li>
                                <li>
                                    <strong>Acuerdo de Licencia de API:</strong> 
                                    <a href="https://www.cryptocompare.com/api-licence-agreement/" target="_blank" rel="noopener noreferrer">
                                        https://www.cryptocompare.com/api-licence-agreement/
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="credits-section">
                        <h3>�🚀 Technologies & Libraries</h3>
                        <ul className="credits-list">
                            <li>
                                <strong>React</strong> - JavaScript library for building user interfaces
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">reactjs.org</a>
                            </li>
                            <li>
                                <strong>TypeScript</strong> - Static typing for JavaScript
                                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">typescriptlang.org</a>
                            </li>
                            <li>
                                <strong>Vite</strong> - Fast development build tool
                                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">vitejs.dev</a>
                            </li>
                            <li>
                                <strong>Zustand</strong> - Lightweight state management
                                <a href="https://zustand-demo.pmnd.rs/" target="_blank" rel="noopener noreferrer">zustand-demo.pmnd.rs</a>
                            </li>
                            <li>
                                <strong>Zod</strong> - TypeScript-first schema validation
                                <a href="https://zod.dev/" target="_blank" rel="noopener noreferrer">zod.dev</a>
                            </li>
                            <li>
                                <strong>Axios</strong> - HTTP client for API requests
                                <a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer">axios-http.com</a>
                            </li>
                            <li>
                                <strong>React Router</strong> - Routing library for React
                                <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">reactrouter.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="credits-section">
                        <h3>📊 Data Sources</h3>
                        <ul className="credits-list">
                            <li>
                                <strong>CryptoCompare API</strong> - Real-time cryptocurrency data and market information
                                <a href="https://cryptocompare.com/" target="_blank" rel="noopener noreferrer">cryptocompare.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="credits-section">
                        <h3>🎨 Design & Assets</h3>
                        <ul className="credits-list">
                            <li>
                                <strong>Google Fonts</strong> - Outfit font family
                                <a href="https://fonts.google.com/specimen/Outfit" target="_blank" rel="noopener noreferrer">fonts.google.com</a>
                            </li>
                            <li>
                                <strong>Bitcoin Logo</strong> - Official Bitcoin symbol and branding
                                <a href="https://bitcoin.org/" target="_blank" rel="noopener noreferrer">bitcoin.org</a>
                            </li>
                        </ul>
                    </div>

                    <div className="credits-section">
                        <h3>🛠️ Development Tools</h3>
                        <ul className="credits-list">
                            <li>
                                <strong>ESLint</strong> - Code linting and quality
                                <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">eslint.org</a>
                            </li>
                            <li>
                                <strong>PostCSS</strong> - CSS processing
                                <a href="https://postcss.org/" target="_blank" rel="noopener noreferrer">postcss.org</a>
                            </li>
                            <li>
                                <strong>Autoprefixer</strong> - CSS vendor prefixing
                                <a href="https://autoprefixer.github.io/" target="_blank" rel="noopener noreferrer">autoprefixer.github.io</a>
                            </li>
                        </ul>
                    </div>

                    <div className="credits-section">
                        <h3>🙏 Special Thanks</h3>
                        <ul className="credits-list">
                            <li>
                                <strong>Open Source Community</strong> - For making amazing tools freely available
                            </li>
                            <li>
                                <strong>React Team</strong> - For the incredible framework and ecosystem
                            </li>
                            <li>
                                <strong>TypeScript Team</strong> - For making JavaScript development more robust
                            </li>
                            <li>
                                <strong>Vite Team</strong> - For the lightning-fast development experience
                            </li>
                        </ul>
                    </div>

                    <div className="credits-footer">
                        <p>
                            This project is open source and available under the MIT License.
                            Feel free to use, modify, and distribute as needed.
                        </p>
                        <p>
                            <strong>Developed with ❤️ by fireDevelop</strong>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
