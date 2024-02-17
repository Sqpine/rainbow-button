window.onWalletConnected = function (address) {
    alert(`Wallet connected: ${address}`)
}

window.onWalletDisconnected = function () {
    alert(`Wallet disconnected`)
}