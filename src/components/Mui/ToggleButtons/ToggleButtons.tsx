import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import styles from './ToggleButtons.module.scss';
import { useState } from 'react';
import { CheckCircle, RadioButtonChecked, RadioButtonCheckedSharp, RadioButtonUnchecked, VerticalAlignBottom, VerticalAlignCenter, ViewList, ViewModule } from '@mui/icons-material';

type TLang = 'Vanila JS' | 'React' | 'Angular';
type TOrientation = 'vertical' | 'horizontal';

export const ToggleButtons = () => {
  const [lang, setLang] = useState<TLang>('React');
  const [orientation, setOrientation] = useState<TOrientation>('horizontal');
  const [isAllow, setIsAllow] = useState<boolean>(false);

  const langHandle = (event: React.MouseEvent, lang: TLang) => setLang(lang);
  const orientationHandle = (event: React.MouseEvent, orientation: TOrientation) => setOrientation(orientation);

  return (
    <div>
        <h6>Toggle buttons</h6>

      <div className={styles.container}>
        <Grid container justifyContent="space-between" flexDirection="row">
          <Grid item>
            <ToggleButtonGroup
              value={lang}
              orientation={orientation}
              onChange={(event, newLang) => langHandle(event, newLang)}
              exclusive
            >
              <ToggleButton value="Vanila JS">Vanila JS</ToggleButton>
              <ToggleButton value="React">React</ToggleButton>
              <ToggleButton value="Angular">Angular</ToggleButton>
            </ToggleButtonGroup>
          </Grid>

          <Grid item>
            <Grid container gap={1} flexDirection="column">
              <Grid item>
                <ToggleButtonGroup
                  value={orientation}
                  disabled={!isAllow}
                  onChange={(event, newOrientation) => orientationHandle(event, newOrientation)}
                  exclusive
                  orientation="vertical"
                >
                  <ToggleButton value="vertical">
                    <ViewList />
                  </ToggleButton>

                  <ToggleButton value="horizontal">
                    <ViewModule/>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item>
                <ToggleButton
                  value="check"
                  selected={isAllow}
                  onChange={() => setIsAllow((current) => !current)}
                >
                  {isAllow ? <RadioButtonChecked/> : <RadioButtonUnchecked/>}
                </ToggleButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}