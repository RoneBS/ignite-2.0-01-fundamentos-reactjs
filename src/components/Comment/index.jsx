import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './style.module.css'

export const Comment = () => {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/RoneBS.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rone Silveira</strong>
              <time title="08 de junho as 14:09h" dateTime="2022-05-11 08:13:30">Publicado a 1h</time>
            </div>

            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}