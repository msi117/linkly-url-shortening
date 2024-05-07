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
    return (
        <div className="bg-gray my-2 px-2 py-1 text-white last:rounded-b-lg ">
            <div className="flex gap-2 items-center">
                <p className="text-sm font-light flex items-center text-start basis-2/5 lg:basis-1/4">{link.shortLink} <span className="bg-black p-2 rounded-full ml-2"><FiCopy /></span> </p>
                <p className="text-sm font-light hidden lg:block lg:basis-1/4"> {link.originalLink} </p>
                <p className="text-sm font-light hidden basis-1/5 sm:block md:basis-1/6"> {link.clicks} </p>
                <p className="text-sm font-light hidden basis-1/5 sm:block md:basis-1/6"> {link.status} </p>
                <p className="text-sm font-light hidden md:block"> {link.date} </p>
                <span className="bg-black p-2 rounded-full ml-auto lg:hidden" onClick={() => setOpen(prevState => !prevState)}>
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