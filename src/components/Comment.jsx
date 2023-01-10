import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content,OnDeleteComment}) {
function handleDeleteComment(){

  OnDeleteComment(content)
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
          <button>
            <ThumbsUp />
            Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
