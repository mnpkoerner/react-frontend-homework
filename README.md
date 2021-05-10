# Rocketmiles - React Technical Assesment

## Approach, Process, and Usage - Mark Koerner

### Approach
My goal for the technical assesment was to utilize test driven development to build a flexible React app. I spread my work over a few days to break it into stages of planning, testing and implementation.

### Process
I started the project by familiarizing myself with the data from the API call. A great way for me to do that was to build myself an abbreviated version of the
API call to use as test data. Then, I broke out the App into two logical components: the SearchControls and the HotelList. I considered using Redux, but opted for something lighter so my solution was passing data through my components with a combination of state variables and props. The most efficient solution I saw was to pass the hotel list from the API call into the SearchController. There, based on user input, the list would be filtered/sorted and passed into HotelList to be rendered on the DOM.

Once I had the path my data would take, I built my tests and functions. First, the hotel-sort.service, used .sort() and a switch statement to reorder the input array based on the user's input (or lack of input). Once the function passed the tests, I moved onto the filter function in hotel-filter.service. Using a combination of built in methods on top of .filter(), the function passed the tests.

I used state variables to capture user input and pass their search terms into the filter and sort functions in the SearchControls component. React's ability to dynamically rerender the DOM was the backbone of my solution. As the user types to filter hotels by name or selects a sort method, the state variable that stores the input's value changes, and sort/filter functions are called again without the user having to click a 'search' or 'submit' button. So, with each letter they type, the hotel list is filtered live. If the user does not sort/filter the hotels, the array from the API will pass through both functions unchanged. The results pass through to the HoteList and are rendered on the DOM. If the user's filter matches nothing from the API call OR if the API call fails, a component renders that asks them to refresh their browswer.

Here, I added a little functionality. In the API call, there was a fair bit of unused data. Each hotel rendered by HotelList had a 'select' button, so I built a new HotelDetails component to show some more details of a given hotel when that button is clicked. The HotelDetails component features its own button that could have the functionality originally intended for the 'submit' button. For now, the 'Yes, book it!' button console.logs the hotel's unique id. Hotel amenities have been important to me in the past when traveling for work, and I wanted to provide the user a quick way to see all of what was available to them.

I wrapped up my work with a little styling. I put the SearchControls and HotelList on the left half of the screen and the HotelDetail on the right. This allows the user to read and scroll vertically when browsing their search results, then places the HotelDetails in their own unique place. I added some hover/click effects to the buttons and built out the HotelDetail component to fit with the app's existing styling. Note: the app is visually optimised for a screen width of at least 950px.

Thank you for the opportunity to try my hand at the technical assessment. It was a rewarding challenge to engage fully in TDD, and add some new tools to the tool belt.

### Usage
This usage guide assumes you've followed the instructions in the following section to run the frontend/backend development servers.
With the development servers running:
1. Input characters in the 'Hotel name' input field to filter results based on your search AND/OR
2. Select a value to sort by from the 'Sort by' dropdown menu
* If no results match your search, or you're unhappy with the results, click 'Reset' to clear all filter/sort parameters
3. To see more information about a specific hotel on the, click its 'Select' button
4. To details from a different hotel on the list, click its 'Select' button
* If the backend development server returns nothing, a component will render that prompts you to refresh the page.




## Instructions:
See also: instructions.pdf

## Development Frontend server

Run `npm start` for a dev server. Navigate to `http://localhost:1234`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

## Development Backend API server

We've packaged a very simple backend for you in docker to serve up the API for your development. You can find it in [backend-server](./backend-server).

Requires:
Java 11

#### To Run backend API using gradle
```bash
./gradlew clean bootRun
```

####  To Run backend API using Docker
- Install [docker](https://docs.docker.com/docker-for-mac/install/)
- `./boot`

#### Instructions:
Checkout instructions.pdf
