import { useRouter } from 'next/router';
import React, { useState } from 'react';
import NavBar from '../../../components/navBarMovies';
import axios from 'axios';
import { useEffect } from 'react';
import { Image } from 'antd';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import { Avatar } from '@material-ui/core';
import { MDBIcon } from 'mdb-react-ui-kit';
import { DUMMY_EVENTS } from '../../../Json/dummy-data';
import Link from 'next/link';

export default function Movie() {
  const router = useRouter();
  const r = router.query.movie;
  console.log('Route => ', router.query);
  let path ="";
  let BackgroundPath ="";
  const movies = DUMMY_EVENTS.filter((data) => data.id.toString() === r);
  if(movies[0])
  {

    path = `https://image.tmdb.org/t/p/original/${movies[0].movieDetails.poster_path}`;
    BackgroundPath = `https://image.tmdb.org/t/p/original/${movies[0].movieDetails.backdrop_path}`;
  }else{
    path = '';
    BackgroundPath = "";
  }
   
  let styles = {
    backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.684), rgba(0, 0, 0, 0.684)),url(${BackgroundPath})`,
    backgroundSize: 'cover',
    marginLeft: '-11px',
    width: '101.5%',
    height: '70vh',
  };
  return (
    <div className='image_background'>
      <NavBar />
      {movies[0] ? (
        <div key={movies[0].movieDetails.id} className='container'>
          <div style={styles} className='row movie_container'>
            <div className='col-sm-4 center-custom'>
              <Image className='image_container_movie' preview={false} width={270} alt='example' src={path} />
            </div>
            <div className='col-sm-8 center_custom'>
              <p className='val_title'>
                {movies[0].movieDetails.title}
                <span className='val_title_year'>(2021)</span>
              </p>
              <ul key={movies[0].movieDetails.id} className='movie_genres'>
                {movies[0].movieDetails.genres ? (
                  movies[0].movieDetails.genres.map((gen) => {
                    return (
                      <li key={movies[0].movieDetails.id} className='genre_list'>
                        {gen.name}
                      </li>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </ul>
              <p className='val_date'>
                {movies[0].movieDetails.release_date} &shy;({movies[0].movieDetails.original_language}) &shy; &#124;
              </p>
              <p className='val_runtime'>&#124; {movies[0].movieDetails.runtime} min</p>
              <div className='rating_image_container'>
                <p className='rating_value'>
                  {movies[0].movieDetails.vote_average}
                  <Image className='single_movie_rating' src='/star (1).png' preview={false} width={28} alt='ratings' />
                </p>
              </div>
              <Link href={`/events/seatBooking/${movies[0].movieDetails.id}`} passHref>
              <button className='btnCustom' title='Book a seat'>Book a seat</button>
              </Link>
              <p className='tagline h5'>{movies[0].movieDetails.tagline}</p>
              <div className='overview h5'>{movies[0].movieDetails.overview}</div>
              <div className='movie_details_status'>
                <ul className='movie_details_status_ul'>
                  <li>
                    <b>Status :</b> &nbsp;{movies[0].movieDetails.status}
                  </li>
                  <li>
                    <b>Original-Language : </b>&nbsp;English
                  </li>
                  <li>
                    <b>Budget :</b> &nbsp;${movies[0].movieDetails.budget}
                  </li>
                  <li>
                    <b>Revenue : </b>&nbsp;${movies[0].movieDetails.revenue}
                  </li>
                </ul>
              </div>
              <div className='second_container'></div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div style={{ padding: 20 }} className='row container card_main'>
        {movies[0] ? (
          movies[0].movieCastCrew.map((val) => {
            let profile_path = `https://image.tmdb.org/t/p/original/${val.profile_path}`;
            if (val.profile_path === null) {
              return <div></div>
            } else
              return (
                <div key={val.id} className='col-sm-4 col-lg-2 col-md-3 '>
                  <div style={{ color: '#ffff', padding: 20 }}>
                    <MDBCard className='mdb_card_main' style={{ width: '11rem' }}>
                      <MDBCardImage className='mdb_card_image' src={profile_path} alt='...' position='top' />
                      <MDBCardBody>
                        <MDBCardText className='original_name'>{val.original_name}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </div>
              );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
