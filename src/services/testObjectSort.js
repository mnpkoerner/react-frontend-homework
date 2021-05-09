//stand-in data for API result, use when running tests: contains tests AND solutions

//testObject.mockApi = set of data to run all tests against
//testObject.testSortDescending = for sort test, highest to lowest
//testObject.testSortAscending = for sort test, lowest to highest
//testObject.testSortRecommended = for sort test, sorts by rating highest to lowest

const testObjectSort = {
    mockApi:
        [
            {
                id: '9311',
                hotelStaticContent: {
                    address: {
                        line1: '123 North 4th Street',
                        line2: null,
                        city: 'Minneapolis',
                        stateName: 'Minnesota',
                        stateCode: 'MN',
                    },
                    hotelId: 443,
                    mainImage: {
                        category: 'EXTERIOR',
                        source: 'SOURCE1',
                        url: 'http://www.hotelphoto.com/speedstop'
                    },
                    name: 'Motorsport Speed Stop Inn',
                    neighborhoodName: 'Midway',
                    rating: 4.9,
                    stars: 1.5
                },
                lowestAveragePrice: {
                    amount: 79,
                    currency: 'USD',
                    symbol: '&#36;',
                },
                rewards: {
                    miles: 500,
                }
            },
            {
                id: '89',
                hotelStaticContent: {
                    address: {
                        line1: '44 Low Western Avenue',
                        line2: null,
                        city: 'Minneapolis',
                        stateName: 'Minnesota',
                        stateCode: 'MN',
                    },
                    hotelId: 9896,
                    mainImage: {
                        category: 'EXTERIOR',
                        source: 'SOURCE1',
                        url: 'http://www.hotelphoto.com/rcvending'
                    },
                    name: 'Royal Crown Hotel and Vending Machine',
                    neighborhoodName: 'Phillips',
                    rating: 5.5,
                    stars: 2.5
                },
                lowestAveragePrice: {
                    amount: 89,
                    currency: 'USD',
                    symbol: '&#36;',
                },
                rewards: {
                    miles: 700,
                }
            },
            {
                id: '56787',
                hotelStaticContent: {
                    address: {
                        line1: '12 North 12th Street',
                        line2: null,
                        city: 'Minneapolis',
                        stateName: 'Minnesota',
                        stateCode: 'MN',
                    },
                    hotelId: 78,
                    mainImage: {
                        category: 'EXTERIOR',
                        source: 'SOURCE1',
                        url: 'http://www.hotelphoto.com/EDZ'
                    },
                    name: 'Excursions by Dominic Zantigo',
                    neighborhoodName: 'Downtown East',
                    rating: 9.4,
                    stars: 4.5
                },
                lowestAveragePrice: {
                    amount: 279,
                    currency: 'USD',
                    symbol: '&#36;',
                },
                rewards: {
                    miles: 10000,
                }
            },
            {
                id: '12',
                hotelStaticContent: {
                    address: {
                        line1: '500 St. Anthony Main',
                        line2: null,
                        city: 'Minneapolis',
                        stateName: 'Minnesota',
                        stateCode: 'MN',
                    },
                    hotelId: 909,
                    mainImage: {
                        category: 'EXTERIOR',
                        source: 'SOURCE1',
                        url: 'http://www.hotelphoto.com/MCII'
                    },
                    name: 'Mill City Island Inn',
                    neighborhoodName: 'St. Anthony',
                    rating: 9,
                    stars: 4
                },
                lowestAveragePrice: {
                    amount: 219,
                    currency: 'USD',
                    symbol: '&#36;',
                },
                rewards: {
                    miles: 8000,
                }
            },
            {
                id: '8732',
                hotelStaticContent: {
                    address: {
                        line1: '323 Victory Memorial Boulevard',
                        line2: null,
                        city: 'Minneapolis',
                        stateName: 'Minnesota',
                        stateCode: 'MN',
                    },
                    hotelId: 5456,
                    name: 'North Branch Riverview Suites',
                    mainImage: {
                        category: 'EXTERIOR',
                        source: 'SOURCE1',
                        url: 'http://www.hotelphoto.com/NBRsuites'
                    },
                    neighborhoodName: 'Camden',
                    rating: 8.2,
                    stars: 3.5
                },
                lowestAveragePrice: {
                    amount: 119,
                    currency: 'USD',
                    symbol: '&#36;',
                },
                rewards: {
                    miles: 4000,
                }
            },
        ],
    testSortDescending: [
        {
            id: '56787',
            hotelStaticContent: {
                address: {
                    line1: '12 North 12th Street',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 78,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/EDZ'
                },
                name: 'Excursions by Dominic Zantigo',
                neighborhoodName: 'Downtown East',
                rating: 9.4,
                stars: 4.5
            },
            lowestAveragePrice: {
                amount: 279,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 10000,
            }
        },
        {
            id: '12',
            hotelStaticContent: {
                address: {
                    line1: '500 St. Anthony Main',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 909,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/MCII'
                },
                name: 'Mill City Island Inn',
                neighborhoodName: 'St. Anthony',
                rating: 9,
                stars: 4
            },
            lowestAveragePrice: {
                amount: 219,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 8000,
            }
        },
        {
            id: '8732',
            hotelStaticContent: {
                address: {
                    line1: '323 Victory Memorial Boulevard',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 5456,
                name: 'North Branch Riverview Suites',
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/NBRsuites'
                },
                neighborhoodName: 'Camden',
                rating: 8.2,
                stars: 3.5
            },
            lowestAveragePrice: {
                amount: 119,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 4000,
            }
        },
        {
            id: '89',
            hotelStaticContent: {
                address: {
                    line1: '44 Low Western Avenue',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 9896,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/rcvending'
                },
                name: 'Royal Crown Hotel and Vending Machine',
                neighborhoodName: 'Phillips',
                rating: 5.5,
                stars: 2.5
            },
            lowestAveragePrice: {
                amount: 89,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 700,
            }
        },
        {
            id: '9311',
            hotelStaticContent: {
                address: {
                    line1: '123 North 4th Street',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 443,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/speedstop'
                },
                name: 'Motorsport Speed Stop Inn',
                neighborhoodName: 'Midway',
                rating: 4.9,
                stars: 1.5
            },
            lowestAveragePrice: {
                amount: 79,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 500,
            }
        }

    ],
    testSortAscending: [
        {
            id: '9311',
            hotelStaticContent: {
                address: {
                    line1: '123 North 4th Street',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 443,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/speedstop'
                },
                name: 'Motorsport Speed Stop Inn',
                neighborhoodName: 'Midway',
                rating: 4.9,
                stars: 1.5
            },
            lowestAveragePrice: {
                amount: 79,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 500,
            }
        },
        {
            id: '89',
            hotelStaticContent: {
                address: {
                    line1: '44 Low Western Avenue',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 9896,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/rcvending'
                },
                name: 'Royal Crown Hotel and Vending Machine',
                neighborhoodName: 'Phillips',
                rating: 5.5,
                stars: 2.5
            },
            lowestAveragePrice: {
                amount: 89,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 700,
            }
        },
        {
            id: '8732',
            hotelStaticContent: {
                address: {
                    line1: '323 Victory Memorial Boulevard',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 5456,
                name: 'North Branch Riverview Suites',
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/NBRsuites'
                },
                neighborhoodName: 'Camden',
                rating: 8.2,
                stars: 3.5
            },
            lowestAveragePrice: {
                amount: 119,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 4000,
            }
        },
        {
            id: '12',
            hotelStaticContent: {
                address: {
                    line1: '500 St. Anthony Main',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 909,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/MCII'
                },
                name: 'Mill City Island Inn',
                neighborhoodName: 'St. Anthony',
                rating: 9,
                stars: 4
            },
            lowestAveragePrice: {
                amount: 219,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 8000,
            }
        },
        {
            id: '56787',
            hotelStaticContent: {
                address: {
                    line1: '12 North 12th Street',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 78,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/EDZ'
                },
                name: 'Excursions by Dominic Zantigo',
                neighborhoodName: 'Downtown East',
                rating: 9.4,
                stars: 4.5
            },
            lowestAveragePrice: {
                amount: 279,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 10000,
            }
        },
    ],
    testSortRecommended: [
        {
            id: '56787',
            hotelStaticContent: {
                address: {
                    line1: '12 North 12th Street',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 78,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/EDZ'
                },
                name: 'Excursions by Dominic Zantigo',
                neighborhoodName: 'Downtown East',
                rating: 9.4,
                stars: 4.5
            },
            lowestAveragePrice: {
                amount: 279,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 10000,
            }
        },
        {
            id: '12',
            hotelStaticContent: {
                address: {
                    line1: '500 St. Anthony Main',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 909,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/MCII'
                },
                name: 'Mill City Island Inn',
                neighborhoodName: 'St. Anthony',
                rating: 9,
                stars: 4
            },
            lowestAveragePrice: {
                amount: 219,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 8000,
            }
        },
        {
            id: '8732',
            hotelStaticContent: {
                address: {
                    line1: '323 Victory Memorial Boulevard',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 5456,
                name: 'North Branch Riverview Suites',
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/NBRsuites'
                },
                neighborhoodName: 'Camden',
                rating: 8.2,
                stars: 3.5
            },
            lowestAveragePrice: {
                amount: 119,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 4000,
            }
        },
        {
            id: '89',
            hotelStaticContent: {
                address: {
                    line1: '44 Low Western Avenue',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 9896,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/rcvending'
                },
                name: 'Royal Crown Hotel and Vending Machine',
                neighborhoodName: 'Phillips',
                rating: 5.5,
                stars: 2.5
            },
            lowestAveragePrice: {
                amount: 89,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 700,
            }
        },
        {
            id: '9311',
            hotelStaticContent: {
                address: {
                    line1: '123 North 4th Street',
                    line2: null,
                    city: 'Minneapolis',
                    stateName: 'Minnesota',
                    stateCode: 'MN',
                },
                hotelId: 443,
                mainImage: {
                    category: 'EXTERIOR',
                    source: 'SOURCE1',
                    url: 'http://www.hotelphoto.com/speedstop'
                },
                name: 'Motorsport Speed Stop Inn',
                neighborhoodName: 'Midway',
                rating: 4.9,
                stars: 1.5
            },
            lowestAveragePrice: {
                amount: 79,
                currency: 'USD',
                symbol: '&#36;',
            },
            rewards: {
                miles: 500,
            }
        },
    ]
}

export default testObjectSort;
