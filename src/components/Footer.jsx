export default function Footer() {
    const linkedin = "https://www.linkedin.com/in/fitrahidayaat/";

    const email = "fitrahidayaat@gmail.com";
    const address = "Indonesia";

    return (
        <footer className="bg-gray-950 px-10 sm:px-20 md:px-36 lg:px-48 xl:px-72 pt-16 pb-10 flex flex-col justify-between gap-48">
            <div className="flex justify-between flex-wrap gap-16">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Address</h1>
                    <p>{address}</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">Contact</h1>
                    <p>{email}</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">Socials</h1>
                    <div className="flex gap-4">

                        <a href={linkedin}>
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
                        </a>
                    </div>
                </div>
            </div>
            <div>@2024 All Rights Reserved</div>
        </footer>
    );
}
