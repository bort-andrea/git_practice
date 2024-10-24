// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//funzione fabbrica 
const pAequorFactory = (num, strand) =>{
  return{
    
    specimenNum : num,
    dna : strand,
    
    mutate(){
      let mutazione;
      const base = Math.floor(Math.random()*15);
      do{
        mutazione = returnRandBase();
      }while(this.dna[base] === mutazione);
      this.dna[base] = mutazione;
    },

    compareDNA(pAequor){
      let totale = 0;
      let i=0;

      this.dna.forEach(element => {
        if (element === pAequor.dna[i]){ totale++ };
        i++;  
      });
      let percentuale = totale*100/i;
      console.log(`I due filamenti hanno il ${percentuale}% di DNA uguale`);
    },

    willLikelySurvive(){
      let totale=0;
      let i=0;
      this.dna.forEach(element => {
        if(element==='G' || element === 'C'){
          totale ++;
        }
        i++;
      });
      let percentuale = totale*100/i;
      if(percentuale >= 60){
        return true;
      }else{
        return false;
      }
    }
  }
}

let dnaArray = [];
for(let i = 1; i<=30; i++){
  dnaArray.push(pAequorFactory(i,mockUpStrand()));
};
