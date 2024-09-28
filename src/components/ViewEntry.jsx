export default function ViewEntry({entryId}) {

    if (journalEntry.name) {
        return <div>
            {/* Actual journal entry content to view!! */}
            <h1>{journalEntry.name}</h1>
            <h2>Written by: {journalEntry.author}</h2>
            <h3>Type: {journalEntry.type}</h3>
            <h3>Last Edited: {new Date(journalEntry.lastEdited).toLocaleDateString()}</h3>
            <p>{journalEntry.content}</p>
        </div>
    } else {
        return <div>
            <h6>Something went wrong!!</h6>
        </div>
    }
}