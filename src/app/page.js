import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
         <h1>Home Page</h1>
         <HelloWorld title="Hello World!"/> 
      </main> 
    </div>
  );
}

const HelloWorld = (props) => { 
  return (  
    <div>
      <h1>First Component!</h1>
      <h2>{props.title}</h2>
    </div>
  )
}
