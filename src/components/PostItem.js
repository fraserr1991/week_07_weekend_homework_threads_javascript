import './PostItem.css'

const PostItem = function ({thread, readThreadLater, amIReadLater}) {
    
    const isReadLater = amIReadLater(thread)

    const handleOnClick = thread => {
        readThreadLater(thread)
    }

    return (
        <>
        <li className={isReadLater ? "favourite" : ""}>
            <button onClick={() => handleOnClick(thread)}>Read later</button>
            <a href={thread['data']['url']}>{thread['data']['title']}</a></li>
        </>
    )
}

export default PostItem