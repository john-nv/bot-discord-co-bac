let emoji = []
let dataTX = []
let result = []
result = [
    {
        name: 'mot',
        number: 1
    },
    {
        name: 'hai',
        number: 2
    },
    {
        name: 'ba',
        number: 3
    },
    {
        name: 'bon',
        number: 4
    }
]
dataTX = [
    {
        mot: 1
    },
    {
        hai: 1
    },
    {
        ba: 2
    }
]
// console.log('hi')
let hihi = dataTX.map((x) => {
    let hi = result.map((y) => {
        let setNu = Number(Object.values(x).toString())
        if (setNu === y.number) {
            return ({
                        name: y.name,
                        number: `${ Object.values(x).toString()}`
                    })}
                      })
const tt = hi.filter((hihihh) => hihihh !== undefined)
return tt[0]
                });