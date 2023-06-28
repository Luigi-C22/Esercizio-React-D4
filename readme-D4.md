Continuiamo a lavorare su EPICBOOKS!
1. Se ancora non lo hai fatto, crea lo stato all'interno di SingleBook e inserisci una proprietà booleana di nome selected.
Cliccando sulla copertina di un libro, la proprieta' selected deve cambiare valore.
Se selected ha valore true, la copertina del libro deve aggiungere un bordo rosso.
2. Inserisci le operazioni GET e POST in modo che l'utente possa leggere, e creare recensioni sui libri
3. Troverai le informazioni sullAPI nelle slide successive alle Task

TASKS:
1. Crea un componente CommentArea e incorporalo nel componente SingleBook.
Quando un utente clicca su un SingleBook, il componente CommentArea deve venire renderizzato (suggerimento: puoi usare l'operatore && e la proprieta' "selected").

2. CommentArea deve eseguire una fetch (componentDidMount) e salvare tutte le recensioni del libro all'interno del suo stato. Deve inoltre renderizzare altri due componenti
dentro di sé: CommentList e AddComment.

3. CommentsList riceverà la lista di recensioni da CommentArea con una prop, e dovrà renderizzare la lista utilizzando un componente SingleComment.

4. AddComment conterrà un form per raccogliere il testo della recensione e la valutazione da 1 a 5; una volta raccolti i dati, tramite un pulsante (onClick!) verrà effettuata una chiamata
POST per inviare la recensione alle API.

EXTRA (facoltativi):
1. Inserisci la possibilità di eseguire un'operazione di DELETE e PUT

2. Inserisci spinner e messaggi di errore


API e Autentizacione
Il tuo endpoint per tutto il CRUD si trova su:

https://striveschool-api.herokuapp.com/api/comments/

Ciò significa che puoi effettuare operazioni di GET, DELETE, POST e PUT.

!! IMPORTANTE !!
Per utilizzare l'endpoint avrai bisogno di un header di autenticazione. Puoi ottenerne uno, insieme ad un esempio su come implementarlo, su https://strive.school/studentlogin 


API - Struttura di un commento + AVVERTENZA!

{
    "comment": string //testo della recensione
    "rate": string, //valore compreso tra 1 e 5
    "elementId": string //l'identificativo ASIN del libro
}

ATTENZIONE!!
Facendo un'operazione di GET su https://striveschool-api.herokuapp.com/api/comments/
riceverai TUTTE le recensioni presenti nel database.
Probabilmente quello che a te interessa maggiormente sono le recensioni relative ad un singolo libro: puoi ottenerli aggiungendo l'ASIN del libro al tuo endpoint:

https://striveschool-api.herokuapp.com/api/comments/:elementId

ES: https://striveschool-api.herokuapp.com/api/comments/0316438960


ENDPOINT COPIAINCOLLABILE:

https://striveschool-api.herokuapp.com/api/comments/