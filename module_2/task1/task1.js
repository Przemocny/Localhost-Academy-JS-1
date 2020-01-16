// Stwórz strukturę danych związaną z książką adresową.
// każdy obiekt ma mieć swoje uuid (biblioteka js), oraz swoją nazwę name
// obiekty mają działać racjonalnie i najbardziej realistycznie jak to możliwe, czyli: 
// - czyli nie może być 2 takich samych kontaktów w grupie lub w książce
// - kontakt usunięty ma być usunięty z grup i książki
// - kontakt musi mieć validację podczas tworzenia, żeby ktoś nie podał złego maila, czy pustego name

// klasa "książka adresowa" 
// Ma mieć: listę wszystkich kontaktów `contactList`, listę grup kontaktów `groupList`, nazwę książki adresowe
// Ma umożliwiać: create/read/update/delete kontaktów i grup, umożliwiać sortowanie listy kontaktów po frazach
// podczas tworzenia nowego kontaktu AddressBook ma się upewniać czy zmienna contact jest typu Contact

class AddressBook{
    constructor(name){
        // ...
    }
    readContacts(){}
    readFilteredContacts(phrase){}
    updateContact(contactUuid, toChange){}
    deleteContact(contactUuid){}
    createNewContact(contact){}

    readContactGroups(){}
    deleteGroup(groupUuid){}
    addNewGroup(group){}
}

// klasa "kontakt"
// Ma umożliwiać: update, odczyt dany z czytelnej formie
// ma mieć: datę modyfikacji, imię, nazwisko

class Contact {
    constructor(name, surname, email){
        // ...
    }
    update(toChange){}
    read(){
        // zwróć wszystkie dane w czytelnej formie stringa
    }
}
// const JohnLennon = new Contact('John','Lennon','jl@gmail.com')


// klasa "grupa kontaktów"
// ma mieć liste kontaktów
// ma umożliwiać listowanie kontaktów, dodawanie/update/delete kontaktu do i z grupy

class ContactGroup{
    constructor(name, listOfContacts){}  
    
    readContacts(){}
    addNewContact(contact){}
    updateContact(contactUuid, toChange){}
    deleteContact(contactUuid){}
}
