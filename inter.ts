interface Lakes{
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}

let firstLake: Lakes = {
    name: "Caspian sea",
    length: 1199,
    depth: 2025,
    area: 371000,
    isFreshwater: false,
    countries: ['kazakhstan','Russia','Turkmenistan','Azerbaijan','Iran']    
}

let secoundLake: Lakes = {
    name: 'Baikal',
    depth: 1637,
    length: 636,
    area: 31500,
    isFreshwater: true,
    countries: ['Russia'],
    frozen: ['Juanary','February','March','April','MAy']
}