var shared = {
    lists: [
        {
            title: "文章1",
            tag: ["标签1", "标签2"]
        },
        {
            title: "文章2",
            tag: ["标签1", "标签2"]
        },
        {
            title: "文章3",
            tag: ["标签1", "标签2"]
        }
    ]
}



new Vue({
    el: '#app',
    data: shared
})