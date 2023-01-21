import React, {useState, useEffect} from 'react'
import PostList from "../components/PostList"
import PostDetails from '../components/PostDetails'

const PostBox = function () {
    const [javascriptThreads, setJavascriptThreads]= useState([])
    const [selectedJavascriptThread, setSelectedJavscriptThread] = useState(null)
    const [threadsReadLater, setThreadsReadLater] = useState([])


    useEffect(() => {
        getPosts()
    }, [])

    //these are ETF's not stocks
    const getPosts = function () {
        fetch('https://www.reddit.com/r/javascript.json')
            .then((response) => response.json())
            .then((javascriptThreads) => setJavascriptThreads(javascriptThreads['data']['children']));
    }

    const readThreadLater = thread => {
        setThreadsReadLater([...threadsReadLater, thread])
    }

    const amIReadLater = thread => {
        return threadsReadLater.includes(thread)
    }

    return (
        <>
        <PostList javascriptThreads={javascriptThreads} 
        readThreadLater={readThreadLater} 
        amIReadLater={amIReadLater}
        />
        {/* {selectedJavascriptThread && <PostDetails selectedJavascriptThread={selectedJavascriptThread}/>} */}
        </>
    )
}

export default PostBox