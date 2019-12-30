export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null;
    }
    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
        date = time;
    } else {
        if (typeof time === "string" && /^[0-9]+$/.test(time)) {
            time = parseInt(time);
        }
        if (typeof time === "number" && time.toString().length === 10) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
            return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        return value.toString().padStart(2, "0");
    });
    return time_str;
}

export function formatTime(timestamp) {
    let time = new Date(timestamp);
    let YYYY = time.getFullYear();
    let MM =
        time.getMonth() < 9 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
    let DD = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();

    let HH = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let mm =
        time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let ss =
        time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    // format("YYYY.MM.DD/dddd HH:mm:ss");
    return `${YYYY}-${MM}-${DD} ${HH}:${mm}:${ss}`;
}
