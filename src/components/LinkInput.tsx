import { useEffect, useState } from "react"
import Button from "./Button"
import { FiArrowRight } from 'react-icons/fi'

const LinkInput = () => {
    const [link, setLink] = useState<string>("")
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleCheckbox = async () => {
        setIsChecked(!isChecked)
        if (!isChecked) {
            await handleAutoPaste()
        }
    }

    const handleAutoPaste = async () => {
        const clipboardText = await navigator.clipboard.readText()
        setLink(clipboardText)
        console.log(clipboardText)
    }

    return (
        <div className="text-lite flex flex-col justify-center items-center mt-8 gap-4">
            <div className="text-center flex flex-col justify-center items-center mx-10 md:gap-2">
                <h1 className="p-2 text-2xl lg:text-5xl inline-block font-bold from-primary via-secondary to-primary bg-gradient-to-r bg-clip-text text-transparent">Shorten Your Loooong Links :)</h1>
                <p className="text-xs w-3/4 md:w-6/12 lg:w-8/12 lg:text-sm">Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
            </div>
            <div className="w-10/12 mt-4 flex justify-center items-center">
                <label htmlFor="link" className="flex justify-center items-center w-full rounded-full relative py-2 md:w-10/12 lg:w-8/12">
                    <input type="text" name="link" value={link} onChange={(e) => setLink(e.target.value)} className="pl-4 w-full bg-gray ring-2 rounded-full absolute lg:py-1.5" />
                    <Button className="bg-primary ring-primary absolute right-1"> <FiArrowRight /> </Button>
                </label>
            </div>
            <div className="mt-6 py-2">
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={isChecked} onChange={handleCheckbox} />
                    <div className="relative ring-1 w-11 h-6 bg-gray peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-lite rounded-full peer 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                     after:bg-primary after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray">
                    </div>
                    <span className="ms-3 text-sm font-regular text-white dark:text-gray-300">Auto Paste from Clipboard</span>
                </label>

            </div>

        </div>
    )
}

export default LinkInput