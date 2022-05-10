const hello = (name) => {

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${name}, bienvenido`;
    document.body.append(h1);

}

hello('Víctor');