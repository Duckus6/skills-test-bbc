import axios from 'axios';


/**
 * Fetches data from server
 */
export default class ArticleAPI{

    constructor(){
        //Initialise API credentials
    }


     getArticles(){
        return new Promise((resolve, reject)=>{
            axios.get("data/").then((response)=>{
                resolve(response.data);
            }).catch(
                err =>{
                    //TODO Handle specific HTTP codes here
                    reject(err)
                });
        });
    }
    getArticle(articleId){
        return new Promise((resolve,reject)=>{
            axios.get(`data/${articleId}`).then((response)=>{
                console.log(response.data);
                resolve(response.data);
            }).catch(err=>{
                //TODO Handle specific HTTP codes here
                reject(err)});
        });
    }

}

