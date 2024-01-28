const USER_URL = "http://ec2-34-229-171-36.compute-1.amazonaws.com/api/user"

export async function logIn(email, password) {
    const responseToken = await fetch(`${USER_URL}/token/`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    const tokenData = await responseToken.json()
    if (!Object.keys(tokenData).includes('token')) {
        return { 'status': 'failed', data: tokenData }
    }

    const response = await fetch(`${USER_URL}/me/`, {
        method: 'GET',
        headers: { Authorization: `Token ${tokenData['token']}` }
    })
    const data = await response.json()

    return { 'status': response.status, data }
}

export async function signUp(name, email, password) {
    const body = {
        "email": email,
        "password": password,
        "name": name,
        favorites: [],
    }

    const response = await fetch(`${USER_URL}/create/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })

    console.log('sign up response', response.status)
    const data = await response.json()
    console.log('sign up data', data)

    return { 'status': response.status, data }
}

// export function addFavorite({ product_id }) {
//     return fetch(USER_URL, {

//     }).then(response => response.json())
// }