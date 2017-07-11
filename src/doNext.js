function callNext(gen, prev){
    prev.then(r => callNext(gen, gen.next(r)))
}

function doNext(genFunc){
    const gen = genFunc()
    gen.next().value.then(r => callNext(gen, gen.next(r)));
}
