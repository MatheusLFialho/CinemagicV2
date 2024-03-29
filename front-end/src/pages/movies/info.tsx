/* eslint-disable react/jsx-key */
import { movieApi, sessionApi } from '../../lib/axios';
import Footer from '../components/footer';
import NavbarUser from '../components/navBarUser';
import moment from 'moment';
import ReturnButton from '../components/returnButton';

interface MovieProps {
    movie: {
        map: any;
        id: string,
        title: string,
        releaseDate: string,
        lengthInMinutes: number,
        coverUrl: string,
        synopsis: string,
        parentalRatingType: string,
        dubbedVersion: Boolean,
        subtitledVersion: Boolean,
        originalLanguage: string,
    },
    movieFull: {
        map: any;
        id: string,
        genderId: string,
        movieId: string,
        gender: {
            id: string,
            name: string,
        }
    },
    session:{
        map: any;
        id: string,
        id_filme: string,
        id_cinema: string,
        date: string,
        start_time: string,
        capacity: number,
    }
}

export const getServerSideProps = async (context: { query: { id: any; }; }) => {
    const { id } = context.query;
    const response = await movieApi.get("movie/info", {
        headers: {
            id: id,
        }
    })
    const response2 = await sessionApi.get("session/info", {
        headers: {
            id: id,
        }
    })
    return {
        props: {
            movie: response.data.movie,
            movieFull: response.data.movieFull,
            session: response2.data.session,
        }
    }
    
}

export default function Index(props: MovieProps) {
    return (
        <div className="main-container">
            <NavbarUser></NavbarUser>
            <section className="banner-container">
            </section>
            <main className="info-movie-container">
                <ReturnButton></ReturnButton>
                <h2 className="movies-section-title info-title">{props.movie.title.toUpperCase()}</h2>
                {
                    <div key={props.movie.id} className="movie-info-main">
                        <div className="movie-info-banner"></div>
                        <img className="movie-info-img" src={props.movie.coverUrl} alt="Capa do filme" />
                        <div className="movie-info">
                            <div className='movie-info-desc synopsis'>
                                <h3 className="movie-synopsis">Sinopse</h3>
                                <p>{props.movie.synopsis}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Dublado</h3>
                                <p>{props.movie.dubbedVersion == true ? 'Sim' : props.movie.dubbedVersion == false ? 'Não' : props.movie.dubbedVersion == null}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Legendado</h3>
                                <p>{props.movie.subtitledVersion == true ? 'Sim' : props.movie.subtitledVersion == false ? 'Não' : props.movie.subtitledVersion == null}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Idioma Original</h3>
                                <p>{props.movie.originalLanguage}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Lançamento</h3>
                                <p>{moment(props.movie.releaseDate).format('DD/MM/YYYY')}</p>
                            </div>
                            <div className='movie-info-desc minusInfo'>
                                <h3>Duração</h3>
                                <p>{props.movie.lengthInMinutes} minutos</p>
                            </div>
                            <div className='movie-info-desc ratingInfo'>
                                <h3>Classificação Indicativa</h3>
                                <img className="movie-rating-img" src={
                                    props.movie.parentalRatingType == 'L' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184033046806548/665px-DJCTQ_-_L.png"
                                        : props.movie.parentalRatingType == '10' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184251091877908/1024px-DJCTQ_-_10.png"
                                            : props.movie.parentalRatingType == '12' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184304405688321/1024px-DJCTQ_-_12.png"
                                                : props.movie.parentalRatingType == '14' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184902618304582/1024px-DJCTQ_-_14.png"
                                                    : props.movie.parentalRatingType == '16' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049184981915807884/1024px-DJCTQ_-_16.png"
                                                        : props.movie.parentalRatingType == '18' ? "https://cdn.discordapp.com/attachments/421737332073299978/1049185128921964574/400px-DJCTQ_-_18.png"
                                                            : props.movie.parentalRatingType
                                } />
                            </div>
                        </div>
                    </div>
                }
                <div className='movie-genders-container'>
                    <div className='movie-info-desc gender'>
                        <h3>Gêneros</h3>
                    </div>
                    {
                        props.movieFull.map((movieFull: any) => (
                            <div className='movie-info-desc genderInfo'>
                                <h3 key={movieFull.id}>{movieFull.gender.name}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className="data-table-title">
                    <div className="main-text-title">
                        <h2 className="movies-section-title">Sessões</h2>
                    </div>
                </div>
                <div className="list-out-main">
                    <div className="list-out-data">
                        <div className="data-table">
                <table className="users-table-list">
                                <tbody>
                                    <tr>
                                        <th>Cinema</th>
                                        <th>Data</th>
                                        <th>Horário</th>
                                        <th>Ingressos</th>
                                        <th>Ação</th>
                                    </tr>
                                    {
                                        props.session != null ? props.session.map((session: any) => (
                                            <tr key={session.id}>
                                                <td>Cinemagic SP</td>
                                                <td>12/02/2023</td>
                                                <td>{session.start_time}</td>
                                                <td>{session.capacity}</td>
                                                <td>
                                                <button className="product-buy-btn-2">Comprar</button>    
                                                </td>
                                            </tr>
                                        )) : props.session == null
                                    }
                                </tbody>
                            </table>
                            </div>
                            </div>
                            </div>
            </main>
            <Footer></Footer>
        </div>
    )

}


