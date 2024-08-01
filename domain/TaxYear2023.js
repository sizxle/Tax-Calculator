class TaxYear2023 {
  static BAND_1 = 237_100;

  static BAND_2 = 370_500;

  static BAND_3 = 512_800;

  static BAND_4 = 673_000;

  static BAND_5 = 857_900;

  static BAND_6 = 1_817_000;

  static BAND_7 = 1_817_000;

  static RATE_BAND_1 = 0.18;

  static RATE_BAND_2 = 0.26;

  static RATE_BAND_3 = 0.31;

  static RATE_BAND_4 = 0.39;

  static RATE_BAND_5 = 0.41;

  static RATE_BAND_6 = 0.45;

  static PRIMARY_DEPENDENT_CREDIT = 332;

  static SECONDARY_DEPENDENT_CREDIT = 224;
  
  static PRIMARY_REBATE = 17_235;

  static INTEREST_EXEMPTION = 23_500;
  
  static CAPITAL_EXEMPTION = 40_000;
  
  static CAPITAL_EXEMPTION_RATE = 0.4;
  
  static TRAVEL_EXEMPTION = 80_000;

  static RETIREMENT_EXEMPTION = 144_375;

  static RETIREMENT_EXEMPTION_RATE = 0.275;


  static calculateTaxPayable(amount) {
    let results = 0;
    let band = this.determineBand(amount);
    switch (band) {
      case 7:
        results += (amount - this.BAND_6) * this.RATE_BAND_7;
        amount=this.BAND_6
      case 6:
        results += (amount - this.BAND_5) * this.RATE_BAND_6;
        amount=this.BAND_5
      case 5:
        results += (amount - this.BAND_4) * this.RATE_BAND_5;
        amount=this.BAND_4
      case 4:
        results += (amount - this.BAND_3) * this.RATE_BAND_4;
        amount=this.BAND_3
      case 3:
        results += (amount - this.BAND_2) * this.RATE_BAND_3;
        amount=this.BAND_2
      case 2:
        results += (amount - this.BAND_1) * this.RATE_BAND_2;
        amount=this.BAND_1
      case 1:
        results += amount * this.RATE_BAND_1;
    }
    return results;
  }

  static determineBand(amount) {
    return amount <= this.BAND_1
      ? 1
      : amount <= this.BAND_2
      ? 2
      : amount <= this.BAND_3
      ? 3
      : amount <= this.BAND_4
      ? 4
      : amount <= this.BAND_5
      ? 5
      : amount <= this.BAND_6
      ? 6
      : 7;
  }


  static calculateMedicalCredits(numOfDependents){
    let results=0;

    for(let i = 0; i < numOfDependents ;i++){
        if(i<2){
           results += (this.PRIMARY_DEPENDENT_CREDIT);
        }else{
            results+=(this.SECONDARY_DEPENDENT_CREDIT);
        }
    }
    return results*12;
  }
}
