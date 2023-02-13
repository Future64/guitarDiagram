import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import ListSubheader from '@mui/material/ListSubheader'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor='grouped-native-select'>Altération</InputLabel>
        <Select
          native
          defaultValue=''
          id='grouped-native-select'
          label='Altération'
        >
          <option
            aria-label='None'
            value=''
          />
          <option value={1}>b</option>
          <option value={2}>#</option>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor='grouped-select'>Root Note</InputLabel>
        <Select
          defaultValue=''
          id='grouped-select'
          label='Root Note'
        >
          <option
            aria-label='None'
            value=''
          />
          <MenuItem value={1}>C</MenuItem>
          <MenuItem value={2}>C#/Db</MenuItem>
          <MenuItem value={3}>D</MenuItem>
          <MenuItem value={4}>D#/Eb</MenuItem>
          <MenuItem value={5}>E</MenuItem>
          <MenuItem value={6}>F</MenuItem>
          <MenuItem value={7}>F#/Gb</MenuItem>
          <MenuItem value={8}>G</MenuItem>
          <MenuItem value={9}>G#/Ab</MenuItem>
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={11}>A#/Bb</MenuItem>
          <MenuItem value={12}>B</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor='grouped-select'>Gammes/Arpèges</InputLabel>
        <Select
          defaultValue=''
          id='grouped-select'
          label='Gammes/Arpèges'
        >
          <option
            aria-label='None'
            value=''
          />
          <ListSubheader>Gammes et modes</ListSubheader>
          <MenuItem value={1}>Pentatonique mineure</MenuItem>
          <MenuItem value={2}>Pentatonique majeure</MenuItem>
          <MenuItem value={3}>Blues mineure</MenuItem>
          <MenuItem value={4}>Blues majeure</MenuItem>
          <MenuItem value={5}>Chromatique</MenuItem>
          <MenuItem value={6}>Unitonique</MenuItem>
          <MenuItem value={7}>Diminuée</MenuItem>
          <MenuItem value={8}>Augmentée</MenuItem>
          <MenuItem value={9}>Diatonique majeure</MenuItem>
          <MenuItem value={10}>Diatonique mineure</MenuItem>
          <MenuItem value={11}>Ionienne</MenuItem>
          <MenuItem value={12}>Dorienne</MenuItem>
          <MenuItem value={13}>Phrygien</MenuItem>
          <MenuItem value={14}>Lydien</MenuItem>
          <MenuItem value={15}>Mixolydien</MenuItem>
          <MenuItem value={16}>Éolien</MenuItem>
          <MenuItem value={17}>Locrien</MenuItem>
          <MenuItem value={18}>Mineur Harmonique</MenuItem>
          <MenuItem value={19}>Locrien #6</MenuItem>
          <MenuItem value={20}>Locrien #5</MenuItem>
          <MenuItem value={21}>Dorien #4</MenuItem>
          <MenuItem value={22}>Phrygien dominant</MenuItem>
          <MenuItem value={23}>Lydien #2</MenuItem>
          <MenuItem value={24}>7ème mode mineur Harmo</MenuItem>
          <MenuItem value={25}>Mineur Melodique</MenuItem>
          <MenuItem value={26}>Dorien #2</MenuItem>
          <MenuItem value={27}>Lydien augmentée</MenuItem>
          <MenuItem value={28}>Lydien b7 (Bartok)</MenuItem>
          <MenuItem value={29}>Mixolydien b6</MenuItem>
          <MenuItem value={30}>Locrien #2</MenuItem>
          <MenuItem value={31}>Superlocrien</MenuItem>

          <ListSubheader>Accords et arpèges</ListSubheader>
          <MenuItem value={32}>Triade majeure</MenuItem>
          <MenuItem value={33}>Triade mineure</MenuItem>
          <MenuItem value={34}>Triade augmentée</MenuItem>
          <MenuItem value={35}>Triade diminuée</MenuItem>
          <MenuItem value={36}>Triade sus2</MenuItem>
          <MenuItem value={37}>Triade sus4</MenuItem>
          <MenuItem value={38}>Tetracorde M7</MenuItem>
          <MenuItem value={39}>Tetracorde m7</MenuItem>
          <MenuItem value={40}>Tetracorde 7</MenuItem>
          <MenuItem value={41}>Tetracorde M7b5</MenuItem>
          <MenuItem value={42}>Tetracorde m7b5</MenuItem>
          <MenuItem value={43}>Tetracorde 7b5</MenuItem>
          <MenuItem value={44}>Tetracorde 7#5</MenuItem>
          <MenuItem value={45}>Tetracorde M7#5</MenuItem>
          <MenuItem value={46}>Tetracorde m7#5</MenuItem>
          <MenuItem value={47}>Tetracorde 6</MenuItem>
          <MenuItem value={48}>Tetracorde m6</MenuItem>
          <MenuItem value={49}>Tetracorde 9</MenuItem>
          <MenuItem value={50}>Tetracorde m9</MenuItem>
          <MenuItem value={51}>Tetracorde M9</MenuItem>
          <MenuItem value={52}>Tetracorde 9b5</MenuItem>
          <MenuItem value={53}>Tetracorde m9b5</MenuItem>
          <MenuItem value={54}>Tetracorde M9b5</MenuItem>
          <MenuItem value={55}>Tetracorde 9#5</MenuItem>
          <MenuItem value={56}>Tetracorde m9#5</MenuItem>
          <MenuItem value={57}>Tetracorde M9#5</MenuItem>
          <MenuItem value={58}>Tetracorde 11</MenuItem>
          <MenuItem value={59}>Tetracorde m11</MenuItem>
          <MenuItem value={60}>Tetracorde M11</MenuItem>
          <MenuItem value={61}>Tetracorde 13</MenuItem>
          <MenuItem value={62}>Tetracorde m13</MenuItem>
          <MenuItem value={63}>Tetracorde M13</MenuItem>
          <MenuItem value={64}>Tetracorde 13b9</MenuItem>
          <MenuItem value={65}>Tetracorde m13b9</MenuItem>
          <MenuItem value={66}>Tetracorde M13b9</MenuItem>
          <MenuItem value={67}>Tetracorde 13#9</MenuItem>
          <MenuItem value={68}>Tetracorde m13#9</MenuItem>
          <MenuItem value={69}>Tetracorde M13#9</MenuItem>
          <MenuItem value={70}>Tetracorde 13b5</MenuItem>
          <MenuItem value={71}>Tetracorde m13b5</MenuItem>
          <MenuItem value={72}>Tetracorde M13b5</MenuItem>
          <MenuItem value={73}>Tetracorde 13#5</MenuItem>
          <MenuItem value={74}>Tetracorde m13#5</MenuItem>
          <MenuItem value={75}>Tetracorde M13#5</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor='grouped-select'>Affichage</InputLabel>
        <Select
          defaultValue=''
          id='grouped-select'
          label='Affichage'
        >
          <option
            aria-label='None'
            value=''
          />
          <MenuItem value={1}>Nom de notes</MenuItem>
          <MenuItem value={2}>Degrées</MenuItem>
          <MenuItem value={3}>Intervales</MenuItem>
          <MenuItem value={3}>Positions des doigts</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
