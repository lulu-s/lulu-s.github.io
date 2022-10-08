

var ao = {
    // uuid
    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    // 转换日期
    getMyDate(str) {
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth() + 1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oBase = this.addZero(oYear) + '-' + this.addZero(oMonth) + '-' + this.addZero(oDay),
            oFull = this.addZero(oYear) + '-' + this.addZero(oMonth) + '-' + this.addZero(oDay) + " " + this.addZero(oHour) + ":" + this.addZero(oMin) + ":" + this.addZero(oSen);
        return {
            years: oYear,
            months: oMonth,
            days: oDay,
            hours: oHour,
            minutes: oMin,
            seconds: oSen,
            base: oBase,
            full: oFull,
            ms: oDate.getTime()
        }
    },
    //补零操作
    addZero(num) {
        if (parseInt(num) < 10) {
            num = "0" + num;
        }
        return num;
    }
}

module.exports = ao;