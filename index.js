const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5a5ec8653msh67f0765cccb83eep1341e1jsn4132a54b08f5',
		'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
	}
};

fetch('https://airport-info.p.rapidapi.com/airport=', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));