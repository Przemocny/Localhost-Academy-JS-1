// Stwórz strukturę danych związaną ze sklepem
// Każdy obiekt ma mieć swoje uuid (biblioteka js)
// Obiekty mają dzialać racjonalnie i realistycznie czyli:
// - można dodawać kilka produktów takich samych do koszyka
// - można wyjmować produkty z koszyka i z nich rezygnować
// - pod uwagę mają być brane rabaty % i kody rabatowe

// klasa "koszyk"
// Ma mieć: listę wszystkich produktów 'productList', rabat na zakupy
// Ma umożliwiać: add/delete produktów do/z kozyka, sumować cenę 'sumPrices', sumować ilośc produktów
// 'sumQuantity', obliczac rabat od ceny 'calculateDiscount' i odejmować go od ceny - jesli istnieje

class Cart{
    constructor(name){
    // ...
    }
    productList(){}
    addProduct(productUuid){}
    removeProduct(productUuid){}

    sumPrices(productList){}
    sumQuantity(productList){}
    calculateDiscount(discount){}
}

// klasa "produkt"
// ma mieć: Nazwe, Kategorie, Cene, Rabat %, uuid
// ma miec możliwość: tworzenia produktu, wyswietlanie informacji w odopowiedniej formie,
// modyfikować jego cene, określać jego rabat

class Product {
    constructor(name, category, price, discount, productUuid){
        // ...
    }
    update(toChange){}
    read(){
        // zwróć wszystkiedane w czytelnej formie stringa
    }
}

// na podstawie stworzonych obiektów, wykonaj zakupy, sprawdź poprawnośc dzialania systemu, 
// naliczania zniżek, sumowania cen, sumowania ilosci