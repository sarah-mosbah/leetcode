/* Return array of product of all array except current position */

export function arrayOfProducts(array: number[]) {
    const product = [];
      let leftProd = 1;
      for(let i=0; i < array.length; i++) {
          product[i] = leftProd;
          leftProd *= array[i];
      }
      let rightProd = 1;
      for(let i=array.length -1; i > -1 ; i--) {
          product[i] *= rightProd;
          rightProd *= array[i];
      }
      
      return product;
}











const map = new Map<number, number>();
if(map.set()
