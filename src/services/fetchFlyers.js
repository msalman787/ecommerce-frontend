const FLYER_URL = "/api/flyers/category/"

export function fetchFlyers(category) {
    return () => {
        return fetch(`${FLYER_URL}${category}`)
            .then(response => response.json())
    }
}