import React from 'react'
import Card from './card'

const articleList = props => props.articles.map((article, index) => (
    <Card
    key={index}
    title={article.title}
    imageUrl={article.image}
    linkUrl={`${STRAPI_API}/articles/${article.id}`}
    >

    </Card>
))
