function caesar(cipher,decipher){ 
	do{ 
		var request = prompt ("Ingrese el número de lo que desea hacer: 1) CIFRAR - 2) DESCIFRAR");
		if(request !== ""){
			if(request == "1"){
				cipher(request);
			}else if (request == "2"){
				decipher(request);
			}else{
				alert("Ingrese una opción válida");
			}
		}
	} while (request = "" || (request != "1" && request != "2"));
}

function cipher(text, shift = 33){
   var ask = prompt ("Ingrese una frase para CIFRAR");
   var sentence="";
   for(var i of ask){
       var sentence= i.charCodeAt(0) + shift;
       sentence += String.fromCharCode((sentence%26)+65);;
   } 
   return alert("Su frase cifrada es " + sentence);
}

function decipher(text, shift = 33){
   var ask = prompt("Ingrese una frase para DESCIFRAR");
   var sentence="";
   for (var i of ask) {
       var sentence = i.charCodeAt(0) - shift;
       sentence += String.fromCharCode((sentence%26)+65);
   }
   return alert("Su frase descifrada es " + sentence);
}

caesar(cipher,decipher);