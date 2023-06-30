// Handling success and errors with async/await
async function getUser() {
    try {
        // Handle success in try
        const response = await fetch('https://api.github.com/users/octocat')
        const data = await response.json()
        console.log(data)
        console.log(12)

    } catch (error) {
        // Handle error in catch
        console.error(error)
    }
}
// Execute async function
getUser()
console.log(13);