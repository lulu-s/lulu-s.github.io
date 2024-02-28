let city = 101010100;

// 获取 private key
async function get_key() {
    var res = await(await fetch(`./key.txt`)).text()
    return res;
}

// 获取实时天气
async function get_now_weather(privateKey = '') {
    var res = await(await fetch(`https://devapi.qweather.com/v7/weather/now?location=${city}&key=${privateKey}`)).json()
    return res;
}
