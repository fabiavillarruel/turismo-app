const productos = [
    {
        id: '01',
        name: 'Buenos Aires',
        price: 80000,
        currency: 'ARS',
        description: 'Viaje a la provincia de Buenos Aires',
        stock: 100,
        category: 'nuevos',
        img: './buenos-aires.jpg'
    },
    {
        id: '02',
        name: 'San Luis',
        price: 100000,
        currency: 'ARS',
        description: 'Viaje a la provincia de San Luis',
        stock: 120,
        category: 'ofertas',
        img: './san-luis.jpg'
    },
    {
        id: '03',
        name: 'Santa Cruz',
        price: 380000,
        currency: 'ARS',
        description: 'Viaje a la provincia de Santa Cruz',
        stock: 40,
        category: 'mas-vendidos',
        img: './santa-cruz.jpg'
    },
    {
        id: '04',
        name: 'Catamarca',
        price: 240000,
        currency: 'ARS',
        description: 'Viaje a la provincia de Catamarca',
        stock: 100,
        category: 'nuevos',
        img: './catamarca.jpg'
    }
]

// creo y exporto mi promesa

export const getProducts = () =>{
    return new Promise((resolve, reject) =>{
        let error = false
        setTimeout(() => {
            if(error){
                reject('no hay data')
            }else{
                resolve(productos)
            }
        }, 2000);
    })
}