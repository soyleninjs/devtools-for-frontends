import useDevtoolsSettings from '../hooks/useDevtoolsSettings'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/theme-monokai'

const DevtoolsCSSEditor = () => {
  const { devtoolsSettings, updateSettings } = useDevtoolsSettings()

  const handleEditorChange = (value) => {
    updateSettings({
      genericStyles: value
    })
  }

  return (
    <>
      <AceEditor
        mode='css'
        width='100%'
        height='100%'
        theme='monokai'
        value={devtoolsSettings.genericStyles}
        onChange={handleEditorChange}
        setOptions={{
          showGutter: false,
          tabSize: 2,
          useWorker: false
        }}
      />
    </>
  )
}

export default DevtoolsCSSEditor
