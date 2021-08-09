import React from 'react'
import { API_URL } from '../components/constants'
import { Button } from '@material-ui/core'
// import transport from '../../services/transport'
import { useDispatch, useSelector } from 'react-redux'
import { NEWS_REQUEST_STATUS } from '../store/reducers/news'
import { fetchNews, setNewsList } from '../store/actions/news'

export default function News(props) {
    const { status, list } = useSelector((state) => state.news)
    console.log(list, 'LISSSSSSSSSSSSSSSSST' )
    // const listResults = list.results
    console.log(Object.values(list), 'RESULTSS' )
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())
    const clearData = () => dispatch(setNewsList([]))

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <p className="loading">Loading...</p>
    }

    return (
        <div className="home">
            <div className="container">
                <div className="home__content">
                    <h1>News page</h1>
                    <Button onClick={loadData}>Load Data</Button>
                    <Button onClick={clearData}>Очистить данные</Button>

                    {status !== NEWS_REQUEST_STATUS.ERROR ? (
                        <div className="article">
                            {Object.values(list).map((newsItem) => (
                                <div className="article__block">
                                    <div className="article__item">
                                        <div className="article__container">
                                            <div className="article__left">
                                                <a href={newsItem.url} target="_blank" className="article__img-block">
                                                    <img className="article__img" src={newsItem.multimedia[3].url} alt="promo" />
                                                </a>
                                                <p className="article__section">Category: {newsItem.section}</p>
                                            </div>
                                            <div className="article__right">
                                                <a href={newsItem.url} target="_blank" className="article__title">{newsItem.title}</a>
                                                <p className="article__abstract">{newsItem.abstract}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ color: 'red' }}>ERROR!!!</p>
                    )}
                </div>
            </div>
        </div>
    )
}