

const nomeUtente = prompt( "Inserisci il tuo nome utente", "Inserisci qui il tuo nome");
const cognomeUtente = prompt( "Inserisci il tuo cognome", "Inserisci qui il tuo cognome");
const colore = prompt( "Qual'è il tuo colore preferito?");
const password = nomeUtente + cognomeUtente + colore + "#23"


document.getElementById("titolo").innerHTML = `Benvenuto, ${nomeUtente}`
document.getElementById("password").innerHTML = `La tua password è ${password}`;


