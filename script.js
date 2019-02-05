
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

let namesArray = JSON.parse(localStorage.getItem('names'));
let plansArray = JSON.parse(localStorage.getItem('plans'));

if(plansArray == undefined && namesArray == undefined){
	plansArray = [];
	namesArray = [];
}

let list = [];


try{
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
}catch(err){

}
finally{

	for (let i = 0; i < list.length; i++){
	    (function(index){
	        list[i].onclick = function(){
	            document.querySelector(".modal-content").innerText = "";
	            let div = document.createElement("div");
	            let editButton = document.createElement("BUTTON");
				let deleteButton = document.createElement("BUTTON");
				let textEdit = document.createTextNode("Edit");
				let textDelete = document.createTextNode("Delete");
				editButton.appendChild(textEdit);
				deleteButton.appendChild(textDelete);
	            let h2 = document.createElement("h2");
				let h2Text = document.createTextNode(namesArray[i]);
				h2.appendChild(h2Text);
	            let text = document.createTextNode(plansArray[i]);
	            let comment = document.createElement("BUTTON");
				let textArea = document.createElement("TEXTAREA");
	            textArea.class = "comment";
	            let commentText = document.createTextNode("Comment");
	            comment.appendChild(commentText);
	            div.appendChild(h2);
            	div.appendChild(text);
	            document.querySelector(".modal-content").appendChild(editButton);
				document.querySelector(".modal-content").appendChild(deleteButton);
				document.querySelector(".modal-content").appendChild(div);
				


				editButton.addEventListener("click", () => {
					document.querySelector(".modal-content").innerText = "";
					let planEdit = document.createElement("textarea");
					document.querySelector(".modal-content").appendChild(planEdit);
					planEdit.value = plansArray[i];
					let submitEdit = document.createElement("BUTTON");
					let submitEditText = document.createTextNode("Submit");
					submitEdit.appendChild(submitEditText);
					document.querySelector(".modal-content").appendChild(submitEdit);


					submitEdit.addEventListener("click", () => {
						plansArray[i] = planEdit.value;
						window.localStorage.setItem('plans', JSON.stringify(plansArray));
						document.querySelector(".modal").style.display = "none";
						document.location.reload(true);
					});	
				});	

				document.querySelector(".modal-content").appendChild(textArea);
	            document.querySelector(".modal-content").appendChild(comment);
	  			document.querySelector(".modal").style.display = "block";
	  			let commentsArray = JSON.parse(localStorage.getItem('comments' + i));
		  		if(commentsArray == undefined){
					commentsArray = [];
				}
	  			let commentsList = document.createElement("ul");
	  			for (let j = 0; j < commentsArray.length; j++) {
  					let commentary = document.createElement("li");
  					let commentaryText = document.createTextNode(commentsArray[j]);
  					commentary.appendChild(commentaryText);
  					commentsList.appendChild(commentary);
  					document.querySelector(".modal-content").appendChild(commentsList);
	  			}

	  			comment.addEventListener("click", () => {
	  				commentsArray.push(textArea.value);
		  			window.localStorage.setItem( 'comments' + i, JSON.stringify(commentsArray));
		  			let commentary = document.createElement("li");
	  				let commentaryText = document.createTextNode(textArea.value);
	  				commentary.appendChild(commentaryText);
	  				commentsList.appendChild(commentary);
	  				document.querySelector(".modal-content").appendChild(commentsList);
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
		list.push(li);
		let commentsArray = [];
		let showdown  = require('showdown');
	  	let converter = new showdown.Converter();
		for (let i = 0; i < list.length; i++){
		    (function(index){
		        list[i].onclick = function(){
		            document.querySelector(".modal-content").innerText = "";
		            let div = document.createElement("div");
		            let editButton = document.createElement("BUTTON");
					let deleteButton = document.createElement("BUTTON");
					let textEdit = document.createTextNode("Edit");
					let textDelete = document.createTextNode("Delete");
					editButton.appendChild(textEdit);
					deleteButton.appendChild(textDelete);
					let h2 = document.createElement("h2");
					let h2Text = document.createTextNode(namesArray[i]);
					h2.appendChild(h2Text);
		            let text = document.createTextNode(plansArray[i]);
		            let comment = document.createElement("BUTTON");
					let textArea = document.createElement("TEXTAREA");
		            textArea.class = "comment";
		            let commentText = document.createTextNode("Comment");
		            comment.appendChild(commentText);
		            div.appendChild(h2);
	            	div.appendChild(text);
					document.querySelector(".modal-content").appendChild(editButton);
					document.querySelector(".modal-content").appendChild(deleteButton);
					document.querySelector(".modal-content").appendChild(div);

					editButton.addEventListener("click", () => {
						document.querySelector(".modal-content").innerText = "";
						let planEdit = document.createElement("textarea");
						document.querySelector(".modal-content").appendChild(planEdit);
						planEdit.value = plansArray[i];
						let submitEdit = document.createElement("BUTTON");
						let submitEditText = document.createTextNode("Submit");
						submitEdit.appendChild(submitEditText);
						document.querySelector(".modal-content").appendChild(submitEdit);


						submitEdit.addEventListener("click", () => {
							plansArray[i] = planEdit.value;
							window.localStorage.setItem('plans', JSON.stringify(plansArray));
							document.querySelector(".modal").style.display = "none";
							document.location.reload(true);
						});	
					});	

					document.querySelector(".modal-content").appendChild(textArea);
		            document.querySelector(".modal-content").appendChild(comment);
		  			document.querySelector(".modal").style.display = "block";
		            let commentsArray = JSON.parse(localStorage.getItem('comments' + i));
		  			if(commentsArray == undefined){
						commentsArray = [];
					}
		  			let commentsList = document.createElement("ul");
		  			for (let j = 0; j < commentsArray.length; j++) {
	  					let commentary = document.createElement("li");
	  					let commentaryText = document.createTextNode(commentsArray[j]);
	  					commentary.appendChild(commentaryText);
	  					commentsList.appendChild(commentary);
	  					document.querySelector(".modal-content").appendChild(commentsList);
		  			}

		  			comment.addEventListener("click", () => {
		  				commentsArray.push(textArea.value);
		  				window.localStorage.setItem( 'comments' + i, JSON.stringify(commentsArray));
		  				let commentary = document.createElement("li");
	  					let commentaryText = document.createTextNode(textArea.value);
	  					commentary.appendChild(commentaryText);
	  					commentsList.appendChild(commentary);
	  					document.querySelector(".modal-content").appendChild(commentsList);
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
}

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
