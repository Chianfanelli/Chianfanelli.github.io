var flag=0;	
function dinam(){
	flag = document.getElementById('Tovar').value;
	if (flag == 0)
	{
		document.getElementById('RadioRaz').style.display = 'none';
		document.getElementById('CheckUs').style.display = 'none';
	}
	else if (flag == 1)
	{
		document.getElementById('RadioRaz').style.display = 'block';
		document.getElementById('CheckUs').style.display = 'none';
	}
	else if (flag == 2)
	{
		document.getElementById('RadioRazk').style.display = 'block';
		document.getElementById('CheckUs').style.display = 'block';
	}
	document.getElementById('sum').textContent="-";
	}
function summa(){
	if( flag == 0)
	{
		var ich = 10000000;
		var ni = document.getElementById('Kol').value;
		var san = ich*ni;
		document.getElementById('sum').textContent=san;
	} 
	else if (flag==1)
	{
		var ich = 5000000;
		var ni = document.getElementById('Kol').value;
	if (document.getElementById('Dost').checked)
		var san = ich*ni;
	else var san = ich*ni*1.5;
		document.getElementById('sum').textContent=san;
	} else 
	{
		var ich = 4000000;
		var ni = document.getElementById('Kol').value;
		if (document.getElementById('Dost').checked)
			var san = ich*ni;
			else var san = ich*ni*1.5;
			if(document.getElementById('Dost').checked) 
				san+=12;
			document.getElementById('sum').textContent=san;
		}
	}
	