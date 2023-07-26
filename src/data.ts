interface Data {
    urlId: string;
    originalUrl: string;
    shortUrl: string;
    clicks: number;
    date: string;
}
const storeData = async (data: Data) => {
    const existingData: Data[] = await JSON.parse(sessionStorage.getItem("myData") || "[]") as Data[];

    existingData.push(data)

    sessionStorage.setItem('links', JSON.stringify(existingData))

    return existingData
}

export {storeData}