const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootu521z/",
            name: "springbootu521z",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootu521z/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "精品在线试题库系统"
        } 
    }
}
export default base
