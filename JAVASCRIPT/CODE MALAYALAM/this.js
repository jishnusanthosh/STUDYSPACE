/******************************************************************************************
 *
 *                    JAVASCRIPT "this", call(), apply(), bind() NOTES
 *
 * Rule 1:
 * --------
 * "this" is NOT decided by where the function is written.
 *
 * "this" is decided by HOW the function is CALLED.
 *
 ******************************************************************************************/





/******************************************************************************************
 *
 * 1. NORMAL FUNCTION INSIDE AN OBJECT
 *
 ******************************************************************************************/

const myobj1 = {

    a: 1,
    b: 2,

    c: function () {

        console.log(this);

    }

};

myobj1.c();

/*

Output

{
    a:1,
    b:2,
    c:f
}

Why?

myobj1.c()

Object before the dot becomes "this"

this === myobj1

*/







/******************************************************************************************
 *
 * 2. STORE METHOD INSIDE ANOTHER VARIABLE
 *
 ******************************************************************************************/

const myobj2 = {

    a: 1,

    c: function () {

        console.log(this);

    }

};

const x = myobj2.c;

x();

/*

Browser (non strict)

window

Node/Class/Strict mode

undefined

Why?

Now it is NOT

myobj2.c()

It becomes

x()

Simple function call

No object before dot

Therefore

this = window (browser)

or

this = undefined (strict mode)

*/







/******************************************************************************************
 *
 * 3. USING call()
 *
 ******************************************************************************************/

const myobj3 = {

    name: "Jishnu"

};

function show() {

    console.log(this);

}

show.call(myobj3);

/*

call()

Runs immediately

AND

changes this

Equivalent to

this = myobj3

Output

{name:"Jishnu"}

*/







/******************************************************************************************
 *
 * 4. call() WITH ARGUMENTS
 *
 ******************************************************************************************/

function display(age, place) {

    console.log(this);

    console.log(age);

    console.log(place);

}

display.call(myobj3, 25, "Kottayam");

/*

Syntax

function.call(thisArg,arg1,arg2,arg3)

*/







/******************************************************************************************
 *
 * 5. USING apply()
 *
 ******************************************************************************************/

display.apply(myobj3, [25, "Kottayam"]);

/*

Same as call()

Difference

call()

arg1,arg2,arg3

apply()

[arg1,arg2,arg3]

*/







/******************************************************************************************
 *
 * 6. USING bind()
 *
 ******************************************************************************************/

const bindFunction = display.bind(myobj3, 25, "Kottayam");

/*

Nothing executes here.

bind()

returns

NEW FUNCTION

whose

this

is permanently fixed.

*/

bindFunction();

/*

Output

{name:"Jishnu"}

25

Kottayam

*/







/******************************************************************************************
 *
 * 7. ARROW FUNCTION INSIDE OBJECT
 *
 ******************************************************************************************/

const myobj4 = {

    name: "Jishnu",

    c: () => {

        console.log(this);

    }

};

myobj4.c();

/*

Output

Browser

window

Why?

Arrow function DOES NOT create its own this.

It borrows this from parent scope.

Object does NOT become parent scope.

The parent scope here is global scope.

*/







/******************************************************************************************
 *
 * 8. call() DOES NOT WORK WITH ARROW FUNCTION
 *
 ******************************************************************************************/

const arrow = () => {

    console.log(this);

};

arrow.call(myobj3);

/*

Still

window

Why?

Arrow ignores

call()

apply()

bind()

Arrow's this cannot be changed.

*/







/******************************************************************************************
 *
 * 9. bind() DOES NOT WORK WITH ARROW FUNCTION
 *
 ******************************************************************************************/

const newArrow = arrow.bind(myobj3);

newArrow();

/*

Still

window

Arrow already captured its this.

bind()

cannot replace it.

*/







/******************************************************************************************
 *
 * 10. CLASS METHOD
 *
 ******************************************************************************************/

class MyClass {

    myFunction() {

        console.log(this);

    }

}

const obj = new MyClass();

obj.myFunction();

/*

Output

MyClass {}

Why?

Object before dot

obj.myFunction()

this = obj

*/







/******************************************************************************************
 *
 * 11. CLASS METHOD INSIDE VARIABLE
 *
 ******************************************************************************************/

const fun = obj.myFunction;

fun();

/*

Output

undefined

Why?

Classes always run in STRICT MODE.

Now

fun()

Simple function call.

Therefore

this = undefined

*/







/******************************************************************************************
 *
 * 12. call() WITH CLASS METHOD
 *
 ******************************************************************************************/

fun.call(obj);

/*

Output

MyClass {}

call()

changes

this

to obj

*/







/******************************************************************************************
 *
 * 13. bind() WITH CLASS METHOD
 *
 ******************************************************************************************/

const permanent = obj.myFunction.bind(obj);

permanent();

/*

Output

MyClass {}

bind()

creates new function

whose

this

is fixed forever.

*/







/******************************************************************************************
 *
 * 14. ARROW FUNCTION INSIDE CLASS
 *
 ******************************************************************************************/

class Student {

    name = "Jishnu";

    show = () => {

        console.log(this);

    };

}

const s = new Student();

const p = s.show;

p();

/*

Output

Student {}

Why?

Arrow function captured

this

when object was created.

Even if copied,

this

remains same.

*/







/******************************************************************************************
 *
 * 15. NORMAL FUNCTION INSIDE NORMAL FUNCTION
 *
 ******************************************************************************************/

const obj2 = {

    name: "Jishnu",

    show: function () {

        function inner() {

            console.log(this);

        }

        inner();

    }

};

obj2.show();

/*

Output

window

or

undefined

Why?

inner()

is normal function.

Normal functions create their own this.

They DO NOT inherit parent's this.

*/







/******************************************************************************************
 *
 * 16. ARROW FUNCTION INSIDE NORMAL FUNCTION
 *
 ******************************************************************************************/

const obj3 = {

    name: "Jishnu",

    show: function () {

        const inner = () => {

            console.log(this);

        };

        inner();

    }

};

obj3.show();

/*

Output

obj3

Why?

Arrow has NO this.

Arrow borrows

show()

this.

show()

was called by

obj3.show()

therefore

this = obj3

*/







/******************************************************************************************
 *
 * 17. LEXICAL SCOPE
 *
 ******************************************************************************************/

let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);

        console.log(b);

        console.log(c);

    }

    inner();

}

outer();

/*

Output

10

20

30

Variable lookup

Current Scope

↓

Parent Scope

↓

Global Scope

This process is called

LEXICAL SCOPE

Notice

NO "this" involved.

*/







/******************************************************************************************
 *
 * 18. "this" VS LEXICAL SCOPE
 *
 ******************************************************************************************/

/*

VARIABLE LOOKUP

-------------

Current Scope

↓

Parent Scope

↓

Global Scope


This is called

LEXICAL SCOPE





this LOOKUP

------------

Normal Function

↓

Depends on HOW function is called.



Arrow Function

↓

Uses parent's this.



These are TWO completely different concepts.

Don't mix them.

*/







/******************************************************************************************
 *
 * 19. QUICK REVISION
 *
 ******************************************************************************************/

/*

Normal Function

--------------

Has its own this

call() ✔

apply() ✔

bind() ✔

this depends on caller





Arrow Function

--------------

No own this

Uses parent's this

call() ❌

apply() ❌

bind() ❌

Cannot change this





Lexical Scope

--------------

Used for finding variables.

Current Scope

↓

Parent Scope

↓

Global Scope





this

--------------

Used for finding current object.

Depends on

HOW function is called.

*/