class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascotas(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor) {
        this.libros.push({
            nombre,
            autor
        });
    }
    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}
const usuario = new Usuario('damian', 'triebl',
                             [
                              {nombre:'game of thrones',autor:'JRR Martin'},
                              {nombre:'harry potter',autor:'jk rowling'}, 
                              {nombre:'el señor de los anillos',autor:'tolkien'}
                            ],
                             ['pepito el conejo', 'cachita la perra','renato el gato']);
console.log('Contar de mascotas', usuario.countMascotas());
console.log('Listar nombres de libros',usuario.getBookNames())
console.log('Nombre completo', usuario.getFullName());