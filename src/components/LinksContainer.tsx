import LinkComponent from './LinkComponent'

const LinksContainer = () => {

    return (
        <section className="mx-auto w-11/12 text-white">
            <div className='flex gap-2 items-center bg-gray my-2 px-2 py-1 rounded-t-lg'>
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
