const ap5 = new APlayer({
    element: document.getElementById('player5'),
    mini: false,
    autoplay: false,
    lrcType: 3,
    mutex: true,
    theme: '#e9e9e9',
    listFolded: false,
    listMaxHeight: 80,
    // 封面来自https://sm.ms网站图床
    // url来自icloud共享
    audio: [{
        name: 'Take the Time',
        artist: 'Robin Spielberg',
        url: 'https://cvws.icloud-content.com/B/AdZgPhl8IPMPwQ6--L6SnPLbklfFAccAYauUOv3pIMkR1I2gMGUENkUs/Robin%20Spielberg%20-%20Take%20the%20Time.mp3?o=AhWF1ivDVx41TAtP7bbiNxY7goJ1SI6yzahOj0PXw1V6&v=1&x=3&a=CAogu2JfzzoISjtAGZfByOMWxkjuOKLP3EbAEU179e1eYOwSbRC67trdri8Yusu2364vIgEAUgTbklfFWgQENkUsaib1vwTUR9zVT7LkDszuRRSVCFVnZcbdDgYdbsgLJLSOJMth5EAjEHImWaBUfTLhfS14ZmegxqVV7XEK76-7LOUd4ETKEtS2p8gxu5lPWTQ&e=1627455858&fl=&r=4db694c5-7ddb-4792-b278-f67cb8a574ba-1&k=LSpqb_1D1D2X0Ppg66cJfQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=34&s=XqW68xapK-syfFXTbkE73XdDPsw&%20=f22ae175-e728-4c29-8f3e-2b5db533a52b',
        cover: 'https://i.loli.net/2021/07/28/NoQ192AMJSxPyz7.png',
        lrc: '../lrc/nolrc.lrc'
    }]
});