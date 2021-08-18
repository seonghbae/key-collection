class MAP{
    #items = {};

    constructor(entry){
        if(typeof entry=='object') Object.entries(entry).forEach((ent) => { this.set(ent[0], ent[1]) });
    }

    get size(){ return Object.keys(this.#items).length; }

    clear(){ this.#items = {}; }

    delete(key){ delete this.#items[key]; }

    has = (key) => this.#items.hasOwnProperty(key);

    set(key, value){
        if(!this.has(key)) this.#items[key] = value;
        return this.#items;
    }

    get = (key) => this.#items[key];

    keys = () => Object.keys(this.#items);

    values = () => Object.values(this.#items);

    entries = () => Object.entries(this.#items);
}

function test(map){
    console.log(map.entries());
    console.log(map.set('a', 1));
    map.clear();
    console.log(map.entries());
    console.log(map.set('b', 2));
    console.log(map.set('c', 3));
    map.delete('b');
    console.log(map.values());
    console.log(map.has('b'));
    console.log(map.has('c'));
    console.log(map.get('b'));
    console.log(map.get('c'));
    console.log(map.entries());
    console.log(map.keys());
    console.log(map.values());
}

function main(){
    const mapA = new Map();
    const mapB = new MAP();
    const mapC = new MAP({a: 1, b: 2, c: 3});

    console.log('compare to origianl map');
    console.log('origianl map');
    test(mapA);
    console.log('custom map');
    test(mapB);

    console.log('\ntest input');
    console.log(`input: ${{a: 1, b: 2, c: 3}}`);
    test(mapC);
}

main();