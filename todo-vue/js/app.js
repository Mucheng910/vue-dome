(function (window) {
	'use strict';
	var todos=[];
	var len=[];
	//noinspection JSAnnotator

	var app=new Vue({
		el:"#app",
		data:{
			todos:todos,
			text:"",
			len:len
		},
		methods:{
			f:function () {
				window.alert("this.text")
			},
			add:function () {
				if(this.text.trim().length===0){
					return
				}
				this.todos.push({
					text:this.text,
					completed:false
				});
				this.text=""
			},
			del:function (text) {
				var todoIndex;
				this.todos.find(function (todo,index) {
					if(todo.text===text){
						todoIndex=index
					}
				});
				this.todos.splice(todoIndex,1)
			},
			abc:function () {
				for(todo in todos){
					if(todo.complete===false){
						this.len.push( "1");
					}
				}


			}

		}

	});




	// Your starting point. Enjoy the ride!



})(window);
