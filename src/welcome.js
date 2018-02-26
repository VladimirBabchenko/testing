export default function (message, name) {
    if (NODE_ENV == "development") {
        console.log(message)
    }

    alert(`Welcome ${message} ${name}`)
}
