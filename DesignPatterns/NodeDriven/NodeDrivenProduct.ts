
// 定义商品对象
interface Product {
    id: number;
    name: string;
    price: number;
}

/* User custom node. */
// 定义购物车节点
interface CartNode {
    input: Product[]; // 输入为商品列表
    output: number; // 输出为购物车总价
}

// 定义商品列表节点
interface ProductListNode {
    output: Product[]; // 输出为商品列表
}

// 定义计算总价的节点
interface CalculateTotalNode {
    input: Product[]; // 输入为商品列表
    output: number; // 输出为购物车总价
}

// 商品列表节点的实现
class ProductList implements ProductListNode {
    output: Product[] = [];

    // 构造函数中初始化商品列表
    constructor(products: Product[]) {
        this.output = products;
    }
}

// 计算总价节点的实现
class CalculateTotal implements CalculateTotalNode {
    input: Product[] = [];
    output: number = 0;

    // 计算购物车总价
    computeTotal() {
        let total = 0;
        for (const product of this.input) {
            total += product.price;
        }
        this.output = total;
    }
}

// 购物车节点的实现
class ShoppingCart implements CartNode {
    input: Product[] = [];
    output: number = 0;

    // 构造函数中初始化商品列表和计算总价节点
    constructor(productList: ProductListNode, calculateTotal: CalculateTotalNode) {
        this.input = productList.output;
        calculateTotal.input = this.input;
        // calculateTotal.computeTotal();
        this.output = calculateTotal.output;
    }
}

// 使用示例
const products: Product[] = [
    { id: 1, name: "iPhone", price: 8999 },
    { id: 2, name: "iPad", price: 4999 },
    { id: 3, name: "iMac", price: 15999 },
];

const productList = new ProductList(products);
const calculateTotal = new CalculateTotal();
const shoppingCart = new ShoppingCart(productList, calculateTotal);

console.log(shoppingCart.output); // 输出购物车总价
