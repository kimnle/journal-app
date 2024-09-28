// <HomePage>
    // <EntryForm />
    // <LatestPosts limit={5} />
// </HomePage>

// <JournalEntryContainer>
    // Toggle between <EntryForm /> and <ViewForm />
    // <EntryForm entryId={123456789zwsxedcrtvybuhnjmi} />
// </JournalEntryContainer>

import { useState } from "react";
import { useJournalEntriesData, useJournalEntriesSetter } from "../contexts/EntriesContext";

export default function EntryForm({entryId}) {
    let journalEntriesData = useJournalEntriesData();
    let setJournalEntries = useJournalEntriesSetter();

    let [localId, setLocalId] = useState(entryId ? entryId.toString() : crypto.randomUUID());
    let [localType, setLocalType] = useState("");
    let [localName, setLocalName] = useState("Dault Post Name");
    let [localContent, setLocalContent] = useState("Write your journal entry here.");
    let [localAuthor, setLocalAuthor] = useState("Super Cool Author - that's you!!");
    let [localLastEdited, setLocalLastEdited] = useState(Date.now());

    const handleSubmission = () => {
        setJournalEntries(currentJournalEntries => {
            let newEntry = {
                lastEdited: Date.now(),
                author: localAuthor,
                content: localContent,
                name: localName,
                type: localType,
                id: localId
            }

            // let someNewArray = currentJournalEntries;
            // someNewArray.push(newEntry);
            // return someNewArray;

            return [...currentJournalEntries, newEntry];
        });
    }

    return(
        <>
            <label htmlFor="localName">Entry Title:</label>
            <input
                type="text"
                name="localName"
                value={localName}
                defaultValue={localName}
                onChange={(event) => setLocalName(event.target.value)}
            />

            <label htmlFor="localAuthor">Author:</label>
            <input
                type="text"
                name="localAuthor"
                value={localAuthor}
                defaultValue={localAuthor}
                onChange={(event) => setLocalAuthor(event.target.value)}
            />

            <label htmlFor="localContent">Entry Content:</label>
            <input
                type="text"
                name="localContent"
                value={localContent}
                defaultValue={localContent}
                onChange={(event) => setLocalContent(event.target.value)}
            />

            <label htmlFor="localType">Entry Type:</label>
            <input
                type="text"
                name="localType"
                value={localType}
                defaultValue={localType}
                onChange={(event) => setLocalType(event.target.value)}
            />

            <button onClick={handleSubmission}>
                Submit new entry
            </button>
        </>
    )
}