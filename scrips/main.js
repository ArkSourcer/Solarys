function req(){
  for(let i of arguments){
    const dir = (i[0] != "")? i[0] + "/" : "";
    i.forEach(e => {
      if(e != i[0]){
        print("Solarys/" + dir + e)
        require("Solarys/" + dir + e)
      }
    })
  }
}

req(
  //Campaign
  ["campaign", "planets"]
