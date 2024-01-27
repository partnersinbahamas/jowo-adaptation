import { Avatar, AvatarGroup, Badge, Box, Stack } from "@mui/material";
import { Section } from "../../Section/Section";
import { deepPurple, green, lightGreen, red } from "@mui/material/colors";
import { Delete, Folder } from "@mui/icons-material";
import styles from './Avarats.module.scss';
import me from '../../../icons/my-avatar.png';

export const Avarats = () => {
  return (
    <Section>
      <div>
        <h4>Avarats</h4>

        <div className={styles.container}>
          <Stack direction="row" spacing={1}>
            <Avatar alt="Denys Bokov" src={me} sx={{width: 70, height: 70}} />
            <Avatar alt="Denys Bokov" src={me} />
            <Avatar
              alt="Denys Bokov"
              sx={{bgcolor: lightGreen[700]}}
            >
              DB
            </Avatar>

            <Avatar
              alt="Denys Bokov"
              sx={{bgcolor: red[200]}}
              variant="square"
            >
              <Delete color="error"/>
            </Avatar>

            <Avatar
              alt="folder"
              sx={{bgcolor: deepPurple[200]}}
              variant="rounded"
            >
              <Folder color="secondary" />
            </Avatar>
          </Stack>

          <Stack direction="row" spacing={4}>
            <AvatarGroup max={4}>
              <Avatar alt="Denys Bokov" src={me} />
              <Avatar alt="Denys Bokov" src={me} />
              <Avatar alt="Denys Bokov" src={me} />
              <Avatar alt="Denys Bokov" src={me} />
              <Avatar alt="Denys Bokov" src={me} />
              <Avatar alt="Denys Bokov" src={me} />
              <Avatar alt="Denys Bokov" src={me} />
            </AvatarGroup>

            <AvatarGroup
              total={20}
              max={3}
            >
              <Avatar alt="Denys Bokov" src={me} />
              <Avatar alt="Denys Bokov" src={me} />
            </AvatarGroup>

            <Badge
              overlap="circular"
              anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
              badgeContent={
                <Box
                  width={12}
                  height={12}
                  sx={{bgcolor: green[500], borderRadius: 50}}
                />
              }
            >
              <Avatar alt="Denys Bokov" src={me}/>
            </Badge>
          </Stack>
        </div>
      </div>
    </Section>
  )
}