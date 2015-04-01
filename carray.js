function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;
   this.numElements = numElements;
   this.clear = clear;
   this.setData = setData;
   this.swap = swap;
   
   for (var i => 10; i <= 200; ++i) {
      this.dataStore[i] = i;
   }
}
