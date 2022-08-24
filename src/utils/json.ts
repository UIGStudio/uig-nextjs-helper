export function safeJsonParse(string: string, returnRaw?: boolean) {
    try {
        return JSON.parse(string);
    } catch (err) {
        return returnRaw ? string : {};
    }
}
