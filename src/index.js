var state = {
    size: false,
    open_menu: false
}

window.state = state;

var shared = {
    menu: [
        {
            title: "Home",
            url: "/index"
        },
        {
            title: "Blog",
            url: "/md"
        },
        {
            title: "Viewer",
            url: "/tools"
        },
        {
            title: "Library",
            url: "/ref"
        },
        {
            title: "About",
            url: "/about"
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
    ]
}

window.addEventListener("resize", windowResize)

var app, loading;
function windowResize() {
    // loading.style.width = app.style.width = window.innerWidth + 'px';
    // loading.style.height = app.style.height = window.innerHeight + 'px';

    state.size = true;
}

const md = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/home', component: Bar },
    { path: '/md', component: md },
    { path: '/tools', component: Bar },
    { path: '/about', component: Bar }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})


new Vue({
    el: '#app',
    data: { shared, state },
    methods: {
        // 点击菜单
        click_menu() {
            state.open_menu = !state.open_menu;
        }
    },
    mounted() {
        app = this.$refs.app
        loading = this.$refs.loading

    }
    // router
})


// // 阻止双击放大
// var lastTouchEnd = 0;
// document.addEventListener('touchstart', function (event) {
//     if (event.touches.length > 1) {
//         event.preventDefault();
//     }
// });
// document.addEventListener('touchend', function (event) {
//     var now = (new Date()).getTime();
//     if (now - lastTouchEnd <= 300) {
//         event.preventDefault();
//     }
//     lastTouchEnd = now;
// }, false);

// // 阻止双指放大
// document.addEventListener('gesturestart', function (event) {
//     event.preventDefault();
// }); 
// document.body.addEventListener('touchmove', function (e) {
//     e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false}); //passive 参数不能省略，用来兼容ios和android