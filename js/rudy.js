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
        cover: '../img/Passi.png',
        lrc: '../lrc/nolrc.lrc'
    }, {
        name: 'Together At Last',
        artist: 'Alexis Ffrench',
        url: '../music/Together At Last - Alexis Ffrench.mp3',
        cover: '../img/TogetherAtLast.jpg',
        lrc: '../lrc/nolrc.lrc'
    }, {
        name: '本当の优しさとは…',
        artist: '渡辺俊幸',
        url: '../music/本当の优しさとは… - 渡辺俊幸.mp3',
        cover: '../img/本当の优しさとは… - 渡辺俊幸.jpg',
        lrc: '../lrc/nolrc.lrc'
    }]
});