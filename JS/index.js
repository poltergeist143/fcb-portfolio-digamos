function myFunction() {
       let username = document.getElementById("username").value
       let password = document.getElementById('password').value
        alert(username + " " + password);
        document.getElementById("intro").innerHTML = "Ga maoy pako! Hahahaha";
       // document.getElementById("image").src="./images/sadme.jpg "
        document.getElementById("username")
  }

function firstImg() {
      document.getElementById("image").src="./images/sadme.jpg"
      document.getElementById("image").style.height = "250px"   
      document.getElementById("image").style.weight = "250px"   
      document.getElementById("intro").innerHTML = "Ga maoy pako! Hahahaha";
}

function secondImg() {
      document.getElementById("image").src="./images/poltergeist.jpg"
      document.getElementById("intro").innerHTML = "Hi! My name is Norman Vincent and I love building things from scratch";
}
            