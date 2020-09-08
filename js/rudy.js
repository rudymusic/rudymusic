const ap5 = new APlayer({
    element: document.getElementById('player5'),
    mini: false,
    autoplay: false,
    lrcType: 3,
    mutex: true,
    theme: '#e9e9e9',
    listFolded: false,
    listMaxHeight: 80,
    audio: [{
        name: 'Passi',
        artist: 'Bruno Bavota',
        url: '../music/Passi - Bruno Bavota.mp3',
        cover: '../Passi - Bruno Bavota.png'
    }, {
        name: 'Together At Last',
        artist: 'Alexis Ffrench',
        url: '../music/Together At Last - Alexis Ffrench.mp3',
        cover: '../music/Together At Last - Alexis Ffrench.jpg'
    }, {
        name: '前前前世',
        artist: 'RADWIMPS',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
    }]
});