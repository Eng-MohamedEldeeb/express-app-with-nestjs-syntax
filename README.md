# express-app-nestjs-syntax

<h3>Is it possible to build an Express App Like nestjs applications</h3>
<h2>with nest's <b>Syntax</b> ?!</h2>

<h2>it took me 2 days to figure out how to exactly simulate Nest.js decorators in Express.js</h2>
and the answer is that it's not actually that hard

## I've simulated the most used Decorators 'In My Opinion' with creating:

- @Controller('path')
- @Body('data to be destructed')
- @Headers('data to be destructed')
- @Param('data to be destructed')
- @Req('data to be destructed')
- @Body('data to be destructed')

- @HttpCode(StatusCode)
- @Post("endPoint")
- @Patch("endPoint")

## @Controller() Decorator:

## The Answer Is:

yes we can, with the power of OOP and the way <b>Express.js</b> is unopinionated and the capabilities of <b>Nest.Js</b>,
what if we wanted to merge between the both of them together in on single powerful project ?

## The Main Key Of Nestjs Functionality:

Nestjs used a very Powerful way that saved a lot of necessary steps with just one single line of code by using the Power of
the <a>Decorator Design Pattern</a>

## Pros Of This:

if we succeeded by doing so we'll be able to build large, scalable and secured application, easy to build and easy to be developed
save us much of time by creating a lot of duplicated steps

## Cons Of This:

unfortunately this comes with a trade off of course, the complexity and the unwanted new steps would make it unrecommended with sticking with using
the frameworks as they are instead of spending much time with creating the circle once again

<h1>But At Least It Wasn't That Hard Though 😊👍</h1>
