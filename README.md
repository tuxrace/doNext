# doNext
A generator based control flow library, similar to tj/co

## Example
    
    const doNext = require('./src/doNext')

    doNext(function* (){  
        const { userId: uid, title } = yield doFetch('http://jsonplaceholder.typicode.com/posts/52')
        console.log(uid)
        
        const { name } = yield doFetch(`http://jsonplaceholder.typicode.com/users/${uid}`)
        console.log(name)  
        
        console.log(`${title.toUpperCase()} by ${name}`)
    })
