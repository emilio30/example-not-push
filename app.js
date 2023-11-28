// app.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
            console.error('Error al registrar el Service Worker:', error);
        });
}

if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Permisos de notificación concedidos');
        }
    });
}