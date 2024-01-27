import { Add, Mail, Remove, ShoppingCart, Topic } from "@mui/icons-material";
import { Section } from "../../Section/Section";
import { Badge, Box, Button, ButtonGroup, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Switch, ToggleButton, ToggleButtonGroup } from "@mui/material";
import styles from './Badges.module.scss';
import React, { useState } from "react";

type TVertical = 'left' | 'right'

type TPosition = {
  horizontal: TVertical,
  vertical: 'top' | 'bottom',
}

export const Badges = () => {
  const [mails, setMails] = useState<number>(0);
  const [isVisible, setIsvisible] = useState<boolean>(true);
  const [position, setPosition] = useState<TPosition>({vertical: 'top', horizontal: 'right'});

  const decreaseHandler = () => {
    setMails((current) => current += 1);
  }

  const increaseHandler = () => {
    setMails((current) => Math.max(current -= 1, 0));
  }

  const horizontalHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: any  = event.target;
    setPosition((current) => ({...current, horizontal: value}));
  }

  const verticalHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: any  = event.target;
    setPosition((current) => ({...current, vertical: value}));
  }

  return (
    <Section>
      <div>
        <h4>Badges</h4>

        <Box
          className={styles.container}
          display="flex"
          flexDirection="row"
        >
          <Grid
            container
            gap={1}
            direction="row"
            flexDirection="column"
            alignItems="center"
            width="min-content"
            justifyContent="flex-start"
          >
            <Box component="div" display="flex" gap={2}>
              <Badge badgeContent={mails} max={10} color="secondary">
                <Mail/>
              </Badge>

              <ButtonGroup>
                <Button size="small" onClick={decreaseHandler}>
                  <Add/>
                </Button>

                <Button size="small" onClick={increaseHandler}>
                  <Remove/>
                </Button>
              </ButtonGroup>

              {[1,1,1,1,1,1,1,1,1].map((_) => (
                <Badge
                  badgeContent={mails}
                  overlap="circular"
                  max={10}
                  color="secondary"
                  anchorOrigin={{horizontal: position.horizontal, vertical: position.vertical}}
                >
                  <Mail/>
                </Badge>
              ))}
            </Box>

            <Box component="div" display="flex" gap={2} alignItems="center">
              <Badge
                color="secondary"
                variant="dot"
                invisible={!isVisible}
              >
                <ShoppingCart />
              </Badge>

              <FormControlLabel
                label="Show?"
                control={
                  <Switch
                    defaultChecked
                    value={isVisible}
                    onChange={() => setIsvisible((current) => !current)}
                  />
                }
              />

              <Box display="flex">
                <RadioGroup onChange={verticalHandler}>
                  <FormControlLabel
                    label="Top"
                    value="top"
                    control={<Radio checked={position.vertical === 'top'}/>}
                  />

                  <FormControlLabel
                    label="Bottom"
                    value="bottom"
                    control={<Radio checked={position.vertical === 'bottom'}/>}
                  />
                </RadioGroup>

                <RadioGroup onChange={horizontalHandler}>
                  <FormControlLabel
                    label="Left"
                    value="left"
                    control={<Radio checked={position.horizontal === 'left'} />}
                  />

                  <FormControlLabel
                    label="Right"
                    value="right"
                    control={<Radio checked={position.horizontal === 'right'}/>}
                  />
                </RadioGroup>
              </Box>
            </Box>
          </Grid>
        </Box>
      </div>
    </Section>
  )
}