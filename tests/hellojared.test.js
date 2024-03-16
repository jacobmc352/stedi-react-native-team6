import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("should say Jared", ()=>{

    const hello = sayHello();
    console.log(hello)

    assert.equal(hello,"hello");

    expect(hello).toBe("Jared");

});