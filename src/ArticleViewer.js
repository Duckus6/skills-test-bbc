import React, {useState} from 'react';
import './App.css';
import ArticleAPI from './ArticleAPI';
import Article from './Article';

function ArticleViewer() {
    const API = new ArticleAPI();
    const [articles,setArticles] = useState([]);
    React.useEffect(()=>{
        API.getArticles().then(
            articles=>{
                setArticles(articles);
                console.debug(`${articles.length} articles saved to state`)
            }
        ).catch(
            err=>console.log(err)
        );
    },[]);

    const [articleIndex,setArticleIndex] = useState(0);


    return (
        <div className="ArticleViewer">
            {articles &&<p>We have {articles.length} Articles</p>}
            {((articles) && (articles.length>0 )) && <Article articleID={articles[articleIndex]}/>}
        </div>
    );
}

export default ArticleViewer;
