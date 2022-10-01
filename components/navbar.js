import '../styles/Home.module.css';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const useStyles = makeStyles((theme) =>
  createStyles({
    small: {
      float: 'left',
      margin: '0% 1%',
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

export default function App() {
  // const query: any = useSelector((state: any) => state.query.query);
  const classes = useStyles();
  const [opacity, setopacity] = useState(false);

  const Changeopacity = () => {
    setopacity(!opacity);
  };

  function NavList() {
    return (
      <nav className={styles.navigaiton_nav}>
        <ul className={styles.navigation_list}>
          <Link href='/events' passHref>
            <li className={styles.navigation_item}>
              <div className='navigation_link'>
                <p className='h1'>All Movies</p>
              </div>
            </li>
          </Link>
          <li className={styles.navigation_item}>
            <div className='navigation_link'>
              <p className='h1'>TV Shows</p>
            </div>
          </li>
          <li className={styles.navigation_item}>
            <div className='navigation_link'>
              <p className='h1'>People</p>
            </div>
          </li>
          <li className={styles.navigation_item}>
            <div className='navigation_link'>
              <p className='h1'>Top Rated Movies</p>
            </div>
          </li>
          <li className={styles.navigation_item}>
            <div className='navigation_link'>
              <p className='h1'>Comming Soon</p>
            </div>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className={styles.homepage_wallpaper}>
      <div className={styles.navigation}>
        <input
          onChange={() => Changeopacity()}
          type='checkbox'
          className={styles.navigation_checkbox}
          id='nav-toggle'
        />
        <label htmlFor='nav-toggle' className={styles.navigation_button}>
          <Image src='/menu.png' alt='Picture of the author' width={40} height={40} />
        </label>
        <div className={styles.navigation_background}>&nbsp;</div>

        {opacity === false ? <div></div> : NavList()}
      </div>
      <div className={styles.homepage_icon}>
        <Image src='/homepage.png' alt='Picture of the author' width={50} height={50} />
      </div>
      <div className={styles.homepage_text}>
        <p className='h5'>HELLO,</p>
        <h1 className='display-4'>
          <span className={styles.homepage_all}>
            WELCOME TO <span className={styles.homepage_movie}>MOVIE </span>LANE
          </span>
        </h1>
        <p className='h6'>Watch movies in HD & 4K with best audio and subtitles.</p>
      </div>
      <p className='h6 ratings'>Top rated movies from</p>

      <div className={styles.root}>
        <Avatar
          className={classes.small}
          alt='Remy Sharp'
          src='https://ia.media-imdb.com/images/M/MV5BODc4MTA3NjkzNl5BMl5BcG5nXkFtZTgwMDg0MzQ2OTE@._V1_.png'
        />
        <Avatar
          className={classes.small}
          alt='Travis Howard'
          src='https://www.adweek.com/wp-content/uploads/2018/03/rotten-tomatoes-blackred-CONTENT-2018.png'
        />
      </div>
      <footer className={styles.footer}>
        <p className='h6'>&#xa9;2021 design &#10072; All rights reserved</p>
        <div className={styles.footer_line}></div>
      </footer>
    </div>
  );
}
