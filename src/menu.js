var shared = {
    menu: [
        {
            title: "Home",
            url: "/index"
        },
        {
            title: "Blog",
            url: "/page/md"
        },
        {
            title: "Viewer",
            url: "/page/visuals",
            children: [
                {
                    key: '01_demo',
                    url: '/page/demo/01_demo',
                    title: "Test",
                    date: "2021.05.09",
                    author: 'Henrik Rydgård',
                    author_url: "https://webglsamples.org/electricflower/electricflower.html",
                    css: {
                        bg_img: '../../assets/image/cover/01_demo.png'
                    }
                },
                {
                    key: '01_demo',
                    url: '/page/demo/01_demo',
                    title: "Test",
                    date: "2021.05.09",
                    author: 'Henrik Rydgård',
                    author_url: "https://webglsamples.org/electricflower/electricflower.html",
                    css: {
                        bg_img: '../../assets/image/cover/01_demo.png'
                    }
                }
            ]
        },
        {
            title: "Library",
            url: "/page/ref"
        },
        {
            title: "About",
            url: "/page/about"
        }
    ],
    viewer: [
        {
            url: '/page/demo/01_demo',
            title: "Test",
            date: "2021.05.09",
            author: 'Henrik Rydgård',
            link: '../../assets/image/cover/01_demo.png',
            author_url: "https://webglsamples.org/electricflower/electricflower.html",
            css: {
                bg_img: '../../assets/image/cover/01_demo.png'
            }
        }
    ],
    lists: [
        {
            title: "文章1",
            tag: ["标签1", "标签2"],
            detail: "步进电机通常被用在工业机械结构中，作为工业驱动，比如机械臂，精密传送带等。机器的“声音”不是唱出来的，是震出来的。大家都在研究机器的「降噪」，而我们要利用他的「噪音」来做乐器。根据步进电机振动的特点，我们将MIDI文件，通过Arduino编写的程序控制步进电机的旋转频率，使三个电机有规律的振动，“弹奏”出有旋律的音乐，让大家可以感受到 gear 的魅力。"
        },
        {
            title: "文章2",
            tag: ["标签1", "标签2"],
            detail: "步进电机通常被用在工业机械结构中，作为工业驱动，比如机械臂，精密传送带等。机器的“声音”不是唱出来的，是震出来的。大家都在研究机器的「降噪」，而我们要利用他的「噪音」来做乐器。根据步进电机振动的特点，我们将MIDI文件，通过Arduino编写的程序控制步进电机的旋转频率，使三个电机有规律的振动，“弹奏”出有旋律的音乐，让大家可以感受到 gear 的魅力。"
        },
        {
            title: "文章3",
            tag: ["标签1", "标签2"],
            detail: "步进电机通常被用在工业机械结构中，作为工业驱动，比如机械臂，精密传送带等。机器的“声音”不是唱出来的，是震出来的。大家都在研究机器的「降噪」，而我们要利用他的「噪音」来做乐器。根据步进电机振动的特点，我们将MIDI文件，通过Arduino编写的程序控制步进电机的旋转频率，使三个电机有规律的振动，“弹奏”出有旋律的音乐，让大家可以感受到 gear 的魅力。"
        }
    ],
    menu_key: {}
}


shared.menu.forEach(m => {
    shared.menu_key[m.title] = m;
})

window.shared = shared