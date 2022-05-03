import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';

const Sidebar = ({ setMode, mode}) => {
  return (

    <Box 
    
    flex = {1}
    p = {2}
    sx = {{ display: { xs: "none", sm: "block"}}}

    >
      <Box position= "fixed">

      
      
        <List>

          {/* list item 1  */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#home">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>


          {/* list item 2  */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#pages">
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          {/* list item 3 */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#group">
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>


          {/* list item 4 */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#market">
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          {/* list item 5 */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#friend">
              <ListItemIcon>
                <EmojiPeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          {/* list item 6 */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#setting">
              <ListItemIcon>
                <SettingsApplicationsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          {/* list item 7 */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#profile">
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          {/* list item 8 */}
          <ListItem disablePadding>
            <ListItemButton component = "a" href = "#theme">
              <ListItemIcon>
                <DarkModeIcon/>
              </ListItemIcon>
              <Switch defaultChecked onChange = { (e)=> setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>


        </List>
      </Box>
    </Box>
  )
}

export default Sidebar