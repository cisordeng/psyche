import Resource from '../lib/resource'
import Service from './service'

class ArticleService extends Service {
	constructor() {
		super();
    }

    async getArticles() {
        var data = await Resource.get({
            service: 'nature',
            resource: 'article.articles',
            data: {}
        })
        return data.articles;
    }

    async getArticle(id) {
        var data = await Resource.get({
            service: 'nature',
            resource: 'article.article',
            data: {
                id: id,
            }
        })
        return data;
    }

    async newArticle(title, content) {
        var data = await Resource.put({
            service: 'nature',
            resource: 'article.article',
            data: {
                title: title,
                content: content,
            }
        })
        return data;
    }

    async updateArticle(id, title, content) {
        var data = await Resource.post({
            service: 'nature',
            resource: 'article.article',
            data: {
                id: id,
                title: title,
                content: content,
            }
        })
        return data;
    }
}

let service = new ArticleService();

export default service;