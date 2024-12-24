import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const { pathname } = location;
    return (
        <nav className="">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="text-2xl font-bold">
            <Link to="/" className="text-white">
                <svg width="200" height="61" viewBox="0 0 370.22222222222223 97.93320602629828" class="looka-1j8o68f"><defs id="SvgjsDefs1201"></defs><g id="SvgjsG1202" featurekey="4yrtKO-0" transform="matrix(1.1340248642426747,0,0,1.1340248642426747,264.7579071439275,-8.994538733102363)" fill="#ff9f68"><g xmlns="http://www.w3.org/2000/svg"><g><path d="M49.919,64.35c-0.147,0-0.294-0.031-0.435-0.089L27.857,55v13.661c0,0,8.729,10.173,22.252,10.199v0.002    c0.008,0,0.017-0.002,0.025-0.002c0.005,0,0.013,0.002,0.021,0.002V78.86c13.523-0.026,22.252-10.199,22.252-10.199V55.039    l-22.062,9.226C50.211,64.321,50.065,64.35,49.919,64.35z"></path><path d="M48.721,46.977c-8.465-1.005-18.707-2.066-23.296,3.45l2.432,1.087v0.003l22.068,9.448l0.002-0.002v0.002L93,42.954    L50.193,24.686L7.268,42.696l13.785,5.901c-0.83,1.074-2.46,4.405-3.057,5.689c-1.003,0.169-1.779,0.999-1.779,2.05    c0,0.748,0.411,1.375,0.997,1.751h-0.069l-1.625,10.38h5.443l-1.435-10.38h-0.069c0.588-0.376,0.999-1.003,0.999-1.751    c0-0.456-0.177-0.854-0.419-1.2c2.434-5.186,7.922-10.538,14.543-11.759c4.585-0.696,9.637-0.491,14.146,0.043    c0.607,0.071,1.479,1.477,1.407,2.082C50.062,46.107,49.331,47.059,48.721,46.977z"></path></g></g></g><g id="SvgjsG1203" featurekey="Gem1BN-0" transform="matrix(2.2246471936625585,0,0,2.2246471936625585,-1.735224747409129,-14.460204637217739)" fill="#fff"><path d="M0.78 20 l0 -2.32 l1.44 0 l0 -8.58 l-1.44 0 l0 -2.32 l6.86 0 c4.34 0 6.46 2.66 6.46 6.36 c0 3.56 -1.98 6.86 -6.44 6.86 l-6.88 0 z M5.58 17.48 l2 0 c1.98 0 2.98 -1.42 2.98 -4.2 c0 -2.72 -0.96 -3.98 -3.1 -3.98 l-1.88 0 l0 8.18 z M17.438000000000002 20 l0 -2.32 l1.44 0 l0 -8.58 l-1.44 0 l0 -2.32 l6.24 0 l0 2.32 l-1.44 0 l0 8.58 l1.44 0 l0 2.32 l-6.24 0 z M26.896 16.34 l3.3 -0.68 c0.02 1.4 1.1 1.84 2.2 1.84 c1.04 0 1.64 -0.38 1.64 -1 c0 -2.1 -6.78 -1.14 -6.78 -5.94 c0 -2.64 2.04 -4.06 5.1 -4.06 c3 0 4.92 1.4 4.92 3.42 l0 0.16 l-3.3 0.68 c-0.02 -0.54 -0.14 -1.48 -1.7 -1.48 c-1.08 0 -1.62 0.44 -1.62 1.04 c0 2.18 6.78 1.04 6.78 5.82 c0 2.4 -1.7 4.14 -5.08 4.14 c-3.5 0 -5.46 -1.84 -5.46 -3.76 l0 -0.18 z  M49.774 15.36 l3.06 0.86 c-0.38 2.3 -2.1 4.06 -5.62 4.06 c-4.64 0 -6.58 -3.04 -6.58 -7 c0 -4.26 2.3 -6.78 6.6 -6.78 c3.44 0 5.44 1.6 5.44 3.96 c0 0.12 -0.02 0.22 -0.02 0.34 l-3.3 0.74 l0 -0.28 c0 -1.24 -0.54 -1.98 -2.2 -1.98 c-2.3 0 -2.98 1.34 -2.98 3.98 c0 2.92 0.9 4.24 2.96 4.24 c1.3 0 2.62 -0.56 2.64 -2.14 z M62.292 20.28 c-4.3 0 -6.52 -2.92 -6.52 -6.92 c0 -4.1 2.32 -6.86 6.64 -6.86 c4.08 0 6.54 2.46 6.54 6.7 c0 4.1 -2.32 7.08 -6.66 7.08 z M62.352000000000004 17.5 c1.88 0 3.06 -1.24 3.06 -4.16 c0 -2.88 -1.14 -4.06 -3.02 -4.06 c-1.94 0 -3.08 1.26 -3.08 4.1 c0 2.88 1.16 4.12 3.04 4.12 z M76.79 20 l-4.08 -10.9 l-1 0 l0 -2.32 l5.76 0 l0 2.32 l-1.34 0 l2.32 6.28 l2.3 -6.28 l-1.32 0 l0 -2.32 l5.52 0 l0 2.32 l-1.04 0 l-4.06 10.9 l-3.06 0 z M87.82800000000002 20 l0 -2.32 l1.48 0 l0 -8.58 l-1.48 0 l0 -2.32 l10.56 0 l0 4.26 l-2.52 0 l0 -1.74 l-3.22 0 l0 2.78 l3.78 0 l0 2.52 l-3.78 0 l0 2.88 l3.34 0 l0 -1.94 l2.52 0 l0 4.46 l-10.68 0 z M102.06600000000002 20 l0 -2.32 l1.44 0 l0 -8.58 l-1.44 0 l0 -2.32 l6.62 0 c3.66 0 4.96 1.64 4.96 3.76 c0 1.98 -1.12 3.04 -2.34 3.62 c0.52 0.28 0.9 0.8 1.24 1.74 c0.28 0.78 0.4 1.5 1.7 1.5 l0.16 0 l-0.58 2.72 c-0.28 0.04 -0.54 0.06 -0.78 0.06 c-2.52 0 -3.16 -1.82 -3.66 -3.16 c-0.58 -1.82 -0.78 -1.98 -1.9 -1.98 l-0.62 0 l0 2.64 l1.44 0 l0 2.32 l-6.24 0 z M106.86600000000001 12.52 l1.74 0 c1.22 0 1.68 -0.76 1.68 -1.54 c0 -1.22 -0.56 -1.68 -1.68 -1.68 l-1.74 0 l0 3.22 z"></path></g><g id="SvgjsG1204" featurekey="Gem1BN-1" transform="matrix(4.156571929927713,0,0,4.156571929927713,-3.2421259864231393,13.98228047346192)" fill="#fff"><path d="M0.78 20 l0 -2.32 l1.44 0 l0 -8.58 l-1.44 0 l0 -2.32 l6.66 0 c2.74 0 4.72 0.88 4.72 3.38 c0 1.24 -0.5 2.46 -1.86 2.84 l0 0.08 c1.78 0.32 2.38 1.72 2.38 3.02 c0 2.2 -1.72 3.9 -5.28 3.9 l-6.62 0 z M5.48 17.48 l1.76 0 c1.48 0 1.94 -0.64 1.94 -1.58 c0 -1.02 -0.58 -1.4 -1.64 -1.4 l-2.06 0 l0 2.98 z M5.48 11.98 l2.08 0 c0.74 0 1.18 -0.44 1.18 -1.38 s-0.46 -1.3 -1.48 -1.3 l-1.78 0 l0 2.68 z M22.358 20.28 c-4.3 0 -6.52 -2.92 -6.52 -6.92 c0 -4.1 2.32 -6.86 6.64 -6.86 c4.08 0 6.54 2.46 6.54 6.7 c0 4.1 -2.32 7.08 -6.66 7.08 z M22.418000000000003 17.5 c1.88 0 3.06 -1.24 3.06 -4.16 c0 -2.88 -1.14 -4.06 -3.02 -4.06 c-1.94 0 -3.08 1.26 -3.08 4.1 c0 2.88 1.16 4.12 3.04 4.12 z M38.716 20.28 c-4.3 0 -6.52 -2.92 -6.52 -6.92 c0 -4.1 2.32 -6.86 6.64 -6.86 c4.08 0 6.54 2.46 6.54 6.7 c0 4.1 -2.32 7.08 -6.66 7.08 z M38.776 17.5 c1.88 0 3.06 -1.24 3.06 -4.16 c0 -2.88 -1.14 -4.06 -3.02 -4.06 c-1.94 0 -3.08 1.26 -3.08 4.1 c0 2.88 1.16 4.12 3.04 4.12 z M48.714 20 l0 -2.32 l1.44 0 l0 -8.58 l-1.44 0 l0 -2.32 l6.04 0 l0 2.32 l-1.24 0 l0 2.62 l0.94 0 l2.38 -2.62 l-1.06 0 l0 -2.32 l5.72 0 l0 2.32 l-1.1 0 l-3.32 3.7 l3.16 4.88 l1.36 0 l0 2.32 l-3.84 0 l0 -0.02 l-0.06 0.02 l-3.26 -5.26 l-0.92 0 l0 2.94 l1.44 0 l0 2.32 l-6.24 0 z"></path></g></svg>
            </Link>
            </div>

            {/* Navigation Links */}
            <ul className="hidden sm:flex space-x-6">
            <li>
                <Link
                to="/"
                className={`${pathname === '/' ? 'underline' : ''}  text-white hover:text-gray-300 transition duration-300`}
                >
                Home
                </Link>
            </li>
            <li>
                <Link
                to="/about"
                className={`${pathname === '/about' ? 'underline' : ''} text-white hover:text-gray-300 transition duration-300`}
                >
                About
                </Link>
            </li>
            <li>
                <Link
                to="/contact"
                className={`${pathname === '/contact' ? 'underline' : ''} text-white hover:text-gray-300 transition duration-300`}
                >
                Contact
                </Link>
            </li>
            <li>
                <Link
                to="/faq"
                className={`${pathname === '/faq' ? 'underline' : ''} text-white hover:text-gray-300 transition duration-300`}
                >
                Faq
                </Link>
            </li>
            </ul>
            <div className="block sm:hidden">
                {
                    !open ? 
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="40px" viewBox="0 0 24 24" fill="none" onClick={() => setOpen(true)}>
                            <path d="M20 7L4 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M20 12L4 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M20 17L4 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    )
                    :
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="40px" viewBox="0 0 512 512" version="1.1" onClick={() => setOpen(false)}>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="work-case" fill="#ffffff" transform="translate(91.520000, 91.520000)">
                                    <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">
                                    </polygon>
                                </g>
                            </g>
                        </svg>
                    )
                }
            

            
            </div>

        </div>
        <ul className={`flex-col ${open ? 'flex' : 'hidden'} items-center justify-center space-y-2 absolute w-full bg-orange-500 pb-5`}>
        <li>
                <Link
                to="/"
                className={`${pathname === '/' ? 'underline' : ''} text-white hover:text-gray-300 transition duration-300`}
                >
                Home
                </Link>
            </li>
            <li>
                <Link
                to="/about"
                className={`${pathname === '/about' ? 'underline' : ''} text-white hover:text-gray-300 transition duration-300`}
                >
                About
                </Link>
            </li>
            <li>
                <Link
                to="/contact"
                className={`${pathname === '/contact' ? 'underline' : ''} text-white hover:text-gray-300 transition duration-300`}
                >
                Contact
                </Link>
            </li>
            <li>
                <Link
                to="/faq"
                className={`${pathname === '/faq' ? 'underline' : ''} text-white hover:text-gray-300 transition duration-300`}
                >
                Faq
                </Link>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar