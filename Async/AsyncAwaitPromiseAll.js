console.log('Person1:shows ticket')


const wifeBringingTics = async () => {
    console.log('wife:I have the tics');
    console.log('husband:we should go in');
    console.log('wife:no I am hungry');
 
    const getPopCorn= new Promise((resolve,reject)=>resolve('Popcorn'))

    const getButter=new Promise((resolve,reject)=>resolve('Butter'))

    const getCoke=new Promise((resolve,reject)=>resolve('Coke'))

    const getChips=new Promise((resolve,reject)=>resolve('Chips'))

    const getCandy=new Promise((resolve,reject)=>resolve('Candy'))


    let [popcorn,butter,candy,chips,coke]=await Promise.all([getPopCorn,getButter,getCoke,getChips,getCandy])

    console.log(`${popcorn} ${butter} ${candy} ${chips} ${coke}`)
    
    return 'ticket'
}


wifeBringingTics().then((t) => {
    console.log(`Person3:shows ${t}`)
})

