
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/


let list = [];
let namesArray = [];
let plansArray = [];

try{
	namesArray = JSON.parse(localStorage.getItem('names'));
	plansArray = JSON.parse(localStorage.getItem('plans'));
	console.log(namesArray.length);
	console.log(plansArray);
	console.log(namesArray);
	for (let i = 0; i < namesArray.length; i++){
		let li = document.createElement("li");
		let h2 = document.createElement("h2");
		let p = document.createElement("p");
		let nameText = document.createTextNode(namesArray[i]);
		let plansText = document.createTextNode(plansArray[i]);
		h2.appendChild(nameText);
		p.appendChild(plansText);
		console.log(h2.innerText);
		li.appendChild(h2);
		li.appendChild(p);
		document.querySelector(".list").appendChild(li);
		list.push(li);
	}
	for (let i = 0; i < list.length; i++){
	    (function(index){
	        list[i].onclick = function(){
	            document.querySelector(".modal-content").innerText = "";
	            let div = document.createElement("div");
	            let text = document.createTextNode(list[i].innerHTML);
	            let comment = document.createElement("BUTTON");
	            let textArea = document.createElement("TEXTAREA");
	            textArea.class = "comment";
	            let commentText = document.createTextNode("Comment");
	            comment.appendChild(commentText);
	            div.appendChild(text);
				document.querySelector(".modal-content").innerHTML = div.innerText;
				document.querySelector(".modal-content").appendChild(textArea);
	            document.querySelector(".modal-content").appendChild(comment);
	  			document.querySelector(".modal").style.display = "block";
	  			let commentsArray = [];
	  			let commentsList = document.createElement("ul");
	  			comment.addEventListener("click", () => {
	  				commentsArray.push(textArea.value);
	  				window.localStorage.setItem( 'comments' + i, JSON.stringify(commentsArray));
	  				for (let j = 0; j < window.localStorage.getItem('comments' + i).length; j++) {
	  					let commentary = document.createElement("li");
	  					let commentaryText = document.createTextNode(JSON.parse(window.localStorage.getItem('comments' + i))[j]);
	  					commentary.appendChild(commentaryText);
	  					commentsList.appendChild(commentary);
	  					document.querySelector(".modal-content").appendChild(commentsList);
	  				}
	  			});
			} 
		})(i);
	}
	function addItem(name, plan){
		let li = document.createElement("li");
		let h2 = document.createElement("h2");
		let p = document.createElement("p");
		let h2Content = document.createTextNode(name);
		let pContent = document.createTextNode(plan);
		h2.appendChild(h2Content);
		p.appendChild(pContent);
		li.appendChild(h2);
		li.appendChild(p);
		document.querySelector(".list").appendChild(li);
		let editButton = document.createElement("button");
		let deleteButton = document.createElement("button");
		let textEdit = document.createTextNode("Edit");
		let textDelete = document.createTextNode("Delete");
		editButton.appendChild(textEdit);
		deleteButton.appendChild(textDelete);
		editButton.className = "edit";
		deleteButton.className = "delete"
		h2.appendChild(editButton);
		h2.appendChild(deleteButton);
		list.push(li);
		let commentsArray = [];
		let showdown  = require('showdown');
	  	let converter = new showdown.Converter();
		for (let i = 0; i < list.length; i++){
		    (function(index){
		        list[i].onclick = function(){
		        	console.log("test");
		            document.querySelector(".modal-content").innerText = "";
		            let div = document.createElement("div");
		            let text = document.createTextNode(list[i].innerHTML);
		            let comment = document.createElement("BUTTON");
					let textArea = document.createElement("TEXTAREA");
					let p = document.createElement("p");
					document.querySelector(".modal-content").appendChild(p);
		            textArea.class = "comment";
		            let commentText = document.createTextNode("Comment");
		            comment.appendChild(commentText);
		            div.appendChild(text);
					document.querySelector(".modal-content").innerHTML = div.innerText;
					document.querySelector(".modal-content").appendChild(textArea);
		            document.querySelector(".modal-content").appendChild(comment);
		  			document.querySelector(".modal").style.display = "block";
		  			comment.addEventListener("click", () => {
		  				commentsArray.push(textArea.value);
		  				window.localStorage.setItem( 'Comments' + i, JSON.stringify(commentsArray));
		  			});

	    		}
	    	})(i);
	    }
	}

	document.querySelector(".add").addEventListener("click", () => {
		document.querySelector(".modal-content").innerText = "";
		document.querySelector(".modal-content").innerHTML = '<h2>Creation of a new plan</h2><p>Your name:</p><input type="text" name="test" class="name" placeholder="Enter Name"></input><p>Your plan to take over the world:</p><textarea type="text" name="plan" class="plan" placeholder="Enter Plan"></textarea><button class="submit">Submit</button>';
		document.querySelector(".modal").style.display = "block";

		document.querySelector(".submit").addEventListener("click", () => {
			document.querySelector(".modal").style.display = "none";
			plansArray.push(document.querySelector(".plan").value);
			window.localStorage.setItem('plans', JSON.stringify(plansArray));
			namesArray.push(document.querySelector(".name").value);
			window.localStorage.setItem('names', JSON.stringify(namesArray));
			addItem(document.querySelector(".name").value, document.querySelector(".plan").value);	
		});
	});

	window.onclick = function(event){
 		if (event.target == document.querySelector(".modal")){
   			document.querySelector(".modal").style.display = "none";
  		}
	}
}catch(err){
	for (let i = 0; i < list.length; i++){
	    (function(index){
	        list[i].onclick = function(){
	            document.querySelector(".modal-content").innerText = "";
	            let div = document.createElement("div");
	            let text = document.createTextNode(list[i].innerHTML);
	            let comment = document.createElement("BUTTON");
	            let textArea = document.createElement("TEXTAREA");
	            textArea.class = "comment";
	            let commentText = document.createTextNode("Comment");
	            comment.appendChild(commentText);
	            div.appendChild(text);
				document.querySelector(".modal-content").innerHTML = div.innerText;
				document.querySelector(".modal-content").appendChild(textArea);
	            document.querySelector(".modal-content").appendChild(comment);
	  			document.querySelector(".modal").style.display = "block";
	  			let commentsArray = [];
	  			let commentsList = document.createElement("ul");
	  			comment.addEventListener("click", () => {
	  				commentsArray.push(textArea.value);
	  				window.localStorage.setItem( 'comments' + i, JSON.stringify(commentsArray));
	  				for (let j = 0; j < window.localStorage.getItem('comments' + i).length; j++) {
	  					let commentary = document.createElement("li");
	  					let commentaryText = document.createTextNode(JSON.parse(window.localStorage.getItem('comments' + i))[j]);
	  					commentary.appendChild(commentaryText);
	  					commentsList.appendChild(commentary);
	  					document.querySelector(".modal-content").appendChild(commentsList);
	  				}
	  			});
			} 
		})(i);
	}


	function addItem(name, plan){
		let li = document.createElement("li");
		let h2 = document.createElement("h2");
		let p = document.createElement("p");
		let h2Content = document.createTextNode(name);
		let pContent = document.createTextNode(plan);
		h2.appendChild(h2Content);
		p.appendChild(pContent);
		li.appendChild(h2);
		li.appendChild(p);
		document.querySelector(".list").appendChild(li);
		let editButton = document.createElement("button");
		let deleteButton = document.createElement("button");
		let textEdit = document.createTextNode("Edit");
		let textDelete = document.createTextNode("Delete");
		editButton.appendChild(textEdit);
		deleteButton.appendChild(textDelete);
		editButton.className = "edit";
		deleteButton.className = "delete"
		h2.appendChild(editButton);
		h2.appendChild(deleteButton);
		list.push(li);
		let commentsArray = [];
		let showdown  = require('showdown');
	  	let converter = new showdown.Converter();
		for (let i = 0; i < list.length; i++){
		    (function(index){
		        list[i].onclick = function(){
		        	console.log("test");
		            document.querySelector(".modal-content").innerText = "";
		            let div = document.createElement("div");
		            let text = document.createTextNode(list[i].innerHTML);
		            let comment = document.createElement("BUTTON");
					let textArea = document.createElement("TEXTAREA");
					let p = document.createElement("p");
					document.querySelector(".modal-content").appendChild(p);
		            textArea.class = "comment";
		            let commentText = document.createTextNode("Comment");
		            comment.appendChild(commentText);
		            div.appendChild(text);
					document.querySelector(".modal-content").innerHTML = div.innerText;
					document.querySelector(".modal-content").appendChild(textArea);
		            document.querySelector(".modal-content").appendChild(comment);
		  			document.querySelector(".modal").style.display = "block";
		  			comment.addEventListener("click", () => {
		  				commentsArray.push(textArea.value);
		  				window.localStorage.setItem( 'Comments' + i, JSON.stringify(commentsArray));
		  			});

	    		}
	    	})(i);
	    }
	}

	// Ouverture de la fenêtre modale de création d'idée

	document.querySelector(".add").addEventListener("click", () => {
		document.querySelector(".modal-content").innerText = "";
		document.querySelector(".modal-content").innerHTML = '<h2>Creation of a new plan</h2><p>Your name:</p><input type="text" name="test" class="name" placeholder="Enter Name"></input><p>Your plan to take over the world:</p><textarea type="text" name="plan" class="plan" placeholder="Enter Plan"></textarea><button class="submit">Submit</button>';
		document.querySelector(".modal").style.display = "block";

		document.querySelector(".submit").addEventListener("click", () => {
			document.querySelector(".modal").style.display = "none";
			plansArray.push(document.querySelector(".plan").value);
			window.localStorage.setItem('plans', JSON.stringify(plansArray));
			namesArray.push(document.querySelector(".name").value);
			window.localStorage.setItem('names', JSON.stringify(namesArray));
			addItem(document.querySelector(".name").value, document.querySelector(".plan").value);	
		});
	});

	// Fermeture de la fenêtre modale lorqu'on clique en dehors

	window.onclick = function(event){
 		if (event.target == document.querySelector(".modal")){
   			document.querySelector(".modal").style.display = "none";
  		}
	}
}

/*
	let edit = document.querySelector(".edit");
	edit.addEventListener("click", function(){
		
	});


*/


// Suppression d'une idée (name et plan) et de tous ses commentaires
/*
document.querySelector(".delete").addEventListener("click", () => {
	deleteIdea = window.confirm("Do you really want to delete this idea?");
if (deleteIdea){
index=this.rowIndex; //ou .index?
storage.removeItem("names"+index);
storage.removeItem("plans"+index);
storage.removeItem("comments"+index);
}
	});
*/

	/*TO DO: ajouter ces boutons à chaque li
	<div id ="buttons">
		<button id="edit"><i class="fas fa-pencil-alt"></i>Edit</button>
		<button id="delete"><i class="fas fa-trash-alt"></i>Delete</button>
</div>
for (let i = 0; i < list.length; i++){
    (function(index){
        list[i].onclick = function(){
            document.querySelector(".modal-content").innerText = "";
			document.querySelector(".modal-content").innerHTML = list[i];
  			document.querySelector(".modal").style.display = "block";
  			console.log(list);
    	}
	})(i);
}
*/
