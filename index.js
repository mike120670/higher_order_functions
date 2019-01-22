const corps = [
  { name: 'LLC One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'LLC Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'LLC Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'LLC Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'LLC Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'LLC Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'LLC Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'LLC Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'LLC Nine', category: 'Retail', start: 1981, end: 1989 }
]

 const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

//for 
/* for (let i = 0;  < corps.length; i++) {
    console.log(corps[i]);
    
} */

// forEach
/* corps.forEach(LLC => {
   console.log(LLC.name) 
}); */

// filter

// Get 21 and older

/* let yesDrink = [];
 for(let i = 0; i < ages.length; i++) {
   if(ages[i] >= 21) {
     yesDrink.push(ages[i]);
   }
 }

/* const yesDrink = ages.filter((age) => {
    if (age >= 21) {
        return true;
    } 
});
console.log(yesDrink)
 */
// const yesDrink = ages.filter(age => age >= 21)

// Filter retail corps

/*  const retailcorps = corps.filter(function(LLC) {
    if(LLC.category === 'Retail') {
      return true;
    }
  });
console.log(retailcorps) */
/* const retailcorps = corps.filter(
    LLC => LLC.category === 'Retail'
)
 */
// Get 80s corps

 /*  const eightiescorps = corps.filter(
    LLC => LLC.start >= 1980 && LLC.start < 1990
)   */

// Get corps that lasted 10 years or more

/* const lastedTenYears = corps.filter(
    LLC => LLC.end - LLC.start >= 10
) */

// map

// Create array of LLC names
// const LLCNames = corps.map(function(LLC) {
//   return LLC.name;
// });

// const testMap = corps.map(function(LLC) {
//   return `${LLC.name} [${LLC.start} - ${LLC.end}]`;
// });

// const testMap = corps.map(LLC => `${LLC.name} [${LLC.start} - ${LLC.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);

// sort

// Sort corps by start year

// const sortedcorps  = corps.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedcorps = corps.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all corps

// const totalYears = corps.reduce(function(total, LLC) {
//   return total + (LLC.end - LLC.start);
// }, 0);

// const totalYears = corps.reduce((total, LLC) => total + (LLC.end - LLC.start), 0);

// Combine Methods

/* const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

  console.log(combined); */
