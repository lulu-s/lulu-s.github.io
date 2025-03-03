let city = 101010100;

// 获取 private key
async function get_key() {
    try {
        var res = await(await fetch(`./key.txt`)).text()
        return res;
    } catch (error) {
        console.log('获取key失败, 请检查key.txt文件是否存在')
        return ''
    }
}

// 获取实时天气
async function get_now_weather(privateKey = '') {
    try {
        var res = await(await fetch(`https://devapi.qweather.com/v7/weather/now?location=${city}&key=${privateKey}`)).json()
        if(res.code === '200'){
            return res;
        }else{
            console.log('获取实时天气失败, 请检查key是否正确')
            return ''
        }
    } catch (error) {
        console.log('获取实时天气失败, 请检查key是否正确')
        return ''
    }
}



