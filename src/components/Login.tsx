import Button from "./Button";

export default function Login({ handleClose }) {
    return (
        <>

            {/* 
                TODO Fix the Login and Register Modal
                TODO Add a form to the modal
                TODO State management for the form                
             */}
            <div className="text-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Login
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <input type="text" placeholder="Email" className="w-full p-2 my-2 bg-gray border border-solid border-blueGray-200 rounded" />
                            <input type="password" placeholder="Password" className="w-full p-2 my-2 bg-gray border border-solid border-blueGray-200 rounded" />
                            <Button handleButton={handleClose}>  Login  </Button>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            {/* Footer Content */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}