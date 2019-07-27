var Twit = require('twit')

var TwBot = new Twit({
  consumer_key: 'ucZRXkt8j36XCvt9gBWm7Fx6A',
  consumer_secret: 'L3BbUJ1wCnJOBoHXzMclJuRKvWp6ktEhAxCiaCGIqf4gUlcOlv',
  access_token: '3410648987-LiDbfEKjwR8a4ATUfzmLIFf2awwGDg3e2TcNcCS',
  access_token_secret: 'rDiN3E5v7rQnKX99uYtGFQGOBc0d9t0YOCKgQUKAkLoFZ'
})


//Twittar alguma coisa:
TwBot.post('statuses/update', { status: 'kk' } )


//Retwittar alguma coisa:
//TwBot.post('statuses/retweet/:id', { id: '1154509127365931009' } )
    
  