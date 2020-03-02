export default Array(100).fill(0).map((_, i) => {

    const randomInteger = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    } 
  return {
    hinmei: `商品の名前 (${i + 1})`, 
    size: `商品のサイズ (${i + 1})`, 
    yoryo: randomInteger(100, 200), 
    irisu: randomInteger(5, 10), 
    maisu: randomInteger(100, 200), 
    tanka: randomInteger(10000, 20000) / 100, 
    kingaku: randomInteger(1000, 2000 ), 
    gensan: `gensan${i + 1}`, 
    genkako: `genkako${i + 1}`, 
    ikusei: `ikusei${i + 1}`, 
  };
});