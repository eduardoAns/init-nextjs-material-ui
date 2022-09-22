import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';


import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import { UIContext } from '../../context/ui';

interface NavProps {
    name: string;
    icon: JSX.Element;
    link: string;
}


const menuItems: NavProps[] = [

    {
        name: 'Inbox',
        icon: <InboxOutlinedIcon />,
        link: '/inbox'
    },{
        name: 'Sent',
        icon: <MailOutlineOutlinedIcon />,
        link: '/sent'
    },{
        name: 'Drafts',
        icon: <MailOutlineOutlinedIcon />,
        link: '/drafts'
    },{
        name: 'Trash',
        icon: <InboxOutlinedIcon />,
        link: '/trash'
    }]


export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu  } = useContext( UIContext );


    return (
        <Drawer
            anchor="left"
            open={ sidemenuOpen }
            onClose={ closeSideMenu }
        >
            <Box sx={{ width: 250 }}>

                <Box sx={{ padding:'5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map( ({name, icon}) => (
                            <ListItem button key={ name }>
                                <ListItemIcon>
                                    { icon }                                
                                </ListItemIcon>
                                <ListItemText primary={ name } />
                            </ListItem>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map( ({name, icon}) => (
                            <ListItem button key={ name }>
                                <ListItemIcon>
                                    { icon }                                
                                </ListItemIcon>
                                <ListItemText primary={ name } />
                            </ListItem>
                        ))
                    }
                </List>

            </Box>
            
        </Drawer>
    )
};
