import './App.css'
import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function showModalHandler() {
        setModalIsVisible(true);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
            <MainHeader onCreatePost={showModalHandler}/>
            <main>
                <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
            </main>
        </>
    );
}

export default App
