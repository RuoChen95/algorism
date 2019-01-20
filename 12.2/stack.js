let k = [1,123123,123]

// TODO: not right
function stack(s) {
    let s = []
}


function push(stackName, char) {
    stackName[stackName.length] = char
}

function pop(stackName, char) {
    stackName = stackName.slice(0, stackName.length - 1)

    // TODO: stackName无法被修改
    console.log(stackName)
}

function empty(sn) {
    return sn.length == 0
}

push(k, 123)

pop(k)

console.log(k)

console.log(empty(k))