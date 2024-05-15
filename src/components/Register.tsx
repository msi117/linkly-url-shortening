import { useState } from "react";
import Button from "./Button";
import { FiX } from "react-icons/fi";

export default function Register({ handleRegister }: { handleRegister: () => void }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email, password)

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(email, password)
        handleRegister()
    }

    return (
        <>
            <div className="text-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="bg-black border-2 border-gray rounded-lg relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-between p-5">
                            <h3 className="ml-4 text-3xl from-primary via-secondary to-primary bg-gradient-to-r bg-clip-text text-transparent font-semibold">
                                Register
                            </h3>
                            <span onClick={handleRegister} className="bg-black border p-2 rounded-full ml-2 cursor-pointer hover:scale-75"><FiX /></span>
                        </div>
                        {/*body*/}
                        <form onSubmit={handleSubmit}>
                            <div className="relative mx-4 px-4 md:mx-6 lg:mx-8 flex-auto min-w-4/5">
                                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" className="w-full text-center p-2 my-2 bg-gray ring-2 ring-primary border border-solid rounded-full" />
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full text-center p-2 my-2 bg-gray ring-2 ring-primary border border-solid rounded-full" />
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Confirm Password" className="w-full text-center p-2 my-2 bg-gray ring-2 ring-primary border border-solid rounded-full" />
                                <Button className="mt-3 py-2.5 min-w-full md:min-w-0 md:mx-auto lg:px-28 px-20">  Register  </Button>
                                <p className="underline text-center mt-4 text-xs">Lost your password?</p>
                            </div>
                        </form>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6">
                            {/* Footer Content */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}