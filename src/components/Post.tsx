import styles from "./Post.module.css";
import Comment from "./Comment";
import Avatar from "./Avatar";
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content{
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}
export default function Post({ post }: PostProps) {
const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'")
const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {locale: ptBR, addSuffix:true})
const [comments, setComments] = useState(Array<string>);
const [newCommentText, setNewCommentText] = useState('');

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value);
  }

  const deleteComment = (commentToDelete: string) => {
    setComments(comments.filter(comment => comment !== commentToDelete));
  }

  const isNewCommentEmpty = newCommentText.length === 0;

return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line) => {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          }
          else if (line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea name="comment" onChange={handleNewCommentChange} value={newCommentText} placeholder="Comente algo sobre esse post"></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  );
}
