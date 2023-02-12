// 같은 레벨의 자식 컴포넌트끼리 데이터를 주고 받는 방법
// 근데 이 코드는 자식 컴포넌트가 상위 컴포넌트에게 이벤트 버스로 쉽게 전달해주는 코드이다.

var eventBus = new Vue(); // eventBus라는 변수로 해 추가 인스턴스를 생성함.

//1번
Vue.component('child-com', {
    template: "<div>하위 컴포넌트 입니다.<button v-on:click='showLog'>show</button></div>", //2번 이벤트를 보내는 컴포넌트
    methods:{
        showLog: function() {
            eventBus.$emit('triggerEventBus',100); //eventBus.$emit('이벤트명',데이터 값)
            eventBus.$emit('test',200)
        }
    }
});


var app = new Vue({
    el:'#app',
    created: function() {
        //3번 이벤트를 받는 컴포넌트
        eventBus.$on('triggerEventBus',function(value) {
            console.log('이벤트를 전달받음, 전달 받은 값:', value);
        });
        //eventBus.$on('이벤트명', function(데이터)...)// 데이터를 함수의 전달값으로 받음.
    }
});

var test = new Vue({
    el:'#test',
    created: function() {
        eventBus.$on('test',function(value) {
            console.log('child-com의 이벤트를 전달받음, 전달값은:',value)
        })
    }
})