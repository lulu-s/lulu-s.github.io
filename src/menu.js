// import './ref';

var shared = {
    menu: [
        {
            name: '主页',
            title: "Home",
            url: "/index"
        },
        {
            name: '博客',
            title: "Blog",
            url: "/page/md"
        },
        {
            name: '日常练习',
            title: "Viewer",
            url: "/page/visuals",
        },
        {
            name: '基础元件',
            title: "Element",
            url: "/page/elements",
        },
        {
            name: '参考库',
            title: "Reference",
            url: "/page/ref"
        },
        // {
        //     title: "About",
        //     url: "/page/about"
        // }
    ],
    refs: [
        // {
        //     link: '地址',
        //     cover: '头图',
        //     title: "标题",
        //     date: "添加日期",
        //     key: ['tag1', 'tag1', 'tag1'] 
        // },
        {
            link: 'https://dailycssdesign.com/',
            cover: '../../assets/image/refs/dailycssdesign.png',
            title: "DailyCssDesign",
            subtitle: "每日创建一个设计",
            date: "2022.09.20",
            key: ['shader', 'three.js']
        },
        {
            link: 'https://codepen.io/vcomics/pens/popular',
            cover: '../../assets/image/refs/Victor Vergara.png',
            title: "Victor Vergara CodePen",
            subtitle: "Many Shader Three.js",
            date: "2022.03.25",
            key: ['shader', 'three.js', 'person', "CodePen"]
        },
        {
            link: 'https://codepen.io/vcomics/pen/djqNrm',
            cover: '../../assets/image/refs/Perlin Noise.png',
            title: "Perlin Noise",
            subtitle: "nosie 的一种应用",
            date: "2022.03.25",
            key: ['shader', 'three.js', 'noise', "CodePen"]
        },
        {
            link: 'https://codepen.io/vcomics/pen/ZjMpOe',
            cover: '../../assets/image/refs/Shader Moon.png',
            title: "Shader Moon",
            subtitle: "nosie 的一种应用",
            date: "2022.03.25",
            key: ['shader', 'three.js', 'noise', "CodePen"]
        },
        {
            link: 'https://codepen.io/robin-dela/pen/qxzzzd',
            cover: '../../assets/image/refs/Loader concept.png',
            title: "Loader concept",
            subtitle: "process 风格化",
            date: "2022.03.25",
            key: ['three.js', "进度条", "CodePen"]
        },
        {
            link: 'https://thebookofshaders.com/?lan=ch',
            cover: '../../assets/image/refs/thebookofshader.png',
            title: "The Book of Shaders",
            subtitle: "shader 着色器教学指南",
            date: "2022.03.24",
            key: ['shader', '教学', "book"]
        },
        {
            link: 'https://kynd.github.io/p5sketches/index.html',
            cover: '../../assets/image/refs/p5skecth.png',
            title: "Sketching with Math and Quasi Physics",
            subtitle: "P5.js绘制可视化数学公式",
            date: "2022.03.24",
            key: ['P5.js', '数学']
        },
        {
            link: 'https://sighack.com/post/cohen-sutherland-line-clipping-algorithm',
            cover: '../../assets/image/refs/Cohen-Sutherland.png',
            title: "The Cohen-Sutherland Line Clipping Algorithm",
            date: "2021.08.18",
            key: ['shader', 'blog', '生成艺术']
        },
        {
            link: 'https://sighack.com/post/flood-fill-art-using-random-walks',
            cover: '../../assets/image/refs/flood-fill.png',
            title: "Flood-Fill Art Using Random Walks",
            date: "2021.08.18",
            key: ['shader', 'blog', '生成艺术']
        },
        {
            link: 'https://spite.github.io/sketch/',
            cover: '../../assets/image/refs/DIGITAL-INKTOBER.png',
            title: "DIGITAL INKTOBER 2020",
            date: "2021.08.18",
            key: ['shader', '组', '生成艺术']
        }
    ],
    viewer: [
        {
            url: '/examples/1/index.html#1',
            title: "Shader Demo",
            date: "2022.03.28",
            author: 'lulu',
            ref: {
                title: "thebookofshaders",
                url: "https://thebookofshaders.com/04/?lan=ch",
            },
            css: {
                bg_img: '../../assets/image/cover/page1.png'
            }
        },
        {
            url: '/examples/2/index.html#2',
            title: "Shader Demo2",
            date: "2023.02.01",
            author: 'lulu',
            ref: {
                title: "Three.js 进阶之旅：Shader着色器基础图案-旷野之息神庙铁球 ",
                url: ["https://juejin.cn/post/7158628520623603748"],
            },
            css: {
                bg_img: '../../assets/image/cover/page2.png'
            }
        },
        // {
        //     url: '/examples/2/index.html#2',
        //     title: "Water Shader Demo",
        //     date: "2022.10.08",
        //     author: 'lulu',
        //     ref: {
        //         title: "thebookofshaders",
        //         url: ["https://threejs.org/examples/webgl_water.html", "https://threejs.org/examples/webgl_shaders_ocean.html"],
        //     },
        //     css: {
        //         bg_img: '../../assets/image/cover/page2.png'
        //     }
        // },
        // {
        //     url: '/examples/3/index.html#3',
        //     title: "🚩 Fly the national flag",
        //     date: "2022.02.17",
        //     author: 'lulu',
        //     css: {
        //         bg_img: '../../assets/image/cover/page3.png'
        //     }
        // },
    ],
    elements: [
        {
            url: '/elements/1/index.html#1',
            title: "旋转的圆 + 字",
            date: "2022.05.23",
            author: 'lulu',
            css: {
                bg_img: '../../assets/image/cover/element-circle.png'
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