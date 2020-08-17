
var stoogeList = [
    { id: 3, stageName: "Larry Fine", legalName: "Louis Fienberg" },
    { id: 17, stageName: "Curly Fine", legalName: "Jerome Lester Horwitz" },
    { id: 12, stageName: "Moe Howard", legalName: "Moe Howard" },
    { id: 13, stageName: "Curly Joe DeRita", legalName: "Joseph Wardell" }
  ]

  export function create(data){
    stooge.push({...data});
}

export function readAll(){
        return JSON.parse(JSON.stringify(stooges));
}
        
export function update(stooge){
    const existingStooge = stooges.filter(item => stooge.id === item.id)
    if(existingStooge){
        existingStooge = stooge
    }
}

export function del(id){
    const existingStoogeIndex = stooges.findIndex(item => stooge.id === item.id)
    if(existingStoogeIndex){
        stooges.slice(existingStoogeIndex)
    }
}



