import '../style/Workspaces.css'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ReadMePage from '../pages/ReadMePage'
import WorkspacePage from '../pages/WorkspacePage'
import WorkspaceListPage from '../pages/WorkspaceListPage'

function Workspaces() {
  const navigate = useNavigate()

  return (
    <>
      <div className="Workspaces__header" onClick={() => navigate('/')}>
        Dosspace
      </div>
      <div className="Workspaces__content">
        <Routes>
          <Route path="/readme" element={<ReadMePage />} />
          <Route path="/workspace/:id" element={<WorkspacePage />} />
          <Route path="*" element={<WorkspaceListPage />} />
        </Routes>
      </div>
    </>
  )
}

export default Workspaces
