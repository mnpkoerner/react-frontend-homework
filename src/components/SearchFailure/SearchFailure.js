import React from 'react'

//component shows when a user searches for a hotel name, and search returns no resuts
export default function SearchFailure() {
    return (
        <main className="search-failed">
            <h1>We're sorry, we couldn't find a match for your search</h1>
            <h3>Please either reset your search or refresh the page to try again</h3>
        </main>
    )
}
