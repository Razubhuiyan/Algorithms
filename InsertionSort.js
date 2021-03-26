let unsortedElements = [5, 2, 4, 6, 1, 3];

function InsertionSort(elements) {
  
  let n = elements.length;
  
  for(let i=1; i<n; i++){
    
    let key = elements[i];
    
    let j = i - 1;
    console.log(j);
    
    while((j>-1) && (elements[j]>key)){
      elements[j+1] = elements[j];
      j--;
    }
    elements[j+1] = key;
  }
  return elements;
  
}

console.log(InsertionSort(unsortedElements));