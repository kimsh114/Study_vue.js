<template>
  <div id="app">
<!-- 어플 이름 표시 -->
  <TodoHeader></TodoHeader> 
  <!-- 할 일 입력 및 추가 -->
<!-- addTodo_test => 이벤트명, addTodo1=> 상위컴포넌트의 메소드명 -->
  <!--여기서 이벤트를 받아서 상위컴포넌트인 app에 addTodo1이라는 매소드를 실행해주라고 전달하는 곳 -->
  <TodoInput v-on:addTodo_test="addTodo1"></TodoInput>
  <!-- 할 일 목록 표시 및 특정 할 일 삭제 -->
  <!-- v-bind:propsdata="todoItems" => 리스트에 뿌려주기 위함.-->
  <!--  propsdata => props 속성의 이름, todoItems는 상위 컴포넌트인 id = app의 데이터 속성을 정의-->
  <TodoList v-bind:propsdata="todoItems"  v-on:removeTodo="removeTodo"></TodoList>
  <!-- 할 일 모두 삭제 -->
  <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  // 1번. 입력 및 삭제 반응을 바로 표현해 주기 위해 app.vue에 데이터 속성인 todoItems를 선언
  data() {
  return{
            // 로컬 스토리지의 데이터를 담을 todoItems 데이터의 속성을 빈 배열로 선언.
        // 객체가 아닌 빈 배열로 선언한 이유는 v-for 목록 렌더링에 활용하기 위함.
todoItems:[]
  }
  },
  // created 라이프 사이클 훅에 for 반복문과 push()로 로컬 스토리지의 모든 데이터를 todoItems에 담는 로직

  // 상위 컴포넌트인 app에서 이제 관리를 해주기 때문에 TodoList에서 이 쪽으로 옮김.
  created() {
    if(localStorage.length > 0){
        
        // for 초기문, 조건문, 증감문
        for(var i =0; i < localStorage.length; i++) {
             // localStorage.key(i) != "loglevel:webpack-dev-server"  => 이거는 loglevel 머시기가 계속 디폴트로 초기화되서 해준거임.
            if (localStorage.key(i) != "loglevel:webpack-dev-server") {
                this.todoItems.push(localStorage.key(i));
                        }
        }
        // localStorage에 데이터가 있을 경우 localStorage의 key를 i 개 만큼 푸쉬해준다.
        // push() => 배열의 끝 요소에 배열의 아이템을 하나씩 추가하는 js내장 APi
    }
},
  methods:{
    // 상위 컴포넌트인 app은 TodoInput에 addTodo1을 전달
    // addTodo1의 인자값인 todoItem1은 TodoInput 컴포넌트에서 올려 보낸 할 일 텍스트 값이다.
    //todoItem1 은 TodoInput의 value이다.
    addTodo1(todoItem1){
      // 로컬 스토리지에 데이터를 추가하는 로직
        localStorage.setItem (todoItem1,todoItem1); 
        this.todoItems.push(todoItem1)
//setItem => 로컬스토리지에 데이터를 추가하는 Api// Api의 형태는 key, value 구조
    },
    clearAll(){
      // this.todoItems=[]; =>전부 다 삭제하는거니까 todoItems를 빈공간으로 만들어라
      
      localStorage.clear();
      this.todoItems=[];
    },
    // TodoList에서 옮김.
    removeTodo(todoItem,index){
      localStorage.removeItem(todoItem);
        // removeItem() => 로컬스토리지의 데이터를 삭제하는 api 
        // splice => 특정 인덱스를 삭제하는 js api  
        this.todoItems.splice(index,1); // 1=> 화면에서 한 개만 삭제됨.
        console.log(todoItem, '삭제')
    }
  }
  ,
 components: {
  'TodoHeader': TodoHeader,
  'TodoInput':TodoInput,
  'TodoList' : TodoList,
  'TodoFooter' : TodoFooter

}

}
</script>

<style>
body {
    text-align: center;
    background-color: #e5fbc2;
}
input{
    border-style: groove;
    width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>

<!--# TodoInput에서 입력한 정보를 바로 TodoList에 뿌리는 과정 -->
<!-- 핵심은 자식 컴포넌트에서만 각각 주고 받던 데이터를 상위컴포넌트인 app에서 데이터를 받고 데이터를 뿌려주는 것이 핵심.-->
<!-- TodoInput에서 이벤트가 발생했다고 app에 전달해주면 app은 해당되는 메소드를 실행한 후에 -->
<!-- 그 정보를 받아서 TodoList에 뿌려주는 식 -->

<!-- 세부적인 과정 -->
<!--
1. TodoInput의 v-on:keyup.enter = 'addTodo'이벤트 때문에 TodoInput에 있는 addTodo메소드가 실행됨.
그 메소드는 this.$emit('addTodo_test', value) 즉, addTodo_test라는 이름의 이벤트가 발생하는 것임.

2.  이 addTodo_test라는 이벤트는 <TodoInput v-on:addTodo_test="addTodo1"></TodoInput>에 의해 
상위컴포넌트의 addTodo1 이라는 메소드를 호출하는 것.

3. addTodo1의 내용은 입력받은 내용을 로컬스토리지에 저장하는 것과 todoItems 배열에 추가를 해주는 것

4. 이렇게 저장한 데이터를 바로 TodoList에 뿌려주기 위해  TodoList에 props:['propsdata'] propsdata라는 이름으로 props 속성을 정의

5.  <TodoList v-bind:propsdata="todoItems"></TodoList> =>
v-bind를 이용해서 상위컴포넌트인 app의 todoItems 데이터를 TodoList로 전달

6.  <li v-for = '(todoItem,index) in propsdata' :key="todoItem" class='shadow'> 
  todoList는 propsdata를 받아서 todoItem이라는 변수로  {{todoItem }} 이렇게 데이터를 화면에 뿌려줌

-->