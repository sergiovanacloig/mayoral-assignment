import { calculateDiscountedPrice } from '../../utils/helpers';

describe('calculateDiscountedPrice', () => {
    it('should calculate the discounted price correctly with positive discount', () => {
      const price = 100;
      const discount = 20;
      const expectedDiscountedPrice = 80;
  
      const discountedPrice = calculateDiscountedPrice(price, discount);
  
      expect(discountedPrice).toBe(expectedDiscountedPrice);
    });
  
    it('should return initial price when applying 0 discount', () => {
      const price = 100;
      const discount = 0;
  
      const discountedPrice = calculateDiscountedPrice(price, discount);
  
      expect(discountedPrice).toBe(price);
    });
  
    it('should return initial price when applying negative discount', () => {
      const price = 100;
      const discount = -10;
  
      const discountedPrice = calculateDiscountedPrice(price, discount);
  
      expect(discountedPrice).toBe(price);
    });
  });