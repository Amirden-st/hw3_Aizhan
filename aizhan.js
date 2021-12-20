var string = ("abbccdddd")
var num = []

for (var i = 0; i < string.length; i++)
    if (num[string[i]]) {
        num [string[i]]++;
    } else {
        num [string[i]] = 1
    }
console.log(num);

function getMin(arr) {
    return Math.min(...arr)
}

console.log(getMin([1, 2, 3, 4, 5]));

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
    var foundProduct=products.find(callback)
    return foundProduct
}
var found=getProduct("egg")
console.log(found)