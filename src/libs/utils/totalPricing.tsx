import wordcountToPricing from './wordcountToPricing';
import deliveryToPricing from './deliveryToPricing';
import taxesToPricing from './taxesToPricing';

export default function totalPricing(wordcount: Number, delivery: Number, taxRate: Number) {

  const wordcountCost= wordcountToPricing(wordcount);
  const deliveryDiscount = deliveryToPricing(wordcount, delivery);
  const taxes = taxesToPricing(wordcountCost+deliveryDiscount, taxRate);

  return (wordcountCost+deliveryDiscount+taxes);
}