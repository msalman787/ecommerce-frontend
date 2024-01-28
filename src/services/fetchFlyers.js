const FLYER_URL = "http://ec2-34-229-171-36.compute-1.amazonaws.com/api/flyers/category"

export function fetchFlyers(category) {
    return () => {
        return fetch(`${FLYER_URL}/${category}`)
            .then(response => response.json())
    }
}