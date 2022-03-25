import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import styles from '../styles/Home.module.css';
import Senator from './Senator';

const listOfSenators: Senator[] = [
  new Senator('Tammy Baldwin', 'Wisconsin'),
  new Senator('Ron Johnson', 'Wisconsin'),
  new Senator('John Barrasso', 'Wyoming'),
  new Senator('Cynthia M. Lummis', 'Wyoming'),
  new Senator('Michael F. Bennett', 'Colorado'),
  new Senator('John W. Hickenlooper', 'Colorado'),
  new Senator('Marsha Blackburn', 'Tennessee'),
  new Senator('Bill Hagerty', 'Tennessee'),
  new Senator('Richard Blumenthal', 'Connecticut'),
  new Senator('Christopher Murphy', 'Connecticut'),
  new Senator('Roy Blunt', 'Missouri'),
  new Senator('Josh Hawley', 'Missouri'),
  new Senator('Cory A. Booker', 'New Jersey'),
  new Senator('Robert Menendez', 'New Jersey'),
  new Senator('John Boozman', 'Arkansas'),
  new Senator('Tom Cotton', 'Arkansas'),
  new Senator('Mike Braun', 'Indiana'),
  new Senator('Todd Young', 'Indiana'),
  new Senator('Sherrod Brown', 'Ohio'),
  new Senator('Rob Portman', 'Ohio'),
  new Senator('Richard Burr', 'North Carolina'),
  new Senator('Thom Tillis', 'North Carolina'),
  new Senator('Maria Cantwell', 'Washington'),
  new Senator('Patty Murray', 'Washington'),
  new Senator('Shelley Moore Capito', 'West Virginia'),
  new Senator('Joe Manchin III', 'West Virginia'),
  new Senator('Benjamin L. Cardin', 'Maryland'),
  new Senator('Chris Van Hollen', 'Maryland'),
  new Senator('Thomas R. Carper', 'Delaware'),
  new Senator('Christopher A. Coons', 'Delaware'),
  new Senator('Robert P. Casey Jr.', 'Pennsylvania'),
  new Senator('Patrick J. Toomey', 'Pennsylvania'),
  new Senator('Bill Cassidy', 'Louisiana'),
  new Senator('John Kennedy', 'Louisiana'),
  new Senator('Susan M. Collins', 'Maine'),
  new Senator('Angus S. King Jr.', 'Maine'),
  new Senator('John Cornyn', 'Texas'),
  new Senator('Ted Cruz', 'Texas'),
  new Senator('Catherine Cortez Masto', 'Nevada'),
  new Senator('Jacky Rosen', 'Nevada'),
  new Senator('Kevin Cramer', 'North Dakota'),
  new Senator('John Hoeven', 'North Dakota'),
  new Senator('Mike Crapo', 'Idaho'),
  new Senator('James E. Risch', 'Idaho'),
  new Senator('Steve Daines', 'Montana'),
  new Senator('Jon Tester', 'Montana'),
  new Senator('Tammy Duckworth', 'Illinois'),
  new Senator('Richard J. Durbin', 'Illinois'),
  new Senator('Joni Ernst', 'Iowa'),
  new Senator('Chuck Grassley', 'Iowa'),
  new Senator('Dianne Feinstein', 'California'),
  new Senator('Alex Padilla', 'California'),
  new Senator('Deb Fischer', 'Nebraska'),
  new Senator('Ben Sasse', 'Nebraska'),
  new Senator('Kirsten E. Gillibrand', 'New York'),
  new Senator('Charles E. Schumer', 'New York'),
  new Senator('Lindsey Graham', 'South Carolina'),
  new Senator('Tim Scott', 'South Carolina'),
  new Senator('Margaret Wood Hassan', 'New Hampshire'),
  new Senator('Jeanne Shaheen', 'New Hampshire'),
  new Senator('Martin Heinrich', 'New Mexico'),
  new Senator('Ben Ray Luján', 'New Mexico'),
  new Senator('Mazie K. Hirono', 'Hawaii'),
  new Senator('Brian Schatz', 'Hawaii'),
  new Senator('Cindy Hyde-Smith', 'Mississippi'),
  new Senator('Roger F. Wicker', 'Mississippi'),
  new Senator('James M. Inhofe', 'Oklahoma'),
  new Senator('James Lankford', 'Oklahoma'),
  new Senator('Tim Kaine', 'Virginia'),
  new Senator('Mark R. Warner', 'Virginia'),
  new Senator('Mark Kelly', 'Arizona'),
  new Senator('Kyrsten Sinema', 'Arizona'),
  new Senator('Amy Klobuchar', 'Minnesota'),
  new Senator('Tina Smith', 'Minnesota'),
  new Senator('Patrick J. Leahy', 'Vermont'),
  new Senator('Bernard Sanders', 'Vermont'),
  new Senator('Mike Lee', 'Utah'),
  new Senator('Mitt Romney', 'Utah'),
  new Senator('Edward J. Markey', 'Massachusetts'),
  new Senator('Elizabeth Warren', 'Massachusetts'),
  new Senator('Roger Marshall', 'Kansas'),
  new Senator('Jerry Moran', 'Kansas'),
  new Senator('Mitch McConnell', 'Kentucky'),
  new Senator('Rand Paul', 'Kentucky'),
  new Senator('Jeff Merkley', 'Oregon'),
  new Senator('Ron Wyden', 'Oregon'),
  new Senator('Lisa Murkowski', 'Alaska'),
  new Senator('Dan Sullivan', 'Alaska'),
  new Senator('Jon Ossoff', 'Georgia'),
  new Senator('Raphael G. Warnock', 'Georgia'),
  new Senator('Gary C. Peters', 'Michigan'),
  new Senator('Debbie Stabenow', 'Michigan'),
  new Senator('Jack Reed', 'Rhode Island'),
  new Senator('Sheldon Whitehouse', 'Rhode Island'),
  new Senator('Mike Rounds', 'South Dakota'),
  new Senator('John Thune', 'South Dakota'),
  new Senator('Marco Rubio', 'Florida'),
  new Senator('Rick Scott', 'Florida'),
  new Senator('Richard C. Shelby', 'Alabama'),
  new Senator('Tommy Tuberville', 'Alabama')
]

const BasicList = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {listOfSenators.map((senator: Senator) =>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary={`${senator.name} - ${senator.state}`} />
              </ListItemButton>
            </ListItem>)}
        </List>
      </nav>
    </Box>
  );
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography>"Like sifting sand through a screen, we sift people. If you had been unable to control your impulses, like an animal, we could not let you live. You inherit too much power." <i>- Reverend Mother Mohiam, Paul of Dune</i></Typography>
        <br />
        <br />
        <br />
        <BasicList />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
