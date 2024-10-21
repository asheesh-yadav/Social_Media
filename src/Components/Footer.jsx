import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


export default function Footer() {

  const scrollToHeader = () => {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <>
      <footer style={{ padding: '20px', textAlign: 'center' }}>
        <div className="last-div">
          <div className="footer-item">
            <a href="#Header">
              <img className='upArrow'
                src="https://www.svgrepo.com/show/93813/up-arrow.svg"
                height="20px"
                alt="up-arrow" onClick={scrollToHeader}
              />
            </a>
            <AvatarGroup
               sx={{
                display :'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '100%',
                padding: '10px',  
                overflow: 'visible' 
              }}
              renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
              total={4251}
              max={6}
              spacing={6}  
            >
              <Avatar
                alt="Reny Sharp"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                sx={{ width: 70, height: 70 }}  
              />
              <Avatar
                alt="Travis Howard"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                sx={{ width: 60, height: 60 }}
              />
              <Avatar
                alt="Agnes Walker"
                src="https://randomuser.me/api/portraits/women/25.jpg"
                sx={{ width: 50, height: 50 }}
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://randomuser.me/api/portraits/men/5.jpg"
                sx={{ width: 40, height: 40 }}
              />
            </AvatarGroup>
            <hr />
            <p> &copy; 2024 - Developed by Ashish Yadav</p>
          </div>
        </div>
      </footer>
    </>
  );
}
