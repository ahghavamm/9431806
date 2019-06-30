// exports.helloWorld = function(){
//     console.log("hello world");
// }


function Greeter (lang){
    this.language = lang;

    this.greet = function(){
        switch(this.language){
            case 'en': return 'hello';
            case 'fa': return 'salam';
            default: return 'sorry';
        }
    };
}

module.exports = Greeter;

// exports.greeting = function(lang){
//     return new Greeter(lang);
// }