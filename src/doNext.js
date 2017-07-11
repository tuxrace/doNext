function callNext(gen, prev){
    
}

function doNext(genFunc){
    const gen = genFunc()
    gen.next().value.then(r => callNext(gen, gen.next(r)));
}