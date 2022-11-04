import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    return (
        <footer className="flex flex-col bg-[#b2d2cd] text-black justify-between mt-6">
            <div className="flex flex-col p-2 justify-evenly">
                <div>
                    <ul className="flex flex-row p-4 justify-evenly text-sm justify-between text-[#677c79] font-bold">
                        <li><LocalPhoneIcon/> Contact us</li>
                        <li>Servizi</li>
                        <li>Cerca</li>
                        <li>Servizi</li>
                    </ul>
                </div>
                <div>
                    <div className='flex justify-center mt-2 '>

                        <p
                            className='text-xs text-[#677c79]'>
                            Istituto della Enciclopedia Italiana fondata da Faty
                        </p>
                        <p
                        className='text-xs text-[#677c79]'
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
