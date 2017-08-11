# doNext
> A generator based control flow library, similar to tj/co

 ![](https://travis-ci.org/tuxrace/doNext.svg?branch=master)

## Example
    
    const doNext = require('./src/doNext')

    doNext(function* (){  
        const { userId: uid, title } = yield fetch('http://jsonplaceholder.typicode.com/posts/52').then(result => result.json())
        console.log(uid)
        
        const { name } = yield doFetch(`http://jsonplaceholder.typicode.com/users/${uid}`).then(result => result.json())
        console.log(name)  
        
        console.log(`${title.toUpperCase()} by ${name}`)
    })

## Licensing

  MIT