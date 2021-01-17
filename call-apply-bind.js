// Call,Apply & Bind

var welcome = function(a,b){
    console.log('Welcome '+this.name+'.Are you interested in '+a+' and '+b);
}

var person-a = {name:'person a'};
var person-b = {name : 'person b'};

welcome.call(person-a,'asp.net','angular');
welcome.call(person b,'asp.net','angular');

welcome.apply(person-a,['asp.net','angular']);
welcome.apply(person b,['asp.net','angular']);

var welcomePA = welcome.bind(person-a);
welcomePA('asp.net','person-b');

var welcomePB = welcome.bind(person-b);
welcomePB('python','angular');

