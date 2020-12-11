const {heroList} = require('./HeroList');
describe('Check  falsy value ',()=>{
    test('do not have null',()=>
    {
     expect(heroList()).not.toBeNull()   
    })

test('Cheack hero in hero list' ,()=>{
    expect(heroList()).toContain('Doctor Doom')
})
test('Leanght' ,()=>{
    expect(heroList()).toHaveLength(3)
})


})

