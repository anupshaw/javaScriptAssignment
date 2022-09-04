console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('ticket'), 3000);
    setTimeout(() => reject('ticket'), 3000);
  });
 let ticket;

  try{
        ticket=await person3PromiseToShowTicketWhenWifeArrives;
  }catch(e){
       ticket=`Sorry face ${e}`
  }

  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');
