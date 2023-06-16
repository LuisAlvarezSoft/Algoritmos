let GeneralArray = []
let SendingArray = []
let x = 0
let recolection = () => {
    let Animal = prompt("Que tipo es el animal?")
    let Raza = prompt("Que raza es el animal?")
    let Color = prompt("Que color es el animal?")
    let Edad = Number(prompt("Que edad tiene el animal?"))
    let Extinto = confirm("El animal esta extinto?")
    let AnimalSending = {
        Animal: Animal,
        Raza: Raza,
        Color: Color,
        Edad: Edad,
        Extinto: Extinto
    }
    SendingArray.push(AnimalSending)
    x++
}
let filtro = () => {
    let FilterCopy = SendingArray.filter(tipo=>tipo.Extinto===true)
    if(x=4){console.log(`Estos son los animales extintos:`)
console.log(FilterCopy)}
}
while(x<4){
    recolection();
    if(x==4){
        console.log("Estos son los animales inscritos en la veterinaria")
        console.log(SendingArray)
        filtro()
    }

}