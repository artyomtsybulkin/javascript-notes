console.log('Async JavaScript')

// Async/Await technique
const getIPinfo = async (TOKEN) => {
    const response1 = await fetch(`https://ipinfo.io?token=${TOKEN}`)
    const data1 = await response1.json()
    console.warn('data1: ', data1)
    const response2 = await fetch(`https://ipinfo.io/8.8.8.8?token=${TOKEN}`)
    const data2 = await response2.json()
    console.warn('data2: ', data2)
    return [data1, data2]
}
getIPinfo('16196c4af1e303').then((data) => {
    console.log('result: ', data)
})

// Promises

const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch something here
        resolve('some data')
        reject('some error')
    })
}

getSomething().then((data) => {
    console.log(data)
}, (err) => {
    console.warn(err)
})