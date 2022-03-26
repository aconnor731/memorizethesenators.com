import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import styles from '../styles/Home.module.css';

const listOfSenators = [
  {
    id: uuidv4(),
    name: 'Tammy Baldwin',
    state: 'Wisconsin'
  },
  {
    id: uuidv4(),
    name: 'Ron Johnson', 
    state: 'Wisconsin'
  },
  {
    id: uuidv4(),
    name: 'John Barrasso',
    state: 'Wyoming'
  },
  {
    id: uuidv4(),
    name: 'Cynthia M. Lummis',
    state: 'Wyoming'
  },
  {
    id: uuidv4(),
    name: 'Michael F. Bennett',
    state: 'Colorado'
  },
  {
    id: uuidv4(),
    name: 'John W. Hickenlooper',
    state: 'Colorado'
  },
  {
    id: uuidv4(),
    name: 'Marsha Blackburn',
    state: 'Tennessee'
  },
  {
    id: uuidv4(),
    name: 'Bill Hagerty',
    state: 'Tennessee'
  },
  {
    id: uuidv4(),
    name: 'Richard Blumenthal',
    state: 'Connecticut'
  },
  {
    id: uuidv4(),
    name: 'Christopher Murphy',
    state: 'Connecticut'
  },
  {
    id: uuidv4(),
    name: 'Roy Blunt',
    state: 'Missouri'
  },
  {
    id: uuidv4(),
    name: 'Josh Hawley',
    state: 'Missouri'
  },
  {
    id: uuidv4(),
    name: 'Cory A. Booker',
    state: 'New Jersey'
  },
  {
    id: uuidv4(),
    name: 'Robert Menendez',
    state: 'New Jersey'
  },
  {
    id: uuidv4(),
    name: 'John Boozman',
    state: 'Arkansas'
  },
  {
    id: uuidv4(),
    name: 'Tom Cotton',
    state: 'Arkansas'
  },
  {
    id: uuidv4(),
    name: 'Mike Braun',
    state: 'Indiana'
  },
  {
    id: uuidv4(),
    name: 'Todd Young',
    state: 'Indiana'
  },
  {
    id: uuidv4(),
    name: 'Sherrod Brown',
    state: 'Ohio'
  },
  {
    id: uuidv4(),
    name: 'Rob Portman',
    state: 'Ohio'
  },
  {
    id: uuidv4(),
    name: 'Richard Burr',
    state: 'North Carolina'
  },
  {
    id: uuidv4(),
    name: 'Thom Tillis',
    state: 'North Carolina'
  },
  {
    id: uuidv4(),
    name: 'Maria Cantwell',
    state: 'Washington'
  },
  {
    id: uuidv4(),
    name: 'Patty Murray',
    state: 'Washington'
  },
  {
    id: uuidv4(),
    name: 'Shelley Moore Capito',
    state: 'West Virginia'
  },
  {
    id: uuidv4(),
    name: 'Joe Manchin III',
    state: 'West Virginia'
  },
  {
    id: uuidv4(),
    name: 'Benjamin L. Cardin',
    state: 'Maryland'
  },
  {
    id: uuidv4(),
    name: 'Chris Van Hollen',
    state: 'Maryland'
  },
  {
    id: uuidv4(),
    name: 'Thomas R. Carper',
    state: 'Delaware'
  },
  {
    id: uuidv4(),
    name: 'Christopher A. Coons',
    state: 'Delaware'
  },
  {
    id: uuidv4(),
    name: 'Robert P. Casey Jr.',
    state: 'Pennsylvania'
  },
  {
    id: uuidv4(),
    name: 'Patrick J. Toomey',
    state: 'Pennsylvania'
  },
  {
    id: uuidv4(),
    name: 'Bill Cassidy',
    state: 'Louisiana'
  },
  {
    id: uuidv4(),
    name: 'John Kennedy',
    state: 'Louisiana'
  },
  {
    id: uuidv4(),
    name: 'Susan M. Collins',
    state: 'Maine'
  },
  {
    id: uuidv4(),
    name: 'Angus S. King Jr.',
    state: 'Maine'
  },
  {
    id: uuidv4(),
    name: 'John Cornyn',
    state: 'Texas'
  },
  {
    id: uuidv4(),
    name: 'Ted Cruz',
    state: 'Texas'
  },
  {
    id: uuidv4(),
    name: 'Catherine Cortez Masto',
    state: 'Nevada'
  },
  {
    id: uuidv4(),
    name: 'Jacky Rosen',
    state: 'Nevada'
  },
  {
    id: uuidv4(),
    name: 'Kevin Cramer',
    state: 'North Dakota'
  },
  {
    id: uuidv4(),
    name: 'John Hoeven',
    state: 'North Dakota'
  },
  {
    id: uuidv4(),
    name: 'Mike Crapo',
    state: 'Idaho'
  },
  {
    id: uuidv4(),
    name: 'James E. Risch',
    state: 'Idaho'
  },
  {
    id: uuidv4(),
    name: 'Steve Daines',
    state: 'Montana'
  },
  {
    id: uuidv4(),
    name: 'Jon Tester',
    state: 'Montana'
  },
  {
    id: uuidv4(),
    name: 'Tammy Duckworth',
    state: 'Illinois'
  },
  {
    id: uuidv4(),
    name: 'Richard J. Durbin',
    state: 'Illinois'
  },
  {
    id: uuidv4(),
    name: 'Joni Ernst',
    state: 'Iowa'
  },
  {
    id: uuidv4(),
    name: 'Chuck Grassley',
    state: 'Iowa'
  },
  {
    id: uuidv4(),
    name: 'Dianne Feinstein',
    state: 'California'
  },
  {
    id: uuidv4(),
    name: 'Alex Padilla',
    state: 'California'
  },
  {
    id: uuidv4(),
    name: 'Deb Fischer',
    state: 'Nebraska'
  },
  {
    id: uuidv4(),
    name: 'Ben Sasse',
    state: 'Nebraska'
  },
  {
    id: uuidv4(),
    name: 'Kirsten E. Gillibrand',
    state: 'New York'
  },
  {
    id: uuidv4(),
    name: 'Charles E. Schumer',
    state: 'New York'
  },
  {
    id: uuidv4(),
    name: 'Lindsey Graham',
    state: 'South Carolina'
  },
  {
    id: uuidv4(),
    name: 'Tim Scott',
    state: 'South Carolina'
  },
  {
    id: uuidv4(),
    name: 'Margaret Wood Hassan',
    state: 'New Hampshire'
  },
  {
    id: uuidv4(),
    name: 'Jeanne Shaheen',
    state: 'New Hampshire'
  },
  {
    id: uuidv4(),
    name: 'Martin Heinrich',
    state: 'New Mexico'
  },
  {
    id: uuidv4(),
    name: 'Ben Ray Luján',
    state: 'New Mexico'
  },
  {
    id: uuidv4(),
    name: 'Mazie K. Hirono',
    state: 'Hawaii'
  },
  {
    id: uuidv4(),
    name: 'Brian Schatz',
    state: 'Hawaii'
  },
  {
    id: uuidv4(),
    name: 'Cindy Hyde-Smith',
    state: 'Mississippi'
  },
  {
    id: uuidv4(),
    name: 'Roger F. Wicker',
    state: 'Mississippi'
  },
  {
    id: uuidv4(),
    name: 'James M. Inhofe',
    state: 'Oklahoma'
  },
  {
    id: uuidv4(),
    name: 'James Lankford',
    state: 'Oklahoma'
  },
  {
    id: uuidv4(),
    name: 'Tim Kaine',
    state: 'Virginia'
  },
  {
    id: uuidv4(),
    name: 'Mark R. Warner',
    state: 'Virginia'
  },
  {
    id: uuidv4(),
    name: 'Mark Kelly',
    state: 'Arizona'
  },
  {
    id: uuidv4(),
    name: 'Kyrsten Sinema',
    state: 'Arizona'
  },
  {
    id: uuidv4(),
    name: 'Amy Klobuchar',
    state: 'Minnesota'
  },
  {
    id: uuidv4(),
    name: 'Tina Smith',
    state: 'Minnesota'
  },
  {
    id: uuidv4(),
    name: 'Patrick J. Leahy',
    state: 'Vermont'
  },
  {
    id: uuidv4(),
    name: 'Bernard Sanders',
    state: 'Vermont'
  },
  {
    id: uuidv4(),
    name: 'Mike Lee',
    state: 'Utah'
  },
  {
    id: uuidv4(),
    name: 'Mitt Romney',
    state: 'Utah'
  },
  {
    id: uuidv4(),
    name: 'Edward J. Markey',
    state: 'Massachusetts'
  },
  {
    id: uuidv4(),
    name: 'Elizabeth Warren',
    state: 'Massachusetts'
  },
  {
    id: uuidv4(),
    name: 'Roger Marshall',
    state: 'Kansas'
  },
  {
    id: uuidv4(),
    name: 'Jerry Moran',
    state: 'Kansas'
  },
  {
    id: uuidv4(),
    name: 'Mitch McConnell',
    state: 'Kentucky'
  },
  {
    id: uuidv4(),
    name: 'Rand Paul',
    state: 'Kentucky'
  },
  {
    id: uuidv4(),
    name: 'Jeff Merkley',
    state: 'Oregon'
  },
  {
    id: uuidv4(),
    name: 'Ron Wyden',
    state: 'Oregon'
  },
  {
    id: uuidv4(),
    name: 'Lisa Murkowski',
    state: 'Alaska'
  },
  {
    id: uuidv4(),
    name: 'Dan Sullivan',
    state: 'Alaska'
  },
  {
    id: uuidv4(),
    name: 'Jon Ossoff',
    state: 'Georgia'
  },
  {
    id: uuidv4(),
    name: 'Raphael G. Warnock',
    state: 'Georgia'
  },
  {
    id: uuidv4(),
    name: 'Gary C. Peters',
    state: 'Michigan'
  },
  {
    id: uuidv4(),
    name: 'Debbie Stabenow',
    state: 'Michigan'
  },
  {
    id: uuidv4(),
    name: 'Jack Reed',
    state: 'Rhode Island'
  },
  {
    id: uuidv4(),
    name: 'Sheldon Whitehouse',
    state: 'Rhode Island'
  },
  {
    id: uuidv4(),
    name: 'Mike Rounds',
    state: 'South Dakota'
  },
  {
    id: uuidv4(),
    name: 'John Thune',
    state: 'South Dakota'
  },
  {
    id: uuidv4(),
    name: 'Marco Rubio',
    state: 'Florida'
  },
  {
    id: uuidv4(),
    name: 'Rick Scott',
    state: 'Florida'
  },
  {
    id: uuidv4(),
    name: 'Richard C. Shelby',
    state: 'Alabama'
  },
  {
    id: uuidv4(),
    name: 'Tommy Tuberville',
    state: 'Alabama'
  }
]

const BasicList = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {listOfSenators.map((senator) =>
            <ListItem disablePadding key={senator.id}>
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
        <Typography><q>Like sifting sand through a screen, we sift people. If you had been unable to control your impulses, like an animal, we could not let you live. You inherit too much power.</q><i>- Reverend Mother Mohiam, Paul of Dune</i></Typography>
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
