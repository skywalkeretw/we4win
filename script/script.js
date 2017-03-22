/**
 * Created by Luke Roy on 08.03.2017.
 */



var max = 5


var el = document.getElementById('random')


var words = ['Krokette','Rattenfalle', 'Staubsauger', 'Aktienhandel', 'Schublade', 'Schinken', 'Mirco Ist Scheiße', 'Nein', 'Huhn', 'Hai', 'Elefant', 'Har!', 'Herstellung', 'Schlecht', 'Stille']



for(var i = 0; i < max; i++) {


    var random = Math.random()


    var number = Math.floor(random * words.length)


    var word = words[number]


    el.innerHTML += (' ' + word)

    if (i == 4){
        el.innerHTML +=('.')
    }
    else {
        el.innerHTML +=(',')
    }


}

var flash = document.getElementsByClassName('title')

function flash () {

}