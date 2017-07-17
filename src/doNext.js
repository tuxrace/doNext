function callNext(gen, prev){
    if (prev.done === false){
        prev.value
            .then(function(result){
                callNext(gen, gen.next(result))
            })
    }
}

function doNext(genFunc){
    const gen = genFunc()
    const startGen = gen.next()
    startGen.value
        .then(function(r) {
            callNext(gen, gen.next(r))
        })
}

module.exports = doNext
