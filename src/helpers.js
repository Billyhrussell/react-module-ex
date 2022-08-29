function choice(items){
  return items[Math.floor(items.length * Math.random())];
}

function remove(items, item){

  let idx = items.indexOf(item);

  if(idx >= 0){
    return items.splice(idx, 1);
  }

  return undefined;
}

export { choice, remove };