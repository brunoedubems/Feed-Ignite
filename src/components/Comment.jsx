import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content,OnDeleteComment}) {
const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment(){
  OnDeleteComment(content)
}

function handleLikeComment(){
  setLikeCount((state) =>{
    return state +1 
  })
}
  
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/brunoedubems.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <time
                title="8 de Janeiro às 23:45h"
                dateTime="2022-01-08 23:45:15"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button 
                onClick={handleDeleteComment} 
                title="Deletar comentário">

              <Trash size={24}></Trash>
            </button>
          </header>

          <p>{content}</p>
          </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span> {likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
