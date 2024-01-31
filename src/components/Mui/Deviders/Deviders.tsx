import { Section } from "../../Section/Section";
import styles from './Deviders.module.scss';
import { Box, Button, Chip, Divider, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";


export const Deviders = () => {
  return (
    <Section>
      <div>
        <h4>Deviders</h4>

        <div className={styles.container}>
            <div className={styles.card}>
                <h6>Title</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate.</p>
                <Grid marginTop={1}>
                  <Divider sx={{bgcolor: "black"}} variant="fullWidth" />
                  <br />
                  <Divider sx={{bgcolor: "black"}} variant="inset" />
                  <br />
                  <Divider sx={{bgcolor: "black"}} variant="middle" />
                  <br />
                  <Divider textAlign="center">
                    <Chip label="Center" />
                  </Divider>
                  <br />
                  <Divider textAlign="left">
                    <Chip label="Left" />
                  </Divider>
                  <br />
                  <Divider textAlign="right">
                    <Chip label="Right" />
                  </Divider>
                </Grid>
                
                <Grid container gap={1} className={styles.buttons} width={300}>
                  <Button color="warning">Button-1</Button>
                  <Button color="primary">Button-2</Button>
                  <Divider sx={{bgcolor: "black"}} orientation="vertical" flexItem variant="middle"/>
                  <Button color="secondary">Button-3</Button>
                </Grid>
            </div>
        </div>
      </div>
    </Section>
  )
}