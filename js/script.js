// VARIABLES GLOBALES
var Palabras = ["agua","febrero","pelota","billar","juego","ahorcado","richard","jungla","transporte","vehiculo","murcielago"];
var palabra = "";
var pal = [""];
var vidas;

function Nuevo_Juego()
{
	pal = [""];
	palabra = Palabras[Math.floor((Math.random() * Palabras.length - 1) + 1)];
	var i = 0;
	for (i=0; i < palabra.length; i++)
	{
		pal [i] = "_";
	}
	document.getElementById("txtLetra").value = "";
	document.getElementById("palabra").innerHTML = pal.join(" ");
	vidas = 10;
}

function Probar_Letra()
{
	var letra = "";
	letra = document.getElementById("txtLetra").value;
	if (letra.length == 0)
	{
		alert("Debe digitar una letra");
		document.getElementById("txtLetra").focus();
	}
	else
	{
				var pos;
	var i = 0;
	var acierto = false;
	
	for (i=0; i < palabra.length; i++)
	{
		if (letra == palabra.substr(i,1))
		{
			pal[i] = letra;
			acierto = true;
		}
	}
	var c = 0;
	if (acierto == false)
	{
		vidas--;
		if (vidas == 0)
		{
			alert("¡Game Over! la palabra era: " + palabra);
			Nuevo_Juego();
		}
	}
	else
	{
		for (i=0; i < palabra.length; i++)
		{
			if (pal[i] == '_') { c++; }
		}
		if (c == 0) 
		{ 
			document.getElementById("txtLetra").value = "";
			document.getElementById("palabra").innerHTML = pal.join(" ");
			document.getElementById("vidas").innerHTML = vidas;
			alert("¡Has ganado!"); Nuevo_Juego(); 
		}
	}
	document.getElementById("txtLetra").value = "";
	document.getElementById("palabra").innerHTML = pal.join(" ");
	document.getElementById("vidas").innerHTML = vidas;
	}
}
Nuevo_Juego();