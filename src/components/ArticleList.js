import React from "react";
import Article from "./Article";


function ArticleList({posts}) {
    const postList = posts.map((post)=>(
        <Article
        title= {post.title} 
        date= {post.date}
        preview= {post.preview}
        key = {post.id}
        minutes = {post.minute}
        />
        
        ));



    return(
        <main>{postList}</main>
    )
    
}

export default ArticleList