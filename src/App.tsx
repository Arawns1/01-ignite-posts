import Header from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import Post, { PostType } from "./components/Post";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/arawns1.png",
      name: "Gabriel Damico",
      role: "Programador @ Neki",
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa."},
      {type: "paragraph", content: "É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
      {type: "paragraph", content: "#novoprojeto #nlw #rocketseat"}
    ],
    publishedAt: new Date("2023-11-28 10:50:00"),
  }
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
