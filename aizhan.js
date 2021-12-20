//          можно опустить скобки
var string = ("abbccdddd")
var num = []

for (var i = 0; i < string.length; i++) 
    if (num[string[i]]) {
        num [string[i]]++;
    } else {
        num [string[i]] = 1
    }
console.log(num);

// не совсем то, но близко)
// нужно было написать функцию:
function countChar(string, char) {
    // заводим переменную для счёта буквы char в строке (string)
    var count = 0
    for (var i = 0; i < string.length; i++) {
        // обходим строку по одному символу и проверяем на совпадение с char
        if (string[i] === char) count++ 
    }
    return count
}

countChar('dwdadwdeawdrfffff', 'f') // 5 букв f внутри переданной строки 


function getMin(arr) {
    return Math.min(...arr)
}

console.log(getMin([1, 2, 3, 4, 5]));
// Зачем писать её второй раз?)
function getMin(arr) {
    return Math.min(...arr)
}

console.log(getMin([75, 32, 1221, 43,]));

var products = [
    {
        productName: 'milk',
        cost: 48,
        category: 'food'
    },
    {
        productName: 'bread',
        cost: 20,
        category: 'food'
    },
    {
        productName: 'egg',
        cost: 11,
        category: 'food'
    },
    {
        productName: 'axe',
        cost: 180,
        category: 'tool'
    },
    {
        productName: 'hammer',
        cost: 170,
        category: 'tool'
    },
    {
        productName: 'bag',
        cost: 1100,
        category: 'clothes'
    },
    {
        productName: 'socks',
        cost: 90,
        category: 'clothes'
    },
]
function getCategory(category) {
    var arr = [];
    for(var i = 0; i < products.length; i++){
        if (products[i].category === category){
            arr.push(products[i])
        };
    };
    return arr;
}
console.log(getCategory('tool'));

function getProduct(productName){
    function callback(product){
        if(product.productName===productName) return  true
    }
    // отлично!
    var foundProduct=products.find(callback)
    return foundProduct
}
var found=getProduct("egg")
console.log(found)
