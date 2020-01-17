// Stwórz strukturę danych związaną z biblioteką
// każdy obiekt ma swoje uuid
// obiekty mają działać racjonalnie i realistycznie jak w prawdziwej bibliotece, czyli:
// - jest lista książek dostepnych do wypożyczenia - jeśli nastapi wypożyczenie - 
// dana książka nie jest już dostepna, do czasu aż nie zostanie zwrócona.
// - w prawdziwych bibliotekach naliczane są opłaty za przekroczenie czasu zwrotu ksiązki,
// kara ma być naliczana za każdy dzień zwłoki określona kwota

// klasa "książka"
// ma mieć: Tytuł, autora, uuid
// ma umożliwiac: wyswietlenia informacji o ksiązce, zmianę uuid

class Book{
    constructor(name, title, author, uuid){
        // ...
    }
    read(){
        // zwróc informacje o pozycji w czytelnej formie stringa
    }
    update(uuid){
        // zmień uuid pozycji
    }
}

// klasa "biblioteka"
// ma miec: Listę pozycji(około 10-15 książek, z różnymi tytułami), listę wypożyczonych pozycji:
// (informacje kiedy wypożyczono, kiedy mija zwrot  +7d od wypożyczenia, kara defaultowo='0' itd)
// ma umożliwiać: dodawanie nowych pozycji do dostepnych książek, usuwanie pozycji z listy

class Library{
    constructor(name, listOfBooks){
        // ...
    }
    showAllBooks(){}
    showAvailableBooks(){}
    showRentedBooks(){}

    addBookToList(book){}
    deleteBookFromList(book){}
}

// klasa "wypożyczenie" ma charakteryzować fakt wypożyczenia danej ksiązki
// ma mieć: datę wypożyczenia, datę zwrotu (data wyp + 7d), uuid pozycji, tytuł, autor, kara
// ma umożliwiać: 
// - wypożczenie ksiązki(sprawdzenie czy pozycja jest dostępna - 
// jesli aktualnie nie - uzytkownik ma otrzymać zwrotkę że ksiązki aktualnie nie ma na stanie -
// przewidywany czas dostepnosci = data zwrotu). Wypożyczenie i zwrot oznacza zmianę w liscie 
// dostępnych aktualnie pozycji.
// - zwrot książki - jeśli odbędzie się terminowo kara wynosi 0, jeśli nie to jest naliczana - 
// użytkownik powinien dostać zwrotkę czy ma karę, jesli tak to ile ma zapłacić
// - oplac karę - jesli jest 
// jeśli nie ma kary uzytkownik dostaje informacje że jest rozliczony i nic nie zalega

class Rent{
    constructor(name, dateOfRent, dateOfReturn, bookUuid, bookTitle, bookAuthor, penalty){
        // ...
    }

    rentBook(book){}
    returnBook(book){}

    payPenalty(penalty){}
}

// zaprojektuj bibliotekę z kilkunastoma pozycjami:
// - zaaranżuj sytuację dostawy kilku książek oraz usuwania kilku książek z listy dostępnych pozycji
//stwórz sytuacje w której użytkownik:
// - wypożycza dostępną oraz chce wypożyczyć niedostpępną pozycje
// - oddaje pozycje terminowo oraz nieterminowo
// - rozicza się z opłaty