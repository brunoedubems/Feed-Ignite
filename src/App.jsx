import { Header } from './components/Header';

import styles from './App.module.css';
import './App.css';

function App() {
  return (
    <div >
        <Header />

        <div className={styles.wrapper}>
          <aside>
            sidebar
          </aside>
          <main>
            <Post
            author="Bruno Eduardo "
            content="Esse é um post de teste"
            />
            <Post
            author="Eduardo silva "
            content="Esse é um post de teste"
            />

          </main>
        </div>
    </div>
  )
}

export default App
