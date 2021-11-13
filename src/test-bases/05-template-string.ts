const firstName: string = 'Francisco';
const lastName: string = 'Marin';


// const fullName = nombre + ' ' + apellido;
const fullName: string = `${firstName} ${lastName}`;

// console.log( fullName );


export function getGreeting(fullName: string = 'World') {
    return 'Hello ' + fullName;
}

// console.log(`Este es un texto: ${getGreeting(fullName)}  `);