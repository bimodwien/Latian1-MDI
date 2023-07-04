const array1 = [1,2,3,4,5,6,7]
const reverse1 = []


for (let i = array1.length - 1; i >=0; i--) {
    const value1 = array1[i]
    // console.log(value1)
    reverse1.push(value1)    
}

console.log(reverse1)

const array2 = [4,5,2]
const reverse2 = []

for (let i = 0; i <= array2.length -1; i++) {
    reverse2.unshift(array2[i])
}

console.log(reverse2)