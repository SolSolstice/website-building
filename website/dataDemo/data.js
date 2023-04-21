/* 

    JS is a lose-type language 
        We do not have to explicitly tell the data type when we create it 

        python declaration 
            num = 1   - num is an int
            letter = 'a' - letter is a string
        
        JS declaration 
            variables:

            var num = 1 
            -or-           - num is an int 
            let num = 1 

            var letter = 'a' 
            -or-           - letter is an char 
            let letter = 'a'

            constants: 

            const num2 = 10  -num2 is an int but CAN NEVER CHANGE VALUE



*/

// declare a variable to hold a name 

let name = 'Pac-Man'

// display the value of name to the console
console.log(`${name} evades ghosts on boards of dots and fruit`) 
    // JS allows you to override keywords in JS as long as it makes sense in the context 

// make JS objects - store values in value/key pairs 

let inky = {
    name: 'Inky',
    color:'Blue'
}

let pinky = {
    name: 'Pinky',
    color: 'Pink'
} 

let blinky = {
    name: 'Blinky',
    color: 'Blue'
}

let clyde = {
    name: 'Clyde',
    color: 'Orange'
}

//display key value from an object
console.log(`${inky.name} is ${inky.color}`)


//make an array - can be made in 2 ways 

// 1. initialization list 
let values = [1,2,3,4,5]

// 2. empty array where values are pushed 
let group2Teams = []

// use the .push() command to add data to an arry 

group2Teams.push('Team Alpha')
group2Teams.push('Team Beta')
group2Teams.push('Team Gamma')
group2Teams.push('Team Delta')
group2Teams.push('Team Ep')
group2Teams.push('Team Zeta')
group2Teams.push('Team Eta')
group2Teams.push('Team Theta')

// display the infro from the arrays
console.log(values)
console.log(group2Teams)

/*
    use relational operators to implement decisions 

    > greater than

    < less than

    >= greater than equal to

    <= less than equal to 

    == equal to (loose comparison) 
        1 == '1' -> true

    === is equal to (strict comparison - does not include the data type)
        1 === '1' -> false

    != is not equal

    && logical AND (inclusive) 

    || logical OR (optional)

>> single alternative 
    if (condition)
    {
        statement(s)
    }
>> dual alternative 
    if (condition)
    {
        statement(s)
    }
    else
    {
        statement(s)
    }
>> multiple alternatives 
    if (condition)
    {
        statement(s)
    }
    else if(condition)
    {
        statement(s)
    }
    else
    {
        statement(s)
    }

    switch(variable)
    {
        case value:
            statement(s)
            break
        case Anothervalue:
            statement(s)
            break
        default:
            statement(s)
            break
    }
*/

/* 

    >> looping

        << Pretest and posttest loops 

    >> while - pretest
        * continously check for condition until its false 
        while (condition)
        {
            statement(s)
        }
    >> for - pretest 
        *excecute a set amount of time - using a control variable

        for (start,condition,amount to change the loop control variable by) 
        {
            statement(s)
        }

    >> do-while - posttest 
        * implimentif you want while statment to run at least 1 time and check for condition after loop
        do
        {
            statement(s)
        }while(condition)


*/

// use a for loop to access and display the contents one-by-one

for (var i = 0; i < group2Teams.length; i++) //i++ = incement by 1 
{
    console.log(group2Teams[i])
}