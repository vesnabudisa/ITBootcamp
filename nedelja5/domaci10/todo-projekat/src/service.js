let count = 5

const data =[
    {
        id:1,
        desc: `task 1`,
        done: true
    },
    {
        id:2,
        desc: `task 2`,
        done: false
    },
    {
        id:3,
        desc: `task 3`,
        done: false
    },
    {
        id:4,
        desc: `task 4`,
        done: true
    }
]

const add = (item) =>{
    data.push({id:count++,...item})
    return count - 1
}

const deleteById = (id)=>{
    let index = data.findIndex(item => item.id == id)
    data.splice(index,1)
}

const changeById = (id, noviItem) => {
    let index = data.findIndex(item => item.id == id)
    data.splice(index,1,noviItem)
}

export default{
    data,
    add,
    deleteById,
    changeById
}