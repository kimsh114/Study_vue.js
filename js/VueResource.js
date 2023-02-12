//버튼을 하나 추가하고 클릭을 하면 지정한 url의 데이터를 가져오는 예제이다.

new Vue ({
    el:'#app',
    methods: {
        getData: function(){
             //this.$http.get을 이용해 해당 url에서 제공하는 데이터를 받아온다.// HTTP GET 요청을 서버에 보내고 특정 데이터를 받아오는 역할이다.
            this.$http.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
//해당 uel로 HTTP GET요청을 보내고 나면 .then 안에서 응답을 받은 데이터 response를 콘솔에 출력한다.
            .then(function(response) {
                console.log(response);
                console.log(JSON.parse(response.data));
//JSON.parse=> 응답 데이터의 body값이 문자열이기 떄문에 이 js API를 이용해 js객체로 보기 쉽게 변환
            });
        }
    }
});