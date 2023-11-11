if('serviceWorker' in navigator)
{
    console.log('Andando Service Worker');
    navigator.serviceWorker.register('./sw.js')
    .then(res=> console.log('serviceWorker cargando Correctamente'))
    .catch(err => console.log('serviceWorker no se ha podido registrar', err));
}
else{
    console.log('Aun no lo puedes usar, hechale ganas papito');
}