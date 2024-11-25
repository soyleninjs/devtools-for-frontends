import useDevtoolsSettings from '../hooks/useDevtoolsSettings'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/theme-monokai'

const ContentEditor = () => {
  const { devtoolsSettings, updateSettings } = useDevtoolsSettings()

  const handleEditorChange = (value) => {
    updateSettings({
      css: value
    })
  }

  return (
    <AceEditor
      mode='css'
      width='100%'
      height='200px'
      theme='monokai'
      value={devtoolsSettings.css}
      onChange={handleEditorChange}
      setOptions={{
        showGutter: true,
        tabSize: 2,
        useWorker: false
      }}
    />
  )
}

export default ContentEditor
