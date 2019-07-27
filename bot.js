var Twit = require('twit')
var fetch = require(`node-fetch`);

//Troque as KEYS para usar!
var TwBot = new Twit({
  consumer_key: 'ucZRXkt8j36XCvt9gBWm7Fx6A',
  consumer_secret: 'L3BbUJ1wCnJOBoHXzMclJuRKvWp6ktEhAxCiaCGIqf4gUlcOlv',
  access_token: '3410648987-LiDbfEKjwR8a4ATUfzmLIFf2awwGDg3e2TcNcCS',
  access_token_secret: 'rDiN3E5v7rQnKX99uYtGFQGOBc0d9t0YOCKgQUKAkLoFZ'
})

//Faça um cadastro no OpenWeatherMap para pegar sua propria KEY!.
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bauru,br&APPID=3d6ba5d190c272eed5b49f19a815de5b';


fetch(url) 
  .then(function(response) {
    return response.json();
  })
  .then(function(weather) {
    var label = weather.weather[0].description;
    var texto = `A temperatura em Bauru agora é ${Math.round(weather.main.temp - /*Esse "273" foi pra converter Kelvin pra Celcius*/273)}°C`;
    console.log(texto);

    
    TwBot.post("statuses/update", { status: texto }, function (error, tweet, response) {
      if (!error) { //Condição pra saber se foi postado sem nenhum tipo de erro.
        console.log(tweet);
      }
    });
  });


/*
Twittar alguma coisa:
TwBot.post('statuses/update', { status: 'kk' } )


Retwittar alguma coisa:
TwBot.post('statuses/retweet/:id', { id: '1154509127365931009' } )    
  */