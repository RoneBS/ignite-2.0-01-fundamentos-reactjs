import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './styles/App.module.css'

import './styles/global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/RoneBS.png',
      name: 'Rone Silveira',
      role: 'Estudante'
    },
    content: [
       { type: 'paragraph', content: 'Fala galeraa 👋' },
       { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no  NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
       {type : 'link', content: 'jane.design/doctorcare'}  
    ],
    publishedAt: new Date('2022-06-09 14:01:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://playadelnacho.files.wordpress.com/2012/08/rr22012.jpg',
      name: 'Randy Rhoads',
      role: 'Guitarrista'
    },
    content: [
       { type: 'paragraph', content: 'Fala galeraa 👋' },
       { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no  NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
       {type : 'link', content: 'jane.design/doctorcare'}  
    ],
    publishedAt: new Date('2022-06-10 14:01:00')
  },

]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
           return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
           )
         })}
          
        </main>
      </div>
    </div>
  )
}

export default App
