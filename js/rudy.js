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
        url: 'https://s-bj-1828-rudy.oss.dogecdn.com/music%2FPassi%20-%20Bruno%20Bavota.mp3',
        cover: 'https://s-bj-1828-rudy.oss.dogecdn.com/img/Passi.png',
        lrc: 'https://s-bj-1828-rudy.oss.dogecdn.com/lrc/nolrc.lrc'
    }, {
        name: 'Together At Last',
        artist: 'Alexis Ffrench',
        url: 'https://s-bj-1828-rudy.oss.dogecdn.com/music%2FTogether%20At%20Last%20-%20Alexis%20Ffrench.mp3',
        cover: 'https://s-bj-1828-rudy.oss.dogecdn.com/img/TogetherAtLast.jpg',
        lrc: 'https://s-bj-1828-rudy.oss.dogecdn.com/lrc/nolrc.lrc'
    }]
});