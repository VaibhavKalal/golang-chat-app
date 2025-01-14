const socket = new WebSocket('ws://localhost:8080/ws')

const connect = (cb) => {
    console.log("connecting")

    socket.onopen = () => {
        console.log("successfully connected")
    }

    socket.onmessage = (msg) => {
        console.log("message from websocket:", msg)
        cb(msg)
    }

    socket.onclose = (event) => {
        console.log("socket closed connection:", event)
    }

    socket.onerror = (error) => {
        console.log("socket error:", error)
    }
}

const sendMsg = (msg) => {
    console.log("sending msg:", msg)
    socket.send(msg)
}

export { connect, sendMsg }