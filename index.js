function theBeatlesPlay(musicians, instruments){
  var plays = []
  for(var i=0; i<musicians.length; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}` )
  }
  return plays
}

function johnLennonFacts(facts){
  for(var i=0; i<facts.length; i++){
    facts[i]=`${facts[i]}!!!`
  }
  console.log(facts)
  return facts

}
