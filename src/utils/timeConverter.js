
export function getSeconds(sec) {
    return sec % 60
}

export function getMinutes(sec) {
    return Math.floor(sec / 60) % 60
}

export function getHours(sec) {
    return Math.floor(sec / 3600) % 24
}

export function getDays(sec) {
    return Math.floor(sec / (3600 * 24)) % 31
}