import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () =>{
    const {data, error} = useSWR('/api/get-promo', fetcher )
    return (
        <div>
            <PageTitle title='Seja bem vindo' />
            <p className='mt-6 text-center'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir  a sua opinião.
            </p>
        <div className='text-center my-12'>
            <Link href='/pesquisa'>
            <a className='bg-orange-500 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opnião ou sujestão </a>
            </Link>
        </div>
                { !data && <p>Carregando...</p> }
                {!error && data && data.showCoupon &&
            <p className='text-center my-12'>
                {data.message}
            </p>
            }
        </div>
    )
}

export default Index