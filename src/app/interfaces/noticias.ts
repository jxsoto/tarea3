export interface Noticias {

    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
}

export let ListaNoticias:Array<Noticias>=[
    {
        id:1,
        idCategoria:1,
        titulo:"Noticia 1",
        autor:"autor 1",
        fecha:"11/11/11",
        imagen:"imagen5.jpg",
        texto:"aaaaaaaaaa"
    },
    {
        id:2,
        idCategoria:2,
        titulo:"Noticia 2",
        autor:"autor 2",
        fecha:"12/11/11",
        imagen:"imagen3.jpg",
        texto:"bbbbbbbbbbb"
    },
    {
        id:3,
        idCategoria:3,
        titulo:"Noticia 3",
        autor:"autor 3",
        fecha:"13/11/11",
        imagen:"imagen4.jpg",
        texto:"ccccccccccccccc"
    },
    {
        id:4,
        idCategoria:4,
        titulo:"Noticia 4",
        autor:"autor 4",
        fecha:"14/11/11",
        imagen:"imagen6.jpg",
        texto:"dddddddddddddd"
    },
    {
        id:5,
        idCategoria:5,
        titulo:"Noticia 5",
        autor:"autor 5",
        fecha:"15/11/11",
        imagen:"imagen2.jpg",
        texto:"eeeeeeeeeeeeeeeee"
    },
    {
        id:6,
        idCategoria:6,
        titulo:"Noticia 6",
        autor:"autor 6",
        fecha:"16/11/11",
        imagen:"imagen7.jpg",
        texto:"fffffffffffffffff"
    },
    {
        id:7,
        idCategoria:5,
        titulo:"Noticia 7",
        autor:"autor 7",
        fecha:"17/11/11",
        imagen:"imagen8.jpg",
        texto:"ggggggggggggggggg"
    },
];