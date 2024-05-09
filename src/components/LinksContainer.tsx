import { useState, useEffect } from 'react'
import LinkComponent from './LinkComponent'

const LinksContainer = () => {

    const [links, setLinks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLinks = async () => {
            const apiUrl = '/api'
            try {
                const res = await fetch(apiUrl)

                const data = await res.json()

                // TODO remove this console log
                console.log(data.links)
                setLinks(data.links)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchLinks()

    }, [])

    if (loading) {
        return (
            <section className="mx-auto w-11/12 text-white">
                <h1 className="text-2xl font-medium py-2">Loading...</h1>
            </section>
        )
    }

    return (
        <section className="mx-auto w-11/12 text-white">
            <p className='text-center font-thin'> You can create <span className='text-secondary'>{7 - links.length}</span> more links </p>
            <p className='text-center font-thin'> <span className='font-mono underline hover:cursor-pointer'>Register Now</span> to enjoy unlimited usage </p>
            <div className='flex gap-2 items-center bg-gray my-3 px-2 py-1 rounded-t-lg'>
                <h2 className="text-xl py-1.5 font-medium flex items-center text-start basis-2/5 lg:basis-1/4">Short Link </h2>
                <h2 className="text-xl py-1.5 font-medium hidden lg:block lg:basis-1/4"> Original Link </h2>
                <h2 className="text-xl py-1.5 font-medium hidden basis-1/5 sm:block md:basis-1/6"> Clicks </h2>
                <h2 className="text-xl py-1.5 font-medium hidden basis-1/5 sm:block md:basis-1/6"> Status </h2>
                <h2 className="text-xl py-1.5 font-medium hidden md:block"> Date </h2>
            </div>
            {
                links.map((link) => {
                    return (
                        <LinkComponent key={link.shortLink} link={link} />
                    )
                })
            }
        </section>
    )
}

export default LinksContainer