import React, {useState} from 'react';
import './App.css';
import ArticleAPI from './ArticleAPI';
import Article from './Article';
import ControlBar from './ControlBar';

function ArticleViewer() {
    const API = new ArticleAPI();

    const [articleIndex,setArticleIndex] = useState(0);
    const [articles,setArticles] = useState([]);
    const [read,setRead] = useState([]);

    React.useEffect(()=>{
        API.getArticles().then(
            articles=>{
                setArticles(articles);
                if (articles.length > 0){
                    setArticleIndex(0);
                }
                console.debug(`${articles.length} articles saved to state`)
            }
        ).catch(
            err=>console.log(err)
        );
    },[]);

    React.useEffect(()=>{
        const newRead = read;
        newRead[articleIndex]= true;
        setRead(newRead);
    },[articleIndex]);

    return (
        <div className="ArticleViewer">
            {articles &&<p>We have {articles.length} Articles</p>}
            {((articles) && (articles.length>0 )) && <Article articleID={articles[articleIndex]}/>}
            <ControlBar updateIndex={setArticleIndex} index={articleIndex} total={articles.length}/>
        </div>
    );
}

export default ArticleViewer;
