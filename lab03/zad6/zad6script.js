let btn = document.getElementById("button");
let phon = document.getElementById("inputPhone");
let nam = document.getElementById("inputName");


class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}


var contacts = [];
contacts.push(new Contact("Tomasz Niemasz", "123456789"));
contacts.push(new Contact("Karol Adamek", "321654987"));


var listContacts = function () {
    document.getElementById('displayContacts').innerHTML = " ";
    for (var i = 0; i < contacts.length; i++) {
        document.getElementById('displayContacts').innerHTML +=
            '<tr><td> <h3 id= "name' + i + '">' + contacts[i].name + '<br>' + '</h3>' + '<h4 id = "phone' + i + '">' + contacts[i].phone + '</h4>' +
            '<td><button class="fa fa-trash trash" onclick=deleteContact(' + i + ')></button></td></tr>';
    }
}


function isEmpty(nam, phon) {
    if (nam === "") {
        alert('Pole Imie i Nazwisko nie może być puste')
        return false;
    }
    if (phon === "") {
        alert('Pole Numer telefonu nie może być puste')
        return false;
    }
    return true;
}

btn.onclick = function () {
    var name = document.getElementById('inputName').value;
    var phone = document.getElementById('inputPhone').value;
    if (isEmpty(name, phone)){
        var contact = new Contact(name, phone);
        contacts.push(contact);
        listContacts();
    }
    // contacts.push(contact);
    // listContacts();
}

var deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}

listContacts();


nam.onkeypress = function (event) {
    return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)
}

phon.oninput = function () {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}


