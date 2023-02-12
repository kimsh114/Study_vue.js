

var cmp = {
    template: '<div>여기는 지역컴포넌트</div>'
};
var cmp2 = {
    template: '<div>두 번째 지역컴포넌트</div>'
}
var cmp3 = {
    template:'<button>세 번째 지역변수 버튼</button>'
}

Vue.component('my-global',{
    template:'<div>여기는 전역컴포넌트</div>'
});

new Vue({
    el:'#app',
    components: {
        'my-local':cmp
    }
});

new Vue({
    el: '#app2',
components:{
    'my-local2':cmp2
}
});

new Vue({
    el:'.app3',
    components:{
        'my-local3':cmp3
    }
});