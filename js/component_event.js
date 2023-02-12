// 이벤트의 발생은 하위 컴포넌트가 상위 컴포넌트에 전달하고 상위 컴포넌트는 해당 이벤트를 수신하여 상위 컴포넌트의 메소드를 호출
//이벤트 발생과 수신은 발생: this.$emit('이벤트명') , 수신: <컴포넌트 이름 v-on:이벤트 명='상위 컴포넌트의 매소드 명'></컴포넌트이름>
// this => 하위 컴포넌트를 가리킴

//  하위 컴포넌트 <child-com></child-com>
Vue.component('child-com', {
    template: "<button v-on:click='showLog'>show</button>", // 1번
    methods:{// 2번
        showLog: function() {
            this.$emit('show-log'); 
        }
    }
});

Vue.component('test-com',{
    template:'<button v-on:click="testLog">test</button>', // a. 이용자한테 클릭 반응을 받았어요 testLog 매소드를 실행시켜주세요.
    methods:{
        testLog: function() {
            this.$emit('test-log') // b. testLog라는 메소드는 test-log라는 이름의 이벤트를 발생시켜주는 메소드야
        }
    }
})


// 상위 컴포넌트(Vue 인스턴스)
new Vue({ 
el: '#app',
data: {
    message: 'Hello vue! passed from Parent Component',
},
methods: {
    printText: function() { //4번
        console.log('이벤트 수신');
    }
}
});

// d. 어! 자식 컴포넌트인 <test-com>이 나한테 testPrint 메소드를 전달해주라고 요청했네!! 전달해야겠다.
new Vue({
    el:'#test',
    methods: {
        testPrint: function(){
            console.log('테스트 이벤트 수신')
        }
    }
})

// 1번. show 버튼을 클릭하면 showLog()라는 메소드가 실행이됨.(showLog 메소드 안에 있는 것을 실행해주세요.)(생각을 해 보면 이용자에게 클릭이라는 반응을 받았기 때문에 v-on인듯)
//2번. showLog라는 매소드는 이벤트 발생 메소드임(this.$emit). => 'show-log'라는 이름의 이벤트를 발생을 시킴
//3번(html에 있는 <child-com>). 여기서 2번의 show-log라는 이름의 이벤트가 부모의 어떤 메소드를 받아올 것인지 전달.
//4번. 상위컴포넌트는 자신한테 있는 메소드명 printText 라는 것을 하위 컴포넌트인 <child-com>에 전달