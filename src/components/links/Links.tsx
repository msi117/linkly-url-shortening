import './Links.scss'
import { FiChevronDown, FiCopy } from 'react-icons/fi'

interface Data {
    urlId: string;
    originalUrl: string;
    shortUrl: string;
    clicks: number;
    date: string;
}
const linksData: Data[] = [
    {
      urlId: "1",
      originalUrl: "https://example.com/page1",
      shortUrl: "https://shorturl.com/abc",
      clicks: 10,
      date: "2023-07-26",
    },
    {
      urlId: "2",
      originalUrl: "https://example.com/page2",
      shortUrl: "https://shorturl.com/def",
      clicks: 15,
      date: "2023-07-25",
    },
    {
      urlId: "3",
      originalUrl: "https://example.com/page3",
      shortUrl: "https://shorturl.com/ghi",
      clicks: 5,
      date: "2023-07-24",
    },
    {
      urlId: "4",
      originalUrl: "https://example.com/page4",
      shortUrl: "https://shorturl.com/jkl",
      clicks: 20,
      date: "2023-07-23",
    },
    {
      urlId: "5",
      originalUrl: "https://example.com/page5",
      shortUrl: "https://shorturl.com/mno",
      clicks: 8,
      date: "2023-07-22",
    },
  ];
  


const Links =  () => {
  return (
    <div className='links-container'>
    <div className='links-header'>
        <h3>Short Link</h3>
        <h3>Original Link</h3>
        <h3>QR Code</h3>
        <h3>Status</h3>
        <h3>Date</h3>
    </div>
    {linksData.map((data) => (
        <div key={data.urlId} className='links'>
          <p>{data.shortUrl} <span><FiCopy /> </span> </p>
          <p><FiChevronDown /></p>
          <p>{data.originalUrl}</p>
          <p>Generate QR Code Here</p> {/* Add QR code generation logic here */}
          <p>{data.clicks} clicks</p>
          <p>{data.date}</p>
        </div>
      ))}
    </div>
  )
}

export default Links