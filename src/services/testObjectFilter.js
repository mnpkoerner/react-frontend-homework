
//test index:
//testOne: happy path, one word matches. input 'axe', expect [testOne]
//testTwo: happy path, two letter matches. input 'X', expect [testTwo]
//testThree: unhappy path, letters match but out of order. input 'ex', expect []
//testFour: happy path, letters and numbers in sequence with spaces. input 'Super 8 M', expect [testFour]
//testFive: happy path, spaces after search term. input 'Minn       ' expect [testFive]
//testSix: unhappy path, character not found. input 'q' expect []
//testSeven: unhappy path, user inputs only spaces. input '      ' expect [mockApi]
//testEight: unhappy path, user misspells. input 'Jilton' expect []

const testObjectFilter = {
    mockApi: [
        {
            id: '123',
            hotelStaticContent: {
                name: 'Hilton Inn and Suites Minneapolis',
            },
        },
        {
            id: '234',
            hotelStaticContent: {
                name: 'The Ritz Carlton, Saint Paul',
            },
        },
        {
            id: '234',
            hotelStaticContent: {
                name: 'Aloft Minneapolis Downtown',
            },
        },
        {
            id: '3456',
            hotelStaticContent: {
                name: 'The Chamberlain Hotel by Hilton Minneapolis-St. Paul',
            },
        },
        {
            id: '66',
            hotelStaticContent: {
                name: 'Minneapolis Westin Downtown',
            },
        },
        {
            id: '567',
            hotelStaticContent: {
                name: 'The Axe Handle Inn Minneapolis',
            },
        },
        {
            id: '56756',
            hotelStaticContent: {
                name: 'Super 8 Minneapolis',
            },
        },
    ],
    testOne: [
        {
            id: '567',
            hotelStaticContent: {
                name: 'The Axe Handle Inn Minneapolis',
            },
        },
    ],
    testTwo: [
        {
            id: '567',
            hotelStaticContent: {
                name: 'The Axe Handle Inn Minneapolis',
            },
        },
    ],
    testThree: [],
    testFour: [
        {
            id: '56756',
            hotelStaticContent: {
                name: 'Super 8 Minneapolis',
            },
        },
    ],
    testFive: [
        {
            id: '123',
            hotelStaticContent: {
                name: 'Hilton Inn and Suites Minneapolis',
            },
        },
        {
            id: '234',
            hotelStaticContent: {
                name: 'Aloft Minneapolis Downtown',
            },
        },
        {
            id: '3456',
            hotelStaticContent: {
                name: 'The Chamberlain Hotel by Hilton Minneapolis-St. Paul',
            },
        },
        {
            id: '66',
            hotelStaticContent: {
                name: 'Minneapolis Westin Downtown',
            },
        },
        {
            id: '567',
            hotelStaticContent: {
                name: 'The Axe Handle Inn Minneapolis',
            },
        },
        {
            id: '56756',
            hotelStaticContent: {
                name: 'Super 8 Minneapolis',
            },
        },
    ],
    testSix: [],
    testSeven: [
        {
            id: '123',
            hotelStaticContent: {
                name: 'Hilton Inn and Suites Minneapolis',
            },
        },
        {
            id: '234',
            hotelStaticContent: {
                name: 'The Ritz Carlton, Saint Paul',
            },
        },
        {
            id: '234',
            hotelStaticContent: {
                name: 'Aloft Minneapolis Downtown',
            },
        },
        {
            id: '3456',
            hotelStaticContent: {
                name: 'The Chamberlain Hotel by Hilton Minneapolis-St. Paul',
            },
        },
        {
            id: '66',
            hotelStaticContent: {
                name: 'Minneapolis Westin Downtown',
            },
        },
        {
            id: '567',
            hotelStaticContent: {
                name: 'The Axe Handle Inn Minneapolis',
            },
        },
        {
            id: '56756',
            hotelStaticContent: {
                name: 'Super 8 Minneapolis',
            },
        },
    ],
    testEight: [],



}


export default testObjectFilter
