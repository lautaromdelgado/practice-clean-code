type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size,
    ) { }

    isProductReady(): boolean {
        //* CON DRY
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if (this[key] <= 0) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${key} is not supported`);
            }
        }
        return true;
    }

    toString() {
        //! NO DRY
        // if (this.name.length <= 0) throw Error('name is empty');
        // if (this.price <= 0) throw Error('price is empty');
        // if (this.size.length <= 0) throw Error('size is empty');
        if (!this.isProductReady()) return;
        return `${this.name} (U$D ${this.price}, ${this.size})`;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 11.98, 'XL');
    console.log(bluePants.toString());
})();