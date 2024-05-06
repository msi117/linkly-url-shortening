import { FiChevronDown, FiCopy } from 'react-icons/fi'

const LinksContainer = () => {
    return (
        <section className="mx-auto">
            <div className="bg-gray p-2 rounded-t-md">
                <h1 className="text-xl text-white lg:text-4xl text-start">Short Links</h1>
            </div>
            <div>
                {
                    links.map((link) => {
                        return (
                            <div key={link.shortLink} className="bg-gray my-2 px-2 py-1 text-white flex justify-between items-center">
                                <p className="">{link.shortLink} </p>
                                <FiChevronDown size={24} className="border rounded-full" />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default LinksContainer

// Links
const links = [
    {
        "shortLink": "https://short.url/abc123",
        "originalLink": "https://example.com/page1",
        "QRcode": "https://short.url/abc123/qr",
        "clicks": 100,
        "status": "active",
        "date": "2024-05-06"
    },
    {
        "shortLink": "https://short.url/def456",
        "originalLink": "https://example.com/page2",
        "QRcode": "https://short.url/def456/qr",
        "clicks": 75,
        "status": "active",
        "date": "2024-05-06"
    },
    {
        "shortLink": "https://short.url/ghi789",
        "originalLink": "https://example.com/page3",
        "QRcode": "https://short.url/ghi789/qr",
        "clicks": 50,
        "status": "inactive",
        "date": "2024-05-05"
    },
    {
        "shortLink": "https://short.url/jkl012",
        "originalLink": "https://example.com/page4",
        "QRcode": "https://short.url/jkl012/qr",
        "clicks": 120,
        "status": "active",
        "date": "2024-05-05"
    },
    {
        "shortLink": "https://short.url/mno345",
        "originalLink": "https://example.com/page5",
        "QRcode": "https://short.url/mno345/qr",
        "clicks": 90,
        "status": "active",
        "date": "2024-05-04"
    }
]
