import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    return (
        <footer className="flex flex-col  bg-white  text-black justify-between mt-6">
            <div className="flex flex-col p-2 justify-evenly">
                <div>
                    <ul className="flex flex-row p-4 justify-evenly text-sm justify-between">
                        <li><LocalPhoneIcon/> Contact us</li>
                        <li>Servizi</li>
                        <li>Cerca</li>
                        <li>Servizi</li>
                    </ul>
                </div>
                <div>
                    <div className='flex justify-center mt-2'>

                        <p
                            className='text-xs text-slate-400'>
                            Istituto della Enciclopedia Italiana fondata da Faty
                        </p>
                        <p
                        className='text-xs text-slate-400'
                        >
                            S.p.A. © Tutti i diritti riservati | Partita Iva 007462411000
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
