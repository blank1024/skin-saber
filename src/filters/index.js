export { parseTime } from "@/utils";

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
