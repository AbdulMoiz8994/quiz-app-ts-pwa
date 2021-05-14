
const cacheName="Quiz-Web-App"


const addFile=[
    '/',
    'static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/vendors~main.chunk.js',
    '/favicon.ico',
    '/index.html',
    '/logo192.png',
    '/logo512.png',
    '/manifest.json',
    '/serviceWorker.js',
    "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple",
    '/robots.txt'
];

this.addEventListener('activate',() =>{
    console.log("The file has been activated");
})


this.addEventListener('install', (event) =>{
   console.log("The Service Wokrer has installed");
   event.waitUntil(
   caches.open(cacheName).then((data) =>{
       return data.addAll(addFile)
           
   }).catch((err) =>{
     console.log("Error" , err);
   })  
   )
})

this.addEventListener('fetch',(event) =>{
    console.log("Fetch Data", event.request);
    event.respondWith(
    caches.match(event.request).then((response) =>{
       return response || fetch(event.request)
    }).catch((err) =>{
         console.log("Error In Fethcing Data", err);
    })
    )
})