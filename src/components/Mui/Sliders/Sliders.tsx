import { Slider, Stack } from '@mui/material';
import styles from './Sliders.module.scss';
import { LowPriority, Money, PriorityHigh, VolumeDown, VolumeUp, Wallet } from '@mui/icons-material';
import { useState } from 'react';
import { Section } from '../../Section/Section';

export const Sliders = () => {
  const [volume, setVolume] = useState<number | number[]>(10);
  const [range, setRange] = useState<number | number[]>([10, 90]);
  const [geld, setGeld] = useState<number | number[]>(4300);

  const [isRange, setIsRange] = useState<boolean>(false);

  const handleVolumeChange = (event: Event, value: number | number[]) => {
    setVolume(value);
  };

  const handleRangeChange = (event: Event, value: number | number[]) => {
    setRange(value);
  };

  function valuetext(value: number) {
    setGeld(value);
    return String(value);
  }

  const marks = [
    {
      value: 3000,
      label: '3000$',
    },
    {
      value: 7000,
      label: '7000$',
    },
    {
      value: 15000,
      label: '15000$',
    },
    {
      value: 20000,
      label: '20000$',
    },
  ];

  return (
    <Section>
      <div className={styles.wrapper}>
        <h6>Slider's</h6>

        <div className={styles.container}>
          <Stack direction="row" gap={2}>
            <Stack
              direction="row"
              gap={2}
              alignItems="center"
              sx={{width: 300}}
            >
              <VolumeDown />
              <Slider
                defaultValue={10}
                value={volume}
                onChange={(event, newValue) => handleVolumeChange(event, newValue)}
              />
              <VolumeUp />
            </Stack>

            <Stack
              direction="row"
              gap={2}
              alignItems="center"
              sx={{width: 300}}
            >
              <LowPriority />
              <Slider
                size='small'
                valueLabelDisplay={isRange ? 'on' : 'off'}
                value={range}
                onChange={(event, newValue) => handleRangeChange(event, newValue)}
                onMouseDown={() => setIsRange(true)}
                onMouseUp={() => setIsRange(false)}
              />
              <PriorityHigh/>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            sx={{width: 650}}
          >
            <Money />
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1000}
              marks={marks}
              min={10}
              max={20000}
            />
            <span>{geld}</span>
          </Stack>
        </div>
      </div>
    </Section>
  )
}