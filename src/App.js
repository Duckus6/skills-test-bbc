import React from 'react';
import styles from "./App.module.css";
import ArticleViewer from "./ArticleViewer";

function App() {
    return (
        <div className={styles.App}>
            <ArticleViewer/>
        </div>

    );
}

export default App;
