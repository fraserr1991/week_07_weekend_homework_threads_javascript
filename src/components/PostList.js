import PostItem from "./PostItem"

const PostList = function ({javascriptThreads, readThreadLater, amIReadLater}) {
    const javascriptItems = javascriptThreads.map((thread, index) => {
        return <PostItem 
                key={thread['data']['id']} 
                thread = {thread} 
                readThreadLater={readThreadLater} 
                amIReadLater={amIReadLater}
                />
    })

    return (
        <>
        <ol>
            {javascriptItems}
        </ol>
        </>
    )
}

export default PostList