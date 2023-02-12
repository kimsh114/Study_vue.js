new Vue ({
    el:'#app',
    methods: {
        getData: function(){
            // aixos get 요청
            axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
            // 데이터를 정상적으로 불러왔으면  .then의 로직을 실행
            .then(function(response) {
                console.log(response);
                // Resource와 다르게 data속성이 문자열이 아닌 객체 형태임. 그러므로 JSON.parse를 사용할 필요가 없음.
            });
            //여기에 .catch 로직으로 적어주면 만약 데이터를 정상적으로 불러오지 못할 경우 .catch의 로직이 수행됨.
        }
    }
});