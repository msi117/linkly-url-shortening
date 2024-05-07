import { useState } from "react"
import { FiChevronDown, FiCopy } from 'react-icons/fi'


type Link = {
    shortLink: string,
    originalLink: string,
    clicks: number,
    status: string,
    date: string
}

type LinkProps = {
    link: Link
}

const LinkComponent = ({ link }: LinkProps) => {
    const [open, setOpen] = useState(false)

    const handleClick = async () => {
        await navigator.clipboard.writeText(link.shortLink)
    }

    return (
        <div className="bg-gray my-2 px-2 py-1 text-white last:rounded-b-lg ">
            <div className="flex gap-2 items-center">
                <p className="text-sm font-thin flex items-center text-start basis-2/5 lg:basis-1/4">{link.shortLink} <span onClick={handleClick} className="bg-black p-2 rounded-full ml-2 cursor-pointer hover:scale-75"><FiCopy /></span> </p>
                <p className="text-sm font-thin hidden lg:block lg:basis-1/4"> {link.originalLink} </p>
                <p className="text-sm font-thin hidden basis-1/5 sm:block md:basis-1/6"> {link.clicks} </p>
                <p className={`${link.status === 'active' ? 'text-green' : 'text-orange'} text-sm font-thin hidden basis-1/5 sm:block md:basis-1/6`}> {link.status} </p>
                <p className="text-sm font-thin hidden md:block"> {link.date} </p>
                <span className="bg-black p-2 rounded-full ml-auto lg:hidden" onClick={(): void => setOpen(prevState => !prevState)}>
                    <FiChevronDown className="border rounded-full" />
                </span>
            </div>
            {
                open && (
                    <div>
                        {/* create and format the link */}
                    </div>
                )
            }
        </div>
    )
}

export default LinkComponent