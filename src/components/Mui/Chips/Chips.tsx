import { Avatar, Chip, Grid } from "@mui/material";
import { Section } from "../../Section/Section";
import styles from './Chips.module.scss';
import { useState } from "react";
import { currencies } from "../../../helpers/variables";
import { TCurrency } from "../../types/Currency";
import { Done } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import me from '../../../icons/my-avatar.png';

type TNewCurrency = TCurrency & {
  selected: boolean;
}

export const Chips = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [visibleCurrencies, setVisibleCurrencies] = useState<TNewCurrency[]>(currencies.map((c) => ({...c, selected: false})));

  const onCurrenciesFiltering = (value: string) => {
    setVisibleCurrencies((current) => 
      [...current].filter((curr) => curr.value !== value),
    );
  }

  const onCurrenciesSelect = (value: string) => {
    setVisibleCurrencies((current) => 
      [...current].map((curr) => curr.value === value
        ? ({...curr, selected: !curr.selected})
        : curr
      ),
    );
  }

  return (
    <Section>
      <div>
        <h4>Chips</h4>

        <div className={styles.container}>
          <Grid container gap={1}>
            <Grid container gap={1}>
              <Grid item>
                <Chip label="Not clickable chip" />
              </Grid>

              <Grid item>
                <Chip
                  label={isClicked ? 'Clicked chip' : '-Clickable chip'}
                  variant="outlined"
                  onClick={() => setIsClicked((current) => !current)}
                />
              </Grid>

              <Grid item>
                <Chip label="Denys Bokov" avatar={<Avatar src={me}/>}/>
              </Grid>

              <Grid item>
                <Chip label="Denys Bokovgdajfhiufdhgerkygferwjsdfgkurefhgskjesrhkdfgjyh"/>
              </Grid>
            </Grid>

            <Grid container gap={1}>
              {visibleCurrencies.map((curr) => (
                <Chip
                  label={curr.label}
                  variant="outlined"
                  onDelete={() => onCurrenciesFiltering(curr.value)}
                  onClick={() => onCurrenciesSelect(curr.value)}
                  deleteIcon={curr.selected ? <Done /> : undefined}
                  sx={{bgcolor: curr.selected ? green[200] : undefined}}
                />
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    </Section>
  )
}