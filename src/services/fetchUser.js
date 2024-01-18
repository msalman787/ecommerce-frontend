const USER_URL = "http://ec2-34-229-171-36.compute-1.amazonaws.com/api/user/"

export function logIn({ username, password }) {
    return fetch(USER_URL, {

    }).then(response => response.json())
}

export function addFavorite({ product_id }) {
    return fetch(USER_URL, {

    }).then(response => response.json())
}