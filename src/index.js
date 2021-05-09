var state = {
    size: false,
    open_menu: false
}

window.state = state;

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
    { path: '/visuals', component: Bar },
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