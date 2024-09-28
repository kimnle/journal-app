import EntryForm from "../components/EntryForm";
import LatestXPost from "../components/LastestXPost";

export default function HomePage() {
    return(
        <>
            <h1>Journal Home Page</h1>
            {/* New post form: */}
            <EntryForm />

            {/* Lastest X amount of posts: */}
            <LatestXPost limit={3} />
        </>
    )
}