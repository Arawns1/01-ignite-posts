import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export default function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  }
  const handleLikeComment = () =>{
    setLikeCount((valorAnterior) => { return valorAnterior + 1 });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Arawns1.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Damico</strong>
              <time
                title="28 de novembro as 10:50h"
                dateTime="2023-11-28 10:50:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário" type="submit">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
