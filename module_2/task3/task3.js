// Stwórz strukturę danych związaną z użytkownikami
// każdy obiekt ma mieć swoje uuid(biblioteka js), oraz swoją nazwę name
// Obiekty mają działac racjonalnie i realistycznie tj:
// admin może modyfikować usera, user nie ma możliwości modyfikować admina 
// admin może grupować użytkowników wedle uznania do wcześniej stworzonych grup minimum 3.grupy

// klasa "użytkownik"
// Ma mieć: imie, nazwisko, datę urodzenia, hasło, płeć, adres email, poziom dostępu = "user"
// Ma umożliwiać - zmianę e-mail

class User{
    constructor(name, surname, dateOfBirth, password, email, gender, accesLevel){
        // ...
    }
    update(email){}
    read(){
        // zwróc dane o uzytkowniku w czytelnej formie stringa
    }
}

// klasa "administrator"
// Ma dziedziczyć po użytkowniku informacje z dodatkowymi możliwościami
// Ma miec: poziom dostepu = 'admin'
// Ma umożliwiać: zmianę w obiekcie użytkownika poziomu dostępu oraz modyfikować jego hasło

class Admin extends User{
    constructor(){
        // ...
    }
    updatePassword(userUuid, new_password)
    changeAcces(userUuid, new_acces)
}

// klasa "grupa użytkowników"
// ma mieć listę użytkowników
// ma umożliwiać listowanie użytkowników, add/delete kontaktu do i z grupy

class UserGroup{
    constructor(name, listOfUsers){
        // ...
    }
    readUsers(){}
    addUser(userUuid){}
    deleteUser(userUuid){}

}

// stwórz kilku userów, jednego admina, nadaj im prawa, rozdziel na grupy, wyświetl podział 
// na grupy w formie groups = {g1:{users}, g2:{users}, g3:{users}}