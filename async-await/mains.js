const wait = (ms=0) => new Promise(resolve => setTimeout(resolve, ms))

async function go () {
    console.log('Start')
    await wait(1000)
    console.log('Running')
    await wait(2000)
    console.log('Ending')

}

go()














