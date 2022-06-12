import React from 'react'

const Footer =() => {
    return (
        <div className='bg-gray-900 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
            Projeto desenvolvido por: {' '} Kelvyn Franca / {' '}
            <a className='px-2 hover:underline' href='https://www.linkedin.com/in/kelvyn-frança-72a815228'>Linkedin</a> / 
            <a className='px-2 hover:underline' href='https://github.com/KelvynFranca'>Github</a>
            </div>
        </div>
    )
}
export default Footer