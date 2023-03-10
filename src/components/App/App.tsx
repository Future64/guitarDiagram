import './App.scss'
import Guitar from '../Guitar/Guitar'
import { scales } from '../../data/scales'
import Select from '../Select/Select'

const App = () => {
  /* Commons options */
  let guitarDisplayType: string = 'fretboard' //'fretboard', 'diagramChords'
  let nbStrings: number = 6
  let nbFrets: number = guitarDisplayType === 'fretboard' ? 24 : 5
  let tuning: string[] = ['E', 'A', 'D', 'G', 'B', 'E']
  let enhamronics: string = '#' //'b', '#'
  let viewType: string = 'name' //'degree', 'interval', 'name'
  let clickableCase: boolean = true
  let guitarType: string = 'electric' //'electric', 'folk', 'classic', 'banjo', 'ukulele', 'electicBass', 'accousticBass', 'simple'
  let tone: string = 'electric' //'electric', 'folk', 'classic', 'banjo', 'ukulele', 'electicBass', 'accousticBass', 'simple'

  /* Fretboard options */
  let fretbordView: string = 'horizontal' //'vertical', 'horizontal'
  let fretboardType: string = 'right' //'right', 'left'
  let inlay: string = 'dot' //'dot', 'dot+nb', 'nb', 'empty'
  let rootNote: string = 'C'
  let scale: number[] | string[] = [0, 2, 4, 5, 7, 9, 11] //scales[0].melodicMinorScale
  let sclePosition: string = 'closed' //'closed', 'transversal'

  /* Diagram chords options */
  let diagramChordsFooterInfo: string = 'finger' // 'finger', 'range', 'name'
  let focusZone: number[] | string = [2, 6] // [caseStart, caseEnd], 'noFocus'
  let omitCase: string[] | string = 'none' //[string, note] -> ex:['str3', 'A'], none

  return (
    <div className='App'>
      <Select />
      <Guitar
        guitarDisplayType={guitarDisplayType}
        nbStrings={nbStrings}
        nbFrets={nbFrets + 1}
        tuning={tuning.reverse()}
        enhamronics={enhamronics}
        viewType={viewType}
        clickableCase={clickableCase}
        guitarType={guitarType}
        tone={tone}
        fretbordView={fretbordView}
        fretboardType={fretboardType}
        inlay={inlay}
        rootNote={rootNote}
        scale={scale}
        sclePosition={sclePosition}
        diagramChordsFooterInfo={diagramChordsFooterInfo}
        focusZone={focusZone}
        omitCase={omitCase}
      />
    </div>
  )
}

export default App
