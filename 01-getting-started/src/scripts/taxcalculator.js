
const taxCalculator = {
    //
    //  Simple Tax Calculator for Only the Federal Tax.
    //
    calculateFederalTax: (grossIncome) => {
      if (grossIncome <= 0) return 0;
      else if (grossIncome <= 48535) return (0.15*grossIncome);
      else if (grossIncome <= 97069) return (0.205*(grossIncome-48535) + 7280);
      else if (grossIncome <= 150473) return (0.26*(grossIncome-97069) + 17230);
      else if (grossIncome <= 214368) return (0.29*(grossIncome-150473) + 31115);
      else return (0.33*(grossIncome-214368) + 49645);
    }
      
};

export default taxCalculator;
