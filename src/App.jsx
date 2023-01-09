import { Header } from './components/Header';
import styles from './App.module.css';
import { Post } from './components/Post'
import './global.css'
import { Sidebar } from './components/Sidebar';

//author: {avatar_url: "", name: "", role:""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/brunoedubems.png',
      name: "Bruno Eduardo",
      role: "CTO @ Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcares'}
    ],
    publishedAt: new Date('2023-01-09 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Mayk José",
      role: "Educator @ Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcares'}
    ],
    publishedAt: new Date('2022-05-04 20:00:00'), 
  },
];


export function App() {
  return (
    <div >
        <Header />

        <div className={styles.wrapper}>
         <Sidebar />
            <main>
      {
      posts.map( post => {
        return (
          <Post 
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
        )
      })
      }

            </main>
        </div>
    </div>
  )
}

