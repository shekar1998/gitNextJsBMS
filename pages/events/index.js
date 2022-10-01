import React, { useState } from 'react';
import { DUMMY_EVENTS } from '../../Json/dummy-data';
import { Image } from 'antd';
import { Card, Avatar } from 'antd';
import NavBarMovies from '../../components/navBarMovies';
import Link from 'next/link';

export default function FullWidthGrid() {
  const [id, setid] = useState();

  const movies = DUMMY_EVENTS;

  const RotateAll = (id) => {
    setid(id);
  };

  return (
    <div className='image_background'>
      <NavBarMovies />
      <div className='row container'>
        {movies ? (
          movies.map((val) => {
            let styles2 = {
              backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.384), rgba(0, 0, 0, 0.384)),url(${val.Poster})`,
              width: '100%',
              height: '100vh',
            };
            let path = `https://image.tmdb.org/t/p/original/${val.poster_path}`;
            let BackgroundPath = `https://image.tmdb.org/t/p/original/${val.backdrop_path}`;
            let rating = val.vote_average * 10;
            let circleColor;
            if (rating <= 25) {
              circleColor = 'red';
            } else if (rating > 25 && rating <= 50) {
              circleColor = 'yellow';
            } else if (rating > 50 && rating <= 80) {
              circleColor = 'blue';
            } else circleColor = 'green';

            return (
              <div key={val.id} className='col-sm-4 col-lg-2 col-md-3'>
                <div className='perspective'>
                  <div
                    className={
                      id === val.id
                        ? 'card-side card_front_side-default card_front_side'
                        : 'card-side card_front_side-default'
                    }
                  >
                    <div>
                      <Link href={`/events/movie/${val.id}`} passHref>
                        <Card
                          size='small'
                          className='card-image-size'
                          cover={<Image className='image_container' preview={false} alt='example' src={path} />}
                        ></Card>
                      </Link>
                    </div>
                    <div onClick={() => RotateAll(val.id)} className='info-icon'>
                      <Image src='/info (2).png' alt='Image-List_Icon' preview={false} width={30} height={30} />
                    </div>
                  </div>
                  <div
                    className={
                      id === val.id
                        ? 'card-side card_back_side-default card_back_side'
                        : 'card-side card_back_side-default'
                    }
                  >
                    <div className='back-side-design'>
                      <Image
                        className='image_container-back-side'
                        preview={false}
                        alt='example'
                        src={BackgroundPath}
                        width={195}
                        height={120}
                      />
                    </div>
                    <div className='back_side_text'>
                      <ul className='back_side_text_ul'>
                        <li>
                          Views: {val.popularity}{' '}
                          <Image src='/increase.png' alt='Image-List_Icon' preview={false} width={18} height={18} />
                        </li>
                        <li>
                          Date: {val.release_date}{' '}
                          <Image src='/calendar.png' alt='Image-List_Icon' preview={false} width={18} height={18} />
                        </li>
                        <li>
                          Ratings: {val.vote_average}{' '}
                          <Image src='/star (1).png' alt='Image-List_Icon' preview={false} width={18} height={18} />
                        </li>
                        <li>
                          Vote Count: {val.vote_count}{' '}
                          <Image src='/countdown.png' alt='Image-List_Icon' preview={false} width={18} height={18} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#000000'
          fillOpacity='0.88'
          d='M0,160L26.7,165.3C53.3,171,107,181,160,208C213.3,235,267,277,320,261.3C373.3,245,427,171,480,154.7C533.3,139,587,181,640,208C693.3,235,747,245,800,240C853.3,235,907,213,960,192C1013.3,171,1067,149,1120,138.7C1173.3,128,1227,128,1280,138.7C1333.3,149,1387,171,1413,181.3L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
        ></path>

        <path
          fill='#e03333'
          fillOpacity='0.88'
          d='M0,256L26.7,224C53.3,192,107,128,160,117.3C213.3,107,267,149,320,181.3C373.3,213,427,235,480,218.7C533.3,203,587,149,640,149.3C693.3,149,747,203,800,229.3C853.3,256,907,256,960,229.3C1013.3,203,1067,149,1120,144C1173.3,139,1227,181,1280,186.7C1333.3,192,1387,160,1413,144L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
}

// if (opacity === false) {
//   console.log('Default');
//   className1 = 'card-side card_front_side-default card_front_side';
//   className2 = 'card-side card_back_side-default card_back_side';
// } else {
//   console.log('Rotate');
//   className1 = 'card-side card_front_side-default';
//   className2 = 'card-side card_back_side-default';
// }
