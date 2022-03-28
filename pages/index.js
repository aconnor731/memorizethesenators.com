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

import useSWR from 'swr'
import Person from '../components/Person'

const listOfSenators = [
  {
    id: uuidv4(),
    name: 'Tammy Baldwin',
    party: 'D',
    state: 'Wisconsin'
  },
  {
    id: uuidv4(),
    name: 'Ron Johnson', 
    party: 'R',
    state: 'Wisconsin'
  },
  {
    id: uuidv4(),
    name: 'John Barrasso',
    party: 'R',
    state: 'Wyoming'
  },
  {
    id: uuidv4(),
    name: 'Cynthia M. Lummis',
    party: 'R',
    state: 'Wyoming'
  },
  {
    id: uuidv4(),
    name: 'Michael F. Bennett',
    party: 'D',
    state: 'Colorado'
  },
  {
    id: uuidv4(),
    name: 'John W. Hickenlooper',
    party: 'D',
    state: 'Colorado'
  },
  {
    id: uuidv4(),
    name: 'Marsha Blackburn',
    party: 'R',
    state: 'Tennessee'
  },
  {
    id: uuidv4(),
    name: 'Bill Hagerty',
    party: 'R',
    state: 'Tennessee'
  },
  {
    id: uuidv4(),
    name: 'Richard Blumenthal',
    party: 'D',
    state: 'Connecticut'
  },
  {
    id: uuidv4(),
    name: 'Christopher Murphy',
    party: 'D',
    state: 'Connecticut'
  },
  {
    id: uuidv4(),
    name: 'Roy Blunt',
    party: 'R',
    state: 'Missouri'
  },
  {
    id: uuidv4(),
    name: 'Josh Hawley',
    party: 'R',
    state: 'Missouri'
  },
  {
    id: uuidv4(),
    name: 'Cory A. Booker',
    party: 'D',
    state: 'New Jersey'
  },
  {
    id: uuidv4(),
    name: 'Robert Menendez',
    party: 'D',
    state: 'New Jersey'
  },
  {
    id: uuidv4(),
    name: 'John Boozman',
    party: 'R',
    state: 'Arkansas'
  },
  {
    id: uuidv4(),
    name: 'Tom Cotton',
    party: 'R',
    state: 'Arkansas'
  },
  {
    id: uuidv4(),
    name: 'Mike Braun',
    party: 'R',
    state: 'Indiana'
  },
  {
    id: uuidv4(),
    name: 'Todd Young',
    party: 'R',
    state: 'Indiana'
  },
  {
    id: uuidv4(),
    name: 'Sherrod Brown',
    party: 'D',
    state: 'Ohio'
  },
  {
    id: uuidv4(),
    name: 'Rob Portman',
    party: 'R',
    state: 'Ohio'
  },
  {
    id: uuidv4(),
    name: 'Richard Burr',
    party: 'R',
    state: 'North Carolina'
  },
  {
    id: uuidv4(),
    name: 'Thom Tillis',
    party: 'R',
    state: 'North Carolina'
  },
  {
    id: uuidv4(),
    name: 'Maria Cantwell',
    party: 'D',
    state: 'Washington'
  },
  {
    id: uuidv4(),
    name: 'Patty Murray',
    party: 'D',
    state: 'Washington'
  },
  {
    id: uuidv4(),
    name: 'Shelley Moore Capito',
    party: 'R',
    state: 'West Virginia'
  },
  {
    id: uuidv4(),
    name: 'Joe Manchin III',
    party: 'D',
    state: 'West Virginia'
  },
  {
    id: uuidv4(),
    name: 'Benjamin L. Cardin',
    party: 'D',
    state: 'Maryland'
  },
  {
    id: uuidv4(),
    name: 'Chris Van Hollen',
    party: 'D',
    state: 'Maryland'
  },
  {
    id: uuidv4(),
    name: 'Thomas R. Carper',
    party: 'D',
    state: 'Delaware'
  },
  {
    id: uuidv4(),
    name: 'Christopher A. Coons',
    party: 'D',
    state: 'Delaware'
  },
  {
    id: uuidv4(),
    name: 'Robert P. Casey Jr.',
    party: 'D',
    state: 'Pennsylvania'
  },
  {
    id: uuidv4(),
    name: 'Patrick J. Toomey',
    party: 'R',
    state: 'Pennsylvania'
  },
  {
    id: uuidv4(),
    name: 'Bill Cassidy',
    party: 'R',
    state: 'Louisiana'
  },
  {
    id: uuidv4(),
    name: 'John Kennedy',
    party: 'R',
    state: 'Louisiana'
  },
  {
    id: uuidv4(),
    name: 'Susan M. Collins',
    party: 'R',
    state: 'Maine'
  },
  {
    id: uuidv4(),
    name: 'Angus S. King Jr.',
    party: 'I',
    state: 'Maine'
  },
  {
    id: uuidv4(),
    name: 'John Cornyn',
    party: 'R',
    state: 'Texas'
  },
  {
    id: uuidv4(),
    name: 'Ted Cruz',
    party: 'R',
    state: 'Texas'
  },
  {
    id: uuidv4(),
    name: 'Catherine Cortez Masto',
    party: 'D',
    state: 'Nevada'
  },
  {
    id: uuidv4(),
    name: 'Jacky Rosen',
    party: 'D',
    state: 'Nevada'
  },
  {
    id: uuidv4(),
    name: 'Kevin Cramer',
    party: 'R',
    state: 'North Dakota'
  },
  {
    id: uuidv4(),
    name: 'John Hoeven',
    party: 'R',
    state: 'North Dakota'
  },
  {
    id: uuidv4(),
    name: 'Mike Crapo',
    party: 'R',
    state: 'Idaho'
  },
  {
    id: uuidv4(),
    name: 'James E. Risch',
    party: 'R',
    state: 'Idaho'
  },
  {
    id: uuidv4(),
    name: 'Steve Daines',
    party: 'R',
    state: 'Montana'
  },
  {
    id: uuidv4(),
    name: 'Jon Tester',
    party: 'D',
    state: 'Montana'
  },
  {
    id: uuidv4(),
    name: 'Tammy Duckworth',
    party: 'D',
    state: 'Illinois'
  },
  {
    id: uuidv4(),
    name: 'Richard J. Durbin',
    party: 'D',
    state: 'Illinois'
  },
  {
    id: uuidv4(),
    name: 'Joni Ernst',
    party: 'R',
    state: 'Iowa'
  },
  {
    id: uuidv4(),
    name: 'Chuck Grassley',
    party: 'R',
    state: 'Iowa'
  },
  {
    id: uuidv4(),
    name: 'Dianne Feinstein',
    party: 'D',
    state: 'California'
  },
  {
    id: uuidv4(),
    name: 'Alex Padilla',
    party: 'D',
    state: 'California'
  },
  {
    id: uuidv4(),
    name: 'Deb Fischer',
    party: 'R',
    state: 'Nebraska'
  },
  {
    id: uuidv4(),
    name: 'Ben Sasse',
    party: 'R',
    state: 'Nebraska'
  },
  {
    id: uuidv4(),
    name: 'Kirsten E. Gillibrand',
    party: 'D',
    state: 'New York'
  },
  {
    id: uuidv4(),
    name: 'Charles E. Schumer',
    party: 'D',
    state: 'New York'
  },
  {
    id: uuidv4(),
    name: 'Lindsey Graham',
    party: 'R',
    state: 'South Carolina'
  },
  {
    id: uuidv4(),
    name: 'Tim Scott',
    party: 'R',
    state: 'South Carolina'
  },
  {
    id: uuidv4(),
    name: 'Margaret Wood Hassan',
    party: 'D',
    state: 'New Hampshire'
  },
  {
    id: uuidv4(),
    name: 'Jeanne Shaheen',
    party: 'D',
    state: 'New Hampshire'
  },
  {
    id: uuidv4(),
    name: 'Martin Heinrich',
    party: 'D',
    state: 'New Mexico'
  },
  {
    id: uuidv4(),
    name: 'Ben Ray Luján',
    party: 'D',
    state: 'New Mexico'
  },
  {
    id: uuidv4(),
    name: 'Mazie K. Hirono',
    party: 'D',
    state: 'Hawaii'
  },
  {
    id: uuidv4(),
    name: 'Brian Schatz',
    party: 'D',
    state: 'Hawaii'
  },
  {
    id: uuidv4(),
    name: 'Cindy Hyde-Smith',
    party: 'R',
    state: 'Mississippi'
  },
  {
    id: uuidv4(),
    name: 'Roger F. Wicker',
    party: 'R',
    state: 'Mississippi'
  },
  {
    id: uuidv4(),
    name: 'James M. Inhofe',
    party: 'R',
    state: 'Oklahoma'
  },
  {
    id: uuidv4(),
    name: 'James Lankford',
    party: 'R',
    state: 'Oklahoma'
  },
  {
    id: uuidv4(),
    name: 'Tim Kaine',
    party: 'D',
    state: 'Virginia'
  },
  {
    id: uuidv4(),
    name: 'Mark R. Warner',
    party: 'D',
    state: 'Virginia'
  },
  {
    id: uuidv4(),
    name: 'Mark Kelly',
    party: 'D',
    state: 'Arizona'
  },
  {
    id: uuidv4(),
    name: 'Kyrsten Sinema',
    party: 'D',
    state: 'Arizona'
  },
  {
    id: uuidv4(),
    name: 'Amy Klobuchar',
    party: 'D',
    state: 'Minnesota'
  },
  {
    id: uuidv4(),
    name: 'Tina Smith',
    party: 'D',
    state: 'Minnesota'
  },
  {
    id: uuidv4(),
    name: 'Patrick J. Leahy',
    party: 'D',
    state: 'Vermont'
  },
  {
    id: uuidv4(),
    name: 'Bernard Sanders',
    party: 'I',
    state: 'Vermont'
  },
  {
    id: uuidv4(),
    name: 'Mike Lee',
    party: 'R',
    state: 'Utah'
  },
  {
    id: uuidv4(),
    name: 'Mitt Romney',
    party: 'R',
    state: 'Utah'
  },
  {
    id: uuidv4(),
    name: 'Edward J. Markey',
    party: 'D',
    state: 'Massachusetts'
  },
  {
    id: uuidv4(),
    name: 'Elizabeth Warren',
    party: 'D',
    state: 'Massachusetts'
  },
  {
    id: uuidv4(),
    name: 'Roger Marshall',
    party: 'R',
    state: 'Kansas'
  },
  {
    id: uuidv4(),
    name: 'Jerry Moran',
    party: 'R',
    state: 'Kansas'
  },
  {
    id: uuidv4(),
    name: 'Mitch McConnell',
    party: 'R',
    state: 'Kentucky'
  },
  {
    id: uuidv4(),
    name: 'Rand Paul',
    party: 'R',
    state: 'Kentucky'
  },
  {
    id: uuidv4(),
    name: 'Jeff Merkley',
    party: 'D',
    state: 'Oregon'
  },
  {
    id: uuidv4(),
    name: 'Ron Wyden',
    party: 'D',
    state: 'Oregon'
  },
  {
    id: uuidv4(),
    name: 'Lisa Murkowski',
    party: 'R',
    state: 'Alaska'
  },
  {
    id: uuidv4(),
    name: 'Dan Sullivan',
    party: 'R',
    state: 'Alaska'
  },
  {
    id: uuidv4(),
    name: 'Jon Ossoff',
    party: 'D',
    state: 'Georgia'
  },
  {
    id: uuidv4(),
    name: 'Raphael G. Warnock',
    party: 'D',
    state: 'Georgia'
  },
  {
    id: uuidv4(),
    name: 'Gary C. Peters',
    party: 'D',
    state: 'Michigan'
  },
  {
    id: uuidv4(),
    name: 'Debbie Stabenow',
    party: 'D',
    state: 'Michigan'
  },
  {
    id: uuidv4(),
    name: 'Jack Reed',
    party: 'D',
    state: 'Rhode Island'
  },
  {
    id: uuidv4(),
    name: 'Sheldon Whitehouse',
    party: 'D',
    state: 'Rhode Island'
  },
  {
    id: uuidv4(),
    name: 'Mike Rounds',
    party: 'R',
    state: 'South Dakota'
  },
  {
    id: uuidv4(),
    name: 'John Thune',
    party: 'R',
    state: 'South Dakota'
  },
  {
    id: uuidv4(),
    name: 'Marco Rubio',
    party: 'R',
    state: 'Florida'
  },
  {
    id: uuidv4(),
    name: 'Rick Scott',
    party: 'R',
    state: 'Florida'
  },
  {
    id: uuidv4(),
    name: 'Richard C. Shelby',
    party: 'R',
    state: 'Alabama'
  },
  {
    id: uuidv4(),
    name: 'Tommy Tuberville',
    party: 'R',
    state: 'Alabama'
  }
]

const getBackgroundColorForSenator = (party) => {
  if (party === 'D') {
    return '#007FFF';
  } else if (party === 'R') {
    return '#f88379'
  }

  return 'none';
}

const SenatorsList = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {listOfSenators.map((senator) =>
            <ListItem style={{ backgroundColor: getBackgroundColorForSenator(senator.party), marginBottom: '4px' }} disablePadding key={senator.id}>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary={`(${senator.party}) ${senator.name} - ${senator.state}`} />
              </ListItemButton>
            </ListItem>)}
        </List>
      </nav>
    </Box>
  );
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
      <div className={styles.container}>
        <Head>
          <title>Memorize The Senators</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Typography className={styles.quoteContainer}><q>Like sifting sand through a screen, we sift people. If you had been unable to control your impulses, like an animal, we could not let you live. You inherit too much power.</q><i>- Reverend Mother Mohiam, Dune</i></Typography>
          <br />
          <br />
          <SenatorsList />
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
