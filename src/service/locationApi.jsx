
export const LocationApi = {
    location() {
        return fetch('/location.json').then((res) => res.json())
    }
}