export interface ProductModel{
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:string;
    images:string[];
}

//JS2TS extensionu ile bir json objesini kopyalayıp ts uzantılı dosyaya CTRL + ALT + V yaptığımızda hızlıcam onu ts formatına çevirir. json haline postman ile ulaşabilirsin!!