export default function Footer() {
    return (
        <footer className="bg-gray-950 px-10 sm:px-20 md:px-36 lg:px-48 xl:px-72 pt-16 pb-10 flex flex-col justify-between gap-48">
            <div className="flex justify-between flex-wrap gap-16">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Address</h1>
                    <p>Zimbabwe</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">Contact</h1>
                    <p>example@gmail.com</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">Socials</h1>
                    <div className="flex gap-4">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.37214 23.9997H0.396429V7.97649H5.37214V23.9997ZM2.88161 5.79078C1.29054 5.79078 0 4.47292 0 2.88185C1.13882e-08 2.1176 0.303597 1.38465 0.844003 0.844247C1.38441 0.303841 2.11736 0.000244141 2.88161 0.000244141C3.64586 0.000244141 4.3788 0.303841 4.91921 0.844247C5.45962 1.38465 5.76321 2.1176 5.76321 2.88185C5.76321 4.47292 4.47214 5.79078 2.88161 5.79078ZM23.9946 23.9997H19.0296V16.1997C19.0296 14.3408 18.9921 11.9569 16.4427 11.9569C13.8557 11.9569 13.4593 13.9765 13.4593 16.0658V23.9997H8.48893V7.97649H13.2611V10.1622H13.3307C13.995 8.90328 15.6177 7.57471 18.0386 7.57471C23.0743 7.57471 24 10.8908 24 15.1979V23.9997H23.9946Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                @2024 All Rights Reserved
            </div>
        </footer>
    );
}
